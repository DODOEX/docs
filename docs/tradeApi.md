---
id: tradeApi
title: DODO Trade API
sidebar_label: DODO Trade API
---

## Introduction

The DODO Trade API currently provides real-time price quotes for swaps between arbitrary tokens on Ethereum Mainnet, Binance Smart Chain (BSC), Polygon, and Huobi ECO Chain (HECO Chain), as well as Application Binary Interface (ABI) data that can be used to interact with smart contracts on these networks. 

Smart contract developers can easily incorporate the DODO Trade API into their platforms to implement their own trading features, thanks to the API’s plug-and-play integration process. The DODO Trade API finds and compares prices for any pair of token assets from a variety of liquidity sources, including DODO v1, DODO v2, 1inch API, 0xAPI, ParaSwapAPI, professional market makers, and via DODO’s custom aggregation algorithm.

The full list of liquidity sources that the DODO Trade API currently uses from are as follows:

- Ethereum Mainnet: DODO v1, DODO v2, [1inch API](https://docs.1inch.io/api/), [0x API](https://0x.org/), [ParaSwap API](https://developers.paraswap.network/), [OneBit](https://onebitquant.com/), and DODO‘s custom aggregation algorithm 

- BSC: DODO v1, DODO v2, [1inch API](https://docs.1inch.io/api/), [0x API](https://0x.org/), [ParaSwap API](https://developers.paraswap.network/), [Wootrade](https://woo.network/), and DODO‘s custom aggregation algorithm

- HECO: DODO v1, DODO v2, and DODO‘s custom aggregation algorithm 

- Polygon: DODO v1, DODO v2, [1inch API](https://docs.1inch.io/api/), [0x API](https://0x.org/), [ParaSwap API](https://developers.paraswap.network/), and DODO‘s custom aggregation algorithm 

## URL

https://dodo-route.dodoex.io/dodoapi/getdodoroute

## Request

### method

GET

### Request params

| Param                       | type         | Description                                                      |
| ----------------------------| ------------ | -----------------------------------------------------------------|
| fromTokenAddress            | string       | (required)  contract address of a token to sell *ETH(BNB or HT)  0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*  |
| fromTokenDecimals           | integer      | (required)  Decimals of a token to sell |
| toTokenAddress              | string       | (required)  contract address of a token to buy *ETH(BNB or HT)  0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| toTokenDecimals             | integer      | (required)  Decimals of a token to buy  |
| fromAmount                  | string       | (required)  amount of a token to sell  NOTE：calculated with decimals，For example 1ETH =  10**18 |
| slippage                    | integer      | (required)  0 - 100   *unit:%* |
| userAddr                    | string       | (required)  user address |
| chainId                     | integer      | (required)  1 represents ethereum, 56 represents BSC, 128 represents HECO, 137 represents Polygon |
| rpc                         | string       | (required)  your own rpc node, you can set this parameter to point to it.  |
| deadLine                    | integer      | (optional)  the timestamp of the block where the trade deadline is set to, unit: second |
| source                      | string       | (optional)  If left blank, the API automatically quotes prices from all liquidity sources. If source is set to "dodo", then the API quotes prices from DODO v1 and DODO v2 only. |



## Response params

### JSON Example

```
{
    "status": 200,
    "data": {
        "resAmount": 4131.964781,
        "resPricePerToToken": 0.24201566131747518,
        "resPricePerFromToken": 4.131964,
        "priceImpact": 0,
        "useSource": "0x",
        "targetDecimals": 6,
        "targetApproveAddr": "0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149",
        "to": "0xa356867fDCEa8e71AEaF87805808803806231FdC",
        "data": "",
        "resCostGas": 0
    }
}

```

### Response params

| Param                          | Description                                                           |
| ------------------------------ | ----------------------------------------------------------------------|
| resAmount                      | Receive Amount (Not include Token's Decimals) |
| resPricePerToToken             | ratio of sell Token Amount/ buy Token Amount |
| resPricePerFromToken           | ratio of buy Token Amount / sell Token Amount |
| priceImpact                    | Price deviation; convert to percentage by multiplying by 100. High price deviation is caused by low liquidity in the pools where the prices are quoted from. |
| targetApproveAddr              | User need give sell Token's authority to this contract (DODOApprove) before swaping. if sell Token equals to ETH (BNB or HT). the param will be empty.  |
| to                             | DODOProxy's address |
| data                           | ABI Data，Use directly  |
