---
id: businessDataDashbord
title: Dashbord statistical rule description
sidebar_label: Dashbord statistical rule description
---

## Dashbord statistical rule description
[Dodoex Dashbords](https://app.dodoex.io/dashboard)

### Related Subgraph data statistics table description
 - All of the data for the core metric comes from the Subgraph, which gets its data from the events thrown when the contract is invoked.
 - When it comes to the statistics of date dimension in Subgraph, the international standard time is used to make the data statistics for one day. Therefore, when the horizontal axis is the date on Dashbord, it represents the date of the international standard time.
 - There are several basic pools when we calculate the dollar-related price. The first is the stablecoin trading pool. We take the trading pool with the highest locked position as the benchmark pool and calculate the dollar price of the stablecoin according to the weight of the trading volume. In addition, the chain's base token-to-stablecoin trading pool will also be considered as the base pool to offer dollar prices.

### 核心指标
 - We use PairdayData to track daily data for each transaction and TokenDayData to track daily trading data for each token.
 - For some pools with poor liquidity, we used filtering conditions to discard their data, and pools with current cumulative trading times less than 10 or cumulative trading volume less than $1,000 were not included in the statistics.

### 交易对数据
 - The trade pair data provides information about the trade pairs that have been traded at Dodo. Since Dodo intelligent routing helps users find the best price, the volume in the external pool is user-initiated transactions that do not enter the Dodo flow pool.

