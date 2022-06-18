"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7486],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,S=u["".concat(i,".").concat(f)]||u[f]||l[f]||p;return r?n.createElement(S,o(o({ref:t},c),{},{components:r})):n.createElement(S,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<p;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6835:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),o=["components"],s={},i=void 0,d={unversionedId:"api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",id:"api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",title:"SNSAdapterOptions",description:"@h4ad/serverless-adapter &gt; SNSAdapterOptions",source:"@site/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions.md",sourceDirName:"api/Adapters/AWS/SNSAdapter",slug:"/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",permalink:"/serverless-adapter/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"SNSAdapter",permalink:"/serverless-adapter/docs/api/Adapters/AWS/SNSAdapter/"},next:{title:"SQSAdapter",permalink:"/serverless-adapter/docs/api/Adapters/AWS/SQSAdapter/"}},c={},l=[{value:"(interface) SNSAdapterOptions",id:"interface-snsadapteroptions",level:2},{value:"(property) snsForwardMethod",id:"property-snsforwardmethod",level:2},{value:"(property) snsForwardPath",id:"property-snsforwardpath",level:2}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SNSAdapter/SNSAdapterOptions"},"SNSAdapterOptions")),(0,p.kt)("h2",{id:"interface-snsadapteroptions"},"(interface) SNSAdapterOptions"),(0,p.kt)("p",null,"The options to customize the ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/SNSAdapter"},"SNSAdapter")),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface SNSAdapterOptions \n")),(0,p.kt)("h2",{id:"property-snsforwardmethod"},"(property) snsForwardMethod"),(0,p.kt)("p",null,"The http method that will be used to create a request to be forwarded to the framework."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"snsForwardMethod?: string;\n")),(0,p.kt)("h2",{id:"property-snsforwardpath"},"(property) snsForwardPath"),(0,p.kt)("p",null,"The path that will be used to create a request to be forwarded to the framework."),(0,p.kt)("p",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"snsForwardPath?: string;\n")))}f.isMDXComponent=!0}}]);