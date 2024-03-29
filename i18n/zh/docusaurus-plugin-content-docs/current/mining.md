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

- ETH (挖矿合约地址：[0xaed7384f03844af886b830862ff0a7afce0a632c](https://etherscan.io/address/0xaed7384f03844af886b830862ff0a7afce0a632c)) (当前每区块释放4.2个DODO奖励)：

    - 质押WETH DLP (0xc11eCCDee225d644f873776A68A02eCD8c015697)、流动性池 WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、权重为200
    - 质押USDC DLP (0x6a5Eb3555cBbD29016Ba6F6fFbCcEE28D57b2932)、流动性池 WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、权重为200
    
    - 质押WBTC DLP (0x2eC2A42901c761b295a9e6b95200cd0BdAa474Eb)、流动性池 WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、权重为200
    - 质押USDC DLP (0x0cDb21e20597d753C90458f5eF2083f6695eb794)、流动性池 WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、权重为200
    
    - 质押USDC DLP (0x05a54b466F01510E92c02d3a180BaE83A64BAab8)、流动性池 USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、权重为400
    - 质押USDT DLP (0x50b11247bF14eE5116C855CDe9963fa376FceC86)、流动性池 USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、权重为400

- BSC (挖矿合约地址：[0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750](https://bscscan.com/address/0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750)) (当前每区块释放0.54 DODO奖励)

    - 质押BUSD DLP (0xBEb34A9d23E0fe41d7b08AE3A4cbAD9A63ce0aea)、流动性池 BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、权重为0.22
    - 质押USDT DLP (0x56ce908EeBafea026ab047CEe99a3afF039B4a33)、流动性池 BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、权重为0.22
    
    - 质押USDC DLP (0xc9e1d10442296c4729270b9c1de15f742ae1c981)、流动性池 USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、权重为0.05
    - 质押BUSD DLP (0xddee2e5f98bbe93e77f16bfa6b5669c688396f93)、流动性池 USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、权重为0.05
    
- Arbitrum One(挖矿合约地址：[0xE3C10989dDc5Df5B1b9c0E6229c2E4e0862fDe3e](https://arbiscan.io/address/0xE3C10989dDc5Df5B1b9c0E6229c2E4e0862fDe3e)) (当前每区块释放1.5DODO奖励)

    - 质押WETH DLP (0x73Ad4e910eB472229b557b52E37BC136f983A955)、流动性池 WETH-USDC(0xfe176a2b1e1f67250d2903b8d25f56c0dabcd6b2)、权重为200
    - 质押USDC DLP (0x48422A133501F0a3A542905F31167c198129A828)、流动性池 WETH-USDC(0xfe176a2b1e1f67250d2903b8d25f56c0dabcd6b2)、权重为200
    
    - 质押WBTC DLP (0xb94904Bbe8A625709162DC172875FBC51c477aBB)、流动性池 WBTC-USDC(0xb42a054D950daFD872808B3c839Fbb7AFb86E14C)、权重为200
    - 质押USDC DLP (0x1e90B696e07D0b8c79840BAF61e07Ee0D894dBBF)、流动性池 WBTC-USDC(0xb42a054D950daFD872808B3c839Fbb7AFb86E14C)、权重为200
    
    - 质押USDT DLP (0x82B423848CDd98740fB57f961Fa692739F991633)、流动性池 USDT-USDC(0xe4B2Dfc82977dd2DCE7E8d37895a6A8F50CbB4fB)、权重为200
    - 质押USDC DLP (0x7eBd8a1803cE082d4dE609C0aA0813DD842BD4DB)、流动性池 USDT-USDC(0xe4B2Dfc82977dd2DCE7E8d37895a6A8F50CbB4fB)、权重为200

- Aurora (挖矿合约地址：[0xDBFaF391C37339c903503495395Ad7D6B096E192](https://explorer.mainnet.aurora.dev/address/0xDBFaF391C37339c903503495395Ad7D6B096E192)) (当前每区块释放 0.1 DODO奖励)

    - 质押USDT DLP (0xB279E0740a022F5678565d699fa8Ff0bb6D7f95b)、Liquidity Pool  USDT-USDC(0x6790424249CAd1bCe244B55afBb240703f5265F6)、权重为200
    - 质押USDC DLP (0xb96947abFb0001Aa0860787086daBc97fC8ac468)、Liquidity Pool  USDT-USDC(0x6790424249CAd1bCe244B55afBb240703f5265F6)、权重为200

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
- 奖励代币 DODO （每区块1.25）
- 结束区块高度 14153000

---

- 质押代币 THALES-ETH DLP (0x031816fD297228e4FD537c1789D51509247D0B43)
- 挖矿合约 0x136829c258E31B3AB1975Fe7D03d3870C3311651
- 奖励代币 DODO (每区块 0.3374 DODO )
- 奖励代币 THALES (每区块 1.1248 THALES)
- 结束区块高度 14092340

---

- 质押代币 oneDODO-USDC DLP (0xaa89cab926dcd65b3779aa98d9342fd9a21e5d1c)
- 挖矿合约 0xf9B8500b5012c059f30daA734d3A7131d668b1cd
- 奖励代币 ICHI (每区块 0.1242 ICHI )
- 结束区块高度 13933160

#### BSC

- 质押代币 DODO-BNB DLP (0xd534fae679f7f02364d177e9d44f1d15963c0dd7)
- 挖矿合约 0x322B43e406D1B4Df9Bc36d058317Dd1cd3b0385F
- 奖励代币 DODO （每区块0.3)
- 结束区块高度 15092000


#### Arbitrum One

- 质押代币 DODO-USDC DLP (0x6a58c68ff5c4e4d90eb6561449cc74a64f818da5)
- 挖矿合约 0x38Dbb42C4972116c88E27edFacD2451cf1b14255
- 奖励代币 DODO （每区块0.5)
- 结束区块高度 14200000

---

- 质押代币 DF-USX DLP (0x19e5910f61882ff6605b576922507f1e1a0302fe)
- 挖矿合约 0x20191f1Bd3f20f21519084ec07570bBa3533d098
- 奖励代币 DODO (每区块 0.0223 DODO)
- 奖励代币 DF (每区块 1.194 DF)
- 结束区块高度 14093335

---

- 质押代币 USX-USDC DLP (0x9340e3296121507318874ce9c04afb4492af0284)
- 挖矿合约 0x05EA5955a51225Cd228C911220f4c6f027aa28dB
- 奖励代币 DODO (每区块 0.0223 DODO)
- 奖励代币 DF (每区块 1.194 DF)
- 结束区块高度 14093335

#### Aurora

- 质押代币 DODO-USDC DLP (0xc7689e5315a8b237ac7ab62119df299dd8c4b6d5)
- 挖矿合约 0x10353A2e2EeAE8369c685526FC724137002BBDF9
- 奖励代币 DODO (0.1 DODO Per Block)
- 奖励代币 NEAR (0.007 DF Per Block)
- 结束区块高度 58687000