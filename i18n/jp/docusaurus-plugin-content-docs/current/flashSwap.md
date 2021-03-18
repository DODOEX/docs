---
id: flashSwap
title: 電撃取引
sidebar_label: 電撃取引
---

## 電撃取引とは？

簡単に言えば、DODOで信用によって支払うことができます。トークンを買う時は、トークンをもらってから支払うことができます。

## 電撃取引の仕組み

![](https://dodoex.github.io/docs/img/dodo_flash_swap_v2.png)

上の図は電撃取引の4つのステップを示しています。
 
1.DODO Pairコントラクトの`flashLoan` 関数を呼び出します。
 
2.DODO Pairが Base tokenを申請者に送信します。
 
3.`flashLoan` 関数で呼び出したパラメータdataが空でない場合、DODO Pairスマート・コントラクトは申請者のdodo Callを呼び出します。
 
4.dodo Callの実行により、DODO Pairスマート・コントラクトは申請者から必要なquotetokenを検索します。

```javascript
    function flashLoan(
        uint256 baseAmount,
        uint256 quoteAmount,
        address assetTo,
        bytes calldata data
    ) external;
```
 
注意：`flashLoan` 関数も同様な方法で電撃取引を実行できます。
 
電撃取引の場合、申請者はI` DODOCallee` インターフェースが実現できるコントラクトでなければなりません。

```javascript
interface IDODOCallee {
    function DVMSellShareCall(
        address payable assetTo,
        uint256,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata
    ) external;

    function DPPFlashLoanCall(
        address sender,
        uint256 baseAmount,
        uint256 quoteAmount,
        bytes calldata data
    ) external;
}
```

## 電撃取引のメリットが何ですか？

電撃取引はマーケットメイキングの効率を高めることができます。市場バランスは裁定取引で維持されます。電撃取引によって裁定取引をするのに資金の要求がなくなり、裁定取引の制限が低くなりました。
 
ここでまったくリスクなしの裁定取引組み合わせを電撃取引の応用例として示します。UiswapArbitrager.solのソースコードを例として参照してください。そのソースコードはここ（URL）で確認できます。その流れは以下の図の通りです。
 
完全な裁定取引は以下の9つのステップを含みます。
 
1.ユーザーがUniwapArbitragerのexecuteBuyArbitrage関数を呼び出します。
 
2.UniwapArbitragerが DODO PairのbuyBaseToken関数を呼び出して、電撃取引を触発します。
 
3.DODO PairがUniswapArbitragerに1 WETHを転送します。
 
4.DODO Pair がUniswapArbitragerのdodoCall関数を呼び出します。
 
5.UniiswapArbitragerは受け取った1 WETHをUniiswapV2に転送します。
 
6.UniiswapArbitragerはUniswapV2のswap関数を呼び出します。
 
7.UniiswapV2はUniswapArbitragerに200 USDCを転送します。
 
8.DODO Pair がTransferFrom関数を呼び出し、UniswapArbitragerから150 USDCを受け取ります。
 
9.UniswapArbitragerは残りの50 USDCをユーザーに転送します。
 
以上のステップで示すように
 
*２、３、４、８ステップはDODOで実行します。
 
*5、6、7ステップはUniswapで実行します。
 
*ユーザーは取引の指令を出すだけで利益が得られます。他のステップに全く参加しなくてもいいです。
 
ユーザーにとって、UniiswapArbitrageurコントラクトの一番よい点は資金の必要がなく、DODOとUniswapの働きの仕組みを知る必要もないことです。一つの関数を呼び出すだけで、成功すれば利益が得られます。失敗しても、ユーザーはいくらかのgas費を損失するだけです。
 
不必要なgas費損失を避けるために、我々はユーザーにeth_callを用い、前もってexecuteBuyAbitrageまたはexecuteSellAbitrageを実行して裁定取引の収益を予測することを推薦します。利益を得る可能性があれば、この2つの関数は裁定取引の収益を返してきます。

## いくつかの考え

電撃取引を深く理解さえすれば、DeFi取引が中心化取引に比べて優れていることが分かります。スマート・コントラクトを組み合わせることによって、DeFiの資金利用率をこれまでにないレベルに高めることができます。DeFi取引の信任コストは極めて低い。この金融システムが適用されれば、社会生産力を大幅に向上します。DODOチームは、関係者が電撃取引に対する理解からDeFi界隈に入ることを希望しています。
 
:::注意：
電撃取引は[dYdX](https://dydx.exchange/)と[Uniswap](https://uniswap.org/docs/v2/core-concepts/flash-swaps)の啓発を受けて誕生したものです。DODOチームはこれらのDeFi界隈の先駆者方々に敬意を表します。👍
:::
