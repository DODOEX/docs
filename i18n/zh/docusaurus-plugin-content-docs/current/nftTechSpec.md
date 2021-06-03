---
id: nftTechSpec
title: DODO NFT 技术说明
sidebar_label: DODO NFT 技术说明
---

## DODONFT 相关合约

| 合约名称                | 目录                                | 
| ---------------------- | ---------------------------------- |
| DODONFTProxy           | contracts/SmartRoute/proxies/      |
| NFTCollateralVault     | contracts/CollateralVault/         |
| Fragment               | contracts/GeneralizedFragment/     |
| DODONFTRegistry        | contracts/Factory/Registries/      |

## DODONFT 合约概览图

![](https://dodoex.github.io/docs/img/dodonft_framework.png)


## 主要流程

### 创建Vault

首先用户通过调用`DODONFTProxy`合约中的`createNFTCollateralVault`函数，创建新的Vault合约，Vault合约用来存放NFT，兼容ERC721，ERC1155。并且可以为Vault设置全局的名称以及baseURI，baseURI可以指向资源文件，作为Vault的介绍信息

```
function createNFTCollateralVault(string memory name, string memory baseURI) external returns (address newVault);
```

### 导入NFT

创建的Vault合约用来存放NFT，用户可以存入ERC721，ERC1155，且没有任何数量限制，可以是一个NFT，也可以是多个。存入的NFT被Vault合约的owner所拥有，owner有权利以Vault为单位，进行整体的碎片化操作

若用户向Vault存入ERC721，需要将ERC721授权给Vault合约，第二步调用`NFTCollateralVault`的`depositERC721`函数, 传入的参数包括ERC721合约地址，以及存入的tokenId数组

```
function depositERC721(address nftContract, uint256[] memory tokenIds) external;
```

若用户向Vault存入ERC1155，需要将ERC1155授权给Vault合约，第二步调用`NFTCollateralVault`的`depositERC1155`函数，传入的参数包括ERC1155合约地址，以及存入的tokenId数组和对应的数量

```
function depoistERC1155(address nftContract, uint256[] memory tokenIds, uint256[] memory amounts) external;
```

### 碎片化

碎片化是针对Vault中导入的NFT进行统一的碎片化操作，背后的流程包括生成ERC20，并创建[DODO Vending Machine公开池](./publicPool)，同时向池子添加流动性，向二级市场提供了流通，被DODO DEX聚合后，可以实现任意币与碎片化ERC20代币互换。同时碎片化也涉及到Vault合约owner转移给碎片化合约的过程，即经过碎片化后，Vault中的NFT没有任何人可以提取，确保碎片化的ERC20代表着Vault中的全部NFT。

碎片化需要由Vault的owner触发，通过调用`NFTCollateralVault`中的`createFragment`函数实现


### 买断

经过碎片化的NFT，将会在二级市场流通，拥有碎片代币的人，代表了拥有背后NFT的一部分。若投资人希望完全拥有NFT，则可以触发买断的功能，调用`DODONFTProxy`的`buyout`函数

```
function buyout(
    address fragment,
    uint256 quoteMaxAmount,
    uint8 flag, // 0 - ERC20, 1 - quoteInETH
    uint256 deadLine
) external;
```

投资人需要按照当前碎片NFT的单价，乘上总量，提供对应总估值的代币，才可以进行买断。买断涉及到操作包括

- 投资人充入当前碎片NFT对应的总估值代币

- 撤掉当前碎片代币的流动性池，销毁流动性池中的碎片化代币

- 分配投入的代币，包括向原NFT作者支付未流通部分的代币市值，剩下的投入代币预留在`Fragment`合约内，供二级市场持有碎片NFT代币的用户来按照买断价格等值赎回

- 转移Vault owner为买断者，买断者可以后续将Vault中的NFT转出，当然可以再次碎片化，再次碎片化将会创建新的ERC20以及新的流动性池

### 赎回

若经过买断后，原二级市场流通的碎片NFT拥有者，可以按照买断时的单价，等值进行代币赎回，调用`Fragment`合约内的`redeem`函数，将自己手中的碎片NFT销毁，换取等值的代币

```
function redeem(address to, bytes calldata data) external;
```