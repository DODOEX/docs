---
id: contractUseGuide
title: Use Guide
sidebar_label: Use Guide
---

## For traders

For the trader, there are only two functions in the entire contract to consider: `buyBaseToken` and `sellBaseToken`

```javascript
function buyBaseToken(
    uint256 amount,
    uint256 maxPayQuote,
    bytes calldata data
) external returns (uint256 payQuote);
```

This function buys an exact `amount` of base token. The transaction will be reverted, if the quote token needed to pay is larger than `maxPayQuote`. If `data` is not null，flash swap will be triggered.

The return value `payQuote` is the exactly amount you will pay.

```javascript
function sellBaseToken(
    uint256 amount,
    uint256 minReceiveQuote,
    bytes calldata data
) external returns (uint256 receiveQuote);
```

This function sells an exact `amount` of base token. The transaction will be reverted, if the to-be-received quote token is smaller than `minReceiveQuote`. If `data` is not null，flash swap will be triggered.

The return value `receiveQuote` is the exactly amount you will receive.

DODO also provides a view version for these two functions. View functions could be executed without sending transactions and it helps users estimate the trade price before spending gas.

```javascript
function querySellBaseToken(
  uint256 amount
) external view returns (uint256 receiveQuote);

function queryBuyBaseToken(
  uint256 amount
) external view returns (uint256 payQuote);
```

In the next section we will introduce more details about [flash swap](./flashSwap).

## For liquidity providers

For liquidity providers, the most important functions are deposit and withdrawal. We provide a set of functions to help liquidity providers manage assets flexibly.

One of the biggest advantages of the PMM algorithm is that it can manage base or quote assets separately. Hence the functions below all have two versions to manage base and quote assets respectively. And those two versions have the same input and output.

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

Capital represents the liquidity provider's share of the capital pool. Capital is an ERC20 token and can be freely traded. Each DODO has two kinds of capital, which represent the share of base token and quote token capital pool respectively.

:::

```javascript

  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)

  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)

```

Query the pool balance based on the address of the liquidity provider. The return value `lpBalance` represents for actual BASE or QUOTE token, not the capital token.

```javascript

  function withdrawBase(
    uint256 amount
  ) external returns (uint256 receive)

  function withdrawQuote(
    uint256 amount
  ) external returns (uint256 receive)

```

This function tries to withdraw an `amount` of assets from the capital pool. As there may be a withdrawal fee, the function returns the exact amount of asset received by the message sender.

```javascript

  function withdrawAllBase() external returns (uint256 receive)

  function withdrawAllQuote() external returns (uint256 receive)

```

Since the size of the capital pool is dynamically changing (transactions may occur at any time), in order to help the liquidity provider to completely withdraw all assets, the above two functions will consume all the capital of the message sender and withdraw the corresponding assets. Finally, the exact amount of asset received by the message sender is returned.

```javascript

  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)

  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)

```

In some cases, withdrawing assets will be charged a [fee](./coreConcept#withdraw-fee). The above two functions provide a view function to query the withdrawal fee. If you submit a request with an `amount` of withdrawal, you will be charged for the amount of `penalty`.

:::note
The final amount of withdrawal assets received will be **amount-penalty**.
:::

## For developers

Developers could fetch meta data from DODOZoo.

```javascript

  function getDODO(
    address baseToken,
    address quoteToken
  ) external view returns (address)

```

Given `baseToken` and `quoteToken`, there is only one `DODO Pair` registered in `DODO Zoo` at the same time.
