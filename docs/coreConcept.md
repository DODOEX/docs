---
id: coreConcept
title: Core Concepts
sidebar_label: Core Concepts
---

## Base & Quote Tokens

`Base` and `quote` are two concepts that will be mentioned frequently. Two easy ways to distinguish between them are:

- In a trading pair, the `base` is always the token before the hyphen, and `quote` after
- In transactions, price refers to how many `quote` tokens are needed in exchange for one `base` token

For example, in the ETH-USDC trading pair, ETH is the `base` token and USDC is the `quote` token

## PMM Parameters

The funding pool of PMM is described by four parameters:

- $B_0$: base token regression target - total number of base tokens deposited by liquidity providers
- $Q_0$: quote token regression target - total number of quote tokens deposited by liquidity providers
- $B$: base token balance - number of base tokens currently in the pool
- $Q$: quote token balance - number of quote tokens currently in the pool

## PMM Pricing Formula

The PMM price curve is plotted by the following pricing formula:

$$P_{margin}=iR$$

Where $R$ is defined to be the piecewise function below:

$$if \ B<B_0, \ R=1-k+(\frac{B_0}{B})^2k$$

$$if \ Q<Q_0, \ R=1/(1-k+(\frac{Q_0}{Q})^2k)$$

$$else \ R=1$$,

$$i$$ is the market price provided by an oracle, and $$k$$ is a parameter in the range (0, 1).

## The Three Possible States in PMM

At any given time, PMM is in one of three possible states: equilibrium, base token shortage, and quote token shortage.

![](https://dodoex.github.io/docs/img/dodo_mode_switch.jpeg)

Initially, i.e. prior to any transaction, the capital pool is in equilibrium, and both base tokens and quote token are at their regression targets. That is, $B=B_0$ and $Q=Q_0$.

When a trader sells base tokens, the base token balance of the capital pool is higher than the base token regression target; conversely, the quote token balance is now lower than the quote token regression target. In this state, PMM will try to sell the excess base tokens, lowering the base token balance and increasing the quote token balance, in order to move this state back to the state of equilibrium.

When a trader buys base tokens, the quote token balance of the capital pool is higher than the quote token regression target; conversely, the base token balance is now lower than the base token regression target. In this state, PMM will try to sell the excess quote tokens, lowering the quote token balance and increasing the base token balance, in order to move this state back to the state of equilibrium.

The parameter $R$ in the pricing formula above assumes a critical role in facilitating this regression process. The more the capital pool deviates from the equilibrium state, the more $R$ deviates from `1`. When the price given by the PMM algorithm deviates from the market price, arbitrageurs step in to help bring the capital pool back to the equilibrium state.

## Liquidity Provider Fee

A small amount of transaction fee will be charged on every trade. This fee is called the liquidity provider fee and will be distributed to every liquidity provider based on their proportional stake in the capital pool.

More specifically, liquidity provider fees are collected from what buyers received and distributed to liquidity providers who supplied this kind of asset to the capital pool. In other words, liquidity providers are rewarded in the same asset denomination. 

For example, when traders buy ETH tokens with USDC tokens, liquidity provider fees will be charged in the form of ETH tokens, and distributed to liquidity providers who deposited ETH tokens into the capital pool.

When traders sell ETH tokens for USDC tokens, liquidity provider fees will be charged in the form of USDC tokens, and distributed to liquidity providers who deposited USDC tokens into the capital pool.

:::note
Base and quote tokens have different returns on investments (ROI) in PMM's funding pool.
:::

## Maintainer fee

A maintainer fee is also collected from what buyers received, and will be directly transferred to the maintainer. The maintainer may be a development team, a foundation, or a staking decentralized autonomous organization (DAO).

Currently, the maintenance fee on DODO is 0.

## Withdrawal Fee

A withdrawal will change the PMM price curve and may harm the interests of other liquidity providers. DODO charges a withdrawal fee from liquidity providers who withdraw their assets and distribute it to all remaining liquidity providers.

:::important

Normally, the withdrawal fee is 0 or an extremely small percentage (<0.01%) of what you withdraw. The withdrawal fee will increase significantly only if the funding pool suffers from a serious shortage of either base or quote tokens and liquidity providers intend to withdraw the type of token in shortage.

The withdrawal fee serves as a protection mechanism for liquidity providers who maintain their supplies of liquidity and contribute to the sustainability and overall health of the DODO platform.

:::

## Deposit Rewards

Rewards will be distributed to those who make a deposit of base(quote) tokens when the capital pool faces a shortage of base(quote) tokens.

In the [next section](./math), we will explain the math behind these core concepts. 

## Flexibility and $k$, the "Liquidity Parameter"

Last but not least, we will introduce the DODO's "liquidity parameter", $$k$$. The parameter $$k$$ gives DODO the flexibility to handle different market situations. 

![](https://dodoex.github.io/docs/img/dodo_k.jpeg)

When $$k$$ is $$0$$, DODO naively sells or buys at market price, as shown by the flat, blue line. As $$k$$ increases, DODO’s price curve becomes more “curved”, but, consequently, liquidity becomes increasingly jeopardized, because more funds are placed far away from market price and are thus underutilized or not utilized at all. When $$k$$ increases to $$1$$, the flat section near the market price is completely eliminated and the curve essentially becomes a standard AMM curve, which Uniswap uses.

Normally, $$k$$ is recommended to be a relatively small value, such as $$0.1$$, which could provide liquidity 10 times better than the standard AMM algorithm.


