"use strict";(self.webpackChunkproject_docs=self.webpackChunkproject_docs||[]).push([[547],{5188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>E,default:()=>C,frontMatter:()=>T,metadata:()=>k,toc:()=>P});var s=r(4848),n=r(8453),l=r(6540),i=r(4164),d=r(3104),c=r(6347),o=r(205),a=r(7485),u=r(1682),h=r(9466);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,c.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=j(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[c,a]=b({queryString:r,groupId:s}),[u,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,h.Dv)(r);return[s,(0,l.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),m=(()=>{const e=c??u;return p({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),a(e),x(e)}),[a,x,n]),tabValues:n}}var f=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=c[r].value;s!==n&&(a(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function _(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=m(e);return(0,s.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,s.jsx)(v,{...e,...t}),(0,s.jsx)(_,{...e,...t})]})}function U(e){const t=(0,f.A)();return(0,s.jsx)(y,{...e,children:x(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function w(e){let{children:t,hidden:r,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(I.tabItem,n),hidden:r,children:t})}const T={sidebar_position:1},E="\u9996\u9875",k={id:"LSE-OPTools/README",title:"\u9996\u9875",description:"logo",source:"@site/docs/LSE-OPTools/README.md",sourceDirName:"LSE-OPTools",slug:"/LSE-OPTools/",permalink:"/projects-docs/docs/LSE-OPTools/",draft:!1,unlisted:!1,editUrl:"https://github.com/engsr6982/projects-docs/tree/main/docs/LSE-OPTools/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"OPTools",next:{title:"\u5b89\u88c5/\u66f4\u65b0",permalink:"/projects-docs/docs/LSE-OPTools/Usage/Install"}},S={},P=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u529f\u80fd\u4e00\u89c8\u8868",id:"\u529f\u80fd\u4e00\u89c8\u8868",level:2},{value:"\u547d\u4ee4\u7cfb\u7edf",id:"\u547d\u4ee4\u7cfb\u7edf",level:2}];function V(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u9996\u9875",children:"\u9996\u9875"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"logo",src:r(2050).A+"",width:"1010",height:"568"})}),"\n",(0,s.jsx)(t.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u6700\u4f73\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u6587\u6863",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.strong,{children:["\u9047\u5230\u95ee\u9898\u8bf7\u5728",(0,s.jsx)(t.a,{href:"https://github.com/engsr6982/lse-workspace/issues",children:"Github Issue"}),"\u53cd\u9988\uff01"]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.minebbs.com/resources/op-tools-op-gui.4836/",children:"\u70b9\u6211\u524d\u5f80MIneBBS OPTools"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://qm.qq.com/cgi-bin/qm/qr?k=jmd_S7-T9UGiVp9eiPyHtuIuEApwVIq5&authKey=6c4npR7mamU4DP72JQKTYQAIz12vhRXHE4/U6GCriqjtiQpaa3Gf6Q+sYricFR9y&noverify=0",children:"\u70b9\u6211\u52a0\u5165 \u53cd\u9988/\u804a\u5929\u7fa4"})]})}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd\u4e00\u89c8\u8868",children:"\u529f\u80fd\u4e00\u89c8\u8868"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u529f\u80fd"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u5907\u6ce8"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u5185\u90e8\u51fd\u6570"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u8e22\u51fa\u73a9\u5bb6"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Kick_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u6740\u6b7b\u73a9\u5bb6"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Kill_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u66f4\u6539\u5929\u6c14"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Weather_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u66f4\u6539\u65f6\u95f4"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Time_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u5e7f\u64ad\u6d88\u606f"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Broad_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u8bbe\u7f6eMOTD"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Motd_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u8bbe\u7f6e\u4eba\u6570"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Set_Player_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u73a9\u5bb6\u4f20\u9001"}),(0,s.jsxs)(t.td,{children:["\u652f\u6301",(0,s.jsx)(t.strong,{children:"\u4f20\u9001\u73a9\u5bb6|\u73a9\u5bb6\u4e92\u4f20|\u4f20\u4efb\u610f\u5750\u6807"})]}),(0,s.jsx)(t.td,{children:"Tp_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u6e05\u7406\u6389\u843d\u7269"}),(0,s.jsxs)(t.td,{children:["\u652f\u6301",(0,s.jsx)(t.strong,{children:"Cleaner"})]}),(0,s.jsx)(t.td,{children:"Clear_Item_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u66f4\u6539\u6e38\u620f\u6a21\u5f0f"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"setMode_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u66f4\u6539\u6e38\u620f\u89c4\u5219"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"setRule_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u83b7\u53d6\u9690\u85cf\u65b9\u5757"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"getBlock_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u6267\u884c\u540e\u53f0\u547d\u4ee4"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"ConsoleCmd_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u53d1\u6d88\u606f\u7ed9\u73a9\u5bb6"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"sendPlayer_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u5d29\u6e83\u73a9\u5bb6\u5ba2\u6237\u7aef"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Crash_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u4ee5\u73a9\u5bb6\u8eab\u4efd\u8bf4\u8bdd"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Player_Talk_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u73a9\u5bb6\u8eab\u4efd\u6267\u884c\u547d\u4ee4"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Player_Cmd_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Ban GUI"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"\u4f9d\u8d56\u4e91\u9ed1"})}),(0,s.jsx)(t.td,{children:"Ban_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u53d1\u9001\u8868\u5355"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Forms_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u73a9\u5bb6\u8be6\u7ec6\u4fe1\u606f"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Info_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u547d\u4ee4\u9ed1\u540d\u5355"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Black_Cmd_Ui"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u836f\u6c34GUI"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Potion_Ui"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u547d\u4ee4\u7cfb\u7edf",children:"\u547d\u4ee4\u7cfb\u7edf"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"[]"}),"\u4e3a",(0,s.jsx)(t.strong,{children:"\u53ef\u9009\u53c2\u6570"})," | ",(0,s.jsx)(t.code,{children:"{}"}),"\u4e3a",(0,s.jsx)(t.strong,{children:"\u5fc5\u9009\u53c2\u6570"}),(0,s.jsx)(t.br,{}),"\n","\u8f93\u5165\u547d\u4ee4\u65f6\u8bf7\u4e0d\u8981\u5e26\u4e0a",(0,s.jsx)(t.code,{children:"[]"}),"\u6216",(0,s.jsx)(t.code,{children:"{}"})]})}),"\n","\n","\n",(0,s.jsxs)(U,{children:[(0,s.jsxs)(w,{value:"\u57fa\u7840\u547d\u4ee4",label:"\ud83c\udfaf\u57fa\u7840\u547d\u4ee4",default:!0,children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools"})," - \u6253\u5f00GUI"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools gui"})," - \u6253\u5f00GUI"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools set"})," - \u6253\u5f00\u8bbe\u7f6eGUI"]})]}),(0,s.jsxs)(w,{value:"\u63a7\u5236\u53f0\u547d\u4ee4",label:"\ud83c\udfaf\u63a7\u5236\u53f0\u547d\u4ee4",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools add {Name: String}"})," - \u6dfb\u52a0\u63d2\u4ef6\u7ba1\u7406"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools remove {Name: String}"})," - \u79fb\u9664\u63d2\u4ef6\u7ba1\u7406"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"/tools reload"})," - \u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6"]})]})]})]})}function C(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(V,{...e})}):V(e)}},2050:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/logo_background-ad6ebc43645a96ba87c660eb8a5118ca.png"},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(6540);const n={},l=s.createContext(n);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);