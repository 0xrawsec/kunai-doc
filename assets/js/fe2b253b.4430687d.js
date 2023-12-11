"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[6319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:85},o="File rename",c={unversionedId:"events/file_rename",id:"events/file_rename",title:"File rename",description:"This event gets generated whenever a file is being renamed.",source:"@site/docs/events/file_rename.md",sourceDirName:"events",slug:"/events/file_rename",permalink:"/docs/next/events/file_rename",draft:!1,tags:[],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85},sidebar:"tutorialSidebar",previous:{title:"Write config",permalink:"/docs/next/events/write_config"},next:{title:"File unlink",permalink:"/docs/next/events/file_unlink"}},l={},s=[],p={toc:s},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-rename"},"File rename"),(0,a.kt)("p",null,"This event gets generated whenever a file is being renamed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "command_line": "(snapd)",\n    "exe": "/lib/systemd/systemd",\n    "old": "/var/cache/snapd/names.phXLpRTKs1Bb~",\n    "new": "/var/cache/snapd/names"\n  },\n  "info": {\n    ...\n    "event": {\n        ...\n        "id": 85,\n        "name": "file_rename",\n        ...\n    },\n    ...\n  }\n}\n')))}f.isMDXComponent=!0}}]);