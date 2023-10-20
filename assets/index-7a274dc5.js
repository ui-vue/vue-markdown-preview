import{d as h,c as i,r as u,o as w,a as g,w as b,v as y,b as m,t as c,e as j,f as _,p as x,g as C,j as M}from"./vue-a412674b.js";import{_ as P,M as f}from"./vue-markdown-preview-43527790.js";import"./rehype-prism-plus-78e22e12.js";import"./hast-util-011045c3.js";import"./unified-7275ac0c.js";import"./micromark-extension-e5e0a646.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const L="@uivjs/vue-markdown-preview\n===\n\n[![Build & Deploy](https://github.com/uivjs/vue-markdown-preview/actions/workflows/ci.yml/badge.svg)](https://github.com/uivjs/vue-markdown-preview/actions/workflows/ci.yml)\n[![Downloads](https://img.shields.io/npm/dm/@uivjs/vue-markdown-preview.svg?style=flat)](https://www.npmjs.com/package/@uivjs/vue-markdown-preview)\n[![npm version](https://img.shields.io/npm/v/@uivjs/vue-markdown-preview.svg)](https://www.npmjs.com/package/@uivjs/vue-markdown-preview)\n[![npm unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uivjs/vue-markdown-preview/file/README.md)\n\nMarkdown component for Vue. The minimal amount of CSS to replicate the GitHub Markdown style. The current document website is converted using this Vue component.\n\n## Feature\n\n- ⛑ [Safe](#Security) by default (no `v-html`/`innerHTML` or XSS attacks)\n- ♻️ [Components](#components) (pass your own component to use instead of `<h2>` for `## hi`)\n- 🧩 [Plugins](#plugins) (many plugins you can pick and choose from)\n- ☘️ [Compliant](#components) (100% to CommonMark, 100% to GFM with a plugin)\n\n## Install\n\n```bash\nnpm i @uivjs/vue-markdown-preview\n```\n\n## Usage\n\n```vue\n<template>\n  <div>\n    <markdown-preview :source=\"markdown\" />\n    <markdown-preview class=\"markdown-warpper\">\n      {{markdown}}\n    </markdown-preview>\n    <markdown-preview>\n      ## Hello Markdown\n    </markdown-preview>\n  </div>\n</template>\n\n<script>\nimport { defineComponent } from 'vue';\nimport MarkdownPreview from '@uivjs/vue-markdown-preview';\nimport '@uivjs/vue-markdown-preview/markdown.css';\n\nconst markdown = `## Hello Markdown\n\\`\\`\\`shell\nnpm i @uivjs/vue-markdown-preview\n\\`\\`\\`\n`;\n\nexport default defineComponent({\n  data() {\n    return {\n      markdown\n    }\n  },\n  components: {\n    MarkdownPreview\n  }\n});\n<\/script>\n```\n\n## Examples\n\n### Use a plugin\n\nThis example shows how to use a remark plugin. In this case, [remark-gfm](https://github.com/remarkjs/remark-gfm), which adds support for strikethrough, tables, tasklists and URLs directly:\n\n```vue\n<template>\n  <markdown-preview :remarkPlugins=\"remarkPlugins\">\n    {{markdown}}\n  </markdown-preview>\n</template>\n\n<script>\nimport { defineComponent } from 'vue';\nimport MarkdownPreview from '@uivjs/vue-markdown-preview';\nimport '@uivjs/vue-markdown-preview/markdown.css';\nimport remarkGfm from 'remark-gfm';\n\nconst markdown = `A paragraph with *emphasis* and **strong importance**.\n\n> A block quote with ~strikethrough~ and a URL: https://vuejs.org.\n\n* Lists\n* [ ] todo\n* [x] done\n\nA table:\n\n| a | b |\n| - | - |\n`;\n\nexport default defineComponent({\n  data() {\n    return {\n      markdown,\n      remarkPlugins: [remarkGfm]\n    }\n  },\n  components: {\n    MarkdownPreview\n  }\n});\n<\/script>\n```\n\n### Use a plugin with options\n\nThis example shows how to use a plugin and give it options. To do that, use an array with the plugin at the first place, and the options second. [remark-gfm](https://github.com/remarkjs/remark-gfm) has an option to allow only double tildes for strikethrough:\n\n```vue\n<template>\n  <markdown-preview :remarkPlugins=\"remarkPlugins\">\n    This ~is not~ strikethrough, but ~~this is~~!\n  </markdown-preview>\n</template>\n\n<script>\nimport MarkdownPreview from '@uivjs/vue-markdown-preview';\nimport '@uivjs/vue-markdown-preview/markdown.css';\nimport remarkGfm from 'remark-gfm';\n\nexport default {\n  data() {\n    return {\n      remarkPlugins: [[remarkGfm, { singleTilde: false }]]\n    }\n  },\n  components: {\n    MarkdownPreview\n  }\n};\n<\/script>\n```\n\n## Components\n\nYou can also change the things that come from markdown:\n\n```vue\n<template>\n  <markdown-preview :components=\"components\">\n    {{`<em>www  \\nxxx</em>\\n- 1\\n- 2`}}\n  </markdown-preview>\n</template>\n\n<script>\nimport MarkdownPreview from '@uivjs/vue-markdown-preview';\nimport '@uivjs/vue-markdown-preview/markdown.css';\n\nexport default {\n  data() {\n    return {\n      components: {\n        em: ({ children, ...properties}) => {\n          return <i style={{ color: 'red' }} {...properties}>{children}</i>\n        },\n        li: ({ node, checked, index, ordered, children, ...properties}) => {\n          console.log('other:', node, properties, children, checked, index, ordered)\n          return <li {...properties}>{children}</li>\n        },\n      }\n    }\n  },\n  components: {\n    MarkdownPreview\n  }\n};\n<\/script>\n```\n\nThe keys in components are HTML equivalents for the things you write with markdown (such as `h1` for `# heading`). Normally, in markdown, those are: `a`, `blockquote`, `br`, `code`, `em`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hr`, `img`, `li`, `ol`, `p`, `pre`, `strong`, and `ul`. With [remark-gfm](https://github.com/remarkjs/remark-gfm), you can also use: `del`, `input`, `table`, `tbody`, `td`, `th`, `thead`, and `tr`. Other remark or rehype plugins that add support for new constructs will also work with `vue-markdown-preview`.\n\nThe props that are passed are what you probably would expect: an a (link) will get href (and title) props, and img (image) an src (and title), etc. There are some extra props passed.\n\n- `code`\n  - `inline` (`boolean?`) — set to true for inline code\n  - `className` (string?) — set to language-js or so when using `\\```js`\n- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`\n  - `level` (`number` between 1 and 6) — heading rank\n- `input` (when using [remark-gfm](https://github.com/remarkjs/remark-gfm))\n  - `checked` (`boolean`) — whether the item is checked\n  - `disabled` (`true`)\n  - `type` (`'checkbox'`)\n- `li`\n  - `index` (`number`) — number of preceding items (so first gets `0`, etc.)\n  - `ordered` (`boolean`) — whether the parent is an ol or not\n  - `checked` (`boolean`?) — null normally, boolean when using [remark-gfm](https://github.com/remarkjs/remark-gfm)’s tasklists\n  - `className` (`string`?) — set to task-list-item when using [remark-gfm](https://github.com/remarkjs/remark-gfm) and the item1 is a tasklist\n- `ol`, `ul`\n  - `depth` (`number`) — number of ancestral lists (so first gets `0`, etc.)\n  - `ordered` (`boolean`) — whether it’s an ol or not\n  - `className` (`string?`) — set to contains-task-list when using [remark-gfm](https://github.com/remarkjs/remark-gfm) and the list contains one or more tasklists\n- `td`, `th` (when using [remark-gfm](https://github.com/remarkjs/remark-gfm))\n  - `style` (`Object?`) — something like `{textAlign: 'left'}` depending on how the cell is aligned\n  - `isHeader` (`boolean`) — whether it’s a th or not\n- `tr` (when using [remark-gfm](https://github.com/remarkjs/remark-gfm))\n  - `isHeader` (`boolean`) — whether it’s in the thead or not\n\nEvery component will receive a node (Object). This is the original [`hast`](https://github.com/syntax-tree/hast) element being turned into a Vue element.\n\n## API\n\n- `source` (`string`, default: `''`) Markdown to parse.\n- `components` (`Object.<string, VNodeChild>`, default: `{}`) Object mapping tag names to [`Vue`](https://vuejs.org) components.\n- `remarkPlugins` (`Array.<Plugin>`, default: `[]`) List of [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) to use. See the next section for examples on how to pass options.\n- `rehypePlugins` (`Array.<Plugin>`, default: `[]`) List of [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) to use. See the next section for examples on how to pass options.\n- `skipHtml` (`boolean`, default: `false`) ignore HTML in markdown completely.\n- `linkTarget` (`string` or `(href, children, title) => string`, optional) target to use on links (such as `_blank` for `<a target=\"_blank\"…`)\n- `sourcePos` (`boolean`, default: `false`) pass a prop to all components with a serialized position (`data-sourcepos=\"3:1-3:13\"`)\n- `rawSourcePos` (`boolean`, default: `false`)\npass a prop to all components with their [`position`](https://github.com/syntax-tree/unist#position) (`sourcePosition: {start: {line: 3, column: 1}, end:…}`)\n- `includeElementIndex` (`boolean`, default: `false`) pass the index (number of elements before it) and `siblingCount` (number of elements in parent) as props to all components\n- `transformLinkUri` (`(href, children, title) => string`, default: [`uriTransformer`](https://github.com/uivjs/vue-markdown-preview/blob/main/core/src/utils/uri-transformer.ts), optional) change URLs on links, pass null to allow all URLs, see [security](#security).\n- `transformImageUri` (`(src, alt, title) => string`, default: [`uriTransformer`](https://github.com/uivjs/vue-markdown-preview/blob/main/core/src/utils/uri-transformer.ts), optional) change URLs on images, pass null to allow all URLs, see [security](#security)\n\n## Plugins\n\nWe use [unified](https://github.com/unifiedjs/unified), specifically [remark](https://github.com/remarkjs/remark) for markdown and [rehype](https://github.com/rehypejs/rehype) for HTML, which are tools to transform content with plugins. Here are three good ways to find plugins:\n\n- [awesome-remark](https://github.com/remarkjs/awesome-remark) and [awesome-rehype](https://github.com/rehypejs/awesome-rehype) — selection of the most awesome projects\n- List of [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and list of [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) — list of all plugins\n- [remark-plugin](https://github.com/topics/remark-plugin) and [rehype-plugin](https://github.com/topics/rehype-plugin) topics — any tagged repo on GitHub\n\n## Syntax\n\n`vue-markdown-preview` follows CommonMark, which standardizes the differences between markdown implementations, by default. Some syntax extensions are supported through plugins.\n\nWe use [`micromark`](https://github.com/micromark/micromark) under the hood for our parsing. See its documentation for more information on markdown, CommonMark, and extensions.\n\n## Types\n\nThis package is fully typed with [TypeScript](https://www.typescriptlang.org/). It exports Options and Components types, which specify the interface of the accepted props and components.\n\n## Security\n\nUse of `vue-markdown-preview` is secure by default. Overwriting `transformLinkUri` or `transformImageUri` to something insecure will open you up to XSS vectors. Furthermore, the `remarkPlugins`, `rehypePlugins`, and components you use may be insecure.\n\nTo make sure the content is completely safe, even after what plugins do, use [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize). It lets you define your own schema of what is and isn’t allowed.\n\n\n## Development\n\n```bash\nnpm install       # Installation dependencies\nnpm run bootstrap # Install dependencies in sub-packages\n```\n\n```bash\nnpm run build     # Compile package\n# listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch     # Monitor the compiled package `@uivjs/vue-markdown-preview`\nnpm run start     # development mode, listen to compile preview website instance\n```\n\n## Related\n\n- [react-markdown-preview](https://github.com/uiwjs/react-markdown-preview) React component preview markdown text in web browser. \n- [react-markdown](https://www.npmjs.com/package/react-markdown) Markdown component for React.\n\n## License\n\nLicensed under the MIT License.\n",S="@uivjs/vue-markdown-preview",T="1.0.5",I="Markdown component for Vue. The minimal amount of CSS to replicate the GitHub Markdown style.",O="kenny wang <wowohoo@qq.com>",U="./cjs/index.js",H="./esm/index.js",N="MIT",V="https://uivjs.github.io/vue-markdown-preview/",A={type:"git",url:"https://github.com/uivjs/vue-markdown-preview"},G=["cjs","esm","markdown.css"],D={vue:">=3.0.0"},R={vue:"^3.3.4"},z=["vue","vue3","vue-component","vue-markdown","css","markdown","markdown-css","markdown-preview"],E={"@uiw/copy-to-clipboard":"1.0.12","comma-separated-tokens":"^2.0.3","property-information":"^6.3.0","rehype-attr":"2.0.7","rehype-autolink-headings":"6.1.0","rehype-prism-plus":"1.6.3","rehype-raw":"6.1.0","rehype-rewrite":"3.0.4","rehype-slug":"5.0.0","rehype-stringify":"9.0.2","remark-gfm":"3.0.1","remark-parse":"10.0.1","remark-rehype":"10.1.0","space-separated-tokens":"^2.0.2","style-to-object":"^1.0.3",unified:"10.1.1"},B={name:S,version:T,description:I,author:O,main:U,module:H,license:N,homepage:V,repository:A,files:G,peerDependencies:D,devDependencies:R,keywords:z,dependencies:E};var $={href:{type:String,defalut:"",required:!0},size:{type:Number,defalut:80},bgColor:{type:String,defalut:"#151513"},color:{type:String,defalut:"#fff"},position:{type:String,defalut:"right"},fixed:{type:Boolean,defalut:!1},zIndex:[Number,String],bottom:Boolean};const q=h({name:"GihubCorners",props:$,setup(t){return()=>{var{href:o,size:r=80,color:a="#fff",bottom:e,zIndex:n=0,fixed:s=!1,position:p="right",bgColor:d="#151513"}=t,l=p==="left"?{left:0,transform:"scale(-1, 1)"}:{right:0};return e&&(l.bottom=0,l.top="initial",l.transform=p==="left"?"scale(-1, -1)":"scale(1, -1)"),i("a",{class:"github-corner",href:o,"aria-label":"View source on GitHub"},[i("svg",{width:r,height:r,viewBox:"0 0 250 250",style:P({fill:d,color:a,position:s?"fixed":"absolute",border:0,top:0,zIndex:Number(n||0)},l),"aria-hidden":"true"},[i("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},null),i("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},class:"octo-arm"},null),i("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"},null)])])}}});const k=(t,o)=>{const r=t.__vccOpts||t;for(const[a,e]of o)r[a]=e;return r},F={data(){return{message:""}},components:{MarkdownPreview:f}},W={class:"example"};function X(t,o,r,a,e,n){const s=u("markdown-preview");return w(),g("div",W,[b(m("textarea",{"onUpdate:modelValue":o[0]||(o[0]=p=>e.message=p),placeholder:"Please enter the Markdown code!"},null,512),[[y,e.message]]),i(s,{source:e.message,class:"markdown"},null,8,["source"])])}const Z=k(F,[["render",X],["__scopeId","data-v-0e8018e3"]]),K="/vue-markdown-preview/assets/vue-5532db34.svg";const Y=h({data(){return{markdown:L,description:B.description}},components:{"example-base":Z,GithubCorners:q,MarkdownPreview:f}}),v=t=>(x("data-v-7f4ef0d2"),t=t(),C(),t),J=v(()=>m("div",null,[m("img",{src:K,alt:"Vue Markdown Preview"})],-1)),Q=v(()=>m("a",{href:"https://github.com/uivjs/vue-markdown-preview",target:"__blank"},"Vue Markdown Preview",-1));function ee(t,o,r,a,e,n){const s=u("github-corners"),p=u("example-base"),d=u("markdown-preview");return w(),g("div",null,[i(s,{fixed:"",target:"__blank",href:"https://github.com/uivjs/vue-markdown-preview"}),m("header",null,[J,Q,m("p",null,c(t.description),1)]),i(p),i(d,{class:"markdown"},{default:j(()=>[_(c(t.markdown),1)]),_:1})])}const ne=k(Y,[["render",ee],["__scopeId","data-v-7f4ef0d2"]]);M(ne).mount("#app");
