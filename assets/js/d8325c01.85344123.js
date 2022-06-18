"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[846],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(k,p(p({ref:t},i),{},{components:r})):a.createElement(k,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var d=2;d<l;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2126:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),p=["components"],s={},o=void 0,d={unversionedId:"api/Core/BaseHandler",id:"api/Core/BaseHandler",title:"BaseHandler",description:"@h4ad/serverless-adapter &gt; BaseHandler",source:"@site/docs/api/Core/BaseHandler.md",sourceDirName:"api/Core",slug:"/api/Core/BaseHandler",permalink:"/serverless-adapter/docs/api/Core/BaseHandler",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Core/BaseHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"ResolverProps",permalink:"/serverless-adapter/docs/api/Contracts/ResolverContract/ResolverProps"},next:{title:"DEFAULT_BINARY_CONTENT_TYPES",permalink:"/serverless-adapter/docs/api/Core/Constants/DEFAULT_BINARY_CONTENT_TYPES"}},i={},u=[{value:"(class) BaseHandler",id:"class-basehandler",level:2},{value:"(method) getAdapterByEventAndContext",id:"method-getadapterbyeventandcontext",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(method) getHandler",id:"method-gethandler",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"(method) getServerlessRequestResponseFromAdapterRequest",id:"method-getserverlessrequestresponsefromadapterrequest",level:2},{value:"Parameters",id:"parameters-2",level:3}],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Core/BaseHandler"},"BaseHandler")),(0,l.kt)("h2",{id:"class-basehandler"},"(class) BaseHandler"),(0,l.kt)("p",null,"The abstract class that represents the base class for a handler"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class BaseHandler<TApp, TEvent, TContext, TCallback, TResponse, TReturn> implements HandlerContract<TApp, TEvent, TContext, TCallback, TResponse, TReturn> \n")),(0,l.kt)("p",null,"Implements: ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/HandlerContract"},"HandlerContract")),(0,l.kt)("h2",{id:"method-getadapterbyeventandcontext"},"(method) getAdapterByEventAndContext"),(0,l.kt)("p",null,"Get the adapter to handle a specific event and context"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected getAdapterByEventAndContext(event: TEvent, context: TContext, adapters: AdapterContract<TEvent, TContext, TResponse>[], log: ILogger): AdapterContract<TEvent, TContext, TResponse>;\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"TEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"The event sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"TContext"),(0,l.kt)("td",{parentName:"tr",align:null},"The context sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">","[","]"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of adapters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">"),(0,l.kt)("h2",{id:"method-gethandler"},"(method) getHandler"),(0,l.kt)("p",null,"Get the handler that will handle serverless requests"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract getHandler(app: TApp, framework: FrameworkContract<TApp>, adapters: AdapterContract<TEvent, TContext, TResponse>[], resolverFactory: ResolverContract<TEvent, TContext, TCallback, TResponse, TReturn>, binarySettings: BinarySettings, respondWithErrors: boolean, log: ILogger): ServerlessHandler<TReturn>;\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app"),(0,l.kt)("td",{parentName:"tr",align:null},"TApp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framework"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">","[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolverFactory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/ResolverContract"},"ResolverContract")," ","<","TEvent, TContext, TCallback, TResponse, TReturn",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binarySettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/BinarySettings"},"BinarySettings")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"respondWithErrors"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/HandlerContract/ServerlessHandler"},"ServerlessHandler")," ","<","TReturn",">"),(0,l.kt)("h2",{id:"method-getserverlessrequestresponsefromadapterrequest"},"(method) getServerlessRequestResponseFromAdapterRequest"),(0,l.kt)("p",null,"Get serverless request and response frmo the adapter request"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected getServerlessRequestResponseFromAdapterRequest(requestValues: AdapterRequest): [request: ServerlessRequest, response: ServerlessResponse];\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestValues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract/AdapterRequest"},"AdapterRequest")),(0,l.kt)("td",{parentName:"tr",align:null},"The request values from adapter")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"[","request: ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessRequest"},"ServerlessRequest")," , response: ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")," ","]"))}m.isMDXComponent=!0}}]);