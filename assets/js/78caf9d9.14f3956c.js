"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[634797],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=m(r),s=a,d=f["".concat(l,".").concat(s)]||f[s]||c[s]||p;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"EventEmitter.off"},i="EventEmitter.off() method",o={unversionedId:"api/puppeteer.eventemitter.off",id:"version-16.0.0/api/puppeteer.eventemitter.off",title:"EventEmitter.off() method",description:"Remove an event listener from firing.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.eventemitter.off.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.off",permalink:"/16.0.0/api/puppeteer.eventemitter.off",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"EventEmitter.off"},sidebar:"sidebar",previous:{title:"EventEmitter.listenerCount",permalink:"/16.0.0/api/puppeteer.eventemitter.listenercount"},next:{title:"EventEmitter.on",permalink:"/16.0.0/api/puppeteer.eventemitter.on"}},l={},m=[{value:"Parameters",id:"parameters",level:2}],u={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventemitteroff-method"},"EventEmitter.off() method"),(0,a.kt)("p",null,"Remove an event listener from firing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class EventEmitter {\n  off(event: EventType, handler: Handler): EventEmitter;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null},"the event type you'd like to stop listening to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.handler"},"Handler")),(0,a.kt)("td",{parentName:"tr",align:null},"the function that should be removed.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}c.isMDXComponent=!0}}]);