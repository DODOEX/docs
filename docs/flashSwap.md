---
id: flashSwap
title: Flash Swap
sidebar_label: Flash Swap
---

## What is flash swap

Simply put, you are allowed to pay on credit! When you buy or sell on DODO, you can first get the token you want to buy, do anything you want with the token and then pay for it later.

## How does flash swap work

![](https://dodoex.github.io/docs/img/dodo_flash_swap.jpeg)

The picture above shows the four steps to make flash swap

1.  Call the `buyBaseToken` of the `DODO Pair` smart contract
2.  `DODO Pair` will transfer the Base token to the message sender first
3.  If the parameter `data` of buyBaseToken is not null, the `DODO Pair` smart contract will call the `dodoCall` method of the message sender
4.  After the `dodoCall` is executed, the `DODO Pair` smart contract will retrieve the quote token required for this transaction from the message sender

:::note
The `sellBaseToken` can also perform flash swap in the same way.
:::

Flash swap requires the message sender to be a contract that follows below interface.

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

## What can flash swap do

Flash swap can significantly improve market effectiveness.

Market parity is maintained by arbitrageurs. Flash swap can completely eliminate the arbitrageur’s capital requirements, greatly reduce the arbitrage threshold, and promote market effectiveness. Here we will demonstrate a completely trustless and risk free arbitrage contract as a use case of swap flash.

[source code](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/helper/UniswapArbitrageur.sol)

[deployed address]()

![](https://dodoex.github.io/docs/img/dodo_one_click_arbitrage.jpeg)

An arbitrage consists of the following 9 steps:

1.  User calls `executeBuyArbitrage` on `UniswapArbitrageur`
2.  `UniswapArbitrageur` calls `buyBaseToken` on `DODO Pair` and triggers flash swap
3.  `DODO Pair` transfers 1 WETH to `UniswapArbitrageur`
4.  `DODO Pair` calls `dodoCall` on `UniswapArbitrageur`
5.  `UniswapArbitrageur` transfers 1 WETH received from `DODO Pair` to `UniswapV2`
6.  `UniswapArbitrageur` call `swap` on `UniswapV2`
7.  `UniswapV2` transfers 200 USDC to `UniswapArbitrageur`
8.  `DODO Pair` call `transferFrom` and retrieve 150 USDC from `UniswapArbitrageur`
9.  `UniswapArbitrageur` transfers the remaining 50 USDC to User

In summary

- Flash swap is made up of step 2, 3, 4, and 8
- Uniswap is made up of step 5, 6, and 7
- An user would only notice the process of sending transaction and making profits!

The shining point of this `UniswapArbitrageur` contract is that users do not need any capital, nor do they need to know DODO and Uniswap. Just simply call a function and, if the execution succeeds, make a profit. If the execution fails, only gas will be lost.

In order to avoid unnecessary gas consumption, we recommend that users use `eth_call` to execute `executeBuyArbitrage` or `executeSellArbitrage` in advance to estimate arbitrage returns. If there is an arbitrage opportunity, these two functions will return profit of quote token and base token after successful execution.

## Some thoughts on flash swap

Once you have a deep understanding of flash swap, you will find the superiority of the Defi world over the centralized world. The combinability of smart contracts has increased the fund utilization of Defi to an unprecedented level. Due to the feature of trustlessness, the cost of credit in Defi is incredibly low. Once this financial system can be integrated into the real world, the improvement of productivity for human kind is unbelievable.

I have discussed the fascinating features of smart contracts with many people, but few people can really feel it. I hope flash swap can become an interesting case that ordinary people can understand and accept.

:::note
Flash swap is inspired by [DyDx](https://dydx.exchange/) and [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). We really appriciate what they have done before 👍
:::
