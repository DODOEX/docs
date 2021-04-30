---
id: upCrowdPooling
title: Bonding Curve Crowdpooling and Fixed-Price Crowdpooling
sidebar_label: Bonding Curve Crowdpooling and Fixed-Price Crowdpooling
---

DODO v2 currently supports Bonding Curve Crowdpooling and Fixed-Price Crowdpooling.

### Similarities

- At the end of the Crowdpooling campaign, the token price is the same for all participants. 

- After the Crowdpooling period ends, a liquidity pool will be established immediately for token swaps. The price of the token when the Crowdpooling period ends will be its initial price. 

- Hard caps can be set for both types of Crowdpooling.

- The amount staked by participants that exceeds the hard cap set by the Crowdpool creator will be refunded back to participants after the Crowdpooling period ends.

### Differences

- Token Price:

    - For Bonding Curve Crowdpooling, the token price will increase along the upward-trending bonding curve as the amount staked by participants increases. The bonding curve is defined by DODO’s Proactive Market Maker (PMM)[./pmm] algorithm and is customizable by the Crowdpool creator prior to the start of the campaign.

    - For Fixed-Price Crowdpooling, the token price is fixed and does not fluctuate as the staked amount increases or decreases. As a matter of fact, Fixed-Price Crowdpooling is a special kind of Bonding Curve Crowdpooling, in which the slippage coefficient parameter (k) of the bonding curve is set to 0, turning the curve into a horizontal line and thus fixing the token price. 

- How the Hard Caps are Set:

    - For Bonding Curve Crowdpooling, the hard cap can be set when configuring the curve parameters. The token price will stop increasing along the curve once the hard cap is reached. The amount staked by participants that exceeds the hard cap will be refunded back to the participants once the Crowdpooling period ends. It is optional for a Crowdpool creator to launch their campaign without a hard cap. 

    - On the DODO platform, the hard cap of a Fixed-Price Crowdpooling is, by default, set to 50% of the number of base tokens supplied by the Crowdpool creator. Since the token price and the total amount of tokens to be issued by the Crowdpool creator are both fixed, the maximum proceeds a Fixed Price Crowdpooling can receive is predetermined. By setting the cap to 50% of the maximum proceeds, it means that half of the tokens supplied by the Crowdpool creator will be used for Crowdpooling, while the remaining half will be used to provide liquidity once the Crowdpooling period ends. 


### Cooling-Off Period

For Bonding Curve Crowdpooling, the token price often increases significantly over the Crowdpooling period, therefore the participants who enter the pool early are often faced with token prices much higher than they originally anticipated. In order to protect participants, a cooling-off period has been instituted, which takes place immediately after the Crowdpooling period. During this period, participants who have staked can choose to withdraw from the campaign if they wish.


### In Case of Oversubscription

If the total staked amount by participants is over the Crowdpooling hard cap, then all participants will receive tokens proportional to their shares of the pool, at the initial price.


