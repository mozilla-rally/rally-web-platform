var et=Object.defineProperty,st=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var G=(o,t,e)=>t in o?et(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,R=(o,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(o,e,t[e]);if(x)for(var e of x(t))W.call(t,e)&&G(o,e,t[e]);return o},X=(o,t)=>st(o,rt(t));var Y=(o,t)=>{var e={};for(var s in o)J.call(o,s)&&t.indexOf(s)<0&&(e[s]=o[s]);if(o!=null&&x)for(var s of x(o))t.indexOf(s)<0&&W.call(o,s)&&(e[s]=o[s]);return e};import{S as it,i as nt,s as ot,e as at,c as lt,a as ct,d as E,b as V,f as k,t as ut,g as ft,h as ht,j as q,k as dt,l as y,m as N,n as _t,o as S,p as C,q as B,r as U,u as v,v as A,w as I,x as g,y as pt,z as mt,A as gt,B as K,C as M}from"./chunks/vendor-dcea556b.js";import{_ as b}from"./chunks/preload-helper-ec9aa979.js";import{i as wt}from"./chunks/singletons-12a22614.js";function F(o){let t,e,s;const i=[o[2]||{}];var a=o[0][1];function n(r){let l={$$slots:{default:[bt]},$$scope:{ctx:r}};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return a&&(t=new a(n(o))),{c(){t&&q(t.$$.fragment),e=y()},l(r){t&&N(t.$$.fragment,r),e=y()},m(r,l){t&&S(t,r,l),k(r,e,l),s=!0},p(r,l){const c=l&4?C(i,[B(r[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:r}),a!==(a=r[0][1])){if(t){U();const u=t;v(u.$$.fragment,1,0,()=>{A(u,1)}),I()}a?(t=new a(n(r)),q(t.$$.fragment),g(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(r){s||(t&&g(t.$$.fragment,r),s=!0)},o(r){t&&v(t.$$.fragment,r),s=!1},d(r){r&&E(e),t&&A(t,r)}}}function H(o){let t,e,s;const i=[o[3]||{}];var a=o[0][2];function n(r){let l={};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return a&&(t=new a(n())),{c(){t&&q(t.$$.fragment),e=y()},l(r){t&&N(t.$$.fragment,r),e=y()},m(r,l){t&&S(t,r,l),k(r,e,l),s=!0},p(r,l){const c=l&8?C(i,[B(r[3]||{})]):{};if(a!==(a=r[0][2])){if(t){U();const u=t;v(u.$$.fragment,1,0,()=>{A(u,1)}),I()}a?(t=new a(n()),q(t.$$.fragment),g(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(r){s||(t&&g(t.$$.fragment,r),s=!0)},o(r){t&&v(t.$$.fragment,r),s=!1},d(r){r&&E(e),t&&A(t,r)}}}function bt(o){let t,e,s=o[0][2]&&H(o);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,a){s&&s.m(i,a),k(i,t,a),e=!0},p(i,a){i[0][2]?s?(s.p(i,a),a&1&&g(s,1)):(s=H(i),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(U(),v(s,1,1,()=>{s=null}),I())},i(i){e||(g(s),e=!0)},o(i){v(s),e=!1},d(i){s&&s.d(i),i&&E(t)}}}function yt(o){let t,e,s=o[0][1]&&F(o);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,a){s&&s.m(i,a),k(i,t,a),e=!0},p(i,a){i[0][1]?s?(s.p(i,a),a&1&&g(s,1)):(s=F(i),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(U(),v(s,1,1,()=>{s=null}),I())},i(i){e||(g(s),e=!0)},o(i){v(s),e=!1},d(i){s&&s.d(i),i&&E(t)}}}function Q(o){let t,e=o[5]&&Z(o);return{c(){t=at("div"),e&&e.c(),this.h()},l(s){t=lt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var i=ct(t);e&&e.l(i),i.forEach(E),this.h()},h(){V(t,"id","svelte-announcer"),V(t,"aria-live","assertive"),V(t,"aria-atomic","true"),V(t,"class","svelte-b8s5el")},m(s,i){k(s,t,i),e&&e.m(t,null)},p(s,i){s[5]?e?e.p(s,i):(e=Z(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&E(t),e&&e.d()}}}function Z(o){let t;return{c(){t=ut(o[6])},l(e){t=ft(e,o[6])},m(e,s){k(e,t,s)},p(e,s){s&64&&ht(t,e[6])},d(e){e&&E(t)}}}function vt(o){let t,e,s,i;const a=[o[1]||{}];var n=o[0][0];function r(c){let u={$$slots:{default:[yt]},$$scope:{ctx:c}};for(let f=0;f<a.length;f+=1)u=K(u,a[f]);return{props:u}}n&&(t=new n(r(o)));let l=o[4]&&Q(o);return{c(){t&&q(t.$$.fragment),e=dt(),l&&l.c(),s=y()},l(c){t&&N(t.$$.fragment,c),e=_t(c),l&&l.l(c),s=y()},m(c,u){t&&S(t,c,u),k(c,e,u),l&&l.m(c,u),k(c,s,u),i=!0},p(c,[u]){const f=u&2?C(a,[B(c[1]||{})]):{};if(u&525&&(f.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(t){U();const h=t;v(h.$$.fragment,1,0,()=>{A(h,1)}),I()}n?(t=new n(r(c)),q(t.$$.fragment),g(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else n&&t.$set(f);c[4]?l?l.p(c,u):(l=Q(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){i||(t&&g(t.$$.fragment,c),i=!0)},o(c){t&&v(t.$$.fragment,c),i=!1},d(c){t&&A(t,c),c&&E(e),l&&l.d(c),c&&E(s)}}}function Et(o,t,e){let{stores:s}=t,{page:i}=t,{components:a}=t,{props_0:n=null}=t,{props_1:r=null}=t,{props_2:l=null}=t;pt("__svelte__",s),mt(s.page.notify);let c=!1,u=!1,f=null;return gt(()=>{const h=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,f=document.title||"untitled page"))});return e(4,c=!0),h}),o.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,i=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,n=h.props_0),"props_1"in h&&e(2,r=h.props_1),"props_2"in h&&e(3,l=h.props_2)},o.$$.update=()=>{o.$$.dirty&384&&s.page.set(i)},[a,n,r,l,c,u,f,s,i]}class Rt extends it{constructor(t){super();nt(this,t,Et,vt,ot,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const d=[()=>b(()=>import("./pages/__layout.svelte-665cc2ce.js"),["pages/__layout.svelte-665cc2ce.js","assets/pages/__layout.svelte-3dacca36.css","chunks/preload-helper-ec9aa979.js","chunks/vendor-dcea556b.js","chunks/Button-d1228c87.js","assets/Button-2308fb15.css","chunks/ExternalLink-2f454de8.js","chunks/app-store-f8a027ea.js","chunks/survey-schema-481feb4b.js"]),()=>b(()=>import("./error.svelte-dd59b6ad.js"),["error.svelte-dd59b6ad.js","chunks/vendor-dcea556b.js"]),()=>b(()=>import("./pages/index.svelte-64bb2125.js"),["pages/index.svelte-64bb2125.js","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js"]),()=>b(()=>import("./pages/profile/index.svelte-fe6448f2.js"),["pages/profile/index.svelte-fe6448f2.js","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/Content-60255230.js","assets/Content-5b3b745e.css","chunks/survey-schema-481feb4b.js","chunks/Button-d1228c87.js","assets/Button-2308fb15.css"]),()=>b(()=>import("./pages/studies/index.svelte-e82592f7.js"),["pages/studies/index.svelte-e82592f7.js","assets/pages/studies/index.svelte-5e17d2cf.css","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/preload-helper-ec9aa979.js","chunks/Button-d1228c87.js","assets/Button-2308fb15.css","chunks/ExternalLink-2f454de8.js"]),()=>b(()=>import("./pages/welcome/__layout.reset.svelte-33c39d49.js"),["pages/welcome/__layout.reset.svelte-33c39d49.js","assets/pages/welcome/__layout.reset.svelte-3bc7106a.css","chunks/vendor-dcea556b.js","chunks/Layout-37119967.js","assets/Layout-faaa83d0.css","chunks/app-store-f8a027ea.js"]),()=>b(()=>import("./pages/welcome/profile.svelte-71c58e5b.js"),["pages/welcome/profile.svelte-71c58e5b.js","assets/pages/welcome/profile.svelte-187b5aa4.css","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/Content-60255230.js","assets/Content-5b3b745e.css","chunks/survey-schema-481feb4b.js","chunks/CallToActionContainer-22f9f372.js","assets/CallToActionContainer-29f54ab1.css","chunks/Button-d1228c87.js","assets/Button-2308fb15.css"]),()=>b(()=>import("./pages/welcome/terms.svelte-746b8c7c.js"),["pages/welcome/terms.svelte-746b8c7c.js","assets/pages/welcome/terms.svelte-a99216c4.css","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/Content-79d41a44.js","assets/Content-ab4f72b0.css","chunks/Button-d1228c87.js","assets/Button-2308fb15.css","chunks/CallToActionContainer-22f9f372.js","assets/CallToActionContainer-29f54ab1.css"]),()=>b(()=>import("./pages/signup/__layout.reset.svelte-638809f2.js"),["pages/signup/__layout.reset.svelte-638809f2.js","chunks/vendor-dcea556b.js","chunks/Layout-37119967.js","assets/Layout-faaa83d0.css","chunks/app-store-f8a027ea.js"]),()=>b(()=>import("./pages/signup/index.svelte-42dfd7b3.js"),["pages/signup/index.svelte-42dfd7b3.js","assets/pages/signup/index.svelte-57cd5c0b.css","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/Button-d1228c87.js","assets/Button-2308fb15.css","chunks/ExternalLink-2f454de8.js"]),()=>b(()=>import("./pages/terms/index.svelte-f7938e8d.js"),["pages/terms/index.svelte-f7938e8d.js","chunks/vendor-dcea556b.js","chunks/navigation-2ffed81e.js","chunks/singletons-12a22614.js","chunks/Content-79d41a44.js","assets/Content-ab4f72b0.css"])],kt=[[/^\/$/,[d[0],d[2]],[d[1]]],[/^\/profile\/?$/,[d[0],d[3]],[d[1]]],[/^\/studies\/?$/,[d[0],d[4]],[d[1]]],[/^\/welcome\/profile\/?$/,[d[5],d[6]],[]],[/^\/welcome\/terms\/?$/,[d[5],d[7]],[]],[/^\/signup\/?$/,[d[8],d[9]],[]],[/^\/terms\/?$/,[d[0],d[10]],[d[1]]]],$t=[d[0](),d[1]()];function Lt(o){let t=o.baseURI;if(!t){const e=o.getElementsByTagName("base");t=e.length?e[0].href:o.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function tt(o){for(;o&&o.nodeName.toUpperCase()!=="A";)o=o.parentNode;return o}class qt{constructor({base:t,routes:e,trailing_slash:s}){this.base=t,this.routes=e,this.trailing_slash=s}init(t){this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let e;addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{const n=X(R({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(n,document.title,window.location.href)},50)});const s=n=>{const r=tt(n.target);r&&r.href&&r.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(r.href))};let i;const a=n=>{clearTimeout(i),i=setTimeout(()=>{s(n)},20)};addEventListener("touchstart",s),addEventListener("mousemove",a),addEventListener("click",n=>{if(!this.enabled||n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=tt(n.target);if(!r||!r.href)return;const l=typeof r.href=="object"&&r.href.constructor.name==="SVGAnimatedString",c=String(l?r.href.baseVal:r.href);if(c===location.href){location.hash||n.preventDefault();return}const u=(r.getAttribute("rel")||"").split(/\s+/);if(r.hasAttribute("download")||u&&u.includes("external")||(l?r.target.baseVal:r.target))return;const f=new URL(c);if(!this.owns(f))return;const h=r.hasAttribute("sveltekit:noscroll");history.pushState({},"",f.href),this._navigate(f,h?z():null,!1,[],f.hash),n.preventDefault()}),addEventListener("popstate",n=>{if(n.state&&this.enabled){const r=new URL(location.href);this._navigate(r,n.state["sveltekit:scroll"],!1,[])}}),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=decodeURIComponent(t.pathname.slice(this.base.length)||"/"),s=this.routes.filter(([n])=>n.test(e)),i=new URLSearchParams(t.search);return{id:`${e}?${i}`,routes:s,path:e,query:i}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:i=!1,state:a={}}={},n){const r=new URL(t,Lt(document));return this.enabled&&this.owns(r)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(r,e?z():null,i,n,r.hash)):(location.href=r.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,i,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(n.path!=="/"){const l=n.path.endsWith("/");(l&&this.trailing_slash==="never"||!l&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=l?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}this.renderer.notify({path:n.path,query:n.query}),await this.renderer.update(n,i,!1),s||document.body.focus();const r=a&&document.getElementById(a.slice(1));e?scrollTo(e.x,e.y):r?r.scrollIntoView():scrollTo(0,0)}}function St(o){let t=5381,e=o.length;if(typeof o=="string")for(;e;)t=t*33^o.charCodeAt(--e);else for(;e;)t=t*33^o[--e];return(t>>>0).toString(36)}function At(o){const t=o.status&&o.status>=400&&o.status<=599&&!o.redirect;if(o.error||t){const e=o.status;if(!o.error&&t)return{status:e||500,error:new Error};const s=typeof o.error=="string"?new Error(o.error):o.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(o.redirect){if(!o.status||Math.floor(o.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof o.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return o}function jt(o){return o instanceof Error?o:new Error(JSON.stringify(o))}function Tt(o){const t=M(o);let e=!0;function s(){e=!0,t.update(n=>n)}function i(n){e=!1,t.set(n)}function a(n){let r;return t.subscribe(l=>{(r===void 0||e&&l!==r)&&n(r=l)})}return{notify:s,set:i,subscribe:a}}function Ut(o,t){let s=`script[data-type="svelte-data"][data-url="${typeof o=="string"?o:o.url}"]`;t&&typeof t.body=="string"&&(s+=`[data-body="${St(t.body)}"]`);const i=document.querySelector(s);if(i&&i.textContent){const a=JSON.parse(i.textContent),{body:n}=a,r=Y(a,["body"]);return Promise.resolve(new Response(n,r))}return fetch(o,t)}class It{constructor({Root:t,fallback:e,target:s,session:i,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:null,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Tt({}),navigating:M(null),session:M(i)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async r=>{if(this.$session=r,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:i}){const a=[];let n={},r,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,f=await this._load_node({module:await s[c],page:i,context:n,status:u?t:void 0,error:u?e:void 0});if(a.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:i.path,query:i.query}}else f.loaded.context&&(n=R(R({},n),f.loaded.context))}r=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:i,branch:a})}catch(c){if(e)throw c;r=await this._load_error({status:500,error:jt(c),path:i.path,query:i.query})}if(r.redirect){location.href=new URL(r.redirect,location.href).href;return}this._init(r)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s){const i=this.token={};let a=await this._get_navigation_result(t,s);if(i!==this.token)return;if(this.invalid.clear(),a.redirect)if(e.length>10||e.includes(t.path))a=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(a.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(a.redirect,location.href).href;return}if(a.reload?location.reload():this.started?(this.current=a.state,this.root.$set(a.props),this.stores.navigating.set(null),await 0):this._init(a),dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const n=a.state.branch[a.state.branch.length-1];n&&n.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:R({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const i=t.routes[s];if(i.length===1)return{reload:!0,props:{},state:this.current};let a=s+1;for(;a<t.routes.length;){const r=t.routes[a];if(r[0].toString()===i[0].toString())r.length!==1&&r[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:i,path:t.path,query:t.query},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),i={state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(r=>r.module.default)}};for(let r=0;r<s.length;r+=1){const l=s[r].loaded;l&&(i.props[`props_${r}`]=await l.props)}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(i.props.page=t);const a=s[s.length-1],n=a.loaded&&a.loaded.maxage;if(n){const r=`${t.path}?${t.query}`;let l=!1;const c=()=>{this.cache.get(r)===i&&this.cache.delete(r),f(),clearTimeout(u)},u=setTimeout(c,n*1e3),f=this.stores.session.subscribe(()=>{l&&c()});l=!0,this.cache.set(r,i)}return i}async _load_node({status:t,error:e,module:s,page:i,context:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,context:!1,dependencies:[]},loaded:null,context:a},r={};for(const c in i.params)Object.defineProperty(r,c,{get(){return n.uses.params.add(c),i.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:i.host,params:r,get path(){return n.uses.path=!0,i.path},get query(){return n.uses.query=!0,i.query}},get session(){return n.uses.session=!0,l},get context(){return n.uses.context=!0,R({},a)},fetch(h,$){const j=typeof h=="string"?h:h.url,{href:P}=new URL(j,new URL(i.path,document.baseURI));return n.uses.dependencies.push(P),c?fetch(h,$):Ut(h,$)}};e&&(u.status=t,u.error=e);const f=await s.load.call(null,u);if(!f)return;n.loaded=At(f),n.loaded.context&&(n.context=n.loaded.context)}return n}async _load({route:t,path:e,query:s},i){const a=`${e}?${s}`;if(!i){const _=this.cache.get(a);if(_)return _}const[n,r,l,c]=t,u=c?c(n.exec(e)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(u).filter(_=>this.current.page.params[_]!==u[_]),query:s.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},h={host:this.host,path:e,query:s,params:u},$=[];let j={},P=!1,O=200,T;r.forEach(_=>_());t:for(let _=0;_<r.length;_+=1){let p;try{if(!r[_])continue;const w=await r[_](),m=this.current.branch[_];if(!m||w!==m.module||f.path&&m.uses.path||f.params.some(L=>m.uses.params.has(L))||f.query&&m.uses.query||f.session&&m.uses.session||m.uses.dependencies.some(L=>this.invalid.has(L))||P&&m.uses.context){p=await this._load_node({module:w,page:h,context:j});const L=_===r.length-1;if(p&&p.loaded){if(p.loaded.error&&(O=p.loaded.status,T=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.context&&(P=!0)}else if(L&&w.load)return}else p=m}catch(w){O=500,T=w}if(T){for(;_--;)if(l[_]){let w,m,D=_;for(;!(m=$[D]);)D-=1;try{if(w=await this._load_node({status:O,error:T,module:await l[_](),page:h,context:m.context}),w&&w.loaded&&w.loaded.error)continue;$.push(w);break t}catch{continue}}return await this._load_error({status:O,error:T,path:e,query:s})}else p&&p.loaded&&p.loaded.context&&(j=R(R({},j),p.loaded.context)),$.push(p)}return await this._get_navigation_result_from_branch({page:h,branch:$})}async _load_error({status:t,error:e,path:s,query:i}){const a={host:this.host,path:s,query:i,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,context:{}}),r=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,context:n&&n.loaded&&n.loaded.context||{}})];return await this._get_navigation_result_from_branch({page:a,branch:r})}}async function Dt({paths:o,target:t,session:e,host:s,route:i,spa:a,trailing_slash:n,hydrate:r}){const l=i?new qt({base:o.base,routes:kt,trailing_slash:n}):null,c=new It({Root:Rt,fallback:$t,target:t,session:e,host:s});wt(l),r&&await c.start(r),l&&(l.init(c),a&&l.goto(location.href,{replaceState:!0},[])),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Dt as start};
