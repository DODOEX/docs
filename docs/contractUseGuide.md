---
id: contractUseGuide
title: User Guide
sidebar_label: User Guide
---

## For traders

DODO V2 designs `DODOV2Proxy`, which encapsulating the bottom pools, realizing multi hops transaction routing. If a trader needs to direct use the underlying pool for trading, we have also unified definitions for different types of pools, exposing two functions for use: `sellBase` and `sellQuote`.

```javascript
 function sellBase(
   address to
 ) external returns (uint256 receiveQuoteAmount);
```

Use `sellBase` to sell base token and get quote token. This function requires the trader to construct a transaction that contains two actions. The first action is to transfer the base token to the pool contract, and the second action is to use a receiving address as a parameter to trigger sellBase. Before the end, traders are advised to check the value of `receiveQuoteAmount` to ensure the safe execution of the transaction.

```javascript
 function sellQuote(
   address to
 ) external returns (uint256 receiveBaseAmount);
```

Use `sellQuote` to sell quote token and get base token. This function also requires the trader to construct a transaction that contains two actions. The first action is to transfer the quote token to the pool contract, and the second action is to use a receiving address as a parameter to trigger sellQuote. Before the end, traders are advised to check the value of `receiveBaseAmount` to ensure the safe execution of the transaction.

DODO V2 also provides a view version of these two functions. View functions can be executed without sending transactions and they help users estimate prices bore spending gas. ps: the incoming parameters is the address of the trader

```javascript
 function querySellBase(
   address trader, 
   uint256 payBaseAmount
 ) external view  returns (uint256 receiveQuoteAmount,uint256 mtFee);

 function querySellQuote(
   address trader, 
   uint256 payQuoteAmount
 ) external view  returns (uint256 receiveBaseAmount,uint256 mtFee);
```

In the next section, we will go into more details about [flash swap](./flashSwap).

## For Liquidity Providers (LPs)

DODO V2 designs two types of pools, including DODO vending machine and DODO private pools. `DODOV2Proxy` encapsulates the liquidity management functions. And also people can directly interact with the underly pools.

### DODO vending machine

Anyone can participate in DODO vending machine, and due to the flexible design, the same trading pair can have more than one pools with different parameter settings. When user chooses the pool to participate, base and quote token will be injected according to the current ration. and user get `shares` assets minted by the pool.

`
ps: `shares` represents the lp's share of the asset pool. It is an erc20 token and can be traded freely. Each DODO vending machine corresponds to a kind of `shares`.
`


```javascript
 function buyShares(
   address to
 ) external returns (uint256 shares, uint256 baseInput, uint256 quoteInput)
```

Use `buyShares` to inject liquidity into the pool. User needs to construct a transaction consisting of two actions. The first action is to deposit tokens in the pool according to the current base and quote ratio. The second action is to use a receiving address as the parameter to trigger `buyShares`. Before the end, it is recommended checking the amount of the two actual deposited values of `baseInput` and `quoteInput` to ensure the safe execution of the transaction.

```javascript
 function sellShares(
    uint256 shareAmount,
    address to,
    uint256 baseMinAmount,
    uint256 quoteMinAmount,
    bytes calldata data,
    uint256 deadline
 ) external returns (uint256 baseAmount, uint256 quoteAmount)
```

Use `sellShares` to remove liquidity from the pool. User can directly call the corresponding function of the pool to execute the transaction. The reqeust parameters include the amount of shares removed, the receiving address, baseMinAmount used for slippage protection (the minimum received base amount), quoteMinAmount (the minimum received quote amount), data is generally set to empty, if it's not, the external contract call will be executed at the end to achieve additional functions such as the conversion from WETH to ETH, and deadline is the effective time after the transaction is sent, it will automatically fail when overtime aiming to protect the safe execution of the transaction.

### DODO Private Pool

DODO Private Pool is controlled by a single LP (market-making agency or project party, etc.), They has the authority to modify the pool's parameters dynamically and control the access of assets freely, which provides sufficient flexibility for the on-chain market-making strategy. The private pool has an owner, and the owner can set operator to realize the permission control.

The operator of the private pool can trigger the reset function in `DODOV2Proxy` to realize market making directly.

```javascript
  
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

Described as follows:

- dppAddress：the address of the private pool
- paramList：Array includes newLpFeeRate, newI (base amount/quote amount,decimals = 18 - base token decimal + quote token decimal), newK (0 equals to sell tokens in a constant price and 1 equals to bonding curve like uniswap)
- flag: mark of wrapping ETH or unwrapping WETH. (0 presents no conversion, 1 presents injecting base token wrapping to WETH, 2 presents injecting quote token wrapping to WETH, 3 presents removing base token unwrapping to ETH, 4 presents removing quote token unwrapping to ETH)
- minBaseReserve && minQuoteReserve: When the owener modifies the pool's parameters, sometimes may cause the pool's price changing. At this time, robot may preempt the arbitrage. Therefore, after these two parameters are set well, the transaction will fail if the amount of existing base and quote is smaller than the passed value, which is a protective mechanism. We recommend pool's owner to set with each  transaction.

The platform also provides a method for the owner to trigger the reset function at the bottom level, which is achieved by triggering the private pool's admin contract (the admin contract corresponds to the address of the owner parameter of the private pool)

```javascript
    
  function reset(
    address operator,
    uint256 newLpFeeRate,
    uint256 newI,
    uint256 newK,
    uint256 baseOutAmount,
    uint256 quoteOutAmount,
    uint256 minBaseReserve,
    uint256 minQuoteReserve
  ) external; 
```

If the owner trigger directly, operator can be empty. Other parameters descriptions are the same as above.

## For Developers

Developers can fetch metadata from `DODO Private Pool Factory` && `DODO Vending Machine Factory` && `DODO Stable Pool Factory`.

```javascript

  function getDODOPool(
    address baseToken,
    address quoteToken
  ) external view returns (address[] memory pools)

  function getDODOPoolBidirection(
    address token0,
    address token1
  ) external view returns (address[] memory baseToken0Pool, address[] memory baseToken1Pool)

  function getDODOPoolByUser(
    address user
  ) external view returns (address[] memory pools)

```
For `getDODOPool`, user need to distinguish base and quote as parameters in order, while for `getDODOPoolBidirection`, no need to distinguish base or quote token. And function will return two pool lists, which correspond to the token0 as base, the other is token1 as base. For `getDODOPoolByUser` will return the pool list under the user.

At the same time, we provide real-time monitoring of DODO platform's creation and removal events, which makes it easier to maintain the latest pool lists under the platform in real time

```javascript

  event NewDVM(
      address baseToken,
      address quoteToken,
      address creator,
      address dvm
  );

  event RemoveDVM(address dvm);

  event NewDPP(
      address baseToken,
      address quoteToken,
      address creator,
      address dpp
  );

  event RemoveDPP(address dpp);

  event NewDSP(
      address baseToken,
      address quoteToken,
      address creator,
      address dsp
  );

  event RemoveDSP(address dsp);

```
ps:  `NewDVM` and `RemoveDVM` are events from `DODO Vending Machine Factory`, `NewDPP` and `RemoveDPP` are events from `DODO Private Pool Factory`, and `NewDSP` and `RemoveDSP` are events from `DODO Stable Pool Factory`,

