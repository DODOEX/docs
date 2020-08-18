---
id: advantages
title: The DODO Advantage
sidebar_label: The DODO Advantage
---

## Overview

DODO is powered by a ground-breaking algorithm called **Proactive Market Maker (PMM)**. PMM leverages price oracles to retrieve accurate market prices of assets as input. It then aims to provide sufficient liquidity near the market price for every asset. The result is that liquidity decreases rapidly when far away from the market price. The following graphs compare the price curves of DODO (PMM) and Uniswap (AMM).

With everything else fixed, it is clear that the PMM curve is significantly flatter than the AMM curve near the market price, indicating higher fund utilization and lower slippage. Prices provided by PMM are more favorable than AMM.

![](https://dodoex.github.io/docs/img/dodo_curve.jpeg)

As the market price changes, AMM passively relies on arbitrage trading to change prices. On the other hand, PMM proactively shifts the price curve in the same direction to ensure that the section in the vicinity of the market price remains flat. This ensures the constant provision of sufficient liquidity.

![](https://dodoex.github.io/docs/img/dodo_curve_move.jpeg)

PMM outperforms AMM solutions in several important aspects.

## High Fund Utilization

As seen in the above graphs, PMM, like AMMs, provides liquidity in the price range of zero to positive infinity, but the PMM price curve is significantly flatter in the area near the oracle (market) price. That is, most of the funds are gathered near the market price, which allows for more active, frequent trading, increasing fund utilization.

## Single Risk Exposure

In the price curves above, each price curve consists of two parts: the bidding side to the left and the asking side to the right. These two parts may have different depth, or liquidity, resulting in what is known as the [bid-ask spread](https://en.wikipedia.org/wiki/Bid%E2%80%93ask_spread).

![](https://dodoex.github.io/docs/img/dodo_segment.jpeg)

In PMM, the asking liquidity is solely determined by the amount of base token in the pool, and the bidding liquidity is solely determined by the amount of quote tokens in the pool. It allows the base and quote pools to have different sizes, and thus allows liquidity providers to deposit any amount of either quote or base tokens, rather than both (like Uniswap). DODO Liquidity providers deposit what they already have, nothing more.

:::note

The design is intuitive, because when you take an asking order, you take liquidity providers’ base tokens and the quote tokens are irrelevant.

:::

## No Impermanent Loss

But what about impermanent loss, i.e. how does PMM ensure that liquidity providers get what they deposited when they withdraw their tokens? The answer is by encouraging arbitrage trading. When individual traders buy base tokens, PMM slightly increases the price to make it more profitable for arbitrageurs to sell base tokens. In PMM, arbitrage trading makes sure that the number of tokens in the pool is always roughly equal to the number of tokens deposited by liquidity providers. This scheme effectively mitigates impermanent loss for liquidity providers, making liquidity provision on DODO a low-risk affair.

## Next Generation of Liquidity Provision

Liquidity is the most important resource in the DeFi world, because it is the foundational element in all DeFi projects. There are two major proven approaches to decentralized liquidity provision today:

- Algorithmic market makers (e.g. Uniswap)
- Orderbook-based order matching (e.g. dYdX)

However, they are both flawed.

- Compared to centralized exchanges, algorithmic market makers cannot provide sufficient liquidity for mainstream assets. In addition, for niche, long-tail assets, AMM can only provide very basic liquidity support
- Orderbook-based order matching relies on human market makers to mirroring centralized exchanges liquidity. Effective market makers are expensive, and very few DEX teams can afford them. In addition, this kind of liquidity is difficult to be filled by smart contracts due to the human elements involved, significantly limiting the number of use cases for DeFi practitioners

PMM is also an algorithmic market maker algorithm, but it fundamentally differs from other approaches by mitigating and eliminating their disadvantages and amplifying their advantages. PMM provides sufficient and contract-fillable liquidity on-chain for all assets, empowering DeFi users to take advantage of composability.

<!-- # DODO的优势是什么

流动性是Defi世界最重要的资源，也是所有项目正常运行的基础。当今Defi领域只有两种被验证过的流动性解决方案：

- 算法做市商（例如uniswap）
- 由做市商映射中心化交易所流动性（例如dydx）

但他们各自都有致命缺陷:

- 算法做市商无法提供充沛的流动性，与中心化交易所体验相差甚远。只能在长尾币上提供最基础的流动性支持。
- 映射中心化交易所流动性依赖很多中心化服务，并且价格昂贵，只有少数团队能够承担。并且，此种流动性很难被智能合约调用，使用场景十分狭窄。

而DODO得益于全新的主观做市商算法，在避免这两个缺陷的同时，聚集二者的优点。即充沛且完全在链上的流动性，可以为所有defi项目提供流动性，成为defi世界重要的基础设施。 -->
