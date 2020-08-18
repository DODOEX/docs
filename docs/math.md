---
id: math
title: The Math Behind PMM
sidebar_label: The Math Behind PMM
---

# Core PMM

The core of PMM is essentially **_calculating one integral and solving two quadratic equations_**. The smart contract implementation can be found [here](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/lib/DODOMath.sol).

## The Price Curve Integral

For traders, the most important thing is the average transaction price. The average transaction price is the integral of the marginal price $P_{margin}$. Let's take the base token shortage scenario as an example.

![](https://dodoex.github.io/docs/img/dodo_integrate.jpeg)

$$\Delta Q =\int^{B_2}_{B_1}P_{margin}dB$$

$$= \int^{B_2}_{B_1}(1-k)i+i(B_0/B)^2kdB$$

$$= i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

This tells the trader how much they should pay if they buy $B_1-B_2$ amount of base tokens.

Rearranging the equation above, the average transaction price is thus:
$$P=\frac{\Delta Q}{B_2-B_1}=i*(1-k+k\frac{B_0^2}{B_1B_2})$$

We found that the average transaction price is only dependent on the state of the system before and after the transaction, so the price calculation methods for both buying and selling are the same: integrating $P_{margin}$.

## Solving the quadratic equation for trading

Without the loss of generality, the integral becomes the following when there is a shorage of quote tokens:

$$\Delta B = \frac{1}{i}(Q_2-Q_1)*(1-k+k\frac{Q_0^2}{Q_1Q_2})$$

Let's derive how to calculate the price when there is a shortage of quote tokens and only the number of base tokens you want to buy or sell (i.e. $\Delta B$) is given.

Now that $\Delta B, Q_0, Q_1$ are given, we need to calculate $Q_2$, which is found by solving a quadratic equation. Transforming the equation into standard form:

$$(1-k)Q_2^2+(\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B)Q_2-kQ_0^2=0$$

$$let \ a=1-k, \ b=\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B, \ c=-kQ_0^2$$

Because $Q_2>=0$, we discard the negative root, and so

$$Q_2=\frac{-b+\sqrt{b^2-4ac}}{2a}$$

It can be proven that:

- When $\Delta B>0$, $Q_2>Q_1$; trader buy base token, and should pay $Q_2-Q_1$
- When $\Delta B<0$, $Q_2<Q_1$; trader sell base token, and will receive $Q_1-Q_2$
- When $\Delta B=0$, $Q_2=Q_1$.

## Solving the quadratic equation for regression targets

When the system is not in the equilibrium state, changes to the oracle price will bring profit or loss. For example, assume that shortage of base tokens is the current state, and the oracle price goes up. It is clear that the excess quote tokens cannot buy enough base tokens to return the base token balance to the base token regression target. Thus, LPs who deposited base tokens will suffer a loss. Conversely, if the oracle price drops, the excess quote tokens can buy more base tokens, causing the base token balance to exceed the base token regression target, and LPs who deposited base tokens will make a profit.

In summary, the regression target is influenced by the oracle price. To calculate the regression target at a certain oracle price, we make the following derivation:

Given $$\Delta Q = i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

Since we are doing regression, $B_2=B_0$. Rearraging the equation with respect to $B_0$ gives

$$\frac{k}{B_1}B_0^2+(1-2k)B_0-[(1-k)B_1+\frac{\Delta Q}{i}] = 0$$

The negative root does not make sense and is discarded, so $B_0$ is:

$$B_0=B_1+B_1\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

In this case, $\Delta Q=Q-Q_0$. It can be proven that, when $\Delta Q \ge 0$, $B_0\ge B_1$. 

This fact is extremely important, because it ensures that the base token balance and the quote token balance will never be greater than the regression target simultaneously, or less than the regression target simultaneously. This means that PMM will only switch between the three states discussed in the Core Concepts section.

Similarly, the formula for quote token regression target $Q_0$ is

$$Q_0=Q_1+Q_1*\frac{\sqrt{1+\frac{4k\Delta B i}{Q_1}}-1}{2k}$$

# Peripheral 

This section will deal with the math pertaining to the peripheral functioning of PMM.

## Trades

As mentioned above, the regression target depends on the oracle price, and the price curve in turn depend on the regression target. So in every trade, we should calculate the regression target well in advance to make the price curve fixed.

In addition, since the price curve given by PMM is segmented, if a transaction involves different states (for example, when a trader sells an astronomical amount of base tokens during a base token shortage and forces the state into a quote token shortage), the price needs to be calculated in segments as well.

Please be advised that this calculation requires a high degree of accuracy. The smart contract provides six trading functions for the three possible states. You can find the most important logic of cross-state trading [here](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/impl/Trader.sol).

## Deposit

Depositing and withdrawing base token when there is a shortage of base tokens, or quote tokens when there is a shortage of quote token, will change the price curve. This requires us to process the deposit and withdrawal with caution and care in order to keep the capital pool sustainable and fair.

We will analyze what happens when an LP makes a deposit when there is a shortage of base tokens.

According to the calculation formula of $B_0$ derived above
$$B_0=B_1+B_1*\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

After an LP deposit $b$ base tokens, $B_1$ increases by $b$, and $B_0$ increases more than than $b$'s magnitude. It means that this deposit helps all LPs who provided base token make a profit. The reason why is that the deposit makes the price curve smoother, and the same amount of $\Delta Q$ can now buy more base tokens.

In this case, as soon as the LP makes a deposit, the LP makes a profit. This is referred to as the deposit reward. The essential source of this reward is the slippage paid by the trader who made the system deviate from equilibrium state.

:::note
It is important to note that deposit rewards are not risk-free arbitrage trading opportunities. 
:::

## Withdrawal

Similarly, after an LP withdraws $b$ base tokens, $B_1$ decreases by $b$, and $B_0$ decreases by more than $b$'s magnitude. This withdrawal causes all LPs who owes Base Tokens to suffer losses. This is because this withdrawal makes the price curve more steep, and the excess quote tokens have less purchasing power in terms of base tokens.

The PMM algorithm stipulates that a withdrawal fee is required to withdraw tokens in this case. The magnitude of the fee is equal to the aggregate loss of all LPs caused by the withdrawal. This fee will be directly distributed to all LPs that have not yet withdrawn.

Factoring in the deposit reward from the previous section, if an LP makes a withdrawal immediately after depositing, the withdrawal fee will be greater than the deposit reward, thus eliminating any possibility of risk-free arbitrage trading.

It is worth noting that both deposit reward and withdrawal fee are only significant when the system deviates very far from the equilibrium state and the deposit/withdrawal amount is large. Traders thus often overlook the existence of this gain/loss. Of course, traders are also welcome to extract value from the system by exploiting this if they so wish. In order to do that, they can first deposit to earn deposit rewards when the system deviates from the equilibrium, and then withdraw once the system returns to the equilibrium to avoid the withdrawal fee.
