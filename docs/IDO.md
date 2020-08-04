---
id: initialDODOOffering
title: Initial DODO Offering
sidebar_label: Initital DODO Offering
---

Initial DODO Offering (IDO) is a brand new asset issuing approach.

Unlike offering assets at CEX or other DEX, cost of offering assets at DODO is incredible cheap. It's totally free!

DODO employs a brand new algorithm called Proactive Market Maker (PMM). Normally the algorithm requires a price oracle to provide liquidity. But when there is no outside market, you could simply set the price oracle to a const price and start an initial DODO offering.

## All you need is your own token

Unlike AMM, DODO do not require quote token (for example, in ETH-USDC trading pair, USDC is quote token). The only thing you need to do is to deposit your own token to the pool. After deposit, PMM creates ask side depth. The more token you deposit, the better the liquidity is.

Because there is no quote token in the pool, there is no bid side depth. But, no need to worry. There is also no base token in the market and no one intends to sell.
If you are familiar with Auction, you may see IDO as another type of Auction. You're right! But that is not the full picture.

![](https://dodoex.github.io/docs/img/dodo_long_tail_1.jpeg)

Remember the const price you set in oracle? It would be the initial offering price. As users buy a token, the price rises and quote token flows into the pool. This amount of quote token produces bid side depth as a result. Maybe we could call it bidirectional auction 🤔

![](https://dodoex.github.io/docs/img/dodo_long_tail_2.jpeg)

Compared with AMM based platforms, issuing assets on DODO provides more benefits:

- Sell token from a given price without capital requirement
- Sufficient liquidity
- Flexible parameter (DIY your price curve)
