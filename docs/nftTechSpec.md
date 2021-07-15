---
id: nftTechSpec
title: DODO NFT Tech Spec
sidebar_label: DODO NFT Tech Spec
---

## DODONFT Relevant Contracts

| Contract Name          | Catalog                            | 
| ---------------------- | ---------------------------------- |
| DODONFTProxy           | contracts/SmartRoute/proxies/      |
| NFTCollateralVault     | contracts/CollateralVault/         |
| Fragment               | contracts/GeneralizedFragment/     |
| DODONFTRegistry        | contracts/Factory/Registries/      |

## DODONFT Contract Overview

![](https://dodoex.github.io/docs/img/dodonft_framework.png)


## Process

### Create Vault

First, users can create a new Vault contract by calling the createNFTCollateralVault function in the `DODONFTProxy` contract, which is used to store NFT compatible with ERC721, ERC1155. Also, users can set the name and baseURI for Vault, which can point to the resource file as the Vault's introductory information.

```
function createNFTCollateralVault(string memory name, string memory baseURI) external returns (address newVault);
```

### Deposit NFT

The Vault that has been just created can be used to deposit NFT compatible with ERC721 or ERC1155, and there is no limit on the number of NFT users can deposit. The deposited NFTs are owned by the owner of the Vault contract, and the owner has the right to fragment the whole NFT by the unit of Vault.

If users deposit ERC721 to the Vault, the ERC721 needs to be authorized to the Vault contract. The second step is to call the depositERC721 function of the `NFTCollateralVault`, and include the following in the deposited parameter package: deposited contract address of the ERC721 and deposited tokenId array. 

```
function depositERC721(address nftContract, uint256[] memory tokenIds) external;
```

If users deposit ERC1155 to the Vault, the ERC1155 needs to be authorized to the Vault contract. The second step is to call the depositERC1155 function of the `NFTCollateralVault`, and include the following in the deposited parameter package: deposited contract address of the ERC1155, deposited tokenId array and its amount. 

```
function depoistERC1155(address nftContract, uint256[] memory tokenIds, uint256[] memory amounts) external;
```

### Fragmentation

Fragmentation refers to the process in which the deposited NFT is being fragmented. The whole process involves the creation of ERC20, the creation of [DODO Vending Machine public pool](./publicPool), liquidity provision to the pool, and circulation in the secondary market. Then users can trade against these ERC20 tokens using any tokens. The process also involves transferring the ownership of the Vault contract to the Fragment contract. After the fragmentation, no one can withdraw these NFTs, ensuring that the fragmented ERC20 tokens represent all the NFTs in the Vault.

Fragmentation needs to be triggered by the owner of the Vault, which is achieved by calling the createFragment function in `NFTCollateralVault`.


### Buyout

The fragmented NFT will be circulated in the secondary market, and those who own the fragmented tokens also own a portion of the NFT. If the buyer is looking to own the whole NFT, the buyout can be triggered by calling the buyout function of `DODONFTProxy`.

```
function buyout(
    address fragment,
    uint256 quoteMaxAmount,
    uint8 flag, // 0 - ERC20, 1 - quoteInETH
    uint256 deadLine
) external;
```

In order to make a buyout, buyers need to provide tokens corresponding to the total valuation at the current unit price of the fragmented NFT multiplied by the total amount. The following is what the buyout process looks like. 

- Buyers must deposit tokens, with the token's total valuation corresponding to that of the fragmented NFT.

- Remove the current liquidity pool of fragmented tokens and destroy the fragmented tokens in the liquidity pool.

- Allocate the deposited token. Including paying the original NFT creator the market value of the uncirculated portion of the tokens and leaving the rest of the deposited token in the `Fragment` contract. This will allow the holder of the fragmented token to redeem at the equivalent price of buyout.

- Transfer the ownership of the Vault to themselves. Buyers can subsequently transfer the NFT out of the Vault. This NFT can be fragmented again, which will create a new ERC20 and a new liquidity pool.

### Redeem

After the buyout, the holder of the fragmented NFT in circulation, in the secondary market, can redeem the token at the same value as the unit price at the time of the buyout, and call the redeem function within the Fragment contract to destroy their fragmented NFT in exchange for the equivalent value of the tokens.

```
function redeem(address to, bytes calldata data) external;
```