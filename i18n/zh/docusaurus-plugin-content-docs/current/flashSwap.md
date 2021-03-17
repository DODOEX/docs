---
id: flashSwap
title: 闪电交换
sidebar_label: 闪电交换
---

## 什么是闪电交换？

简而言之，就是你可以在 DODO 上凭借信用进行支付。当你购买代币时，你可以先拿到代币，然后再付钱。

## 闪电交换机制

![](https://dodoex.github.io/cn/img/dodo_flash_swap_v2.png)

上图说明了 DODO V2 闪电交换的四个步骤：

1.  调用池子合约中的 `flashLoan` 函数
2.  池子 将 base 以及 quote token 发送给申请者（其中 baseAmount 或者 quoteAmount 可以借出为0）
3.  如果 `flashLoan` 函数调用的参数`data`数据不为空，则 合约将调用申请者传入 assetTo 合约地址中的 `DVMFlashLoanCall` 或者 `DPPFlashLoanCall` 方法 (对应公开池与私有池)
4.  `DVMFlashLoanCall` 或 `DPPFlashLoanCall` 执行后，需要返回代币，合约会计算池子是否亏损，若亏损则直接交易失败。

```javaScript

    function flashLoan(
        uint256 baseAmount,
        uint256 quoteAmount,
        address assetTo,
        bytes calldata data
    ) external;
```

`
注：DODO V2 闪电贷仅当返还的base quote 数量比例产生变化时，合约会预览一笔将base quote 磨平的交易，该磨平交易手续费作为闪电贷手续费。其他情况不收取手续费用
`


闪电交换要求申请者是可以实现 `IDODOCallee` 接口的合约。

```javascript
interface IDODOCallee {
    function DVMSellShareCall(
        address payable assetTo,
        uint256,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata
    ) external;

    function DPPFlashLoanCall(
        address sender,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external;
}
```

## 一些想法

一旦你深入了解了闪电交换，你就会明白 DeFi 世界相比于中心化世界的优势。通过组合智能合约，我们可以将 DeFi 的资金利用率提高到前所未有的水平。DeFi 世界中的信任成本极低。一旦这个金融系统应用落地，它将极大地提升社会生产力。DODO 团队希望可以让 DeFi 从业者的通过了解闪电交换来入门 DeFi 世界。

`注意：闪电交换是受 [dYdX](https://dydx.exchange/) 和 [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). 启发而诞生的，DODO 团队向这些 DeFi 世界的先驱者表示致敬。 👍`
