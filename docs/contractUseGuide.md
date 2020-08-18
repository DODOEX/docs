---
id: contractUseGuide
title: User Guide
sidebar_label: User Guide
---

## For traders

There are only two functions that are relevant to traders in the entire contract: `buyBaseToken` and `sellBaseToken`

```javascript
function buyBaseToken(
    uint256 amount,
    uint256 maxPayQuote,
    bytes calldata data
) external returns (uint256 payQuote);
```

This function buys an exact `amount` of base tokens. If the number of quote tokens needed to pay for these base tokens is larger than `maxPayQuote`, the transaction will be reverted. If `data` is not null，flash swap will be triggered.

The return value `payQuote` is the exact amount of quote tokens you will pay.

```javascript
function sellBaseToken(
    uint256 amount,
    uint256 minReceiveQuote,
    bytes calldata data
) external returns (uint256 receiveQuote);
```

This function sells an exact `amount` of base tokens. If the the number of quote tokens to be received is smaller than `minReceiveQuote`, the transaction will be reverted. If `data` is not null，flash swap will be triggered.

The return value `receiveQuote` is the exact amount of quote tokens you will receive.

DODO also provides a view version of these two functions. View functions can be executed without sending transactions and they help users estimate prices bore spending gas.

```javascript
function querySellBaseToken(
  uint256 amount
) external view returns (uint256 receiveQuote);

function queryBuyBaseToken(
  uint256 amount
) external view returns (uint256 payQuote);
```

In the next section, we will go into more details about [flash swap](./flashSwap).

## For Liquidity Providers (LPs)

For liquidity providers (LPs), the most important functions are deposit and withdrawal. We provide a set of functions to help LPs manage their assets in a flexible and efficient manner.

One of the biggest advantages of the PMM algorithm is that it can manage base or quote token assets separately. That is why the functions below all have two versions, one with the suffix "Base" and another with the suffix "Quote", to manage base and quote assets respectively. These two versions have the same input and output values.

```javascript

  function depositBase(
    uint256 amount
  ) external returns (uint256 capital)

  function depositQuote(
    uint256 amount
  ) external returns (uint256 capital)

```

This function deposits an exact `amount` of assets into the capital pool and returns the `capital` amount issued for you.

:::note

Capital represents the LP's share of the capital pool. Capital is an ERC20 token and can be freely traded. Each DODO has two kinds of capital, which represent the share of base token and quote token capital pool respectively.

:::

```javascript

  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)

  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)

```

Query the pool balance based on the address of the LP. The return value `lpBalance` represents actual base or quote tokens, not capital tokens.

```javascript

  function withdrawBase(
    uint256 amount
  ) external returns (uint256 receive)

  function withdrawQuote(
    uint256 amount
  ) external returns (uint256 receive)

```

This function attempts to withdraw an `amount` of assets from the capital pool. Since there may be a withdrawal fee, the function returns the exact amount of tokens received by the message sender.

```javascript

  function withdrawAllBase() external returns (uint256 receive)

  function withdrawAllQuote() external returns (uint256 receive)

```

Since the size of the capital pool is constantly changing (transactions may occur at any time), in order to help LPs to completely withdraw all assets, the above two functions will consume all the capital of the message sender and withdraw the corresponding assets. Finally, the exact amount of asset received by the message sender is returned.

```javascript

  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)

  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)

```

In some cases, asset withdrawals will be charged a [fee](./coreConcept#withdraw-fee). The above two functions provide a view function to query the withdrawal fee. If you submit a request with an `amount` of withdrawal, you will be charged for the amount of `penalty`.

:::note
The final amount of withdrawal assets received will be **amount-penalty**.
:::

## For Developers

Developers can fetch metadata from DODO Zoo, the entrance part of the DODO framework.

```javascript

  function getDODO(
    address baseToken,
    address quoteToken
  ) external view returns (address)

```

Given `baseToken` and `quoteToken`, there is only one `DODO Pair` registered in `DODO Zoo` at the same time.
