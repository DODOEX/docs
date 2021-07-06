---
id: mining
title: 挖矿合约接口说明
sidebar_label: 挖矿合约接口说明
---

当前DODO平台下的流动性挖矿合约，包括两种版本实现。下面将会介绍相应的合约接口，以及在各个网络下进行的挖矿项目

## DODOMineV1

第一版的挖矿合约，可以灵活添加删除质押代币，通过设置各个质押代币的权重，划分整体的DODO代币奖励，同时第一版合约主要是针对DODO V1类型的池子，对单币提供流动性的LP，进行DODO代币奖励。

合约主要的写操作接口，包括质押`deposit`,提取`withdraw` && `withdrawAll`,提取奖励`claim` && `claimAll`。

对于质押函数`deposit`，需要传入质押代币的地址，以及用户质押的数量。在调用前，需要确保用户的质押代币授权给挖矿合约，挖矿合约内部通过`transferFrom`方法将用户账户的质押代币转移至挖矿合约中。同时调用`deposit`,合约也会将用户当前已获得奖励自动提取并转移至用户账户内

```
function deposit(address _lpToken, uint256 _amount) public;
```

对于提取功能，合约包括两种实现方法`withdraw` && `withdrawAll`。对于`withdraw`函数来说，需要传入提取的代币地址，以及指定提取的代币数量，而对于`withdrawAll`函数，只需要传入提取的代币地址即可，合约内部会将当前用户质押的全部代币提取至其账户下。同时，调用这两个函数，合约也会将用户当前已获得的奖励自动提取并转移至其账户内

```
function withdraw(address _lpToken, uint256 _amount) public;

function withdrawAll(address _lpToken) public;
```

对于提取奖励函数`claim` && `claimAll`。前者需要传入提取奖励代币所对应的质押代币地址。而后者会将当前用户所参加的全部挖矿奖励提取出来，但该函数会消耗更多的gas，请谨慎使用

```
function claim(address _lpToken) public;

function claimAll() public;
```

第一版挖矿合约还涉及到一些读函数，包括：

获取用户质押的代币数量函数`getUserLpBalance`, 需要传入质押的代币地址以及用户地址

```
function getUserLpBalance(address _lpToken, address _user) public view returns (uint256);
```

获取当前用户的奖励代币数量`getPendingReward` && `getAllPendingReward`, 前者需要传入质押的代币地址以及用户地址，获取当前质押对应的用户奖励数量。后者只需要传入用户地址，返回当前用户参与的所有挖矿项目的代币奖励总和

```
function getPendingReward(address _lpToken, address _user) external view returns (uint256);

function getAllPendingReward(address _user) external view returns (uint256);
```

*需要注意：当前第一版的挖矿活动，奖励调整会较为灵活，并非不可修改*

### 当前第一版合约进行的挖矿项目

