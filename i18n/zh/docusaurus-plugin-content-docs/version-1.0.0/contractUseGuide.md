---
id: contractUseGuide
title: 合约用户指南
sidebar_label: 合约用户指南
---

## For traders

整个合约中与交易者相关的函数只有两个： `buyBaseToken` and `sellBaseToken`

```javascript
function buyBaseToken(
    uint256 amount,
    uint256 maxPayQuote,
    bytes calldata data
) external returns (uint256 payQuote);
```

这个函数确定购买 base token 的 `amount` 数量。 如果需要购买这些 quote token 需要支付的 base token 的数量大于 `maxPayQuote`，则交易将被重置。如果 `data` 不为空，闪电交换将会被触发。

`payQuote` 的返回值是交易者需要支付的 quote token 的数量。

```javascript
function sellBaseToken(
    uint256 amount,
    uint256 minReceiveQuote,
    bytes calldata data
) external returns (uint256 receiveQuote);
```

这个函数确定出售 base token的 `amount` 数量。如果要接受的 quote token 的数量小于 `minReceiveQuote`，maxPayQuote，则交易将被重置。如果 `data` 不为空，闪电交换将会被触发。

`receiveQuote` 的返回值是交易者需要支付的 quote token 的数量。

DODO 同样会提供这两个函数的预览版本，预览函数可以在不发送交易的情况下执行，可以帮助用户预估价格节省 gas 费。

```javascript
function querySellBaseToken(
  uint256 amount
) external view returns (uint256 receiveQuote);

function queryBuyBaseToken(
  uint256 amount
) external view returns (uint256 payQuote);
```

下面一部分我们会着重介绍[闪电交换](./flashSwap).

## 对于做市商

对于做市商来说，充值和提取是最重要的两个函数。我们提供一系列的函数帮助做市商灵活高效的管理他们的资产。

PMM 算法的优势之一是它可以分别管理 base 或 quote token。所以下面的函数有两个版本，一个后缀是 Base，一个后缀是 Quote，他们分别用于管理 Base token 和 quote token。两个版本有相同的输入和输出值。

```javascript

  function depositBase(
    uint256 amount
  ) external returns (uint256 capital)

  function depositQuote(
    uint256 amount
  ) external returns (uint256 capital)

```

这个函数会向资产池中，充入一个确定 `amount` 的资产，然后返回释放给你的 `capital` 资产额。

`
注意：Captital 代表做市商在资产池中所占份额。Captital 是一个ERC 20 格式的代币，可以自由交易。每个 DODO Pair 有两种代币，分别代表 base token 和 quote token。
`

```javascript

  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)

  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)

```

根据做市商的地址查询资产池余额。返回值 `lpBalance` 代表实际的 base 或 quote token 数量，而不是 Capital token。

```javascript

  function withdrawBase(
    uint256 amount
  ) external returns (uint256 receive)

  function withdrawQuote(
    uint256 amount
  ) external returns (uint256 receive)

```

这个函数尝试从资本池中提取一定 `amount` 数量的资产。由于可能产生提取手续费，这个函数返回的具体的数量。

```javascript

  function withdrawAllBase() external returns (uint256 receive)

  function withdrawAllQuote() external returns (uint256 receive)

```

由于资金池的规模不断发生变化（任何时候都有可能产生交易），为了帮助做市商提出所有资产，上边的两个函数可以提取所有的资金。最终，申请者可以接受到确切资产数量。

```javascript

  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)

  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)

```

在某些情况下，提取资产会被收取 [手续费](./coreConcept#withdraw-fee)。上述的两个函数可以预览提取手续费。如果你提交了提取 `amount` 申请，会被收取一定的 `penalty` 。

`
注意：收到的提款资产的最终金额是 **amount-penalty**.
`

## 对于开发人员

开发人员可以从 DODO 的框架 DODO Zoo 的接口获取元数据。

```javascript

  function getDODO(
    address baseToken,
    address quoteToken
  ) external view returns (address)

```

给定 `baseToken` 和 `quoteToken` , 在 `DODO Zoo` 只能同时注册一个 `DODO Pair`。
