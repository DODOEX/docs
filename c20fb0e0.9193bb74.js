(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,O=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return r?a.a.createElement(O,c(c({ref:t},l),{},{components:r})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(103)),o={id:"briefIntro",title:"Introduction to DODO",sidebar_label:"Introduction to DODO",slug:"/"},c={unversionedId:"briefIntro",id:"briefIntro",isDocsHomePage:!1,title:"Introduction to DODO",description:"What is DODO",source:"@site/docs/briefIntroduction.md",slug:"/",permalink:"/docs/docs/",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/briefIntroduction.md",version:"current",sidebar_label:"Introduction to DODO",sidebar:"someSidebar",next:{title:"The DODO Advantage",permalink:"/docs/docs/advantages"}},s=[{value:"What is DODO",id:"what-is-dodo",children:[]},{value:"How does DODO work",id:"how-does-dodo-work",children:[]},{value:"Why DODO",id:"why-dodo",children:[]},{value:"What can I do with DODO",id:"what-can-i-do-with-dodo",children:[{value:"As a trader",id:"as-a-trader",children:[]},{value:"As a LP",id:"as-a-lp",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-dodo"},"What is DODO"),Object(i.b)("p",null,"DODO is a next-generation on-chain liquidity provider, which leverages the Proactive Market Maker algorithm (PMM) to provide pure on-chain and contract-fillable liquidity for everyone."),Object(i.b)("h2",{id:"how-does-dodo-work"},"How does DODO work"),Object(i.b)("p",null,"DODO accepts liquidity providers\u2019 assets. It gathers funds near market prices to provide sufficient liquidity. In order to minimize counterparty risks for LPs, DODO dynamically adjusts market prices to encourage arbitrageurs to step in and stabilize LPs' portfolios."),Object(i.b)("h2",{id:"why-dodo"},"Why DODO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Low slippage"),Object(i.b)("li",{parentName:"ul"},"Single risk exposure"),Object(i.b)("li",{parentName:"ul"},"No impermanent loss")),Object(i.b)("h2",{id:"what-can-i-do-with-dodo"},"What can I do with DODO"),Object(i.b)("h3",{id:"as-a-trader"},"As a trader"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each and every trader enjoys sufficient liquidity similar to that of centralized exchanges"),Object(i.b)("li",{parentName:"ul"},"Arbitrageurs can profit from price discrepancies between DODO and other exchanges"),Object(i.b)("li",{parentName:"ul"},"Smart contracts can natively use DODO liquidity to complete on-chain transactions, such as liquidation and auctions")),Object(i.b)("h3",{id:"as-a-lp"},"As a LP"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"There are no minimal deposit requirements and restrictions on asset types"),Object(i.b)("li",{parentName:"ul"},"DODO charges a fee for each transaction and eventually distributes it to LPs as rewards"),Object(i.b)("li",{parentName:"ul"},"LPs can create trading pairs with their own tokens"),Object(i.b)("li",{parentName:"ul"},"LPs can obtain liquidity by depositing their tokens they already own, without taking on price risk")))}d.isMDXComponent=!0}}]);