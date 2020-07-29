---
id: contractUseGuide
title: Use Guide
sidebar_label: Use Guide
---

## For traders

对 trader 来讲，整个合约只有两个函数需要关心：`buyBaseToken` 和 `sellBaseToken`

```javascript
function buyBaseToken(
    uint256 amount,
    uint256 maxPayQuote,
    bytes calldata data
) external returns (uint256 payQuote);
```

Buy exactly `amount` of base token. The transaction will revert if 需要支付的 quote token 多于`maxPayQuote`. 如果`data`不为空，则触发 flash swap。

The return value `payQuote` is the exactly amount you will pay.

```javascript
function sellBaseToken(
    uint256 amount,
    uint256 minReceiveQuote,
    bytes calldata data
) external returns (uint256 receiveQuote);
```

Sell exactly `amount` of base token. The transaction will revert if 将会收到的 quote token 少于`minReceiveQuote`. 如果`data`不为空，则触发 flash swap。

The return value `receiveQuote` is the exactly amount you will receive.

DODO also provides view version for these two functions. View functions could be executed without send transactions and help users estimate the trade price before spend gas.

```javascript
function querySellBaseToken(
  uint256 amount
) external view returns (uint256 receiveQuote);

function queryBuyBaseToken(
  uint256 amount
) external view returns (uint256 payQuote);
```

下一节我们将介绍更多关于[flash swap](./flashSwap)的内容

## For liquidity providers

对于 liquidity provider 来说，最重要的两个功能是 deposit 和 withdraw。我们提供了一组函数来帮助 liquidity providers 灵活管理资产。

PMM 算法最优优势的一点是可以单独管理 base 或 quote 资产，因此下列函数都有两个版本，两个版本功能一致，分别操作 base 和 quote 资产。

```javascript

  function depositBase(
    uint256 amount
  ) external returns (uint256 capital)

  function depositQuote(
    uint256 amount
  ) external returns (uint256 capital)

```

Deposit exactly `amount` of asset into funding pool. Returns the capital amount issued for you.

:::note
capital 表示了 liquidity provider 占 funding pool 份额的多少。capital 是 ERC20，可以被自由交易。每个 dodo 都有两种 capital，分别代表了 base token funding pool 和 quote token funding pool 的份额。
:::

```javascript

  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)

  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)

```

根据 liquidity provider 的地址`lp`查询其 funding pool 余额

```javascript

  function withdrawBase(
    uint256 amount
  ) external returns (uint256 receive)

  function withdrawQuote(
    uint256 amount
  ) external returns (uint256 receive)

```

Try to withdraw `amount` of asset from funding pool. As there may be withdraw fee, the functions return the exact amount of asset received by message sender.

```javascript

  function withdrawAllBase() external returns (uint256 receive)

  function withdrawAllQuote() external returns (uint256 receive)

```

由于资金池规模在动态变化（因为随时可能有交易发生），为了帮助 liquidity provider 完整地取出全部资产，上面两个函数会消耗 message sender 的全部 capital，并将对应的资产 withdraw 出来。最后返回 the exact amount of asset received by message sender.

```javascript

  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)

  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)

```

在某些情况下，withdraw 资产会收取[fee](./coreConcept#withdraw-fee).上面两个函数提供了查询 withdraw fee 的只读方法。如果提交了 withdraw 数量为`amount` 的请求，那么将会被收取`penalty`数量的费用。最终收到的资产数量将会是`amount-penalty`.
