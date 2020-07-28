---
id: pmm
title: Algorithm
---

# DODO PMM 算法详解

DODO 是新一代由算法驱动的纯链上流动性提供方案。很多人误以为这是对 AMM(Auto Market Maker)算法的改进，事实上 DODO 提出了全新的算法，其运作机制与 AMM 截然不同，我们将其命名为 PMM(Proactive Market Maker)算法。

本文将全面对算法进行解析，尤其是其链上实现版本。

## 资金池回归模型

PMM 的资金池由四个参数描述

- $B_0$ BaseToken 回归目标
- $Q_0$ QuoteToken 回归目标
- $B$ BaseToken 余额
- $Q$ QuoteToken 余额

> 以 ETH-USDT 交易对为例，BaseToken 指 ETH，QuoteToken 指 USDT

价格曲线由下面的公式给出

$$P_{margin}=iR$$
$$if \\ B<B_0, \\ R=1-k+(\frac{B_0}{B})^2k$$
$$if \\ Q<Q_0, \\ R=1/(1-k+(\frac{Q_0}{Q})^2k)$$
$$else \\ R=1$$

可以发现 PMM 有三种工作场景：均衡、BaseToken 匮乏、QuoteToken 匮乏。

- 没有用户交易时，资金池处于均衡状态，BaseToken 和 QuoteToken 都处于其回归目标
- 当用户卖出 BaseToken 时，资金池 BaseToken 余额高于回归目标，而 QuoteToken 余额小于回归目标。此时 PMM 算法会尝试卖出多余的 BaseToken，以使 QuoteToken 余额回归均衡状态。
- 当用户买入 BaseToken 时，资金池 QuoteToken 余额高于回归目标，而 BaseToken 余额小于回归目标。此时 PMM 算法会尝试卖出多余的 QuoteToken，以使 BaseToken 余额回归均衡状态。

![](/Users/leimingda/Documents/dodo/docs/img/img.006.jpeg)

参数$R$在此过程中起到了促进回归的作用，资金池偏离均衡状态越多，$R$越偏离 1，PMM 算法给出的价格便越偏离市场价，吸引套利者帮助资金池回归均衡状态。

至此我们介绍完毕了 PMM 算法的运作机制，下一节将进入合约实现环节。

## 交易者

对交易者来说，最重要的就是平均成交价。平均成交价是边际价格$P_{margin}$的积分

### 单一工作场景下的价格

#### BaseToken 匮乏场景

![](/Users/leimingda/Documents/dodo/docs/img/img.002.jpeg)

$$\Delta Q =\int^{B_2}_{B_1}P_{margin}dB= \int^{B_2}_{B_1}(1-k)i+i(\frac{B_0}{B})^2kdB $$
$$= i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

平均成交价为：

$$P=\frac{\Delta Q}{B_2-B_1}=i*(1-k+k\frac{B_0^2}{B_1B_2})$$

我们发现，平均成交价只与成交前后系统的状态有关，所以买卖两种操作的价格计算方式是一样的——都是对$P_{margin}$进行积分。

#### QuoteToken 匮乏场景

为了简化用户理解，我们只提供 sellBaseToken 和 buyBaseToken 两个接口，下面来推导 quoteToken 匮乏场景下，给出想要买卖的 baseToken 数量，如何计算价格。

$$\Delta B = \frac{1}{i}(Q_2-Q_1)*(1-k+k\frac{Q_0^2}{Q_1Q_2})$$

已知$\Delta B, Q_0, Q_1$，求解$Q_2$，这是一个二次方程，转化为标准形式后：

$$(1-k)Q_2^2+(\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B)Q_2-kQ_0^2=0$$

$$let \\ a=1-k, \\ b=\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B, \\ c=-kQ_0^2$$

因为$Q_2>=0$，所以舍掉一个负数根，得到$Q_2$的公式为

$$Q_2=\frac{-b+\sqrt{b^2-4ac}}{2a}$$

在$\Delta B>0$时，$Q_2>Q_1$; 在$\Delta B<0$时，$Q_2<Q_1$; 在$\Delta B=0$时，$Q_2=Q_1$

