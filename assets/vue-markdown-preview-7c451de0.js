import{f as b}from"./rehype-prism-plus-cf0bb656.js";import{w as P,v as A,r as C,a as T,b as I,c as E,d as L}from"./rehype-5f82f031.js";import{f as O,b as U,c as j,s as H,d as R,h as B,u as M,r as F,i as V,j as z}from"./unified-a6a0231f.js";import{h as m,F as v,i as D,d as _,T as G,c as $}from"./vue-a412674b.js";import{V as q}from"./micromark-extension-14097367.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function J(){return{type:"element",tagName:"span",properties:{class:"octicon octicon-link"},children:[]}}/*!
 * @uiw/copy-to-clipboard v1.0.12
 * Copy to clipboard.
 * 
 * Copyright (c) 2021 Kenny Wang
 * https://github.com/uiwjs/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */function K(e,t){const a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a);const n=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;a.select();let l=!1;try{l=!!document.execCommand("copy")}catch{l=!1}document.body.removeChild(a),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(l)}function Q(e){return e===void 0&&(e=""),{type:"element",tagName:"div",properties:{onClick:t=>{var{target:a}=t;a.classList.add("active"),K(e,function(){setTimeout(()=>{a.classList.remove("active")},2e3)})},class:"copied"},children:[{type:"element",tagName:"svg",properties:{class:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{class:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}}var w={}.hasOwnProperty,W=new Set(["table","thead","tbody","tfoot","tr"]);function N(e,t){for(var a=[],n=-1,l;++n<e.children.length;)l=e.children[n],l.type==="element"?a.push(X(t,l,n,e)):l.type==="text"?(e.type!=="element"||!W.has(e.tagName)||!P(l))&&a.push(l.value):l.type==="raw"&&!t.skipHtml&&a.push(l.value);return a}function X(e,t,a,n){var l=e.schema,r=t.tagName,i={},s=l,u;if(l.space==="html"&&r==="svg"&&(s=H,e.schema=s),t.properties)for(u in t.properties)w.call(t.properties,u)&&re(i,u,t.properties[u],e);(r==="ol"||r==="ul")&&e.listDepth++;var f=N(t,e);(r==="ol"||r==="ul")&&e.listDepth--,e.schema=l;var h=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},c=e.components&&w.call(e.components,r)?e.components[r]:r,o=typeof c=="string"||c===v;if(r==="a"&&e.linkTarget&&(i.target=typeof e.linkTarget=="function"?e.linkTarget(String(i.href||""),t.children,typeof i.title=="string"?i.title:null):e.linkTarget),r==="a"&&e.transformLinkUri&&(i.href=e.transformLinkUri(String(i.href||""),t.children,typeof i.title=="string"?i.title:null)),!o&&r==="code"&&n.type==="element"&&n.tagName!=="pre"&&(i.inline=!0),!o&&(r==="h1"||r==="h2"||r==="h3"||r==="h4"||r==="h5"||r==="h6")&&(i.level=Number.parseInt(r.charAt(1),10)),r==="img"&&e.transformImageUri&&(i.src=e.transformImageUri(String(i.src||""),String(i.alt||""),typeof i.title=="string"?i.title:null)),!o&&r==="li"&&n.type==="element"){var d=Y(t);i.checked=d&&d.properties?!!d.properties.checked:null,i.index=y(n,t),i.ordered=n.tagName==="ol"}if(!o&&(r==="ol"||r==="ul")&&(i.ordered=r==="ol",i.depth=e.listDepth),(r==="td"||r==="th")&&(i.align&&(i.style||(i.style={}),i.style.textAlign=i.align,delete i.align),o||(i.isHeader=r==="th")),!o&&r==="tr"&&n.type==="element"&&(i.isHeader=n.tagName==="thead"),e.sourcePos&&(i["data-sourcepos"]=Z(h)),!o&&e.rawSourcePos&&(i.sourcePosition=t.position),!o&&e.includeElementIndex&&(i.index=y(n,t),i.siblingCount=y(n)),o||(i.node=t),typeof c=="function"){var S=p({node:t,children:f?m(v,f):void 0},i),g=c(S);if(g&&D(g))return g}if(typeof c=="string")return f.length>0?m(c,i,f):m(c,i)}function Y(e){for(var t=-1;++t<e.children.length;){var a=e.children[t];if(a.type==="element"&&a.tagName==="input")return a}return null}function y(e,t){for(var a=-1,n=0;++a<e.children.length&&e.children[a]!==t;)e.children[a].type==="element"&&n++;return n}function Z(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(t=>String(t)).join("")}function ee(e){var t={};try{R(e,a)}catch{}return t;function a(n,l){var r=n.slice(0,4)==="-ms-"?"ms-"+n.slice(4):n;t[r.replace(/-([a-z])/g,te)]=l}}function te(e,t){return t.toUpperCase()}function re(e,t,a,n){var l=O(n.schema,t),r=a;r==null||r!==r||(Array.isArray(r)&&(r=l.commaSeparated?U(r):j(r)),l.property==="style"&&typeof r=="string"&&(r=ee(r)),l.attribute&&(e[l.attribute]=r))}var k=["http","https","mailto","tel"];function x(e){var t=(e||"").trim(),a=t.charAt(0);if(a==="#"||a==="/")return t;var n=t.indexOf(":");if(n===-1)return t;for(var l=-1;++l<k.length;){var r=k[l];if(n===r.length&&t.slice(0,r.length).toLowerCase()===r)return t}return l=t.indexOf("?"),l!==-1&&n>l||(l=t.indexOf("#"),l!==-1&&n>l)?t:"javascript:void(0)"}var ie=e=>t=>{A(t,"element",(a,n,l)=>{a.tagName==="code"&&(l==null?void 0:l.type)==="element"&&l.tagName==="pre"&&a.properties&&"className"in a.properties&&Array.isArray(a.properties.className)&&(a.properties.className=a.properties.className.map(r=>typeof r=="string"?r.replace(/^language-vue/,"language-html"):r))})},ae={rehypePlugins:{type:Object,default:[]},remarkPlugins:{type:Object,default:[]},components:{type:Object,default:{}},source:{type:String,default:""},sourcePos:{type:Boolean,default:!1},rawSourcePos:{type:Boolean,default:!1},includeElementIndex:{type:Boolean,default:!1},skipHtml:{type:Boolean,default:!1},linkTarget:{type:[Function,String]},transformLinkUri:{type:Function,default:x},transformImageUri:{type:Function,default:x}},ne=function e(t,a){return t===void 0&&(t=[]),a===void 0&&(a=""),t.forEach(n=>{n.type==="text"?a+=n.value:n.type==="element"&&n.children&&Array.isArray(n.children)&&(a+=e(n.children))}),a};const fe=_({name:"MarkdownPreview",props:ae,setup(e,t){var{slots:a}=t,{remarkPlugins:n,rehypePlugins:l}=e;function r(){return M().use(F).use(V).use(n||[]).use(z,{allowDangerousHtml:!0}).use(C,{properties:"attr"}).use(T).use(ie).use(I).use(E).use(b,{ignoreMissing:!0}).use(L,{rewrite:i=>{if(i.type=="element"&&/h(1|2|3|4|5|6)/.test(i.tagName)&&i.children&&Array.isArray(i.children)&&i.children.length>0){var s=i.children[0];s&&s.type==="element"&&s.properties&&(s.properties=p({className:"anchor"},s.properties),s.children=[J()])}if(i.type==="element"&&i.tagName==="pre"){var u=ne(i.children);i.children.push(Q(u))}}}).use(l||[])}return()=>{var i=a&&a.default?a.default().filter(c=>c.type===G).map(c=>c.children):[],s=new q;s.value=i&&i.length>0?i.join():e.source;var u=r(),f=u.runSync(u.parse(s),s);if(f.type!=="root")throw new TypeError("Expected a `root` node");var h=m(v,{},N(f,{listDepth:0,schema:B,components:e.components,sourcePos:e.sourcePos,rawSourcePos:e.rawSourcePos,includeElementIndex:e.includeElementIndex,skipHtml:e.skipHtml,linkTarget:e.linkTarget,transformLinkUri:e.transformLinkUri,transformImageUri:e.transformImageUri}));return $("div",{class:"markdown-body"},[h])}}});export{fe as M,p as _};
