---
id: crowdPooling
title: DODO Crowdpooling
sidebar_label: DODO Crowdpooling
---

## What is Crowdpooling

There are currently three major liquidity offering methods on decentralized exchanges (DEXs) today:

1. **Bonding curve:** The price of a token asset increases according to a pre-set pricing curve, known as a bonding curve, as the token supply increases. This usually leads to reckless speculators carelessly entering into contracts and frontrunning everyone else, getting tokens at obscenely low prices. This frontrunning leads to large price discrepancies among participants. As a result, speculators are usually able to price out genuine investors who believe in the project vision.

2. **AMM coupled with yield farming:** Many token assets are being issued on AMM platforms, which almost always require liquidity be contributed in 50% base tokens (the tokens being issued/sold; the ask side) and 50% quote tokens (tokens in which the asset price is denominated, usually ETH and stablecoins; the bid side). But the reality is that the majority of project teams simply cannot afford to lock the bid-side liquidity required to sustain the market for prolonged periods of time. In other words, they don’t have enough ETH (or stablecoins) to keep the market sufficiently liquid. Thus, pool 2 yield farming, a kind of liquidity farming that requires liquidity providers to be exposed to the tokens being issued, is often used to bootstrap bid-side liquidity. However, this AMM and yield farming combination is essentially an act of “renting” liquidity by constantly inflating the token supply. Yield farmers are mercenaries that have no vested interest in the projects themselves and will not hesitate to “farm and dump”, which creates near-constant sell pressure on secondary markets.

3. **Auction:** Token auctions are inherently limited in that participants can only buy tokens but not sell them, resulting in an inefficient, illiquid market.

In short, mainstream DEX liquidity offering suffers from issues such as frontrunning, high cost of attracting liquidity, and/or insufficient liquidity.

Here at DODO, we have been working hard to create a liquidity offering paradigm that works for everyone. It should be cheap and easy for project teams to onboard, while keeping market liquidity at a satisfactory level. As for traders/offering participants, they have to start on an equal footing with everyone else. “The early bird getting the worm” seems to be the norm in crypto, but it doesn’t have to be.

Inspired by the call auction mechanism commonplace in securities markets, Crowdpooling is a portmanteau of “crowdfunding” and “liquidity pool”. Here is a high-level description of how it works:

1. You want to distribute your token asset. You supply a number of tokens and set a soft cap target. A portion of the tokens you supply will be used for crowdfunding and the rest will be used for ask-side liquidity in the pool. You set the initial offering price and a start and end time for your Crowdpooling campaign. After that, anyone can participate in the offering by staking their capital.

2. Once the Crowdpooling campaign ends, participants can claim the tokens based on their stakes at the pre-defined initial offering price. If the Crowdpooling progress is over your soft cap target (i.e. there is more capital in the pool than your soft cap), then all participants claim the tokens proportional to their shares of the pool, at the initial offering price. Any difference between the amount participants staked and the actual cost of the tokens (i.e. initial offering price * the number of tokens actually received) is then refunded back to participants.

3. After the Crowdpooling phase ends, new public liquidity pools will be automatically set up with the capital raised and the tokens reserved for ask-side liquidity from step 1 and trading becomes available. The starting market price is the initial offering price from step 1. At this point, we also add a pre-deposit settlement mechanism, liquidity protection mechanism, and support for flexible fee configuration.

### Pre-deposit Settlement

We know that smart contracts are passively triggered, and a gas cost is required. Likewise, an on-chain transaction is required to conclude a Crowdpooling campaign and create its corresponding [DODO vending machine](./publicPool). Therefore, we have introduced pre-deposited settlement fees to cover the cost of this transaction.

1. When a project team launches a Crowdpooling campaign, they need to pre-deposit the settlement fee into the smart contract (currently 0.2 ETH).

2. At the end of the Crowdpooling campaign, anyone (including the project team) can send a transaction to end the process and create a DODO Vending Machine. The person who executes the transaction will receive the pre-deposited settlement fee.

### Liquidity Protection

There is also a liquidity protection period to prevent the project team from "rug-pulling", i.e. draining pool liquidity, immediately.

1. The bid-side liquidity is established by proceeds from Crowdpooling participants, and the ask-side liquidity is established by tokens reserved for the pool when the campaign was first set up.
2. This initial liquidity belongs to creator of this Crowdpooling campaign, but the creator cannot remove this liquidity during the liquidity protection period.
3. Anyone is able to provide liquidity to these pools AMM-style, with the added benefit of higher capital efficiency thanks to PMM.
4. This resulting spot market follows the bonding curve method: when a trader buys tokens, the token price goes up; when a trade sells tokens, the token price goes down.

### Quota

We have a quota configuration function for Crowdpooling, and any pool can set quotas for different users. Some use cases could be:

1. The Crowdpooling campaign sets a quota for privileged users and 0 for common users - this allows for the implementation of a whitelist feature.
2. A quota could also be set according to users' vDODO balances, with the Crowdpooling campaign being set to have different quota tiers based on how much vDODO someone holds.

You can find more info on the whitelisting example here: [DODO Crowdpooling Whitelist Configuration](./cpwl)

## Why Crowdpooling

1. Unlike bonding curves, there is no frontrunning on Crowdpooling.
2. Compared to AMM + pool 2 yield farming, with Crowdpooling there is no need to inflate the token supply in circulation to bootstrap temporary liquidity. Token assets are more likely to go into the hands of genuine investors rather than speculators or “dumping farmers”.
3. Compared to simple auctions, Crowdpooling is much more than mere fundraising. The immediate end result of a Crowdpooling campaign is a trading pair with sufficient liquidity.
4. Proceeds raised from Crowdpooling participants are not misused, and are instead used to create a liquidity market.
5. For new assets, Crowdpooling is a one-stop token distribution solution. It builds a solid foundation for a future influx of interest and capital, even if the bid size is small.
6. For token assets that are already available for trading elsewhere but with limited liquidity, Crowdpooling provides an avenue for these assets to release significant ask-side liquidity and can act as a price source and guidance for external markets.
