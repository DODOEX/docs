---
id: framework
title: Smart Contract Framework
sidebar_label: Framework
---

## Overview

What is behind DODO is a set of smart contracts. The following figure shows the framework of this contract

![](https://dodoex.github.io/docs/img/dodo_framework.jpeg)

## Core

Each trading pair relates to an independent DODO Proxy contract, which is a transparent proxy only storing status. And all logic points to the DODO implementation. DODO Proxies and DODO implementations contain all the data and logic of DODO, which is the core part of the contract.

For convenience, we call the transparent proxy `DODO Pair` and the logic implementation `DODO Template`. Users should interact with `DODO Pair` directly.

## Entrance

DODO is an open source contract, and we do not stand against forking the contract. However, it should be noted that the operation of DODO is highly dependent on oracle and parameter settings, and an improper use of DODO after fork will cause great losses to users. Therefore, we deployed an entry contract. All DODO registered in this contract has been strictly checked, as the team wants to ensure the highest standard of safety to our users. It is very important for users or developers to look for the only entrance to DODO Zoo. Even if the `DODO Template` is upgraded, DODO Zoo will not change.

## Helper

There are a lot of tedious tasks that can be packaged using contracts to make it easy to use and easy to understand. For example, the ETH Proxy shown in the figure above helps users convert ETH and WETH and interact with DODO. In this way, users do not need to understand what is WETH, and can directly buy or sell ETH on DODO. There are many such contracts, such as arbitrage and route, which we collectively call Helper. We expect the community to develop various helper contracts and we are willing to provide the greatest possible help
