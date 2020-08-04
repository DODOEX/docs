---
id: coreConcept
title: Core Concept
sidebar_label: Core Concept
---

## Base&Quote

`Base` and `Quote` are two concepts that will be mentioned frequently. Two easy ways to distinguish between them:

- In transactions, we often mention price, which refers to how much `QUOTE` is needed to in exchange for a `BASE`.
- In the trading pair, `BASE` is always before the hyphen while `QUOTE` is after.

For example, in the ETH-USDC trading pair, ETH is `BASE` and USDC is `QUOTE`

## PMM Working Status

The funding pool of PMM is described by four parameters:

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

According to the segment, PMM has three scenarios: equilibrium, shortage of Base, and shortage of Quote.

![](https://dodoex.github.io/docs/img/dodo_mode_switch.jpeg)

When there is no transaction, the capital pool is in equilibrium, and both Base Token and Quote Token are at their regression targets.

When a user sells Base Token, the Base Token balance of the capital pool is higher than the regression target, and the Quote Token balance is less than the regression target. At this time, the PMM algorithm will try to sell the excess Base Token to return the Quote Token balance to equilibrium.

When a user buys Base Token, the Quote Token balance in the capital pool is higher than the regression target, and the Base Token balance is less than the regression target. At this time, the PMM algorithm will try to sell the excess Quote Token to return the Base Token balance to equilibrium.

The parameter $R$ plays a role in facilitating regression in this process. The more the capital pool deviates from the equilibrium state, the more $R$ deviates from `1`. When the price given by the PMM algorithm deviates from the market price, arbitrageurs tend to bring the capital pool return to equilibrium status.

## Liquidity provider fee

A small amount of fee will be charged from each and every trade. This fee is called liquidity provider fee and will be distributed to every liquidity provider based on his/her proportional stake in the capital pool.

More specifically, liquidity provider fee is collected from what trader received and distributed to who offers this kind of asset to the capital pool.

For example, when traders buy base tokens, liquidity provider fees will be charged in the form of base tokens, and distributed to liquidity providers who have provided base token to the capital pool.

When traders sell base tokens, liquidity provider fees will be charged in the form of quote tokens and distributed to liquidity providers who have provided quote tokens.

:::note
Base and Quote token have different ROI in PMM's funding pool.
:::

## Maintainer fee

Maintainer fee is also collected from what the trader received. And it will be transferred to the maintainer directly. The maintainer may be a developer team, a foundation or a staking DAO.

Currently, the maintenance fee is 0.

## Withdrawal Fee

A withdrawal will change the PMM price curve and may harm the interests of other liquidity providers. DODO charges withdrawal fee from liquidity providers who withdraw their assets and share it to all remaining liquidity providers.

:::important

Normally, the withdrawal fee is 0 or a relatively small portion(<0.01%) of what you withdraw. Withdrawal fee will increase significantly only when the funding pool suffers from a serious shortage of base(quote) token and liquidity providers intend to withdraw the this type of token.

Withdraw fee is a protection to liquidity providers who stand with us.

:::

## Deposit Reward

Rewards will be given to those who make a deposit of base(quote) token when the capital pool faces a shortage of base(quote) token
