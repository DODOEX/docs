---
id: flashSwap
title: Flash Loan
sidebar_label: Flash Loan
---

## What is Flash Loan

Simply put, you are allowed to pay on credit on DODO! When you buy tokens DODO, you can first get the tokens you want to buy, do anything you want with the tokens, and pay for them later.

## How Does Flash Loan Work

![](https://dodoex.github.io/docs/img/dodo_flash_swap_v2.png)

The figure above illustrates the four steps in a flash swap happening under the hood

1.  Call the `flashLoan` function from the smart contract
2.  Pool transfers the base tokens and quote tokens to the message sender (baseAmount or quoteAmount can equals to zero)
3.  If the parameter `data` of the `flashLoan` function call is not null, the pool contract will call the `DVMFlashLoanCall` or `DPPFlashLoanCall` method.
4.  After the `DVMFlashLoanCall` or `DPPFlashLoanCall` is executed, the contract will calculate whether the pool is losing money, if it loses, the transaction will fail directly.

```javascript
    function flashLoan(
        uint256 baseAmount,
        uint256 quoteAmount,
        address assetTo,
        bytes calldata data
    ) external;
```

ps: DODO V2 flashLoan will preview a transaction that equalize the base and quote token to the initial state. using the preview transaction fee as the flashloan fee. No more fee will be charged in other situations.

Requires users implement the `IDODOCallee` interface.

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

## How to use DODO Flash Loan

Code sample: [DODOFlashloan.sol](https://github.com/DODOEX/dodo-example/blob/main/solidity/contracts/DODOFlashloan.sol)

## Some Thoughts on Flash Loan

Once you have a deep understanding of flash swap, you will realize the superiority of the DeFi world over the centralized world. The composability of smart contracts has elevated the fund utilization of DeFi to an unprecedented level. Thanks to trustlessness, the cost of credit in DeFi is incredibly low. Once this financial system is integrated into the real world, its potential for improving our society and productivity will be truly boundless. The DODO team hopes that flash swap serves as a primer for DeFi builders and beginners alike to gain an appreciation for the power of DeFi.

:::note
Flash swap was inspired by [dYdX](https://dydx.exchange/) and [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). The DODO team genuinely appreciates and admires what these DeFi pioneers have done before us 👍
:::
