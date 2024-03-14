"use strict";(self.webpackChunkproject_docs=self.webpackChunkproject_docs||[]).push([[887],{4583:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=s(4848),t=s(8453);const o={sidebar_position:6},c="\u67e5\u627e\u5750\u6807",r={id:"ZoneCheckV3/FindPos",title:"\u67e5\u627e\u5750\u6807",description:"findPos",source:"@site/docs/ZoneCheckV3/FindPos.md",sourceDirName:"ZoneCheckV3",slug:"/ZoneCheckV3/FindPos",permalink:"/projects-docs/docs/ZoneCheckV3/FindPos",draft:!1,unlisted:!1,editUrl:"https://github.com/engsr6982/projects-docs/tree/main/docs/ZoneCheckV3/FindPos.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"auto",previous:{title:"\u968f\u673a\u5750\u6807",permalink:"/projects-docs/docs/ZoneCheckV3/RandomAreaPosition"}},d={},l=[];function a(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u67e5\u627e\u5750\u6807",children:"\u67e5\u627e\u5750\u6807"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"findPos"}),"\n\u6839\u636ex,z,dimid\u67e5\u627e\u5b89\u5168\u5750\u6807"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["position: ",(0,i.jsx)(e.code,{children:"object"}),(0,i.jsx)(e.br,{}),"\n","\u5750\u6807"]}),"\n",(0,i.jsxs)(e.li,{children:["findParameters: ",(0,i.jsx)(e.code,{children:"object"}),(0,i.jsx)(e.br,{}),"\n","\u67e5\u627e\u53c2\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:["dangerousBlocks: ",(0,i.jsx)(e.code,{children:"array"}),(0,i.jsx)(e.br,{}),"\n","\u4e0d\u5b89\u5168\u65b9\u5757"]}),"\n",(0,i.jsxs)(e.li,{children:["deviation: ",(0,i.jsx)(e.code,{children:"object"}),(0,i.jsx)(e.br,{}),"\n","\u504f\u79fb\u91cf"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u8fd4\u56de\u503c: ",(0,i.jsx)(e.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u629b\u51fa: \u533a\u5757\u672a\u52a0\u8f7d/C++\u5f02\u5e38"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\u8be6\u89e3:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="position"',children:"{\n    x: 0, // \u8981\u67e5\u627e\u7684\u5750\u6807\n    z: 0,\n    dimid: 0\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="findParameters"',children:"{\n    startingValue: 301, // \u904d\u5386\u5f00\u59cb\u503c\n    endValue: 0, // \u904d\u5386\u7ed3\u675f\u503c\n    stopValue: 10 // \u904d\u5386\u505c\u6b62\u503c\uff08\u904d\u5386\u4f1a\u5728\u8fd9\u4e2a\u503c\u63d0\u524d\u7ed3\u675f\uff09\n},\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="dangerousBlocks"',children:'[\n    "minecraft:lava", // \u5371\u9669\u65b9\u5757\uff0c\u586b\u5199\u6807\u51c6\u540d\n    "minecraft:flowing_lava"\n], \n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="deviation"',children:"{\n    offset1: 1, // \u504f\u79fb\u91cf \uff08\u5bf9\u5e94\u73a9\u5bb6\u817f\u90e8\uff09\n    offset2: 2  // \u504f\u79fb\u91cf \uff08\u5bf9\u5e94\u73a9\u5bb6\u5934\u90e8\uff09\n}\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="\u8c03\u7528\u793a\u4f8b"',children:'const fp = ll.imports("ZoneCheckV3", "findPos");\nfp({x:0, z:0, dimid:0},{startingValue:301, endValue:0, stopValue:10},["minecraft:lava","minecraft:flowing_lava"],{"offset1":1, "offset2": 2});\n'})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="\u8fd4\u56de\u503c"',children:"{\n    status: 0 | 1, // \u72b6\u6001\uff08\u662f\u5426\u67e5\u627e\u6210\u529f\uff09\n    x: int,\n    y: int, // \u5b89\u5168\u5750\u6807\n    z: int,\n    dimid: int\n}\n"})})]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\u8fd9\u662f\u539f\u7406\u56fe(\u5b57\u4e11\u89c1\u8c05)\n",(0,i.jsx)(e.img,{alt:"note",src:s(1601).A+"",width:"1516",height:"1942"})]})})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},1601:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/findPos-6fc99b7c372d034a4e325df672bc51a6.jpg"},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>r});var i=s(6540);const t={},o=i.createContext(t);function c(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);