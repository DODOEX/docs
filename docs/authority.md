---
id: authority
title: Authority
sidebar_label: Authority
---

在 DODO smart contract 中有两个特殊的角色，`admin`和`supervisor`。

你可能会非常关心，谁是`admin`和`supervisor`，会不会滥用权力。请先不要着急，在[下节](./decentralization)，我们会详细介绍去中心化治理流程。这里我想先介绍`admin`和`supervisor`的权力范围，以及背后的设计原则。

## 权力范围

`supervisor`的权力是`admin`的子集，他们都拥有 A 级权限。A 级权限包括

- Disable trade
- Disable deposit
- Set gas price limit

`admin`是唯一拥有 B 级权限的地址，B 级权限包括：

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

## 设计原则

A 级权限可以概括为”冻结状态“。即可以紧急停止系统的某些功能，但不能更改状态。为了限制 Admin 的权力，往往 Admin 执行的操作都要经过复杂的治理流程。为了提高抗风险能力，我们需要一个更灵活的 supervisor 代替 admin 执行一些不那么敏感，却可以显著减少系统风险的动作。

B 级权限基本涵盖了 DODO 合约的方方面面，之所以将如此之多的参数都设计为可变，是为了更好适应快速变化的市场环境。也为日后的治理留下操作空间。

值得一提的是，没有任何人可以禁止用户提币。这是 defi 最重要的原则，non-custody。
