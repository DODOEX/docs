---
id: riskParameters
title: 风险参数
sidebar_label: 风险参数
---

## 抢跑

以下几个场景中，会在 DODO 上出现抢跑行为。

套利者监听预言机的报价，如果他们发现预言机价格会在下一个区块上涨，他们会在价格更新之前，通过支付更高的 gas 在 DODO 上购买资产。在价格更新后，立即出售资产。这会给流动性提供商带来损失，我们称之为套利损失。

这笔买卖看起来很赚，但实际上这样的套利机会很少，而且不一定有利可图。

首先，只有在价格大幅波动时，抢跑才有利可图。因为在 DODO 上每笔交易收取 0.3% 的手续费，如果通过搬砖进行套利买卖一笔需要缴纳 0.6% 的手续费。也就是说，如果预言机价格两次更新直接变化小于 0.6%，套利者根本没机会赚钱。

其次， DODO 使用 [Chainlink](https://feeds.chain.link/) 作为预言机。Chainlink 的价格是汇总 22 个独立喂价者的报价更新产生的。这意味着 DODO 上的价格变化是渐进的，不会轻易产生抢跑套利机会。 

话虽如此，尽管两次更新之间价格发生巨大变化的可能性很小，但并不是完全没可能。而且，套利者很擅长利用抢跑从系统获利。 DODO 团队进行了大量的回测，发现在绝大多数情况下，做市商的收益远远高于套利损失。

注意，在市场剧烈波动的时候，抢跑带来的套利损失会增多。我们建议用户在市场波动期间提出自己的资产以避免损失，根据自己的风险承担能力谨慎操作。

## 手续费费率

正如上面提到的，交易手续费可以阻止套利者通过抢跑获利，让流动性提供商避免承受套利损失。

那么问题是，交易手续费应该收取多少？降低手续费带来更多的交易，会提高流动性提供商的收益，同时也会提高套利损失的风险。另一方面，如果提高手续费，会降低套利损失的风险。如何平衡风险和收益非常关键。

由于市场波动与套利行为有关，所以手续费也应该基于市场情况进行微调。当市场稳定是，应该降低手续费来促进交易；当市场剧烈波动时，应该提高手续费。确定手续费费率是一个非常重要的治理事务，用户应该集体参与决定自己承担多少风险。

## 参数 k

另外一个重要的参数是 PMM 算法中的参数 k 。较小的 k 可以提供良好的流动性并提高交易量，同时会提高套利损失的风险。而较大的 k 会损害流动性降低交易量，同时减少套利损失的风险。所以，k 值也应该像手续费费率一样交给社区决策。
