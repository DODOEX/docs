---
id: dppForMM
title: DODO Private Pool (DPP)
sidebar_label: DODO Private Pool (DPP)
---

## Introduction

DODO V2’s DODO Private Pool (DPP) is a highly customizable solution catered towards market makers who wish to operate their own liquidity pools. 

With DPP, pool operators have complete freedom to customize their market-making experience on DODO, by configuring and modifying the following parameters:
- Trading fee rate
- External oracle feed price, i, and
- Price curve slippage coefficient, k

In addition, DPP also supports dynamic adjustment of the amount of capital in the pool. All these configurations and modifications can be made against smart contracts on-chain in a fully decentralized, permissionless manner.

## Configuration Instructions

In order to make changes to their pools, pool operators will need to invoke the `resetDODOPrivatePool` function in the `DODO V2Proxy02` contract (refer to the “Deployment Information” pages or the Appendix for contract addresses). See below for `resetDODOPrivatePool`’s function declaration. 

```
    function resetDODOPrivatePool(
        address dppAddress,
        uint256[] memory paramList,  //0 - newLpFeeRate, 1 - newI, 2 - newK
        uint256[] memory amountList, //0 - baseInAmount, 1 - quoteInAmount, 2 - baseOutAmount, 3- quoteOutAmount
        uint8 flag, // 0 - ERC20, 1 - baseInETH, 2 - quoteInETH, 3 - baseOutETH, 4 - quoteOutETH
        uint256 minBaseReserve,
        uint256 minQuoteReserve,
        uint256 deadLine
    ) external;
```

### Function Parameters

- `dppAddress`: The DPP pool’s contract address

- `paramList`: An array of `uint256` containing three parameters, namely:
    - `paramList[0]`: The first parameter is `newLpFeeRate`, which is the new trading fee rate that the pool will have after the function invocation. Decimals: 18, Range: [0, 1e18], where 0 represents 0% and 1e18 represents 100%.
    - `paramList[1]`: The second parameter is `newI`, which is the new oracle feed price (i) that the pool will have after the function invocation. The oracle feed price is the baseToken price/quoteToken price ratio. Decimals: 18 - baseToken’s decimals + quoteToken’s decimals.
    - `paramList[2]`: The third parameter is `newK`, which is the new slippage coefficient (k) that the pool’s price curve will have after the function invocation. The slippage coefficient dictates how “bent” the price curve is. Decimals: 18, Range: [0, 1e18], where 0 represents a horizontal line as a price curve, and 1e18 represents a Uniswap-like, constant-product AMM price curve.

- `amountList`: An array of `uint256` containing the following parameters in order: `baseInAmount`, `quoteInAmount`, `baseOutAmount`, and `quoteOutAmount`. Decimals for each of these parameters conform to the token decimals they represent, i.e., `quoteInAmount` has the same number of decimals as `quoteToken`.
`baseInAmount` and `quoteInAmount` represent the number of base tokens and quote tokens being added to the DPP pool, respectively. NOTE: Before adding these tokens, the function invoker must give token spend permissions to the `DODOApprove` contract (refer to the “Deployment Information” pages or the Appendix for contract addresses).
`baseOutAmount`, and `quoteOutAmount` represent the number of base tokens and quote tokens being removed from the DPP pool, respectively.

- `flag`: A `uint8` used to flag whether wrapping/unwrapping is required for ETH
    - `0`: base and quote tokens are both ERC-20
    - `1`: base token being added to the pool is ETH, so the contract will wrap ETH into WETH
    - `2`: quote token being added to the pool is ETH, so the contract will wrap ETH into WETH
    - `3`: base token being removed from the pool is WETH, so the contract will unwrap WETH into ETH
    - `4`: quote token being removed from the pool is WETH, so the contract will unwrap WETH into ETH
- `minBaseReserve` and `minQuoteReserve`: `uint256` used to reduce arbitrage opportunities for frontrunners and minimize risk. When the function invoker wants to modify parameters and submits the transaction for processing, the token price for the pool may change. This change opens a window for frontrunning bots to come in and perform arbitrage trading. With `minBaseReserve` and `minQuoteReserve` set, if after an on-chain transaction will cause the number of base tokens in the pool to go below `minBaseReserve` or the number of quote tokens in the pool to go below `minQuoteReserve`, the contract will revert this transaction, thus reducing arbitrage risk.

- `deadline`: `uint256`. The transaction will revert if this timestamp is exceeded.



## Appendix

DODOV2Proxy Deployment Information

- ETH: [0xa356867fDCEa8e71AEaF87805808803806231FdC](https://etherscan.io/address/0xa356867fDCEa8e71AEaF87805808803806231FdC)
- BSC: [0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486](https://bscscan.com/address/0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486) 
- HECO: [0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7](https://hecoinfo.com/address/0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7)

DODOApprove Deployment Information

- ETH: [0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149](https://etherscan.io/address/0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149) 
- BSC: [0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1](https://bscscan.com/address/0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1)
- HECO: [0x68b6c06Ac8Aa359868393724d25D871921E97293](https://hecoinfo.com/address/0x68b6c06Ac8Aa359868393724d25D871921E97293) 

DODOV2Proxy ABI 

```
[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dppAddress",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "paramList",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amountList",
          "type": "uint256[]"
        },
        {
          "internalType": "uint8",
          "name": "flag",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "minBaseReserve",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minQuoteReserve",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadLine",
          "type": "uint256"
        }
      ],
      "name": "resetDODOPrivatePool",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
]
```
