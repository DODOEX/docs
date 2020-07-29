---
id: coreConcept
title: Core Concept
sidebar_label: Core Concept
---

## Base&Quote

Base 和 Quote 接下来会反复提及的两个概念。有两个很便捷的区分方法：

- 在交易中，我们经常提及价格，指的是一个 BASE 需要用多少 QUOTE 来交换。
- 在交易对中排在前面的是 BASE，后面的是 QUOT

例如 ETH-USDC 交易对，ETH 是 BASE，USDC 是 QUOTE

## PMM Working Status

The funding pool of DODO is described by four parameters:

- $B_0$ Base Token regression target
- $Q_0$ Quote Token regression target
- $B$ Base Token balance
- $Q$ Quote Token balance

Base token regression target is the total base token deposited by liquidity providers. And quote token regression target is the total quote token deposited by liquidity providers.

The price curve is given by the following formula:

$$P_{margin}=iR$$

R is defined as a piecewise function:

$$if \ B<B_0, \ R=1-k+(\frac{B_0}{B})^2k$$

$$if \ Q<Q_0, \ R=1/(1-k+(\frac{Q_0}{Q})^2k)$$

$$else \ R=1$$

According to the segment, PMM has three scenarios: equilibrium, shortage of Base Token, and shortage of Quote Token.

![](https://dodoex.github.io/docs/img/dodo_mode_switch.jpeg)

When there is no transaction, the capital pool is in equilibrium, and both Base Token and Quote Token are at their regression targets.

When a user sells Base Token, the Base Token balance of the capital pool is higher than the return goal, and the Quote Token balance is less than the return goal. At this time, the PMM algorithm will try to sell the excess Base Token to return the Quote Token balance to equilibrium.

When a user buys Base Token, the Quote Token balance in the capital pool is higher than the return goal, and the Base Token balance is less than the return goal. At this time, the PMM algorithm will try to sell the excess Quote Token to return the Base Token balance to equilibrium.

The parameter $R$ plays a role in facilitating regression in this process. The more the capital pool deviates from the equilibrium state, the more $R$ deviates from 1. When the price given by the PMM algorithm deviates from the market price, arbitrageurs tend to bring the capital pool return to equilibrium status.

## Liquidity provider fee

A small amount of fee will be charged from every trader. This fee is called liquidity provider fee and will be distributed to every liquidity provider based on his proportion of funding pool.

More specifically, liquidity provider fee is collected from what trader received and distributed to who offers this kind of asset to funding pool.

For example, when traders buy base token, liquidity provider fee will be chcarged as base token. And distributed among liquidity providers who provides base token to funding pool.

When traders sell base token, liquidity provider fee will be chcarged as quote token. And distributed among liquidity providers who provides quote token to funding pool.

## Maintainer fee

Maintainer fee is also collected from what trader received. This amount of fee will be transferd to maintainer directly. The maintainer may be the developer team, foundation or staking DAO.

At current, maintainer fee is 0.

## Withdraw Fee

As withdraw will change PMM price curve and harm the interests of other liquidity providers. DODO charges withdraw fee from liquidity providers who withdraw their assets and share it to all remaining liquidity providers.

:::important

Normally, withdraw fee is 0 or a super small partial of what you withdraw(<0.01%). Withdraw fee will increase significantly only when the funding pool suffer from a serious shortage of base(quote) token and the liquidity provider want to withdraw the precious remaining base(quote) token.

It is not so much punishment to who withdraws assets as it is protection to who left.

:::

## Deposit Reward

Reward happens when the funding pool faces a shortage of base(quote) token and you happen to replenish base(quote) token.
