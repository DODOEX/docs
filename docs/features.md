---
id: features
title: DODO's Features
sidebar_label: DODO's Features
---

## Overview

The underlying mechanism of DODO is a brand new algorithm called Proactive Market Maker (PMM). The PMM algorithm accepts the market price provided by Oracle as input. It focuses on providing sufficient liquidity near the market price, and the liquidity decreases rapidly when being faraway from the market price.

![](https://dodoex.github.io/docs/img/dodo_curve.jpeg)
![](https://dodoex.github.io/docs/img/dodo_curve_move.jpeg)

The figure above compares the price curve of DODO (using PMM) and Uniswap (using AMM). It can be found that near the market price (the so-called Tape), prices provided by PMM are more favorable than AMM. When the market price moves, unlike AMM which relies on arbitrage trading to change prices, PMM actively moves the price curve. As a result, the price curve remains flat near the new market price.

## High Capital Utilization

As mentioned above, PMM provides liquidity in the price range of zero to infinity, just like AMM. But the price curve is very stable in the area near the oracle price, while the curve changes sharply when being faraway from the oracle price. In another words, most of the funds are gathered near the market price. Active trading near the market price allows these funds to be traded frequently, and therefore the funding utilization rate is extremely high.

## Single Risk Exposure

The PMM price curve consists of two parts, bidding and asking. The asking liquidity is only determined by the amount of base token in the pool, while the bidding liquidity by the amount of quote tokens.

It allows the base and quote pools to have different sizes, and therefore allows liquidity providers deposit any amount of quote or base token. In a nutshell, users can deposit whatever tokens they hold.

:::note

The design is very easy to understand, because when you take an asking order, you take up liquidity providers’ base token and it has nothing to do with the quote token.

:::

## No impermanent loss

The question is the same as how to guarantee liquidity providers withdraw what they have deposited. The key here is arbitrageurs. When users buy base token, PMM slightly increases the price to attract arbitrageurs to sell base token. This arbitrageur behavior ensures that the balance in the pool is always equal to the amount that liquidity providers have staked.

## Why do we think DODO is the next generation liquidity solution

Liquidity is the most important resource in the Defi world and the basis for the operation of all projects. There are only two proven liquidity solutions in the Defi field today:

- Algorithmic market maker (e.g. uniswap)
- Orderbook-based order matching (e.g. dydx)

But each of them has drawbacks:

- Algorithmic market makers cannot provide sufficient liquidity on mainstream tokens compared with centralized exchanges. Only the most basic liquidity support can be provided on the long tail coin.
- Orderbook-based order matching relays on market makers mirroring centralized exchanges liquidity. Experienced market makers are expensive, and only a few teams can afford them. Moreover, this kind of liquidity is difficult to be filled by smart contracts and thus, the use cases are very limited.

DODO benefits from the proactive market maker algorithm, which is also a kind of algorithmic market maker but avoids these two limitations while possessing the advantages of both. That is, sufficient and contract-fillable liquidity on chain for any defi projects. We have strong confidence that DOOD will become an important infrastructure in the defi world.

<!-- # DODO的优势是什么

流动性是Defi世界最重要的资源，也是所有项目正常运行的基础。当今Defi领域只有两种被验证过的流动性解决方案：

- 算法做市商（例如uniswap）
- 由做市商映射中心化交易所流动性（例如dydx）

但他们各自都有致命缺陷:

- 算法做市商无法提供充沛的流动性，与中心化交易所体验相差甚远。只能在长尾币上提供最基础的流动性支持。
- 映射中心化交易所流动性依赖很多中心化服务，并且价格昂贵，只有少数团队能够承担。并且，此种流动性很难被智能合约调用，使用场景十分狭窄。

而DODO得益于全新的主观做市商算法，在避免这两个缺陷的同时，聚集二者的优点。即充沛且完全在链上的流动性，可以为所有defi项目提供流动性，成为defi世界重要的基础设施。 -->
