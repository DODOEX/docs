---
id: flashSwap
title: Flash Swap
sidebar_label: Flash Swap
---

## What is flash swap

简单来讲，就是允许你赊账！当你在 DODO buy/sell 的时候，你可以先获得要购买的 token，do anything you want with 这笔钱。之后再支付货款。

## How flash swap works

![](https://dodoex.github.io/docs/img/dodo_flash_swap.jpeg)
上图展示了一笔 flash swap 所包含的四个步骤

1.  调用 DODO smart contract 的`buyBaseToken`
2.  DODO 会将 Base token 先转给 message sender
3.  如果`buyBaseToken`的参数`data`不为空，DODO smart contract 会调用 message sender 的`dodoCall`方法
4.  待`dodoCall`执行完后，DODO smart contract 会从 message sender 收取这笔交易所需的 quote token

:::note
`sellBaseToken`同理也可以执行 flash swap，这里不再赘述。
:::

flash swap 要求 message sender 是符合下面 interface 的合约

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

Flash swap 可以大大提高市场有效性。

市场平价是由套利者维护的，flash swap 可以完全免除套利者的资金需求，大大降低套利门槛，进而促进了市场有效性。这里我们将给出 swap flash 的使用案例，一个完全 trustless 且 risk free 的套利合约。

[source code](https://github.com/radar-bear/dodo-smart-contract/blob/master/contracts/helper/UniswapArbitrageur.sol)

[deployed address]()

![](https://dodoex.github.io/docs/img/dodo_one_click_arbitrage.jpeg)

一笔套利由以下 9 个步骤组成：

1.  User calls executeBuyArbitrage on Arbitrageur Contract
2.  Arbitrageur Contract calls buyBaseToken on DODO and triggers flash swap
3.  DODO transfers 1 WETH to Arbitrageur Contract
4.  DODO calls dodoCall on Arbitrageur Contract
5.  Arbitrageur Contract transfers 1 WETH received from DODO to UniswapV2
6.  Arbitrageur Contract call swap on UniswapV2
7.  UniswapV2 transfers 200 USDC to Arbitrageur Contract
8.  DODO call transferFrom and retrieve 150 USDC from Arbitrageur Contract
9.  Arbitrageur Contract transfers the remaining 50 USDC to User

总结起来就是

- step 2，3，4，8 构成了 flash swap
- step 5，6，7 构成了 uniswap
- 在用户看来只发生了两件事，发送 transaction 和盈利

这个合约的牛逼之处在于，用户不需要任何资本，也不需要知道 dodo 和 uniswap 的存在。只要 call function。如果执行成功就一定会挣钱，如果执行失败也只损失 gas。

当然为了避免无意义的 gas 消耗，我们建议用户预先使用[eth_call](https://infura.io/docs/ethereum/json-rpc/eth-call)执行`executeBuyArbitrage`或`executeSellArbitrage`估计套利收益。如果有套利机会，则这两个函数分别会返回执行成功后的 quote token 和 base token 收益。

## 关于 flash swap 的一些想法

一旦你深入理解了 flash swap，就会发现 defi 世界相较于中心化世界的优越性。智能合约的可组合性使得 defi 的资金利用率提高到了前所未有的高度，又因为 trustless，defi 世界的信贷成本低到不可思议。一旦这种金融制度可以和现实世界结合，对人类生产力的促进是难以想象的。

我给很多人讲过智能合约的迷人之处，却少有人能体会。希望 flash swap 可以成为一个普通人也能理解的有趣案例。

:::note
Flash swap is inspired by [DyDx](https://dydx.exchange/) and [Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps). We really appriciate what they have done before!
:::
