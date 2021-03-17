---
id: framework
title: Smart Contract Framework
sidebar_label: Framework
---

## Overview

DODO V2 is built with a set of smart contracts. which can realize a series of core features including DODO Vending Machine, DODO Private Pool, Crowdpooling, Liquidity Management, SmartTrade and DODOnomics,etc.

![](https://dodoex.github.io/docs/img/dodo_framework_v2.png)

## DODOApprove

DODO V2 abstracts a global token authorization contract (`DODOApprove`) from the contract structure. For different types of tokens, users only need to authorize once, and then they can smoothly perform operations such as trade and liquidity management.

`DODOApprove` as the platform's entrance, helps users to securely manage token authorization. At the same time, we have added a time lock mechanism to `DODOApprove`. When we upgrade `DODOProxy` or add other contracts, the time lock mechanism will ensure that the operation cools down for 3 days, leaving enough time to publicize contract adjustments to the community. To enhance the trust of `DODOApprove`.

## DODOV2Proxy

`DODOV2Proxy` is the contract that users interact most of the time. It integrates the smartTrade, creating DODO vending machine, DODO private pool, crowdPooling, and liquidity management functions. At the same time, features such as gas subsidies and trading mining have been implemented internally, and helping users do the mutual conversion of WETH and ETH. All of these are hidden functions. The purpose is to improve the user's experience and as much as possible to reduce transaction costs.

## Factory Contract

Factory contracts include `DPPFactory` (DODO private pool factory), `DVMFactory` (DODO vending machine factory), and `CrowdPoolingFactory`. Their functions include one-step creation of different types of pools. At the same time, the pool address will be registered in the factory contract, acting as the platform's registry and the only source of the pools created by the DODO platform.

## Others

The contracts currently registered in `DODOApprove` includes another two contracts.

### DODOMigrationBSC

Binance Smart Chain (BSC), as our currently layer2 solution, requires the migration of `DODO` tokens to support business running on BSC. We adopt a common token mapping method, which locks DODO token on the Ethereum network, and mints the same amount DODO token on BSC. maintaining the total amount of DODO tokens unchanged and can be circulated freely on the two networks. The function of `DODOMigrationToBSC` is locking user's Ethereum DODO token.

### vDODO

`vDODO` is a token that serves as a user's proof of membership in DODO’s loyalty program. Users can deposit `DODO` to mint `vDODO`. having the right to enjoy the benefits of the platform and obtain block distribution rewards of `DODO`. It is also the right to vote for the follow-up governance of the platform.