- ETH (挖矿合约地址：[0xaed7384f03844af886b830862ff0a7afce0a632c](https://etherscan.io/address/0xaed7384f03844af886b830862ff0a7afce0a632c)) (当前每区块释放4个DODO奖励)：

    - 质押WETH DLP (0xc11eCCDee225d644f873776A68A02eCD8c015697)、流动性池 WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、权重为200
    - 质押USDC DLP (0x6a5Eb3555cBbD29016Ba6F6fFbCcEE28D57b2932)、流动性池 WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、权重为200
    
    - 质押WBTC DLP (0x2eC2A42901c761b295a9e6b95200cd0BdAa474Eb)、流动性池 WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、权重为200
    - 质押USDC DLP (0x0cDb21e20597d753C90458f5eF2083f6695eb794)、流动性池 WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、权重为200
    
    - 质押USDC DLP (0x05a54b466F01510E92c02d3a180BaE83A64BAab8)、流动性池 USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、权重为400
    - 质押USDT DLP (0x50b11247bF14eE5116C855CDe9963fa376FceC86)、流动性池 USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、权重为400

- BSC (挖矿合约地址：[0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750](https://bscscan.com/address/0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750)) (当前每区块释放0.5DODO奖励)

    - 质押BUSD DLP (0xBEb34A9d23E0fe41d7b08AE3A4cbAD9A63ce0aea)、流动性池 BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、权重为0.1
    - 质押USDT DLP (0x56ce908EeBafea026ab047CEe99a3afF039B4a33)、流动性池 BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、权重为0.1
    
    - 质押USDC DLP (0xc9e1d10442296c4729270b9c1de15f742ae1c981)、流动性池 USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、权重为0.05
    - 质押BUSD DLP (0xddee2e5f98bbe93e77f16bfa6b5669c688396f93)、流动性池 USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、权重为0.05
    

## DODOMineV2

第二版挖矿合约，一个质押代币对应一个合约，并支持多挖。

合约主要的写操作接口，包括质押`deposit`,提取`withdraw`,提取挖矿奖励`claimReward` && `claimAllRewards`

对于质押函数`deposit`,传入的参数为质押的代币数量，同时保证在质押前，用户的代币授权给当前挖矿合约，挖矿合约内部通过调用`transferFrom`函数将用户质押代币转移至挖矿合约内

```
function deposit(uint256 amount) external
```

对于提取质押代币函数`withdraw`，传入提取的质押代币数量

```
function withdraw(uint256 amount) external
```

对于提取挖矿奖励函数`claimReward` && `claimAllRewards`, 前者需要传入奖励代币对应的序号，只提取相应的奖励代币；后者会将多挖下的全部奖励代币提取出来

```
function claimReward(uint256 i) public 

function claimAllRewards() external
```

第二版挖矿合约还涉及到一些读函数，包括：

获取用户未领取的奖励代币数量`getPendingReward` && `getPendingRewardByToken`, 前者需要传入用户地址以及对应的奖励代币序号，后者传入用户地址以及奖励代币地址

```
function getPendingReward(address user, uint256 i) public view returns (uint256);

function getPendingRewardByToken(address user, address rewardToken) external view returns (uint256);
```
*需要注意：当前第二版的挖矿活动，奖励调整会较为灵活，并非不可修改*

### 当前第二版合约进行的挖矿项目

#### ETH

- 质押代币 DAI-USDT DLP (0x3058ef90929cb8180174d74c507176cca6835d73)
- 挖矿合约 0x1A4F8705E1C0428D020e1558A371b7E6134455A2
- 奖励代币 DODO （每区块1）
- 结束区块高度 13042500
---
- 质押代币 sUSD-USDT DLP (0xd84820f0e66187c4f3245e1fe5ccc40655dbacc9)
- 挖矿合约 0xd08e5cF0551aaEc0dA2f4FC595193F9E6b0295e0
- 奖励代币 DODO （每区块0.5）
- 结束区块高度 13042500

#### BSC

- 质押代币 DODO-BNB DLP (0xd534fae679f7f02364d177e9d44f1d15963c0dd7)
- 挖矿合约 0x322B43e406D1B4Df9Bc36d058317Dd1cd3b0385F
- 奖励代币 DODO （每区块0.3)
- 结束区块高度 9857935
---
- 质押代币 NABOX-BUSD DLP (0xb5b1bb7b0c1bc9e6ab556afbbdcca5c87f10e735)
- 挖矿合约 0xD43cce9B178cBE0fAFA8AA3b79dc737e331dAf83
- 奖励代币 NABOX (每区块 986.812)
- 奖励代币 DODO （每区块0.03024）
- 结束区块高度 9295685
---
- 质押代币 HUSD-BUSD DLP (0xfcafcfb6a5db0aa758eed30457cd1bc5268a8ede)
- 挖矿合约 0x849b7bc00280B8cC3221640Da2bC1c13F0dFBef3
- 奖励代币 DODO （每区块0.03813）
- 结束区块高度 9746500
