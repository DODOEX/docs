---
id: tradeApi
title: DODO Trade API
sidebar_label: DODO Trade API
---

## URL

https://dodo-route.dodoex.io/dodoapi/getdodoroute

## Request

### method

GET

### request params

| Param                          | Description                                                           |
| ------------------------------ | ----------------------------------------------------------------------|
| fromTokenAddress               | (required)  *ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| fromTokenDecimals              | (required)                                                            |
| toTokenAddress                 | (required)  *ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| toTokenDecimals                | (required)                                                            |
| fromAmount                     | (required)  calculate with decimals，for example 1ETH =  10**18       |
| slippage                       | (required)  0 - 100   *Unit is %*                                     |
| userAddr                       | (required)                                                            |
| chainId                        | (required)  1 or 56,  1 represents ethereum, 56 represents BSC        |
| deadLine                       | (optional)  Expired block timestamp *Unit is second*                  |
| source                         | (optional)  'dodo' represents get price only from dodo platform       |
| rpc                            | (optional)  For example: https://mainnet.infura.io/v3/**, or your own rpc endpoint  |


## Response

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
| resAmount                      | receive Amount                                                        |
| resPricePerToToken             | ratio of fromTokenAmount/toTokenAmount                                |
| resPricePerFromToken           | ratio of toTokenAmount/fromTokenAmount                                |
| priceImpact                    | need mul 100%                                                         |
| targetApproveAddr              | User need give fromToken's authority to this contract before swaping. if fromToken equals to ETH. the param will be empty. |
| to                             | DODOProxy's address                                                   |
| data                           | Use directly                                                          |