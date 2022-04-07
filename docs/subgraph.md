---
id: subgraph
title: Subgraph for DODO
sidebar_label: Subgraph
---

## Subgraph for dodoex.io

The Graph exposes a GraphQL endpoint to query the events and entities within the DODOex ecosystem.

[Go to thegraph playground : DODOEX](https://thegraph.com/explorer/subgraph/dodoex/dodoex-v2)

[Go to thegraph playground : vDODO](https://thegraph.com/explorer/subgraph/dodoex/dodoex-vdodo?selected=playground)

[Go to thegraph playground : ERC20Token](https://thegraph.com/explorer/subgraph/dodoex/dodoex-token)

### 1、 Introduce

**What is in OrderHistory**
 - Each *OrderHistory* event emit by DODOSmartRoute contract，if swap goes into the dodo liquidity pool, pool swap event will be ignored. 
 - If swap tx isn't from DODOSmartRoute, swap event from each dodo liquidity pool will be record as *OrderHistory*.

**What is in Swap** 
 - Each swap event emit from dodo liquidity pool
 
**Where to find pool information**
 - In *Pair* schema we track pool status.

**Endpoints**

[Get endpoints](https://github.com/DODOEX/dodoex_v2_subgraph)
### 2、 Graphql Examples
 - to get user info
```
{
  user(id:"0x8982a82a77eaf1cd6f490b67ad982304ecc590af"){
    id
    txCount
    tradingRewardRecieved
  }
}

```
 - to get pair data for statistics use pairDayData、pairHourData
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
 - to get crowdpooling info
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
