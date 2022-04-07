---
id: subgraph
title: 合约数据查询（Subgraph）
sidebar_label: 合约数据
---

## Subgraph

DODO 使用了 Subgraph，供系统方便的查询链上合约相关的事件与数据

[进入检索 : DODOEX](https://thegraph.com/explorer/subgraph/dodoex/dodoex-v2)

[进入检索 : vDODO](https://thegraph.com/explorer/subgraph/dodoex/dodoex-vdodo?selected=playground)

[进入检索 : ERC20Token](https://thegraph.com/explorer/subgraph/dodoex/dodoex-token)

### 1、 介绍

**历史交易记录**
 - 每一个 *OrderHistory* 事件均由 DODOProxy 合约执行触发，如果交易路由到 DODO平台上的交易池子，则底层池子触发的事件将会被忽略，以防重复 
 - 如果交易不是来自 DODOProxy，那么由底层池子触发的交易事件将会被 *OrderHistory*记录

**交易** 
 - 每一个交易事件均来自DODO平台流动性池子
 
**池子信息**
 - 由 *Pair* 实时追踪池子状态

**Endpoints**

[Get Endpoints](https://github.com/DODOEX/dodoex_v2_subgraph)

### 2、 Graphql 使用举例 
 - 查询用户信息
```
{
  user(id:"0x8982a82a77eaf1cd6f490b67ad982304ecc590af"){
    id
    txCount
    tradingRewardRecieved
  }
}

```
 - 按天，小时维度检索池子状态
```
{
  pairDayDatas(first:100,orderBy:date,orderDirection:desc){
    date
    volumeBase
    volumeQuote
    feeBase
    feeQuote
    baseToken{
      symbol
    }
    quoteToken{
      symbol
    }
  }
}
```
 - 检索众筹池状态
```
{
  crowdPoolingDayDatas{
    date
    crowdPooling {
      id
      creator
      baseToken{
        symbol
      }
      quoteToken{
        symbol
      }
    }
    investedQuote
    investCount
    newcome
    poolQuote
  }
  
}
```
