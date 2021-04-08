---
id: tradeApi
title: DODO Trade API
sidebar_label: DODO Trade API
---

## URL

https://dodo-route.dodoex.io/dodoapi/getdodoroute

## 请求

### 请求方法

GET

### 请求参数

| 参数                            | 说明                                                             |
| ------------------------------ | -----------------------------------------------------------------|
| fromTokenAddress               | (必须)  *ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| fromTokenDecimals              | (必须)                                                            |
| toTokenAddress                 | (必须)  *ETH(BNB) = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| toTokenDecimals                | (必须)                                                            |
| fromAmount                     | (必须)  需要乘上代币的单位，举例 1ETH =  10**18                       |
| slippage                       | (必须)  0 - 100   *单位为：%*                                      |
| userAddr                       | (必须)                                                            |
| chainId                        | (必须)  1 或 56,  1 代表以太主网, 56 代表 BSC                        |
| deadLine                       | (可选)  交易过期的区块时间 *单位为：秒*                                |
| source                         | (可选)  若设置 'dodo'，代表仅获取dodo 平台的报价                       |
| rpc                            | (可选)  举例: https://mainnet.infura.io/v3/**, 或者是自建的rpc地址    |


## 返回

### JSON 示例

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

### 返回参数

| 参数                           | 说明                                                                   |
| ------------------------------ | ----------------------------------------------------------------------|
| resAmount                      | 询价后得到的代币数量                                                     |
| resPricePerToToken             | 输入代币/输出代币 数量的比例                                              |
| resPricePerFromToken           | 输出代币/输入代币 数量的比例                                              |
| priceImpact                    | 需要乘100%转为百分比单位                                                 |
| targetApproveAddr              | 用户需要在交易前，将输入代币授权给当前合约，如果输入代币为ETH，则该字段为空       |
| to                             | DODO代理合约地址                                                        |
| data                           | 构造后的请求合约信息，可直接使用                                           |