---
id: mining
title: Liquidity Mining Contract Interface Description
sidebar_label: Liquidity Mining
---

Currently there are two types of liquidity mining contracts. In this document, we will elaborate on their corresponding contract interface and ongoing liquidity mining projects on different blockchains. 

## DODOMineV1

The first version of the mining contract can flexibly add and remove staked tokens, and divide the overall DODO token reward by setting the weight of each staked token. This version is primarily geared towards DODO V1 type pools, which provide DODO token rewards for those LPs with a single token liquidity provision. 

The primary contract interfaces include `deposit`, `withdraw` && `withdrawAll`, `claim` && `claimAll`.

For the `deposit` function deposit: input the address of the deposited tokens and the number of tokens deposited by the user. Before calling it, ensure that the user's deposited tokens are authorized to the mining contract, and that the mining contract internally transfers the deposited tokens from the user's account to the mining contract via `transferFrom`. By calling `deposit`, the contract will also automatically withdraw and transfer the user's current rewards to the user's account.

```
function deposit(address _lpToken, uint256 _amount) public;
```

Regarding the withdrawal, there are two functions: `withdraw` && `withdrawAll`. For the function `withdraw`, input the address of the tokens to be withdrawn and specify the number of tokens to be withdrawn. While for the `withdrawAll` function, only input the address of the tokens to be withdrawn, and the contract will internally withdraw all the tokens deposited by the current user to their account. Also, by calling these two functions, the contract will automatically withdraw and transfer the rewards that the user has currently earned to his or her account.

```
function withdraw(address _lpToken, uint256 _amount) public;

function withdrawAll(address _lpToken) public;
```
Regarding the two claim functions `claim` && `claimAll`, the former requires inputting the address of the deposited tokens corresponding to the reward tokens to be withdrawn. And the latter will withdraw all the mining rewards that the user has gained from the mining. Since this function will consume more gas, please use with caution. 

```
function claim(address _lpToken) public;

function claimAll() public;
```

The first version of the mining contract also involves a number of read functions.

The function `getUserLpBalance` returns the number of tokens deposited by the user, and requires inputting the address of the deposited tokens and the user's address.

```
function getUserLpBalance(address _lpToken, address _user) public view returns (uint256);
```

Two functions to get the number of token rewards of a user: `getPendingReward` && `getAllPendingReward`. The former requires inputting deposited token addresses, as well as the user address to get the number of user rewards corresponding to the current deposit. The latter only requires inputting the user's address and then it will return the total number of token rewards for all mining projects in which the user has participated. 

```
function getPendingReward(address _lpToken, address _user) external view returns (uint256);

function getAllPendingReward(address _user) external view returns (uint256);
```

*Note: The reward for the first version of liquidity mining is flexible.*

### The Ongoing Liquidity Minings in the First Version of the Contracts

