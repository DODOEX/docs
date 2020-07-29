---
id: framework
title: Smart Contract Framework
sidebar_label: Framework
---

## Overview

DODOEX 的背后是一整套智能合约。下图展示了这套合约的 framework

![](./../static/img/dodo_framework.jpeg)

## Core

每一个交易对都对应一个独立的 DODO Proxy 合约。这一合约是透明代理，只负责存储状态，所有逻辑都指向 DODO implementation. 所有的 DODO Proxy 和 DODO implementation 包含了 DODO 的全部数据与逻辑，是 Core

## Entrance

DODO 的合约是开源的，我们不反对任何人 fork 合约。但需要注意的是，DODO 的运行高度依赖依赖 Oracle 和参数设置，而一个 fork 后使用不当的 DODO 会给用户带来极大损失。因此我们部署了一个入口合约，在这个合约里注册的 DODO 都是经过严格检查后，团队认为可以交付用户的 DODO 合约。对于用户或开发者来说，认准 DODO Zoo 这个唯一的入口是非常重要的。即使 DODO implementation 升级，DODO Zoo 也不会变。

## Helper

有很多繁琐的工作可以使用合约打包，使其变得易用且方便理解。例如上图展示的 ETH Proxy，帮助用户转换 ETH 和 WETH 并和 DODO 交互。这样用户就不需要理解 WETH 的工作原理，可以直接在 DODOEX 买卖 ETH。这样的合约还有很多，比如套利，route，我们将其统称为 Helper。我们期待社区可以开发出各种各样的 helper 合约，并愿意提供最大可能的帮助。
