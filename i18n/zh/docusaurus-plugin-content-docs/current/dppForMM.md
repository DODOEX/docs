---
id: dppForMM
title: 私有池对接说明
sidebar_label: 私有池对接说明
---

## 介绍

DODO V2的私有池 可以由做市商提供自有资金独立做市，并且做市过程中可以灵活修改私有池配置，包括交易手续费率、当前外部指导价格 I、曲线滑点系数 K、同时支持调整池子的资金规模等。这一切修改均由相关账户触发智能合约进行动态的链上做市调整。


## 操作说明

做市商可以通过调用`DODO V2Proxy02`（地址见合约信息页）中的`resetDODOPrivatePool`方法，以实现动态的做市调整，具体的方法定义如下：

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

### 入参说明：

- dppAddress: 私有池合约地址

- paramList: 按序传入 交易手续费率、外部指导价格、曲线滑点系数，其中:
    - 交易手续费率：单位是 18，范围是[0, 1e18]，其中1e18代表100%
    - 外部指导价格：单位是 18 - baseToken单位 + quoteToken单位, 外部指导价格是 base/quote 两种代币价格的比例
    - 曲线滑点系统：单位是 18，范围是[0, 1e18], 代表价格曲线波动的程度，其中0相当于恒定价格卖币，1e18是类Uni的价格曲线

- amountList：按序传入 baseInAmount、quoteInAmount、baseOutAmount、quoteOutAmount（均考虑各自单位），前两者代表向私有池注入的base与quote的代币数量，注入前，需要将代币授权给`DODOApprove`合约（地址见合约信息页），后两者代表从私有池中提取的base与quote代币数量。从而实现动态调整私有池的资金规模

- flag：主要用于 ETH与WETH 的互转，其中
    - 0 代表base与quote均是ERC20代币
    - 1 代表转入的base是ETH，因此合约会自动将ETH转为WETH
    - 2 代表转入的quote是ETH，因此合约会自动将ETH转为WETH
    - 3 代表提取的base是WETH，因此合约会自动将WETH转为ETH
    - 4 代表提取的quote是WETH，因此合约会自动将WETH转为ETH

- minBaseReserve与minQuoteReserve 主要用于降低抢跑交易的套利，当做市账户发起交易，修改私有池参数时，有可能会造成池子的价格改变，因此在发出以及真正交易上链的时间间隔内，机器人可能会抢跑套利，这两个参数设定后，当上链执行时池子的现存资金规模有一方小于设定的值，则该笔交易会被合约revert掉，以降低套利风险

- deadline：交易时效，超时后合约revert


## 附：

DODOV2Proxy 各链地址：

- ETH： [0xa356867fDCEa8e71AEaF87805808803806231FdC](https://etherscan.io/address/0xa356867fDCEa8e71AEaF87805808803806231FdC)
- BSC： [0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486](https://bscscan.com/address/0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486) 
- HECO：[0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7](https://hecoinfo.com/address/0xAc7cC7d2374492De2D1ce21e2FEcA26EB0d113e7)

DODOApprove 各链地址：

- ETH： [0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149](https://etherscan.io/address/0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149) 
- BSC： [0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1](https://bscscan.com/address/0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1)
- HECO：[0x68b6c06Ac8Aa359868393724d25D871921E97293](https://hecoinfo.com/address/0x68b6c06Ac8Aa359868393724d25D871921E97293) 

DODOV2Proxy ABI：

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