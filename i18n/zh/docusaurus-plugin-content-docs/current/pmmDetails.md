---
id: pmmDetails
title: PMM核心概念
sidebar_label: PMM核心概念
---

## Base Token 和 Quote Token

`Base` 和 `quote` 是两个被反复提到的概念，有两个方法可以区分他们：

- 在交易对中，base 是连字符前边的代币，quote 是后边的。
- 在交易中，价格往往是表示多少个 quote token 可以买 1 个 base token 。

比如，在 ETH - USDC 交易对中， ETH 是 base token , quote token。

## PMM 参数

PMM 算法中有 4 个参数：

- $B_0$: base token 回归目标值 - 做市商总充值
- $Q_0$: quote token 回归目标值 - 做市商总充值
- $B$: base token 资产 - 当前资产池 base token 中的数量
- $Q$: quote token 资产 - 当前资产池中 quote token 中的数量

## PMM 定价公式

PMM 的价格曲线对应的公式为:

$$P_{margin}=iR$$

$R$ 是由以下公式确定:

$$如果 B<B_0, 则 R=1-k+(\frac{B_0}{B})^2k$$

$$如果 Q<Q_0, 则 R=1/(1-k+(\frac{Q_0}{Q})^2k)$$

$$其他情况 R=1$$,

$$i$$ 是由预言机提供的市价， $$k$$ 是一个在 0 到 1 范围内的参数。

## PMM 算法中的三种状态

在任意时间， PMM 算法不外乎三种状态，base token 和 quote token 一样；base token 短缺；quote token 短缺。

![](https://dodoex.github.io/cn/img/dodo_mode_switch.jpeg)

在最初没有任何交易的时候，资产池处于平衡的状态。base token 和 quote token 位于回归目标。即 $B=B_0$ and $Q=Q_0$.

当交易者售出 base token 时，base token 资产池的余额高于回归目标；相反 quote token 资产池余额低于回归目标；在这种情况下，PMM 将会尝试出售多出的 base token ，让资产池回归到平衡状态。

同理，当交易者购入 base token 时，quote token 资产池中的余额会高于回归目标；base token 余额低于回归目标。PMM 将会尝试出售多出的 quote token，让资产池回归平衡状态。

参数 $R$ 会在回归过程起到非常关键的作用。资产池越偏离平衡状态，$R$ 就越偏离`1`。当 PMM 给出的价格与市价存在差价时，套利者就可以来搬砖帮助资产池回到平衡状态。

## 流动性付费

每笔交易将会被收取少量的手续费，这笔手续费就是流动性付费，会按照资产比例分给做市商。

换句话来说，交易者交手续费，做市商参与分成。举个例子，在 ETH - USDC 交易市场，用户买入 ETH，需要交少量 ETH 作为手续费，这部分 ETH 将会分给做市商。当用户卖出 ETH 时，需要交少量 USDC 作为手续费，这部分 USDC 将会被分给做市商。

`注意：在资产池中，base token 和 quote token 收益率是不同的。`

## 运营手续费

运营手续费同样是由交易者缴纳，分给运营者，有可能是开发团队，创始团队，DAO。

目前，DODO 不收取运营手续费。

## 提现手续费

从资产池中提取资金，将会影响其他做市商的收益。DODO 将会对提取资金收取手续费，并分给剩余做市商。

`注意：通常提取手续费为 0 或者小于 0.01%；仅当某种资产严重短缺，做市商尝试提取该种资产时，提现手续费会大幅提高。提现手续费的设计是为了保护那些长期帮助 DODO 健康发展的做市商。`

## 充值奖励

资产短缺时，向资产池充值的做市商会获得奖励。

[下一部分](./math)，我们讲详细解说这些核心观念背后的数学原理。

## 灵活性、流动性参数

下面我们要介绍流动性参数 $k$ ，这个参数让 DODO 可以灵活应对不同的市场情况。

![](https://dodoex.github.io/cn/img/dodo_k.jpeg)

当 $$k$$ 等于 $$0$$ 时, DODO 会以市价正常交易（图中蓝线）；当 $$k$$ 变大时，DODO 的价格曲线会变得更陡，这是因为更多的市场资金会被放到远离市价的位置，资金利用率很低。当 $$k$$ 涨到 $$1$$ 时，市价附近的平滑曲线就会完全消失，这时候价格曲线和 Uniswap 的 AMM 曲线一样了。

通常，我们建议将 $$k$$ 设置为一个比较小的值，比如 $$0.1$$，这时候可以提供比 AMM 好 10 倍的流动性。
