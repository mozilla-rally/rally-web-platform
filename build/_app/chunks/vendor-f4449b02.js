function ue(){}const Gt=t=>t;function ki(t,e){for(const n in e)t[n]=e[n];return t}function oa(t){return t()}function aa(){return Object.create(null)}function Le(t){t.forEach(oa)}function mt(t){return typeof t=="function"}function Ph(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Xn;function ew(t,e){return Xn||(Xn=document.createElement("a")),Xn.href=e,t===Xn.href}function Lh(t){return Object.keys(t).length===0}function ca(t,...e){if(t==null)return ue;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tw(t,e,n){t.$$.on_destroy.push(ca(e,n))}function nw(t,e,n,r){if(t){const i=ua(t,e,n,r);return t[0](i)}}function ua(t,e,n,r){return t[1]&&r?ki(n.ctx.slice(),t[1](r(e))):n.ctx}function rw(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function iw(t,e,n,r,i,s){if(i){const o=ua(e,n,r,s);t.p(o,i)}}function sw(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ow(t){return t==null?"":t}function aw(t){return t&&mt(t.destroy)?t.destroy:ue}const la=typeof window!="undefined";let Yn=la?()=>window.performance.now():()=>Date.now(),Ni=la?t=>requestAnimationFrame(t):ue;const yt=new Set;function ha(t){yt.forEach(e=>{e.c(t)||(yt.delete(e),e.f())}),yt.size!==0&&Ni(ha)}function Jn(t){let e;return yt.size===0&&Ni(ha),{promise:new Promise(n=>{yt.add(e={c:t,f:n})}),abort(){yt.delete(e)}}}let Zn=!1;function Mh(){Zn=!0}function xh(){Zn=!1}function Uh(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function Fh(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const l=e[u];l.claim_order!==void 0&&c.push(l)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,l=(i>0&&e[n[i]].claim_order<=u?i+1:Uh(1,i,d=>e[n[d]].claim_order,u))-1;r[c]=n[l]+1;const h=l+1;n[h]=c,i=Math.max(h,i)}const s=[],o=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const l=u<s.length?s[u]:null;t.insertBefore(o[c],l)}}function Vh(t,e){t.appendChild(e)}function da(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $h(t){const e=fa("style");return jh(da(t),e),e}function jh(t,e){Vh(t.head||t,e)}function Bh(t,e){if(Zn){for(Fh(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function cw(t,e,n){Zn&&!n?Bh(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function qh(t){t.parentNode.removeChild(t)}function uw(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function fa(t){return document.createElement(t)}function Hh(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ri(t){return document.createTextNode(t)}function lw(){return Ri(" ")}function hw(){return Ri("")}function dw(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function fw(t){return function(e){return e.preventDefault(),t.call(this,e)}}function pw(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gw(t,e,n){const r=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function zh(t){return Array.from(t.childNodes)}function Kh(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function pa(t,e,n,r,i=!1){Kh(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function ga(t,e,n,r){return pa(t,i=>i.nodeName===e,i=>{const s=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>i.removeAttribute(o))},()=>r(e))}function mw(t,e,n){return ga(t,e,n,fa)}function yw(t,e,n){return ga(t,e,n,Hh)}function Wh(t,e){return pa(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Ri(e),!0)}function vw(t){return Wh(t," ")}function ww(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _w(t,e){t.value=e==null?"":e}function Ew(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Iw(t,e,n){t.classList[n?"add":"remove"](e)}function ma(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function Tw(t,e=document.body){return Array.from(e.querySelectorAll(t))}const Ci=new Set;let er=0;function Gh(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function tr(t,e,n,r,i,s,o,a=0){const c=16.666/r;let u=`{
`;for(let w=0;w<=1;w+=c){const k=e+(n-e)*s(w);u+=w*100+`%{${o(k,1-k)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Gh(l)}_${a}`,d=da(t);Ci.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=$h(t).sheet),g=d.__svelte_rules||(d.__svelte_rules={});g[h]||(g[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${h} ${r}ms linear ${i}ms 1 both`,er+=1,h}function nr(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),er-=i,er||Qh())}function Qh(){Ni(()=>{er||(Ci.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),Ci.clear())})}let rr;function ir(t){rr=t}function vt(){if(!rr)throw new Error("Function called outside component initialization");return rr}function Sw(t){vt().$$.on_mount.push(t)}function bw(t){vt().$$.after_update.push(t)}function Aw(t){vt().$$.on_destroy.push(t)}function kw(){const t=vt();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=ma(e,n);r.slice().forEach(s=>{s.call(t,i)})}}}function Nw(t,e){vt().$$.context.set(t,e)}function Rw(t){return vt().$$.context.get(t)}function Cw(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Qt=[],ya=[],sr=[],Di=[],Xh=Promise.resolve();let Oi=!1;function Yh(){Oi||(Oi=!0,Xh.then(va))}function wt(t){sr.push(t)}function Dw(t){Di.push(t)}let Pi=!1;const Li=new Set;function va(){if(!Pi){Pi=!0;do{for(let t=0;t<Qt.length;t+=1){const e=Qt[t];ir(e),Jh(e.$$)}for(ir(null),Qt.length=0;ya.length;)ya.pop()();for(let t=0;t<sr.length;t+=1){const e=sr[t];Li.has(e)||(Li.add(e),e())}sr.length=0}while(Qt.length);for(;Di.length;)Di.pop()();Oi=!1,Pi=!1,Li.clear()}}function Jh(t){if(t.fragment!==null){t.update(),Le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(wt)}}let Xt;function Mi(){return Xt||(Xt=Promise.resolve(),Xt.then(()=>{Xt=null})),Xt}function We(t,e,n){t.dispatchEvent(ma(`${e?"intro":"outro"}${n}`))}const or=new Set;let _e;function Ow(){_e={r:0,c:[],p:_e}}function Pw(){_e.r||Le(_e.c),_e=_e.p}function wa(t,e){t&&t.i&&(or.delete(t),t.i(e))}function Zh(t,e,n,r){if(t&&t.o){if(or.has(t))return;or.add(t),_e.c.push(()=>{or.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const xi={duration:0};function Lw(t,e,n){let r=e(t,n),i=!1,s,o,a=0;function c(){s&&nr(t,s)}function u(){const{delay:h=0,duration:d=300,easing:f=Gt,tick:g=ue,css:v}=r||xi;v&&(s=tr(t,0,1,d,h,f,v,a++)),g(0,1);const w=Yn()+h,k=w+d;o&&o.abort(),i=!0,wt(()=>We(t,!0,"start")),o=Jn(F=>{if(i){if(F>=k)return g(1,0),We(t,!0,"end"),c(),i=!1;if(F>=w){const M=f((F-w)/d);g(M,1-M)}}return i})}let l=!1;return{start(){l||(l=!0,nr(t),mt(r)?(r=r(),Mi().then(u)):u())},invalidate(){l=!1},end(){i&&(c(),i=!1)}}}function Mw(t,e,n){let r=e(t,n),i=!0,s;const o=_e;o.r+=1;function a(){const{delay:c=0,duration:u=300,easing:l=Gt,tick:h=ue,css:d}=r||xi;d&&(s=tr(t,1,0,u,c,l,d));const f=Yn()+c,g=f+u;wt(()=>We(t,!1,"start")),Jn(v=>{if(i){if(v>=g)return h(0,1),We(t,!1,"end"),--o.r||Le(o.c),!1;if(v>=f){const w=l((v-f)/u);h(1-w,w)}}return i})}return mt(r)?Mi().then(()=>{r=r(),a()}):a(),{end(c){c&&r.tick&&r.tick(1,0),i&&(s&&nr(t,s),i=!1)}}}function xw(t,e,n,r){let i=e(t,n),s=r?0:1,o=null,a=null,c=null;function u(){c&&nr(t,c)}function l(d,f){const g=d.b-s;return f*=Math.abs(g),{a:s,b:d.b,d:g,duration:f,start:d.start,end:d.start+f,group:d.group}}function h(d){const{delay:f=0,duration:g=300,easing:v=Gt,tick:w=ue,css:k}=i||xi,F={start:Yn()+f,b:d};d||(F.group=_e,_e.r+=1),o||a?a=F:(k&&(u(),c=tr(t,s,d,g,f,v,k)),d&&w(0,1),o=l(F,g),wt(()=>We(t,d,"start")),Jn(M=>{if(a&&M>a.start&&(o=l(a,g),a=null,We(t,o.b,"start"),k&&(u(),c=tr(t,s,o.b,o.duration,0,v,i.css))),o){if(M>=o.end)w(s=o.b,1-s),We(t,o.b,"end"),a||(o.b?u():--o.group.r||Le(o.group.c)),o=null;else if(M>=o.start){const ge=M-o.start;s=o.a+o.d*v(ge/o.duration),w(s,1-s)}}return!!(o||a)}))}return{run(d){mt(i)?Mi().then(()=>{i=i(),h(d)}):h(d)},end(){u(),o=a=null}}}function Uw(t,e){Zh(t,1,1,()=>{e.delete(t.key)})}function Fw(t,e,n,r,i,s,o,a,c,u,l,h){let d=t.length,f=s.length,g=d;const v={};for(;g--;)v[t[g].key]=g;const w=[],k=new Map,F=new Map;for(g=f;g--;){const P=h(i,s,g),ce=n(P);let me=o.get(ce);me?r&&me.p(P,e):(me=u(ce,P),me.c()),k.set(ce,w[g]=me),ce in v&&F.set(ce,Math.abs(g-v[ce]))}const M=new Set,ge=new Set;function Oe(P){wa(P,1),P.m(a,l),o.set(P.key,P),l=P.first,f--}for(;d&&f;){const P=w[f-1],ce=t[d-1],me=P.key,Pe=ce.key;P===ce?(l=P.first,d--,f--):k.has(Pe)?!o.has(me)||M.has(me)?Oe(P):ge.has(Pe)?d--:F.get(me)>F.get(Pe)?(ge.add(me),Oe(P)):(M.add(Pe),d--):(c(ce,o),d--)}for(;d--;){const P=t[d];k.has(P.key)||c(P,o)}for(;f;)Oe(w[f-1]);return w}function Vw(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function $w(t){return typeof t=="object"&&t!==null?t:{}}function jw(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Bw(t){t&&t.c()}function qw(t,e){t&&t.l(e)}function ed(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||wt(()=>{const c=s.map(oa).filter(mt);o?o.push(...c):Le(c),t.$$.on_mount=[]}),a.forEach(wt)}function td(t,e){const n=t.$$;n.fragment!==null&&(Le(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nd(t,e){t.$$.dirty[0]===-1&&(Qt.push(t),Yh(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Hw(t,e,n,r,i,s,o,a=[-1]){const c=rr;ir(t);const u=t.$$={fragment:null,ctx:null,props:s,update:ue,not_equal:i,bound:aa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:aa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=g)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](g),l&&nd(t,h)),d}):[],u.update(),l=!0,Le(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){Mh();const h=zh(e.target);u.fragment&&u.fragment.l(h),h.forEach(qh)}else u.fragment&&u.fragment.c();e.intro&&wa(t.$$.fragment),ed(t,e.target,e.anchor,e.customElement),xh(),va()}ir(c)}class zw{$destroy(){td(this,1),this.$destroy=ue}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Lh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _t=[];function rd(t,e){return{subscribe:_a(t,e).subscribe}}function _a(t,e=ue){let n;const r=new Set;function i(a){if(Ph(t,a)&&(t=a,n)){const c=!_t.length;for(const u of r)u[1](),_t.push(u,t);if(c){for(let u=0;u<_t.length;u+=2)_t[u][0](_t[u+1]);_t.length=0}}}function s(a){i(a(t))}function o(a,c=ue){const u=[a,c];return r.add(u),r.size===1&&(n=e(i)||ue),a(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Kw(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return rd(n,o=>{let a=!1;const c=[];let u=0,l=ue;const h=()=>{if(u)return;l();const f=e(r?c[0]:c,o);s?o(f):l=mt(f)?f:ue},d=i.map((f,g)=>ca(f,v=>{c[g]=v,u&=~(1<<g),a&&h()},()=>{u|=1<<g}));return a=!0,h(),function(){Le(d),l()}})}function id(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ui(t){const e=t-1;return e*e*e+1}function Ww(t,{delay:e=0,duration:n=400,easing:r=Gt}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function Gw(t,{delay:e=0,duration:n=400,easing:r=Ui,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:e,duration:n,easing:r,css:(h,d)=>`
			transform: ${u} translate(${(1-h)*i}px, ${(1-h)*s}px);
			opacity: ${c-l*d}`}}function Qw(t,{delay:e=0,duration:n=400,easing:r=Ui}={}){const i=getComputedStyle(t),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),l=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};height: ${f*o}px;padding-top: ${f*a}px;padding-bottom: ${f*c}px;margin-top: ${f*u}px;margin-bottom: ${f*l}px;border-top-width: ${f*h}px;border-bottom-width: ${f*d}px;`}}function Xw(t,{delay:e=0,duration:n=400,easing:r=Ui,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-i,l=a*(1-s);return{delay:e,duration:n,easing:r,css:(h,d)=>`
			transform: ${c} scale(${1-u*d});
			opacity: ${a-l*d}
		`}}function Yw(t,{delay:e=0,speed:n,duration:r,easing:i=id}={}){let s=t.getTotalLength();const o=getComputedStyle(t);return o.strokeLinecap!=="butt"&&(s+=parseInt(o.strokeWidth)),r===void 0?n===void 0?r=800:r=s/n:typeof r=="function"&&(r=r(s)),{delay:e,duration:r,easing:i,css:(a,c)=>`stroke-dasharray: ${a*s} ${c*s}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},od=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):od(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cd=function(t){try{return ad.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ea(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function Ia(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ta(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ld(){return q().indexOf("Electron/")>=0}function Sa(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hd(){return q().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="FirebaseError";class Et extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=dd,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function fd(t,e){return t.replace(pd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pd=/\{\$([^}]+)}/g;function gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ba(s)&&ba(o)){if(!ar(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ba(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function en(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function md(t,e){const n=new yd(t,e);return n.subscribe.bind(n)}class yd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vd(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fi),i.error===void 0&&(i.error=Fi),i.complete===void 0&&(i.complete=Fi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return t&&t._delegate?t._delegate:t}class It{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ud;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(t){return t===Ge?void 0:t}function Ed(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Td={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Sd=R.INFO,bd={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bd[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vi{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",Aa="0.7.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Vi("@firebase/app"),Rd="@firebase/app-compat",Cd="@firebase/analytics-compat",Dd="@firebase/analytics",Od="@firebase/app-check-compat",Pd="@firebase/app-check",Ld="@firebase/auth",Md="@firebase/auth-compat",xd="@firebase/database",Ud="@firebase/database-compat",Fd="@firebase/functions",Vd="@firebase/functions-compat",$d="@firebase/installations",jd="@firebase/installations-compat",Bd="@firebase/messaging",qd="@firebase/messaging-compat",Hd="@firebase/performance",zd="@firebase/performance-compat",Kd="@firebase/remote-config",Wd="@firebase/remote-config-compat",Gd="@firebase/storage",Qd="@firebase/storage-compat",Xd="@firebase/firestore",Yd="@firebase/firestore-compat",Jd="firebase",Zd="9.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="[DEFAULT]",ef={[$i]:"fire-core",[Rd]:"fire-core-compat",[Dd]:"fire-analytics",[Cd]:"fire-analytics-compat",[Pd]:"fire-app-check",[Od]:"fire-app-check-compat",[Ld]:"fire-auth",[Md]:"fire-auth-compat",[xd]:"fire-rtdb",[Ud]:"fire-rtdb-compat",[Fd]:"fire-fn",[Vd]:"fire-fn-compat",[$d]:"fire-iid",[jd]:"fire-iid-compat",[Bd]:"fire-fcm",[qd]:"fire-fcm-compat",[Hd]:"fire-perf",[zd]:"fire-perf-compat",[Kd]:"fire-rc",[Wd]:"fire-rc-compat",[Gd]:"fire-gcs",[Qd]:"fire-gcs-compat",[Xd]:"fire-fst",[Yd]:"fire-fst-compat","fire-js":"fire-js",[Jd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Map,Bi=new Map;function tf(t,e){try{t.container.addComponent(e)}catch(n){ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tn(t){const e=t.name;if(Bi.has(e))return ji.debug(`There were multiple attempts to register component ${e}.`),!1;Bi.set(e,t);for(const n of cr.values())tf(n,t);return!0}function qi(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ur=new Yt("app","Firebase",nf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=Zd;function Jw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ka,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ur.create("bad-app-name",{appName:String(r)});const i=cr.get(r);if(i){if(ar(t,i.options)&&ar(n,i.config))return i;throw ur.create("duplicate-app",{appName:r})}const s=new Id(r);for(const a of Bi.values())s.addComponent(a);const o=new rf(t,n,s);return cr.set(r,o),o}function Na(t=ka){const e=cr.get(t);if(!e)throw ur.create("no-app",{appName:t});return e}function Me(t,e,n){var r;let i=(r=ef[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ji.warn(a.join(" "));return}tn(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){tn(new It("platform-logger",e=>new kd(e),"PRIVATE")),Me($i,Aa,t),Me($i,Aa,"esm2017"),Me("fire-js","")}sf("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Hi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ra(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const of=Ra,Ca=new Yt("auth","Firebase",Ra());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Vi("@firebase/auth");function lr(t,...e){Da.logLevel<=R.ERROR&&Da.error(`Auth (${nn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,...e){throw zi(t,...e)}function Ee(t,...e){return zi(t,...e)}function Oa(t,e,n){const r=Object.assign(Object.assign({},of()),{[e]:n});return new Yt("auth","Firebase",r).create(e,{appName:t.name})}function af(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ye(t,"argument-error"),Oa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ca.create(t,...e)}function I(t,e,...n){if(!t)throw zi(e,...n)}function Se(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function be(t,e){t||Se(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map;function Ae(t){be(t instanceof Function,"Expected a class definition");let e=Pa.get(t);return e?(be(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e){const n=qi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ar(s,e!=null?e:{}))return i;ye(i,"already-initialized")}return n.initialize({options:e})}function uf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lf(){return La()==="http:"||La()==="https:"}function La(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lf()||Ia()||"connection"in navigator)?navigator.onLine:!0}function df(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.shortDelay=e,this.longDelay=n,be(n>e,"Short delay should be less than long delay!"),this.isMobile=Ea()||Ta()}get(){return hf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){be(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new rn(3e4,6e4);function Tt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,r,i={}){return Ma(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jt(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(Gi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Gi.fetch()(xa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ma(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ff),e);try{const i=new gf(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qi(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Oa(t,l,u);ye(t,l)}}catch(i){if(i instanceof Et)throw i;ye(t,"network-request-failed")}}async function sn(t,e,n,r,i={}){const s=await St(t,e,n,r,i);return"mfaPendingCredential"in s&&ye(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xa(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wi(t.config,i):`${t.config.apiScheme}://${i}`}class gf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ee(this.auth,"timeout")),pf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ee(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function yf(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vf(t,e=!1){const n=V(t),r=await n.getIdToken(e),i=Yi(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:on(Xi(i.auth_time)),issuedAtTime:on(Xi(i.iat)),expirationTime:on(Xi(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xi(t){return Number(t)*1e3}function Yi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const i=cd(n);return i?JSON.parse(i):(lr("Failed to decode base64 JWT payload"),null)}catch(i){return lr("Caught error parsing JWT payload as JSON",i),null}}function wf(t){const e=Yi(t);return I(e,"internal-error"),I(typeof e.exp!="undefined","internal-error"),I(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&_f(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _f({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bt(t,yf(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?Sf(s.providerUserInfo):[],a=Tf(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ua(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function If(t){const e=V(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tf(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sf(t){return t.map(e=>{var{providerId:n}=e,r=Hi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(t,e){const n=await Ma(t,{},()=>{const r=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xa(t,i,"/v1/token",`key=${s}`);return Gi.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken!="undefined","internal-error"),I(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bf(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new an;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return Se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){I(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qe{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ef(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bt(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vf(this,e)}reload(){return If(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bt(this,mf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:ge,isAnonymous:Oe,providerData:P,stsTokenManager:ce}=n;I(M&&ce,e,"internal-error");const me=an.fromJSON(this.name,ce);I(typeof M=="string",e,"internal-error"),xe(h,e.name),xe(d,e.name),I(typeof ge=="boolean",e,"internal-error"),I(typeof Oe=="boolean",e,"internal-error"),xe(f,e.name),xe(g,e.name),xe(v,e.name),xe(w,e.name),xe(k,e.name),xe(F,e.name);const Pe=new Qe({uid:M,auth:e,email:d,emailVerified:ge,displayName:h,isAnonymous:Oe,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:me,createdAt:k,lastLoginAt:F});return P&&Array.isArray(P)&&(Pe.providerData=P.map(Oh=>Object.assign({},Oh))),w&&(Pe._redirectEventId=w),Pe}static async _fromIdTokenResponse(e,n,r=!1){const i=new an;i.updateFromServerResponse(n);const s=new Qe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hr(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fa.type="NONE";const Va=Fa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class At{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dr(this.userKey,i.apiKey,s),this.fullPersistenceKey=dr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new At(Ae(Va),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ae(Va);const o=dr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Qe._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new At(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new At(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(za(e))return"Blackberry";if(Ka(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||Ba(e))&&!e.includes("edge/"))return"Chrome";if(Ha(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ja(t=q()){return/firefox\//i.test(t)}function Ji(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ba(t=q()){return/crios\//i.test(t)}function qa(t=q()){return/iemobile/i.test(t)}function Ha(t=q()){return/android/i.test(t)}function za(t=q()){return/blackberry/i.test(t)}function Ka(t=q()){return/webos/i.test(t)}function fr(t=q()){return/iphone|ipad|ipod/i.test(t)}function Af(t=q()){var e;return fr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function kf(){return Sa()&&document.documentMode===10}function Wa(t=q()){return fr(t)||Ha(t)||Ka(t)||za(t)||/windows phone/i.test(t)||qa(t)}function Nf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t,e=[]){let n;switch(t){case"Browser":n=$a(q());break;case"Worker":n=`${$a(q())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ca,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;this._deleted||(this.persistenceManager=await At.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=df()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ga(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function cn(t){return V(t)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Se("not implemented")}_getIdTokenResponse(e){return Se("not implemented")}_linkToIdToken(e,n){return Se("not implemented")}_getReauthenticationResolver(e){return Se("not implemented")}}async function Xa(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(t,e){return sn(t,"POST","/v1/accounts:signInWithPassword",Tt(t,e))}async function Ya(t,e){return St(t,"POST","/v1/accounts:sendOobCode",Tt(t,e))}async function Df(t,e){return Ya(t,e)}async function Of(t,e){return Ya(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(t,e){return sn(t,"POST","/v1/accounts:signInWithEmailLink",Tt(t,e))}async function Lf(t,e){return sn(t,"POST","/v1/accounts:signInWithEmailLink",Tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Zi{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new un(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new un(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Cf(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pf(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Xa(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lf(e,{idToken:n,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return sn(t,"POST","/v1/accounts:signInWithIdp",Tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="http://localhost";class Xe extends Zi{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hi(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xe(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}buildRequest(){const e={requestUri:Mf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uf(t){const e=Zt(en(t)).link,n=e?Zt(en(e)).deep_link_id:null,r=Zt(en(t)).deep_link_id;return(r?Zt(en(r)).link:null)||r||n||e||t}class es{constructor(e){var n,r,i,s,o,a;const c=Zt(en(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=xf((i=c.mode)!==null&&i!==void 0?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Uf(e);try{return new es(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,n){return un._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=es.parseLink(n);return I(r,"argument-error"),un._fromEmailAndCode(e,r.code,r.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ts{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends ln{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends ln{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Xe._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fe.credential(n,r)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends ln{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends ln{constructor(){super("twitter.com")}static credential(e,n){return Xe._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $e.credential(n,r)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(t,e){return sn(t,"POST","/v1/accounts:signUp",Tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qe._fromIdTokenResponse(e,r,i),o=Ja(r);return new Ye({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ja(r);return new Ye({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ja(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Et{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pr(e,n,r,i)}}function Za(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,s,e,r):s})}async function Vf(t,e,n=!1){const r=await bt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ye._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await bt(t,Za(r,i,e,t),n);I(s.idToken,r,"internal-error");const o=Yi(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(t.uid===a,r,"user-mismatch"),Ye._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t,e,n=!1){const r="signIn",i=await Za(t,r,e),s=await Ye._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $f(t,e){return tc(cn(t),e)}async function Zw(t,e){return ec(V(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(t,e,n){const r=V(t),i={requestType:"PASSWORD_RESET",email:e};n&&nc(r,i,n),await Of(r,i)}async function t_(t,e,n){const r=cn(t),i=await Ff(r,{returnSecureToken:!0,email:e,password:n}),s=await Ye._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function n_(t,e,n){return $f(V(t),Nt.credential(e,n))}async function r_(t,e){const n=V(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&nc(n.auth,i,e);const{email:s}=await Df(n.auth,i);s!==t.email&&await t.reload()}function i_(t,e){return rc(V(t),e,null)}function s_(t,e){return rc(V(t),null,e)}async function rc(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await bt(t,Xa(r,s));await t._updateTokensIfNecessary(o,!0)}function o_(t,e,n,r){return V(t).onAuthStateChanged(e,n,r)}function a_(t){return V(t).signOut()}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(){const t=q();return Ji(t)||fr(t)}const Bf=1e3,qf=10;class sc extends ic{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jf()&&Nf(),this.fallbackToPolling=Wa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kf()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qf):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sc.type="LOCAL";const Hf=sc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oc.type="SESSION";const ac=oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await zf(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ns("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function Wf(t){Ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){return typeof Ie().WorkerGlobalScope!="undefined"&&typeof Ie().importScripts=="function"}async function Gf(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xf(){return cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firebaseLocalStorageDb",Yf=1,yr="firebaseLocalStorage",lc="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Jf(){const t=indexedDB.deleteDatabase(uc);return new hn(t).toPromise()}function rs(){const t=indexedDB.open(uc,Yf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:lc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await Jf(),e(await rs()))})})}async function hc(t,e,n){const r=vr(t,!0).put({[lc]:e,value:n});return new hn(r).toPromise()}async function Zf(t,e){const n=vr(t,!1).get(e),r=await new hn(n).toPromise();return r===void 0?null:r.value}function dc(t,e){const n=vr(t,!0).delete(e);return new hn(n).toPromise()}const ep=800,tp=3;class fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mr._getInstance(Xf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gf(),!this.activeServiceWorker)return;this.sender=new Kf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await hc(e,gr,"1"),await dc(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zf(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vr(i,!1).getAll();return new hn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ep)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fc.type="LOCAL";const np=fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ip(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ee("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rp().appendChild(r)})}function sp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new rn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e){return e?Ae(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Zi{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function op(t){return tc(t.auth,new is(t),t.bypassAuthState)}function ap(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),ec(n,new is(t),t.bypassAuthState)}async function cp(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Vf(n,new is(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return op;case"linkViaPopup":case"linkViaRedirect":return cp;case"reauthViaPopup":case"reauthViaRedirect":return ap;default:ye(this.auth,"internal-error")}}resolve(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new rn(2e3,1e4);async function c_(t,e,n){const r=cn(t);af(t,e,ts);const i=pc(r,n);return new Je(r,"signInViaPopup",e,i).executeNotNull()}class Je extends gc{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){be(this.filter.length===1,"Popup operations only handle one event");const e=ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,up.get())};e()}}Je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="pendingRedirect",ss=new Map;class hp extends gc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ss.get(this.auth._key());if(!e){try{const r=await dp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dp(t,e){const n=pp(e),r=fp(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fp(t){return Ae(t._redirectPersistence)}function pp(t){return dr(lp,t.config.apiKey,t.name)}async function gp(t,e,n=!1){const r=cn(t),i=pc(r,e),o=await new hp(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=10*60*1e3;class yp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ee(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mp&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e={}){return St(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ep=/^https?/;async function Ip(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wp(t);for(const n of e)try{if(Tp(n))return}catch{}ye(t,"unauthorized-domain")}function Tp(t){const e=Ki(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ep.test(n))return!1;if(_p.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new rn(3e4,6e4);function vc(){const t=Ie().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bp(t){return new Promise((e,n)=>{var r,i,s;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),n(Ee(t,"network-request-failed"))},timeout:Sp.get()})}if((i=(r=Ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ie().gapi)===null||s===void 0?void 0:s.load)o();else{const a=sp("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(Ee(t,"network-request-failed"))},ip(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw wr=null,e})}let wr=null;function Ap(t){return wr=wr||bp(t),wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new rn(5e3,15e3),Np="__/auth/iframe",Rp="emulator/auth/iframe",Cp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true"},Dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Op(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wi(e,Rp):`https://${t.config.authDomain}/${Np}`,r={apiKey:e.apiKey,appName:t.name,v:nn},i=Dp.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jt(r).slice(1)}`}async function Pp(t){const e=await Ap(t),n=Ie().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:Op(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ee(t,"network-request-failed"),a=Ie().setTimeout(()=>{s(o)},kp.get());function c(){Ie().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mp=500,xp=600,Up="_blank",Fp="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vp(t,e,n,r=Mp,i=xp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=q().toLowerCase();n&&(a=Ba(u)?Up:n),ja(u)&&(e=e||Fp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Af(u)&&a!=="_self")return $p(e||"",a),new wc(null);const h=window.open(e||"",a,l);I(h,t,"popup-blocked");try{h.focus()}catch{}return new wc(h)}function $p(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="__/auth/handler",Bp="emulator/auth/handler";function _c(t,e,n,r,i,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nn,eventId:i};if(e instanceof ts){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof ln){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${qp(t)}?${Jt(a).slice(1)}`}function qp({config:t}){return t.emulator?Wi(t,Bp):`https://${t.authDomain}/${jp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="webStorageSupport";class Hp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ac,this._completeRedirectFn=gp}async _openPopup(e,n,r,i){var s;be((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_c(e,n,r,Ki(),i);return Vp(e,o,ns())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Wf(_c(e,n,r,Ki(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(be(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Pp(e),r=new yp(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(os,{type:os},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[os];o!==void 0&&n(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ip(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wa()||Ji()||fr()}}const zp=Hp;var Ec="@firebase/auth",Ic="0.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gp(t){tn(new It("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),I(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ga(t)},c=new Rf(o,a);return uf(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tn(new It("auth-internal",e=>{const n=cn(e.getProvider("auth").getImmediate());return(r=>new Kp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(Ec,Ic,Wp(t)),Me(Ec,Ic,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t=Na()){const e=qi(t,"auth");return e.isInitialized()?e.getImmediate():cf(t,{popupRedirectResolver:zp,persistence:[np,Hf,ac]})}Gp("Browser");var Qp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,as=as||{},T=Qp||self;function _r(){}function cs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function dn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xp(t){return Object.prototype.hasOwnProperty.call(t,us)&&t[us]||(t[us]=++Yp)}var us="closure_uid_"+(1e9*Math.random()>>>0),Yp=0;function Jp(t,e,n){return t.call.apply(t.bind,arguments)}function Zp(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Jp:K=Zp,K.apply(null,arguments)}function Er(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function W(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function je(){this.s=this.s,this.o=this.o}var eg=0,tg={};je.prototype.s=!1;je.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),eg!=0)){var t=Xp(this);delete tg[t]}};je.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Sc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ng(t){e:{var e=Wg;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function bc(t){return Array.prototype.concat.apply([],arguments)}function ls(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ir(t){return/^[\s\xa0]*$/.test(t)}var Ac=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function te(t,e){return t.indexOf(e)!=-1}function hs(t,e){return t<e?-1:t>e?1:0}var ne;e:{var kc=T.navigator;if(kc){var Nc=kc.userAgent;if(Nc){ne=Nc;break e}}ne=""}function ds(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Rc(t){const e={};for(const n in t)e[n]=t[n];return e}var Cc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dc(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Cc.length;s++)n=Cc[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fs(t){return fs[" "](t),t}fs[" "]=_r;function rg(t){var e=og;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ig=te(ne,"Opera"),Rt=te(ne,"Trident")||te(ne,"MSIE"),Oc=te(ne,"Edge"),ps=Oc||Rt,Pc=te(ne,"Gecko")&&!(te(ne.toLowerCase(),"webkit")&&!te(ne,"Edge"))&&!(te(ne,"Trident")||te(ne,"MSIE"))&&!te(ne,"Edge"),sg=te(ne.toLowerCase(),"webkit")&&!te(ne,"Edge");function Lc(){var t=T.document;return t?t.documentMode:void 0}var Tr;e:{var gs="",ms=function(){var t=ne;if(Pc)return/rv:([^\);]+)(\)|;)/.exec(t);if(Oc)return/Edge\/([\d\.]+)/.exec(t);if(Rt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sg)return/WebKit\/(\S+)/.exec(t);if(ig)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ms&&(gs=ms?ms[1]:""),Rt){var ys=Lc();if(ys!=null&&ys>parseFloat(gs)){Tr=String(ys);break e}}Tr=gs}var og={};function ag(){return rg(function(){let t=0;const e=Ac(String(Tr)).split("."),n=Ac("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=hs(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||hs(i[2].length==0,s[2].length==0)||hs(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var vs;if(T.document&&Rt){var Mc=Lc();vs=Mc||parseInt(Tr,10)||void 0}else vs=void 0;var cg=vs,ug=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{T.addEventListener("test",_r,e),T.removeEventListener("test",_r,e)}catch{}return t}();function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};function fn(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pc){e:{try{fs(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fn.Z.h.call(this)}}W(fn,Y);var lg={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),hg=0;function dg(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++hg,this.ca=this.fa=!1}function Sr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function br(t){this.src=t,this.g={},this.h=0}br.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_s(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dg(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function ws(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Tc(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _s(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),Is={};function xc(t,e,n,r,i){if(r&&r.once)return Fc(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)xc(t,e[s],n,r,i);return null}return n=As(n),t&&t[pn]?t.N(e,n,dn(r)?!!r.capture:!!r,i):Uc(t,e,n,!1,r,i)}function Uc(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=dn(i)?!!i.capture:!!i,a=Ss(t);if(a||(t[Es]=a=new br(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=fg(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ug||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($c(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fg(){function t(n){return e.call(t.src,t.listener,n)}var e=pg;return t}function Fc(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fc(t,e[s],n,r,i);return null}return n=As(n),t&&t[pn]?t.O(e,n,dn(r)?!!r.capture:!!r,i):Uc(t,e,n,!0,r,i)}function Vc(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Vc(t,e[s],n,r,i);else r=dn(r)?!!r.capture:!!r,n=As(n),t&&t[pn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_s(s,n,r,i),-1<n&&(Sr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ss(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_s(e,n,r,i)),(n=-1<t?e[t]:null)&&Ts(n))}function Ts(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[pn])ws(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($c(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ss(e))?(ws(n,t),n.h==0&&(n.src=null,e[Es]=null)):Sr(t)}}}function $c(t){return t in Is?Is[t]:Is[t]="on"+t}function pg(t,e){if(t.ca)t=!0;else{e=new fn(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ts(t),t=n.call(r,e)}return t}function Ss(t){return t=t[Es],t instanceof br?t:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function As(t){return typeof t=="function"?t:(t[bs]||(t[bs]=function(e){return t.handleEvent(e)}),t[bs])}function H(){je.call(this),this.i=new br(this),this.P=this,this.I=null}W(H,je);H.prototype[pn]=!0;H.prototype.removeEventListener=function(t,e,n,r){Vc(this,t,e,n,r)};function G(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(r,t),Dc(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ar(o,r,!0,e)&&i}if(o=e.g=t,i=Ar(o,r,!0,e)&&i,i=Ar(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ar(o,r,!1,e)&&i}H.prototype.M=function(){if(H.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sr(n[r]);delete t.g[e],t.h--}}this.I=null};H.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};H.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ar(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ws(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ks=T.JSON.stringify;function gg(){var t=Bc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mg{constructor(){this.h=this.g=null}add(e,n){const r=jc.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yg,t=>t.reset());class yg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vg(t){T.setTimeout(()=>{throw t},0)}function Ns(t,e){Rs||wg(),Cs||(Rs(),Cs=!0),Bc.add(t,e)}var Rs;function wg(){var t=T.Promise.resolve(void 0);Rs=function(){t.then(_g)}}var Cs=!1,Bc=new mg;function _g(){for(var t;t=gg();){try{t.h.call(t.g)}catch(n){vg(n)}var e=jc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cs=!1}function kr(t,e){H.call(this),this.h=t||1,this.g=e||T,this.j=K(this.kb,this),this.l=Date.now()}W(kr,H);y=kr.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),G(this,"tick"),this.da&&(Ds(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ds(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){kr.Z.M.call(this),Ds(this),delete this.g};function Os(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:T.setTimeout(t,e||0)}function qc(t){t.g=Os(()=>{t.g=null,t.i&&(t.i=!1,qc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Eg extends je{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qc(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(t){je.call(this),this.h=t,this.g={}}W(gn,je);var Hc=[];function zc(t,e,n,r){Array.isArray(n)||(n&&(Hc[0]=n.toString()),n=Hc);for(var i=0;i<n.length;i++){var s=xc(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Kc(t){ds(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ts(e)},t),t.g={}}gn.prototype.M=function(){gn.Z.M.call(this),Kc(this)};gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nr(){this.g=!0}Nr.prototype.Aa=function(){this.g=!1};function Ig(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Tg(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ct(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bg(t,n)+(r?" "+r:"")})}function Sg(t,e){t.info(function(){return"TIMEOUT: "+e})}Nr.prototype.info=function(){};function bg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ks(n)}catch{return e}}var Ze={},Wc=null;function Rr(){return Wc=Wc||new H}Ze.Ma="serverreachability";function Gc(t){Y.call(this,Ze.Ma,t)}W(Gc,Y);function mn(t){const e=Rr();G(e,new Gc(e,t))}Ze.STAT_EVENT="statevent";function Qc(t,e){Y.call(this,Ze.STAT_EVENT,t),this.stat=e}W(Qc,Y);function re(t){const e=Rr();G(e,new Qc(e,t))}Ze.Na="timingevent";function Xc(t,e){Y.call(this,Ze.Na,t),this.size=e}W(Xc,Y);function yn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){t()},e)}var Cr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ps(){}Ps.prototype.h=null;function Jc(t){return t.h||(t.h=t.i())}function Zc(){}var vn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ls(){Y.call(this,"d")}W(Ls,Y);function Ms(){Y.call(this,"c")}W(Ms,Y);var xs;function Dr(){}W(Dr,Ps);Dr.prototype.g=function(){return new XMLHttpRequest};Dr.prototype.i=function(){return{}};xs=new Dr;function wn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new gn(this),this.P=Ag,t=ps?125:void 0,this.W=new kr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var Ag=45e3,Us={},Or={};y=wn.prototype;y.setTimeout=function(t){this.P=t};function Fs(t,e,n){t.K=1,t.v=Ur(ke(e)),t.s=n,t.U=!0,tu(t,null)}function tu(t,e){t.F=Date.now(),_n(t),t.A=ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),lu(n.h,"t",r),t.C=0,n=t.l.H,t.h=new eu,t.g=Pu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Eg(K(t.Ia,t,t.g),t.O)),zc(t.V,t.g,"readystatechange",t.gb),e=t.H?Rc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mn(1),Ig(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&Ne(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=Ne(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||ps||this.g&&(this.h.h||this.g.ga()||Iu(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?mn(3):mn(2)),Pr(this);var n=this.g.ba();this.N=n;t:if(nu(this)){var r=Iu(this.g);t="";var i=r.length,s=Ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){et(this),En(this);var o="";break t}this.h.i=new T.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Tg(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ir(a)){var u=a;break t}}u=null}if(n=u)Ct(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vs(this,n);else{this.i=!1,this.o=3,re(12),et(this),En(this);break e}}this.U?(ru(this,l,o),ps&&this.i&&l==3&&(zc(this.V,this.W,"tick",this.fb),this.W.start())):(Ct(this.j,this.m,o,null),Vs(this,o)),l==4&&et(this),this.i&&!this.I&&(l==4?Ru(this.l,this):(this.i=!1,_n(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),et(this),En(this)}}}catch{}finally{}};function nu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ru(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=kg(t,n),i==Or){e==4&&(t.o=4,re(14),r=!1),Ct(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Us){t.o=4,re(15),Ct(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ct(t.j,t.m,i,null),Vs(t,i);nu(t)&&i!=Or&&i!=Us&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,re(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xs(e),e.L=!0,re(11))):(Ct(t.j,t.m,n,"[Invalid Chunked Response]"),et(t),En(t))}y.fb=function(){if(this.g){var t=Ne(this.g),e=this.g.ga();this.C<e.length&&(Pr(this),ru(this,t,e),this.i&&t!=4&&_n(this))}};function kg(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Or:(n=Number(e.substring(n,r)),isNaN(n)?Us:(r+=1,r+n>e.length?Or:(e=e.substr(r,n),t.C=r+n,e)))}y.cancel=function(){this.I=!0,et(this)};function _n(t){t.Y=Date.now()+t.P,iu(t,t.P)}function iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yn(K(t.eb,t),e)}function Pr(t){t.B&&(T.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Sg(this.j,this.A),this.K!=2&&(mn(3),re(17)),et(this),this.o=2,En(this)):iu(this,this.Y-t)};function En(t){t.l.G==0||t.I||Ru(t.l,t)}function et(t){Pr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ds(t.W),Kc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vs(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bs(n.i,t))){if(n.I=t.N,!t.J&&Bs(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qr(n),jr(n);else break e;Qs(n),re(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=yn(K(n.ab,n),6e3));if(1>=fu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else rt(n,11)}else if((t.J||n.g==t)&&qr(n),!Ir(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(te(g,"spdy")||te(g,"quic")||te(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(qs(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,x(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ou(r,r.H?r.la:null,r.W),o.J){pu(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Pr(a),_n(a)),r.g=o}else ku(r);0<n.l.length&&Br(n)}else u[0]!="stop"&&u[0]!="close"||rt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rt(n,7):Ws(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}mn(4)}catch{}}function Ng(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(cs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $s(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cs(t)||typeof t=="string")Sc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(cs(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ng(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Dt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Dt)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}y=Dt.prototype;y.R=function(){js(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return js(this),this.g.concat()};function js(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];tt(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],tt(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}y.get=function(t,e){return tt(this.h,t)?this.h[t]:e};y.set=function(t,e){tt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var su=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Rg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof nt){this.g=e!==void 0?e:t.g,Lr(this,t.j),this.s=t.s,Mr(this,t.i),xr(this,t.m),this.l=t.l,e=t.h;var n=new Sn;n.i=e.i,e.g&&(n.g=new Dt(e.g),n.h=e.h),ou(this,n),this.o=t.o}else t&&(n=String(t).match(su))?(this.g=!!e,Lr(this,n[1]||"",!0),this.s=In(n[2]||""),Mr(this,n[3]||"",!0),xr(this,n[4]),this.l=In(n[5]||"",!0),ou(this,n[6]||"",!0),this.o=In(n[7]||"")):(this.g=!!e,this.h=new Sn(null,this.g))}nt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tn(e,au,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tn(e,au,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Tn(n,n.charAt(0)=="/"?Lg:Pg,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tn(n,xg)),t.join("")};function ke(t){return new nt(t)}function Lr(t,e,n){t.j=n?In(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mr(t,e,n){t.i=n?In(e,!0):e}function xr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ou(t,e,n){e instanceof Sn?(t.h=e,Ug(t.h,t.g)):(n||(e=Tn(e,Mg)),t.h=new Sn(e,t.g))}function x(t,e,n){t.h.set(e,n)}function Ur(t){return x(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cg(t){return t instanceof nt?ke(t):new nt(t,void 0)}function Dg(t,e,n,r){var i=new nt(null,void 0);return t&&Lr(i,t),e&&Mr(i,e),n&&xr(i,n),r&&(i.l=r),i}function In(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Og),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Og(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var au=/[#\/\?@]/g,Pg=/[#\?:]/g,Lg=/[#\?]/g,Mg=/[#\?@]/g,xg=/#/g;function Sn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Be(t){t.g||(t.g=new Dt,t.h=0,t.i&&Rg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Sn.prototype;y.add=function(t,e){Be(this),this.i=null,t=Ot(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cu(t,e){Be(t),e=Ot(t,e),tt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,tt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&js(t)))}function uu(t,e){return Be(t),e=Ot(t,e),tt(t.g.h,e)}y.forEach=function(t,e){Be(this),this.g.forEach(function(n,r){Sc(n,function(i){t.call(e,i,r,this)},this)},this)};y.T=function(){Be(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};y.R=function(t){Be(this);var e=[];if(typeof t=="string")uu(this,t)&&(e=bc(e,this.g.get(Ot(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=bc(e,t[n])}return e};y.set=function(t,e){return Be(this),this.i=null,t=Ot(this,t),uu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function lu(t,e,n){cu(t,e),0<n.length&&(t.i=null,t.g.set(Ot(t,e),ls(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ot(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ug(t,e){e&&!t.j&&(Be(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cu(this,r),lu(this,i,n))},t)),t.j=e}var Fg=class{constructor(t,e){this.h=t,this.g=e}};function hu(t){this.l=t||Vg,T.PerformanceNavigationTiming?(t=T.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vg=10;function du(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fu(t){return t.h?1:t.g?t.g.size:0}function Bs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qs(t,e){t.g?t.g.add(e):t.h=e}function pu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ls(t.i)}function Hs(){}Hs.prototype.stringify=function(t){return T.JSON.stringify(t,void 0)};Hs.prototype.parse=function(t){return T.JSON.parse(t,void 0)};function $g(){this.g=new Hs}function jg(t,e,n){const r=n||"";try{$s(t,function(i,s){let o=i;dn(i)&&(o=ks(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Bg(t,e){const n=new Nr;if(T.Image){const r=new Image;r.onload=Er(Fr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Er(Fr,n,r,"TestLoadImage: error",!1,e),r.onabort=Er(Fr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Er(Fr,n,r,"TestLoadImage: timeout",!1,e),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bn(t){this.l=t.$b||null,this.j=t.ib||!1}W(bn,Ps);bn.prototype.g=function(){return new Vr(this.l,this.j)};bn.prototype.i=function(t){return function(){return t}}({});function Vr(t,e){H.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(Vr,H);var zs=0;y=Vr.prototype;y.open=function(t,e){if(this.readyState!=zs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kn(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||T).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=zs};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function mu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):kn(this),this.readyState==3&&mu(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,An(this))};y.Ta=function(t){this.g&&(this.response=t,An(this))};y.ha=function(){this.g&&An(this)};function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kn(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qg=T.JSON.parse;function $(t){H.call(this),this.headers=new Dt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yu,this.K=this.L=!1}W($,H);var yu="",Hg=/^https?$/i,zg=["POST","PUT"];y=$.prototype;y.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xs.g(),this.C=this.u?Jc(this.u):Jc(xs),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vu(this,s);return}t=n||"";const i=new Dt(this.headers);r&&$s(r,function(s,o){i.set(o,s)}),r=ng(i.T()),n=T.FormData&&t instanceof T.FormData,!(0<=Tc(zg,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Eu(this),0<this.B&&((this.K=Kg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Os(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vu(this,s)}};function Kg(t){return Rt&&ag()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Wg(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof as!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function vu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wu(t),$r(t)}function wu(t){t.D||(t.D=!0,G(t,"complete"),G(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),$r(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$r(this,!0)),$.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?_u(this):this.cb())};y.cb=function(){_u(this)};function _u(t){if(t.h&&typeof as!="undefined"&&(!t.C[1]||Ne(t)!=4||t.ba()!=2)){if(t.v&&Ne(t)==4)Os(t.Fa,0,t);else if(G(t,"readystatechange"),Ne(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(su)[1]||null;if(!i&&T.self&&T.self.location){var s=T.self.location.protocol;i=s.substr(0,s.length-1)}r=!Hg.test(i?i.toLowerCase():"")}n=r}if(n)G(t,"complete"),G(t,"success");else{t.m=6;try{var o=2<Ne(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",wu(t)}}finally{$r(t)}}}}function $r(t,e){if(t.g){Eu(t);const n=t.g,r=t.C[0]?_r:null;t.g=null,t.C=null,e||G(t,"ready");try{n.onreadystatechange=r}catch{}}}function Eu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(T.clearTimeout(t.A),t.A=null)}function Ne(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<Ne(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qg(e)}};function Iu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case yu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gg(t){let e="";return ds(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ks(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Gg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):x(t,e,n))}function Nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tu(t){this.za=0,this.l=[],this.h=new Nr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Nn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Nn("baseRetryDelayMs",5e3,t),this.$a=Nn("retryDelaySeedMs",1e4,t),this.Ya=Nn("forwardChannelMaxRetries",2,t),this.ra=Nn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new hu(t&&t.concurrentRequestLimit),this.Ca=new $g,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=Tu.prototype;y.ma=8;y.G=1;function Ws(t){if(Su(t),t.G==3){var e=t.V++,n=ke(t.F);x(n,"SID",t.J),x(n,"RID",e),x(n,"TYPE","terminate"),Rn(t,n),e=new wn(t,t.h,e,void 0),e.K=2,e.v=Ur(ke(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(e.v.toString(),"")),!n&&T.Image&&(new Image().src=e.v,n=!0),n||(e.g=Pu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),_n(e)}Du(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function jr(t){t.g&&(Xs(t),t.g.cancel(),t.g=null)}function Su(t){jr(t),t.u&&(T.clearTimeout(t.u),t.u=null),qr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&T.clearTimeout(t.m),t.m=null)}function Gs(t,e){t.l.push(new Fg(t.Za++,e)),t.G==3&&Br(t)}function Br(t){du(t.i)||t.m||(t.m=!0,Ns(t.Ha,t),t.C=0)}function Qg(t,e){return fu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=yn(K(t.Ha,t,e),Cu(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new wn(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Rc(s),Dc(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Au(this,i,e),n=ke(this.F),x(n,"RID",t),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Rn(this,n),this.o&&s&&Ks(n,this.o,s),qs(this.i,i),this.Ra&&x(n,"TYPE","init"),this.ja?(x(n,"$req",e),x(n,"SID","null"),i.$=!0,Fs(i,n,null)):Fs(i,n,e),this.G=2}}else this.G==3&&(t?bu(this,t):this.l.length==0||du(this.i)||bu(this))};function bu(t,e){var n;e?n=e.m:n=t.V++;const r=ke(t.F);x(r,"SID",t.J),x(r,"RID",n),x(r,"AID",t.U),Rn(t,r),t.o&&t.s&&Ks(r,t.o,t.s),n=new wn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Au(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),qs(t.i,n),Fs(n,r,e)}function Rn(t,e){t.j&&$s({},function(n,r){x(e,r,n)})}function Au(t,e,n){n=Math.min(t.l.length,n);var r=t.j?K(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{jg(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ku(t){t.g||t.u||(t.Y=1,Ns(t.Ga,t),t.A=0)}function Qs(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=yn(K(t.Ga,t),Cu(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,Nu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=yn(K(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,re(10),jr(this),Nu(this))};function Xs(t){t.B!=null&&(T.clearTimeout(t.B),t.B=null)}function Nu(t){t.g=new wn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ke(t.oa);x(e,"RID","rpc"),x(e,"SID",t.J),x(e,"CI",t.N?"0":"1"),x(e,"AID",t.U),Rn(t,e),x(e,"TYPE","xmlhttp"),t.o&&t.s&&Ks(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ur(ke(e)),n.s=null,n.U=!0,tu(n,t)}y.ab=function(){this.v!=null&&(this.v=null,jr(this),Qs(this),re(19))};function qr(t){t.v!=null&&(T.clearTimeout(t.v),t.v=null)}function Ru(t,e){var n=null;if(t.g==e){qr(t),Xs(t),t.g=null;var r=2}else if(Bs(t.i,e))n=e.D,pu(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Rr(),G(r,new Xc(r,n,e,i)),Br(t)}else ku(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&Qg(t,e)||r==2&&Qs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:rt(t,5);break;case 4:rt(t,10);break;case 3:rt(t,6);break;default:rt(t,2)}}}function Cu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function rt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=K(t.jb,t);n||(n=new nt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Lr(n,"https"),Ur(n)),Bg(n.toString(),r)}else re(2);t.G=0,t.j&&t.j.va(e),Du(t),Su(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),re(2)):(this.h.info("Failed to ping google.com"),re(1))};function Du(t){t.G=0,t.I=-1,t.j&&((gu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ls(t.l),t.l.length=0),t.j.ua())}function Ou(t,e,n){let r=Cg(n);if(r.i!="")e&&Mr(r,e+"."+r.i),xr(r,r.m);else{const i=T.location;r=Dg(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&ds(t.aa,function(i,s){x(r,s,i)}),e=t.D,n=t.sa,e&&n&&x(r,e,n),x(r,"VER",t.ma),Rn(t,r),r}function Pu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $(new bn({ib:!0})):new $(t.qa),e.L=t.H,e}function Lu(){}y=Lu.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function Hr(){if(Rt&&!(10<=Number(cg)))throw Error("Environmental error: no available transport.")}Hr.prototype.g=function(t,e){return new le(t,e)};function le(t,e){H.call(this),this.g=new Tu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ir(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ir(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pt(this)}W(le,H);le.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ns(K(t.hb,t,e))),re(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ou(t,null,t.W),Br(t)};le.prototype.close=function(){Ws(this.g)};le.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Gs(this.g,e)}else this.v?(e={},e.__data__=ks(t),Gs(this.g,e)):Gs(this.g,t)};le.prototype.M=function(){this.g.j=null,delete this.j,Ws(this.g),delete this.g,le.Z.M.call(this)};function Mu(t){Ls.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}W(Mu,Ls);function xu(){Ms.call(this),this.status=1}W(xu,Ms);function Pt(t){this.g=t}W(Pt,Lu);Pt.prototype.xa=function(){G(this.g,"a")};Pt.prototype.wa=function(t){G(this.g,new Mu(t))};Pt.prototype.va=function(t){G(this.g,new xu(t))};Pt.prototype.ua=function(){G(this.g,"b")};Hr.prototype.createWebChannel=Hr.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;Cr.NO_ERROR=0;Cr.TIMEOUT=8;Cr.HTTP_ERROR=6;Yc.COMPLETE="complete";Zc.EventType=vn;vn.OPEN="a";vn.CLOSE="b";vn.ERROR="c";vn.MESSAGE="d";H.prototype.listen=H.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.La;$.prototype.getLastErrorCode=$.prototype.Da;$.prototype.getStatus=$.prototype.ba;$.prototype.getResponseJson=$.prototype.Qa;$.prototype.getResponseText=$.prototype.ga;$.prototype.send=$.prototype.ea;var Xg=function(){return new Hr},Yg=function(){return Rr()},Ys=Cr,Jg=Yc,Zg=Ze,Uu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},em=bn,zr=Zc,tm=$;const Fu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt="9.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Vi("@firebase/firestore");function Vu(){return it.logLevel}function E(t,...e){if(it.logLevel<=R.DEBUG){const n=e.map(Js);it.debug(`Firestore (${Lt}): ${t}`,...n)}}function qe(t,...e){if(it.logLevel<=R.ERROR){const n=e.map(Js);it.error(`Firestore (${Lt}): ${t}`,...n)}}function $u(t,...e){if(it.logLevel<=R.WARN){const n=e.map(Js);it.warn(`Firestore (${Lt}): ${t}`,...n)}}function Js(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Lt}) INTERNAL ASSERTION FAILED: `+t;throw qe(e),new Error(e)}function O(t,e){t||b()}function A(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class rm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class im{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Re,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Re)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(E("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(O(typeof r.accessToken=="string"),new nm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return O(e===null||typeof e=="string"),new se(e)}}class sm{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=se.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class om{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new sm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zs.T=-1;class ju{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=am(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function D(t,e){return t<e?-1:t>e?1:0}function Mt(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new he(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new he(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function st(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class U extends Cn{construct(e,n,r){return new U(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new U(n)}static emptyPath(){return new U([])}}const cm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Cn{construct(e,n,r){return new oe(e,n,r)}static isValidIdentifier(e){return cm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(n)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.fields=e,e.sort(oe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new J(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new J(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function He(t){if(O(!!t),typeof t=="string"){let e=0;const n=um.exec(t);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:j(t.seconds),nanos:j(t.nanos)}}function j(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xt(t){return typeof t=="string"?J.fromBase64String(t):J.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Hu(e)?zu(e):e}function On(t){const e=He(t.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return t==null}function Kr(t){return t===0&&1/t==-1/0}function lm(t){return typeof t=="number"&&Number.isInteger(t)&&!Kr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(U.fromString(e))}static fromName(e){return new S(U.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return U.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new U(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:10:b()}function Te(t,e){const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return On(t).isEqual(On(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=He(r.timestampValue),o=He(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return xt(r.bytesValue).isEqual(xt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return j(r.geoPointValue.latitude)===j(i.geoPointValue.latitude)&&j(r.geoPointValue.longitude)===j(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return j(r.integerValue)===j(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=j(r.doubleValue),o=j(i.doubleValue);return s===o?Kr(s)===Kr(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Mt(t.arrayValue.values||[],e.arrayValue.values||[],Te);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Bu(s)!==Bu(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Te(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Pn(t,e){return(t.values||[]).find(n=>Te(n,e))!==void 0}function Ft(t,e){const n=ot(t),r=ot(e);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=j(i.integerValue||i.doubleValue),a=j(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ku(t.timestampValue,e.timestampValue);case 4:return Ku(On(t),On(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(i,s){const o=xt(i),a=xt(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(j(i.latitude),j(s.latitude));return o!==0?o:D(j(i.longitude),j(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ft(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Ft(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function Ku(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return D(t,e);const n=He(t),r=He(e),i=D(n.seconds,r.seconds);return i!==0?i:D(n.nanos,r.nanos)}function eo(t){return to(t)}function to(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=He(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,S.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=to(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${to(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function no(t){return!!t&&"integerValue"in t}function ro(t){return!!t&&"arrayValue"in t}function Wu(t){return!!t&&"nullValue"in t}function Gu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wr(t){return!!t&&"mapValue"in t}function Ln(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return st(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ln(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ln(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ln(n)}setAll(e){let n=oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ln(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Te(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){st(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new de(Ln(this.value))}}function Qu(t){const e=[];return st(t.fields,(n,r)=>{const i=new oe([n]);if(Wr(r)){const s=Qu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Z(e,0,C.min(),de.empty(),0)}static newFoundDocument(e,n,r){return new Z(e,1,n,r,0)}static newNoDocument(e,n){return new Z(e,2,n,de.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,de.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Z(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function Xu(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hm(t,e,n,r,i,s,o)}function io(t){const e=A(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ut(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Gr(e.startAt)),e.endAt&&(n+="|ub:",n+=Gr(e.endAt)),e.A=n}return e.A}function dm(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${eo(r.value)}`;var r}).join(", ")}]`),Ut(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Gr(t.startAt)),t.endAt&&(e+=", endAt: "+Gr(t.endAt)),`Target(${e})`}function so(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Em(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Te(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zu(t.startAt,e.startAt)&&Zu(t.endAt,e.endAt)}function oo(t){return S.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ae extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new pm(e,n,r):n==="array-contains"?new ym(e,r):n==="in"?new vm(e,r):n==="not-in"?new wm(e,r):n==="array-contains-any"?new _m(e,r):new ae(e,n,r)}static R(e,n,r){return n==="in"?new gm(e,r):new mm(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Ft(n,this.value)):n!==null&&ot(this.value)===ot(n)&&this.P(Ft(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function fm(t){return t.field.canonicalString()+t.op.toString()+eo(t.value)}class pm extends ae{constructor(e,n,r){super(e,n,r),this.key=S.fromName(r.referenceValue)}matches(e){const n=S.comparator(e.key,this.key);return this.P(n)}}class gm extends ae{constructor(e,n){super(e,"in",n),this.keys=Yu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mm extends ae{constructor(e,n){super(e,"not-in",n),this.keys=Yu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>S.fromName(r.referenceValue))}class ym extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ro(n)&&Pn(n.arrayValue,this.value)}}class vm extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pn(this.value.arrayValue,n)}}class wm extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pn(this.value.arrayValue,n)}}class _m extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ro(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pn(this.value.arrayValue,r))}}class ao{constructor(e,n){this.position=e,this.before=n}}function Gr(t){return`${t.before?"b":"a"}:${t.position.map(e=>eo(e)).join(",")}`}class Mn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Em(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ju(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),n.key):r=Ft(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Zu(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Te(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function Im(t,e,n,r,i,s,o,a){return new Qr(t,e,n,r,i,s,o,a)}function Xr(t){return new Qr(t)}function Yr(t){return!Ut(t.limit)&&t.limitType==="F"}function Jr(t){return!Ut(t.limit)&&t.limitType==="L"}function Tm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sm(t){for(const e of t.filters)if(e.v())return e.field;return null}function bm(t){return t.collectionGroup!==null}function xn(t){const e=A(t);if(e.V===null){e.V=[];const n=Sm(e),r=Tm(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Mn(n)),e.V.push(new Mn(oe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Mn(oe.keyField(),s))}}}return e.V}function at(t){const e=A(t);if(!e.S)if(e.limitType==="F")e.S=Xu(e.path,e.collectionGroup,xn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of xn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Mn(s.field,o))}const r=e.endAt?new ao(e.endAt.position,!e.endAt.before):null,i=e.startAt?new ao(e.startAt.position,!e.startAt.before):null;e.S=Xu(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function Am(t,e,n){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zr(t,e){return so(at(t),at(e))&&t.limitType===e.limitType}function el(t){return`${io(at(t))}|lt:${t.limitType}`}function co(t){return`Query(target=${dm(at(t))}; limitType=${t.limitType})`}function ei(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):S.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!Ju(n.startAt,xn(n),r)||n.endAt&&Ju(n.endAt,xn(n),r))}(t,e)}function tl(t){return(e,n)=>{let r=!1;for(const i of xn(t)){const s=km(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function km(t,e,n){const r=t.field.isKeyField()?S.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ft(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kr(e)?"-0":e}}function rl(t){return{integerValue:""+t}}function Nm(t,e){return lm(e)?rl(e):nl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this._=void 0}}function Rm(t,e,n){return t instanceof ni?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Un?sl(t,e):t instanceof Fn?ol(t,e):function(r,i){const s=il(r,i),o=al(s)+al(r.C);return no(s)&&no(r.C)?rl(o):nl(r.N,o)}(t,e)}function Cm(t,e,n){return t instanceof Un?sl(t,e):t instanceof Fn?ol(t,e):n}function il(t,e){return t instanceof ri?no(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ni extends ti{}class Un extends ti{constructor(e){super(),this.elements=e}}function sl(t,e){const n=cl(e);for(const r of t.elements)n.some(i=>Te(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fn extends ti{constructor(e){super(),this.elements=e}}function ol(t,e){let n=cl(e);for(const r of t.elements)n=n.filter(i=>!Te(i,r));return{arrayValue:{values:n}}}class ri extends ti{constructor(e,n){super(),this.N=e,this.C=n}}function al(t){return j(t.integerValue||t.doubleValue)}function cl(t){return ro(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Dm(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Un&&r instanceof Un||n instanceof Fn&&r instanceof Fn?Mt(n.elements,r.elements,Te):n instanceof ri&&r instanceof ri?Te(n.C,r.C):n instanceof ni&&r instanceof ni}(t.transform,e.transform)}class Om{constructor(e,n){this.version=e,this.transformResults=n}}class ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class si{}function Pm(t,e,n){t instanceof oi?function(r,i,s){const o=r.value.clone(),a=dl(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ut?function(r,i,s){if(!ii(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=dl(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(hl(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n){t instanceof oi?function(r,i,s){if(!ii(r.precondition,i))return;const o=r.value.clone(),a=fl(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(ll(i),o).setHasLocalMutations()}(t,e,n):t instanceof ut?function(r,i,s){if(!ii(r.precondition,i))return;const o=fl(r.fieldTransforms,s,i),a=i.data;a.setAll(hl(r)),a.setAll(o),i.convertToFoundDocument(ll(i),a).setHasLocalMutations()}(t,e,n):function(r,i){ii(r.precondition,i)&&i.convertToNoDocument(C.min())}(t,e)}function Lm(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=il(r.transform,i||null);s!=null&&(n==null&&(n=de.empty()),n.set(r.field,s))}return n||null}function ul(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Mt(n,r,(i,s)=>Dm(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ll(t){return t.isFoundDocument()?t.version:C.min()}class oi extends si{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ut extends si{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function hl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dl(t,e,n){const r=new Map;O(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Cm(o,a,n[i]))}return r}function fl(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Rm(s,o,e))}return r}class Mm extends si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class xm extends si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,N;function Fm(t){switch(t){default:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function pl(t){if(t===void 0)return qe("GRPC error has no .code"),p.UNKNOWN;switch(t){case B.OK:return p.OK;case B.CANCELLED:return p.CANCELLED;case B.UNKNOWN:return p.UNKNOWN;case B.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case B.INTERNAL:return p.INTERNAL;case B.UNAVAILABLE:return p.UNAVAILABLE;case B.UNAUTHENTICATED:return p.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case B.NOT_FOUND:return p.NOT_FOUND;case B.ALREADY_EXISTS:return p.ALREADY_EXISTS;case B.PERMISSION_DENIED:return p.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case B.ABORTED:return p.ABORTED;case B.OUT_OF_RANGE:return p.OUT_OF_RANGE;case B.UNIMPLEMENTED:return p.UNIMPLEMENTED;case B.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(N=B||(B={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.comparator=e,this.root=n||Q.EMPTY}insert(e,n){return new ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Q.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Q{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Q.RED,this.left=i!=null?i:Q.EMPTY,this.right=s!=null?s:Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Q(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gl(this.data.getIterator())}getIteratorFrom(e){return new gl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof X)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new X(this.comparator);return n.data=e,n}}class gl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=new ee(S.comparator);function lt(){return Vm}const $m=new ee(S.comparator);function lo(){return $m}const jm=new ee(S.comparator);function Bm(){return jm}const qm=new X(S.comparator);function L(...t){let e=qm;for(const n of t)e=e.add(n);return e}const Hm=new X(D);function ml(){return Hm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Vn.createSynthesizedTargetChangeForCurrentChange(e,n)),new ci(C.min(),r,ml(),lt(),L())}}class Vn{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Vn(J.EMPTY_BYTE_STRING,n,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class yl{constructor(e,n){this.targetId=e,this.O=n}}class vl{constructor(e,n,r=J.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wl{constructor(){this.F=0,this.M=El(),this.L=J.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=L(),n=L(),r=L();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new Vn(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=El()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class zm{constructor(e){this.tt=e,this.et=new Map,this.nt=lt(),this.st=_l(),this.it=new X(D)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(oo(s))if(r===0){const o=new S(s.path);this.ct(n,o,Z.newNoDocument(o,C.min()))}else O(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&oo(a.target)){const c=new S(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,Z.newNoDocument(c,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=L();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new ci(e,n,this.it,this.nt,r);return this.nt=lt(),this.st=_l(),this.it=new X(D),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new wl,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new X(D),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new wl),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function _l(){return new ee(S.comparator)}function El(){return new ee(S.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Gm{constructor(e,n){this.databaseId=e,this.D=n}}function li(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Il(t,e){return t.D?e.toBase64():e.toUint8Array()}function Qm(t,e){return li(t,e.toTimestamp())}function Ce(t){return O(!!t),C.fromTimestamp(function(e){const n=He(e);return new he(n.seconds,n.nanos)}(t))}function ho(t,e){return function(n){return new U(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Tl(t){const e=U.fromString(t);return O(Rl(e)),e}function fo(t,e){return ho(t.databaseId,e.path)}function po(t,e){const n=Tl(e);if(n.get(1)!==t.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new S(Sl(n))}function go(t,e){return ho(t.databaseId,e)}function Xm(t){const e=Tl(t);return e.length===4?U.emptyPath():Sl(e)}function mo(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sl(t){return O(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bl(t,e,n){return{name:fo(t,e),fields:n.value.mapValue.fields}}function Ym(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.D?(O(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:pl(c.code);return new _(u,c.message||"")}(o);n=new vl(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=po(t,r.document.name),s=Ce(r.document.updateTime),o=new de({mapValue:{fields:r.document.fields}}),a=Z.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ui(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=po(t,r.document),s=r.readTime?Ce(r.readTime):C.min(),o=Z.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ui([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=po(t,r.document),s=r.removedTargetIds||[];n=new ui([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Um(i),o=r.targetId;n=new yl(o,s)}}return n}function Jm(t,e){let n;if(e instanceof oi)n={update:bl(t,e.key,e.value)};else if(e instanceof Mm)n={delete:fo(t,e.key)};else if(e instanceof ut)n={update:bl(t,e.key,e.data),updateMask:cy(e.fieldMask)};else{if(!(e instanceof xm))return b();n={verify:fo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ni)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Un)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ri)return{fieldPath:s.field.canonicalString(),increment:o.C};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Qm(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function Zm(t,e){return t&&t.length>0?(O(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ce(r.updateTime):Ce(i);return s.isEqual(C.min())&&(s=Ce(i)),new Om(s,r.transformResults||[])}(n,e))):[]}function ey(t,e){return{documents:[go(t,e.path)]}}function ty(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=go(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=go(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(Gu(l.value))return{unaryFilter:{field:Vt(l.field),op:"IS_NAN"}};if(Wu(l.value))return{unaryFilter:{field:Vt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Gu(l.value))return{unaryFilter:{field:Vt(l.field),op:"IS_NOT_NAN"}};if(Wu(l.value))return{unaryFilter:{field:Vt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(l.field),op:sy(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:Vt(u.field),direction:iy(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.D||Ut(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=kl(e.startAt)),e.endAt&&(n.structuredQuery.endAt=kl(e.endAt)),n}function ny(t){let e=Xm(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){O(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=Al(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Mn($t(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ut(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Nl(n.startAt));let u=null;return n.endAt&&(u=Nl(n.endAt)),Im(e,i,o,s,a,"F",c,u)}function ry(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Al(t){return t?t.unaryFilter!==void 0?[ay(t)]:t.fieldFilter!==void 0?[oy(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Al(e)).reduce((e,n)=>e.concat(n)):b():[]}function kl(t){return{before:t.before,values:t.position}}function Nl(t){const e=!!t.before,n=t.values||[];return new ao(n,e)}function iy(t){return Km[t]}function sy(t){return Wm[t]}function Vt(t){return{fieldPath:t.canonicalString()}}function $t(t){return oe.fromServerFormat(t.fieldPath)}function oy(t){return ae.create($t(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function ay(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$t(t.unaryFilter.field);return ae.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$t(t.unaryFilter.field);return ae.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$t(t.unaryFilter.field);return ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$t(t.unaryFilter.field);return ae.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function cy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const uy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ly{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,r)=>{n(e)})}static reject(e){return new m((n,r)=>{r(e)})}static waitFor(e){return new m((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=m.resolve(!1);for(const r of e)n=n.next(i=>i?m.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function $n(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Pm(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&uo(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&uo(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),L())}isEqual(e){return this.batchId===e.batchId&&Mt(this.mutations,e.mutations,(n,r)=>ul(n,r))&&Mt(this.baseMutations,e.baseMutations,(n,r)=>ul(n,r))}}class yo{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){O(e.mutations.length===r.length);let i=Bm();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yo(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s=C.min(),o=C.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.Wt=e}}function fy(t){const e=ny({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Am(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.Gt=new gy}addToCollectionParentIndex(e,n){return this.Gt.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Gt.getEntries(n))}}class gy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new X(U.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new X(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new jt(0)}static ie(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==uy)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){st(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qu(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.changes=new Bn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:C.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Z.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return S.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):bm(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new S(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=lo();return this.Ht.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(u,l){return new Qr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Dn(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const c of s)for(const u of c.mutations){const l=u.key;let h=i.get(l);h==null&&(h=Z.newInvalidDocument(l),i=i.insert(l,h)),uo(u,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(l))}}))).next(()=>(i.forEach((o,a)=>{ei(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=L();for(const o of n)for(const a of o.mutations)a instanceof ut&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=L(),i=L();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vo(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(C.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(Yr(n)||Jr(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(Vu()<=R.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),co(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new X(tl(e));return n.forEach((i,s)=>{ei(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return Vu()<=R.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",co(n)),this.On.getDocumentsMatchingQuery(e,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new ee(D),this.qn=new Bn(s=>io(s),so),this.Kn=C.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Cl(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function wy(t,e,n,r){return new vy(t,e,n,r)}async function Dl(t,e){const n=A(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new Cl(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=L();for(const d of a){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of c){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function _y(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const v=c.docVersions.get(f);O(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function Ol(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Ey(t,e){const n=A(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(n.ze.removeMatchingKeys(s,u.removedDocuments,l).next(()=>n.ze.addMatchingKeys(s,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(l,f),function(g,v,w){return O(v.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,f,u)&&a.push(n.ze.updateTargetData(s,f))}});let c=lt();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Iy(s,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(C.min())){const u=n.ze.getLastRemoteSnapshotVersion(s).next(l=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,c)).next(()=>c)}).then(s=>(n.Un=i,s))}function Iy(t,e,n,r,i){let s=L();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=lt();return n.forEach((c,u)=>{const l=o.get(c),h=(i==null?void 0:i.get(c))||r;u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):E("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function Ty(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Sy(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new ht(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function wo(t,e,n){const r=A(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$n(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Pl(t,e,n){const r=A(t);let i=C.min(),s=L();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.qn.get(u);return h!==void 0?m.resolve(l.Un.get(h)):l.ze.getTargetData(c,u)}(r,o,at(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:C.min(),n?s:L())).next(a=>({documents:a,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return m.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ce(r.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:fy(r.bundledQuery),readTime:Ce(r.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.Zn=new X(z.ts),this.es=new X(z.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new z(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new z(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new S(new U([])),r=new z(n,e),i=new z(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new S(new U([])),r=new z(n,e),i=new z(n,e+1);let s=L();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new z(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class z{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return S.comparator(e.key,n.key)||D(e.ls,n.ls)}static ns(e,n){return D(e.ls,n.ls)||S.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new X(z.ts)}checkEmpty(e){return m.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new hy(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new z(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return m.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return m.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new z(n,0),i=new z(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new X(D);return n.forEach(i=>{const s=new z(i,0),o=new z(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),m.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;S.isDocumentKey(s)||(s=s.child(""));const o=new z(new S(s),0);let a=new X(D);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),m.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){O(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return m.forEach(n.mutations,i=>{const s=new z(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new z(n,0),i=this.ds.firstAfterOrEqual(r);return m.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,m.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ee(S.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return m.resolve(r?r.document.clone():Z.newInvalidDocument(n))}getEntries(e,n){let r=lt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():Z.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=lt();const s=new S(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||ei(n,c)&&(i=i.insert(c.key,c.clone()))}return m.resolve(i)}Ts(e,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ny(this)}getSize(e){return m.resolve(this.size)}}class Ny extends my{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),m.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.persistence=e,this.Es=new Bn(n=>io(n),so),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Is=0,this.As=new _o,this.targetCount=0,this.Rs=jt.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),m.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new jt(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.ce(n),m.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return m.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),m.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),m.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return m.resolve(r)}containsKey(e,n){return m.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n){this.bs={},this.Le=new Zs(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Ry(this),this.Ht=new py,this.He=function(r,i){return new ky(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new dy(n),this.Je=new by(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Ay(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){E("MemoryPersistence","Starting transaction:",e);const i=new Dy(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return m.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Dy extends ly{constructor(e){super(),this.currentSequenceNumber=e}}class Eo{constructor(e){this.persistence=e,this.Ds=new _o,this.Cs=null}static Ns(e){return new Eo(e)}get xs(){if(this.Cs)return this.Cs;throw b()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),m.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),m.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.xs,r=>{const i=S.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return m.or([()=>m.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Ll{constructor(){this.activeTargetIds=ml()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oy{constructor(){this.yi=new Ll,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Ll,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);E("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(E("RestConnection","Received: ",a),a),a=>{throw $u("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Lt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=Ly[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new tm;a.listenOnce(Jg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ys.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Ys.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(g)>=0?g:p.UNKNOWN}(h.status);o(new _(d,h.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Xg(),s=Yg(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new em({})),this.Ui(o.initMessageHeaders,n),Ea()||Ta()||ld()||Sa()||hd()||Ia()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");E("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new My({vi:f=>{l?E("Connection","Not sending because WebChannel is closed:",f):(u||(E("Connection","Opening WebChannel transport."),c.open(),u=!0),E("Connection","WebChannel sending:",f),c.send(f))},Vi:()=>c.close()}),d=(f,g,v)=>{f.listen(g,w=>{try{v(w)}catch(k){setTimeout(()=>{throw k},0)}})};return d(c,zr.EventType.OPEN,()=>{l||E("Connection","WebChannel transport opened.")}),d(c,zr.EventType.CLOSE,()=>{l||(l=!0,E("Connection","WebChannel transport closed"),h.$i())}),d(c,zr.EventType.ERROR,f=>{l||(l=!0,$u("Connection","WebChannel transport errored:",f),h.$i(new _(p.UNAVAILABLE,"The operation could not be completed")))}),d(c,zr.EventType.MESSAGE,f=>{var g;if(!l){const v=f.data[0];O(!!v);const w=v,k=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(k){E("Connection","WebChannel received error:",k);const F=k.status;let M=function(Oe){const P=B[Oe];if(P!==void 0)return pl(P)}(F),ge=k.message;M===void 0&&(M=p.INTERNAL,ge="Unknown error status: "+F+" with message "+k.message),l=!0,h.$i(new _(M,ge)),c.close()}else E("Connection","WebChannel received:",v),h.Oi(v)}}),d(s,Zg.STAT_EVENT,f=>{f.stat===Uu.PROXY?E("Connection","Detected buffering proxy"):f.stat===Uu.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Io(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return new Gm(t,!0)}class xl{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,i,s,o,a){this.Oe=e,this.er=r,this.nr=i,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new xl(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(i)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uy extends Ul{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s),this.N=i}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=Ym(this.N,e),r=function(i){if(!("targetChange"in i))return C.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?C.min():s.readTime?Ce(s.readTime):C.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=mo(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=oo(a)?{documents:ey(i,a)}:{query:ty(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Il(i,s.resumeToken):s.snapshotVersion.compareTo(C.min())>0&&(o.readTime=li(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=ry(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=mo(this.N),n.removeTarget=e,this.mr(n)}}class Fy extends Ul{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s),this.N=i,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=Zm(e.writeResults,e.commitTime),r=Ce(e.commitTime);return this.listener.Dr(r,n)}return O(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=mo(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Jm(this.N,r))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(i=>this.sr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new _(p.UNKNOWN,i.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(i=>this.sr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new _(p.UNKNOWN,i.toString())})}terminate(){this.kr=!0}}class $y{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(qe(n),this.Mr=!1):E("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{dt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.Wr.add(4),await qn(c),c.Hr.set("Unknown"),c.Wr.delete(4),await di(c)}(this))})}),this.Hr=new $y(r,i)}}async function di(t){if(dt(t))for(const e of t.Gr)await e(!0)}async function qn(t){for(const e of t.Gr)await e(!1)}function Fl(t,e){const n=A(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),bo(n)?So(n):Bt(n).hr()&&To(n,e))}function Vl(t,e){const n=A(t),r=Bt(n);n.Qr.delete(e),r.hr()&&$l(n,e),n.Qr.size===0&&(r.hr()?r.wr():dt(n)&&n.Hr.set("Unknown"))}function To(t,e){t.Jr.Y(e.targetId),Bt(t).br(e)}function $l(t,e){t.Jr.Y(e),Bt(t).Pr(e)}function So(t){t.Jr=new zm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Bt(t).start(),t.Hr.Lr()}function bo(t){return dt(t)&&!Bt(t).ur()&&t.Qr.size>0}function dt(t){return A(t).Wr.size===0}function jl(t){t.Jr=void 0}async function By(t){t.Qr.forEach((e,n)=>{To(t,e)})}async function qy(t,e){jl(t),bo(t)?(t.Hr.qr(e),So(t)):t.Hr.set("Unknown")}async function Hy(t,e,n){if(t.Hr.set("Online"),e instanceof vl&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fi(t,r)}else if(e instanceof ui?t.Jr.rt(e):e instanceof yl?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(C.min()))try{const r=await Ol(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Jr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Qr.get(c);u&&i.Qr.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.Qr.get(a);if(!c)return;i.Qr.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),$l(i,a);const u=new ht(c.target,a,1,c.sequenceNumber);To(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await fi(t,r)}}async function fi(t,e,n){if(!$n(e))throw e;t.Wr.add(1),await qn(t),t.Hr.set("Offline"),n||(n=()=>Ol(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await di(t)})}function Bl(t,e){return e().catch(n=>fi(t,n,e))}async function pi(t){const e=A(t),n=ze(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;zy(e);)try{const i=await Ty(e.localStore,r);if(i===null){e.jr.length===0&&n.wr();break}r=i.batchId,Ky(e,i)}catch(i){await fi(e,i)}ql(e)&&Hl(e)}function zy(t){return dt(t)&&t.jr.length<10}function Ky(t,e){t.jr.push(e);const n=ze(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function ql(t){return dt(t)&&!ze(t).ur()&&t.jr.length>0}function Hl(t){ze(t).start()}async function Wy(t){ze(t).Nr()}async function Gy(t){const e=ze(t);for(const n of t.jr)e.Sr(n.mutations)}async function Qy(t,e,n){const r=t.jr.shift(),i=yo.from(r,e,n);await Bl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pi(t)}async function Xy(t,e){e&&ze(t).Vr&&await async function(n,r){if(i=r.code,Fm(i)&&i!==p.ABORTED){const s=n.jr.shift();ze(n).dr(),await Bl(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await pi(n)}var i}(t,e),ql(t)&&Hl(t)}async function Yy(t,e){const n=A(t);e?(n.Wr.delete(2),await di(n)):e||(n.Wr.add(2),await qn(n),n.Hr.set("Unknown"))}function Bt(t){return t.Yr||(t.Yr=function(e,n,r){const i=A(e);return i.$r(),new Uy(n,i.sr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:By.bind(null,t),Ci:qy.bind(null,t),Rr:Hy.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),bo(t)?So(t):t.Hr.set("Unknown")):(await t.Yr.stop(),jl(t))})),t.Yr}function ze(t){return t.Xr||(t.Xr=function(e,n,r){const i=A(e);return i.$r(),new Fy(n,i.sr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:Wy.bind(null,t),Ci:Xy.bind(null,t),Cr:Gy.bind(null,t),Dr:Qy.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await pi(t)):(await t.Xr.stop(),t.jr.length>0&&(E("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ao(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ko(t,e){if(qe("AsyncQueue",`${e}: ${t}`),$n(t))return new _(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e?(n,r)=>e(n,r)||S.comparator(n.key,r.key):(n,r)=>S.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new qt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.Zr=new ee(S.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):b():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ht{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ht(e,n,qt.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.no=void 0,this.listeners=[]}}class Zy{constructor(){this.queries=new Bn(e=>el(e),Zr),this.onlineState="Unknown",this.so=new Set}}async function No(t,e){const n=A(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Jy),i)try{s.no=await n.onListen(r)}catch(o){const a=ko(o,`Initialization of query '${co(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&Co(n)}async function Ro(t,e){const n=A(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ev(t,e){const n=A(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(i)&&(r=!0);o.no=i}}r&&Co(n)}function tv(t,e,n){const r=A(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Co(t){t.so.forEach(e=>{e.next()})}class Do{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ht(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Ht.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.key=e}}class Wl{constructor(e){this.key=e}}class nv{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=L(),this.mutatedKeys=L(),this.Io=tl(e),this.Ao=new qt(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new zl,i=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Yr(this.query)&&i.size===this.query.limit?i.last():null,u=Jr(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=ei(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),w=!0):this.vo(d,f)||(r.track({type:2,doc:f}),w=!0,(c&&this.Io(f,c)>0||u&&this.Io(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),Yr(this.query)||Jr(this.query))for(;o.size>this.query.limit;){const l=Yr(this.query)?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Ao:o,Po:r,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return f(h)-f(d)}(u.type,l.type)||this.Io(u.doc,l.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,s.length!==0||c?{snapshot:new Ht(this.query,e.Ao,i,s,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new zl,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=L(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new Wl(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new Kl(r))}),n}No(e){this.po=e.Gn,this.Eo=L();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Ht.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class rv{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iv{constructor(e){this.key=e,this.ko=!1}}class sv{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Bn(a=>el(a),Zr),this.Fo=new Map,this.Mo=new Set,this.Lo=new ee(S.comparator),this.Bo=new Map,this.Uo=new _o,this.qo={},this.Ko=new Map,this.jo=jt.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function ov(t,e){const n=mv(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await Sy(n.localStore,at(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await av(n,e,r,a==="current"),n.isPrimaryClient&&Fl(n.remoteStore,o)}return i}async function av(t,e,n,r){t.Wo=(l,h,d)=>async function(f,g,v,w){let k=g.view.bo(v);k.Ln&&(k=await Pl(f.localStore,g.query,!1).then(({documents:ge})=>g.view.bo(ge,k)));const F=w&&w.targetChanges.get(g.targetId),M=g.view.applyChanges(k,f.isPrimaryClient,F);return Zl(f,g.targetId,M.Do),M.snapshot}(t,l,h,d);const i=await Pl(t.localStore,e,!0),s=new nv(e,i.Gn),o=s.bo(i.documents),a=Vn.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Zl(t,n,c.Do);const u=new rv(e,n,s);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function cv(t,e){const n=A(t),r=n.Oo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Zr(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vl(n.remoteStore,r.targetId),Oo(n,r.targetId)}).catch(jn)):(Oo(n,r.targetId),await wo(n.localStore,r.targetId,!0))}async function uv(t,e,n){const r=yv(t);try{const i=await function(s,o){const a=A(s),c=he.now(),u=o.reduce((h,d)=>h.add(d.key),L());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{l=d;const f=[];for(const g of o){const v=Lm(g,l.get(g.key));v!=null&&f.push(new ut(g.key,v,Qu(v.value.mapValue),ct.exists(!0)))}return a.In.addMutationBatch(h,c,f,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.qo[s.currentUser.toKey()];c||(c=new ee(D)),c=c.insert(o,a),s.qo[s.currentUser.toKey()]=c}(r,i.batchId,n),await Hn(r,i.changes),await pi(r.remoteStore)}catch(i){const s=ko(i,"Failed to persist write");n.reject(s)}}async function Gl(t,e){const n=A(t);try{const r=await Ey(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Bo.get(s);o&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ko=!0:i.modifiedDocuments.size>0?O(o.ko):i.removedDocuments.size>0&&(O(o.ko),o.ko=!1))}),await Hn(n,r,e)}catch(r){await jn(r)}}function Ql(t,e,n){const r=A(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=A(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.io(o)&&(c=!0)}),c&&Co(a)}(r.eventManager,e),i.length&&r.$o.Rr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lv(t,e,n){const r=A(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Bo.get(e),s=i&&i.key;if(s){let o=new ee(S.comparator);o=o.insert(s,Z.newNoDocument(s,C.min()));const a=L().add(s),c=new ci(C.min(),new Map,new X(D),o,a);await Gl(r,c),r.Lo=r.Lo.remove(s),r.Bo.delete(e),Po(r)}else await wo(r.localStore,e,!1).then(()=>Oo(r,e,n)).catch(jn)}async function hv(t,e){const n=A(t),r=e.batch.batchId;try{const i=await _y(n.localStore,e);Yl(n,r,null),Xl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hn(n,i)}catch(i){await jn(i)}}async function dv(t,e,n){const r=A(t);try{const i=await function(s,o){const a=A(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(l=>(O(l!==null),u=l.keys(),a.In.removeMutationBatch(c,l))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(r.localStore,e);Yl(r,e,n),Xl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hn(r,i)}catch(i){await jn(i)}}function Xl(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Yl(t,e,n){const r=A(t);let i=r.qo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qo[r.currentUser.toKey()]=i}}function Oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||Jl(t,r)})}function Jl(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Vl(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Po(t))}function Zl(t,e,n){for(const r of n)r instanceof Kl?(t.Uo.addReference(r.key,e),fv(t,r)):r instanceof Wl?(E("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||Jl(t,r.key)):b()}function fv(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(E("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Po(t))}function Po(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new S(U.fromString(e)),r=t.jo.next();t.Bo.set(r,new iv(n)),t.Lo=t.Lo.insert(n,r),Fl(t.remoteStore,new ht(at(Xr(n.path)),r,2,Zs.T))}}async function Hn(t,e,n){const r=A(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=vo.kn(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.$o.Rr(i),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!$n(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Un.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Un=u.Un.insert(h,g)}}}(r.localStore,s))}async function pv(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const r=await Dl(n.localStore,e);n.currentUser=e,function(i,s){i.Ko.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,s))})}),i.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hn(n,r.Wn)}}function gv(t,e){const n=A(t),r=n.Bo.get(e);if(r&&r.ko)return L().add(r.key);{let i=L();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Oo.get(o);i=i.unionWith(a.view.Ro)}return i}}function mv(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lv.bind(null,e),e.$o.Rr=ev.bind(null,e.eventManager),e.$o.Go=tv.bind(null,e.eventManager),e}function yv(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dv.bind(null,e),e}class vv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=hi(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return wy(this.persistence,new yy,e.initialUser,this.N)}Jo(e){return new Cy(Eo.Ns,this.N)}Ho(e){return new Oy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await Yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zy}createDatastore(e){const n=hi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xy(i));var i;return function(s,o,a){return new Vy(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ql(this.syncEngine,a,0),o=Ml.bt()?new Ml:new Py,new jy(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new sv(r,i,s,o,a,c);return u&&(l.Qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);E("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await qn(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=se.UNAUTHENTICATED,this.clientId=ju.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{E("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=ko(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Dl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tv(t);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=A(s);a.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const c=dt(a);a.Wr.add(3),await qn(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await di(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Tv(t){return t.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Ev(t,new vv)),t.offlineComponents}async function eh(t){return t.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await Iv(t,new wv)),t.onlineComponents}function Sv(t){return eh(t).then(e=>e.syncEngine)}async function gi(t){const e=await eh(t),n=e.eventManager;return n.onListen=ov.bind(null,e.syncEngine),n.onUnlisten=cv.bind(null,e.syncEngine),n}function bv(t,e,n={}){const r=new Re;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Lo({next:h=>{s.enqueueAndForget(()=>Ro(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Do(Xr(o.path),u,{includeMetadataChanges:!0,fo:!0});return No(i,l)}(await gi(t),t.asyncQueue,e,n,r)),r.promise}function Av(t,e,n={}){const r=new Re;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Lo({next:h=>{s.enqueueAndForget(()=>Ro(i,l)),h.fromCache&&a.source==="server"?c.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Do(o,u,{includeMetadataChanges:!0,fo:!0});return No(i,l)}(await gi(t),t.asyncQueue,e,n,r)),r.promise}class kv{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nv(t,e,n,r){if(e===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rh(t){if(!S.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ih(t){if(S.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function ve(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mo(t);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sh({}),this._settingsFrozen=!1,e instanceof zn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(r.options.projectId)}(e))}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sh(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new rm;switch(n.type){case"gapi":const r=n.client;return O(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new om(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new _(p.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=th.get(e);n&&(E("ComponentProvider","Removing Datastore"),th.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}}class Kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class Ke extends Kn{constructor(e,n,r){super(e,n,Xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new S(e))}withConverter(e){return new Ke(this.firestore,e,this._path)}}function l_(t,e,...n){if(t=V(t),nh("collection","path",e),t instanceof xo){const r=U.fromString(e,...n);return ih(r),new Ke(t,null,r)}{if(!(t instanceof ie||t instanceof Ke))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return ih(r),new Ke(t.firestore,null,r)}}function h_(t,e,...n){if(t=V(t),arguments.length===1&&(e=ju.I()),nh("doc","path",e),t instanceof xo){const r=U.fromString(e,...n);return rh(r),new ie(t,null,new S(r))}{if(!(t instanceof ie||t instanceof Ke))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return rh(r),new ie(t.firestore,t instanceof Ke?t.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new xl(this,"async_queue_retry"),this.Rc=()=>{const n=Io();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Io();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Io();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new Re;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!$n(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const i=Ao.createAndSchedule(this,e,n,r,s=>this.Vc(s));return this.yc.push(i),i}bc(){this.Tc&&b()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function oh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ft extends xo{constructor(e,n){super(e,n),this.type="firestore",this._queue=new Rv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ah(this),this._firestoreClient.terminate()}}function d_(t=Na()){return qi(t,"firestore").getImmediate()}function mi(t){return t._firestoreClient||ah(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ah(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new kv(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _v(t._credentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(J.fromBase64String(e))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=/^__.*__$/;class Dv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,n,this.fieldTransforms):new oi(e,this.data,n,this.fieldTransforms)}}class ch{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ut(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Vo{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Vo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$c({path:r,Fc:!1});return i.Mc(e),i}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$c({path:r,Fc:!1});return i.xc(),i}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return _i(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(uh(this.kc)&&Cv.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Ov{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||hi(e)}jc(e,n,r,i=!1){return new Vo({kc:e,methodName:n,Kc:r,path:oe.emptyPath(),Fc:!1,qc:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function lh(t){const e=t._freezeSettings(),n=hi(t._databaseId);return new Ov(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pv(t,e,n,r,i,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,i);$o("Data must be an object, but it was:",o,r);const a=hh(r,o);let c,u;if(s.merge)c=new Dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=jo(e,h,n);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fh(l,d)||l.push(d)}c=new Dn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Dv(new de(a),c,u)}class vi extends Uo{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vi}}function Lv(t,e,n,r){const i=t.jc(1,e,n);$o("Data must be an object, but it was:",i,r);const s=[],o=de.empty();st(r,(c,u)=>{const l=Bo(e,c,n);u=V(u);const h=i.Lc(l);if(u instanceof vi)s.push(l);else{const d=wi(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Dn(s);return new ch(o,a,i.fieldTransforms)}function Mv(t,e,n,r,i,s){const o=t.jc(1,e,n),a=[jo(e,r,n)],c=[i];if(s.length%2!=0)throw new _(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(jo(e,s[d])),c.push(s[d+1]);const u=[],l=de.empty();for(let d=a.length-1;d>=0;--d)if(!fh(u,a[d])){const f=a[d];let g=c[d];g=V(g);const v=o.Lc(f);if(g instanceof vi)u.push(f);else{const w=wi(g,v);w!=null&&(u.push(f),l.set(f,w))}}const h=new Dn(u);return new ch(l,h,o.fieldTransforms)}function wi(t,e){if(dh(t=V(t)))return $o("Unsupported field value:",e,t),hh(t,e);if(t instanceof Uo)return function(n,r){if(!uh(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=wi(o,r.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nm(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=he.fromDate(n);return{timestampValue:li(r.N,i)}}if(n instanceof he){const i=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:li(r.N,i)}}if(n instanceof Fo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zt)return{bytesValue:Il(r.N,n._byteString)};if(n instanceof ie){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ho(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${Mo(n)}`)}(t,e)}function hh(t,e){const n={};return qu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):st(t,(r,i)=>{const s=wi(i,e.Oc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof Fo||t instanceof zt||t instanceof ie||t instanceof Uo)}function $o(t,e,n){if(!dh(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Mo(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function jo(t,e,n){if((e=V(e))instanceof yi)return e._internalPath;if(typeof e=="string")return Bo(t,e);throw _i("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const xv=new RegExp("[~\\*/\\[\\]]");function Bo(t,e,n){if(e.search(xv)>=0)throw _i(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yi(...e.split("."))._internalPath}catch{throw _i(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _i(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(p.INVALID_ARGUMENT,a+t+c)}function fh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Uv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Uv extends ph{data(){return super.data()}}function gh(t,e){return typeof e=="string"?Bo(t,e):e instanceof yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mh extends ph{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ei extends mh{data(e={}){return super.data(e)}}class yh{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ei(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ei(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ei(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Wn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Fv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){if(Jr(t)&&t.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{convertValue(e,n="none"){switch(ot(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return st(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Fo(j(e.latitude),j(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(On(e));default:return null}}convertTimestamp(e){const n=He(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=U.fromString(e);O(Rl(r));const i=new zn(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(n)||qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){t=ve(t,ie);const e=ve(t.firestore,ft);return bv(mi(e),t._key).then(n=>_h(e,t,n))}class qo extends Vv{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,n)}}function p_(t){t=ve(t,Kn);const e=ve(t.firestore,ft),n=mi(e),r=new qo(e);return vh(t._query),Av(n,t._query).then(i=>new yh(e,r,t,i))}function g_(t,e,n){t=ve(t,ie);const r=ve(t.firestore,ft),i=$v(t.converter,e,n);return wh(r,[Pv(lh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ct.none())])}function m_(t,e,n,...r){t=ve(t,ie);const i=ve(t.firestore,ft),s=lh(i);let o;return o=typeof(e=V(e))=="string"||e instanceof yi?Mv(s,"updateDoc",t._key,e,n,r):Lv(s,"updateDoc",t._key,e),wh(i,[o.toMutation(t._key,ct.exists(!0))])}function y_(t,...e){var n,r,i;t=V(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||oh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(oh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof ie)u=ve(t.firestore,ft),l=Xr(t._key.path),c={next:h=>{e[o]&&e[o](_h(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ve(t,Kn);u=ve(h.firestore,ft),l=h._query;const d=new qo(u);c={next:f=>{e[o]&&e[o](new yh(u,d,h,f))},error:e[o+1],complete:e[o+2]},vh(t._query)}return function(h,d,f,g){const v=new Lo(g),w=new Do(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>No(await gi(h),w)),()=>{v.ec(),h.asyncQueue.enqueueAndForget(async()=>Ro(await gi(h),w))}}(mi(u),l,a,c)}function wh(t,e){return function(n,r){const i=new Re;return n.asyncQueue.enqueueAndForget(async()=>uv(await Sv(n),r,i)),i.promise}(mi(t),e)}function _h(t,e,n){const r=n.docs.get(e._key),i=new qo(t);return new mh(t,i,e._key,r,new Wn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Lt=n})(nn),tn(new It("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new ft(i,new im(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Me(Fu,"3.2.1",t),Me(Fu,"3.2.1","esm2017")})();function we(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Kt(t){return!!t&&!!t[fe]}function pt(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===Gv}(t)||Array.isArray(t)||!!t[Ch]||!!t.constructor[Ch]||zo(t)||Ko(t))}function Gn(t,e,n){n===void 0&&(n=!1),Wt(t)===0?(n?Object.keys:ia)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Wt(t){var e=t[fe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:zo(t)?2:Ko(t)?3:0}function Ho(t,e){return Wt(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function jv(t,e){return Wt(t)===2?t.get(e):t[e]}function Eh(t,e,n){var r=Wt(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function Bv(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function zo(t){return Kv&&t instanceof Map}function Ko(t){return Wv&&t instanceof Set}function gt(t){return t.o||t.t}function Wo(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Qv(t);delete e[fe];for(var n=ia(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Go(t,e){return e===void 0&&(e=!1),Qo(t)||Kt(t)||!pt(t)||(Wt(t)>1&&(t.set=t.add=t.clear=t.delete=qv),Object.freeze(t),e&&Gn(t,function(n,r){return Go(r,!0)},!0)),t}function qv(){we(2)}function Qo(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function De(t){var e=Xv[t];return e||we(18,t),e}function Ih(){return Qn}function Xo(t,e){e&&(De("Patches"),t.u=[],t.s=[],t.v=e)}function Ii(t){Yo(t),t.p.forEach(Hv),t.p=null}function Yo(t){t===Qn&&(Qn=t.l)}function Th(t){return Qn={p:[],l:Qn,h:t,m:!0,_:0}}function Hv(t){var e=t[fe];e.i===0||e.i===1?e.j():e.O=!0}function Jo(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||De("ES5").S(e,t,r),r?(n[fe].P&&(Ii(e),we(4)),pt(t)&&(t=Ti(e,t),e.l||Si(e,t)),e.u&&De("Patches").M(n[fe],t,e.u,e.s)):t=Ti(e,n,[]),Ii(e),e.u&&e.v(e.u,e.s),t!==Rh?t:void 0}function Ti(t,e,n){if(Qo(e))return e;var r=e[fe];if(!r)return Gn(e,function(s,o){return Sh(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Si(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Wo(r.k):r.o;Gn(r.i===3?new Set(i):i,function(s,o){return Sh(t,r,i,s,o,n)}),Si(t,i,!1),n&&t.u&&De("Patches").R(r,n,t.u,t.s)}return r.o}function Sh(t,e,n,r,i,s){if(Kt(i)){var o=Ti(t,i,s&&e&&e.i!==3&&!Ho(e.D,r)?s.concat(r):void 0);if(Eh(n,r,o),!Kt(o))return;t.m=!1}if(pt(i)&&!Qo(i)){if(!t.h.F&&t._<1)return;Ti(t,i),e&&e.A.l||Si(t,i)}}function Si(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Go(e,n)}function Zo(t,e){var n=t[fe];return(n?gt(n):t)[e]}function bh(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function ea(t){t.P||(t.P=!0,t.l&&ea(t.l))}function ta(t){t.o||(t.o=Wo(t.t))}function na(t,e,n){var r=zo(e)?De("MapSet").N(e,n):Ko(e)?De("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Ih(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},c=a,u=bi;o&&(c=[a],u=Ai);var l=Proxy.revocable(c,u),h=l.revoke,d=l.proxy;return a.k=d,a.j=h,d}(e,n):De("ES5").J(e,n);return(n?n.A:Ih()).p.push(r),r}function zv(t){return Kt(t)||we(22,t),function e(n){if(!pt(n))return n;var r,i=n[fe],s=Wt(n);if(i){if(!i.P&&(i.i<4||!De("ES5").K(i)))return i.t;i.I=!0,r=Ah(n,s),i.I=!1}else r=Ah(n,s);return Gn(r,function(o,a){i&&jv(i.t,o)===a||Eh(r,o,e(a))}),s===3?new Set(r):r}(t)}function Ah(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Wo(t)}var kh,Qn,ra=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Kv=typeof Map!="undefined",Wv=typeof Set!="undefined",Nh=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Rh=ra?Symbol.for("immer-nothing"):((kh={})["immer-nothing"]=!0,kh),Ch=ra?Symbol.for("immer-draftable"):"__$immer_draftable",fe=ra?Symbol.for("immer-state"):"__$immer_state",Gv=""+Object.prototype.constructor,ia=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Qv=Object.getOwnPropertyDescriptors||function(t){var e={};return ia(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Xv={},bi={get:function(t,e){if(e===fe)return t;var n=gt(t);if(!Ho(n,e))return function(i,s,o){var a,c=bh(s,o);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!pt(r)?r:r===Zo(t.t,e)?(ta(t),t.o[e]=na(t.A.h,r,t)):r},has:function(t,e){return e in gt(t)},ownKeys:function(t){return Reflect.ownKeys(gt(t))},set:function(t,e,n){var r=bh(gt(t),e);if(r==null?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Zo(gt(t),e),s=i==null?void 0:i[fe];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(Bv(n,i)&&(n!==void 0||Ho(t.t,e)))return!0;ta(t),ea(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Zo(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,ta(t),ea(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=gt(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){we(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){we(12)}},Ai={};Gn(bi,function(t,e){Ai[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ai.deleteProperty=function(t,e){return bi.deleteProperty.call(this,t[0],e)},Ai.set=function(t,e,n){return bi.set.call(this,t[0],e,n,t[0])};var Yv=function(){function t(n){var r=this;this.g=Nh,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var c=r;return function(f){var g=this;f===void 0&&(f=a);for(var v=arguments.length,w=Array(v>1?v-1:0),k=1;k<v;k++)w[k-1]=arguments[k];return c.produce(f,function(F){var M;return(M=s).call.apply(M,[g,F].concat(w))})}}var u;if(typeof s!="function"&&we(6),o!==void 0&&typeof o!="function"&&we(7),pt(i)){var l=Th(r),h=na(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Ii(l):Yo(l)}return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(f){return Xo(l,o),Jo(f,l)},function(f){throw Ii(l),f}):(Xo(l,o),Jo(u,l))}if(!i||typeof i!="object")return(u=s(i))===Rh?void 0:(u===void 0&&(u=i),r.F&&Go(u,!0),u);we(21,i)},this.produceWithPatches=function(i,s){return typeof i=="function"?function(c){for(var u=arguments.length,l=Array(u>1?u-1:0),h=1;h<u;h++)l[h-1]=arguments[h];return r.produceWithPatches(c,function(d){return i.apply(void 0,[d].concat(l))})}:[r.produce(i,s,function(c,u){o=c,a=u}),o,a];var o,a},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){pt(n)||we(8),Kt(n)&&(n=zv(n));var r=Th(this),i=na(this,n,void 0);return i[fe].C=!0,Yo(r),i},e.finishDraft=function(n,r){var i=n&&n[fe],s=i.A;return Xo(s,r),Jo(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!Nh&&we(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}var o=De("Patches").$;return Kt(n)?o(n,r):this.produce(n,function(a){return o(a,r.slice(i+1))})},t}(),pe=new Yv,v_=pe.produce;pe.produceWithPatches.bind(pe);pe.setAutoFreeze.bind(pe);pe.setUseProxies.bind(pe);pe.applyPatches.bind(pe);pe.createDraft.bind(pe);pe.finishDraft.bind(pe);var Jv="firebase",Zv="9.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(Jv,Zv,"app");function Dh(t){return Object.prototype.toString.call(t)==="[object Date]"}function sa(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,s)=>sa(t[s],i));return i=>r.map(s=>s(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Dh(t)&&Dh(e)){t=t.getTime(),e=e.getTime();const s=e-t;return o=>new Date(t+o*s)}const r=Object.keys(e),i={};return r.forEach(s=>{i[s]=sa(t[s],e[s])}),s=>{const o={};return r.forEach(a=>{o[a]=i[a](s)}),o}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function w_(t,e={}){const n=_a(t);let r,i=t;function s(o,a){if(t==null)return n.set(t=o),Promise.resolve();i=o;let c=r,u=!1,{delay:l=0,duration:h=400,easing:d=Gt,interpolate:f=sa}=ki(ki({},e),a);if(h===0)return c&&(c.abort(),c=null),n.set(t=i),Promise.resolve();const g=Yn()+l;let v;return r=Jn(w=>{if(w<g)return!0;u||(v=f(t,o),typeof h=="function"&&(h=h(t,o)),u=!0),c&&(c.abort(),c=null);const k=w-g;return k>h?(n.set(t=o),!1):(n.set(t=v(d(k/h))),!0)}),r.promise}return{set:s,update:(o,a)=>s(o(i,t),a),subscribe:n.subscribe}}export{w_ as $,Sw as A,ki as B,_a as C,Rw as D,nw as E,iw as F,sw as G,rw as H,ew as I,Bh as J,ue as K,tw as L,wt as M,Lw as N,Gw as O,dw as P,fw as Q,Le as R,zw as S,ya as T,ow as U,Kw as V,xw as W,Xw as X,Hh as Y,yw as Z,Ew as _,zh as a,Ui as a0,Cw as a1,aw as a2,vt as a3,Jw as a4,u_ as a5,d_ as a6,o_ as a7,f_ as a8,Fe as a9,jw as aA,Fw as aB,Uw as aC,Yw as aD,Mw as aE,Ww as aF,Aw as aG,c_ as aa,n_ as ab,r_ as ac,t_ as ad,a_ as ae,e_ as af,s_ as ag,i_ as ah,Nt as ai,Zw as aj,m_ as ak,h_ as al,g_ as am,p_ as an,l_ as ao,y_ as ap,v_ as aq,kw as ar,_w as as,mt as at,Tw as au,Iw as av,uw as aw,gw as ax,Dw as ay,Qw as az,pw as b,mw as c,qh as d,fa as e,cw as f,Wh as g,ww as h,Hw as i,Bw as j,lw as k,hw as l,qw as m,vw as n,ed as o,Vw as p,$w as q,Ow as r,Ph as s,Ri as t,Zh as u,td as v,Pw as w,wa as x,Nw as y,bw as z};
