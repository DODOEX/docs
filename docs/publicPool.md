---
id: publicPool
title: DODO Vending Machine
sidebar_label: DODO vending machine
---

## What is DODO Vending Machine

**From Selling Apples to a Liquidity Market**

You have an apple tree in your backyard and you recently harvested 100 apples from it. Now you want to set up a stand to sell them. The simplest and most obvious idea is to sell all of them at a constant price, say $1 for an apple. 

![](https://dodoex.github.io/docs/img/dvm_1.png)


![](https://dodoex.github.io/docs/img/dvm_2.png)

You soon discover that the market is better than you expected and so many people in the neighborhood are coming to buy your apples that you have fewer and fewer apples in your inventory. That’s when you realize that the price may have been set too low. You figure that the more apples you sell, the stronger the demand for apples is, so you should sell them at a higher price to make a larger profit overall. As the number of apples sold goes up, so does the price.

This relationship is captured by the following pricing curve. The yellow area above the dotted line represents the extra profit you will make by using this new pricing model.

![](https://dodoex.github.io/docs/img/dvm_3.png)

Some of your customers ask you if they can return an apple after they’ve bought it if they don’t want it anymore (let us assume that your apples never go bad).

![](https://dodoex.github.io/docs/img/dvm_4.png)

This refund/buyback policy means that the market for your apples is now two-way: people can buy and sell apples. Congratulations! You’ve just created a market where apples have great liquidity, since apples can now be bought and sold instantly near their fair market value. The apple price will fluctuate as people continue to trade apples. This type of curve, where the price of an asset is dependent on how many have been sold, is known as a bonding curve.

The importance of high liquidity cannot be overstated - a highly liquid market is more efficient and usually associated with less risk.

![](https://dodoex.github.io/docs/img/dvm_5.png)

So what do you need to create such a liquidity market for your apples? The answer is extremely simple:

- Apples
- A pricing curve

That’s exactly what the DODO Vending Machine model does. But how does this work in practice?

### Use Case 1: 

Suppose you are a blockchain developer and want to build a community-driven project. You can issue 10 million tokens, of which 1% or 100 thousand are for yourself. The rest (i.e. 9.9 million tokens) are distributed to the community and let’s say you set the token price to $1. If you want to create a liquidity market for all 9.9 million tokens on an AMM, you need another $9.9 million as the bid-side liquidity to do it - a huge amount of money that you probably don’t have, and so this project becomes infeasible.

Your alternative is to create a simple AMM pool with much fewer tokens and less liquidity in it, say $1,000 and 1,000 tokens, but if someone wants to invest $100,000 in your project token, he will have to pay $100,000 and receive only 1,000 tokens in return, which amounts to $100 per token, 100x the market price you set! This is, of course, not desirable, and this market is definitely not an efficient market.

However, you can choose to build a DODO Vending Machine with these 9.9 million tokens at an initial price of $1 and with the k value set to 1 (which means the pricing curve is a bonding curve, as discussed above). If a community member is bullish on your project and buys 100,000 tokens, his average price is only $1.005 per token! Much more desirable.


### Use Case 2：

You are a project team with a need to maintain and manage the price of your token. DODO Vending Machine can help you buy and set up liquidity in a flexible manner to achieve your objectives.

Let us use an algorithmic stablecoin that is meant to be pegged to 1 DAI as an example. Call the token X. If X’s token price dips below 1 DAI, then you, the project team, need to raise bid-side liquidity as soon as possible to counter the selling pressure to avoid the death spiral, a vicious cycle where tokens are dumped continuously as the price decreases. If the dumping can be stopped at 1 X = 0.9 DAI, then you will instill confidence in your project’s investors and users, convincing them that you can be trusted to maintain the peg. Conversely, if the dumping stopped at 1 X =0.5 DAI, the consequences could be catastrophic — the lack of liquidity might have already triggered an irreversible death spiral.

So here’s what you can do. You can use DODO Vending Machine to set up a DAI-X pool, set the initial price to 1 X = 1 DAI, and set k to a very small value, say 0.01. In addition, you incentivize liquidity providers to deposit their LP tokens into this pool with rewards in X. This way, you can ensure ample bid-side liquidity that is allocated near 1 X = 1 DAI, which is a much more capital-efficient funding model than traditional AMMs.

Even if it’s not an algorithmic stablecoin project, you can still raise funds for your token at key support price levels with DODO Vending Machine, coupled with a reward incentive program to encourage liquidity provision.

### Use Case 3:

You can use the DODO Vending Machine model to control the magnitude of your token’s pumps in order to discourage speculative trading and the formation of a speculative bubble.

Despite popular hype about new cryptocurrencies dramatically growing in value, it is not good for the price to go up too high in a project’s very early stages. An asset’s price being driven up to unsubstantiated levels often indicates a bubble, which will lead to many people eventually being dumped on by whales and speculators.

The most effective way to curb speculation is to provide enough liquidity at low prices to keep the average token price low for most people. This is exactly the kind of flexibility DODO Vending Machine can provide. To minimize speculation, set i at a low price and k to a small value.

## About the math

DODO Vending Machine also uses the PMM algorithm. Now, you may be thinking, 'doesn't PMM adjust prices in real time based on an oracle? There is no external price for the long tail tokens in the pool'.

You can think of [PMM](./pmm) as a compressed order book. DODO vending machine uses the PMM algorithm to arrange a selling liquidity with a price ranging from i to ∞. Here i no longer represents the external price, instead representing the starting price. The specific pricing formula is as follows:

$$P_{margin}=iR$$

$$If B<B_0, then R=1-k+(\frac{B_0}{B})^2k$$

B0 in the above formula is the number of tokens initially recharged, and B is the current token inventory.

It can be seen from the formula that the pool is a one sided PMM algorithm (the current token amount B is less than the initial token amount B0), so it has the following properties:

1. In the beginning, there is no quote, so you only need the project's base tokens to start and the amount is unlimited.
2. The starting price is i.
3. As base tokens are sold, the balance in the contract decreases and the price increases.
4. The quote token is used for buying liquidity, and the consumed selling liquidity will be "flipped" into buying liquidity, so buying liquidity can always support selling pressure.
5. The price curve is adjustable: the smaller the value of k, the slower price changes, the larger the value of k, the faster price changes. When k=0, it is a constant price, when k=1, it is a bonding curve.

By the way, DODO vending machine allows anyone to deposit and withdraw freely, but it must be based on the current ratio of base and quote tokens. For example, if the current token price is 2$, and there are 100k base and 10k quote tokens, the ratio will be base:quote = 10:1. This is designed to make sure that deposits and withdrawals do not affect the token price. Note that the current price does not affect the deposit and withdrawal ratio, only the inventory affects it.

## Liquidity Provider Fee

The base and quote tokens placed in the pool provide liquidity for the market, but providing these tokens incurs opportunity costs for the liquidity providers. To adjust for this, DODO charges a liquidity provider fee to all those who trade these tokens.
