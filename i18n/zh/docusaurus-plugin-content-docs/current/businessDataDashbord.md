---
id: businessDataDashbord
title: Dashbord统计口径说明
sidebar_label: Dashbord统计口径说明
---

## Dashbord 统计口径说明
[Dodoex Dashbords](https://app.dodoex.io/dashboard)

### 相关Subgraph数据统计表说明
 - 核心指标的数据全部来自Subgraph，Subgraph的数据来自于合约被调用时抛出的事件。
 - Subgraph里涉及到日期维度的统计时，以国际标准时间做一天的数据统计，所以在Dashbord上横轴为日期时，即代表国际标准时间的日期。
 - 我们在计算美元相关价格时会有几个基础池，第一是稳定币交易池，我们把锁仓量最高的交易池作为基准池，根据交易量所占的权重来计算稳定币的美元价格。另外,该条链基础代币对稳定币的交易池也会考虑作为基础池来提供美元价格。

### 核心指标
 - 我们使用PairDayData跟踪每个交易对当日的数据，使用TokenDayData跟踪每个token当日的交易数据
 - 对于一些流动性较差的池子，我们使用过滤条件舍弃了其数据，当前累计交易次数小于10次或者累计交易量小于1000美金的池子不纳入统计

### 交易对数据
 - 交易对数据提供了在DODO发生过交易的交易对的信息，由于DODO智能路由会帮用户寻找最优价，外部池子的交易量是用户发起的未走进DODO流动池的交易。

