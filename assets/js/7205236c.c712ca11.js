"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9394],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3309:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={},l=void 0,c={unversionedId:"api/Core/isBinary/isContentEncodingBinary",id:"api/Core/isBinary/isContentEncodingBinary",title:"isContentEncodingBinary",description:"@h4ad/serverless-adapter &gt; isContentEncodingBinary",source:"@site/docs/api/Core/isBinary/isContentEncodingBinary.md",sourceDirName:"api/Core/isBinary",slug:"/api/Core/isBinary/isContentEncodingBinary",permalink:"/serverless-adapter/docs/api/Core/isBinary/isContentEncodingBinary",editUrl:"https://github.com/H4ad/serverless-adapter/tree/main/www/docs/api/Core/isBinary/isContentEncodingBinary.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"getContentType",permalink:"/serverless-adapter/docs/api/Core/isBinary/getContentType"},next:{title:"isContentTypeBinary",permalink:"/serverless-adapter/docs/api/Core/isBinary/isContentTypeBinary"}},p={},u=[{value:"(function) isContentEncodingBinary",id:"function-iscontentencodingbinary",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2}],d={toc:u};function y(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/Introduction"},"@h4ad/serverless-adapter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Core/isBinary/isContentEncodingBinary"},"isContentEncodingBinary")),(0,i.kt)("h2",{id:"function-iscontentencodingbinary"},"(function) isContentEncodingBinary"),(0,i.kt)("p",null,"The function that determines by the content encoding whether the response should be treated as binary"),(0,i.kt)("p",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function isContentEncodingBinary(headers: BothValueHeaders, binaryEncodingTypes: string[]): boolean;\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"headers"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api/Types/BothValueHeaders"},"BothValueHeaders")),(0,i.kt)("td",{parentName:"tr",align:null},"The headers of the response")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"binaryEncodingTypes"),(0,i.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of content encodings that will be treated as binary")))),(0,i.kt)("p",null,"Returns:"),(0,i.kt)("p",null,"boolean"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const headers = { 'Content-Encoding': 'gzip' };\nconst isBinary = isContentEncodingBinary(headers, ['gzip']);\nconsole.log(isBinary);\n// true\n")))}y.isMDXComponent=!0}}]);