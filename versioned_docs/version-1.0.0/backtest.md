---
id: backtest
title: Backtest Report
sidebar_label: Backtest
---

## Background

PMM stands for Proactive Market Maker, which is essentially a quantitative trading strategy used by liquidity providers (LP). To help LP understand ROI of PMM, we’ve performed a backtest to demonstrate the performance of PMM in different market environments.

## Method

Evaluation of PMM focuses on these two aspects: proﬁt and loss.

The proﬁt for LP is turnover rate multiplied by fee rate.

While the loss has to be explained in two perspectives, counterparty risk and arbitrage trading.

Counterparty risk can be ignored in this case, because PMM has built a mechanism to limit this risk. In addition, the risk comes from trades by normal users, which are almost random and are statistically balanced against.

Arbitrage trading is inevitable and contributes most of the loss, as onchain oracle price is always delayed from market.

Hence, in the following backtesting, we focus on these two key values:

- Turnover rate (profit wise)
- Arbitrage loss (loss wise)

## Backtest

### Profit evaluation

Assumptions:

- Our pool size is 1/10 of uniswap's pool size
- Base Token and Quote Token have the same value
- PMM parameter k=0.1
- Fee rate 0.3%

Those assumptions are not set arbitrarily. Under this condition, PMM could provide the same liquidity as Uniswap, and hence it's reasonable to assume PMM has the same trading volume as Uniswap. However, because of aggregators, it's more realistic to assume PMM has half of the trading volume of Uniswap. According to [history data](https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc), PMM daily turnover rate is about 100% and ROI is 0.3%.

:::note
The backtest report is written at 2020/7/19. We use uniswap's historical data from 2020/6/1 to 2020/7/18.
:::

### Loss evaluation

It's more complex to evaluate arbitrage loss, as no PMM-like algorithm has been deployed before. The best alternative is backtest with the most stringent standards. below is the assumptions:

- Onchain oracle price is always delayed from market price
- Oracle price updates whenever deviates from market price by more than 0.5% (chainlink threshold)
- Arbitrageurs always have enough funding and never miss a trade
- The external cost of arbitrageurs is 0.2% (including CEX fees and gas cost)

We backtested using BTC price from Apr-2018 to Apr-2020 with 1 minute interval. Aggregate profit and loss, we got the following conclusions.

![](https://dodoex.github.io/docs/img/dodo_backtest.png)

## Conclusion

The backtesting has covered most cases of the market environment, both the bull and bear market, even including the black swan event on 12th March. We concluded that:

- In most market environments, the fee income is sufficient to cover arbitrage losses and provides a very high rate of return (~80% APR)
- When the market changes volatilely, despite of rises or falls, LP will lose a significant amount of money

In brief, PMM makes proﬁts when the market is flat, while makes losses when volatile.

### Advantage & Disadvantage

Most quant strategies make proﬁts only when market price goes up or down, and there is nothing to do when the market is flat. In contrast, PMM can make considerable proﬁts when the price is nearly flat. Furthermore, unlike AMM, PMM never requires LP to deposit base and quote assets at a certain ratio. Instead, LP could deposit any amount of any asset as they want. As a result, PMM can be a supplement to the original strategies when the market is not volatile.

Nevertheless, we have to point out its disadvantages. As the old saying goes, there is no free lunch. When the market is volatile, LP suffers from significant loss. LP should make a balance between risks and beneﬁts. So we recommend traders withdraw their assets when they predict the market to be volatile. As a decentralized project, what we can do is very limited. But we would deﬁnitely try our best to adjust system parameters to help LP, especially when black swan event happens.

In addition, one of the inherent drawbacks of backtesting is it cannot simulate 100% of the real trading. But to mitigate this risk, we have performed the backtesting with the most conservative assumptions. Still, LP should determine to what extent they trust the backtesting result.

### FAQ about backtest

1. Where does the turnover rate data come from?

   We have counted the historical data of [Uniswap](https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc) in the past month. Because the capital utilization rate of PMM algorithm is very high, the capital utilization rate can reach ten times that of Uniswap. So the actual turnover rate is also much higher than Uniswap.

2. Why do you use BTC price for backtesting?

   Because we did not find ETH price data of high-precision. We would be very grateful if someone could provide ETH price historical data with 1min interval or more frequent. But it is reasonable to use BTC price to estimate loss, because ETH and BTC prices are highly correlated.

3. How does the arbitrage work?

   The arbitrage is carried out when arbitrageurs notice that the price provided by the PMM is more beneficial to them than the market price, i.e. the difference between the PMM and the market price is less than its comprehensive arbitrage cost (PMM Fee + Arbitrage Cost)

4. Given that Chainlink's BTC Oracle accuracy rate is 1%, why is it set to 0.5% here?

   First of all, Chainlink will increase the accuracy rate of BTC Oracle to 0.5% soon. Secondly, PMM will focus on ETH trading pair for now. And the accuracy rate of Chainlink’s ETH Oracle is 0.5%.

5. Does the size of the funding pool have an impact on the backtest?

   Yes, it does. ROI will not be so good if the pool size is too small. We need enough liquidity to compete with other liquidity sources. Actually, the 1/10 of Uniswap pool size required for backtesting is able to produce competitive liquidity, which equals only \$900,000.

6. How about the gas cost

   Swap between two standard ERC20 token cost 145,000 ~ 175,000 gas. The gas cost is slightly higher than uniswap(~100,000 gas), but significantly lower than other protocols. For example, kyber costs ~400,000gas; balancer costs ~300,000 gas; dydx costs ~400,000 gas;
