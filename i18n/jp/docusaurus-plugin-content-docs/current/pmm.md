---
id: pmm
title: Proactive Market Making Algorithm
sidebar_label: Proactive Market Making Algorithm
---

## PMM: A Universal Liquidity Framework

Markets contain huge amounts of data and information that represent buyers and sellers’ sentiment and valuation of assets. In essence, a market reacts dynamically to changes in available information and thus requires sophisticated mechanisms to do so. In a blockchain context, building such a complex platform, given the limited computing and storage resources, presents us with various unique challenges, the most daunting of which is the compression aspect.

Compression is the act of extracting the most important features of a thing while removing the less important bits. So what is a market’s “most important feature”? The answer is liquidity. Liquidity can be graphically represented by a market depth chart, pictured below.

![](https://dodoex.github.io/docs/img/pmm_1.png)

The depth chart consists of two roughly triangular (though not necessarily symmetrical) shapes, representing bids (buy orders) and asks (sell orders) respectively, along the price x-axis and the depth y-axis. The two triangles can be mathematically described by two parameters, mid price and slope, or how “steep” the triangle is.

![](https://dodoex.github.io/docs/img/pmm_2.png)

Let us closely examine the depth triangle on the right hand side first. This is the ask side, where ask (sell) prices are quoted. We can see that the more base tokens are sold, the higher the price. Thus, this linear relationship can be captured by the following formula:

$$P = i + ik(\frac{B_0-B}{B_0})$$

where i is Parameter 1, the mid price, and k is Parameter 2, the slope. B is the number of base tokens currently in the inventory and B_0 is the initial number of base tokens in the inventory. (B_0-B)/B_0 is the portion of base tokens that have been removed from the ask side due to transactions, relative to the initial base token balance. This formula stipulates that as the number of base tokens that have been traded increases, the base token price rises **linearly**.

But is this an accurate representation of market reality? Not exactly, because this linear model has two limitations:

1. In practice, most liquidity is concentrated near (immediately above or below) the mid price, because that is the most capital-efficient strategy for market makers. The linear model does not reflect this uneven distribution and is thus an oversimplification

2. The linear model returns a liquidity of zero after the price exceeds or goes below a certain threshold. However, in reality, no matter how favourable the quoted price is (e.g. for ETH/USDC, a bid order at $100 and an ask order at $1,500), there is liquidity present at that price. This model fails to take such scenarios into account

Therefore, we need to make this pricing curve/depth chart nonlinear to align it with market patterns, but we also don’t want to introduce additional parameters. How should we go about doing that?

![](https://dodoex.github.io/docs/img/pmm_3.png)

We want to make the depth chart nonlinear to depict the fact that depth is more concentrated in the vicinity of the mid price.

Mathematically, the most obvious and straightforward solution is to change the addition in the aforementioned linear formula to multiplication, like this:

$$P = i(\frac{B_0}{B})$$

In this formula, P increases as B decreases, and it also doesn’t have an upper or lower bound (technically it has a lower limit of 0, but a subzero price doesn’t make sense anyway). But what about the slope? The solution is to refactor the B_0/B term and add a new parameter k that we can use to control the magnitude of the change in price due to B.

$$P = i(1-k + k\frac{B_0}{B})$$

When B_0/B >= 1, P is directly proportional to B_0/B in the previous formula, but in this new formula, k dictates the extent of which P is affected by B_0/B. **More specifically, k is in the range [0, 1] and governs the slope of the pricing curve.**

- When k = 0, the formula becomes P = i, so the price does not change regardless of other parameters

- When k = 1, the formula reverts back to (2)

- When k is in (0, 1), as k increases, so does the price elasticity, meaning that the price becomes more sensitive to change in base token quantity (i.e. B). Conversely, as k decreases, the price elasticity also decreases

This model seems sufficiently complete to cover all scenarios, but there is another issue. In a transaction, the total amount of tokens that needs to be paid is the area under the pricing curve, so we will have to take the integral of the curve, but the curve formula above makes this calculation cumbersome as B_0/B introduces a logarithmic term during derivation. To make computation easier, we square the B_0/B term to eliminate all instances of log:

$$P = i(1-k + k(\frac{B_0}{B}^2))$$

**Incredibly, when k = 1, this curve is identical to the AMM bonding curve**. This reaffirms our belief that this algorithm has captured the essence of market activities and patterns. If traditional AMM pricing method is Newtonian classical mechanics, then PMM is akin to Einstein’s theory of general relativity.

Similarly, without the loss of generality, we apply the same derivation procedure for the bid side depth chart, substituting base tokens with quote tokens (denoted by Q) and using division instead of multiplication. We get:

$$P=i/(1-k+(\frac{Q_0}{Q})^2k)$$

Combining both formulae, we get the proactive market maker (PMM) pricing formula, described in mathematical terms below.

$$P_{margin}=iR$$

$R$ determined by the following formula:

$$if B<B_0, then R=1-k+(\frac{B_0}{B})^2k$$

$$if Q<Q_0, then R=1/(1-k+(\frac{Q_0}{Q})^2k)$$

$$else R=1$$

The PMM algorithm is a “high-fidelity” abstraction of the orderbook-based market, defined and regulated by a handful of simple parameters, but it is also highly flexible and optimized for on-chain operations.

We will then enumerate several promising use cases for PMM that can be achieved by fine-tuning parameters and instituting different withdrawal/deposit rules.

## Use case1 

**Proactive market making with external price guidance**

For mainstream assets, such as BTC and ETH, external markets have much higher volumes and are thus a price source for other platforms to retrieve market prices from. PMM is capable of proactively adjusting these fetched mid prices to minimize impermanent loss (IL) and achieve higher capital efficiency than AMM platforms. This mechanic also means unlocking single-token liquidity provision — market makers are not forced to deposit tokens Uniswap-style.

The configurations required for this use case are

- Mid price i is set to the price retrieved from external sources

- Parameter k is set to below 1

- Giving everyone the single-token liquidity provision option

We call this use case **DODO Classic Pool**, as this was first pioneered in DODO v1.0 in August 2020.

## Use case2

**Low barrier-to-entry automated market making**

This use case mainly applies to long-tail asset markets (i.e. predominantly newly issued assets with little sell-side liquidity on AMM platforms). PMM can help these assets with the initial liquidity they desperately require for their long-term growth and sustainability. In other words, asset issuers do not need large amounts of capital on standby to pair up with their assets when initializing liquidity pools. For instance, if a team wants to issue their token X on PMM, they have the option to initialize liquidity with 100% X and 0% stables or ETH. This drastically reduces the barrier-to-entry for smaller projects.

In this use case, PMM gives the pricing power to takers entirely — makers have no control over the price discovery mechanic whatsoever.

The configurations required for this use case are

- Mid price i is set to the initial offering price designated by the asset issuers

- Parameter k can be set to any arbitrary number in [0, 1]

- The first liquidity deposit can be made in arbitrary proportion, and it does not change the price

- All subsequent liquidity deposits and withdrawals must be made in proportion to the current pool ratio (i.e. similar to Uniswap liquidity pools)

We call this use case the [DODO Vending Machine](./publicPool).

## Use case3

**Fully customizable and free market making**

This use case is intended for the experienced and ambitious market makers (both institutions and individuals), who want the highest degree of freedom and customizability possible to execute their own market making strategies. In this use case, all liquidity in the liquidity pools belongs to the market makers themselves and they also have full control over all the pool parameters. Market makers can dynamically adjust the asset price by changing these parameters based on their assessment of market sentiment, valuation, and other factors. Moreover, market makers can deposit to and withdraw from these liquidity pools in arbitrary ratios, without affecting the asset price.

For a more concrete example, a ETH/USDT market maker in this use case can choose to market-make near ETH=700USDT with a very small k in order to provide highly competitive liquidity and earn considerable transaction/swap fees from trading activity. When the market maker foresees or predicts an increase in ETH price, they can then react accordingly by removing some ETH from their pool to reduce their market risk exposure. This maneuver does not affect the liquidity on the USDT side, however, so trading activity can resume as usual.

This use case also applies to issuers of new assets, who can choose to deposit the tokens they are issuing only without any capital (e.g. ETH, USDT, or other stablecoins). They can set the initial offering price and a small k to ensure low price elasticity, so that the token price does not fluctuate too dramatically due to the influx of trading activity. This design also means that when token issuers need capital for development and operations, they can simply withdraw capital from the liquidity pool without affecting the sell-side liquidity.

The only configuration required for this use case is that

- Deposits/Withdrawals are set so that only market makers (owners/creators of the pools) are allowed to perform such operations

- Single-token liquidity provision/removal is allowed

We call this use case the [DODO Private Pool](./privatePool).

## Use case4

**Crowdpooling**

Crowdpooling is a portmanteau of “crowdsourcing” and “liquidity pools”, and this use case is an innovation on current asset issuance mechanics. For a newly issued token,

1. The platform does not allow token trading immediately upon launch; all sale participants will receive tokens (regardless of the amount they purchased or the timing of the purchase) at the same unit price

2. After the conclusion of the sale, token trading is enabled, and the remaining unsold tokens and liquidity collected from the last phase are used to construct a DODO Vending Machine

We call this use case the [CrowdPooling](./crowdPooling).

## Use case5

**Reversion to Traditional AMM**

This use case ties into our aforementioned claim that PMM is essentially a generalization of AMMs. When

- k is set to 1

- Deposits/Withdrawals must be made in proportion to the currently pool ratio

PMM behaves exactly the same as AMMs.

## Use case6

**capable of supporting stablecoin trading scenarios**

With the following configurations:

- i = 1
- k = 0.001 (when k = 0, the exchange rate becomes exactly 1 to 1)

PMM is virtually identical to Curve in terms of performance and capital efficiency, with the added benefits of flexibility, since k can be tweaked to ensure 1-to-1 ratio or make it closer to AMMs where price fluctuation is more pronounced.


