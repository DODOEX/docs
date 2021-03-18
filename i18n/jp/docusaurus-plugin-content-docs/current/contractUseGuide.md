---
id: contractUseGuide
title: ユーザーマニュアル
sidebar_label: ユーザーマニュアル
---

## トレーダーに対して

コントラクトの中でトレーダーと関連する関数は二つだけです。`buyBaseToken`と`sellBaseToken`。
 
```javascript
 function sellBase(
   address to
 ) external returns (uint256 receiveQuoteAmount);
```

上の関数は`Base token`を購入するamountを決定します。もしこれだけの量の`quote token`を買う必要の`base token`の量は`maxPayQuote`より大きければ、取引はリセットされます。もしdataが空でなければ、電撃取引が触発されます。
 
`payQuote`の戻り値は、トレーダーが支払うべき`quote token`の量です。

```javascript
 function sellQuote(
   address to
 ) external returns (uint256 receiveBaseAmount);
```
 
上の関数は`base token`を売り出すamountを計算します。もし受けとるべきの`quote token`の量が`minReceiveQuote`より小さい場合、取引はリセットされます。dataが空でなければ、電撃取引が触発されます。
 
receive Quoteの戻り値は、トレーダーが支払うべき`quote token`の量です。
 
DODOもこの2つの関数のプレビューバージョンを提供しています。プレビュー関数は取引を送信しないで実行でき、ユーザーに価格を予測し、gas費用の節約に役立ちます。

```javascript
 function querySellBase(
   address trader, 
   uint256 payBaseAmount
 ) external view  returns (uint256 receiveQuoteAmount,uint256 mtFee);

 function querySellQuote(
   address trader, 
   uint256 payQuoteAmount
 ) external view  returns (uint256 receiveBaseAmount,uint256 mtFee);
```

以下の部分で電撃取引について紹介します。


## マーケット・メーカーに対して

マーケット・メーカーにとって、チャージと引き出しは最も重要な2つの関数です。一連の関数を提供して、彼らの資産を柔軟かつ効率的な管理の助けにします。
 
PMMアルゴリズムの強みの一つは、それぞれ`base token`または`quote token`を分けて管理できることです。したがって、次の関数は2つのバージョンがあります。1つのサフィックスはBaseで、もう1つのサフィックスはQuoteで、それぞれ`Base token`と`quote token`を管理するために使います。二つのバージョンは同じ入力値と出力値があります。
 
上の関数は資産池に確定量amountの資産をチャージし、あなたにcaptitalの量の資産額を返してきます。
 
注意：Captitalはマーケット・メーカーが資産池に占める資産のシェアを表します。Captitalは一つのERC 20フォーマットのトークンで、自由に取引できます。各DODO Pairには2種類のトークンがあります。それぞれ`Base token`と`Quote token`を表します。
 
 
マーケット・メーカーのアドレスに基づいて、資産池の資産残高を照会できます。戻り値IpBalanceは、実際のbase或いは`quote token`の量で、Capital tokenではありません。
 
 
上の関数は資本池からamountの資産を引き出そうとします。引き出し手数料が発生する可能性があるので、この関数が具体的な数量を返してきます。
 
資金池の規模は絶えず変化している（いつでも取引がある）ので、マーケット・メーカーがすべての資産を引き出しできるようにするために、上の二つの関数はすべての資産を引き出すことができます。最終的に、申請者は確定的な資産額を受け取れます。
 
場合によっては、資産の引き出しには手数料がかかります。上記の2つの関数は、引き出し手数料をプレビューすることができます。もし引き出し量amountの引き出しを申請すれば、一定量のpenaltyが取られます。
 
注意：受け取った資産の最終額は**amount-penalty**となります。


## 開発者に対して

開発者はDODOのインターフェイスDODO Zooからデータを取得できます。
 
baseTokenとquoteTokenを与えられれば、DODO Zooで同時に一つのDODO Pairしか登記できません。

```javascript

  function getDODOPool(
    address baseToken,
    address quoteToken
  ) external view returns (address[] memory pools)

  function getDODOPoolBidirection(
    address token0,
    address token1
  ) external view returns (address[] memory baseToken0Pool, address[] memory baseToken1Pool)

  function getDODOPoolByUser(
    address user
  ) external view returns (address[] memory pools)

```


```javascript

  event NewDVM(
      address baseToken,
      address quoteToken,
      address creator,
      address dvm
  );

  event RemoveDVM(address dvm);

  event NewDPP(
      address baseToken,
      address quoteToken,
      address creator,
      address dpp
  );

  event RemoveDPP(address dpp);
```
