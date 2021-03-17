---
id: flashSwap
title: 闪电交换
sidebar_label: 闪电交换
---

## 什么是闪电交换？

简而言之，就是你可以在 DODO 上凭借信用进行支付。当你购买代币时，你可以先拿到代币，然后再付钱。

## 闪电交换机制

![](https://dodoex.github.io/cn/img/dodo_flash_swap.jpeg)

上图说明了闪电交换的四个步骤：

1.  调用 `DODO Pair` 合约中的 `buyBaseToken` 函数
2.  `DODO Pair` 将 base token 发送给申请者
3.  如果 `buyBaseToken` 函数调用的参数`data`数据不为空，则 `DODO Pair` 智能合约将调用申请者的 `dodoCall` 方法
4.  `dodoCall` 执行后，`DODO Pair` 智能合约将从申请者那里检索所需的 quotetoken

:::注意
`sellBaseToken` 函数还可以以相同方式执行闪电交换。
:::

闪电交换要求申请者是可以实现 `IDODOCallee` 接口的合约。

```javascript
interface IDODOCallee {
    function dodoCall(
        bool isBuyBaseToken,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external;
}
```

## 闪电交换可以做什么？

闪电交换可以提高做市的效率。市场平家由套利者来维持，闪电交换可以搬砖不再有资金要求，降低了搬砖套利的门槛。

我们来演示一个完全无风险的套利交易组合作为闪电交换的应用示例。请参考 `UniswapArbitrageur.sol` 的[源代码](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/helper/UniswapArbitrageur.sol) 作为示例，[点击查看](https://etherscan.io/address/0xbf90b54cc00ceeaa93db1f6a54a01e3fe9ed4422)。套利演示：

![](https://dodoex.github.io/cn/img/dodo_one_click_arbitrage.jpeg)

完整套利交易包括 9 个步骤：

1.  用户调用 `UniswapArbitrageur` 的 `executeBuyArbitrage` 函数
2.  `UniswapArbitrageur` 调用 `DODO Pair` 的 `buyBaseToken` 函数，触发闪电交换
3.  `DODO Pair` 向 `UniswapArbitrageur` 转 1 WETH
4.  `DODO Pair` 调用 `UniswapArbitrageur` 的 `dodoCall` 函数
5.  `UniswapArbitrageur` 将收到的 1 WETH 转给 `UniswapV2`
6.  `UniswapArbitrageur` 调用 `UniswapV2` 的 `swap` 函数
7.  `UniswapV2` 向 `UniswapArbitrageur` 转 200 USDC
8.  `DODO Pair` 调用 `transferFrom` 函数从 `UniswapArbitrageur` 接受 150 USDC
9.  `UniswapArbitrageur` 把剩下的 50 USDC 转给用户

综上

- 第 2，3，4，8 步由 DODO 运行
- 第 5，6，7 步由 Uniswap 运行
- 用户只要发起交易就可以套利，完全不用参与其他步骤。

`UniswapArbitrageur` 合约中最棒的地方自于用户不需要任何资金，也不需要知道 DODO 和 Uniswap 的工作机制。他们只需要调用一个函数，成功后即可获利；即使失败，用户也只会损失一些 gas 费。

为了避免不必要的 gas 损耗，我们建议用户使用 `eth_call` 提前执行 `executeBuyArbitrage` 或 `executeSellArbitrage` 来估算套利收益。如果有套利机会，这两个函数会返回搬砖成功的收益。

## 一些想法

一旦你深入了解了闪电交换，你就会明白 DeFi 世界相比于中心化世界的优势。通过组合智能合约，我们可以将 DeFi 的资金利用率提高到前所未有的水平。DeFi 世界中的信任成本极低。一旦这个金融系统应用落地，它将极大地提升社会生产力。DODO 团队希望可以让 DeFi 从业者的通过了解闪电交换来入门 DeFi 世界。

`注意：闪电交换是受 [dYdX](https://dydx.exchange/) 和 [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). 启发而诞生的，DODO 团队向这些 DeFi 世界的先驱者表示致敬。 👍`
