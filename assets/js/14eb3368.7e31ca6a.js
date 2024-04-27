"use strict";(self.webpackChunkproject_docs=self.webpackChunkproject_docs||[]).push([[969],{1243:(e,t,s)=>{s.d(t,{A:()=>p});s(6540);var n=s(4164),i=s(7559),r=s(4142),a=s(9169),o=s(8774),c=s(1312),l=s(6025),d=s(4848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,l.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,d.jsx)(o.A,{className:i,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function v(e){let{children:t,active:s,index:i,addMicrodata:r}=e;return(0,d.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,r.OF)(),t=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:n,index:s,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:t.label})},s)}))]})}):null}},5277:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});s(6540);var n=s(1003),i=s(4142),r=s(6025),a=s(4164),o=s(4687),c=s(4848);function l(e){let{className:t}=e;const s=(0,i.$S)();return(0,c.jsx)(d,{items:s.items,className:t})}function d(e){const{items:t,className:s}=e;if(!t)return(0,c.jsx)(l,{...e});const n=(0,i.d1)(t);return(0,c.jsx)("section",{className:(0,a.A)("row",s),children:n.map(((e,t)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(o.A,{item:e})},t)))})}var m=s(6929),u=s(1878),h=s(4267),b=s(1243),x=s(1107);const v={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function p(e){let{categoryGeneratedIndex:t}=e;return(0,c.jsx)(n.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.A)(t.image)})}function j(e){let{categoryGeneratedIndex:t}=e;const s=(0,i.$S)();return(0,c.jsxs)("div",{className:v.generatedIndexPage,children:[(0,c.jsx)(u.A,{}),(0,c.jsx)(b.A,{}),(0,c.jsx)(h.A,{}),(0,c.jsxs)("header",{children:[(0,c.jsx)(x.A,{as:"h1",className:v.title,children:t.title}),t.description&&(0,c.jsx)("p",{children:t.description})]}),(0,c.jsx)("article",{className:"margin-top--lg",children:(0,c.jsx)(d,{items:s.items,className:v.list})}),(0,c.jsx)("footer",{className:"margin-top--lg",children:(0,c.jsx)(m.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function g(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{...e}),(0,c.jsx)(j,{...e})]})}},6929:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var n=s(1312),i=s(4164),r=s(8774),a=s(4848);function o(e){const{permalink:t,title:s,subLabel:n,isNext:o}=e;return(0,a.jsxs)(r.A,{className:(0,i.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}function c(e){const{previous:t,next:s}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(o,{...t,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(o,{...s,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var n=s(4164),i=s(1312),r=s(7559),a=s(2252),o=s(4848);function c(e){let{className:t}=e;const s=(0,a.r)();return s.badge?(0,o.jsx)("span",{className:(0,n.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,s)=>{s.d(t,{A:()=>v});s(6540);var n=s(4164),i=s(4586),r=s(8774),a=s(1312),o=s(4070),c=s(7559),l=s(5597),d=s(2252),m=s(4848);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(r.A,{to:s,onClick:n,children:(0,m.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:r}}=(0,i.A)(),{pluginId:a}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,l.g1)(a),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,o.HW)(a),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,n.A)(t,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:r,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}},4687:(e,t,s)=>{s.d(t,{A:()=>v});s(6540);var n=s(4164),i=s(8774),r=s(4142),a=s(6654),o=(s(1312),s(1107));const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var l=s(6025),d=s(4848);function m(e){let{href:t,children:s}=e;return(0,d.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",c.cardContainer),children:s})}function u(e){let{href:t,icon:s,title:i,description:r}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.A,{as:"h2",className:(0,n.A)("text--truncate",c.cardTitle),title:i,children:[s," ",i]}),r&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",c.cardDescription),title:r,children:r})]})}function h(e){let{item:t}=e;const s=(0,r.Nr)(t),n=useCategoryItemsPlural();return s?(0,d.jsx)(u,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function b(e){let{item:t}=e;const s=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function x(e){let{title:t,href:s,description:n,icon:i}=e;if(!s)throw new Error("ProjectCard.href error");if(!t)throw new Error("ProjectCard.title error");return s=(0,l.A)(s),(0,d.jsx)(u,{href:s,title:t,description:n||"\u70b9\u51fb\u67e5\u770b\u6587\u6863",icon:i||((0,a.A)(s)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17")})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(b,{item:t});case"category":return(0,d.jsx)(h,{item:t});case"custom":return(0,d.jsx)(x,{...t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}}}]);