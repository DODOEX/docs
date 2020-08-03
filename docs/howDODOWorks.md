---
id: howDODOWorks
title: How DODO Works
sidebar_label: How DODO Works
---

## Overview

The underlying mechanism of DODO is a brand new algorithm called PMM. The PMM algorithm accepts the market price provided by Oracle as input. It focuses on providing sufficient liquidity near the market price, and the liquidity decreases rapidly when far away from the market price.

![](https://dodoex.github.io/docs/img/dodo_curve.jpeg)
![](https://dodoex.github.io/docs/img/dodo_curve_move.jpeg)

The figure above compares the price curve of DODO and Uniswap. It can be found that near the market price (the so-called Tape), prices provided by PMM are more favorable than AMM. When the market price moves, unlike AMM which relies on arbitrage trading to change prices, PMM actively moves the price curve. As a result of it, the price curve remains smooth near the new market price.

## High Capital Utilization

As mentioned above, PMM provides liquidity in the price range of zero to infinity, just like CFMM. But the price curve is very smooth in the area near the oracle price, while the curve is very sharp when far away from the oracle price. Put it in another way, most of the funds are gathered near the market price. Active trading near the market price allows these funds to be changed hands frequently, and therefore the utilization rate is quite high.

## 单风险暴露（Single Risk Exposure）

The PMM price curve consists of two parts, bidding and asking. The asking liquidity is only determined by the amount of base token in the pool, while the bidding liquidity by the amount of quote tokens.

It allows the base and quote pools to have different sizes, and therefore allows liquidity providers deposit any amount of quote or base token.

:::note

The design is very easy to understand, because when you take an asking order, you take up liquidity providers’ base token and it has nothing to do with the quote token.

:::

## 避免无常损失（No impermanent loss)

The question is the same as how to guarantee liquidity providers withdraw what they have deposited. The key here is arbitrageurs. When users buy base token, PMM slightly increases the price to attract arbitrageurs to sell base token. And this arbitrageur behavior helps to maintain the balance in the pool is always equal to the amount that liquidity providers have staked.
