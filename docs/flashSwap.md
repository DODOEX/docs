---
id: flashSwap
title: Flash Swap
sidebar_label: Flash Swap
---

## What is flash swap

简单来讲，就是允许你赊账！当你在 DODO buy/sell 的时候，你可以先获得要购买的 token，do anything you want with 这笔钱。之后再支付货款。

Simply put, you are allowed to pay on credit! When you buy or sell on DODO, you can first get the token you want to buy, do anything you want with the token and then pay for it later.

## How does flash swap work

![](https://dodoex.github.io/docs/img/dodo_flash_swap.jpeg)

The picture above shows the four steps to make flash swap

1.  Call the buyBaseToken of the DODO smart contract
2.  DODO will transfer the Base token to the message sender first
3.  If the parameter Data of buyBaseToken is not null, the DODO smart contract will call the dodoCall method of the message sender
4.  After the dodoCall is executed, the DODO smart contract will retrieve the quote token required for this transaction from the message sender

:::note
The sellBaseToken can also perform flash swap in the same way.
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

An arbitrage consists of the following 9 steps:
User calls executeBuyArbitrage on Arbitrageur Contract
Arbitrageur Contract calls buyBaseToken on DODO and triggers flash swap
DODO transfers 1 WETH to Arbitrageur Contract
DODO calls dodoCall on Arbitrageur Contract
Arbitrageur Contract transfers 1 WETH received from DODO to UniswapV2
Arbitrageur Contract call swap on UniswapV2
UniswapV2 transfers 200 USDC to Arbitrageur Contract
DODO call transferFrom and retrieve 150 USDC from Arbitrageur Contract
Arbitrageur Contract transfers the remaining 50 USDC to User

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
