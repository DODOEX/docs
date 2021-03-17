---
id: initialDODOOffering
title: Initial DODO Offering
sidebar_label: Initial DODO Offering
---

Initial DODO Offering (IDO) is a brand new approach to crypto asset issuance. Instead of paying exorbitant listing fees to get listed on CEXs or other DEXs, it is **literally free** to offer assets on DODO!

Normally, the PMM algorithm requires a price oracle to provide liquidity, but when there is no external market (which is usually the case when you are just starting your asset offering efforts), you can simply set the oracle price to a constant and start an initial DODO offering. 

## All You Need is Your Own Token

As discussed in previous sections, DODO, unlike AMM, does not require quote tokens. The only thing you need to do is to deposit your own tokens to the pool. After your token deposit, PMM creates ask side depth on its own. The more tokens you deposit, the better the liquidity.

Because there are no quote tokens in the pool, there is no bid side depth, but there is no need to worry. There are also no base tokens in the market and no one is selling either. IDO might feel somewhat similar to an auction, but there are some important differences.

![](https://dodoex.github.io/docs/img/dodo_long_tail_1.jpeg)

Remember the constant price you set for the oracle? That price would be the initial offering price. When a trader buys your tokens, the price rises and quote tokens start flowing into the pool. These quote tokens then produce bid side depth as a result. Maybe we could call IDO a bidirectional auction 🤔

![](https://dodoex.github.io/docs/img/dodo_long_tail_2.jpeg)

Compared to AMM-based platforms, asset issuance on DODO provides more benefits:

- Sell tokens from an arbitrary price of your choice with zero capital requirement
- Sufficient and contract-fillable liquidity
- Flexible parameters (design your price curve by fine-tuning the parameters)
