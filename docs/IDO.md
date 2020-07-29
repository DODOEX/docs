---
id: initialDODOEXOffering
title: Initial DODOEX Offering
sidebar_label: Initital DODOEX Offering
---

Initial DODOEX Offering (IDO) is a brand new asset issuing approach. This section would show you the most charming features of IDO.

DODOEX uses a brand new algorithm called Proactive Market Maker (PMM). Normally the algorithm requires a price oracle to provide market price. But when there is no outside market, you could simply set the price oracle to a const price and start an initial DODOEX offering.

## All you need is your own token

Unlike AMM, DODOEX do not require quote token (for example, in ETH-USDC trading pair, USDC is quote token). The only thing you need to do is depositing your own token to the pool. After deposit, PMM creates ask side depth. The more token you deposit, better the liquidity.

Because there is no quote token in the pool, there is no bid side depth. But, no need to worry, there is also no base token in the market and no one has the demand to sell.

If you are familiar with Auction, you may regard IDO as another type of Auction. You're right! But, not all.

![](https://dodoex.github.io/docs/img/dodo_long_tail_1.jpeg)

Remember the const price you set in oracle? It would be the initial offering price. As users buy token, the price raises and quote token flows into the pool. This amount of quote token produces bid side depth naturally. Maybe we could call it bidirectional auction 🤔

![](https://dodoex.github.io/docs/img/dodo_long_tail_2.jpeg)

Compared with issuing asset on AMM, PMM benefits you:

- Sell token from a given price without capital requirement
- Sufficient liquidity
- Flexible parameter (DIY your price curve)
