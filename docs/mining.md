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

- ETH (Liquidity Mining Contract Address：[0xaed7384f03844af886b830862ff0a7afce0a632c](https://etherscan.io/address/0xaed7384f03844af886b830862ff0a7afce0a632c)) (Currently Releasing 4 DODO Rewards Per Block)：

    - Deposit WETH DLP (0xc11eCCDee225d644f873776A68A02eCD8c015697)、Liquidity Pool WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、Weight 200
    - Deposit USDC DLP (0x6a5Eb3555cBbD29016Ba6F6fFbCcEE28D57b2932)、Liquidity Pool WETH-USDC(0x75c23271661d9d143DCb617222BC4BEc783eff34)、Weight 200
    
    - Deposit WBTC DLP (0x2eC2A42901c761b295a9e6b95200cd0BdAa474Eb)、Liquidity Pool WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、Weight 200
    - Deposit USDC DLP (0x0cDb21e20597d753C90458f5eF2083f6695eb794)、Liquidity Pool WBTC-USDC(0x2109F78b46a789125598f5ad2b7f243751c2934d)、Weight 200
    
    - Deposit USDC DLP (0x05a54b466F01510E92c02d3a180BaE83A64BAab8)、Liquidity Pool USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、Weight 400
    - Deposit USDT DLP (0x50b11247bF14eE5116C855CDe9963fa376FceC86)、Liquidity Pool USDC-USDT(0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD)、Weight 400

- BSC (Liquidity Mining Contract Address：[0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750](https://bscscan.com/address/0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750)) (Currently Releasing 0.5 DODO Rewards Per Block)

    - Deposit BUSD DLP (0xBEb34A9d23E0fe41d7b08AE3A4cbAD9A63ce0aea)、Liquidity Pool  BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、Weight 0.1
    - Deposit USDT DLP (0x56ce908EeBafea026ab047CEe99a3afF039B4a33)、Liquidity Pool  BUSD-USDT(0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7)、Weight 0.1
    
    - Deposit USDC DLP (0xc9e1d10442296c4729270b9c1de15f742ae1c981)、Liquidity Pool  USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、Weight 0.05
    - Deposit BUSD DLP (0xddee2e5f98bbe93e77f16bfa6b5669c688396f93)、Liquidity Pool  USDC-BUSD(0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10)、Weight 0.05
    

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
- Token Reward: DODO (1 DODO Per Block)
- Ending Block Height: 13042500
---
- Deposit sUSD-USDT DLP (0xd84820f0e66187c4f3245e1fe5ccc40655dbacc9)
- Liquidity Mining Contract Address: 0xd08e5cF0551aaEc0dA2f4FC595193F9E6b0295e0
- Token Reward: DODO (0.5 DODO Per Block)
- Ending Block Height: 13042500

#### BSC

- Deposit DODO-BNB DLP (0xd534fae679f7f02364d177e9d44f1d15963c0dd7)
- Liquidity Mining Contract Address 0x322B43e406D1B4Df9Bc36d058317Dd1cd3b0385F
- Token Reward DODO (0.3 DODO Per Block)
- Ending Block Height: 9857935
---
- Deposit NABOX-BUSD DLP (0xb5b1bb7b0c1bc9e6ab556afbbdcca5c87f10e735)
- Liquidity Mining Contract Address 0xD43cce9B178cBE0fAFA8AA3b79dc737e331dAf83
- Token Reward NABOX (986.812 NABOX Per Block)
- Token Reward DODO (0.03024 DODO Per Block)
- Ending Block Height: 9295685
---
- Deposit HUSD-BUSD DLP (0xfcafcfb6a5db0aa758eed30457cd1bc5268a8ede)
- Liquidity Mining Contract Address 0x849b7bc00280B8cC3221640Da2bC1c13F0dFBef3
- Token Reward: DODO (0.03813 DODO Per Block)
- Ending Block Height: 9746500
