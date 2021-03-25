---
id: dodonomics
title: DODOnomics V2
sidebar_label: DODOnomics V2
---

Starting from DODO v2, there will be three categories of DODO platform users: traders, liquidity pool creators, and liquidity providers (LPs). DODO’s v1 token economy design will thus be upgraded accordingly to engage these user groups and make the platform work for all.

## Summary

- Besides governance, DODO tokens will have two new utilities for holders: **Crowdpooling and IDO** allocations and **trading fee discounts** on DODO.

- A new, non-transferable vDODO token will be introduced to serve as **proof of membership** in DODO’s loyalty program.

- vDODO tokens can be minted at a fixed rate of **1 vDODO = 100 DODO.**

- vDODO tokens will give holders **dividends from trading fees** and **membership rewards**, in addition to the same benefits of holding DODO tokens.

- In order to encourage long-term membership, redeeming vDODO tokens to DODO tokens will incur a **variable exit fee.**

- **Trading mining** and **combiner harvest** will be rolled out to incentivize more interactions with the DODO platform.

## DODO and vDODO: Token Utilities and Benefits

**DODO**: The DODO token has been given several important utilities in addition to its governance function. DODO token holders enjoy the following benefits:

- **Governance rights:** holders can create and vote on proposals; 1 DODO = 1 vote
- **Crowdpooling and IDO allocations**
- **Trading fee discounts**

**vDODO**: vDODO is a token that serves as a user’s proof of membership in DODO’s loyalty program. Benefits for vDODO token holders include but are not limited to the following:

- **Governance rights:** holders can create and vote on proposals. 1 vDODO = 100 votes
- **Crowdpooling and IDO allocations**
- **Trading fee discounts**
- **Dividends paid out from trading fees (exclusive to vDODO token holders):** A proportion of the trading fees accrued on the platform will be distributed to vDODO holders
- **vDODO membership rewards (exclusive to vDODO token holders)**: DODO reward tokens will be distributed to vDODO holders every block (see next section)

## Minting and Redeeming vDODO

### Minting vDODO and Membership Rewards

You can stake 100 DODO tokens to mint one (1) vDODO token. vDODO tokens are **NOT transferable**. vDODO token holders receive DODO reward tokens. Specifically:

1. 6 DODO reward tokens are released and distributed to vDODO holders every block.
2. vDODO holders receive DODO reward tokens proportional to their shares of vDODO, i.e. the number of DODO tokens they get is 6 * their vDODO balance / number of vDODO in circulation
3. vDODO holders can invite others to mint vDODO tokens using their referral links. The inviter receives extra membership rewards equal to 10% of the number of vDODO tokens minted by the invitee.
4. To encourage early birds to try out the vDODO membership rewards system, there will be 12 DODO reward tokens per block during the first 7 days.

### Redeeming vDODO and Exit Fee

In order to redeem vDODO back to DODO tokens, you will need to pay an “exit fee” in vDODO tokens, which will be immediately distributed to all remaining vDODO holders who haven’t exited.

Here, we will introduce a statistical measure called the **DODO Loyalty Index (DLI)**, defined to be (number of vDODO in circulation * 100) / DODO in circulation. Assuming everything else stays the same, when vDODO gets minted, the number of vDODO in circulation increases, the number DODO tokens in circulation decreases, and the DLI increases.

The exit fee structure is that the higher the DLI, the lower the exit fee rate:

- When the DLI is above 0.5, the exit fee is at its minimum of 5%.
- As DLI decreases, the exit fee rate increases.
- When the DLI is less than 0.1, the exit fee is at its maximum of 15%.

More specifically, the exit fee rate formula is:

- If DLI > 0.5, exit fee rate = 0.05
- If DLI < 0.1, exit fee rate = 0.15
- If 0.1 < DLI < 0.5, exit fee rate = 0.175 - 0.25 * DLI
- Note that DLI cannot exceed 1, since no DODO would be available to be staked to mint vDODO tokens

![](https://dodoex.github.io/docs/img/vdodo_1.png)

## Tokens as the Soul of Projects: Value and Growth

A crypto project without a sound and sustainable tokenomics is, in our opinion, “soulless”, because tokens serve two crucial primary functions: value encapsulation and growth incentivization. The DODO team has been designing and will always design future token economy models with these keywords top of mind.

We will be running highly cost-effective incentive programs and initiatives to help facilitate and ensure the continuous growth of the DODO platform and DODO community. In the meantime, the DODO token will be the ideal vehicle for capturing and representing the value of the DODO’s economy and ecosystem, and the collective value of the platform will be shared equitably and generously with our loyal supporters.

As outlined in our DODO token announcement, 60% of the DODO total token supply is reserved for the community. This is a vast number of tokens and it is impossible to plan out all the incentive programs beforehand. As our platform continues to grow in stature and user numbers and more product features mature, the subject of value encapsulation will become increasingly complex and multifaceted. This is why the DODOnomics v2 design is open to constructive suggestions and feedback from everyone, as we seek to grow alongside the community.
