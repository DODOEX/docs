---
id: riskParameters
title: Risk Parameters
sidebar_label: Risk Parameters
---

## Front Running

Front running on DODO could occur in the following scenario.

Arbitrageurs listen for oracle price updates transactions. If they see that the oracle price for an asset will go up in the next block, they will buy asset on DODO before the price update by paying higher gas prices. And sell the asset immediately after the oracle price has been updated. This will result in a loss for liquidity providers, and this loss is referred to as arbitrage loss.

This might seem like a big deal, but the truth is, such opportunities are few and far between, and not necessarily profitable for arbitrageurs.

First of all, front running is only profitable when the price fluctuates significantly. This is because DODO charges a 0.3% transaction fee per trade, thus buying and selling assets once incurs a 0.6% transaction fee overall. Therefore, if the price discrepancy between the oracle updates is less than 0.6%, front running is not profitable at all for arbitrageurs.

Secondly, DODO uses [Chainlink](https://feeds.chain.link/) as its oracle of choice. The Chainlink price oracle provides price updates by aggregating updates from 22 independent price feeders. This means that price changes on DODO are usually gradual and thus not susceptible to front running.

With that said, although the probability of a significant price change between updates is low, it _will_ happen, and arbitrageurs looking to extract value from the system _will_ take advantage of front running. The DODO team conducted extensive backtesting and discovered that in the overwhelming majority of cases, profit from market making far outweighs arbitrage loss for liquidity providers.

Please note that arbitrage loss due to front running will increase significantly during drastic market fluctuations. The DODO team recommends withdrawing your assets during fluctuations to avert the risk and proceeding with caution depending on your risk profile.

## Fee Percentage

As mentioned above, the transaction fee deters arbitrageurs from extracting value from the system via front running, protecting liquidity providers from arbitrage loss.

The question is, what should the transaction fee percentage be? Lowering the percentage leads to more trading, potentially increasing profit for liquidity providers, but also elevating risk of arbitrage loss. On the other hand, increasing the percentage lowers the risk of arbitrage loss, but also reduces profit for liquidity providers. It is crucial to strike a reasonable balance between risk and profit.

Since market fluctuations have a bearing on arbitrageur behaviors, the fee percentage should also be fine-tuned based on market changes. The fee percentage should be low to facilitate more trading when the market is relatively stable, and high when the market is fluctuating. Determining the appropriate fee percentage is an important **governance** issue, and users should collectively have a say in how much risk they are willing to take on.

## k

Another important parameter is k from the PMM pricing formula. A small k provides good liquidity and increase trading volume, but increases the risk of arbitrage loss; whereas a large k hurts liquidity and decreases trading volume, but reduces the risk of arbitrage loss. Therefore, similar to the fee percentage above, the value of k should be **governed and determined** by the users.
