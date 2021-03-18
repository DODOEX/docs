(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(96)),i={id:"contractUseGuide",title:"User Guide",sidebar_label:"User Guide"},s={unversionedId:"contractUseGuide",id:"contractUseGuide",isDocsHomePage:!1,title:"User Guide",description:"For traders",source:"@site/i18n/jp/docusaurus-plugin-content-docs/current/contractUseGuide.md",slug:"/contractUseGuide",permalink:"/docs/jp/docs/contractUseGuide",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/contractUseGuide.md",version:"current",sidebar_label:"User Guide",sidebar:"someSidebar",previous:{title:"DODO\u306e\u30b9\u30de\u30fc\u30c8\u30fb\u30b3\u30f3\u30c8\u30e9\u30af\u30c8",permalink:"/docs/jp/docs/framework"},next:{title:"Flash Swap",permalink:"/docs/jp/docs/flashSwap"}},c=[{value:"For traders",id:"for-traders",children:[]},{value:"For Liquidity Providers (LPs)",id:"for-liquidity-providers-lps",children:[{value:"DODO vending machine",id:"dodo-vending-machine",children:[]},{value:"DODO Private Pool",id:"dodo-private-pool",children:[]}]},{value:"For Developers",id:"for-developers",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"for-traders"},"For traders"),Object(o.b)("p",null,"DODO V2 designs ",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy"),", which encapsulating the bottom pools, realizing multi hops transaction routing. If a trader needs to direct use the underlying pool for trading, we have also unified definitions for different types of pools, exposing two functions for use: ",Object(o.b)("inlineCode",{parentName:"p"},"sellBase")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sellQuote"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellBase(\n   address to\n ) external returns (uint256 receiveQuoteAmount);\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"sellBase")," to sell base token and get quote token. This function requires the trader to construct a transaction that contains two actions. The first action is to transfer the base token to the pool contract, and the second action is to use a receiving address as a parameter to trigger sellBase. Before the end, traders are advised to check the value of ",Object(o.b)("inlineCode",{parentName:"p"},"receiveQuoteAmount")," to ensure the safe execution of the transaction."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellQuote(\n   address to\n ) external returns (uint256 receiveBaseAmount);\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"sellQuote")," to sell quote token and get base token. This function also requires the trader to construct a transaction that contains two actions. The first action is to transfer the quote token to the pool contract, and the second action is to use a receiving address as a parameter to trigger sellQuote. Before the end, traders are advised to check the value of ",Object(o.b)("inlineCode",{parentName:"p"},"receiveBaseAmount")," to ensure the safe execution of the transaction."),Object(o.b)("p",null,"DODO V2 also provides a view version of these two functions. View functions can be executed without sending transactions and they help users estimate prices bore spending gas. ps: the incoming parameters is the address of the trader"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function querySellBase(\n   address trader, \n   uint256 payBaseAmount\n ) external view  returns (uint256 receiveQuoteAmount,uint256 mtFee);\n\n function querySellQuote(\n   address trader, \n   uint256 payQuoteAmount\n ) external view  returns (uint256 receiveBaseAmount,uint256 mtFee);\n")),Object(o.b)("p",null,"In the next section, we will go into more details about ",Object(o.b)("a",{parentName:"p",href:"./flashSwap"},"flash swap"),"."),Object(o.b)("h2",{id:"for-liquidity-providers-lps"},"For Liquidity Providers (LPs)"),Object(o.b)("p",null,"DODO V2 designs two types of pools, including DODO vending machine and DODO private pools. ",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy")," encapsulates the liquidity management functions. And also people can directly interact with the underly pools."),Object(o.b)("h3",{id:"dodo-vending-machine"},"DODO vending machine"),Object(o.b)("p",null,"Anyone can participate in DODO vending machine, and due to the flexible design, the same trading pair can have more than one pools with different parameter settings. When user chooses the pool to participate, base and quote token will be injected according to the current ration. and user get ",Object(o.b)("inlineCode",{parentName:"p"},"shares")," assets minted by the pool."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ps:"),"shares",Object(o.b)("inlineCode",{parentName:"p"},"represents the lp's share of the asset pool. It is an erc20 token and can be traded freely. Each DODO vending machine corresponds to a kind of"),"shares",Object(o.b)("inlineCode",{parentName:"p"},".\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function buyShares(\n   address to\n ) external returns (uint256 shares, uint256 baseInput, uint256 quoteInput)\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"buyShares")," to inject liquidity into the pool. User needs to construct a transaction consisting of two actions. The first action is to deposit tokens in the pool according to the current base and quote ratio. The second action is to use a receiving address as the parameter to trigger ",Object(o.b)("inlineCode",{parentName:"p"},"buyShares"),". Before the end, it is recommended checking the amount of the two actual deposited values of ",Object(o.b)("inlineCode",{parentName:"p"},"baseInput")," and ",Object(o.b)("inlineCode",{parentName:"p"},"quoteInput")," to ensure the safe execution of the transaction."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellShares(\n    uint256 shareAmount,\n    address to,\n    uint256 baseMinAmount,\n    uint256 quoteMinAmount,\n    bytes calldata data,\n    uint256 deadline\n ) external returns (uint256 baseAmount, uint256 quoteAmount)\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"sellShares")," to remove liquidity from the pool. User can directly call the corresponding function of the pool to execute the transaction. The reqeust parameters include the amount of shares removed, the receiving address, baseMinAmount used for slippage protection (the minimum received base amount), quoteMinAmount (the minimum received quote amount), data is generally set to empty, if it's not, the external contract call will be executed at the end to achieve additional functions such as the conversion from WETH to ETH, and deadline is the effective time after the transaction is sent, it will automatically fail when overtime aiming to protect the safe execution of the transaction."),Object(o.b)("h3",{id:"dodo-private-pool"},"DODO Private Pool"),Object(o.b)("p",null,"DODO Private Pool is controlled by a single LP (market-making agency or project party, etc.), They has the authority to modify the pool's parameters dynamically and control the access of assets freely, which provides sufficient flexibility for the on-chain market-making strategy. The private pool has an owner, and the owner can set operator to realize the permission control."),Object(o.b)("p",null,"The operator of the private pool can trigger the reset function in ",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy")," to realize market making directly."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"  \n  function resetDODOPrivatePool(\n    address dppAddress,\n    uint256[] memory paramList,  //0 - newLpFeeRate, 1 - newI, 2 - newK\n    uint256[] memory amountList, //0 - baseInAmount, 1 - quoteInAmount, 2 - baseOutAmount, 3- quoteOutAmount\n    uint8 flag, // 0 - ERC20, 1 - baseInETH, 2 - quoteInETH, 3 - baseOutETH, 4 - quoteOutETH\n    uint256 minBaseReserve,\n    uint256 minQuoteReserve,\n    uint256 deadLine\n  ) external;\n")),Object(o.b)("p",null,"Described as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"dppAddress\uff1athe address of the private pool"),Object(o.b)("li",{parentName:"ul"},"paramList\uff1aArray includes newLpFeeRate, newI (base amount/quote amount,decimals = 18 - base token decimal + quote token decimal), newK (0 equals to sell tokens in a constant price and 1 equals to bonding curve like uniswap)"),Object(o.b)("li",{parentName:"ul"},"flag: mark of wrapping ETH or unwrapping WETH. (0 presents no conversion, 1 presents injecting base token wrapping to WETH, 2 presents injecting quote token wrapping to WETH, 3 presents removing base token unwrapping to ETH, 4 presents removing quote token unwrapping to ETH)"),Object(o.b)("li",{parentName:"ul"},"minBaseReserve && minQuoteReserve: When the owener modifies the pool's parameters, sometimes may cause the pool's price changing. At this time, robot may preempt the arbitrage. Therefore, after these two parameters are set well, the transaction will fail if the amount of existing base and quote is smaller than the passed value, which is a protective mechanism. We recommend pool's owner to set with each  transaction.")),Object(o.b)("p",null,"The platform also provides a method for the owner to trigger the reset function at the bottom level, which is achieved by triggering the private pool's admin contract (the admin contract corresponds to the address of the owner parameter of the private pool)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"    \n  function reset(\n    address operator,\n    uint256 newLpFeeRate,\n    uint256 newI,\n    uint256 newK,\n    uint256 baseOutAmount,\n    uint256 quoteOutAmount,\n    uint256 minBaseReserve,\n    uint256 minQuoteReserve\n  ) external; \n")),Object(o.b)("p",null,"If the owner trigger directly, operator can be empty. Other parameters descriptions are the same as above."),Object(o.b)("h2",{id:"for-developers"},"For Developers"),Object(o.b)("p",null,"Developers can fetch metadata from ",Object(o.b)("inlineCode",{parentName:"p"},"DPPFactory")," && ",Object(o.b)("inlineCode",{parentName:"p"},"DVMFactory"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"\n  function getDODOPool(\n    address baseToken,\n    address quoteToken\n  ) external view returns (address[] memory pools)\n\n  function getDODOPoolBidirection(\n    address token0,\n    address token1\n  ) external view returns (address[] memory baseToken0Pool, address[] memory baseToken1Pool)\n\n  function getDODOPoolByUser(\n    address user\n  ) external view returns (address[] memory pools)\n\n")),Object(o.b)("p",null,"For ",Object(o.b)("inlineCode",{parentName:"p"},"getDODOPool"),", user need to distinguish base and quote as parameters in order, while for ",Object(o.b)("inlineCode",{parentName:"p"},"getDODOPoolBidirection"),", no need to distinguish base or quote token. And function will return two pool lists, which correspond to the token0 as base, the other is token1 as base. For ",Object(o.b)("inlineCode",{parentName:"p"},"getDODOPoolByUser")," will return the pool list under the user."),Object(o.b)("p",null,"At the same time, we provide real-time monitoring of DODO platform's creation and removal events, which makes it easier to maintain the latest pool lists under the platform in real time"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"\n  event NewDVM(\n      address baseToken,\n      address quoteToken,\n      address creator,\n      address dvm\n  );\n\n  event RemoveDVM(address dvm);\n\n  event NewDPP(\n      address baseToken,\n      address quoteToken,\n      address creator,\n      address dpp\n  );\n\n  event RemoveDPP(address dpp);\n")),Object(o.b)("p",null,"ps:  ",Object(o.b)("inlineCode",{parentName:"p"},"NewDVM")," and ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveDVM")," are events from ",Object(o.b)("inlineCode",{parentName:"p"},"DVMFactory"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"NewDPP")," and ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveDPP")," are events from ",Object(o.b)("inlineCode",{parentName:"p"},"DPPFactory"),"."))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);