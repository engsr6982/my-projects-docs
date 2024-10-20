"use strict";(self.webpackChunkproject_docs=self.webpackChunkproject_docs||[]).push([[8236],{9305:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var l=t(1250),s=t(5476),r=t(6540),n=t(3521),c=t(4825),i=t(4423),o=t(9110),d=t(3600),u=t(4078),A=t(6729),m=t(423),h=t(662),g=t(4848);const{Paragraph:p,Text:x}=n.A,{Search:b}=c.A,{Ribbon:j}=i.A,f=e=>({"\u5efa\u7b51":"cyan","\u7269\u54c1":"volcano","\u81ea\u7136":"green","\u88c5\u5907":"purple","craftingScreen.tab.commands":"purple"}[e]||"gray"),v=e=>({"craftingScreen.tab.commands":"\u547d\u4ee4","craftingScreen.tab.none":"\u65e0\u5206\u7c7b"}[e]||e);class y{static updateCache(e){localStorage.setItem("version",JSON.stringify(e))}static tryGetCache(){const e=localStorage.getItem("version");return e?JSON.parse(e):null}}function S(){const[e,a]=(0,r.useState)(!1),[t,n]=(0,r.useState)(""),[c,i]=(0,r.useState)("name"),[S,N]=(0,r.useState)("all"),[w,C]=(0,r.useState)(""),[I,k]=(0,r.useState)([]),[D,E]=(0,r.useState)([]),[J,T]=(0,r.useState)(!1),[B,Q]=(0,r.useState)(null),[Y,X]=(0,r.useState)([]),[z,O]=(0,r.useState)({}),[U,G]=(0,r.useState)([]),[P,R]=(0,r.useState)([]);(0,r.useEffect)((()=>{(async()=>{if(a(!0),0===I.length){const e=await(0,l.A)("https://api.github.com/repos/engsr6982/BedrockItems/tags");let a=null;if(200==e.status)a=e.data.map((e=>e.name)),y.updateCache(a);else{o.Ay.error("\u83b7\u53d6\u7248\u672c\u5217\u8868\u5931\u8d25\uff0c\u5c1d\u8bd5\u4f7f\u7528\u7f13\u5b58...");const e=y.tryGetCache();null===e&&o.Ay.error("\u83b7\u53d6\u7248\u672c\u5217\u8868\u5931\u8d25\uff01"),a=e}null!==a&&(k(a),C(a[0]))}if(""===w)return o.Ay.error("\u8bf7\u9009\u62e9\u7248\u672c\uff01");const e=await(0,l.A)(`https://cdn.jsdelivr.net/gh/engsr6982/BedrockItems@${w}/Item.json`);if(200!==e.status)return o.Ay.error("\u83b7\u53d6\u7269\u54c1\u5217\u8868\u5931\u8d25\uff01");Q(e.data),a(!1)})()}),[w,I]),(0,r.useEffect)((()=>{null!==B&&(a(!0),"[object Object]"===Object.prototype.toString.call(B)?(T(!0),X(B.items),O(B.tr),G([{value:"all",label:"\u6240\u6709"},...B.category.map((e=>({value:v(e),label:v(e)})))]),R([{value:"name",label:"\u540d\u79f0"},{value:"typeName",label:"Type"},{value:"id",label:"ID"}])):(T(!1),X(B),G([{value:"all",label:"\u6240\u6709"},...Array.from(new Set(B.map((e=>e.class)))).map((e=>({value:e,label:e})))]),O({name:"\u540d\u79f0",type:"\u547d\u540d\u7a7a\u95f4",id:"ID",aux:"\u7279\u6b8a\u503c",class:"\u7c7b\u522b",icon:"\u56fe\u6807"}),R([{value:"name",label:"Name"},{value:"type",label:"Type"},{value:"id",label:"ID"}])),a(!1))}),[B]),(0,r.useEffect)((()=>{a(!0);let e=Y;""!==t&&(e=e.filter((e=>"id"===c?e[c]===parseInt(t):e[c].toLowerCase().trim().includes(t.toLowerCase().trim())))),"all"!==S&&(e=e.filter((e=>(J?v(e.categoryName):e.class)===S))),E(e),a(!1)}),[t,c,S,Y]);const V=e=>function(e,a){let t=[];for(let l=0;l<e.length;l++)t.push(e[l]),l>0&&l<e.length-1&&t.push(a);return t}((J?["effectName","typeName","aux","id"]:["type","id","aux","icon"]).map((a=>""!==e[a]&&(0,g.jsxs)(x,{type:"secondary",ellipsis:!0,children:[z[a],":",(0,g.jsxs)(x,{copyable:!0,children:[" ",String(e[a])]})]}))),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("br",{})}));return(0,g.jsx)(s.A,{title:"McID",description:"BedrockItems ID Search",children:(0,g.jsxs)("div",{className:"global",children:[(0,g.jsxs)("div",{className:"operation-bar",children:[(0,g.jsx)(b,{className:"search-bar",type:"text",placeholder:"\u641c\u7d22\u7269\u54c1...",disabled:e,loading:e,addonBefore:(0,g.jsx)(d.A,{defaultValue:"name",disabled:e,options:P,onChange:i}),onChange:e=>n(e.target.value),onSearch:e=>n(e)}),(0,g.jsxs)("div",{className:"select-group",children:[(0,g.jsx)(d.A,{className:"select-item phone-select-item-start",defaultValue:"all",disabled:e,onChange:N,options:U}),(0,g.jsx)(d.A,{className:"select-item",disabled:e,defaultValue:"default",onChange:C,options:[...Array.from(new Set(I)).map((e=>e===w?{value:"default",label:e}:{value:e,label:e}))]})]})]}),(0,g.jsx)("div",{className:"hide-scrollbar card-list",children:(0,g.jsx)(u.A,{bordered:!0,loading:e,pagination:{position:"both",align:"end"},grid:{gutter:0,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},style:{height:"100%",overflowY:"auto",scrollbarWidth:"none",msOverflowStyle:"none"},dataSource:D,renderItem:e=>{return(0,g.jsx)(u.A.Item,{styles:{width:"100%",height:"201px"},children:(0,g.jsx)(j,{text:J?v(e.categoryName):e.class,color:f(J?e.categoryName:e.class),style:{zIndex:1},children:(0,g.jsx)(A.A,{className:"custom-card-padding",hoverable:!0,actions:[(0,g.jsx)("a",{onClick:()=>{navigator.clipboard.writeText(JSON.stringify(e)),o.Ay.info("\u590d\u5236\u6210\u529f")},children:"\u590d\u5236JSON"},"copy"),(0,g.jsx)("a",{onClick:()=>m.A.info({mask:!0,okText:"\u5173\u95ed",title:`${e.name}`,content:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.A,{size:"small",bordered:!0,layout:"vertical",items:[...Object.keys(e).map((a=>({key:a,label:z[a],children:(0,g.jsx)(x,{copyable:!0,children:e[a]})})))]})})}),children:"\u8be6\u7ec6\u4fe1\u606f"},"view")],children:(0,g.jsx)(A.A.Meta,{avatar:(0,g.jsx)("img",{loading:"lazy",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nO2Y3U/TYBTGFxP9J/RWL7zFFW646ZagiciCfJj4N8C1XnkL0g0QNkU0DuRmwTnTYmZYxxQIbDEQMOnGGENgjPkFjn3csMgxb7cBXdt1ny0kO8mTLG3f5Pm1z3nfk6lUtapVrWpVq0pXj2v1GuHwThIOJkbQXlBUDuSBsfZOM9cLNt9He/cVN05zhTzpaf9VSQD2zZ8Dw4SwLAUAnIPY0GJiotIAipv05lUNgKjwG9U7fTC2HAGbP8bKvBxhr12YL2BejgAVTHKErl0YAJs/xgOwrceUARj8vM7qQgIYnD4Yce+wMsyslRWhsSUFImRa+A4vPSFWpoWtgtfpnT4WQtEmHpwNnJjP6tmXjar0jKrSAIYZH4x4dngAxUaJUATA6YXnC1s881mhe+caYGh2Q9T8SZTmhKM06gnBK8+OcgAoHiMS5tNRCoFhxs9Za5wLArmRADKYANP8pgIAKDqL25Lms3qxuA36zNoBl5/d58/u+QMuv7wAQ3PBgs1nNTwbBD3tAwuzz9v3J5mDvFtnRQH6Xf6izbNyh2Bi9RfPPJURuld1APSWUBxKAchnnsqokKYuC8A4X3x0kMxLEbZhxYx/XI+Cx0JB8PEj2OvUwd/bjax2O1pgpbsbbMNm6J/+Vh4AarRSzL/+GoYPgbioefekHX536iChwfJqr+0uWE3jpQGw0XEXH51Rzy5Y16KCxqcCcfD1EpLGcxXXqPvgiepSUQDG+dNBrRhZmAPRN1+K+cQpRG9JPVApWY3jPFPJ1iZIaBv4hrUN6Xu5z+OYThEA1IwozxwzD5rhXzgEKTvFhdDWQ4q0wvHPCCQfcvskjqs3of3mFdkBbENvuObvN8FxJAzZStnJNIS2gf2dLfQMepYLgbXLDrDS1ZUTkXo4It+dGE1DUJCi3udcy4CdXYtjE7IDhNuaBXJez4OQNJ/WGg+gj2YOqwkQvdMovLtohSF4fcGROi7wBRirUgApysoH+DQlDoCrD/kADu8Ngmb+VC1C7feEzZN885JfAcd8glsp+h8e/ZVdjTih2UbKfMpOwlHO1xCBeKuSu+JadUelttEYjrXJDgB1dZcTGnVA+CAjeQcZauzjH0IHGRYUPMjkqJj2VmvZo4QGa1EpWWiqTJQ8zGE9KqULjcRxXP20lEk07zgtdyVxTJfbEyKHVkDx2IgVamw0mKHZBu3t6IRlhX7j2ATabdAzQov/A+VQ83mEsVV5AAAAAElFTkSuQmCC",style:{width:"48px",height:"48px"}}),title:(0,g.jsx)("a",{children:(0,g.jsx)(x,{copyable:!0,children:e.name})}),description:(0,g.jsx)(p,{style:{margin:0},children:V(e)})})})})},(a=e.id,Math.random()+Date().toString()+a));var a}})})]})})}}}]);