---
id: math
title: Math details
sidebar_label: Math details
---

# Core Math

The core mathematical processing includes **_one integral and two quadratic equation solvings_**. The implementation could be found [here](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/lib/DODOMath.sol).

## Integral price curve

For traders, the most important thing is the average transaction price. The average transaction price is the integral of the marginal price $P_{margin}$. Let's take the base token shortage scenario as an example.

![](https://dodoex.github.io/docs/img/dodo_integrate.jpeg)

$$\Delta Q =\int^{B_2}_{B_1}P_{margin}dB$$

$$= \int^{B_2}_{B_1}(1-k)i+i(B_0/B)^2kdB$$

$$= i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

The solution above gives out how much trader should pay if he buy $B_1-B_2$ Base token.

The average transaction price is:
$$P=\frac{\Delta Q}{B_2-B_1}=i*(1-k+k\frac{B_0^2}{B_1B_2})$$

We found that the average transaction price is only related to the state of the system before and after the transaction, so the price calculation method for both buying and selling is the same -- both are integrating $P_{margin}$.

## Solve quadratic equation for trade

The same with what just discussed above, when the scenario is quote token shortage, the integral is:

$$\Delta B = \frac{1}{i}(Q_2-Q_1)*(1-k+k\frac{Q_0^2}{Q_1Q_2})$$

As you may noticed, to simplify the demonstration, we only provide two interfaces, `sellBaseToken` and `buyBaseToken`. Let's derive how to calculate the price when the scenario is quote token shortage and only the number of base tokens you want to buy or sell ($\Delta B$) is given.

$\Delta B, Q_0, Q_1$ are given, we need to calculate $Q_2$, which is a quadratic equation. After transforming it into standard form:

$$(1-k)Q_2^2+(\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B)Q_2-kQ_0^2=0$$

$$let \ a=1-k, \ b=\frac{kQ_0^2}{Q_1}-Q_1+kQ_1-i\Delta B, \ c=-kQ_0^2$$

Because $Q_2>=0$, we discard a negative root, and so:

$$Q_2=\frac{-b+\sqrt{b^2-4ac}}{2a}$$

It can be strictly proved that:

- When $\Delta B>0$, $Q_2>Q_1$; trader buy base token, and should pay $Q_2-Q_1$
- When $\Delta B<0$, $Q_2<Q_1$; trader sell base token, and will receive $Q_1-Q_2$
- When $\Delta B=0$, $Q_2=Q_1$.

## Solve quadratic equation for regression target

When the system is not in equilibrium, changes of oracle will bring profit or loss. For example, assume that the current system is in a scenario of Base Token shortage, and the Oracle price increases. As a result of it, the spare Quote Token cannot buy enough Base Token to make Base Token back to regression target. And thus, the LP that provides the Base Token will lose money. In contrast, if the Oracle price drops, the spare Quote Token can buy more Base Tokens, causing the Base Token balance to exceed the regression target, and the LP that provides Base Token will have a surplus.

That is mean, the regression target is influenced by oracle price. To calculate the regression target under a certain oracle price, we make the following derivation:

Given $$\Delta Q = i(B_2-B_1)*(1-k+k\frac{B_0^2}{B_1B_2})$$

When regression, $B_2=B_0$, sort out the quadratic equation about $B_0$

$$\frac{k}{B_1}B_0^2+(1-2k)B_0-[(1-k)B_1+\frac{\Delta Q}{i}] = 0$$

Discarding the negative root, we get the solution of $B_0$ is:

$$B_0=B_1+B_1\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

In this case, $\Delta Q=Q-Q_0$. It can be strictly proved that when $\Delta Q \ge 0$, $B_0\ge B_1$. This feature is very important because it ensures that the Base Token balance and Quote Token balance will not at the same time greater than the regression target, or at the same time less than the regression target. In this way, PMM will only switch between the three states scenario.

Similarly, we directly give the calculation formula of quote token target $Q_0$.

$$Q_0=Q_1+Q_1*\frac{\sqrt{1+\frac{4k\Delta B i}{Q_1}}-1}{2k}$$

# Come in handy

Congratulation! We just finished the most magical part. Now let's talk about something more pratical.

## Trade

As mentioned above, the regression target depends on oracle price. And the price curve depend on regression target. So in every trade, we should calculate regression target in advance to fix the price curve.

In addition, since the price curve given by PMM is segmented, if a transaction covers different scenarios (for example, when a user sells a large amount of Base Token in the scenario of Base Token Shortage, and directly enters scenario of Quote Token Shortage), the price needs to be calculated in segments and accumulated.

This accumulation requires high accuracy, but the computer has a loss of accuracy, so be very careful in processing. The contract provides six trading functions in three scenarios, totalling six. The way how they have been combined is the key. You can find the most important logic of cross scenario trading [here](https://github.com/DODOEX/dodo-smart-contract/blob/master/contracts/impl/Trader.sol).

## Deposit

Depositing and withdrawing Base Token in scenario of Base Token Storage or depositing and withdrawing Quote Token in scenario of Quote Token Shortage, will change the price curve. This requires us to process the deposit and withdrawal reasonably to keep the capital pool sustainable and fair.

We take the scenario of Base Token shortage as an example to analyse how deposit affects income of LP.

According to the calculation formula of $B_0$ derived above
$$B_0=B_1+B_1*\frac{\sqrt{1+\frac{4k\Delta Q}{B_1 i}}-1}{2k}$$

After deposit $b$, $B_1$ increases by $b$, and the increment of $B_0$ is greater than $b$. It means that recharging makes all the LPs that provide Base Token gain profits. The source of this income is that the recharge makes the price curve smooth, and the same amount of $\Delta Q$ can buy more Base Tokens.

In this case, once the LP is deposited, it will get benefits. We call it "deposit reward". The essential source of this reward is the slippage paid by the trader who made the system derivates from equilibrium status.

:::note
But "deposit rewards" are not risk-free arbitrage opportunities, please continue to read the next part.
:::

## Withdrawal

Like the previous section, after withdrawing $b$, $B_1$ decreases by $b$, and $B_0$ decreases by more than $b$. It shows that the withdrawal causes all the LPs that owes Base Tokens to suffer losses. This loss comes from withdrawal that makes the price curve steep, and hence the spare amount of Quote token can only purchase less Base Token.

The PMM algorithm stipulates that a "withdrawal fee" is required to withdraw cash in this case. The amount of the fine is equal to the loss of all LPs caused by the withdrawal. This fee will be directly distributed to all LPs that have not been withdrawn.

Recalling the situation in the previous part, if LP withdraws immediately after deposit, the withdrawal fee will be greater than the deposit reward, so there will be no chance of risk-free arbitrage. This mechanism is beneficial to LP that didn’t withdraw, which can retain funds to the maximum.

It is worth noting that both deposit reward and withdrawal fee are only significant when the system deviates very far from the equilibrium state and the deposit/withdrawal amount is large.

Users often do not perceive the existence of this gain (loss). Of course, deal hunters are also welcome. Usually they deposit to earn rewards when the system deviates from equilibrium, and withdraw cash when the system returns to equilibrium to avoid withdrawal fee.
