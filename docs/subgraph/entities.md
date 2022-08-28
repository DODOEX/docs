---
sidebar_position: 2
title: Subgraph Entities
---

## Entities

- [`DodoZoo`](#dodozoo)
- [`DodoDayData`](#dododaydata)
- [`Transaction`](#transaction)
- [`User`](#user)
- [`UserDayData`](#userdaydata)
- [`LiquidityPosition`](#liquidityposition)
- [`Token`](#token)
- [`TokenTrader`](#tokentrader)
- [`LpToken`](#lptoken)
- [`OrderHistory`](#orderhistory)
- [`LiquidityHistory`](#liquidityhistory)
- [`Pair`](#pair)
- [`PairTrader`](#pairtrader)
- [`Swap`](#swap)
- [`MaintainerFeeTx`](#maintainerfeetx)
- [`FlashLoan`](#flashloan)
- [`PairDayData`](#pairdaydata)
- [`PairHourData`](#pairhourdata)
- [`TokenDayData`](#tokendaydata)
- [`CrowdPooling`](#crowdpooling)
- [`BidPosition`](#bidposition)
- [`BidHistory`](#BidHistory)
- [`CrowdPoolingDayData`](#crowdpoolingdaydata)
- [`CrowPoolingHourData`](#crowdpoolinghourdata)
- [`TradingIncentive`](#tradingincentive)
- [`IncentiveRewardHistory`](#incentiverewardhistory)
- [`Pool`](#pool)
- [`MiningPool`](#miningpool)

## DodoZoo

Description:

| Field                | Type        | Description             |
| -------------------- | ----------- | ----------------------- |
| tokenCount           | BigInt!     | tokens count            |
| crowdpoolingCount    | BigInt!     | crowdpooling count      |
| txCount              | BigInt!     | transactions count      |
| uniqueUsersCount     | BigInt!     | unique users            |
| volumeUSD            | BigDecimal! | volume usd              |
| feeUSD               | BigDecimal! | fee usd                 |
| maintainerFeeUSD     | BigDecimal! | maintainer fee usd      |
| DIP3MaintainerFeeUSD | BigDecimal! | DIP3 maintainer fee usd |
| updatedAt            | BigInt      | updatedAt               |

## DodoDayData

Description:

| Field            | Type        | Description                  |
| ---------------- | ----------- | ---------------------------- |
| id               | ID!         | day id                       |
| date             | Int!        | uinx timestamp(start of day) |
| txCount          | BigInt!     | transactions count           |
| uniqueUsersCount | BigInt!     | unique users                 |
| volumeUSD        | BigDecimal! | volume usd                   |
| feeUSD           | BigDecimal  | fee usd                      |
| maintainerFeeUSD | BigDecimal! | maintainer fee usd           |
| updatedAt        | BigInt      | updatedAt                    |

## Transaction

Description:

| Field      | Type        | Description         |
| ---------- | ----------- | ------------------- |
| id         | ID!         | hash                |
| timestamp  | BigInt!     | timestamps          |
| from       | String!     | from                |
| to         | String!     | to                  |
| sender     | String!     | sender              |
| type       | String!     | type(TRADE、LP、CP) |
| tokens     | Token!      | tokens              |
| volumeUSD  | BigDecimal! | volumeUSD           |
| updatedAtv | BigInt      | updatedAt           |

## User

Description:

| Field                 | Type                                       | Description             |
| --------------------- | ------------------------------------------ | ----------------------- |
| id                    | ID!                                        | user address            |
| txCount               | BigInt!                                    | swapped times           |
| tradingRewardRecieved | BigDecimal!                                | trading reward recieved |
| liquidityPositions    | [`LiquidityPosition!`](#liquidityposition) | liquidity Positions     |
| timestamp             | BigInt!                                    | timestamp               |
| updatedAt             | BigInt                                     | updatedAt               |

## UserDayData

Description:

| Field         | Type    | Description            |
| ------------- | ------- | ---------------------- |
| id            | ID!     | user address - date    |
| date          | Int!    | date                   |
| tradeCount    | BigInt! | trade count            |
| addLPCount    | BigInt! | add liquidity count    |
| removeLPCount | BigInt! | remove liquidity count |
| bidCount      | BigInt! | cp bid count           |
| cancelCount   | BigInt! | cp cancel count        |
| claimCount    | BigInt! | cp claim count         |
| updatedAt     | BigInt  | updatedAt              |

## LiquidityPosition

Description:

| Field                  | Type        | Description                         |
| ---------------------- | ----------- | ----------------------------------- |
| id                     | ID!         | lp Token address                    |
| user                   | User!       | user                                |
| pair                   | Pair        | pair                                |
| lpToken                | LpToken!    | lp token                            |
| liquidityTokenBalance  | BigDecimal! | lp token balance                    |
| liquidityTokenInMining | BigDecimal! | lp token balance in mining contract |
| lastTxTime             | BigInt!     | last add time                       |
| updatedAt              | BigInt      | updatedAt                           |

## Token

Description:

| Field                | Type        | Description                                                  |
| -------------------- | ----------- | ------------------------------------------------------------ |
| id                   | ID!         | token address                                                |
| untrackedVolume      | BigDecimal! | untracked volume                                             |
| tradeVolume          | BigDecimal! | total trade volume                                           |
| tradeVolumeBridge    | BigDecimal! | total trade volume for bridge                                |
| volumeUSD            | BigDecimal! | traded volume of USD                                         |
| volumeUSDBridge      | BigDecimal! | traded volume of USD for bridge                              |
| txCount              | BigInt!     | transactions across all pairs                                |
| traderCount          | BigInt!     | trader count                                                 |
| totalLiquidityOnDODO | BigDecimal! | liquidity across all pairs                                   |
| usdPrice             | BigDecimal! | usd price(only stable coin and classical pool has usd price) |
| priceUpdateTimestamp | BigInt!     | price update time                                            |
| symbol               | String!     | token symbol                                                 |
| name                 | String!     | token name                                                   |
| decimals             | BigInt!     | token decimals                                               |
| totalSupply          | BigInt!     | total supply                                                 |
| timestamp            | BigInt!     | timestamp                                                    |
| updatedAt            | BigInt      | updatedAt                                                    |

## TokenTrader

Description:

| Field      | Type    | Description                  |
| ---------- | ------- | ---------------------------- |
| id         | ID!     | token address - user address |
| token      | Token!  | pair                         |
| trader     | User!   | user                         |
| lastTxTime | BigInt! | last trade time              |
| updatedAt  | BigInt  | updatedAt                    |

## LpToken

Description:

| Field       | Type    | Description    |
| ----------- | ------- | -------------- |
| id          | ID!     | token address  |
| pair        | Pair    | belong pair    |
| symbol      | String! | token symbol   |
| name        | String! | token name     |
| decimals    | BigInt! | token decimals |
| totalSupply | BigInt! | total supply   |
| updatedAt   | BigInt! | updatedAt      |

## OrderHistory

Description:

| Field         | Type        | Description                                       |
| ------------- | ----------- | ------------------------------------------------- |
| id            | ID!         | order ID                                          |
| source        | String!     | source (from : smartroute event、pool swap event) |
| hash          | String!     | transaction hash                                  |
| block         | BigInt!     | block                                             |
| timestamp     | BigInt!     | timestamp of this transaction                     |
| sender        | Bytes!      | msg sender                                        |
| from          | Bytes!      | tx from address                                   |
| fromToken     | Token!      | from token                                        |
| toToken       | Token!      | to token                                          |
| to            | Bytes!      | to address                                        |
| logIndex      | BigInt!     | log index                                         |
| amountIn      | BigDecimal! | from token amount                                 |
| amountOut     | BigDecimal! | to token amount                                   |
| volumeUSD     | BigDecimal! | traded volume of USD                              |
| tradingReward | BigDecimal! | trading incentive reward                          |
| volumeUSD     | BigDecimal! | traded volume of USD                              |
| updatedAt     | BigInt      | updatedAt                                         |

## LiquidityHistory

Description:

| Field              | Type        | Description              |
| ------------------ | ----------- | ------------------------ |
| id                 | ID!         | txid - logindex          |
| type               | String!     | type (DEPOSIT、WITHDRAW) |
| hash               | String!     | hash                     |
| block              | BigInt!     | block number             |
| timestamp          | BigInt!     | timestamp                |
| user               | User!       | user                     |
| lpToken            | LpToken!    | lp token                 |
| from               | Bytes!      | from                     |
| amount             | BigDecimal! | amount                   |
| balance            | BigDecimal! | balance in wallet        |
| baseAmountChange   | BigDecimal  | baseToken amount change  |
| quoteAmountChange  | BigDecimal  | quoteToken amount change |
| pair               | Pair        | pair                     |
| baseReserve        | BigDecimal  | base reserve             |
| quoteReserve       | BigDecimal  | quote reserve            |
| lpTokenTotalSupply | BigDecimal  | lp token total supply    |
| baseTokenPrice     | BigDecimal  | base token price         |
| quoteTokenPrice    | BigDecimal  | quote token Price        |
| updatedAt          | BigInt      | updatedAt                |

## Pair

Description:

| Field                  | Type        | Description                                                      |
| ---------------------- | ----------- | ---------------------------------------------------------------- |
| id                     | ID!         | pool address                                                     |
| type                   | String!     | pool type（CLASSICAL、DVM、DPP）                                 |
| source                 | String      | pool source(default:null)                                        |
| creator                | Bytes!      | block number                                                     |
| timestamp              | BigInt!     | creator                                                          |
| baseToken              | Token!      | user                                                             |
| lpToken                | LpToken!    | base token                                                       |
| quoteToken             | Token!      | quote token                                                      |
| baseSymbol             | String      | base token symbol                                                |
| quoteSymbol            | String      | quote token symbol                                               |
| i                      | BigInt      | i                                                                |
| k                      | BigInt      | k                                                                |
| lpFeeRate              | BigDecimal! | lp Fee Rate                                                      |
| baseLpToken            | LpToken     | base LP token, for DPP is null, for dodo v1 lpToken is different |
| quoteLpToken           | LpToken     | quote LP token,for DPP is null, for dodo v1 lpToken is different |
| baseReserve            | BigDecimal! | base token reserve                                               |
| quoteReserve           | BigDecimal! | quote token reserve                                              |
| lastTradePrice         | BigDecimal! | last trade price (quote/base)                                    |
| untrackedBaseVolume    | BigDecimal! | untracked base volume                                            |
| untrackedQuoteVolume   | BigDecimal! | untracked quote volume                                           |
| volumeBaseToken        | BigDecimal! | trade volume of basetoken                                        |
| baseSymbol             | String      | base token symbol                                                |
| quoteSymbol            | String      | quote token symbol                                               |
| i                      | BigInt      | i                                                                |
| k                      | BigInt      | k                                                                |
| lpFeeRate              | BigDecimal! | lp Fee Rate                                                      |
| volumeQuoteToken       | BigDecimal! | trade volume of quotetoken                                       |
| volumeUSD              | BigDecimal! | traded volume of USD                                             |
| feeBase                | BigDecimal! | lp fee base                                                      |
| feeQuote               | BigDecimal! | lp fee quote                                                     |
| feeUSD                 | BigDecimal! | lp fee of USD                                                    |
| txCount                | BigInt!     | transactions count                                               |
| createdAtTimestamp     | BigInt!     | createAtTimestamp                                                |
| createdAtBlockNumber   | BigInt!     | createAtBlock                                                    |
| liquidityProviderCount | BigInt!     | liquidity provider count                                         |
| mtFeeRateModel         | Bytes!      | mtFee Rate Model                                                 |
| maintainer             | Bytes!      | maintainer                                                       |
| mtFeeRate              | BigInt!     | maintainer fee rate                                              |
| mtFeeBase              | BigDecimal! | maintainer fee base token                                        |
| mtFeeQuote             | BigDecimal! | maintainer fee quote token                                       |
| mtFeeUSD               | BigDecimal! | maintainer fee in USD                                            |
| traderCount            | BigInt!     | trader count                                                     |
| isTradeAllowed         | Boolean!    | trade allowed                                                    |
| isDepositBaseAllowed   | Boolean!    | deposit base allowed                                             |
| isDepositQuoteAllowed  | Boolean!    | deposit quote allowed                                            |
| updatedAt              | BigInt      | updatedAt                                                        |

## PairTrader

Description:

| Field      | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| id         | ID!     | pair address - user address |
| pair       | Pair    | pair                        |
| trader     | User!   | user                        |
| lastTxTime | BigInt! | last trade time             |
| updatedAt  | BigInt  | updatedAt                   |

## Swap

Description:

| Field       | Type        | Description                                                 |
| ----------- | ----------- | ----------------------------------------------------------- |
| id          | ID!         | transaction hash + \"-\" + index in swaps Transaction array |
| hash        | String!     | transaction hash                                            |
| timestamp   | BigInt!     | transaction timestamp                                       |
| pair        | Pair        | trading pair                                                |
| sender      | Bytes!      | msg.sender                                                  |
| from        | Bytes!      | tx from address                                             |
| fromToken   | Token!      | from token                                                  |
| toToken     | Token!      | to token                                                    |
| to          | Bytes!      | to address                                                  |
| logIndex    | BigInt!     | log index                                                   |
| amountIn    | BigDecimal! | from token amount                                           |
| amountOut   | BigDecimal! | to token amount                                             |
| feeBase     | BigDecimal! | lp fee base                                                 |
| feeQuote    | BigDecimal! | lp fee quote                                                |
| baseVolume  | BigDecimal! | base volume                                                 |
| quoteVolume | BigDecimal! | quote volume                                                |
| volumeUSD   | BigDecimal! | traded volume of USD                                        |
| updatedAt   | BigInt      | updatedAt                                                   |

## MaintainerFeeTx

Description:

| Field     | Type        | Description                       |
| --------- | ----------- | --------------------------------- |
| id        | ID!         | ID:transaction hash - event index |
| hash      | String!     | transaction hash                  |
| token     | Token!      | earning token                     |
| amount    | BigDecimal! | amount                            |
| volumeUSD | BigDecimal! | volume in usd                     |
| updatedAt | BigInt      | updatedAt                         |

## MaintainerEarnings

Description:

| Field      | Type        | Description                        |
| ---------- | ----------- | ---------------------------------- |
| id         | ID!         | maintainer address - token address |
| maintainer | Bytes!      | maintainer address                 |
| token      | Token!      | token address                      |
| amount     | BigDecimal! | amount                             |
| amountUSD  | BigDecimal! | amount in usd                      |
| updatedAt  | BigInt      | updatedAt                          |

## FlashLoan

Description:

| Field       | Type        | Description                                                 |
| ----------- | ----------- | ----------------------------------------------------------- |
| id          | ID!         | transaction hash + \"-\" + index in swaps Transaction array |
| hash        | String!     | transaction hash                                            |
| timestamp   | BigInt!     | transaction timestamp                                       |
| pair        | Pair        | trading pair                                                |
| sender      | Bytes!      | msg.sender                                                  |
| from        | Bytes!      | tx from address                                             |
| baseAmount  | BigDecimal! | base amount                                                 |
| quoteAmount | BigDecimal! | quote amount                                                |
| volumeUSD   | BigDecimal! | traded volume of USD                                        |
| updatedAt   | BigInt      | updatedAt                                                   |

## PairDayData

Description:

| Field                   | Type        | Description                    |
| ----------------------- | ----------- | ------------------------------ |
| id                      | ID!         | pair address - day id          |
| date                    | Int!        | uinx timestamp(start of day)   |
| pairAddress             | Bytes!      | pair address                   |
| pair                    | Pair        | pair                           |
| baseToken               | Token!      | base token                     |
| quoteToken              | Token!      | quote token                    |
| baseTokenReserve        | BigDecimal! | base token reserve             |
| quoteTokenReserve       | BigDecimal! | quote token reserve            |
| baseUsdPrice            | BigDecimal! | base token price               |
| quoteUsdPrice           | BigDecimal! | quote token price              |
| baseLpTokenTotalSupply  | BigDecimal! | total supply of base lp token  |
| quoteLpTokenTotalSupply | BigDecimal! | total supply of quote lp token |
| untrackedBaseVolume     | BigDecimal! | untracked base volume          |
| untrackedQuoteVolume    | BigDecimal! | untracked quote volume         |
| volumeBase              | BigDecimal! | base token volume              |
| volumeQuote             | BigDecimal! | quote token volume             |
| volumeUSD               | BigDecimal! | USD volume                     |
| txns                    | BigInt!     | daily txns                     |
| traders                 | BigInt!     | daily traders                  |
| feeBase                 | BigDecimal! | base token trading fee get     |
| feeQuote                | BigDecimal! | quote token trading fee        |
| lpFeeRate               | BigDecimal! | lp Fee Rate                    |
| updatedAt               | BigInt      | updatedAt                      |

## PairHourData

Description:

| Field                   | Type        | Description                    |
| ----------------------- | ----------- | ------------------------------ |
| id                      | ID!         | pair address - hour id         |
| hour                    | Int!        | uinx timestamp(start of hour)  |
| pairAddress             | Bytes!      | pair address                   |
| pair                    | Pair        | pair                           |
| baseToken               | Token!      | base token                     |
| quoteToken              | Token!      | quote token                    |
| baseTokenReserve        | BigDecimal! | base token reserve             |
| quoteTokenReserve       | BigDecimal! | quote token reserve            |
| baseUsdPrice            | BigDecimal! | base token price               |
| quoteUsdPrice           | BigDecimal! | quote token price              |
| baseLpTokenTotalSupply  | BigDecimal! | total supply of base lp token  |
| quoteLpTokenTotalSupply | BigDecimal! | total supply of quote lp token |
| untrackedBaseVolume     | BigDecimal! | untracked base volume          |
| untrackedQuoteVolume    | BigDecimal! | untracked quote volume         |
| volumeBase              | BigDecimal! | base token volume              |
| volumeQuote             | BigDecimal! | quote token volume             |
| volumeUSD               | BigDecimal! | USD volume                     |
| txns                    | BigInt!     | daily txns                     |
| traders                 | BigInt!     | daily traders                  |
| feeBase                 | BigDecimal! | base token trading fee get     |
| feeQuote                | BigDecimal! | quote token trading fee        |
| lpFeeRate               | BigDecimal! | lp Fee Rate                    |
| updatedAt               | BigInt      | updatedAt                      |

## TokenDayData

Description:

| Field               | Type        | Description                  |
| ------------------- | ----------- | ---------------------------- |
| id                  | ID!         | token address - day id       |
| date                | Int!        | uinx timestamp(start of day) |
| token               | Token!      | token address                |
| untrackedVolume     | BigDecimal! | untracked base volume        |
| usdPrice            | BigDecimal! | usdPrice                     |
| volume              | BigDecimal! | volume                       |
| volumeBridge        | BigDecimal! | bridge volume                |
| volumeUSD           | BigDecimal! | traded volume of USD         |
| txns                | BigInt!     | tx occured                   |
| traders             | BigInt!     | daily traders                |
| totalLiquidityToken | BigDecimal! | liquidity stats              |
| fee                 | BigDecimal! | trading fee lp get           |
| maintainerFee       | BigDecimal! | maintainer fee               |
| maintainerFeeUSD    | BigDecimal! | maintainer fee in usd        |
| updatedAt           | BigInt      | updatedAt                    |

## CrowdPooling

Description:

| Field                | Type        | Description                |
| -------------------- | ----------- | -------------------------- |
| id                   | ID!         | cp address                 |
| version              | BigInt      | version                    |
| isOvercapStop        | Boolean     | is overcap stop            |
| feeRate              | BigInt      | pool feerate               |
| tokenCliffRate       | BigInt      | token cliff rate           |
| tokenClaimDuration   | BigInt      | token claim duration       |
| tokenVestingDuration | BigInt      | token vesting duration     |
| serialNumber         | BigInt!     | serial number              |
| creator              | Bytes!      | creator                    |
| createTime           | BigInt!     | create time                |
| baseToken            | Token!      | base token                 |
| quoteToken           | Token!      | quote token                |
| bidStartTime         | BigInt!     | bid start time             |
| bidEndTime           | BigInt!     | bid end time               |
| calmEndTime          | BigInt!     | clam end time              |
| freezeDuration       | BigInt!     | freeze duration            |
| vestingDuration      | BigInt!     | vesting duration           |
| i                    | BigInt!     | i                          |
| k                    | BigInt!     | k                          |
| mtFeeRateModel       | Bytes!      | mt fee rate model          |
| totalShares          | BigDecimal! | total shares               |
| totalBase            | BigDecimal! | total base                 |
| settled              | Boolean!    | settle state               |
| dvm                  | Pair        | created dvm address        |
| liquidator           | Bytes!      | liquidator                 |
| poolQuote            | BigDecimal! | total quote in pool        |
| poolQuoteCap         | BigDecimal! | pool quote cap             |
| investorsCount       | BigInt!     | investors count = creators |
| updatedAt            | BigInt      | updatedAt                  |

## BidPosition

Description:

| Field         | Type          | Description                 |
| ------------- | ------------- | --------------------------- |
| id            | ID!           | user address - pair address |
| user          | User!         | user                        |
| cp            | CrowdPooling! | cp address                  |
| shares        | BigDecimal!   | shares                      |
| investedQuote | BigDecimal!   | total quote invested        |
| lastTxTime    | BigInt!       | last bid time               |
| claimed       | Boolean!      | claimed                     |
| updatedAt     | BigInt        | updatedAt                   |

## BidHistory

Description:

| Field     | Type                    | Description          |
| --------- | ----------------------- | -------------------- |
| id        | ID!                     | txid - logindex      |
| user      | User!                   | user                 |
| cp        | CrowdPooling!cp address |
| action    | String!                 | action ：bid、cancle |
| hash      | String!                 | hash                 |
| block     | BigInt!                 | block                |
| timestamp | BigInt!                 | timestamp            |
| quote     | BigDecimal!             | quote                |
| share     | BigDecimal!             | share                |
| fee       | BigDecimal!             | fee                  |
| updatedAt | BigInt                  | updatedAt            |

## CrowdPoolingDayData

Description:

| Field         | Type          | Description                                    |
| ------------- | ------------- | ---------------------------------------------- |
| id            | ID!           | cp address - day id                            |
| date          | Int!          | uinx timestamp(start of day)                   |
| crowdPooling  | CrowdPooling! | CrowdPooling                                   |
| investedQuote | BigDecimal!   | total quote invest in durnation = taker tokens |
| canceledQuote | BigDecimal!   | total quote canceled in durnation              |
| investCount   | BigInt!       | invest count                                   |
| newcome       | BigInt!       | creator: newly investor                        |
| poolQuote     | BigDecimal!   | total quote in pool                            |
| investors     | BigInt!       | investors count                                |
| updatedAt     | BigInt        | updatedAt                                      |

## CrowdPoolingHourData

Description:

| Field         | Type          | Description                                    |
| ------------- | ------------- | ---------------------------------------------- |
| id            | ID!           | cp address - hour id                           |
| hour          | Int!          | uinx timestamp(start of hour)                  |
| crowdPooling  | CrowdPooling! | CrowdPooling                                   |
| investedQuote | BigDecimal!   | total quote invest in durnation = taker tokens |
| canceledQuote | BigDecimal!   | total quote canceled in durnation              |
| investCount   | BigInt!       | invest count                                   |
| newcome       | BigInt!       | creator: newly investor                        |
| poolQuote     | BigDecimal!   | total quote in pool                            |
| investors     | BigInt!       | investors count                                |
| updatedAt     | BigInt        | updatedAt                                      |

## TradingIncentive

Description:

| Field       | Type        | Description           |
| ----------- | ----------- | --------------------- |
| id          | ID!         | id (contract address) |
| totalAmount | BigDecimal! | total amount released |
| totalUser   | BigInt!     | total user            |
| updatedAt   | BigInt      | updatedAt             |

## IncentiveRewardHistory

Description:

| Field       | Type        | Description                      |
| ----------- | ----------- | -------------------------------- |
| id          | ID!         | id (transaction - log index)     |
| user        | User!       | user                             |
| amount      | BigDecimal  | reward amount                    |
| timestamp   | BigInt!     | timestamp                        |
| times       | BigInt!     | reward times in this transaction |
| totalAmount | BigDecimal! | total amount released            |
| totalUser   | BigInt!     | total user                       |
| updatedAt   | BigInt      | updatedAt                        |

## Pool

Description:

| Field     | Type       | Description    |
| --------- | ---------- | -------------- |
| id        | ID!        | pid            |
| lpToken   | String!    | lp token       |
| staked    | BigDecimal | staked balance |
| updatedAt | BigInt     | updatedAt      |

## MiningPool

Description:

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| id        | ID!      | pool id     |
| lpToken   | LpToken! | lp token    |
| updatedAt | BigInt   | updateAt    |
