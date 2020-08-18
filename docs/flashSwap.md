---
id: flashSwap
title: Flash Swap
sidebar_label: Flash Swap
---

## What is Flash Swap

Simply put, you are allowed to pay on credit on DODO! When you buy tokens DODO, you can first get the tokens you want to buy, do anything you want with the tokens, and pay for them later.

## How Does Flash Swap Work

![](https://dodoex.github.io/docs/img/dodo_flash_swap.jpeg)

The figure above illustrates the four steps in a flash swap happening under the hood

1.  Call the `buyBaseToken` function from the `DODO Pair` smart contract
2.  `DODO Pair` transfers the base tokens to the message sender
3.  If the parameter `data` of the `buyBaseToken` function call is not null, the `DODO Pair` smart contract will call the `dodoCall` method of the message sender
4.  After the `dodoCall` is executed, the `DODO Pair` smart contract will retrieve the quote tokens required for this transaction from the message sender

:::note
The `sellBaseToken` function can also perform flash swap in the same way.
:::

Flash swap requires the message sender to be a contract that implements the `IDODOCallee` interface.

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

## What Can Flash Swap Do

Flash swap can significantly improve market efficiency. Market parity is maintained by arbitrageurs, and flash swap completely removes capital requirements for them, essentially eliminating the barrier of entry to arbitrage trading. 

We will demonstrate a completely trustless and risk-free arbitrage trading contract as a use case of flash swap. Please refer to the `UniswapArbitrageur.sol` [source code](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/helper/UniswapArbitrageur.sol) for a concrete example. It has already been deployed and you can check out its Etherscan link [here](https://etherscan.io/address/0xbf90b54cc00ceeaa93db1f6a54a01e3fe9ed4422)

The following figure illustrates how an arbitrageur might take advantage of the price discrepancies between DODO and Uniswap.

![](https://dodoex.github.io/docs/img/dodo_one_click_arbitrage.jpeg)

A complete arbitrage trading maneuver consists of the following 9 steps:

1.  The user calls `executeBuyArbitrage` on `UniswapArbitrageur`
2.  `UniswapArbitrageur` calls `buyBaseToken` on `DODO Pair` and triggers flash swap
3.  `DODO Pair` transfers 1 WETH to `UniswapArbitrageur`
4.  `DODO Pair` calls `dodoCall` on `UniswapArbitrageur`
5.  `UniswapArbitrageur` transfers 1 WETH received from `DODO Pair` to `UniswapV2`
6.  `UniswapArbitrageur` calls `swap` on `UniswapV2`
7.  `UniswapV2` transfers 200 USDC to `UniswapArbitrageur`
8.  `DODO Pair` calls `transferFrom` and retrieves 150 USDC from `UniswapArbitrageur`
9.  `UniswapArbitrageur` transfers the remaining 50 USDC to the user

In summary,

- Steps 2, 3, 4, and 8 take care of the DODO front
- Steps 5, 6, and 7 take care of the Uniswap front
- The user is only exposed to the process of sending transactions and making profits, with everything else abstracted away!

The best part about the `UniswapArbitrageur` contract is that users do not need any capital, nor do they need to know how DODO and Uniswap work. They would simply call a function and, if the execution succeeds, make a profit. If the execution fails, the users would only lose some gas.

In order to avoid unnecessary gas consumption, we recommend that users use `eth_call` to execute `executeBuyArbitrage` or `executeSellArbitrage` in advance to estimate arbitrage returns. If there is an arbitrage opportunity, these two functions will return profit of quote tokens and base tokens after successful execution.

## Some Thoughts on Flash Swap

Once you have a deep understanding of flash swap, you will realize the superiority of the DeFi world over the centralized world. The composability of smart contracts has elevated the fund utilization of DeFi to an unprecedented level. Thanks to trustlessness, the cost of credit in DeFi is incredibly low. Once this financial system is integrated into the real world, its potential for improving our society and productivity will be truly boundless. The DODO team hopes that flash swap serves as a primer for DeFi builders and beginners alike to gain an appreciation for the power of DeFi.

:::note
Flash swap was inspired by [dYdX](https://dydx.exchange/) and [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). The DODO team genuinely appriciates and admires what these DeFi pioneers have done before us 👍
:::