- ETH (Liquidity Mining Contract Address：[0xaed7384f03844af886b830862ff0a7afce0a632c](https://etherscan.io/address/0xaed7384f03844af886b830862ff0a7afce0a632c)) (Currently Releasing 4.2 DODO Rewards Per Block)：

    - Deposit WETH DLP (0xc11eCCDee225d644f873776A68A02eCD8c015697)、Liquidity Pool WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、Weight 200
    - Deposit USDC DLP (0x6a5Eb3555cBbD29016Ba6F6fFbCcEE28D57b2932)、Liquidity Pool WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、Weight 200
    
    - Deposit WBTC DLP (0x2eC2A42901c761b295a9e6b95200cd0BdAa474Eb)、Liquidity Pool WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、Weight 200
    - Deposit USDC DLP (0x0cDb21e20597d753C90458f5eF2083f6695eb794)、Liquidity Pool WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、Weight 200
    
    - Deposit USDC DLP (0x05a54b466F01510E92c02d3a180BaE83A64BAab8)、Liquidity Pool USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、Weight 440
    - Deposit USDT DLP (0x50b11247bF14eE5116C855CDe9963fa376FceC86)、Liquidity Pool USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、Weight 440

- BSC (Liquidity Mining Contract Address：[0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750](https://bscscan.com/address/0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750)) (Currently Releasing 0.54 DODO Rewards Per Block)

    - Deposit BUSD DLP (0xBEb34A9d23E0fe41d7b08AE3A4cbAD9A63ce0aea)、Liquidity Pool  BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、Weight 0.22
    - Deposit USDT DLP (0x56ce908EeBafea026ab047CEe99a3afF039B4a33)、Liquidity Pool  BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、Weight 0.22
    
    - Deposit USDC DLP (0xc9e1d10442296c4729270b9c1de15f742ae1c981)、Liquidity Pool  USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、Weight 0.05
    - Deposit BUSD DLP (0xddee2e5f98bbe93e77f16bfa6b5669c688396f93)、Liquidity Pool  USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、Weight 0.05

- Arbitrum One(Liquidity Mining Contract Address：[0xE3C10989dDc5Df5B1b9c0E6229c2E4e0862fDe3e](https://arbiscan.io/address/0xE3C10989dDc5Df5B1b9c0E6229c2E4e0862fDe3e)) (Currently Releasing 1.5 DODO Rewards Per Block)

    - Deposit WETH DLP (0x73Ad4e910eB472229b557b52E37BC136f983A955)、Liquidity Pool  WETH-USDC(0xfe176a2b1e1f67250d2903b8d25f56c0dabcd6b2)、Weight 200
    - Deposit USDC DLP (0x48422A133501F0a3A542905F31167c198129A828)、Liquidity Pool  WETH-USDC(0xfe176a2b1e1f67250d2903b8d25f56c0dabcd6b2)、Weight 200
    
    - Deposit WBTC DLP (0xb94904Bbe8A625709162DC172875FBC51c477aBB)、Liquidity Pool  WBTC-USDC(0xb42a054D950daFD872808B3c839Fbb7AFb86E14C)、Weight 200
    - Deposit USDC DLP (0x1e90B696e07D0b8c79840BAF61e07Ee0D894dBBF)、Liquidity Pool  WBTC-USDC(0xb42a054D950daFD872808B3c839Fbb7AFb86E14C)、Weight 200
    
    - Deposit USDT DLP (0x82B423848CDd98740fB57f961Fa692739F991633)、Liquidity Pool  USDT-USDC(0xe4B2Dfc82977dd2DCE7E8d37895a6A8F50CbB4fB)、Weight 200
    - Deposit USDC DLP (0x7eBd8a1803cE082d4dE609C0aA0813DD842BD4DB)、Liquidity Pool  USDT-USDC(0xe4B2Dfc82977dd2DCE7E8d37895a6A8F50CbB4fB)、Weight 200


- Aurora (Liquidity Mining Contract Address：[0xDBFaF391C37339c903503495395Ad7D6B096E192](https://explorer.mainnet.aurora.dev/address/0xDBFaF391C37339c903503495395Ad7D6B096E192)) (Currently Releasing 0.1 DODO Rewards Per Block)

    - Deposit USDT DLP (0xB279E0740a022F5678565d699fa8Ff0bb6D7f95b)、Liquidity Pool  USDT-USDC(0x6790424249CAd1bCe244B55afBb240703f5265F6)、Weight 200
    - Deposit USDC DLP (0xb96947abFb0001Aa0860787086daBc97fC8ac468)、Liquidity Pool  USDT-USDC(0x6790424249CAd1bCe244B55afBb240703f5265F6)、Weight 200

## DODOMineV2

In the second version of the mining contract, each deposited token corresponds to a contract and supports mining other tokens.

The primary contract interface includes `deposit`, `withdraw`, and `claimReward` && `claimAllRewards`.

For the `deposit` function deposit, the input parameter required is the number of tokens deposited. Ensure that the user's tokens are authorized to the current mining contract before depositing, and the mining contract internally transfers the user's deposited tokens to the mining contract by calling the `transferFrom` function.

```
function deposit(uint256 amount) external
```
For the deposited token withdrawal function `withdraw`, the input is the number of deposited tokens to be withdrawn. 

```
function withdraw(uint256 amount) external
```
For the mining rewards claim function `claimReward` && `claimAllRewards`, the former requires inputting in the serial number corresponding to the reward tokens and claiming only the corresponding reward tokens; the latter will claim all the extra reward tokens mined.

```
function claimReward(uint256 i) public 

function claimAllRewards() external
```

The second version of the mining contract also involves a number of read functions.

To get the number of reward tokens that are yet to be claimed, there are two functions: `getPendingReward` && `getPendingRewardByToken`. The former requires inputting the user address and the corresponding reward token serial number. While the latter requires inputting the user address and the reward token address.

```
function getPendingReward(address user, uint256 i) public view returns (uint256);

function getPendingRewardByToken(address user, address rewardToken) external view returns (uint256);
```
*Note: The reward for the second version of liquidity mining is flexible.*

### The Ongoing Liquidity Minings in the Second Version of the Contract

#### ETH

- Deposit DAI-USDT DLP (0x3058ef90929cb8180174d74c507176cca6835d73)
- Liquidity Mining Contract Address: 0x1A4F8705E1C0428D020e1558A371b7E6134455A2
- Token Reward: DODO (1.25 DODO Per Block)
- Ending Block Height: 14153000

---

- Deposit THALES-ETH DLP (0x031816fD297228e4FD537c1789D51509247D0B43)
- Liquidity Mining Contract Address: 0x136829c258E31B3AB1975Fe7D03d3870C3311651
- Token Reward: DODO (0.3374 DODO Per Block)
- Token Reward: THALES (1.1248 THALES Per Block)
- Ending Block Height: 14092340

---

- Deposit oneDODO-USDC DLP (0xaa89cab926dcd65b3779aa98d9342fd9a21e5d1c)
- Liquidity Mining Contract Address: 0xf9B8500b5012c059f30daA734d3A7131d668b1cd
- Token Reward: ICHI (0.1242 ICHI Per Block)
- Ending Block Height: 13933160


#### BSC

- Deposit DODO-BNB DLP (0xd534fae679f7f02364d177e9d44f1d15963c0dd7)
- Liquidity Mining Contract Address 0x322B43e406D1B4Df9Bc36d058317Dd1cd3b0385F
- Token Reward DODO (0.3 DODO Per Block)
- Ending Block Height: 15092000


#### Arbitrum One

- Deposit DODO-USDC DLP (0x6a58c68ff5c4e4d90eb6561449cc74a64f818da5)
- Liquidity Mining Contract Address 0x38Dbb42C4972116c88E27edFacD2451cf1b14255
- Token Reward DODO (0.5 DODO Per Block)
- Ending Block Height: 14200000

---

- Deposit DF-USX DLP (0x19e5910f61882ff6605b576922507f1e1a0302fe)
- Liquidity Mining Contract Address 0x20191f1Bd3f20f21519084ec07570bBa3533d098
- Token Reward DODO (0.0223 DODO Per Block)
- Token Reward DF (1.194 DF Per Block)
- Ending Block Height: 14093335

---

- Deposit USX-USDC DLP (0x9340e3296121507318874ce9c04afb4492af0284)
- Liquidity Mining Contract Address 0x05EA5955a51225Cd228C911220f4c6f027aa28dB
- Token Reward DODO (0.0223 DODO Per Block)
- Token Reward DF (1.194 DF Per Block)
- Ending Block Height: 14093335


#### Aurora

- Deposit DODO-USDC DLP (0xc7689e5315a8b237ac7ab62119df299dd8c4b6d5)
- Liquidity Mining Contract Address 0x10353A2e2EeAE8369c685526FC724137002BBDF9
- Token Reward DODO (0.1 DODO Per Block)
- Token Reward NEAR (0.007 DF Per Block)
- Ending Block Height: 58687000