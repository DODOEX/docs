---
id: contractUseGuide
title: 合约用户指南
sidebar_label: 合约用户指南
---

## 对于交易者

DODO V2 提供了统一的`DODOV2Proxy`，针对底层的池子进行封装，可以在上层实现多跳池子连续交易。若交易者有直接使用底层池子交易的需求，我们也针对不同类型的池子进行了统一定义，暴露出两个函数供使用： `sellBase` and `sellQuote`

```javascript
 function sellBase(
   address to
 ) external returns (uint256 receiveQuoteAmount);
```

sellBase可以实现卖出base token，得到quote token。这个函数需要交易者构造一笔包含两个动作的交易，第一个动作是转入需要交换的base token至当前池子合约中，第二个动作是将交换的接收地址作为参数，触发sellBase。结束前建议交易者对`receiveQuoteAmount`进行余额检查，以确保交易的安全执行

```javascript
 function sellQuote(
   address to
 ) external returns (uint256 receiveBaseAmount);
```

同理，sellQuote可以实现卖出quote token，得到base token。这个函数同样需要交易者构造一笔包含两个动作的交易，第一个动作是转入需要交换的quote token至当前池子合约中，第二个动作是将交换的接收地址作为参数，触发sellQuote。结束前建议交易者对`receiveBaseAmount`进行余额检查，以确保交易的安全执行

DODO V2 同样会提供以上两个函数的结果预览，预览函数可以在不发送交易的情况下执行，帮助交易者预估价格，以节省 gas 费。注：传入的trader为交易者公钥地址

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

下面一部分我们会着重介绍[闪电交换](./flashSwap).

## 对于做市商

DODO V2 设计了两种类型的池子，包括公开池以及私有池，同样的 DODO V2 提供了统一的`DODOV2Proxy`，封装了不同类型池子流动性管理功能。以下是直接与池子底层交互的做市商管理方法。

### 公开池

公开池是任何人均可参与的一种池子，并且由于DODO的灵活设计，相同的交易对可以有不同参数设定的池子，用户选择公开池参与做市时，按池子当前的比例充入`base` 与 `quote`资产，获得池子铸造的`shares`资产额。

`
注意：shares 代表做市商在资产池中所占份额。其是一个ERC 20 格式的代币，可以自由交易。每个公开池对应一种shares。
`

```javascript
 function buyShares(
   address to
 ) external returns (uint256 shares, uint256 baseInput, uint256 quoteInput)
```

这个函数可实现向池子注入流动性，需要做市商构造一笔包含两个操作的交易，第一个操作是按池子当前的base、quote比例，存代币至池子合约，第二个操作是将shares接收地址作为参数，触发buyShares。结束前建议做市商对`baseInput`，`quoteInput`这两个实际存入的代币数量进行数量检查，以确保交易的安全执行


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

这个函数可实现从池子提取流动性，做市商可以直接调用池子对应的函数执行交易，其中传入的参数包括移除的shares数量、资金接收地址、以及用于滑点保护的baseMinAmount（预期最小接收的base数量），quoteMinAmount（预期最小接收的quote数量），data一般设置为空即可，若不为空，会在函数执行的最后，执行外部合约调用，以实现诸如WETH转为ETH等额外功能，最后的deadline为交易发出后的有效时间，超时自动失败，以保护交易的安全执行


### 私有池


私有池完全由单一的做市商（做市机构或者项目方等）进行做市，拥有动态修改池子参数，自由控制资金出入的权限，为实现链上做市策略提供了足够的灵活度。私有池存在管理员（owner）身份，同时管理员可以设定操作员（operator），以实现私有池子的权限控制。

私有池的操作员（operator）可以直接调用`DODOV2Proxy`中的重置函数来实现做市

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

参数说明如下：

- dppAddress：私有池的合约地址
- paramList：按序传⼊新的手续费率，价格（base/quote，单位是 18 - base decimals + quote decimals），新的曲线波动系数（0 代表恒定价格卖币，10**18 代表类Uniswap的价格曲线斜率）
- amountList: 按序传⼊baseInAmount、quoteInAmount、baseOutAmount、 quoteOutAmount，可以为0
- flag: 主要⽤于ETH与WETH的互转标识, 0 代表不需要转换， 1代表添加的base为eth， 2代表添加的quote为eth，3 代表移除的base转为eth， 4 代表移除的quote转为eth
- minBaseReserve && minQuoteReserve: 当做市商发起交易，修改池⼦参数时，可能会造成池⼦的价格改变，这时候机器⼈可能会抢跑套利，因此这两个参数设定后，当执⾏时池⼦现存的base，quote的数量⼩ 于传⼊的值，该交易会失败。起到保护的机制，建议每笔交易均设定
- deadline: 交易时效保护，超时后直接失败

平台同样提供了私有池的管理员（owner）底层调用重置函数的方法，即通过触发私有池的管理合约实现（管理合约对应私有池中owner参数的地址）

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
其中operator为操作员地址，若管理员直接调用，此处可以为空。其他参数说明同上


## 对于开发人员

开发人员可以从工厂合约（`DPPFactory` && `DVMFactory` && `DSPFactory` 需被分别调用）中获取平台已经创建的所有池子地址，以实现检索展示等功能

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

getDODOPool 与 getDODOPoolBidirection 的区别是前者需要区分出base、quote按序作为参数传入，而后者不需要区分base、quote，检索出的结果包括两个数组，分别对应token0为base的池子列表，以及token1为base的池子列表。最后一个检索函数以创建者地址作为参数，获取其账户下创建的池子列表


同时，我们提供了实时监听DODO平台创建与移除池子的事件，可以更方便的实时维护平台最新的池子列表

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

其中`NewDVM`与`RemoveDVM`是`DVMFactory`中的事件，`NewDPP` 与 `RemoveDPP` 是 `DPPFactory`中的事件，`NewDSP` 与 `RemoveDSP` 是 `DSPFactory`中的事件
