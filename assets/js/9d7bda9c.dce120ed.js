"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8687],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return k}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(t),k=n,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||o;return t?a.createElement(d,l(l({ref:r},m),{},{components:t})):a.createElement(d,l({ref:r},m))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5307:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),l=["components"],p={},s=void 0,i={unversionedId:"api/Frameworks/KoaFramework/KoaFramework",id:"api/Frameworks/KoaFramework/KoaFramework",title:"KoaFramework",description:"@h4ad/serverless-adapter &gt; KoaFramework",source:"@site/docs/api/Frameworks/KoaFramework/KoaFramework.md",sourceDirName:"api/Frameworks/KoaFramework",slug:"/api/Frameworks/KoaFramework/",permalink:"/serverless-adapter/docs/api/Frameworks/KoaFramework/",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Frameworks/KoaFramework/KoaFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"HapiFramework",permalink:"/serverless-adapter/docs/api/Frameworks/HapiFramework/"},next:{title:"LazyFramework",permalink:"/serverless-adapter/docs/api/Frameworks/LazyFramework/"}},m={},c=[{value:"(class) KoaFramework",id:"class-koaframework",level:2},{value:"(method) sendRequest",id:"method-sendrequest",level:2},{value:"Parameters",id:"parameters",level:3}],u={toc:c};function k(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Frameworks/KoaFramework"},"KoaFramework")),(0,o.kt)("h2",{id:"class-koaframework"},"(class) KoaFramework"),(0,o.kt)("p",null,"The framework that forwards requests to koa handler"),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class KoaFramework implements FrameworkContract<Application> \n")),(0,o.kt)("p",null,"Implements: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","Application"),(0,o.kt)("h2",{id:"method-sendrequest"},"(method) sendRequest"),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"sendRequest(app: Application, request: IncomingMessage, response: ServerResponse): void;\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app"),(0,o.kt)("td",{parentName:"tr",align:null},"Application"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"request"),(0,o.kt)("td",{parentName:"tr",align:null},"IncomingMessage"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"response"),(0,o.kt)("td",{parentName:"tr",align:null},"ServerResponse"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Returns:"),(0,o.kt)("p",null,"void"))}k.isMDXComponent=!0}}]);