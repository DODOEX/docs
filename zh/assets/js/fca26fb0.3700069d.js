(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(104)),s={id:"contractUseGuide",title:"\u5408\u7ea6\u7528\u6237\u6307\u5357",sidebar_label:"\u5408\u7ea6\u7528\u6237\u6307\u5357"},u={unversionedId:"contractUseGuide",id:"contractUseGuide",isDocsHomePage:!1,title:"\u5408\u7ea6\u7528\u6237\u6307\u5357",description:"\u5bf9\u4e8e\u4ea4\u6613\u8005",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/contractUseGuide.md",slug:"/contractUseGuide",permalink:"/docs/zh/docs/contractUseGuide",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/contractUseGuide.md",version:"current",sidebar_label:"\u5408\u7ea6\u7528\u6237\u6307\u5357",sidebar:"someSidebar",previous:{title:"\u667a\u80fd\u5408\u7ea6\u6846\u67b6",permalink:"/docs/zh/docs/framework"},next:{title:"\u95ea\u7535\u4ea4\u6362",permalink:"/docs/zh/docs/flashSwap"}},i=[{value:"\u5bf9\u4e8e\u4ea4\u6613\u8005",id:"\u5bf9\u4e8e\u4ea4\u6613\u8005",children:[]},{value:"\u5bf9\u4e8e\u505a\u5e02\u5546",id:"\u5bf9\u4e8e\u505a\u5e02\u5546",children:[{value:"\u516c\u5f00\u6c60",id:"\u516c\u5f00\u6c60",children:[]},{value:"\u79c1\u6709\u6c60",id:"\u79c1\u6709\u6c60",children:[]}]},{value:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458",id:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458",children:[]}],c={toc:i};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5bf9\u4e8e\u4ea4\u6613\u8005"},"\u5bf9\u4e8e\u4ea4\u6613\u8005"),Object(o.b)("p",null,"DODO V2 \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy"),"\uff0c\u9488\u5bf9\u5e95\u5c42\u7684\u6c60\u5b50\u8fdb\u884c\u5c01\u88c5\uff0c\u53ef\u4ee5\u5728\u4e0a\u5c42\u5b9e\u73b0\u591a\u8df3\u6c60\u5b50\u8fde\u7eed\u4ea4\u6613\u3002\u82e5\u4ea4\u6613\u8005\u6709\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u6c60\u5b50\u4ea4\u6613\u7684\u9700\u6c42\uff0c\u6211\u4eec\u4e5f\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u6c60\u5b50\u8fdb\u884c\u4e86\u7edf\u4e00\u5b9a\u4e49\uff0c\u66b4\u9732\u51fa\u4e24\u4e2a\u51fd\u6570\u4f9b\u4f7f\u7528\uff1a ",Object(o.b)("inlineCode",{parentName:"p"},"sellBase")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sellQuote")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellBase(\n   address to\n ) external returns (uint256 receiveQuoteAmount);\n")),Object(o.b)("p",null,"sellBase\u53ef\u4ee5\u5b9e\u73b0\u5356\u51fabase token\uff0c\u5f97\u5230quote token\u3002\u8fd9\u4e2a\u51fd\u6570\u9700\u8981\u4ea4\u6613\u8005\u6784\u9020\u4e00\u7b14\u5305\u542b\u4e24\u4e2a\u52a8\u4f5c\u7684\u4ea4\u6613\uff0c\u7b2c\u4e00\u4e2a\u52a8\u4f5c\u662f\u8f6c\u5165\u9700\u8981\u4ea4\u6362\u7684base token\u81f3\u5f53\u524d\u6c60\u5b50\u5408\u7ea6\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u52a8\u4f5c\u662f\u5c06\u4ea4\u6362\u7684\u63a5\u6536\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u89e6\u53d1sellBase\u3002\u7ed3\u675f\u524d\u5efa\u8bae\u4ea4\u6613\u8005\u5bf9",Object(o.b)("inlineCode",{parentName:"p"},"receiveQuoteAmount"),"\u8fdb\u884c\u4f59\u989d\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u4ea4\u6613\u7684\u5b89\u5168\u6267\u884c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellQuote(\n   address to\n ) external returns (uint256 receiveBaseAmount);\n")),Object(o.b)("p",null,"\u540c\u7406\uff0csellQuote\u53ef\u4ee5\u5b9e\u73b0\u5356\u51faquote token\uff0c\u5f97\u5230base token\u3002\u8fd9\u4e2a\u51fd\u6570\u540c\u6837\u9700\u8981\u4ea4\u6613\u8005\u6784\u9020\u4e00\u7b14\u5305\u542b\u4e24\u4e2a\u52a8\u4f5c\u7684\u4ea4\u6613\uff0c\u7b2c\u4e00\u4e2a\u52a8\u4f5c\u662f\u8f6c\u5165\u9700\u8981\u4ea4\u6362\u7684quote token\u81f3\u5f53\u524d\u6c60\u5b50\u5408\u7ea6\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u52a8\u4f5c\u662f\u5c06\u4ea4\u6362\u7684\u63a5\u6536\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u89e6\u53d1sellQuote\u3002\u7ed3\u675f\u524d\u5efa\u8bae\u4ea4\u6613\u8005\u5bf9",Object(o.b)("inlineCode",{parentName:"p"},"receiveBaseAmount"),"\u8fdb\u884c\u4f59\u989d\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u4ea4\u6613\u7684\u5b89\u5168\u6267\u884c"),Object(o.b)("p",null,"DODO V2 \u540c\u6837\u4f1a\u63d0\u4f9b\u4ee5\u4e0a\u4e24\u4e2a\u51fd\u6570\u7684\u7ed3\u679c\u9884\u89c8\uff0c\u9884\u89c8\u51fd\u6570\u53ef\u4ee5\u5728\u4e0d\u53d1\u9001\u4ea4\u6613\u7684\u60c5\u51b5\u4e0b\u6267\u884c\uff0c\u5e2e\u52a9\u4ea4\u6613\u8005\u9884\u4f30\u4ef7\u683c\uff0c\u4ee5\u8282\u7701 gas \u8d39\u3002\u6ce8\uff1a\u4f20\u5165\u7684trader\u4e3a\u4ea4\u6613\u8005\u516c\u94a5\u5730\u5740"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function querySellBase(\n   address trader, \n   uint256 payBaseAmount\n ) external view  returns (uint256 receiveQuoteAmount,uint256 mtFee);\n\n function querySellQuote(\n   address trader, \n   uint256 payQuoteAmount\n ) external view  returns (uint256 receiveBaseAmount,uint256 mtFee);\n")),Object(o.b)("p",null,"\u4e0b\u9762\u4e00\u90e8\u5206\u6211\u4eec\u4f1a\u7740\u91cd\u4ecb\u7ecd",Object(o.b)("a",{parentName:"p",href:"./flashSwap"},"\u95ea\u7535\u4ea4\u6362"),"."),Object(o.b)("h2",{id:"\u5bf9\u4e8e\u505a\u5e02\u5546"},"\u5bf9\u4e8e\u505a\u5e02\u5546"),Object(o.b)("p",null,"DODO V2 \u8bbe\u8ba1\u4e86\u4e24\u79cd\u7c7b\u578b\u7684\u6c60\u5b50\uff0c\u5305\u62ec\u516c\u5f00\u6c60\u4ee5\u53ca\u79c1\u6709\u6c60\uff0c\u540c\u6837\u7684 DODO V2 \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy"),"\uff0c\u5c01\u88c5\u4e86\u4e0d\u540c\u7c7b\u578b\u6c60\u5b50\u6d41\u52a8\u6027\u7ba1\u7406\u529f\u80fd\u3002\u4ee5\u4e0b\u662f\u76f4\u63a5\u4e0e\u6c60\u5b50\u5e95\u5c42\u4ea4\u4e92\u7684\u505a\u5e02\u5546\u7ba1\u7406\u65b9\u6cd5\u3002"),Object(o.b)("h3",{id:"\u516c\u5f00\u6c60"},"\u516c\u5f00\u6c60"),Object(o.b)("p",null,"\u516c\u5f00\u6c60\u662f\u4efb\u4f55\u4eba\u5747\u53ef\u53c2\u4e0e\u7684\u4e00\u79cd\u6c60\u5b50\uff0c\u5e76\u4e14\u7531\u4e8eDODO\u7684\u7075\u6d3b\u8bbe\u8ba1\uff0c\u76f8\u540c\u7684\u4ea4\u6613\u5bf9\u53ef\u4ee5\u6709\u4e0d\u540c\u53c2\u6570\u8bbe\u5b9a\u7684\u6c60\u5b50\uff0c\u7528\u6237\u9009\u62e9\u516c\u5f00\u6c60\u53c2\u4e0e\u505a\u5e02\u65f6\uff0c\u6309\u6c60\u5b50\u5f53\u524d\u7684\u6bd4\u4f8b\u5145\u5165",Object(o.b)("inlineCode",{parentName:"p"},"base")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"quote"),"\u8d44\u4ea7\uff0c\u83b7\u5f97\u6c60\u5b50\u94f8\u9020\u7684",Object(o.b)("inlineCode",{parentName:"p"},"shares"),"\u8d44\u4ea7\u989d\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"\u6ce8\u610f\uff1ashares \u4ee3\u8868\u505a\u5e02\u5546\u5728\u8d44\u4ea7\u6c60\u4e2d\u6240\u5360\u4efd\u989d\u3002\u5176\u662f\u4e00\u4e2aERC 20 \u683c\u5f0f\u7684\u4ee3\u5e01\uff0c\u53ef\u4ee5\u81ea\u7531\u4ea4\u6613\u3002\u6bcf\u4e2a\u516c\u5f00\u6c60\u5bf9\u5e94\u4e00\u79cdshares\u3002")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function buyShares(\n   address to\n ) external returns (uint256 shares, uint256 baseInput, uint256 quoteInput)\n")),Object(o.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u53ef\u5b9e\u73b0\u5411\u6c60\u5b50\u6ce8\u5165\u6d41\u52a8\u6027\uff0c\u9700\u8981\u505a\u5e02\u5546\u6784\u9020\u4e00\u7b14\u5305\u542b\u4e24\u4e2a\u64cd\u4f5c\u7684\u4ea4\u6613\uff0c\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662f\u6309\u6c60\u5b50\u5f53\u524d\u7684base\u3001quote\u6bd4\u4f8b\uff0c\u5b58\u4ee3\u5e01\u81f3\u6c60\u5b50\u5408\u7ea6\uff0c\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662f\u5c06shares\u63a5\u6536\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u89e6\u53d1buyShares\u3002\u7ed3\u675f\u524d\u5efa\u8bae\u505a\u5e02\u5546\u5bf9",Object(o.b)("inlineCode",{parentName:"p"},"baseInput"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"quoteInput"),"\u8fd9\u4e24\u4e2a\u5b9e\u9645\u5b58\u5165\u7684\u4ee3\u5e01\u6570\u91cf\u8fdb\u884c\u6570\u91cf\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u4ea4\u6613\u7684\u5b89\u5168\u6267\u884c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"}," function sellShares(\n    uint256 shareAmount,\n    address to,\n    uint256 baseMinAmount,\n    uint256 quoteMinAmount,\n    bytes calldata data,\n    uint256 deadline\n ) external returns (uint256 baseAmount, uint256 quoteAmount)\n")),Object(o.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u53ef\u5b9e\u73b0\u4ece\u6c60\u5b50\u63d0\u53d6\u6d41\u52a8\u6027\uff0c\u505a\u5e02\u5546\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u6c60\u5b50\u5bf9\u5e94\u7684\u51fd\u6570\u6267\u884c\u4ea4\u6613\uff0c\u5176\u4e2d\u4f20\u5165\u7684\u53c2\u6570\u5305\u62ec\u79fb\u9664\u7684shares\u6570\u91cf\u3001\u8d44\u91d1\u63a5\u6536\u5730\u5740\u3001\u4ee5\u53ca\u7528\u4e8e\u6ed1\u70b9\u4fdd\u62a4\u7684baseMinAmount\uff08\u9884\u671f\u6700\u5c0f\u63a5\u6536\u7684base\u6570\u91cf\uff09\uff0cquoteMinAmount\uff08\u9884\u671f\u6700\u5c0f\u63a5\u6536\u7684quote\u6570\u91cf\uff09\uff0cdata\u4e00\u822c\u8bbe\u7f6e\u4e3a\u7a7a\u5373\u53ef\uff0c\u82e5\u4e0d\u4e3a\u7a7a\uff0c\u4f1a\u5728\u51fd\u6570\u6267\u884c\u7684\u6700\u540e\uff0c\u6267\u884c\u5916\u90e8\u5408\u7ea6\u8c03\u7528\uff0c\u4ee5\u5b9e\u73b0\u8bf8\u5982WETH\u8f6c\u4e3aETH\u7b49\u989d\u5916\u529f\u80fd\uff0c\u6700\u540e\u7684deadline\u4e3a\u4ea4\u6613\u53d1\u51fa\u540e\u7684\u6709\u6548\u65f6\u95f4\uff0c\u8d85\u65f6\u81ea\u52a8\u5931\u8d25\uff0c\u4ee5\u4fdd\u62a4\u4ea4\u6613\u7684\u5b89\u5168\u6267\u884c"),Object(o.b)("h3",{id:"\u79c1\u6709\u6c60"},"\u79c1\u6709\u6c60"),Object(o.b)("p",null,"\u79c1\u6709\u6c60\u5b8c\u5168\u7531\u5355\u4e00\u7684\u505a\u5e02\u5546\uff08\u505a\u5e02\u673a\u6784\u6216\u8005\u9879\u76ee\u65b9\u7b49\uff09\u8fdb\u884c\u505a\u5e02\uff0c\u62e5\u6709\u52a8\u6001\u4fee\u6539\u6c60\u5b50\u53c2\u6570\uff0c\u81ea\u7531\u63a7\u5236\u8d44\u91d1\u51fa\u5165\u7684\u6743\u9650\uff0c\u4e3a\u5b9e\u73b0\u94fe\u4e0a\u505a\u5e02\u7b56\u7565\u63d0\u4f9b\u4e86\u8db3\u591f\u7684\u7075\u6d3b\u5ea6\u3002\u79c1\u6709\u6c60\u5b58\u5728\u7ba1\u7406\u5458\uff08owner\uff09\u8eab\u4efd\uff0c\u540c\u65f6\u7ba1\u7406\u5458\u53ef\u4ee5\u8bbe\u5b9a\u64cd\u4f5c\u5458\uff08operator\uff09\uff0c\u4ee5\u5b9e\u73b0\u79c1\u6709\u6c60\u5b50\u7684\u6743\u9650\u63a7\u5236\u3002"),Object(o.b)("p",null,"\u79c1\u6709\u6c60\u7684\u64cd\u4f5c\u5458\uff08operator\uff09\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"p"},"DODOV2Proxy"),"\u4e2d\u7684\u91cd\u7f6e\u51fd\u6570\u6765\u5b9e\u73b0\u505a\u5e02"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"  \n  function resetDODOPrivatePool(\n    address dppAddress,\n    uint256[] memory paramList,  //0 - newLpFeeRate, 1 - newI, 2 - newK\n    uint256[] memory amountList, //0 - baseInAmount, 1 - quoteInAmount, 2 - baseOutAmount, 3- quoteOutAmount\n    uint8 flag, // 0 - ERC20, 1 - baseInETH, 2 - quoteInETH, 3 - baseOutETH, 4 - quoteOutETH\n    uint256 minBaseReserve,\n    uint256 minQuoteReserve,\n    uint256 deadLine\n  ) external;\n")),Object(o.b)("p",null,"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"dppAddress\uff1a\u79c1\u6709\u6c60\u7684\u5408\u7ea6\u5730\u5740"),Object(o.b)("li",{parentName:"ul"},"paramList\uff1a\u6309\u5e8f\u4f20\u2f0a\u65b0\u7684\u624b\u7eed\u8d39\u7387\uff0c\u4ef7\u683c\uff08base/quote\uff0c\u5355\u4f4d\u662f 18 - base decimals + quote decimals\uff09\uff0c\u65b0\u7684\u66f2\u7ebf\u6ce2\u52a8\u7cfb\u6570\uff080 \u4ee3\u8868\u6052\u5b9a\u4ef7\u683c\u5356\u5e01\uff0c10**18 \u4ee3\u8868\u7c7bUniswap\u7684\u4ef7\u683c\u66f2\u7ebf\u659c\u7387\uff09"),Object(o.b)("li",{parentName:"ul"},"amountList: \u6309\u5e8f\u4f20\u2f0abaseInAmount\u3001quoteInAmount\u3001baseOutAmount\u3001 quoteOutAmount\uff0c\u53ef\u4ee5\u4e3a0"),Object(o.b)("li",{parentName:"ul"},"flag: \u4e3b\u8981\u2f64\u4e8eETH\u4e0eWETH\u7684\u4e92\u8f6c\u6807\u8bc6, 0 \u4ee3\u8868\u4e0d\u9700\u8981\u8f6c\u6362\uff0c 1\u4ee3\u8868\u6dfb\u52a0\u7684base\u4e3aeth\uff0c 2\u4ee3\u8868\u6dfb\u52a0\u7684quote\u4e3aeth\uff0c3 \u4ee3\u8868\u79fb\u9664\u7684base\u8f6c\u4e3aeth\uff0c 4 \u4ee3\u8868\u79fb\u9664\u7684quote\u8f6c\u4e3aeth"),Object(o.b)("li",{parentName:"ul"},"minBaseReserve && minQuoteReserve: \u5f53\u505a\u5e02\u5546\u53d1\u8d77\u4ea4\u6613\uff0c\u4fee\u6539\u6c60\u2f26\u53c2\u6570\u65f6\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u6c60\u2f26\u7684\u4ef7\u683c\u6539\u53d8\uff0c\u8fd9\u65f6\u5019\u673a\u5668\u2f08\u53ef\u80fd\u4f1a\u62a2\u8dd1\u5957\u5229\uff0c\u56e0\u6b64\u8fd9\u4e24\u4e2a\u53c2\u6570\u8bbe\u5b9a\u540e\uff0c\u5f53\u6267\u2f8f\u65f6\u6c60\u2f26\u73b0\u5b58\u7684base\uff0cquote\u7684\u6570\u91cf\u2f29 \u4e8e\u4f20\u2f0a\u7684\u503c\uff0c\u8be5\u4ea4\u6613\u4f1a\u5931\u8d25\u3002\u8d77\u5230\u4fdd\u62a4\u7684\u673a\u5236\uff0c\u5efa\u8bae\u6bcf\u7b14\u4ea4\u6613\u5747\u8bbe\u5b9a"),Object(o.b)("li",{parentName:"ul"},"deadline: \u4ea4\u6613\u65f6\u6548\u4fdd\u62a4\uff0c\u8d85\u65f6\u540e\u76f4\u63a5\u5931\u8d25")),Object(o.b)("p",null,"\u5e73\u53f0\u540c\u6837\u63d0\u4f9b\u4e86\u79c1\u6709\u6c60\u7684\u7ba1\u7406\u5458\uff08owner\uff09\u5e95\u5c42\u8c03\u7528\u91cd\u7f6e\u51fd\u6570\u7684\u65b9\u6cd5\uff0c\u5373\u901a\u8fc7\u89e6\u53d1\u79c1\u6709\u6c60\u7684\u7ba1\u7406\u5408\u7ea6\u5b9e\u73b0\uff08\u7ba1\u7406\u5408\u7ea6\u5bf9\u5e94\u79c1\u6709\u6c60\u4e2downer\u53c2\u6570\u7684\u5730\u5740\uff09"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"    \n  function reset(\n    address operator,\n    uint256 newLpFeeRate,\n    uint256 newI,\n    uint256 newK,\n    uint256 baseOutAmount,\n    uint256 quoteOutAmount,\n    uint256 minBaseReserve,\n    uint256 minQuoteReserve\n  ) external; \n")),Object(o.b)("p",null,"\u5176\u4e2doperator\u4e3a\u64cd\u4f5c\u5458\u5730\u5740\uff0c\u82e5\u7ba1\u7406\u5458\u76f4\u63a5\u8c03\u7528\uff0c\u6b64\u5904\u53ef\u4ee5\u4e3a\u7a7a\u3002\u5176\u4ed6\u53c2\u6570\u8bf4\u660e\u540c\u4e0a"),Object(o.b)("h2",{id:"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458"},"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458"),Object(o.b)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4ece\u5de5\u5382\u5408\u7ea6\uff08",Object(o.b)("inlineCode",{parentName:"p"},"DPPFactory")," && ",Object(o.b)("inlineCode",{parentName:"p"},"DVMFactory")," && ",Object(o.b)("inlineCode",{parentName:"p"},"DSPFactory")," \u9700\u88ab\u5206\u522b\u8c03\u7528\uff09\u4e2d\u83b7\u53d6\u5e73\u53f0\u5df2\u7ecf\u521b\u5efa\u7684\u6240\u6709\u6c60\u5b50\u5730\u5740\uff0c\u4ee5\u5b9e\u73b0\u68c0\u7d22\u5c55\u793a\u7b49\u529f\u80fd"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"\n  function getDODOPool(\n    address baseToken,\n    address quoteToken\n  ) external view returns (address[] memory pools)\n\n  function getDODOPoolBidirection(\n    address token0,\n    address token1\n  ) external view returns (address[] memory baseToken0Pool, address[] memory baseToken1Pool)\n\n  function getDODOPoolByUser(\n    address user\n  ) external view returns (address[] memory pools)\n\n")),Object(o.b)("p",null,"getDODOPool \u4e0e getDODOPoolBidirection \u7684\u533a\u522b\u662f\u524d\u8005\u9700\u8981\u533a\u5206\u51fabase\u3001quote\u6309\u5e8f\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u800c\u540e\u8005\u4e0d\u9700\u8981\u533a\u5206base\u3001quote\uff0c\u68c0\u7d22\u51fa\u7684\u7ed3\u679c\u5305\u62ec\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u5bf9\u5e94token0\u4e3abase\u7684\u6c60\u5b50\u5217\u8868\uff0c\u4ee5\u53catoken1\u4e3abase\u7684\u6c60\u5b50\u5217\u8868\u3002\u6700\u540e\u4e00\u4e2a\u68c0\u7d22\u51fd\u6570\u4ee5\u521b\u5efa\u8005\u5730\u5740\u4f5c\u4e3a\u53c2\u6570\uff0c\u83b7\u53d6\u5176\u8d26\u6237\u4e0b\u521b\u5efa\u7684\u6c60\u5b50\u5217\u8868"),Object(o.b)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5b9e\u65f6\u76d1\u542cDODO\u5e73\u53f0\u521b\u5efa\u4e0e\u79fb\u9664\u6c60\u5b50\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5b9e\u65f6\u7ef4\u62a4\u5e73\u53f0\u6700\u65b0\u7684\u6c60\u5b50\u5217\u8868"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"\n  event NewDVM(\n      address baseToken,\n      address quoteToken,\n      address creator,\n      address dvm\n  );\n\n  event RemoveDVM(address dvm);\n\n  event NewDPP(\n      address baseToken,\n      address quoteToken,\n      address creator,\n      address dpp\n  );\n\n  event RemoveDPP(address dpp);\n\n  event NewDSP(\n      address baseToken,\n      address quoteToken,\n      address creator,\n      address dsp\n  );\n\n  event RemoveDSP(address dsp);\n")),Object(o.b)("p",null,"\u5176\u4e2d",Object(o.b)("inlineCode",{parentName:"p"},"NewDVM"),"\u4e0e",Object(o.b)("inlineCode",{parentName:"p"},"RemoveDVM"),"\u662f",Object(o.b)("inlineCode",{parentName:"p"},"DVMFactory"),"\u4e2d\u7684\u4e8b\u4ef6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"NewDPP")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveDPP")," \u662f ",Object(o.b)("inlineCode",{parentName:"p"},"DPPFactory"),"\u4e2d\u7684\u4e8b\u4ef6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"NewDSP")," \u4e0e ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveDSP")," \u662f ",Object(o.b)("inlineCode",{parentName:"p"},"DSPFactory"),"\u4e2d\u7684\u4e8b\u4ef6"))}l.isMDXComponent=!0},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||o;return t?r.a.createElement(m,u(u({ref:n},c),{},{components:t})):r.a.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<o;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);