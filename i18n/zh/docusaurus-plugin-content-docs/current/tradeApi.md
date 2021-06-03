---
id: tradeApi
title: DODO 交易 API
sidebar_label: DODO Trade API
---

## 介绍

DODO Trade API 当前可提供 Ethereum、BSC、HECO、Polygon 四个网络下任意币互换的实时报价以及可直接使用的与合约交互ABI数据。开发者仅需按照接口规范，集成我们的API，即可快速实现DEX最重要的交易功能。DODO Trade API 背后集成了DODOV1、DODOV2、专业做市商、1inch API、0x API、ParaSwap API 以及DODO自建的聚合算法 等多源实时的报价信息，并返回当前多源中最优报价，以确保 DODO Trade API 始终具有较强的竞争力。

以下列举当前API使用的询价源：

- **Ethereum：** DODOV1、DODOV2、1inch API、0x API、ParaSwap API、OneBit做市商、DODO自建路由

- **BSC：** DODOV1、DODOV2、1inch API、0x API、ParaSwap API、Wootrade做市商、DODO自建路由

- **HECO：** DODOV1、DODOV2、DODO自建路由

- **Polygon：** DODOV1、DODOV2、0x API、ParaSwap API、DODO自建路由

## URL

https://dodo-route.dodoex.io/dodoapi/getdodoroute

## 请求

### 请求方法

GET

### 请求参数

| 参数                         |  类型        | 说明                                                              |
| ----------------------------| ------------ | -----------------------------------------------------------------|
| fromTokenAddress            | string       | (必须)  出售的代币合约地址 其中*ETH(BNB or HT) 为 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| fromTokenDecimals           | integer      | (必须)  出售的代币精度   |
| toTokenAddress              | string       | (必须)  购买的代币合约地址 其中*ETH(BNB or HT) 为 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE*   |
| toTokenDecimals             | integer      | (必须)  购买的代币精度   |
| fromAmount                  | string       | (必须)  出售的代币数量  注意：需要乘上代币的精度，举例 1ETH =  10**18 |
| slippage                    | integer      | (必须)  0 - 100   *单位为：%* |
| userAddr                    | string       | (必须)  发起交易的用户地址 |
| chainId                     | integer      | (必须)  1 代表以太主网, 56 代表 BSC, 128 代表 Heco, 137 代表 Polygon |
| rpc                         | string       | (必须)  自有节点的rpc地址，以保障实时的节点询价速度与稳定性   |
| deadLine                    | integer      | (可选)  交易过期的区块时间 *单位为：秒* |
| source                      | string       | (可选)  若不设置，则从全部源中询价， 若设置 source = "dodo"，代表仅获取DODOV1、DODOV2 报价 |



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

### 返回参数说明

| 参数                            | 说明                                                                  |
| ------------------------------ | ----------------------------------------------------------------------|
| resAmount                      | 询价后得到的代币数量（带有小数点，不包括代币的精度）|
| resPricePerToToken             | 出售代币/购买代币 数量的比例 |
| resPricePerFromToken           | 购买代币/出售代币 数量的比例 |
| priceImpact                    | 价格偏差，需要乘 100 以转为%单位， **注：此指标为参考项，若偏高，大概率是因为当前最优报价 经过了比较浅的池子，浅池子的滑点将造成全局价格偏差较大**|
| targetApproveAddr              | 用户需要在交易前，将出售的代币授权给当前合约（DODOApprove），如果出售代币为ETH（BNB or HT），则该字段为空，不需要任何授权即可直接交易 |
| to                             | 执行交易的目标合约地址 （DODOV2Proxy）|
| data                           | 构造后的请求合约ABI信息，可直接使用  |


