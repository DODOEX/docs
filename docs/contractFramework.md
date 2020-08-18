---
id: framework
title: Smart Contract Framework
sidebar_label: Framework
---

## Overview

DODO is built with a set of smart contracts. The following figure shows the framework of [these contracts](https://github.com/DODOEX/dodo-smart-contract) and how they interact with each other in the DODO architecture.

![](https://dodoex.github.io/docs/img/dodo_framework.jpeg)

## Core

The core part of the DODO framework, which contains all the data and logic of DODO, consists of a set of DODO Proxy contracts and a singular DODO Implementation contract. Each trading pair binds with an independent `DODO Proxy` contract (e.g. WETH-USDC, DAI-USDT, etc.), which is a transparent proxy that only stores states and metadata. All underlying logic lies in the `DODO Implementation` contract.

For convenience's sake, we will call the transparent proxy `DODO Pair` and the logic implementation `DODO Template`. Users should interact with `DODO Pair` directly or through `Helper`.

## Entrance

DODO is an open-source contract, and the DODO team welcomes forks. However, it is important to note that the operation of `DODO Pair` is highly dependent on oracles and parameter fine-tuning, and a misconfigured `DODO Pair` could potentially cause significant losses for users. Therefore, we deployed an entrance contract to help blockchain developers navigate these obstacles. All `DODO Pair`s registered in this contract have been rigorously tested and audited, as the DODO team believes the safety of DODO users is of utmost importance. Developers should only look for the entrance called `DODO Zoo` when developing upon DODO. Even if the `DODO Template` is upgraded, `DODO Zoo` will remain unchanged. 

## Helper

There are a lot of tedious tasks that can be packaged using contracts to make them easy to use and understand. For example, the `DODO ETH Proxy` shown in the figure above helps users convert between ETH and WETH and interact with `DODO Pair`. This way, the underlying complexity with WETH is abstracted away from users, effectively protecting them - users do and should only care about directly buying or selling ETH on DODO. There are many such contracts, such as arbitrage and route, which we collectively call `Helper`. We invite the community to help develop more helper contracts and we are willing to provide guidance and support.
