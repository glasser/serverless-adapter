"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1957],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=n,g=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(g,o(o({ref:t},i),{},{components:a})):r.createElement(g,o({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3778:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],p={},s=void 0,d={unversionedId:"api/Handlers/DefaultHandler/DefaultHandler",id:"api/Handlers/DefaultHandler/DefaultHandler",title:"DefaultHandler",description:"@h4ad/serverless-adapter &gt; DefaultHandler",source:"@site/docs/api/Handlers/DefaultHandler/DefaultHandler.md",sourceDirName:"api/Handlers/DefaultHandler",slug:"/api/Handlers/DefaultHandler/",permalink:"/serverless-adapter/docs/api/Handlers/DefaultHandler/",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Handlers/DefaultHandler/DefaultHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"TrpcFrameworkOptions",permalink:"/serverless-adapter/docs/api/Frameworks/TrpcFramework/TrpcFrameworkOptions"},next:{title:"HttpHuaweiHandler",permalink:"/serverless-adapter/docs/api/Handlers/HttpHuaweiHandler/"}},i={},m=[{value:"(class) DefaultHandler",id:"class-defaulthandler",level:2},{value:"(method) forwardRequestToFramework",id:"method-forwardrequesttoframework",level:2},{value:"Parameters",id:"parameters",level:3},{value:"(method) forwardResponse",id:"method-forwardresponse",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"(method) getHandler",id:"method-gethandler",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"(method) onForwardResponse",id:"method-onforwardresponse",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"(method) onForwardResponseAdapterResponse",id:"method-onforwardresponseadapterresponse",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"(method) onReceiveRequest",id:"method-onreceiverequest",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"(method) onResolveAdapter",id:"method-onresolveadapter",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"(method) onResolveForwardedResponseToFramework",id:"method-onresolveforwardedresponsetoframework",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"(method) onResolveRequestValues",id:"method-onresolverequestvalues",level:2},{value:"Parameters",id:"parameters-8",level:3}],u={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Handlers/DefaultHandler"},"DefaultHandler")),(0,l.kt)("h2",{id:"class-defaulthandler"},"(class) DefaultHandler"),(0,l.kt)("p",null,"The class that implements a default serverless handler consisting of a function with event, context and callback parameters respectively"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DefaultHandler<TApp, TEvent, TContext, TCallback, TResponse, TReturn> extends BaseHandler<TApp, TEvent, TContext, TCallback, TResponse, TReturn> \n")),(0,l.kt)("p",null,"Extends: ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/Core/BaseHandler"},"BaseHandler")),(0,l.kt)("h2",{id:"method-forwardrequesttoframework"},"(method) forwardRequestToFramework"),(0,l.kt)("p",null,"The function to forward the event to the framework"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected forwardRequestToFramework(app: TApp, framework: FrameworkContract<TApp>, event: TEvent, context: TContext, adapter: AdapterContract<TEvent, TContext, TResponse>, binarySettings: BinarySettings, log: ILogger): Promise<TResponse>;\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app"),(0,l.kt)("td",{parentName:"tr",align:null},"TApp"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the app (express, hapi, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framework"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The framework that will process requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"TEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"The event sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"TContext"),(0,l.kt)("td",{parentName:"tr",align:null},"The context sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The adapter resolved to this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binarySettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/BinarySettings"},"BinarySettings")),(0,l.kt)("td",{parentName:"tr",align:null},"The binary settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"Promise","<","TResponse",">"),(0,l.kt)("h2",{id:"method-forwardresponse"},"(method) forwardResponse"),(0,l.kt)("p",null,"The function to forward the response back to the serverless"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected forwardResponse(event: TEvent, response: ServerlessResponse, adapter: AdapterContract<TEvent, TContext, TResponse>, binarySettings: BinarySettings, log: ILogger): TResponse;\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"TEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"The event sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"The response of the framework")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The adapter resolved to this event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binarySettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/BinarySettings"},"BinarySettings")),(0,l.kt)("td",{parentName:"tr",align:null},"The binary settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"TResponse"),(0,l.kt)("h2",{id:"method-gethandler"},"(method) getHandler"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"getHandler(app: TApp, framework: FrameworkContract<TApp>, adapters: AdapterContract<TEvent, TContext, TResponse>[], resolverFactory: ResolverContract<TEvent, TContext, TCallback, TResponse, TReturn>, binarySettings: BinarySettings, respondWithErrors: boolean, log: ILogger): ServerlessHandler<TReturn>;\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app"),(0,l.kt)("td",{parentName:"tr",align:null},"TApp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framework"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/FrameworkContract"},"FrameworkContract")," ","<","TApp",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">","[","]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolverFactory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/ResolverContract"},"ResolverContract")," ","<","TEvent, TContext, TCallback, TResponse, TReturn",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binarySettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/BinarySettings"},"BinarySettings")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"respondWithErrors"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/Contracts/HandlerContract/ServerlessHandler"},"ServerlessHandler")," ","<","TReturn",">"),(0,l.kt)("h2",{id:"method-onforwardresponse"},"(method) onForwardResponse"),(0,l.kt)("p",null,"The hook executed before sending response to the serverless"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onForwardResponse(log: ILogger, statusCode: number, body: string, headers: SingleValueHeaders, isBase64Encoded: boolean): void;\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The status code of the response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The body of the response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/SingleValueHeaders"},"SingleValueHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},"The headers of the response")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isBase64Encoded"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the response was encoded as binary or not")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"method-onforwardresponseadapterresponse"},"(method) onForwardResponseAdapterResponse"),(0,l.kt)("p",null,"The hook executed before sending response to the serverless with response from adapter"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onForwardResponseAdapterResponse(log: ILogger, successResponse: TResponse, body: string): void;\n")),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"successResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"TResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"The success response resolved by the adapter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The body of the response sent by the framework")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"method-onreceiverequest"},"(method) onReceiveRequest"),(0,l.kt)("p",null,"The hook executed on receive a request, before the request is being processed"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onReceiveRequest(log: ILogger, event: TEvent, context: TContext, binarySettings: BinarySettings, respondWithErrors: boolean): void;\n")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"TEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"The event sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"TContext"),(0,l.kt)("td",{parentName:"tr",align:null},"The context sent by serverless")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binarySettings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Types/BinarySettings"},"BinarySettings")),(0,l.kt)("td",{parentName:"tr",align:null},"The binary settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"respondWithErrors"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the error stack should be included in the response or not")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"method-onresolveadapter"},"(method) onResolveAdapter"),(0,l.kt)("p",null,"The hook executed after resolve the adapter that will be used to handle the request and response"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onResolveAdapter(log: ILogger, adapter: AdapterContract<TEvent, TContext, TResponse>): void;\n")),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adapter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract"},"AdapterContract")," ","<","TEvent, TContext, TResponse",">"),(0,l.kt)("td",{parentName:"tr",align:null},"The adapter resolved")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"method-onresolveforwardedresponsetoframework"},"(method) onResolveForwardedResponseToFramework"),(0,l.kt)("p",null,"The hook executed after handling the response sent by the framework"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onResolveForwardedResponseToFramework(log: ILogger, response: ServerlessResponse): void;\n")),(0,l.kt)("h3",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Network/ServerlessResponse"},"ServerlessResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"The response sent by the framework")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"method-onresolverequestvalues"},"(method) onResolveRequestValues"),(0,l.kt)("p",null,"The hook executed after resolves the request values that will be sent to the framework"),(0,l.kt)("p",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"protected onResolveRequestValues(log: ILogger, requestValues: AdapterRequest): void;\n")),(0,l.kt)("h3",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Core/Logger/ILogger"},"ILogger")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of logger")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestValues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api/Contracts/AdapterContract/AdapterRequest"},"AdapterRequest")),(0,l.kt)("td",{parentName:"tr",align:null},"The request values returned by the adapter")))),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("p",null,"void"))}k.isMDXComponent=!0}}]);