---
id: framework
title: 智能合约框架
sidebar_label: 智能合约框架
---

## 概览

DODO 是用一组智能合约构建的，下图显示了这些合约的框架以及它们是如何相互作用的。

![](https://dodoex.github.io/cn/img/dodo_framework.jpeg)

## 核心部分

包括所有 DODO 所有数据和逻辑在内的核心部分，是由一组代理合约和一个实现合约组成。每个交易对都绑定一个独立的 `DODO Proxy` 代理合约（比如 WETH-USDC, DAI-USDT 等），它只储存状态和元数据。所有的基本逻辑都在 `DODO Implementation` 实现合约里。

为了方便起见，我们会调用 `DODO Pair` 和逻辑实现 `DODO Template`. 用户可以直接与 `DODO Pair` 或者通过 `Helper`进行交互。

## 接口

DODO 是一个开源的智能合约，我们非常欢迎对 DODO 进行分叉。但是请注意， `DODO Pair` 的运行非常依赖于预言机和参数的微调，错误的配置会让用户遭受巨大的损失。所以，我们部署了一个接口帮助开发者避免踩坑。DODO 团队始终认为安全至上，我们对 DODO 的合约进行了严格的测试和审核。开发人员想基于 DODO 进行开放，需要从`DODO Zoo`接入。即使`DODO Template`更新，DODO Zoo 也会保持不变。

## 帮手

我们可以利用合约打包繁琐的任务降低使用和理解门槛。比如像上图显示的，`DODO ETH Proxy`可以帮助用户在 ETH 和 WETH 进行转换，同时与 DODO Pair 进行交互。通过这样的方式，用户不需要理解 WETH 背后的复杂性，只需要关注在 DODO 上怎么交易 ETH 就行。 我们把诸如此类的套利或路由合同，我们统称为 `Helper` 帮手。我们邀请社区来参与开发更多的帮手合约，我们非常乐意提供技术支持。
