(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(103)),o={id:"riskParameters",title:"Risk Parameters",sidebar_label:"Risk Parameters"},s={unversionedId:"riskParameters",id:"riskParameters",isDocsHomePage:!1,title:"Risk Parameters",description:"Front Running",source:"@site/docs/risParameters.md",slug:"/riskParameters",permalink:"/docs/docs/riskParameters",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/risParameters.md",version:"current",sidebar_label:"Risk Parameters",sidebar:"someSidebar",previous:{title:"Decentralization",permalink:"/docs/docs/decentralization"},next:{title:"Backtest Report",permalink:"/docs/docs/backtest"}},c=[{value:"Front Running",id:"front-running",children:[]},{value:"Fee Percentage",id:"fee-percentage",children:[]},{value:"k",id:"k",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"front-running"},"Front Running"),Object(i.b)("p",null,"Front running on DODO could occur in the following scenario."),Object(i.b)("p",null,"Arbitrageurs listen for oracle price updates transactions. If they see that the oracle price for an asset will go up in the next block, they will buy asset on DODO before the price update by paying higher gas prices. And sell the asset immediately after the oracle price has been updated. This will result in a loss for liquidity providers, and this loss is referred to as arbitrage loss."),Object(i.b)("p",null,"This might seem like a big deal, but the truth is, such opportunities are few and far between, and not necessarily profitable for arbitrageurs."),Object(i.b)("p",null,"First of all, front running is only profitable when the price fluctuates significantly. This is because DODO charges a 0.3% transaction fee per trade, thus buying and selling assets once incurs a 0.6% transaction fee overall. Therefore, if the price discrepancy between the oracle updates is less than 0.6%, front running is not profitable at all for arbitrageurs."),Object(i.b)("p",null,"Secondly, DODO uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://feeds.chain.link/"}),"Chainlink")," as its oracle of choice. The Chainlink price oracle provides price updates by aggregating updates from 22 independent price feeders. This means that price changes on DODO are usually gradual and thus not susceptible to front running."),Object(i.b)("p",null,"With that said, although the probability of a significant price change between updates is low, it ",Object(i.b)("em",{parentName:"p"},"will")," happen, and arbitrageurs looking to extract value from the system ",Object(i.b)("em",{parentName:"p"},"will")," take advantage of front running. The DODO team conducted extensive backtesting and discovered that in the overwhelming majority of cases, profit from market making far outweighs arbitrage loss for liquidity providers."),Object(i.b)("p",null,"Please note that arbitrage loss due to front running will increase significantly during drastic market fluctuations. The DODO team recommends withdrawing your assets during fluctuations to avert the risk and proceeding with caution depending on your risk profile."),Object(i.b)("h2",{id:"fee-percentage"},"Fee Percentage"),Object(i.b)("p",null,"As mentioned above, the transaction fee deters arbitrageurs from extracting value from the system via front running, protecting liquidity providers from arbitrage loss."),Object(i.b)("p",null,"The question is, what should the transaction fee percentage be? Lowering the percentage leads to more trading, potentially increasing profit for liquidity providers, but also elevating risk of arbitrage loss. On the other hand, increasing the percentage lowers the risk of arbitrage loss, but also reduces profit for liquidity providers. It is crucial to strike a reasonable balance between risk and profit."),Object(i.b)("p",null,"Since market fluctuations have a bearing on arbitrageur behaviors, the fee percentage should also be fine-tuned based on market changes. The fee percentage should be low to facilitate more trading when the market is relatively stable, and high when the market is fluctuating. Determining the appropriate fee percentage is an important ",Object(i.b)("strong",{parentName:"p"},"governance")," issue, and users should collectively have a say in how much risk they are willing to take on."),Object(i.b)("h2",{id:"k"},"k"),Object(i.b)("p",null,"Another important parameter is k from the PMM pricing formula. A small k provides good liquidity and increase trading volume, but increases the risk of arbitrage loss; whereas a large k hurts liquidity and decreases trading volume, but reduces the risk of arbitrage loss. Therefore, similar to the fee percentage above, the value of k should be ",Object(i.b)("strong",{parentName:"p"},"governed and determined")," by the users."))}u.isMDXComponent=!0}}]);