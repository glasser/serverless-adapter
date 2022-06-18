"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9478],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),v=a,g=u["".concat(d,".").concat(v)]||u[v]||l[v]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3596:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={},d=void 0,s={unversionedId:"api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions",id:"api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions",title:"EventBridgeOptions",description:"@h4ad/serverless-adapter &gt; EventBridgeOptions",source:"@site/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions.md",sourceDirName:"api/Adapters/AWS/EventBridgeAdapter",slug:"/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions",permalink:"/serverless-adapter/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"EventBridgeEventAll",permalink:"/serverless-adapter/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeEventAll"},next:{title:"LambdaEdgeAdapter",permalink:"/serverless-adapter/docs/api/Adapters/AWS/LambdaEdgeAdapter/"}},c={},l=[{value:"(interface) EventBridgeOptions",id:"interface-eventbridgeoptions",level:2},{value:"(property) eventBridgeForwardMethod",id:"property-eventbridgeforwardmethod",level:2},{value:"(property) eventBridgeForwardPath",id:"property-eventbridgeforwardpath",level:2}],u={toc:l};function v(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/EventBridgeAdapter/EventBridgeOptions"},"EventBridgeOptions")),(0,o.kt)("h2",{id:"interface-eventbridgeoptions"},"(interface) EventBridgeOptions"),(0,o.kt)("p",null,"The options to customize the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Adapters/AWS/EventBridgeAdapter"},"EventBridgeAdapter")),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EventBridgeOptions \n")),(0,o.kt)("h2",{id:"property-eventbridgeforwardmethod"},"(property) eventBridgeForwardMethod"),(0,o.kt)("p",null,"The http method that will be used to create a request to be forwarded to the framework."),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"eventBridgeForwardMethod?: string;\n")),(0,o.kt)("h2",{id:"property-eventbridgeforwardpath"},"(property) eventBridgeForwardPath"),(0,o.kt)("p",null,"The path that will be used to create a request to be forwarded to the framework."),(0,o.kt)("p",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"eventBridgeForwardPath?: string;\n")))}v.isMDXComponent=!0}}]);