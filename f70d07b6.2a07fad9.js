(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(102)),i={id:"contractUseGuide",title:"User Guide",sidebar_label:"User Guide"},c={unversionedId:"contractUseGuide",id:"version-1.0.0/contractUseGuide",isDocsHomePage:!1,title:"User Guide",description:"For traders",source:"@site/versioned_docs/version-1.0.0/contractUseGuide.md",slug:"/contractUseGuide",permalink:"/docs/docs/contractUseGuide",editUrl:"https://github.com/DODOEX/docs/edit/master/versioned_docs/version-1.0.0/contractUseGuide.md",version:"1.0.0",sidebar_label:"User Guide",sidebar:"version-1.0.0/someSidebar",previous:{title:"Smart Contract Framework",permalink:"/docs/docs/framework"},next:{title:"Flash Swap",permalink:"/docs/docs/flashSwap"}},s=[{value:"For traders",id:"for-traders",children:[]},{value:"For Liquidity Providers (LPs)",id:"for-liquidity-providers-lps",children:[]},{value:"For Developers",id:"for-developers",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"for-traders"},"For traders"),Object(o.b)("p",null,"There are only two functions that are relevant to traders in the entire contract: ",Object(o.b)("inlineCode",{parentName:"p"},"buyBaseToken")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sellBaseToken")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function buyBaseToken(\n    uint256 amount,\n    uint256 maxPayQuote,\n    bytes calldata data\n) external returns (uint256 payQuote);\n")),Object(o.b)("p",null,"This function buys an exact ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of base tokens. If the number of quote tokens needed to pay for these base tokens is larger than ",Object(o.b)("inlineCode",{parentName:"p"},"maxPayQuote"),", the transaction will be reverted. If ",Object(o.b)("inlineCode",{parentName:"p"},"data")," is not null\uff0cflash swap will be triggered."),Object(o.b)("p",null,"The return value ",Object(o.b)("inlineCode",{parentName:"p"},"payQuote")," is the exact amount of quote tokens you will pay."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function sellBaseToken(\n    uint256 amount,\n    uint256 minReceiveQuote,\n    bytes calldata data\n) external returns (uint256 receiveQuote);\n")),Object(o.b)("p",null,"This function sells an exact ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of base tokens. If the the number of quote tokens to be received is smaller than ",Object(o.b)("inlineCode",{parentName:"p"},"minReceiveQuote"),", the transaction will be reverted. If ",Object(o.b)("inlineCode",{parentName:"p"},"data")," is not null\uff0cflash swap will be triggered."),Object(o.b)("p",null,"The return value ",Object(o.b)("inlineCode",{parentName:"p"},"receiveQuote")," is the exact amount of quote tokens you will receive."),Object(o.b)("p",null,"DODO also provides a view version of these two functions. View functions can be executed without sending transactions and they help users estimate prices bore spending gas."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function querySellBaseToken(\n  uint256 amount\n) external view returns (uint256 receiveQuote);\n\nfunction queryBuyBaseToken(\n  uint256 amount\n) external view returns (uint256 payQuote);\n")),Object(o.b)("p",null,"In the next section, we will go into more details about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./flashSwap"}),"flash swap"),"."),Object(o.b)("h2",{id:"for-liquidity-providers-lps"},"For Liquidity Providers (LPs)"),Object(o.b)("p",null,"For liquidity providers (LPs), the most important functions are deposit and withdrawal. We provide a set of functions to help LPs manage their assets in a flexible and efficient manner."),Object(o.b)("p",null,'One of the biggest advantages of the PMM algorithm is that it can manage base or quote token assets separately. That is why the functions below all have two versions, one with the suffix "Base" and another with the suffix "Quote", to manage base and quote assets respectively. These two versions have the same input and output values.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function depositBase(\n    uint256 amount\n  ) external returns (uint256 capital)\n\n  function depositQuote(\n    uint256 amount\n  ) external returns (uint256 capital)\n\n")),Object(o.b)("p",null,"This function deposits an exact ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of assets into the capital pool and returns the ",Object(o.b)("inlineCode",{parentName:"p"},"capital")," amount issued for you."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Capital represents the LP's share of the capital pool. Capital is an ERC20 token and can be freely traded. Each DODO has two kinds of capital, which represent the share of base token and quote token capital pool respectively."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getLpBaseBalance(address lp) public view returns (uint256 lpBalance)\n\n  function getLpQuoteBalance(address lp) public view returns (uint256 lpBalance)\n\n")),Object(o.b)("p",null,"Query the pool balance based on the address of the LP. The return value ",Object(o.b)("inlineCode",{parentName:"p"},"lpBalance")," represents actual base or quote tokens, not capital tokens."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function withdrawBase(\n    uint256 amount\n  ) external returns (uint256 receive)\n\n  function withdrawQuote(\n    uint256 amount\n  ) external returns (uint256 receive)\n\n")),Object(o.b)("p",null,"This function attempts to withdraw an ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of assets from the capital pool. Since there may be a withdrawal fee, the function returns the exact amount of tokens received by the message sender."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function withdrawAllBase() external returns (uint256 receive)\n\n  function withdrawAllQuote() external returns (uint256 receive)\n\n")),Object(o.b)("p",null,"Since the size of the capital pool is constantly changing (transactions may occur at any time), in order to help LPs to completely withdraw all assets, the above two functions will consume all the capital of the message sender and withdraw the corresponding assets. Finally, the exact amount of asset received by the message sender is returned."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getWithdrawQuotePenalty(uint256 amount) public view returns (uint256 penalty)\n\n  function getWithdrawBasePenalty(uint256 amount) public view returns (uint256 penalty)\n\n")),Object(o.b)("p",null,"In some cases, asset withdrawals will be charged a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./coreConcept#withdraw-fee"}),"fee"),". The above two functions provide a view function to query the withdrawal fee. If you submit a request with an ",Object(o.b)("inlineCode",{parentName:"p"},"amount")," of withdrawal, you will be charged for the amount of ",Object(o.b)("inlineCode",{parentName:"p"},"penalty"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The final amount of withdrawal assets received will be ",Object(o.b)("strong",{parentName:"p"},"amount-penalty"),"."))),Object(o.b)("h2",{id:"for-developers"},"For Developers"),Object(o.b)("p",null,"Developers can fetch metadata from DODO Zoo, the entrance part of the DODO framework."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n  function getDODO(\n    address baseToken,\n    address quoteToken\n  ) external view returns (address)\n\n")),Object(o.b)("p",null,"Given ",Object(o.b)("inlineCode",{parentName:"p"},"baseToken")," and ",Object(o.b)("inlineCode",{parentName:"p"},"quoteToken"),", there is only one ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Pair")," registered in ",Object(o.b)("inlineCode",{parentName:"p"},"DODO Zoo")," at the same time."))}u.isMDXComponent=!0}}]);