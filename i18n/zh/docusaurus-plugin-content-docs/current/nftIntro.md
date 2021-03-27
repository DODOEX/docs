---
id: nftCoreFeatures
title: DODO NFT 的核心特性
sidebar_label: 核心特性
---

## DODO NFT Vault 的碎片化

在 DODO NFT Vault 中的抵押 NFT（或者多重 NFT）会自动生成一个 ERC20 的合约。该 DODO NFT Vault 的所有者能设置进入二级市场的 token 的占比，并将 token 分配给一级市场 / 创意团队 / 社区激励。DODO NFT Vault的所有者可以在随后向 DODO NFT Vault 抵押更多的 NFT 。

比如，我为 Ayaboli 铸造了一个 NFT 。随后我将这个 NFT 抵押到 DODO NFT Vault ，同时获得了一个 ERC20 的 token 。我可以设置这个 token 叫 FRAG ，同时设置一个不能增发的总发行量—— 10,000 。我设置其中 15% 的 token 在一年的线性解冻后释放到 Ayakari Copyright Company 的钱包地址中，而剩下的 85% 将会直接进入 DODO 的流动性池中尽兴流通，定价为 1 FRAG = 1 美元，其中 FRAG 的而价格随着交易的发生而上下波动。

当然，我也可以为《EVA》动画中的每个角色发行一个 NFT，并将所有这些 NFT 都放到 DODO NFT Vault 中。

## 低成本创造流动性池

DODO NFT Vault 会自动创建一个 DODO 交易池，并抵押所有进入市场的 FRAG token。最初的价格是由 DODO NFT Vault 的所有者指定，以开始出售 FRAG 。当交易者买进时，FRAG 价格会自动上涨。FRAG 的市场价值就是 NFT 的价值。

## 买断 DODO NFT Vault（可选）

由于 DODO NFT Vault 的碎片已经在市场上流通，普通用户只要购买 FRAG 就可以享受到 NFT 价格上涨的好处。**如果收藏者想要买断**这个 DODO NFT Vault，**他需要立即支付相当于当前的 NFT 估值的钱**。这笔钱将进入DODO NFT Vault 合同，而所有包含在DODO NFT Vault 中的 NFT 将被转移给收集人。

与此同时，对 DODO 交易池的参数进行调整，这样就可以在收集人交易时以收集人的价格购买和出售 FRAG 。在此之后，FRAG 的价格将不会改变，持有 FRAG 的人可以随时退出。

值得注意的是，买断 DODO NFT Vault 并不是一个强制性的过程，DODO NFT Vault 的创建者可以设置一个保护期来放弃买断选项，甚至可以选择不允许买断该 DODO NFT Vault 。

点击 [dodonft.io](http://dodonft.io/) 以查看 DODO NFT 的运作原理。