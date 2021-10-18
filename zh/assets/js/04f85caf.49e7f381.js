(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=O(e,["components","mdxType","originalType","parentName"]),o=p(a),d=r,m=o["".concat(l,".").concat(d)]||o[d]||u[d]||b;return a?n.a.createElement(m,c(c({ref:t},i),{},{components:a})):n.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var O in t)hasOwnProperty.call(t,O)&&(c[O]=t[O]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return O})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),b=(a(0),a(114)),l={id:"tradeApi",title:"DODO \u4ea4\u6613 API",sidebar_label:"DODO Trade API"},c={unversionedId:"tradeApi",id:"tradeApi",isDocsHomePage:!1,title:"DODO \u4ea4\u6613 API",description:"\u6ce8\uff1aDODO-API \u8ba1\u5212\u4e8e2021\u5e7410\u670831\u65e5\u524d\uff0c\u8fc1\u79fb\u81f3\u65b0\u57df\u540dhttps://route-api.dodoex.io\uff0c\u63d0\u4f9b\u670d\u52a1\u3002\u8bf7\u4f7f\u7528\u65e7\u57df\u540d\u7684\u7528\u6237\u8fdb\u884c\u57df\u540d\u66ff\u6362\u5de5\u4f5c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tradeApi.md",slug:"/tradeApi",permalink:"/docs/zh/docs/tradeApi",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/tradeApi.md",version:"current",sidebar_label:"DODO Trade API",sidebar:"someSidebar",previous:{title:"DODO \u4f17\u7b79\u5efa\u6c60\u767d\u540d\u5355\u914d\u7f6e",permalink:"/docs/zh/docs/cpwl"},next:{title:"Dashbord\u7edf\u8ba1\u53e3\u5f84\u8bf4\u660e",permalink:"/docs/zh/docs/businessDataDashbord"}},O=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",children:[{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]}]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"JSON \u793a\u4f8b",id:"json-\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",id:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e",children:[]}]},{value:"\u4e0e\u5408\u7ea6\u96c6\u6210",id:"\u4e0e\u5408\u7ea6\u96c6\u6210",children:[]},{value:"DODO \u81ea\u5efa\u8def\u7531\u96c6\u6210\u534f\u8bae\u5217\u8868",id:"dodo-\u81ea\u5efa\u8def\u7531\u96c6\u6210\u534f\u8bae\u5217\u8868",children:[{value:"ETH",id:"eth",children:[]},{value:"BSC",id:"bsc",children:[]},{value:"Arbitrum",id:"arbitrum",children:[]},{value:"Polygon",id:"polygon",children:[]},{value:"Heco",id:"heco",children:[]},{value:"OEC",id:"oec",children:[]}]}],i={toc:O};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"\u6ce8\uff1aDODO-API \u8ba1\u5212\u4e8e2021\u5e7410\u670831\u65e5\u524d\uff0c\u8fc1\u79fb\u81f3\u65b0\u57df\u540d",Object(b.b)("a",{parentName:"em",href:"https://route-api.dodoex.io%EF%BC%8C%E6%8F%90%E4%BE%9B%E6%9C%8D%E5%8A%A1%E3%80%82%E8%AF%B7%E4%BD%BF%E7%94%A8%E6%97%A7%E5%9F%9F%E5%90%8D%E7%9A%84%E7%94%A8%E6%88%B7%E8%BF%9B%E8%A1%8C%E5%9F%9F%E5%90%8D%E6%9B%BF%E6%8D%A2%E5%B7%A5%E4%BD%9C"},"https://route-api.dodoex.io\uff0c\u63d0\u4f9b\u670d\u52a1\u3002\u8bf7\u4f7f\u7528\u65e7\u57df\u540d\u7684\u7528\u6237\u8fdb\u884c\u57df\u540d\u66ff\u6362\u5de5\u4f5c"))),Object(b.b)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(b.b)("p",null,"DODO Trade API \u5f53\u524d\u53ef\u63d0\u4f9b Ethereum\u3001BSC\u3001HECO\u3001OEC\u3001Polygon\u3001Arbitrum One \u4e94\u4e2a\u7f51\u7edc\u4e0b\u4efb\u610f\u5e01\u4e92\u6362\u7684\u5b9e\u65f6\u62a5\u4ef7\u4ee5\u53ca\u53ef\u76f4\u63a5\u4f7f\u7528\u7684\u4e0e\u5408\u7ea6\u4ea4\u4e92ABI\u6570\u636e\u3002\u5f00\u53d1\u8005\u4ec5\u9700\u6309\u7167\u63a5\u53e3\u89c4\u8303\uff0c\u96c6\u6210\u6211\u4eec\u7684API\uff0c\u5373\u53ef\u5feb\u901f\u5b9e\u73b0DEX\u6700\u91cd\u8981\u7684\u4ea4\u6613\u529f\u80fd\u3002DODO Trade API \u80cc\u540e\u96c6\u6210\u4e86DODOV1\u3001DODOV2\u3001\u4e13\u4e1a\u505a\u5e02\u5546\u30011inch API\u30010x API\u3001ParaSwap API \u4ee5\u53caDODO\u81ea\u5efa\u7684\u805a\u5408\u7b97\u6cd5 \u7b49\u591a\u6e90\u5b9e\u65f6\u7684\u62a5\u4ef7\u4fe1\u606f\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u591a\u6e90\u4e2d\u6700\u4f18\u62a5\u4ef7\uff0c\u4ee5\u786e\u4fdd DODO Trade API \u59cb\u7ec8\u5177\u6709\u8f83\u5f3a\u7684\u7ade\u4e89\u529b\u3002"),Object(b.b)("p",null,"\u4ee5\u4e0b\u5217\u4e3e\u5f53\u524dAPI\u4f7f\u7528\u7684\u8be2\u4ef7\u6e90\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Ethereum\uff1a")," DODOV1\u3001DODOV2\u30011inch API\u30010x API\u3001ParaSwap API\u3001OneBit\u505a\u5e02\u5546\u3001DODO\u81ea\u5efa\u8def\u7531")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"BSC\uff1a")," DODOV1\u3001DODOV2\u30011inch API\u30010x API\u3001ParaSwap API\u3001Wootrade\u505a\u5e02\u5546\u3001DODO\u81ea\u5efa\u8def\u7531")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"HECO\uff1a")," DODOV1\u3001DODOV2\u3001DODO\u81ea\u5efa\u8def\u7531")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Polygon\uff1a")," DODOV1\u3001DODOV2\u30010x API\u3001ParaSwap API\u3001Wootrade\u505a\u5e02\u5546\u3001DODO\u81ea\u5efa\u8def\u7531")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Arbitrum One:")," DODOV1, DODOV2, 1inch API\u3001DODO\u81ea\u5efa\u8def\u7531")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"OEC\uff1a")," DODOV1\uff0cDODOV2\uff0cDODO\u81ea\u5efa\u8def\u7531"))),Object(b.b)("h2",{id:"url"},"URL"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://route-api.dodoex.io/dodoapi/getdodoroute"},"https://route-api.dodoex.io/dodoapi/getdodoroute")),Object(b.b)("h2",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),Object(b.b)("h3",{id:"\u8bf7\u6c42\u65b9\u6cd5"},"\u8bf7\u6c42\u65b9\u6cd5"),Object(b.b)("p",null,"GET"),Object(b.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"fromTokenAddress"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u51fa\u552e\u7684\u4ee3\u5e01\u5408\u7ea6\u5730\u5740 \u5176\u4e2d",Object(b.b)("em",{parentName:"td"},"ETH(BNB or Matic) \u4e3a 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"fromTokenDecimals"),Object(b.b)("td",{parentName:"tr",align:null},"integer"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u51fa\u552e\u7684\u4ee3\u5e01\u7cbe\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"toTokenAddress"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u8d2d\u4e70\u7684\u4ee3\u5e01\u5408\u7ea6\u5730\u5740 \u5176\u4e2d",Object(b.b)("em",{parentName:"td"},"ETH(BNB or Matic) \u4e3a 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"toTokenDecimals"),Object(b.b)("td",{parentName:"tr",align:null},"integer"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u8d2d\u4e70\u7684\u4ee3\u5e01\u7cbe\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"fromAmount"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u51fa\u552e\u7684\u4ee3\u5e01\u6570\u91cf  \u6ce8\u610f\uff1a\u9700\u8981\u4e58\u4e0a\u4ee3\u5e01\u7684\u7cbe\u5ea6\uff0c\u4e3e\u4f8b 1ETH =  10**18")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"slippage"),Object(b.b)("td",{parentName:"tr",align:null},"integer"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  0 - 100   ",Object(b.b)("em",{parentName:"td"},"\u5355\u4f4d\u4e3a\uff1a%"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"userAddr"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u53d1\u8d77\u4ea4\u6613\u7684\u7528\u6237\u5730\u5740")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"chainId"),Object(b.b)("td",{parentName:"tr",align:null},"integer"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  1 \u4ee3\u8868\u4ee5\u592a\u4e3b\u7f51, 56 \u4ee3\u8868 BSC, 66 \u4ee3\u8868 OEC, 128 \u4ee3\u8868 Heco, 137 \u4ee3\u8868 Polygon, 42161 \u4ee3\u8868 Arbitrum One")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"rpc"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"(\u5fc5\u987b)  \u81ea\u6709\u8282\u70b9\u7684rpc\u5730\u5740\uff0c\u4ee5\u4fdd\u969c\u5b9e\u65f6\u7684\u8282\u70b9\u8be2\u4ef7\u901f\u5ea6\u4e0e\u7a33\u5b9a\u6027")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"deadLine"),Object(b.b)("td",{parentName:"tr",align:null},"integer"),Object(b.b)("td",{parentName:"tr",align:null},"(\u53ef\u9009)  \u4ea4\u6613\u8fc7\u671f\u7684\u533a\u5757\u65f6\u95f4 ",Object(b.b)("em",{parentName:"td"},"\u5355\u4f4d\u4e3a\uff1a\u79d2"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"source"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},'(\u53ef\u9009)  \u82e5\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4ece\u5168\u90e8\u6e90\u4e2d\u8be2\u4ef7\uff0c \u82e5\u8bbe\u7f6e source = "dodo"\uff0c\u4ee3\u8868\u4ec5\u83b7\u53d6DODOV1\u3001DODOV2 \u62a5\u4ef7')))),Object(b.b)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),Object(b.b)("h3",{id:"json-\u793a\u4f8b"},"JSON \u793a\u4f8b"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'{\n    "status": 200,\n    "data": {\n        "resAmount": 4131.964781,\n        "resPricePerToToken": 0.24201566131747518,\n        "resPricePerFromToken": 4.131964,\n        "priceImpact": 0,\n        "useSource": "0x",\n        "targetDecimals": 6,\n        "targetApproveAddr": "0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149",\n        "to": "0xa356867fDCEa8e71AEaF87805808803806231FdC",\n        "data": "",\n        "resCostGas": 0\n    }\n}\n\n')),Object(b.b)("h3",{id:"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"},"\u8fd4\u56de\u53c2\u6570\u8bf4\u660e"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"resAmount"),Object(b.b)("td",{parentName:"tr",align:null},"\u8be2\u4ef7\u540e\u5f97\u5230\u7684\u4ee3\u5e01\u6570\u91cf\uff08\u5e26\u6709\u5c0f\u6570\u70b9\uff0c\u4e0d\u5305\u62ec\u4ee3\u5e01\u7684\u7cbe\u5ea6\uff09")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"resPricePerToToken"),Object(b.b)("td",{parentName:"tr",align:null},"\u51fa\u552e\u4ee3\u5e01/\u8d2d\u4e70\u4ee3\u5e01 \u6570\u91cf\u7684\u6bd4\u4f8b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"resPricePerFromToken"),Object(b.b)("td",{parentName:"tr",align:null},"\u8d2d\u4e70\u4ee3\u5e01/\u51fa\u552e\u4ee3\u5e01 \u6570\u91cf\u7684\u6bd4\u4f8b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"priceImpact"),Object(b.b)("td",{parentName:"tr",align:null},"\u4ef7\u683c\u504f\u5dee\uff0c\u9700\u8981\u4e58 100 \u4ee5\u8f6c\u4e3a%\u5355\u4f4d\uff0c ",Object(b.b)("strong",{parentName:"td"},"\u6ce8\uff1a\u6b64\u6307\u6807\u4e3a\u53c2\u8003\u9879\uff0c\u82e5\u504f\u9ad8\uff0c\u5927\u6982\u7387\u662f\u56e0\u4e3a\u5f53\u524d\u6700\u4f18\u62a5\u4ef7 \u7ecf\u8fc7\u4e86\u6bd4\u8f83\u6d45\u7684\u6c60\u5b50\uff0c\u6d45\u6c60\u5b50\u7684\u6ed1\u70b9\u5c06\u9020\u6210\u5168\u5c40\u4ef7\u683c\u504f\u5dee\u8f83\u5927"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"targetApproveAddr"),Object(b.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u9700\u8981\u5728\u4ea4\u6613\u524d\uff0c\u5c06\u51fa\u552e\u7684\u4ee3\u5e01\u6388\u6743\u7ed9\u5f53\u524d\u5408\u7ea6\uff08DODOApprove\uff09\uff0c\u5982\u679c\u51fa\u552e\u4ee3\u5e01\u4e3aETH\uff08BNB or HT\uff09\uff0c\u5219\u8be5\u5b57\u6bb5\u4e3a\u7a7a\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u6388\u6743\u5373\u53ef\u76f4\u63a5\u4ea4\u6613")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"to"),Object(b.b)("td",{parentName:"tr",align:null},"\u6267\u884c\u4ea4\u6613\u7684\u76ee\u6807\u5408\u7ea6\u5730\u5740 \uff08DODOV2Proxy or DODORouteProxy\uff09")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"data"),Object(b.b)("td",{parentName:"tr",align:null},"\u6784\u9020\u540e\u7684\u8bf7\u6c42\u5408\u7ea6ABI\u4fe1\u606f\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528")))),Object(b.b)("h2",{id:"\u4e0e\u5408\u7ea6\u96c6\u6210"},"\u4e0e\u5408\u7ea6\u96c6\u6210"),Object(b.b)("p",null,"\u4eceDODO-API\u8fd4\u56de\u7684data\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u53d1\u9001\u5230\u5408\u7ea6\u6267\u884c\u4ee3\u5e01\u4ea4\u6613\u3002\u4f46\u662f\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u81ea\u5df1\u7684\u5408\u7ea6\uff0c\u5c01\u88c5\u4ee5\u53ca\u53d1\u9001data\u6267\u884c\u4ee3\u5e01\u4ea4\u6613\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u7684\u4ee3\u7801\u6837\u4f8b\uff1a",Object(b.b)("a",{parentName:"p",href:"https://github.com/DODOEX/dodo-example/blob/main/contracts/DODOApiEncapsulation.sol"},"DODOApiEncapsulation.sol")),Object(b.b)("h2",{id:"dodo-\u81ea\u5efa\u8def\u7531\u96c6\u6210\u534f\u8bae\u5217\u8868"},"DODO \u81ea\u5efa\u8def\u7531\u96c6\u6210\u534f\u8bae\u5217\u8868"),Object(b.b)("h3",{id:"eth"},"ETH"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V1"),Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"Uniswap V2"),Object(b.b)("li",{parentName:"ul"},"Uniswap V3"),Object(b.b)("li",{parentName:"ul"},"Curve V1 (3Pool)"),Object(b.b)("li",{parentName:"ul"},"SushiSwap"),Object(b.b)("li",{parentName:"ul"},"ShibaSwap")),Object(b.b)("h3",{id:"bsc"},"BSC"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V1"),Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"Pancake V1"),Object(b.b)("li",{parentName:"ul"},"Pancake V2"),Object(b.b)("li",{parentName:"ul"},"MDEX"),Object(b.b)("li",{parentName:"ul"},"BakerySwap"),Object(b.b)("li",{parentName:"ul"},"Gambit"),Object(b.b)("li",{parentName:"ul"},"Biswap"),Object(b.b)("li",{parentName:"ul"},"ApeSwap")),Object(b.b)("h3",{id:"arbitrum"},"Arbitrum"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V1"),Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"Uniswap V3"),Object(b.b)("li",{parentName:"ul"},"SushiSwap"),Object(b.b)("li",{parentName:"ul"},"Gambit"),Object(b.b)("li",{parentName:"ul"},"Curve V1")),Object(b.b)("h3",{id:"polygon"},"Polygon"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"QuickSwap"),Object(b.b)("li",{parentName:"ul"},"SushiSwap"),Object(b.b)("li",{parentName:"ul"},"Curve V1")),Object(b.b)("h3",{id:"heco"},"Heco"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"MDEX"),Object(b.b)("li",{parentName:"ul"},"BXH"),Object(b.b)("li",{parentName:"ul"},"Pippi"),Object(b.b)("li",{parentName:"ul"},"Mdis")),Object(b.b)("h3",{id:"oec"},"OEC"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"DODO V2"),Object(b.b)("li",{parentName:"ul"},"CherrySwap"),Object(b.b)("li",{parentName:"ul"},"KSwap")))}p.isMDXComponent=!0}}]);