### Oracle 价格变化的影响

当系统不处于均衡态时，Oracle 变化将带来盈利或亏损。举例来讲，假设现在系统处于 BaseToken 匮乏场景，Oracle 价格提高，将导致多余的 QuoteToken 无法买入足够的 BaseToken，提供 BaseToken 的 lp 出现亏损。同理如果 Oracle 价格下降，多余的 QuoteToken 可以买入更多的 BaseToken，使 BaseToken 余额超过回归目标，提供 BaseToken 的 lp 有盈余。

为了计算新 Oracle 价格下的回归目标，我们进行如下推导：

$$\Delta Q = i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

回归时，$B_2=B_0$，整理出关于$B_0$的二次方程

$$\frac{k}{B_1}B_0^2+(1-2k)B_0-[(1-k)B_1+\frac{\Delta Q}{i}] = 0$$

舍弃掉负数解，得到$B_0$的解为

$$B_0=B_1+B_1*\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

这里$\Delta Q=Q-Q_0$. 可以严格证明，在$\Delta Q \ge 0$时，$B_0\ge B_1$. 这一性质非常重要，因为它保证了 BaseToken 余额和 QuoteToken 余额不会同时大于回归目标，或同时小于回归目标。这样一来，PMM 只会在文章开头提到的三种状态中转换。

同理我们直接给出$Q_0$的计算公式

$$Q_0=Q_1+Q_1*\frac{\sqrt{1+\frac{4k\Delta B i}{Q_1}}-1}{2k}$$

### 跨工作场景时的价格

由于 PMM 给出的价格曲线是分段的，如果一笔交易跨越了工作场景（比如在 BaseToken 匮乏时用户卖出大量 BaseToken，直接进入 QuoteToken 匮乏场景），就需要分段计算价格，并累计。

这一累计要求精度很高，但计算机有精度损失，所以处理起来要非常小心。合约里提供了三种工作场景下的买卖函数，总计 6 个。其组合方式是关键。

## 流动性提供商

流动性提供商又称为 lp(liquidity provider)。lp 有两种操作，充值&提现。

在 BaseToken 匮乏场景下充提 BaseToken，或在 QuoteToken 匮乏场景下充提 QuoteToken，都会使得改变价格曲线。这要求我们合理地处理充提操作，以使资金池保持健康和公平。

### 充值

我们以 BaseToken 匮乏场景为例，研究充值如何影响 lp 收益。

根据上文推导出的$B_0$计算公式

$$B_0=B_1+B_1*\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

充值$b$后，$B_1$增加$b$，而$B_0$的增量大于$b$.就说明充值使得所有提供 BaseToken 的 lp 都获得了收益。这一收益的来源是，充值使价格曲线变得平缓，同样数量的$\Delta Q$可以购买更多 BaseToken。

在这种情况下，lp 一旦充值就会获得收益，我们称之为“充值奖励”，因为充值使得系统更接近均衡状态了。这笔奖励的本质来源是交易者付出的滑点。

但“充值奖励”并不是无风险套利机会，请继续阅读下一节。

### 提现

与上一节同理，提现$b$后，$B_1$减少$b$，而$B_0$减少的量多于$b$。说明提现使所有 BaseToken 的 lp 都蒙受损失。这一损失的来源是，提现使价格曲线变得陡峭，同样数量的$\Delta Q$只能购买更少的 BaseToken。

PMM 算法规定，这种情况下提现需要缴纳一笔“流动性罚金”。罚金数额等于提币后造成的 lp 损失，这笔罚金将直接充入资金池，分给所有未撤资的 lp。

回到上一节中的情况，如果 lp 充值后立刻提现，罚金将大于收益，所以不会有无风险套利的机会。这一设计倾向于未撤资 lp，可以最大限度留存资金。

> 值得注意的是，不论是充值奖励，还是流动性罚金，都只有在系统偏离均衡状态较远，且充提金额很大的时候才显著。
> 普通用户往往感知不到这一收益（损失）的存在。当然也欢迎羊毛党，在系统偏离均衡时充值赚取充值奖励，在系统回归平衡时提现来避免流动性罚金
