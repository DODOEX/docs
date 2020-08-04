---
id: authority
title: Authority
sidebar_label: Authority
---

There are two special roles in each `DODO Pair` smart contract: `admin` and `supervisor`.

Here I would like to introduce the scope of power of `admin` and `supervisor`, and the principles of design behind.

:::note
You may be very concerned about who is the `admin` and the `supervisor`, and will they abuse the power. Please don't worry, in the [next section](./decentralization), we will introduce the decentralized governance process in detail.
:::

## Scope

Power of the supervisor is a subset of that of `admin`, and both `supervisor` and `admin` have A-level authority. Level A permissions include:

- Disable trade
- Disable deposit
- Set gas price limit

`admin` is the only one with B-level authority, which includes:

- Change admin
- Change supervisor
- Change maintainer
- Change oracle
- Set liquidity provider fee rate
- Set maintainer fee rate
- Set K
- Enable trade
- Enable deposit
- Final settlement

## Principle

Level-A authority can be summarized as "freeze status" i.e. some functions of the system can be stopped urgently, but the status cannot be changed. In order to limit the power of `admin`, often actions taken by `admin` have to go through a complex governance process. To be risk resistant, we need a more flexible `supervisor` instead of an `admin` to take some actions that are not so sensitive but can significantly reduce system risks.

The B-level authority basically covers all aspects of the `DODO Pair` contract. The reason why so many parameters are designed to be variable is to better adapt to the rapidly changing market environment. It also leaves room for governance in the future.

It is worth pointing out that no one can prohibit users from withdrawing coins. Being non-custodial is the most important principle of Defi.
