---
id: privatePool
title: DODO Private Pool
sidebar_label: DODO Private Pool
---

## What is DODO Private Pool?

DODO Private Pool (DPP) is a product that is geared towards professional market makers with special requirements that cannot be satisfied by the DODO Vending Machine (DVM). It is extremely easy to use and gives market makers the ability to do the following:

1. Make one-sided deposits/withdrawals (DVM requires two-sided liquidity provision/removal).

2. Change the pricing curve at any time (DVM’s pricing curve cannot be modified after creation).

3. Have liquidity everywhere in the price range from zero to infinity.

As we mentioned before, the [Proactive Market Making (PMM) algorithm](./pmm) is essentially an elegant generalization of the orderbook matching trade settlement system. PMM is easy-to-understand, lightweight, and cheap in terms of operational cost, while at the same time retaining the flexibility of orderbook matching.

DPP is a product that embodies PMM’s flexibility and configurability well. Let’s use a market depth chart to demonstrate how DPP works and the various use cases it can support and enable.

![](https://dodoex.github.io/docs/img/dpp_1.png)

### Use Case 1: Avoiding Downside Risk

When market conditions change, market makers need to take measures to avert and reduce downside risk, which is the estimated amount of loss in value of their assets that could be sustained as a result of market movements. On DPP, they can do so easily by removing some of their bid-side liquidity (i.e. withdrawing the tokens opposite the token asset that is expected to depreciate in value).

![](https://dodoex.github.io/docs/img/dpp_2.png)

### Use Case 2: Active Price Discovery

You are a market maker for the apple market. You feel that apples have a lot of potential and their price will go up. Not wanting to sell apples at a low price, you have two options on AMMs:

1. Buy apples yourself - you need a lot of capital to do this.

2. Reduce the size of the pool by withdrawing apples from the market - market liquidity will be negatively affected.

Neither option is ideal, because you do not have the power to actively influence the price discovery process within the AMM framework. The process of determining the price of apples happens passively as buyers and sellers interact. You believe you have a sound market thesis, but unfortunately you don’t get to apply it.

DPP drastically improves the market making experience for market makers. It allows them to intervene and adjust the market price directly. This is what we call active price discovery, because market makers actively get involved in the price discovery process, which renders it more efficient.

### Use Case 3: Constant Price Market

You just issued a new stablecoin, X, that is pegged to 1 USDT. To create a liquid stablecoin market for X and USDT, you can add some USDT and a much larger amount of X to DPP, and set DPP’s k value to 0. This market will guarantee that 1 X is always swapped for exactly 1 USDT.

You could also set k to a very small non-zero value (e.g. k = 0.001) to get an “approximately constant” pricing curve as seen on Curve.

### Use Case 4: Reversion to Traditional AMM

Set k = 1 and deposit both base and quote tokens with a price ratio i to get a market that behaves and performs in the exact same manner as traditional AMMs. For example, if the initial price i is 1 base token = 3 quote tokens, then simply deposit base and quote tokens at a 1:3 ratio.

### Use Case 5: Market Value Management

If the main liquidity of the market is provided by you, you can set the price and depth as needed. This allows you to provide price support and curb speculation.
