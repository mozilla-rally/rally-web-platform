function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(r)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(t,e,n){t.$$.on_destroy.push(l(e,n))}function d(t,e,n,r){if(t){const i=f(t,e,n,r);return t[0](i)}}function f(t,e,r,i){return t[1]&&i?n(r.ctx.slice(),t[1](i(e))):r.ctx}function p(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}function g(t,e,n,r,i,s){if(i){const o=f(e,n,r,s);t.p(o,i)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function y(t){return null==t?"":t}function v(e){return e&&o(e.destroy)?e.destroy:t}const w="undefined"!=typeof window;let b=w?()=>window.performance.now():()=>Date.now(),E=w?t=>requestAnimationFrame(t):t;const _=new Set;function I(t){_.forEach((e=>{e.c(t)||(_.delete(e),e.f())})),0!==_.size&&E(I)}function T(t){let e;return 0===_.size&&E(I),{promise:new Promise((n=>{_.add(e={c:t,f:n})})),abort(){_.delete(e)}}}let S=!1;function A(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function k(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function N(t){const e=P("style");return function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(k(t),e),e}function C(t,e){if(S){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const t=e[c].claim_order,s=(i>0&&e[n[i]].claim_order<=t?i+1:A(1,i,(t=>e[n[t]].claim_order),t))-1;r[c]=n[s]+1;const o=s+1;n[o]=c,i=Math.max(o,i)}const s=[],o=[];let a=e.length-1;for(let c=n[i]+1;0!=c;c=r[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const e=u<s.length?s[u]:null;t.insertBefore(o[c],e)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function R(t,e,n){S&&!n?C(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function O(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function x(){return M(" ")}function U(){return M("")}function F(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function V(t){return function(e){return e.preventDefault(),t.call(this,e)}}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e,n){const r=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function q(t){return Array.from(t.childNodes)}function B(t,e,n,r,i=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,i||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,i?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,e,n,r){return B(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const i=t.attributes[r];n[i.name]||e.push(i.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function H(t,e,n){return z(t,e,n,P)}function K(t,e,n){return z(t,e,n,L)}function G(t,e){return B(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>M(e)),!0)}function W(t){return G(t," ")}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Q(t,e){t.value=null==e?"":e}function J(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Y(t,e,n){t.classList[n?"add":"remove"](e)}function Z(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function tt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const et=new Set;let nt,rt=0;function it(t,e,n,r,i,s,o,a=0){const c=16.666/r;let u="{\n";for(let m=0;m<=1;m+=c){const t=e+(n-e)*s(m);u+=100*m+`%{${o(t,1-t)}}\n`}const l=u+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,d=k(t);et.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=N(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,rt+=1,h}function st(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-r.length;i&&(t.style.animation=r.join(", "),rt-=i,rt||E((()=>{rt||(et.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),et.clear())})))}function ot(t){nt=t}function at(){if(!nt)throw new Error("Function called outside component initialization");return nt}function ct(t){at().$$.on_mount.push(t)}function ut(t){at().$$.after_update.push(t)}function lt(t){at().$$.on_destroy.push(t)}function ht(){const t=at();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Z(e,n);r.slice().forEach((e=>{e.call(t,i)}))}}}function dt(t,e){at().$$.context.set(t,e)}function ft(t){return at().$$.context.get(t)}function pt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const gt=[],mt=[],yt=[],vt=[],wt=Promise.resolve();let bt=!1;function Et(t){yt.push(t)}function _t(t){vt.push(t)}let It=!1;const Tt=new Set;function St(){if(!It){It=!0;do{for(let t=0;t<gt.length;t+=1){const e=gt[t];ot(e),At(e.$$)}for(ot(null),gt.length=0;mt.length;)mt.pop()();for(let t=0;t<yt.length;t+=1){const e=yt[t];Tt.has(e)||(Tt.add(e),e())}yt.length=0}while(gt.length);for(;vt.length;)vt.pop()();bt=!1,It=!1,Tt.clear()}}function At(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Et)}}let kt;function Nt(){return kt||(kt=Promise.resolve(),kt.then((()=>{kt=null}))),kt}function Ct(t,e,n){t.dispatchEvent(Z(`${e?"intro":"outro"}${n}`))}const Rt=new Set;let Dt;function Ot(){Dt={r:0,c:[],p:Dt}}function Pt(){Dt.r||s(Dt.c),Dt=Dt.p}function Lt(t,e){t&&t.i&&(Rt.delete(t),t.i(e))}function Mt(t,e,n,r){if(t&&t.o){if(Rt.has(t))return;Rt.add(t),Dt.c.push((()=>{Rt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const xt={duration:0};function Ut(n,r,i){let s,a,c=r(n,i),u=!1,l=0;function h(){s&&st(n,s)}function d(){const{delay:r=0,duration:i=300,easing:o=e,tick:d=t,css:f}=c||xt;f&&(s=it(n,0,1,i,r,o,f,l++)),d(0,1);const p=b()+r,g=p+i;a&&a.abort(),u=!0,Et((()=>Ct(n,!0,"start"))),a=T((t=>{if(u){if(t>=g)return d(1,0),Ct(n,!0,"end"),h(),u=!1;if(t>=p){const e=o((t-p)/i);d(e,1-e)}}return u}))}let f=!1;return{start(){f||(f=!0,st(n),o(c)?(c=c(),Nt().then(d)):d())},invalidate(){f=!1},end(){u&&(h(),u=!1)}}}function Ft(n,r,i){let a,c=r(n,i),u=!0;const l=Dt;function h(){const{delay:r=0,duration:i=300,easing:o=e,tick:h=t,css:d}=c||xt;d&&(a=it(n,1,0,i,r,o,d));const f=b()+r,p=f+i;Et((()=>Ct(n,!1,"start"))),T((t=>{if(u){if(t>=p)return h(0,1),Ct(n,!1,"end"),--l.r||s(l.c),!1;if(t>=f){const e=o((t-f)/i);h(1-e,e)}}return u}))}return l.r+=1,o(c)?Nt().then((()=>{c=c(),h()})):h(),{end(t){t&&c.tick&&c.tick(1,0),u&&(a&&st(n,a),u=!1)}}}function Vt(n,r,i,a){let c=r(n,i),u=a?0:1,l=null,h=null,d=null;function f(){d&&st(n,d)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:i=0,duration:o=300,easing:a=e,tick:g=t,css:m}=c||xt,y={start:b()+i,b:r};r||(y.group=Dt,Dt.r+=1),l||h?h=y:(m&&(f(),d=it(n,u,r,o,i,a,m)),r&&g(0,1),l=p(y,o),Et((()=>Ct(n,r,"start"))),T((t=>{if(h&&t>h.start&&(l=p(h,o),h=null,Ct(n,l.b,"start"),m&&(f(),d=it(n,u,l.b,l.duration,0,a,c.css))),l)if(t>=l.end)g(u=l.b,1-u),Ct(n,l.b,"end"),h||(l.b?f():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;u=l.a+l.d*a(e/l.duration),g(u,1-u)}return!(!l&&!h)})))}return{run(t){o(c)?Nt().then((()=>{c=c(),g(t)})):g(t)},end(){f(),l=h=null}}}function jt(t,e){Mt(t,1,1,(()=>{e.delete(t.key)}))}function $t(t,e,n,r,i,s,o,a,c,u,l,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=h(i,s,p),a=n(t);let c=o.get(a);c?r&&c.p(t,e):(c=u(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,b=new Set;function E(t){Lt(t,1),t.m(a,l),o.set(t.key,t),l=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],r=e.key,i=n.key;e===n?(l=e.first,d--,f--):y.has(i)?!o.has(r)||w.has(r)?E(e):b.has(i)?d--:v.get(r)>v.get(i)?(b.add(r),E(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)E(m[f-1]);return m}function qt(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Bt(t){return"object"==typeof t&&null!==t?t:{}}function zt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Ht(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function Gt(t,e,n,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,n),i||Et((()=>{const e=c.map(r).filter(o);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(Et)}function Wt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){-1===t.$$.dirty[0]&&(gt.push(t),bt||(bt=!0,wt.then(St)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(e,n,r,o,a,c,u,l=[-1]){const h=nt;ot(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:i(),dirty:l,skip_bound:!1,root:n.target||h.$$.root};u&&u(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&Xt(e,t)),n})):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){S=!0;const t=q(n.target);d.fragment&&d.fragment.l(t),t.forEach(D)}else d.fragment&&d.fragment.c();n.intro&&Lt(e.$$.fragment),Gt(e,n.target,n.anchor,n.customElement),S=!1,St()}ot(h)}class Jt{$destroy(){Wt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Yt=[];function Zt(e,n=t){let r;const i=new Set;function s(t){if(a(e,t)&&(e=t,r)){const t=!Yt.length;for(const n of i)n[1](),Yt.push(n,e);if(t){for(let t=0;t<Yt.length;t+=2)Yt[t][0](Yt[t+1]);Yt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||t),o(e),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}function te(e,n,r){const i=!Array.isArray(e),a=i?[e]:e,c=n.length<2;return{subscribe:Zt(r,(e=>{let r=!1;const u=[];let h=0,d=t;const f=()=>{if(h)return;d();const r=n(i?u[0]:u,e);c?e(r):d=o(r)?r:t},p=a.map(((t,e)=>l(t,(t=>{u[e]=t,h&=~(1<<e),r&&f()}),(()=>{h|=1<<e}))));return r=!0,f(),function(){s(p),d()}})).subscribe}}function ee(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ne(t){const e=t-1;return e*e*e+1}function re(t,{delay:n=0,duration:r=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:t=>"opacity: "+t*s}}function ie(t,{delay:e=0,duration:n=400,easing:r=ne,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u="none"===a.transform?"":a.transform,l=c*(1-o);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*e}`}}function se(t,{delay:e=0,duration:n=400,easing:r=ne}={}){const i=getComputedStyle(t),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),l=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*o}px;padding-top: ${t*a}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*l}px;border-top-width: ${t*h}px;border-bottom-width: ${t*d}px;`}}function oe(t,{delay:e=0,duration:n=400,easing:r=ne,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c="none"===o.transform?"":o.transform,u=1-i,l=a*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} scale(${1-u*e});\n\t\t\topacity: ${a-l*e}\n\t\t`}}function ae(t,{delay:e=0,speed:n,duration:r,easing:i=ee}={}){const s=t.getTotalLength();return void 0===r?r=void 0===n?800:s/n:"function"==typeof r&&(r=r(s)),{delay:e,duration:r,easing:i,css:(t,e)=>`stroke-dasharray: ${t*s} ${e*s}`}}function ce(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ue(t){return!!t&&!!t[We]}function le(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Xe}(t)||Array.isArray(t)||!!t[Ge]||!!t.constructor[Ge]||ge(t)||me(t))}function he(t,e,n){void 0===n&&(n=!1),0===de(t)?(n?Object.keys:Qe)(t).forEach((function(r){n&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(n,r){return e(r,n,t)}))}function de(t){var e=t[We];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ge(t)?2:me(t)?3:0}function fe(t,e){return 2===de(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function pe(t,e,n){var r=de(t);2===r?t.set(e,n):3===r?(t.delete(e),t.add(n)):t[e]=n}function ge(t){return Be&&t instanceof Map}function me(t){return ze&&t instanceof Set}function ye(t){return t.o||t.t}function ve(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Je(t);delete e[We];for(var n=Qe(e),r=0;r<n.length;r++){var i=n[r],s=e[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function we(t,e){return void 0===e&&(e=!1),Ee(t)||ue(t)||!le(t)||(de(t)>1&&(t.set=t.add=t.clear=t.delete=be),Object.freeze(t),e&&he(t,(function(t,e){return we(e,!0)}),!0)),t}function be(){ce(2)}function Ee(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function _e(t){var e=Ye[t];return e||ce(18,t),e}function Ie(){return $e}function Te(t,e){e&&(_e("Patches"),t.u=[],t.s=[],t.v=e)}function Se(t){Ae(t),t.p.forEach(Ne),t.p=null}function Ae(t){t===$e&&($e=t.l)}function ke(t){return $e={p:[],l:$e,h:t,m:!0,_:0}}function Ne(t){var e=t[We];0===e.i||1===e.i?e.j():e.O=!0}function Ce(t,e){e._=e.p.length;var n=e.p[0],r=void 0!==t&&t!==n;return e.h.g||_e("ES5").S(e,t,r),r?(n[We].P&&(Se(e),ce(4)),le(t)&&(t=Re(e,t),e.l||Oe(e,t)),e.u&&_e("Patches").M(n[We],t,e.u,e.s)):t=Re(e,n,[]),Se(e),e.u&&e.v(e.u,e.s),t!==Ke?t:void 0}function Re(t,e,n){if(Ee(e))return e;var r=e[We];if(!r)return he(e,(function(i,s){return De(t,r,e,i,s,n)}),!0),e;if(r.A!==t)return e;if(!r.P)return Oe(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=ve(r.k):r.o;he(3===r.i?new Set(i):i,(function(e,s){return De(t,r,i,e,s,n)})),Oe(t,i,!1),n&&t.u&&_e("Patches").R(r,n,t.u,t.s)}return r.o}function De(t,e,n,r,i,s){if(ue(i)){var o=Re(t,i,s&&e&&3!==e.i&&!fe(e.D,r)?s.concat(r):void 0);if(pe(n,r,o),!ue(o))return;t.m=!1}if(le(i)&&!Ee(i)){if(!t.h.F&&t._<1)return;Re(t,i),e&&e.A.l||Oe(t,i)}}function Oe(t,e,n){void 0===n&&(n=!1),t.h.F&&t.m&&we(e,n)}function Pe(t,e){var n=t[We];return(n?ye(n):t)[e]}function Le(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Me(t){t.P||(t.P=!0,t.l&&Me(t.l))}function xe(t){t.o||(t.o=ve(t.t))}function Ue(t,e,n){var r=ge(e)?_e("MapSet").N(e,n):me(e)?_e("MapSet").T(e,n):t.g?function(t,e){var n=Array.isArray(t),r={i:n?1:0,A:e?e.A:Ie(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},i=r,s=Ze;n&&(i=[r],s=tn);var o=Proxy.revocable(i,s),a=o.revoke,c=o.proxy;return r.k=c,r.j=a,c}(e,n):_e("ES5").J(e,n);return(n?n.A:Ie()).p.push(r),r}function Fe(t){return ue(t)||ce(22,t),function t(e){if(!le(e))return e;var n,r=e[We],i=de(e);if(r){if(!r.P&&(r.i<4||!_e("ES5").K(r)))return r.t;r.I=!0,n=Ve(e,i),r.I=!1}else n=Ve(e,i);return he(n,(function(e,i){r&&function(t,e){return 2===de(t)?t.get(e):t[e]}(r.t,e)===i||pe(n,e,t(i))})),3===i?new Set(n):n}(t)}function Ve(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return ve(t)}var je,$e,qe="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Be="undefined"!=typeof Map,ze="undefined"!=typeof Set,He="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Ke=qe?Symbol.for("immer-nothing"):((je={})["immer-nothing"]=!0,je),Ge=qe?Symbol.for("immer-draftable"):"__$immer_draftable",We=qe?Symbol.for("immer-state"):"__$immer_state",Xe=""+Object.prototype.constructor,Qe="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Je=Object.getOwnPropertyDescriptors||function(t){var e={};return Qe(t).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)})),e},Ye={},Ze={get:function(t,e){if(e===We)return t;var n,r,i,s=ye(t);if(!fe(s,e))return n=t,(i=Le(s,e))?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(n.k):void 0;var o=s[e];return t.I||!le(o)?o:o===Pe(t.t,e)?(xe(t),t.o[e]=Ue(t.A.h,o,t)):o},has:function(t,e){return e in ye(t)},ownKeys:function(t){return Reflect.ownKeys(ye(t))},set:function(t,e,n){var r=Le(ye(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Pe(ye(t),e),s=null==i?void 0:i[We];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(n,i)&&(void 0!==n||fe(t.t,e)))return!0;xe(t),Me(t)}return t.o[e]===n&&"number"!=typeof n&&(void 0!==n||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==Pe(t.t,e)||e in t.t?(t.D[e]=!1,xe(t),Me(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=ye(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:n[e]}:r},defineProperty:function(){ce(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){ce(12)}},tn={};he(Ze,(function(t,e){tn[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),tn.deleteProperty=function(t,e){return Ze.deleteProperty.call(this,t[0],e)},tn.set=function(t,e,n){return Ze.set.call(this,t[0],e,n,t[0])};var en=new(function(){function t(t){var e=this;this.g=He,this.F=!0,this.produce=function(t,n,r){if("function"==typeof t&&"function"!=typeof n){var i=n;n=t;var s=e;return function(t){var e=this;void 0===t&&(t=i);for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return s.produce(t,(function(t){var r;return(r=n).call.apply(r,[e,t].concat(o))}))}}var o;if("function"!=typeof n&&ce(6),void 0!==r&&"function"!=typeof r&&ce(7),le(t)){var a=ke(e),c=Ue(e,t,void 0),u=!0;try{o=n(c),u=!1}finally{u?Se(a):Ae(a)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(t){return Te(a,r),Ce(t,a)}),(function(t){throw Se(a),t})):(Te(a,r),Ce(o,a))}if(!t||"object"!=typeof t){if((o=n(t))===Ke)return;return void 0===o&&(o=t),e.F&&we(o,!0),o}ce(21,t)},this.produceWithPatches=function(t,n){return"function"==typeof t?function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return e.produceWithPatches(n,(function(e){return t.apply(void 0,[e].concat(i))}))}:[e.produce(t,n,(function(t,e){r=t,i=e})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){le(t)||ce(8),ue(t)&&(t=Fe(t));var e=ke(this),n=Ue(this,t,void 0);return n[We].C=!0,Ae(e),n},e.finishDraft=function(t,e){var n=(t&&t[We]).A;return Te(n,e),Ce(void 0,n)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!He&&ce(20),this.g=t},e.applyPatches=function(t,e){var n;for(n=e.length-1;n>=0;n--){var r=e[n];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}var i=_e("Patches").$;return ue(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(n+1))}))},t}()),nn=en.produce;en.produceWithPatches.bind(en),en.setAutoFreeze.bind(en),en.setUseProxies.bind(en),en.applyPatches.bind(en),en.createDraft.bind(en),en.finishDraft.bind(en);
/*! *****************************************************************************
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
***************************************************************************** */
var rn=function(t,e){return(rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function sn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function on(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function an(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function cn(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function un(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function ln(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}
/**
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
 */var hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dn=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
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
 */
function fn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function pn(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function gn(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function mn(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function yn(){var t=fn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
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
 */
var vn=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,wn.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}rn(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),wn=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?bn(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new vn(i,a,r);return c},t}();function bn(t,e){return t.replace(En,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var En=/\{\$([^}]+)}/g;function _n(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(In(a)&&In(c)){if(!_n(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function In(t){return null!==t&&"object"==typeof t}
/**
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
 */function Tn(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}function Sn(t){var e={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function An(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}var kn=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=Nn),void 0===r.error&&(r.error=Nn),void 0===r.complete&&(r.complete=Nn);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function Nn(){}
/**
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
 */function Cn(t){return t&&t._delegate?t._delegate:t}var Rn=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),Dn=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new dn;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var r=cn(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=un(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(l){}}}catch(h){e={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return on(this,void 0,void 0,(function(){var t;return an(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(ln(ln([],un(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),un(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t="[DEFAULT]"),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=cn(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var u=un(c.value,2),l=u[0],h=u[1];s===this.normalizeInstanceIdentifier(l)&&h.resolve(o)}}catch(d){e={error:d}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=cn(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(c){}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t="[DEFAULT]"),this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
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
 */var On,Pn,Ln,Mn=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new Dn(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function xn(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
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
 */(Ln=Pn||(Pn={}))[Ln.DEBUG=0]="DEBUG",Ln[Ln.VERBOSE=1]="VERBOSE",Ln[Ln.INFO=2]="INFO",Ln[Ln.WARN=3]="WARN",Ln[Ln.ERROR=4]="ERROR",Ln[Ln.SILENT=5]="SILENT";var Un={debug:Pn.DEBUG,verbose:Pn.VERBOSE,info:Pn.INFO,warn:Pn.WARN,error:Pn.ERROR,silent:Pn.SILENT},Fn=Pn.INFO,Vn=((On={})[Pn.DEBUG]="log",On[Pn.VERBOSE]="log",On[Pn.INFO]="info",On[Pn.WARN]="warn",On[Pn.ERROR]="error",On),jn=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=Vn[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,xn(["["+i+"]  "+t.name+":"],n))}},$n=function(){function t(t){this.name=t,this._logLevel=Fn,this._logHandler=jn,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in Pn))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Un[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,xn([this,Pn.DEBUG],t)),this._logHandler.apply(this,xn([this,Pn.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,xn([this,Pn.VERBOSE],t)),this._logHandler.apply(this,xn([this,Pn.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,xn([this,Pn.INFO],t)),this._logHandler.apply(this,xn([this,Pn.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,xn([this,Pn.WARN],t)),this._logHandler.apply(this,xn([this,Pn.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,xn([this,Pn.ERROR],t)),this._logHandler.apply(this,xn([this,Pn.ERROR],t))},t}();
/**
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
 */
class qn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Bn=new $n("@firebase/app"),zn={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Hn=new Map,Kn=new Map;function Gn(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Kn.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Kn.set(e,t);for(const n of Hn.values())Gn(n,t);return!0}function Xn(t,e){return t.container.getProvider(e)}
/**
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
 */const Qn=new wn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class Jn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}
/**
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
 */function Yn(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Qn.create("bad-app-name",{appName:String(r)});const i=Hn.get(r);if(i){if(_n(t,i.options)&&_n(n,i.config))return i;throw Qn.create("duplicate-app",{appName:r})}const s=new Mn(r);for(const a of Kn.values())s.addComponent(a);const o=new Jn(t,n,s);return Hn.set(r,o),o}function Zn(t="[DEFAULT]"){const e=Hn.get(t);if(!e)throw Qn.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let i=null!==(r=zn[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Bn.warn(t.join(" "))}Wn(new Rn(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
 */var er;function nr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Wn(new Rn("platform-logger",(t=>new qn(t)),"PRIVATE")),tr("@firebase/app","0.7.0",er),tr("fire-js","");const rr=nr,ir=new wn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sr=new $n("@firebase/auth");function or(t,...e){sr.logLevel<=Pn.ERROR&&sr.error(`Auth (9.0.0): ${t}`,...e)}
/**
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
 */function ar(t,...e){throw lr(t,...e)}function cr(t,...e){return lr(t,...e)}function ur(t,e,n){const r=Object.assign(Object.assign({},rr()),{[e]:n});return new wn("auth","Firebase",r).create(e,{appName:t.name})}function lr(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ir.create(t,...e)}function hr(t,e,...n){if(!t)throw lr(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function fr(t,e){t||dr(e)}
/**
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
 */const pr=new Map;function gr(t){fr(t instanceof Function,"Expected a class definition");let e=pr.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pr.set(t,e),e)}
/**
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
 */
/**
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
 */
function mr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function yr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function vr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==yr()&&"https:"!==yr()&&!gn()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class wr{constructor(t,e){this.shortDelay=t,this.longDelay=e,fr(e>t,"Short delay should be less than long delay!"),this.isMobile=pn()||mn()}get(){return vr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function br(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class Er{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const _r={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ir=new wr(3e4,6e4);
/**
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
 */function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return Ar(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Tn(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(Er.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),Er.fetch()(Nr(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ar(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_r),e);try{const e=new Cr(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Rr(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rr(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Rr(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ur(t,a,o);ar(t,a)}}catch(i){if(i instanceof vn)throw i;ar(t,"network-request-failed")}}async function kr(t,e,n,r,i={}){const s=await Sr(t,e,n,r,i);return"mfaPendingCredential"in s&&ar(t,"multi-factor-auth-required",{serverResponse:s}),s}function Nr(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?br(t.config,i):`${t.config.apiScheme}://${i}`}class Cr{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(cr(this.auth,"timeout"))),Ir.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cr(t,e,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function Dr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Or(t){return 1e3*Number(t)}function Pr(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return or("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return t?JSON.parse(t):(or("Failed to decode base64 JWT payload"),null)}catch(i){return or("Caught error parsing JWT payload as JSON",i),null}}
/**
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
 */
async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}class Mr{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class xr{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Ur(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lr(t,async function(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));hr(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=sn(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
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
 */
class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){hr(t.idToken,"internal-error"),hr(void 0!==t.idToken,"internal-error"),hr(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Pr(t);return hr(e,"internal-error"),hr(void 0!==e.exp,"internal-error"),hr(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return hr(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(t,e){const n=await Ar(t,{},(()=>{const n=Tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=Nr(t,r,"/v1/token",`key=${i}`);return Er.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Fr;return n&&(hr("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(hr("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(hr("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return dr("not implemented")}}
/**
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
 */function Vr(t,e){hr("string"==typeof t||void 0===t,"internal-error",{appName:e})}class jr{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=sn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Mr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new xr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Lr(this,this.stsTokenManager.getToken(this.auth,t));return hr(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Cn(t),r=await n.getIdToken(e),i=Pr(r);hr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dr(Or(i.auth_time)),issuedAtTime:Dr(Or(i.iat)),expirationTime:Dr(Or(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Cn(t);await Ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(hr(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new jr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){hr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Ur(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Lr(this,async function(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:_}=e;hr(v&&_,t,"internal-error");const I=Fr.fromJSON(this.name,_);hr("string"==typeof v,t,"internal-error"),Vr(l,t.name),Vr(h,t.name),hr("boolean"==typeof w,t,"internal-error"),hr("boolean"==typeof b,t,"internal-error"),Vr(d,t.name),Vr(f,t.name),Vr(p,t.name),Vr(g,t.name),Vr(m,t.name),Vr(y,t.name);const T=new jr({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new Fr;r.updateFromServerResponse(e);const i=new jr({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Ur(i),i}}
/**
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
 */class $r{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}$r.type="NONE";const qr=$r;
/**
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
 */function Br(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Br(this.userKey,r.apiKey,i),this.fullPersistenceKey=Br("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?jr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new zr(gr(qr),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||gr(qr);const s=Br(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=jr._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new zr(i,t,n)):new zr(i,t,n)}}
/**
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
 */function Hr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jr(e))return"Blackberry";if(Yr(e))return"Webos";if(Gr(e))return"Safari";if((e.includes("chrome/")||Wr(e))&&!e.includes("edge/"))return"Chrome";if(Qr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Kr(t=fn()){return/firefox\//i.test(t)}function Gr(t=fn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wr(t=fn()){return/crios\//i.test(t)}function Xr(t=fn()){return/iemobile/i.test(t)}function Qr(t=fn()){return/android/i.test(t)}function Jr(t=fn()){return/blackberry/i.test(t)}function Yr(t=fn()){return/webos/i.test(t)}function Zr(t=fn()){return/iphone|ipad|ipod/i.test(t)}function ti(t=fn()){return Zr(t)||Qr(t)||Yr(t)||Jr(t)||/windows phone/i.test(t)||Xr(t)}
/**
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
 */
function ei(t,e=[]){let n;switch(t){case"Browser":n=Hr(fn());break;case"Worker":n=`${Hr(fn())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
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
 */class ni{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ii(this),this.idTokenSubscription=new ii(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ir,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=gr(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await zr.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(t)):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(hr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ur(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Cn(t):null;return e&&hr(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&hr(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gr(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wn("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&gr(t)||this._popupRedirectResolver;hr(e,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[gr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return hr(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return hr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ei(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ri(t){return Cn(t)}class ii{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new kn((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return hr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */class si{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return dr("not implemented")}_getIdTokenResponse(t){return dr("not implemented")}_linkToIdToken(t,e){return dr("not implemented")}_getReauthenticationResolver(t){return dr("not implemented")}}async function oi(t,e){return async function(t,e){return Sr(t,"POST","/v1/accounts:sendOobCode",Tr(t,e))}(t,e)}
/**
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
 */
/**
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
 */
class ai extends si{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ai(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ai(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
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
 */
return async function(t,e){return kr(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}(t,{email:this._email,oobCode:this._password});default:ar(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return Sr(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:ar(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function ci(t,e){return kr(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}
/**
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
 */class ui extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ui(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ar("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=sn(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ui(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){return ci(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ci(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ci(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Tn(e)}return t}}
/**
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
 */class li{constructor(t){var e,n,r,i,s,o;const a=Sn(An(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);hr(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=Sn(An(t)).link,n=e?Sn(An(e)).deep_link_id:null,r=Sn(An(t)).deep_link_id;return(r?Sn(An(r)).link:null)||r||n||e||t}(t);try{return new li(e)}catch(n){return null}}}
/**
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
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(t,e){return ai._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=li.parseLink(e);return hr(n,"argument-error"),ai._fromEmailAndCode(t,n.code,n.tenantId)}}hi.PROVIDER_ID="password",hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class di{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class fi extends di{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */class pi extends fi{constructor(){super("facebook.com")}static credential(t){return ui._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pi.credential(t.oauthAccessToken)}catch(e){return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com",pi.PROVIDER_ID="facebook.com";
/**
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
 */
class gi extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ui._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return gi.credentialFromTaggedObject(t)}static credentialFromError(t){return gi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return gi.credential(e,n)}catch(r){return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com",gi.PROVIDER_ID="google.com";
/**
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
 */
class mi extends fi{constructor(){super("github.com")}static credential(t){return ui._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mi.credentialFromTaggedObject(t)}static credentialFromError(t){return mi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return mi.credential(t.oauthAccessToken)}catch(e){return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com",mi.PROVIDER_ID="github.com";
/**
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
 */
class yi extends fi{constructor(){super("twitter.com")}static credential(t,e){return ui._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return yi.credentialFromTaggedObject(t)}static credentialFromError(t){return yi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return yi.credential(e,n)}catch(r){return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com",yi.PROVIDER_ID="twitter.com";
/**
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
 */
class vi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await jr._fromIdTokenResponse(t,n,r),s=wi(n);return new vi({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=wi(n);return new vi({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function wi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */class bi extends vn{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,bi.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new bi(t,e,n,r)}}function Ei(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw bi._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
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
 */
async function _i(t,e,n=!1){const r="signIn",i=await Ei(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ii(t,e,n){const r=ri(t),i=await
/**
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
 */
async function(t,e){return kr(t,"POST","/v1/accounts:signUp",Tr(t,e))}(r,{returnSecureToken:!0,email:e,password:n}),s=await vi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ti(t,e,n){return async function(t,e){return _i(ri(t),e)}
/**
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
 */(Cn(t),hi.credential(e,n))}async function Si(t,e){const n=Cn(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&function(t,e,n){var r;hr((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),hr(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(hr(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(hr(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}(n.auth,r,e);const{email:i}=await oi(n.auth,r);i!==t.email&&await t.reload()}function Ai(t,e,n,r){return Cn(t).onAuthStateChanged(e,n,r)}
/**
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
 */
class ki{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
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
 */class Ni extends ki{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=fn();return Gr(t)||Zr(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ti(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);yn()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ni.type="LOCAL";const Ci=Ni;
/**
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
 */class Ri extends ki{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ri.type="SESSION";const Di=Ri;
/**
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
 */
/**
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
 */
class Oi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Oi(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Pi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */Oi.receivers=[];class Li{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Pi("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Mi(){return window}
/**
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
 */
function xi(){return void 0!==Mi().WorkerGlobalScope&&"function"==typeof Mi().importScripts}
/**
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
 */
const Ui="firebaseLocalStorageDb";class Fi{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Vi(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ji(){const t=indexedDB.open(Ui,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Ui);return new Fi(t).toPromise()}(),e(await ji()))}))}))}async function $i(t,e,n){const r=Vi(t,!0).put({fbase_key:e,value:n});return new Fi(r).toPromise()}function qi(t,e){const n=Vi(t,!0).delete(e);return new Fi(n).toPromise()}class Bi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ji()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oi._getInstance(xi()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Li(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ji();return await $i(t,"__sak","1"),await qi(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>$i(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Vi(t,!1).get(e),r=await new Fi(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>qi(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Vi(t,!1).getAll();return new Fi(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bi.type="LOCAL";const zi=Bi;
/**
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
 */function Hi(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=cr("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
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
 */
function Ki(t,e){return e?gr(e):(hr(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */new wr(3e4,6e4);class Gi extends si{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ci(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ci(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ci(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Wi(t){return _i(t.auth,new Gi(t),t.bypassAuthState)}function Xi(t){const{auth:e,user:n}=t;return hr(n,e,"internal-error"),
/**
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
 */
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Lr(t,Ei(r,i,e,t),n);hr(s.idToken,r,"internal-error");const o=Pr(s.idToken);hr(o,r,"internal-error");const{sub:a}=o;return hr(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&ar(r,"user-mismatch"),s}}(n,new Gi(t),t.bypassAuthState)}async function Qi(t){const{auth:e,user:n}=t;return hr(n,e,"internal-error"),async function(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}(n,new Gi(t),t.bypassAuthState)}
/**
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
 */class Ji{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Wi;case"linkViaPopup":case"linkViaRedirect":return Qi;case"reauthViaPopup":case"reauthViaRedirect":return Xi;default:ar(this.auth,"internal-error")}}resolve(t){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Yi=new wr(2e3,1e4);async function Zi(t,e,n){const r=ri(t);!function(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&ar(t,"argument-error"),ur(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e,di);const i=Ki(r,n);return new ts(r,"signInViaPopup",e,i).executeNotNull()}class ts extends Ji{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return hr(t,this.auth,"internal-error"),t}async onExecution(){fr(1===this.filter.length,"Popup operations only handle one event");const t=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Yi.get())};t()}}ts.currentPopupAction=null;
/**
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
 */
const es=new Map;class ns extends Ji{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=es.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return Br("pendingRedirect",t.config.apiKey,t.name)}(e),r="true"===await rs(t)._get(n);return await rs(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}es.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function rs(t){return gr(t._redirectPersistence)}async function is(t,e,n=!1){const r=ri(t),i=Ki(r,e),s=new ns(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
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
 */class ss{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return as(t);default:return!1}}
/**
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!as(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(cr(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(os(t))}saveEventToCache(t){this.cachedEventUids.add(os(t)),this.lastProcessedEventTime=Date.now()}}function os(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function as({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
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
 */
const cs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,us=/^https?/;async function ls(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Sr(t,"GET","/v1/projects",e)}(t);for(const r of e)try{if(hs(r))return}catch(n){}ar(t,"unauthorized-domain")}function hs(t){const e=mr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!us.test(n))return!1;if(cs.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const ds=new wr(3e4,6e4);function fs(){const t=Mi().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ps(t){return new Promise(((e,n)=>{var r,i,s;function o(){fs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fs(),n(cr(t,"network-request-failed"))},timeout:ds.get()})}if(null===(i=null===(r=Mi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Mi().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Mi()[e]=()=>{gapi.load?o():n(cr(t,"network-request-failed"))},Hi(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw gs=null,t}))}let gs=null;
/**
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
 */
const ms=new wr(5e3,15e3),ys={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ws(t){const e=t.config;hr(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?br(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.0.0"},i=vs.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Tn(r).slice(1)}`}async function bs(t){const e=await function(t){return gs=gs||ps(t),gs}(t),n=Mi().gapi;return hr(n,t,"internal-error"),e.open({where:document.body,url:ws(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ys,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=cr(t,"network-request-failed"),s=Mi().setTimeout((()=>{r(i)}),ms.get());function o(){Mi().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Es={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class _s{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Is(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Es),{width:r.toString(),height:i.toString(),top:s,left:o}),u=fn().toLowerCase();n&&(a=Wr(u)?"_blank":n),Kr(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=fn()){var e;return Zr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(e||"",a),new _s(null);const h=window.open(e||"",a,l);hr(h,t,"popup-blocked");try{h.focus()}catch(d){}return new _s(h)}function Ts(t,e,n,r,i,s){hr(t.config.authDomain,t,"auth-domain-config-required"),hr(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(e instanceof di){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof fi){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return br(t,"emulator/auth/handler")}
/**
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
 */(t)}?${Tn(a).slice(1)}`}const Ss=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=is}async _openPopup(t,e,n,r){var i;fr(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Is(t,Ts(t,e,n,mr(),r),Pi())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=Ts(t,e,n,mr(),r),Mi().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(fr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await bs(t),n=new ss(t);return e.register("authEvent",(e=>{hr(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),ar(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=ls(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ti()||Gr()||Zr()}};var As;
/**
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
 */
class ks{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){hr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
function Ns(t=Zn()){const e=Xn(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Xn(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(_n(n.getOptions(),null!=e?e:{}))return t;ar(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Ss,persistence:[zi,Ci,Di]})}As="Browser",Wn(new Rn("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{hr(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),hr(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:As,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ei(As)},s=new ni(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Wn(new Rn("auth-internal",(t=>{const e=ri(t.getProvider("auth").getImmediate());return new ks(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),tr("@firebase/auth","0.17.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(As));
/*! *****************************************************************************
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
***************************************************************************** */
var Cs=function(t,e){return(Cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Rs(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Ds,Os="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ps=Ps||{},Ls=Os||self;function Ms(){}function xs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Us(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Fs="closure_uid_"+(1e9*Math.random()>>>0),Vs=0;function js(t,e,n){return t.call.apply(t.bind,arguments)}function $s(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function qs(t,e,n){return(qs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?js:$s).apply(null,arguments)}function Bs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function zs(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Hs(){this.s=this.s,this.o=this.o}var Ks={};Hs.prototype.s=!1,Hs.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Fs)&&t[Fs]||(t[Fs]=++Vs)}(this);delete Ks[t]}},Hs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Gs=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ws=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Xs(t){return Array.prototype.concat.apply([],arguments)}function Qs(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Js(t){return/^[\s\xa0]*$/.test(t)}var Ys,Zs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function to(t,e){return-1!=t.indexOf(e)}function eo(t,e){return t<e?-1:t>e?1:0}t:{var no=Ls.navigator;if(no){var ro=no.userAgent;if(ro){Ys=ro;break t}}Ys=""}function io(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function so(t){var e={};for(var n in t)e[n]=t[n];return e}var oo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ao(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<oo.length;s++)n=oo[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function co(t){return co[" "](t),t}co[" "]=Ms;var uo,lo,ho=to(Ys,"Opera"),fo=to(Ys,"Trident")||to(Ys,"MSIE"),po=to(Ys,"Edge"),go=po||fo,mo=to(Ys,"Gecko")&&!(to(Ys.toLowerCase(),"webkit")&&!to(Ys,"Edge"))&&!(to(Ys,"Trident")||to(Ys,"MSIE"))&&!to(Ys,"Edge"),yo=to(Ys.toLowerCase(),"webkit")&&!to(Ys,"Edge");function vo(){var t=Ls.document;return t?t.documentMode:void 0}t:{var wo="",bo=(lo=Ys,mo?/rv:([^\);]+)(\)|;)/.exec(lo):po?/Edge\/([\d\.]+)/.exec(lo):fo?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(lo):yo?/WebKit\/(\S+)/.exec(lo):ho?/(?:Version)[ \/]?(\S+)/.exec(lo):void 0);if(bo&&(wo=bo?bo[1]:""),fo){var Eo=vo();if(null!=Eo&&Eo>parseFloat(wo)){uo=String(Eo);break t}}uo=wo}var _o,Io={};function To(){return function(t){var e=Io;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=Zs(String(uo)).split("."),n=Zs("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=eo(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||eo(0==s[2].length,0==o[2].length)||eo(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(Ls.document&&fo){var So=vo();_o=So||(parseInt(uo,10)||void 0)}else _o=void 0;var Ao=_o,ko=function(){if(!Ls.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ls.addEventListener("test",Ms,e),Ls.removeEventListener("test",Ms,e)}catch(n){}return t}();function No(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Co(t,e){if(No.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mo){t:{try{co(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ro[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Co.Z.h.call(this)}}No.prototype.h=function(){this.defaultPrevented=!0},zs(Co,No);var Ro={2:"touch",3:"pen",4:"mouse"};Co.prototype.h=function(){Co.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Do="closure_listenable_"+(1e6*Math.random()|0),Oo=0;function Po(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Oo,this.ca=this.fa=!1}function Lo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Mo(t){this.src=t,this.g={},this.h=0}function xo(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Gs(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Lo(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Uo(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Mo.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Uo(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Po(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var Fo="closure_lm_"+(1e6*Math.random()|0),Vo={};function jo(t,e,n,r,i){if(r&&r.once)return qo(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jo(t,e[s],n,r,i);return null}return n=Xo(n),t&&t[Do]?t.N(e,n,Us(r)?!!r.capture:!!r,i):$o(t,e,n,!1,r,i)}function $o(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Us(i)?!!i.capture:!!i,a=Go(t);if(a||(t[Fo]=a=new Mo(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Ko;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ko||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ho(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function qo(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qo(t,e[s],n,r,i);return null}return n=Xo(n),t&&t[Do]?t.O(e,n,Us(r)?!!r.capture:!!r,i):$o(t,e,n,!0,r,i)}function Bo(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Bo(t,e[s],n,r,i);else r=Us(r)?!!r.capture:!!r,n=Xo(n),t&&t[Do]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Uo(s=t.g[e],n,r,i))&&(Lo(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Go(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uo(e,n,r,i)),(n=-1<t?e[t]:null)&&zo(n))}function zo(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Do])xo(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ho(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Go(e))?(xo(n,t),0==n.h&&(n.src=null,e[Fo]=null)):Lo(t)}}}function Ho(t){return t in Vo?Vo[t]:Vo[t]="on"+t}function Ko(t,e){if(t.ca)t=!0;else{e=new Co(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&zo(t),t=n.call(r,e)}return t}function Go(t){return(t=t[Fo])instanceof Mo?t:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xo(t){return"function"==typeof t?t:(t[Wo]||(t[Wo]=function(e){return t.handleEvent(e)}),t[Wo])}function Qo(){Hs.call(this),this.i=new Mo(this),this.P=this,this.I=null}function Jo(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new No(e,t);else if(e instanceof No)e.target=e.target||t;else{var i=e;ao(e=new No(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yo(o,r,!0,e)&&i}if(i=Yo(o=e.g=t,r,!0,e)&&i,i=Yo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Yo(o=e.g=n[s],r,!1,e)&&i}function Yo(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&xo(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}zs(Qo,Hs),Qo.prototype[Do]=!0,Qo.prototype.removeEventListener=function(t,e,n,r){Bo(this,t,e,n,r)},Qo.prototype.M=function(){if(Qo.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Lo(n[r]);delete e.g[t],e.h--}}this.I=null},Qo.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Qo.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Zo=Ls.JSON.stringify;function ta(){var t=ca,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ea,na=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=ra.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),ra=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new ia}),(function(t){return t.reset()})),ia=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function sa(t){Ls.setTimeout((function(){throw t}),0)}function oa(t,e){ea||function(){var t=Ls.Promise.resolve(void 0);ea=function(){t.then(ua)}}(),aa||(ea(),aa=!0),ca.add(t,e)}var aa=!1,ca=new na;function ua(){for(var t;t=ta();){try{t.h.call(t.g)}catch(n){sa(n)}var e=ra;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}aa=!1}function la(t,e){Qo.call(this),this.h=t||1,this.g=e||Ls,this.j=qs(this.kb,this),this.l=Date.now()}function ha(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function da(t,e,n){if("function"==typeof t)n&&(t=qs(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=qs(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ls.setTimeout(t,e||0)}function fa(t){t.g=da((function(){t.g=null,t.i&&(t.i=!1,fa(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}zs(la,Qo),(Ds=la.prototype).da=!1,Ds.S=null,Ds.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Jo(this,"tick"),this.da&&(ha(this),this.start()))}},Ds.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ds.M=function(){la.Z.M.call(this),ha(this),delete this.g};var pa=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Cs(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:fa(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(Ls.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(Hs);function ga(t){Hs.call(this),this.h=t,this.g={}}zs(ga,Hs);var ma=[];function ya(t,e,n,r){Array.isArray(n)||(n&&(ma[0]=n.toString()),n=ma);for(var i=0;i<n.length;i++){var s=jo(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function va(t){io(t.g,(function(t,e){this.g.hasOwnProperty(e)&&zo(t)}),t),t.g={}}function wa(){this.g=!0}function ba(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Zo(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}ga.prototype.M=function(){ga.Z.M.call(this),va(this)},ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},wa.prototype.Aa=function(){this.g=!1},wa.prototype.info=function(){};var Ea={},_a=null;function Ia(){return _a=_a||new Qo}function Ta(t){No.call(this,Ea.Ma,t)}function Sa(t){var e=Ia();Jo(e,new Ta(e,t))}function Aa(t,e){No.call(this,Ea.STAT_EVENT,t),this.stat=e}function ka(t){var e=Ia();Jo(e,new Aa(e,t))}function Na(t,e){No.call(this,Ea.Na,t),this.size=e}function Ca(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ls.setTimeout((function(){t()}),e)}Ea.Ma="serverreachability",zs(Ta,No),Ea.STAT_EVENT="statevent",zs(Aa,No),Ea.Na="timingevent",zs(Na,No);var Ra={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Da={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Oa(){}function Pa(t){return t.h||(t.h=t.i())}function La(){}Oa.prototype.h=null;var Ma,xa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ua(){No.call(this,"d")}function Fa(){No.call(this,"c")}function Va(){}function ja(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ga(this),this.P=qa,t=go?125:void 0,this.W=new la(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}zs(Ua,No),zs(Fa,No),zs(Va,Oa),Va.prototype.g=function(){return new XMLHttpRequest},Va.prototype.i=function(){return{}},Ma=new Va;var qa=45e3,Ba={},za={};function Ha(t,e,n){t.K=1,t.v=pc(cc(e)),t.s=n,t.U=!0,Ka(t,null)}function Ka(t,e){t.F=Date.now(),Qa(t),t.A=cc(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),kc(n.h,"t",r),t.C=0,n=t.l.H,t.h=new $a,t.g=Nu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new pa(qs(t.Ia,t,t.g),t.O)),ya(t.V,t.g,"readystatechange",t.gb),e=t.H?so(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Sa(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ga(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Wa(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=Xa(t,n))==za){4==e&&(t.o=4,ka(14),i=!1),ba(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ba){t.o=4,ka(15),ba(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}ba(t.j,t.m,r,null),ec(t,r)}Ga(t)&&r!=za&&r!=Ba&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ka(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),bu(e),e.L=!0,ka(11))):(ba(t.j,t.m,n,"[Invalid Chunked Response]"),tc(t),Za(t))}function Xa(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?za:(n=Number(e.substring(n,r)),isNaN(n)?Ba:(r+=1)+n>e.length?za:(e=e.substr(r,n),t.C=r+n,e))}function Qa(t){t.Y=Date.now()+t.P,Ja(t,t.P)}function Ja(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ca(qs(t.eb,t),e)}function Ya(t){t.B&&(Ls.clearTimeout(t.B),t.B=null)}function Za(t){0==t.l.G||t.I||Iu(t.l,t)}function tc(t){Ya(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ha(t.W),va(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ec(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Lc(n.i,t)))if(n.I=t.N,!t.J&&Lc(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(m){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;_u(n),hu(n)}wu(n),ka(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ca(qs(n.ab,n),6e3));if(1>=Pc(n.i)&&n.ka){try{n.ka()}catch(m){}n.ka=void 0}}else Su(n,11)}else if((t.J||n.g==t)&&_u(n),!Js(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(to(l,"spdy")||to(l,"quic")||to(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Mc(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,fc(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=ku(r,r.H?r.la:null,r.W),f.J){xc(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(Ya(p),Qa(p)),r.g=f}else vu(r);0<n.l.length&&pu(n)}else"stop"!=s[0]&&"close"!=s[0]||Su(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Su(n,7):lu(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Sa(4)}catch(m){}}function nc(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(xs(t)||"string"==typeof t)Ws(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(xs(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(xs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function rc(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof rc)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ic(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];sc(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)sc(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function sc(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ds=ja.prototype).setTimeout=function(t){this.P=t},Ds.gb=function(t){t=t.target;var e=this.L;e&&3==su(t)?e.l():this.Ia(t)},Ds.Ia=function(t){try{if(t==this.g)t:{var e=su(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||go||this.g&&(this.h.h||this.g.ga()||ou(this.g)))){this.I||4!=e||7==n||Sa(8==n||0>=r?3:2),Ya(this);var i=this.g.ba();this.N=i;e:if(Ga(this)){var s=ou(this.g);t="";var o=s.length,a=4==su(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tc(this),Za(this);var c="";break e}this.h.i=new Ls.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(u)){var h=u;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,ka(12),tc(this),Za(this);break t}ba(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ec(this,i)}this.U?(Wa(this,e,c),go&&this.i&&3==e&&(ya(this.V,this.W,"tick",this.fb),this.W.start())):(ba(this.j,this.m,c,null),ec(this,c)),4==e&&tc(this),this.i&&!this.I&&(4==e?Iu(this.l,this):(this.i=!1,Qa(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,ka(12)):(this.o=0,ka(13)),tc(this),Za(this)}}}catch(d){}},Ds.fb=function(){if(this.g){var t=su(this.g),e=this.g.ga();this.C<e.length&&(Ya(this),Wa(this,t,e),this.i&&4!=t&&Qa(this))}},Ds.cancel=function(){this.I=!0,tc(this)},Ds.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Sa(3),ka(17)),tc(this),this.o=2,Za(this)):Ja(this,this.Y-t)},(Ds=rc.prototype).R=function(){ic(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ds.T=function(){return ic(this),this.g.concat()},Ds.get=function(t,e){return sc(this.h,t)?this.h[t]:e},Ds.set=function(t,e){sc(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ds.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ac(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ac){this.g=void 0!==e?e:t.g,uc(this,t.j),this.s=t.s,lc(this,t.i),hc(this,t.m),this.l=t.l,e=t.h;var n=new Ic;n.i=e.i,e.g&&(n.g=new rc(e.g),n.h=e.h),dc(this,n),this.o=t.o}else t&&(n=String(t).match(oc))?(this.g=!!e,uc(this,n[1]||"",!0),this.s=gc(n[2]||""),lc(this,n[3]||"",!0),hc(this,n[4]),this.l=gc(n[5]||"",!0),dc(this,n[6]||"",!0),this.o=gc(n[7]||"")):(this.g=!!e,this.h=new Ic(null,this.g))}function cc(t){return new ac(t)}function uc(t,e,n){t.j=n?gc(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lc(t,e,n){t.i=n?gc(e,!0):e}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dc(t,e,n){e instanceof Ic?(t.h=e,function(t,e){e&&!t.j&&(Tc(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Sc(this,e),kc(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=mc(e,Ec)),t.h=new Ic(e,t.g))}function fc(t,e,n){t.h.set(e,n)}function pc(t){return fc(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gc(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mc(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,yc),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yc(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ac.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mc(e,vc,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(mc(e,vc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(mc(n,"/"==n.charAt(0)?bc:wc,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mc(n,_c)),t.join("")};var vc=/[#\/\?@]/g,wc=/[#\?:]/g,bc=/[#\?]/g,Ec=/[#\?@]/g,_c=/#/g;function Ic(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tc(t){t.g||(t.g=new rc,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Sc(t,e){Tc(t),e=Nc(t,e),sc(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,sc((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ic(t)))}function Ac(t,e){return Tc(t),e=Nc(t,e),sc(t.g.h,e)}function kc(t,e,n){Sc(t,e),0<n.length&&(t.i=null,t.g.set(Nc(t,e),Qs(n)),t.h+=n.length)}function Nc(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ds=Ic.prototype).add=function(t,e){Tc(this),this.i=null,t=Nc(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ds.forEach=function(t,e){Tc(this),this.g.forEach((function(n,r){Ws(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Ds.T=function(){Tc(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Ds.R=function(t){Tc(this);var e=[];if("string"==typeof t)Ac(this,t)&&(e=Xs(e,this.g.get(Nc(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xs(e,t[n])}return e},Ds.set=function(t,e){return Tc(this),this.i=null,Ac(this,t=Nc(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ds.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ds.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var Cc=function(t,e){this.h=t,this.g=e};function Rc(t){this.l=t||Dc,Ls.PerformanceNavigationTiming?t=0<(t=Ls.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ls.g&&Ls.g.Ea&&Ls.g.Ea()&&Ls.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dc=10;function Oc(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Pc(t){return t.h?1:t.g?t.g.size:0}function Lc(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Mc(t,e){t.g?t.g.add(e):t.h=e}function xc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Uc(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=Rs(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return Qs(t.i)}function Fc(){}function Vc(){this.g=new Fc}function jc(t,e,n){var r=n||"";try{nc(t,(function(t,n){var i=t;Us(t)&&(i=Zo(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function $c(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function qc(t){this.l=t.$b||null,this.j=t.ib||!1}function Bc(t,e){Qo.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Rc.prototype.cancel=function(){var t,e;if(this.i=Uc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=Rs(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Fc.prototype.stringify=function(t){return Ls.JSON.stringify(t,void 0)},Fc.prototype.parse=function(t){return Ls.JSON.parse(t,void 0)},zs(qc,Oa),qc.prototype.g=function(){return new Bc(this.l,this.j)},qc.prototype.i=function(t){return function(){return t}}({}),zs(Bc,Qo);var zc=0;function Hc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Kc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gc(t)}function Gc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ds=Bc.prototype).open=function(t,e){if(this.readyState!=zc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gc(this)},Ds.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ls).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ds.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Kc(this)),this.readyState=zc},Ds.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gc(this)),this.g&&(this.readyState=3,Gc(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Ls.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ds.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kc(this):Gc(this),3==this.readyState&&Hc(this)}},Ds.Ua=function(t){this.g&&(this.response=this.responseText=t,Kc(this))},Ds.Ta=function(t){this.g&&(this.response=t,Kc(this))},Ds.ha=function(){this.g&&Kc(this)},Ds.setRequestHeader=function(t,e){this.v.append(t,e)},Ds.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ds.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Bc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Wc=Ls.JSON.parse;function Xc(t){Qo.call(this),this.headers=new rc,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qc,this.K=this.L=!1}zs(Xc,Qo);var Qc="",Jc=/^https?$/i,Yc=["POST","PUT"];function Zc(t){return"content-type"==t.toLowerCase()}function tu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eu(t),ru(t)}function eu(t){t.D||(t.D=!0,Jo(t,"complete"),Jo(t,"error"))}function nu(t){if(t.h&&void 0!==Ps&&(!t.C[1]||4!=su(t)||2!=t.ba()))if(t.v&&4==su(t))da(t.Fa,0,t);else if(Jo(t,"readystatechange"),4==su(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(oc)[1]||null;if(!s&&Ls.self&&Ls.self.location){var o=Ls.self.location.protocol;s=o.substr(0,o.length-1)}i=!Jc.test(s?s.toLowerCase():"")}e=i}if(e)Jo(t,"complete"),Jo(t,"success");else{t.m=6;try{var a=2<su(t)?t.g.statusText:""}catch(c){a=""}t.j=a+" ["+t.ba()+"]",eu(t)}}finally{ru(t)}}}function ru(t,e){if(t.g){iu(t);var n=t.g,r=t.C[0]?Ms:null;t.g=null,t.C=null,e||Jo(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function iu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ls.clearTimeout(t.A),t.A=null)}function su(t){return t.g?t.g.readyState:0}function ou(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function au(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return io(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):fc(t,e,n))}function cu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uu(t){this.za=0,this.l=[],this.h=new wa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cu("baseRetryDelayMs",5e3,t),this.$a=cu("retryDelaySeedMs",1e4,t),this.Ya=cu("forwardChannelMaxRetries",2,t),this.ra=cu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Rc(t&&t.concurrentRequestLimit),this.Ca=new Vc,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function lu(t){if(du(t),3==t.G){var e=t.V++,n=cc(t.F);fc(n,"SID",t.J),fc(n,"RID",e),fc(n,"TYPE","terminate"),mu(t,n),(e=new ja(t,t.h,e,void 0)).K=2,e.v=pc(cc(n)),n=!1,Ls.navigator&&Ls.navigator.sendBeacon&&(n=Ls.navigator.sendBeacon(e.v.toString(),"")),!n&&Ls.Image&&((new Image).src=e.v,n=!0),n||(e.g=Nu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qa(e)}Au(t)}function hu(t){t.g&&(bu(t),t.g.cancel(),t.g=null)}function du(t){hu(t),t.u&&(Ls.clearTimeout(t.u),t.u=null),_u(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Ls.clearTimeout(t.m),t.m=null)}function fu(t,e){t.l.push(new Cc(t.Za++,e)),3==t.G&&pu(t)}function pu(t){Oc(t.i)||t.m||(t.m=!0,oa(t.Ha,t),t.C=0)}function gu(t,e){var n;n=e?e.m:t.V++;var r=cc(t.F);fc(r,"SID",t.J),fc(r,"RID",n),fc(r,"AID",t.U),mu(t,r),t.o&&t.s&&au(r,t.o,t.s),n=new ja(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=yu(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mc(t.i,n),Ha(n,r,e)}function mu(t,e){t.j&&nc({},(function(t,n){fc(e,n,t)}))}function yu(t,e,n){n=Math.min(t.l.length,n);var r=t.j?qs(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(0>(u-=s))s=Math.max(0,i[c].h-100),a=!1;else try{jc(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function vu(t){t.g||t.u||(t.Y=1,oa(t.Ga,t),t.A=0)}function wu(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Ca(qs(t.Ga,t),Tu(t,t.A)),t.A++,!0)}function bu(t){null!=t.B&&(Ls.clearTimeout(t.B),t.B=null)}function Eu(t){t.g=new ja(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=cc(t.oa);fc(e,"RID","rpc"),fc(e,"SID",t.J),fc(e,"CI",t.N?"0":"1"),fc(e,"AID",t.U),mu(t,e),fc(e,"TYPE","xmlhttp"),t.o&&t.s&&au(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=pc(cc(e)),n.s=null,n.U=!0,Ka(n,t)}function _u(t){null!=t.v&&(Ls.clearTimeout(t.v),t.v=null)}function Iu(t,e){var n=null;if(t.g==e){_u(t),bu(t),t.g=null;var r=2}else{if(!Lc(t.i,e))return;n=e.D,xc(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Jo(r=Ia(),new Na(r,n,e,i)),pu(t)}else vu(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Pc(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Ca(qs(t.Ha,t,e),Tu(t,t.C)),t.C++,0)))}(t,e)||2==r&&wu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Su(t,5);break;case 4:Su(t,10);break;case 3:Su(t,6);break;default:Su(t,2)}}function Tu(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Su(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=qs(t.jb,t);n||(n=new ac("//www.google.com/images/cleardot.gif"),Ls.location&&"http"==Ls.location.protocol||uc(n,"https"),pc(n)),function(t,e){var n=new wa;if(Ls.Image){var r=new Image;r.onload=Bs($c,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bs($c,n,r,"TestLoadImage: error",!1,e),r.onabort=Bs($c,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bs($c,n,r,"TestLoadImage: timeout",!1,e),Ls.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else ka(2);t.G=0,t.j&&t.j.va(e),Au(t),du(t)}function Au(t){t.G=0,t.I=-1,t.j&&(0==Uc(t.i).length&&0==t.l.length||(t.i.i.length=0,Qs(t.l),t.l.length=0),t.j.ua())}function ku(t,e,n){var r=function(t){return t instanceof ac?cc(t):new ac(t,void 0)}(n);if(""!=r.i)e&&lc(r,e+"."+r.i),hc(r,r.m);else{var i=Ls.location;r=function(t,e,n,r){var i=new ac(null,void 0);return t&&uc(i,t),e&&lc(i,e),n&&hc(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&io(t.aa,(function(t,e){fc(r,e,t)})),e=t.D,n=t.sa,e&&n&&fc(r,e,n),fc(r,"VER",t.ma),mu(t,r),r}function Nu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Xc(new qc({ib:!0})):new Xc(t.qa)).L=t.H,e}function Cu(){}function Ru(){if(fo&&!(10<=Number(Ao)))throw Error("Environmental error: no available transport.")}function Du(t,e){Qo.call(this),this.g=new uu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Lu(this)}function Ou(t){Ua.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Pu(){Fa.call(this),this.status=1}function Lu(t){this.g=t}(Ds=Xc.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ma.g(),this.C=this.u?Pa(this.u):Pa(Ma),this.g.onreadystatechange=qs(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void tu(this,s)}t=n||"";var i=new rc(this.headers);r&&nc(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=Zc,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Ls.FormData&&t instanceof Ls.FormData,!(0<=Gs(Yc,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iu(this),0<this.B&&((this.K=function(t){return fo&&To()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qs(this.pa,this)):this.A=da(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tu(this,s)}},Ds.pa=function(){void 0!==Ps&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Jo(this,"timeout"),this.abort(8))},Ds.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Jo(this,"complete"),Jo(this,"abort"),ru(this))},Ds.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),Xc.Z.M.call(this)},Ds.Fa=function(){this.s||(this.F||this.v||this.l?nu(this):this.cb())},Ds.cb=function(){nu(this)},Ds.ba=function(){try{return 2<su(this)?this.g.status:-1}catch(lo){return-1}},Ds.ga=function(){try{return this.g?this.g.responseText:""}catch(lo){return""}},Ds.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Wc(e)}},Ds.Da=function(){return this.m},Ds.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ds=uu.prototype).ma=8,Ds.G=1,Ds.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},Ds.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new ja(this,this.h,t,void 0),n=this.s;if(this.P&&(n?ao(n=so(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=yu(this,e,r),fc(i=cc(this.F),"RID",t),fc(i,"CVER",22),this.D&&fc(i,"X-HTTP-Session-Id",this.D),mu(this,i),this.o&&n&&au(i,this.o,n),Mc(this.i,e),this.Ra&&fc(i,"TYPE","init"),this.ja?(fc(i,"$req",r),fc(i,"SID","null"),e.$=!0,Ha(e,i,null)):Ha(e,i,r),this.G=2}}else 3==this.G&&(t?gu(this,t):0==this.l.length||Oc(this.i)||gu(this))},Ds.Ga=function(){if(this.u=null,Eu(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ca(qs(this.bb,this),t)}},Ds.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ka(10),hu(this),Eu(this))},Ds.ab=function(){null!=this.v&&(this.v=null,hu(this),wu(this),ka(19))},Ds.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ka(2)):(this.h.info("Failed to ping google.com"),ka(1))},(Ds=Cu.prototype).xa=function(){},Ds.wa=function(){},Ds.va=function(){},Ds.ua=function(){},Ds.Oa=function(){},Ru.prototype.g=function(t,e){return new Du(t,e)},zs(Du,Qo),Du.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),oa(qs(t.hb,t,e))),ka(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ku(t,null,t.W),pu(t)},Du.prototype.close=function(){lu(this.g)},Du.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,fu(this.g,e)}else this.v?((e={}).__data__=Zo(t),fu(this.g,e)):fu(this.g,t)},Du.prototype.M=function(){this.g.j=null,delete this.j,lu(this.g),delete this.g,Du.Z.M.call(this)},zs(Ou,Ua),zs(Pu,Fa),zs(Lu,Cu),Lu.prototype.xa=function(){Jo(this.g,"a")},Lu.prototype.wa=function(t){Jo(this.g,new Ou(t))},Lu.prototype.va=function(t){Jo(this.g,new Pu(t))},Lu.prototype.ua=function(){Jo(this.g,"b")},Ru.prototype.createWebChannel=Ru.prototype.g,Du.prototype.send=Du.prototype.u,Du.prototype.open=Du.prototype.m,Du.prototype.close=Du.prototype.close,Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,Da.COMPLETE="complete",La.EventType=xa,xa.OPEN="a",xa.CLOSE="b",xa.ERROR="c",xa.MESSAGE="d",Qo.prototype.listen=Qo.prototype.N,Xc.prototype.listenOnce=Xc.prototype.O,Xc.prototype.getLastError=Xc.prototype.La,Xc.prototype.getLastErrorCode=Xc.prototype.Da,Xc.prototype.getStatus=Xc.prototype.ba,Xc.prototype.getResponseJson=Xc.prototype.Qa,Xc.prototype.getResponseText=Xc.prototype.ga,Xc.prototype.send=Xc.prototype.ea;var Mu=Ra,xu=Da,Uu=Ea,Fu=10,Vu=11,ju=qc,$u=La,qu=Xc;
/**
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
 */
class Bu{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bu.UNAUTHENTICATED=new Bu(null),Bu.GOOGLE_CREDENTIALS=new Bu("google-credentials-uid"),Bu.FIRST_PARTY=new Bu("first-party-uid"),Bu.MOCK_USER=new Bu("mock-user");
/**
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
 */
let zu="9.0.2";
/**
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
 */const Hu=new $n("@firebase/firestore");function Ku(){return Hu.logLevel}function Gu(t,...e){if(Hu.logLevel<=Pn.DEBUG){const n=e.map(Qu);Hu.debug(`Firestore (${zu}): ${t}`,...n)}}function Wu(t,...e){if(Hu.logLevel<=Pn.ERROR){const n=e.map(Qu);Hu.error(`Firestore (${zu}): ${t}`,...n)}}function Xu(t,...e){if(Hu.logLevel<=Pn.WARN){const n=e.map(Qu);Hu.warn(`Firestore (${zu}): ${t}`,...n)}}function Qu(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
/**
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
  */var e}
/**
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
 */function Ju(t="Unexpected state"){const e=`FIRESTORE (${zu}) INTERNAL ASSERTION FAILED: `+t;throw Wu(e),new Error(e)}function Yu(t,e){t||Ju()}function Zu(t,e){return t}
/**
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
 */const tl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class el extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class nl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class rl{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Bu.UNAUTHENTICATED)))}shutdown(){}}class sl{constructor(t){this.t=t,this.currentUser=Bu.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new nl;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nl,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Gu("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Gu("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nl)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Gu("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Yu("string"==typeof e.accessToken),new rl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yu(null===t||"string"==typeof t),new Bu(t)}}class ol{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Bu.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class al{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ol(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Bu.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
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
 */class cl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
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
 */function ul(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */cl.T=-1;class ll{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ul(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function hl(t,e){return t<e?-1:t>e?1:0}function dl(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */class fl{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new el(tl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new el(tl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new el(tl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new el(tl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return fl.fromMillis(Date.now())}static fromDate(t){return fl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new fl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?hl(this.nanoseconds,t.nanoseconds):hl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class pl{constructor(t){this.timestamp=t}static fromTimestamp(t){return new pl(t)}static min(){return new pl(new fl(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function gl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ml(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class vl{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ju(),void 0===n?n=t.length-e:n>t.length-e&&Ju(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class wl extends vl{construct(t,e,n){return new wl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new el(tl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new wl(e)}static emptyPath(){return new wl([])}}const bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class El extends vl{construct(t,e,n){return new El(t,e,n)}static isValidIdentifier(t){return bl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),El.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new El(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new el(tl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new el(tl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new el(tl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new el(tl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new El(e)}static emptyPath(){return new El([])}}
/**
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
 */class _l{constructor(t){this.fields=t,t.sort(El.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Il{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Il(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Il(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return hl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Il.EMPTY_BYTE_STRING=new Il("");const Tl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sl(t){if(Yu(!!t),"string"==typeof t){let e=0;const n=Tl.exec(t);if(Yu(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Al(t.seconds),nanos:Al(t.nanos)}}function Al(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function kl(t){return"string"==typeof t?Il.fromBase64String(t):Il.fromUint8Array(t)}
/**
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
 */function Nl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cl(t){const e=t.mapValue.fields.__previous_value__;return Nl(e)?Cl(e):e}function Rl(t){const e=Sl(t.mapValue.fields.__local_write_time__.timestampValue);return new fl(e.seconds,e.nanos)}
/**
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
 */function Dl(t){return null==t}function Ol(t){return 0===t&&1/t==-1/0}
/**
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
 */
class Pl{constructor(t){this.path=t}static fromPath(t){return new Pl(wl.fromString(t))}static fromName(t){return new Pl(wl.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===wl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return wl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pl(new wl(t.slice()))}}
/**
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
 */function Ll(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nl(t)?4:10:Ju()}function Ml(t,e){const n=Ll(t);if(n!==Ll(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Sl(t.timestampValue),r=Sl(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,kl(t.bytesValue).isEqual(kl(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Al(t.geoPointValue.latitude)===Al(e.geoPointValue.latitude)&&Al(t.geoPointValue.longitude)===Al(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Al(t.integerValue)===Al(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Al(t.doubleValue),r=Al(e.doubleValue);return n===r?Ol(n)===Ol(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return dl(t.arrayValue.values||[],e.arrayValue.values||[],Ml);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(gl(n)!==gl(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ml(n[i],r[i])))return!1;return!0}(t,e);default:return Ju()}var r}function xl(t,e){return void 0!==(t.values||[]).find((t=>Ml(t,e)))}function Ul(t,e){const n=Ll(t),r=Ll(e);if(n!==r)return hl(n,r);switch(n){case 0:return 0;case 1:return hl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Al(t.integerValue||t.doubleValue),r=Al(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Fl(t.timestampValue,e.timestampValue);case 4:return Fl(Rl(t),Rl(e));case 5:return hl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=kl(t),r=kl(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=hl(n[i],r[i]);if(0!==t)return t}return hl(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=hl(Al(t.latitude),Al(e.latitude));return 0!==n?n:hl(Al(t.longitude),Al(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ul(n[i],r[i]);if(t)return t}return hl(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=hl(r[o],s[o]);if(0!==t)return t;const e=Ul(n[r[o]],i[s[o]]);if(0!==e)return e}return hl(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ju()}}function Fl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return hl(t,e);const n=Sl(t),r=Sl(e),i=hl(n.seconds,r.seconds);return 0!==i?i:hl(n.nanos,r.nanos)}function Vl(t){return jl(t)}function jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Sl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?kl(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Pl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=jl(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${jl(t.fields[i])}`;return n+"}"}(t.mapValue):Ju();var e,n}function $l(t){return!!t&&"integerValue"in t}function ql(t){return!!t&&"arrayValue"in t}function Bl(t){return!!t&&"nullValue"in t}function zl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function Kl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ml(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kl(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
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
 */class Gl{constructor(t){this.value=t}static empty(){return new Gl({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kl(e)}setAll(t){let e=El.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Kl(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Hl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ml(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Hl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ml(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Gl(Kl(this.value))}}function Wl(t){const e=[];return ml(t.fields,((t,n)=>{const r=new El([t]);if(Hl(n)){const t=Wl(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new _l(e)
/**
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
 */}class Xl{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Xl(t,0,pl.min(),Gl.empty(),0)}static newFoundDocument(t,e,n){return new Xl(t,1,e,n,0)}static newNoDocument(t,e){return new Xl(t,2,e,Gl.empty(),0)}static newUnknownDocument(t,e){return new Xl(t,3,e,Gl.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gl.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xl&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Xl(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ql{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Jl(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ql(t,e,n,r,i,s,o)}function Yl(t){const e=Zu(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Vl(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Dl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=hh(e.startAt)),e.endAt&&(t+="|ub:",t+=hh(e.endAt)),e.A=t}return e.A}function Zl(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!fh(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ml(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gh(t.startAt,e.startAt)&&gh(t.endAt,e.endAt)}function th(t){return Pl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class eh extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new nh(t,e,n):"array-contains"===e?new oh(t,n):"in"===e?new ah(t,n):"not-in"===e?new ch(t,n):"array-contains-any"===e?new uh(t,n):new eh(t,e,n)}static R(t,e,n){return"in"===e?new rh(t,n):new ih(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Ul(e,this.value)):null!==e&&Ll(this.value)===Ll(e)&&this.P(Ul(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ju()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nh extends eh{constructor(t,e,n){super(t,e,n),this.key=Pl.fromName(n.referenceValue)}matches(t){const e=Pl.comparator(t.key,this.key);return this.P(e)}}class rh extends eh{constructor(t,e){super(t,"in",e),this.keys=sh("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ih extends eh{constructor(t,e){super(t,"not-in",e),this.keys=sh("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function sh(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Pl.fromName(t.referenceValue)))}class oh extends eh{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ql(e)&&xl(e.arrayValue,this.value)}}class ah extends eh{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&xl(this.value.arrayValue,e)}}class ch extends eh{constructor(t,e){super(t,"not-in",e)}matches(t){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xl(this.value.arrayValue,e)}}class uh extends eh{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ql(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xl(this.value.arrayValue,t)))}}class lh{constructor(t,e){this.position=t,this.before=e}}function hh(t){return`${t.before?"b":"a"}:${t.position.map((t=>Vl(t))).join(",")}`}class dh{constructor(t,e="asc"){this.field=t,this.dir=e}}function fh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ph(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Pl.comparator(Pl.fromName(o.referenceValue),n.key):Ul(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function gh(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ml(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class mh{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function yh(t){return new mh(t)}function vh(t){return!Dl(t.limit)&&"F"===t.limitType}function wh(t){return!Dl(t.limit)&&"L"===t.limitType}function bh(t){const e=Zu(t);if(null===e.V){e.V=[];const t=function(t){for(const e of t.filters)if(e.v())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new dh(t)),e.V.push(new dh(El.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new dh(El.keyField(),t))}}}return e.V}function Eh(t){const e=Zu(t);if(!e.S)if("F"===e.limitType)e.S=Jl(e.path,e.collectionGroup,bh(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of bh(e)){const e="desc"===i.dir?"asc":"desc";t.push(new dh(i.field,e))}const n=e.endAt?new lh(e.endAt.position,!e.endAt.before):null,r=e.startAt?new lh(e.startAt.position,!e.startAt.before):null;e.S=Jl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function _h(t,e){return Zl(Eh(t),Eh(e))&&t.limitType===e.limitType}function Ih(t){return`${Yl(Eh(t))}|lt:${t.limitType}`}function Th(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Vl(e.value)}`;var e})).join(", ")}]`),Dl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+hh(t.startAt)),t.endAt&&(e+=", endAt: "+hh(t.endAt)),`Target(${e})`}(Eh(t))}; limitType=${t.limitType})`}function Sh(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!ph(n.startAt,bh(n),r)||n.endAt&&ph(n.endAt,bh(n),r)));var n,r}function Ah(t){return(e,n)=>{let r=!1;for(const i of bh(t)){const t=kh(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function kh(t,e,n){const r=t.field.isKeyField()?Pl.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ul(r,i):Ju()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ju()}}
/**
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
 */function Nh(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function Ch(t){return{integerValue:""+t}}function Rh(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Ch(e):Nh(t,e)}
/**
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
 */class Dh{constructor(){this._=void 0}}function Oh(t,e,n){return t instanceof Mh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof xh?Uh(t,e):t instanceof Fh?Vh(t,e):function(t,e){const n=Lh(t,e),r=$h(n)+$h(t.C);return $l(n)&&$l(t.C)?Ch(r):Nh(t.N,r)}(t,e)}function Ph(t,e,n){return t instanceof xh?Uh(t,e):t instanceof Fh?Vh(t,e):n}function Lh(t,e){return t instanceof jh?$l(r=e)||(n=r)&&"doubleValue"in n?e:{integerValue:0}:null;var n,r}class Mh extends Dh{}class xh extends Dh{constructor(t){super(),this.elements=t}}function Uh(t,e){const n=qh(e);for(const r of t.elements)n.some((t=>Ml(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Fh extends Dh{constructor(t){super(),this.elements=t}}function Vh(t,e){let n=qh(e);for(const r of t.elements)n=n.filter((t=>!Ml(t,r)));return{arrayValue:{values:n}}}class jh extends Dh{constructor(t,e){super(),this.N=t,this.C=e}}function $h(t){return Al(t.integerValue||t.doubleValue)}function qh(t){return ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Bh{constructor(t,e){this.version=t,this.transformResults=e}}class zh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zh}static exists(t){return new zh(void 0,t)}static updateTime(t){return new zh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Kh{}function Gh(t,e,n){var r;t instanceof Yh?function(t,e,n){const r=t.value.clone(),i=ed(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Zh?function(t,e,n){if(!Hh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ed(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(td(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Wh(t,e,n){var r;t instanceof Yh?function(t,e,n){if(!Hh(t.precondition,e))return;const r=t.value.clone(),i=nd(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Jh(e),r).setHasLocalMutations()}(t,e,n):t instanceof Zh?function(t,e,n){if(!Hh(t.precondition,e))return;const r=nd(t.fieldTransforms,n,e),i=e.data;i.setAll(td(t)),i.setAll(r),e.convertToFoundDocument(Jh(e),i).setHasLocalMutations()}(t,e,n):(r=e,Hh(t.precondition,r)&&r.convertToNoDocument(pl.min()))}function Xh(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Lh(r.transform,t||null);null!=i&&(null==n&&(n=Gl.empty()),n.set(r.field,i))}return n||null}function Qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&dl(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof xh&&r instanceof xh||n instanceof Fh&&r instanceof Fh?dl(n.elements,r.elements,Ml):n instanceof jh&&r instanceof jh?Ml(n.C,r.C):n instanceof Mh&&r instanceof Mh);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function Jh(t){return t.isFoundDocument()?t.version:pl.min()}class Yh extends Kh{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Zh extends Kh{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function td(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ed(t,e,n){const r=new Map;Yu(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ph(o,a,n[i]))}return r}function nd(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Oh(t,s,e))}return r}class rd extends Kh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class id extends Kh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class sd{constructor(t){this.count=t}}
/**
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
 */var od,ad;function cd(t){if(void 0===t)return Wu("GRPC error has no .code"),tl.UNKNOWN;switch(t){case od.OK:return tl.OK;case od.CANCELLED:return tl.CANCELLED;case od.UNKNOWN:return tl.UNKNOWN;case od.DEADLINE_EXCEEDED:return tl.DEADLINE_EXCEEDED;case od.RESOURCE_EXHAUSTED:return tl.RESOURCE_EXHAUSTED;case od.INTERNAL:return tl.INTERNAL;case od.UNAVAILABLE:return tl.UNAVAILABLE;case od.UNAUTHENTICATED:return tl.UNAUTHENTICATED;case od.INVALID_ARGUMENT:return tl.INVALID_ARGUMENT;case od.NOT_FOUND:return tl.NOT_FOUND;case od.ALREADY_EXISTS:return tl.ALREADY_EXISTS;case od.PERMISSION_DENIED:return tl.PERMISSION_DENIED;case od.FAILED_PRECONDITION:return tl.FAILED_PRECONDITION;case od.ABORTED:return tl.ABORTED;case od.OUT_OF_RANGE:return tl.OUT_OF_RANGE;case od.UNIMPLEMENTED:return tl.UNIMPLEMENTED;case od.DATA_LOSS:return tl.DATA_LOSS;default:return Ju()}}(ad=od||(od={}))[ad.OK=0]="OK",ad[ad.CANCELLED=1]="CANCELLED",ad[ad.UNKNOWN=2]="UNKNOWN",ad[ad.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ad[ad.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ad[ad.NOT_FOUND=5]="NOT_FOUND",ad[ad.ALREADY_EXISTS=6]="ALREADY_EXISTS",ad[ad.PERMISSION_DENIED=7]="PERMISSION_DENIED",ad[ad.UNAUTHENTICATED=16]="UNAUTHENTICATED",ad[ad.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ad[ad.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ad[ad.ABORTED=10]="ABORTED",ad[ad.OUT_OF_RANGE=11]="OUT_OF_RANGE",ad[ad.UNIMPLEMENTED=12]="UNIMPLEMENTED",ad[ad.INTERNAL=13]="INTERNAL",ad[ad.UNAVAILABLE=14]="UNAVAILABLE",ad[ad.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class ud{constructor(t,e){this.comparator=t,this.root=e||hd.EMPTY}insert(t,e){return new ud(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,hd.BLACK,null,null))}remove(t){return new ud(this.comparator,this.root.remove(t,this.comparator).copy(null,null,hd.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ld(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ld(this.root,t,this.comparator,!1)}getReverseIterator(){return new ld(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ld(this.root,t,this.comparator,!0)}}class ld{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class hd{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:hd.RED,this.left=null!=r?r:hd.EMPTY,this.right=null!=i?i:hd.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new hd(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return hd.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return hd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,hd.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,hd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ju();if(this.right.isRed())throw Ju();const t=this.left.check();if(t!==this.right.check())throw Ju();return t+(this.isRed()?0:1)}}hd.EMPTY=null,hd.RED=!0,hd.BLACK=!1,hd.EMPTY=new class{constructor(){this.size=0}get key(){throw Ju()}get value(){throw Ju()}get color(){throw Ju()}get left(){throw Ju()}get right(){throw Ju()}copy(t,e,n,r,i){return this}insert(t,e,n){return new hd(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class dd{constructor(t){this.comparator=t,this.data=new ud(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fd(this.data.getIterator())}getIteratorFrom(t){return new fd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof dd))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dd(this.comparator);return e.data=t,e}}class fd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */const pd=new ud(Pl.comparator);function gd(){return pd}const md=new ud(Pl.comparator);function yd(){return md}const vd=new ud(Pl.comparator);const wd=new dd(Pl.comparator);function bd(...t){let e=wd;for(const n of t)e=e.add(n);return e}const Ed=new dd(hl);function _d(){return Ed}
/**
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
 */class Id{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Td.createSynthesizedTargetChangeForCurrentChange(t,e)),new Id(pl.min(),n,_d(),gd(),bd())}}class Td{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Td(Il.EMPTY_BYTE_STRING,e,bd(),bd(),bd())}}
/**
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
 */class Sd{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Ad{constructor(t,e){this.targetId=t,this.O=e}}class kd{constructor(t,e,n=Il.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Nd{constructor(){this.F=0,this.M=Dd(),this.L=Il.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=bd(),e=bd(),n=bd();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ju()}})),new Td(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Dd()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Cd{constructor(t){this.tt=t,this.et=new Map,this.nt=gd(),this.st=Rd(),this.it=new dd(hl)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:Ju()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(th(t))if(0===n){const n=new Pl(t.path);this.at(e,n,Xl.newNoDocument(n,pl.min()))}else Yu(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&th(i.target)){const e=new Pl(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,Xl.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=bd();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Id(t,e,this.it,this.nt,n);return this.nt=gd(),this.st=Rd(),this.it=new dd(hl),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Nd,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new dd(hl),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||Gu("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new Nd),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Rd(){return new ud(Pl.comparator)}function Dd(){return new ud(Pl.comparator)}
/**
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
 */const Od={asc:"ASCENDING",desc:"DESCENDING"},Pd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ld{constructor(t,e){this.databaseId=t,this.D=e}}function Md(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xd(t,e){return t.D?e.toBase64():e.toUint8Array()}function Ud(t,e){return Md(t,e.toTimestamp())}function Fd(t){return Yu(!!t),pl.fromTimestamp(function(t){const e=Sl(t);return new fl(e.seconds,e.nanos)}(t))}function Vd(t,e){return(n=t,new wl(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function jd(t){const e=wl.fromString(t);return Yu(af(e)),e}function $d(t,e){return Vd(t.databaseId,e.path)}function qd(t,e){const n=jd(e);if(n.get(1)!==t.databaseId.projectId)throw new el(tl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new el(tl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pl(Hd(n))}function Bd(t,e){return Vd(t.databaseId,e)}function zd(t){return new wl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hd(t){return Yu(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Kd(t,e,n){return{name:$d(t,e),fields:n.value.mapValue.fields}}function Gd(t,e){return{documents:[Bd(t,e.path)]}}function Wd(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Bd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(zl(t.value))return{unaryFilter:{field:ef(t.field),op:"IS_NAN"}};if(Bl(t.value))return{unaryFilter:{field:ef(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(zl(t.value))return{unaryFilter:{field:ef(t.field),op:"IS_NOT_NAN"}};if(Bl(t.value))return{unaryFilter:{field:ef(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ef(t.field),op:tf(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:ef((e=t).field),direction:Zd(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.D||Dl(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Jd(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Jd(e.endAt)),n}function Xd(t){let e=function(t){const e=jd(t);return 4===e.length?wl.emptyPath():Hd(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Yu(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Qd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new dh(nf((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Dl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Yd(n.startAt));let u=null;return n.endAt&&(u=Yd(n.endAt)),function(t,e,n,r,i,s,o,a){return new mh(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Qd(t){return t?void 0!==t.unaryFilter?[sf(t)]:void 0!==t.fieldFilter?[rf(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Qd(t))).reduce(((t,e)=>t.concat(e))):Ju():[]}function Jd(t){return{before:t.before,values:t.position}}function Yd(t){const e=!!t.before,n=t.values||[];return new lh(n,e)}function Zd(t){return Od[t]}function tf(t){return Pd[t]}function ef(t){return{fieldPath:t.canonicalString()}}function nf(t){return El.fromServerFormat(t.fieldPath)}function rf(t){return eh.create(nf(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Ju()}}(t.fieldFilter.op),t.fieldFilter.value)}function sf(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nf(t.unaryFilter.field);return eh.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nf(t.unaryFilter.field);return eh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=nf(t.unaryFilter.field);return eh.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nf(t.unaryFilter.field);return eh.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Ju()}}function of(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function af(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */
class cf{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ju(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new cf(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof cf?e:cf.resolve(e)}catch(e){return cf.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):cf.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):cf.reject(e)}static resolve(t){return new cf(((e,n)=>{e(t)}))}static reject(t){return new cf(((e,n)=>{n(t)}))}static waitFor(t){return new cf(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=cf.resolve(!1);for(const n of t)e=e.next((t=>t?cf.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function uf(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */class lf{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Gh(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Wh(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Wh(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(pl.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),bd())}isEqual(t){return this.batchId===t.batchId&&dl(this.mutations,t.mutations,((t,e)=>Qh(t,e)))&&dl(this.baseMutations,t.baseMutations,((t,e)=>Qh(t,e)))}}class hf{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Yu(t.mutations.length===n.length);let r=vd;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new hf(t,e,n,r)}}
/**
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
 */class df{constructor(t,e,n,r,i=pl.min(),s=pl.min(),o=Il.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new df(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new df(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new df(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class ff{constructor(t){this.Wt=t}}function pf(t){const e=Xd({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new mh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
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
 */class gf{constructor(){this.Gt=new mf}addToCollectionParentIndex(t,e){return this.Gt.add(e),cf.resolve()}getCollectionParents(t,e){return cf.resolve(this.Gt.getEntries(e))}}class mf{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new dd(wl.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new dd(wl.comparator)).toArray()}}
/**
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
 */class yf{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new yf(0)}static ie(){return new yf(-1)}}
/**
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
 */async function vf(t){if(t.code!==tl.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Gu("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class wf{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){ml(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return yl(this.inner)}}
/**
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
 */
/**
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
 */
class bf{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,Pl.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Sn(t,e,n):this.Dn(t,e,n);var r}Vn(t,e){return this.An(t,new Pl(e)).next((t=>{let e=yd();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=yd();return this.Ht.getCollectionParents(t,r).next((s=>cf.forEach(s,(s=>{const o=(a=e,c=s.child(r),new mh(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Xl.newInvalidDocument(n),r=r.insert(n,i)),Wh(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Sh(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=bd();for(const s of e)for(const t of s.mutations)t instanceof Zh&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
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
 */class Ef{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=bd(),r=bd();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ef(t,e.fromCache,n,r)}}
/**
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
 */class _f{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(pl.min())?this.Fn(t,e):this.On.Pn(t,r).next((i=>{const s=this.Mn(e,i);return(vh(e)||wh(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(Ku()<=Pn.DEBUG&&Gu("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Th(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Mn(t,e){let n=new dd(Ah(t));return e.forEach(((e,r)=>{Sh(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return Ku()<=Pn.DEBUG&&Gu("QueryEngine","Using full collection scan to execute query:",Th(e)),this.On.getDocumentsMatchingQuery(t,e,pl.min())}}
/**
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
 */class If{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new ud(hl),this.qn=new wf((t=>Yl(t)),Zl),this.Kn=pl.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new bf(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function Tf(t,e){const n=Zu(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new bf(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=bd();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Sf(t){const e=Zu(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function Af(t,e){const n=Zu(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,d),u=a,h=e,Yu((l=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.ze.updateTargetData(t,d))}var u,l,h}));let a=gd();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=bd();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=gd();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(pl.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):Gu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(pl.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return cf.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function kf(t,e){const n=Zu(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function Nf(t,e,n){const r=Zu(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!uf(o))throw o;Gu("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Cf(t,e,n){const r=Zu(t);let i=pl.min(),s=bd();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Zu(t),i=r.qn.get(n);return void 0!==i?cf.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Eh(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:pl.min(),n?s:bd()))).next((t=>({documents:t,Gn:s})))))}
/**
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
 */class Rf{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return cf.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Fd(n.createTime)}),cf.resolve()}getNamedQuery(t,e){return cf.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,{name:(n=e).name,query:pf(n.bundledQuery),readTime:Fd(n.readTime)}),cf.resolve();var n}}
/**
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
 */class Df{constructor(){this.Zn=new dd(Of.ts),this.es=new dd(Of.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Of(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Of(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Pl(new wl([])),n=new Of(e,t),r=new Of(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Pl(new wl([])),n=new Of(e,t),r=new Of(e,t+1);let i=bd();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Of(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Of{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Pl.comparator(t.key,e.key)||hl(t.ls,e.ls)}static ns(t,e){return hl(t.ls,e.ls)||Pl.comparator(t.key,e.key)}}
/**
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
 */class Pf{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new dd(Of.ts)}checkEmpty(t){return cf.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new lf(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Of(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return cf.resolve(s)}lookupMutationBatch(t,e){return cf.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return cf.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return cf.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return cf.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Of(e,0),r=new Of(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),cf.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new dd(hl);return e.forEach((t=>{const e=new Of(t,0),r=new Of(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),cf.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Pl.isDocumentKey(i)||(i=i.child(""));const s=new Of(new Pl(i),0);let o=new dd(hl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),cf.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Yu(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return cf.forEach(e.mutations,(r=>{const i=new Of(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new Of(e,0),r=this.ds.firstAfterOrEqual(n);return cf.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,cf.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
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
 */class Lf{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new ud(Pl.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return cf.resolve(n?n.document.clone():Xl.newInvalidDocument(e))}getEntries(t,e){let n=gd();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Xl.newInvalidDocument(t))})),cf.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=gd();const i=new Pl(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Sh(e,i)&&(r=r.insert(i.key,i.clone()))}return cf.resolve(r)}Es(t,e){return cf.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Mf(this)}getSize(t){return cf.resolve(this.size)}}class Mf extends class{constructor(){this.changes=new wf((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:pl.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Xl.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?cf.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),cf.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
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
 */class xf{constructor(t){this.persistence=t,this.Ts=new wf((t=>Yl(t)),Zl),this.lastRemoteSnapshotVersion=pl.min(),this.highestTargetId=0,this.Is=0,this.As=new Df,this.targetCount=0,this.Rs=yf.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),cf.resolve()}getLastRemoteSnapshotVersion(t){return cf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return cf.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),cf.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),cf.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new yf(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,cf.resolve()}updateTargetData(t,e){return this.ae(e),cf.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,cf.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),cf.waitFor(i).next((()=>r))}getTargetCount(t){return cf.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return cf.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),cf.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),cf.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),cf.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return cf.resolve(n)}containsKey(t,e){return cf.resolve(this.As.containsKey(e))}}
/**
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
 */class Uf{constructor(t,e){var n;this.bs={},this.Le=new cl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new xf(this),this.Ht=new gf,this.He=(n=this.Ht,new Lf(n,(t=>this.referenceDelegate.Ps(t)))),this.N=new ff(e),this.Je=new Rf(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Pf(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){Gu("MemoryPersistence","Starting transaction:",t);const r=new Ff(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return cf.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Ff extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Vf{constructor(t){this.persistence=t,this.Ds=new Df,this.Cs=null}static Ns(t){return new Vf(t)}get xs(){if(this.Cs)return this.Cs;throw Ju()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),cf.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),cf.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),cf.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return cf.forEach(this.xs,(n=>{const r=Pl.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return cf.or([()=>cf.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class jf{constructor(){this.activeTargetIds=_d()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $f{constructor(){this.yi=new jf,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new jf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
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
 */class qf{Ei(t){}shutdown(){}}
/**
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
 */class Bf{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Gu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){Gu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Hf{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
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
 */class Kf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);Gu("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(Gu("RestConnection","Received: ",t),t)),(e=>{throw Xu("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+zu,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=zf[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new qu;o.listenOnce(xu.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Mu.NO_ERROR:const e=o.getResponseJson();Gu("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Mu.TIMEOUT:Gu("Connection",'RPC "'+t+'" timed out'),s(new el(tl.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const n=o.getStatus();if(Gu("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(tl).indexOf(e)>=0?e:tl.UNKNOWN}(t.status);s(new el(e,t.message))}else s(new el(tl.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new el(tl.UNAVAILABLE,"Connection failed."));break;default:Ju()}}finally{Gu("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Ru,i=Ia(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new ju({})),this.Ui(s.initMessageHeaders,e),pn()||mn()||fn().indexOf("Electron/")>=0||yn()||fn().indexOf("MSAppHost/")>=0||gn()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Gu("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new Hf({vi:t=>{u?Gu("Connection","Not sending because WebChannel is closed:",t):(c||(Gu("Connection","Opening WebChannel transport."),a.open(),c=!0),Gu("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(a,$u.EventType.OPEN,(()=>{u||Gu("Connection","WebChannel transport opened.")})),h(a,$u.EventType.CLOSE,(()=>{u||(u=!0,Gu("Connection","WebChannel transport closed"),l.$i())})),h(a,$u.EventType.ERROR,(t=>{u||(u=!0,Xu("Connection","WebChannel transport errored:",t),l.$i(new el(tl.UNAVAILABLE,"The operation could not be completed")))})),h(a,$u.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Yu(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Gu("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=od[t];if(void 0!==e)return cd(e)}(t),n=i.message;void 0===e&&(e=tl.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.$i(new el(e,n)),a.close()}else Gu("Connection","WebChannel received:",n),l.Oi(n)}})),h(i,Uu.STAT_EVENT,(t=>{t.stat===Fu?Gu("Connection","Detected buffering proxy"):t.stat===Vu&&Gu("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ki()}),0),l}}function Gf(){return"undefined"!=typeof document?document:null}
/**
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
 */function Wf(t){return new Ld(t,!0)}class Xf{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&Gu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
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
 */class Qf{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Xf(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===tl.RESOURCE_EXHAUSTED?(Wu(e.toString()),Wu("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===tl.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new el(tl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return Gu("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(Gu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jf extends Qf{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ju(),s=e.targetChange.targetIds||[],o=function(t,e){return t.D?(Yu(void 0===e||"string"==typeof e),Il.fromBase64String(e||"")):(Yu(void 0===e||e instanceof Uint8Array),Il.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?tl.UNKNOWN:cd(t.code);return new el(e,t.message||"")}(a);n=new kd(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qd(t,r.document.name),s=Fd(r.document.updateTime),o=new Gl({mapValue:{fields:r.document.fields}}),a=Xl.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Sd(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qd(t,r.document),s=r.readTime?Fd(r.readTime):pl.min(),o=Xl.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qd(t,r.document),s=r.removedTargetIds||[];n=new Sd([],s,i,null)}else{if(!("filter"in e))return Ju();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new sd(r),s=t.targetId;n=new Ad(s,i)}}var r;return n}(this.N,t),n=function(t){if(!("targetChange"in t))return pl.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?pl.min():e.readTime?Fd(e.readTime):pl.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=zd(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=th(r)?{documents:Gd(t,r)}:{query:Wd(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=xd(t,e.resumeToken):e.snapshotVersion.compareTo(pl.min())>0&&(n.readTime=Md(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ju()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=zd(this.N),e.removeTarget=t,this.wr(e)}}class Yf extends Qf{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(Yu(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(Yu(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Fd(t.updateTime):Fd(e);return n.isEqual(pl.min())&&(n=Fd(e)),new Bh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Fd(t.commitTime);return this.listener.vr(n,e)}return Yu(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=zd(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Yh)n={update:Kd(t,e.key,e.value)};else if(e instanceof rd)n={delete:$d(t,e.key)};else if(e instanceof Zh)n={update:Kd(t,e.key,e.data),updateMask:of(e.fieldMask)};else{if(!(e instanceof id))return Ju();n={verify:$d(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Mh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Fh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jh)return{fieldPath:e.field.canonicalString(),increment:n.C};throw Ju()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Ud(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ju())),n;var r,i}(this.N,t)))};this.wr(e)}}
/**
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
 */class Zf extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new el(tl.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tl.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new el(tl.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tl.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new el(tl.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class tp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Wu(e),this.$r=!1):Gu("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
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
 */class ep{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{lp(this)&&(Gu("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zu(t);e.Kr.add(4),await rp(e),e.Wr.set("Unknown"),e.Kr.delete(4),await np(e)}(this))}))})),this.Wr=new tp(n,r)}}async function np(t){if(lp(t))for(const e of t.jr)await e(!0)}async function rp(t){for(const e of t.jr)await e(!1)}function ip(t,e){const n=Zu(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),up(n)?cp(n):Ap(n).cr()&&op(n,e))}function sp(t,e){const n=Zu(t),r=Ap(n);n.qr.delete(e),r.cr()&&ap(n,e),0===n.qr.size&&(r.cr()?r.lr():lp(n)&&n.Wr.set("Unknown"))}function op(t,e){t.Gr.Y(e.targetId),Ap(t).Ir(e)}function ap(t,e){t.Gr.Y(e),Ap(t).Ar(e)}function cp(t){t.Gr=new Cd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Ap(t).start(),t.Wr.Or()}function up(t){return lp(t)&&!Ap(t).ar()&&t.qr.size>0}function lp(t){return 0===Zu(t).Kr.size}function hp(t){t.Gr=void 0}async function dp(t){t.qr.forEach(((e,n)=>{op(t,e)}))}async function fp(t,e){hp(t),up(t)?(t.Wr.Lr(e),cp(t)):t.Wr.set("Unknown")}async function pp(t,e,n){if(t.Wr.set("Online"),e instanceof kd&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(r){Gu("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gp(t,r)}else if(e instanceof Sd?t.Gr.rt(e):e instanceof Ad?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(pl.min()))try{const e=await Sf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(Il.EMPTY_BYTE_STRING,n.snapshotVersion)),ap(t,e);const r=new df(n.target,e,1,n.sequenceNumber);op(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){Gu("RemoteStore","Failed to raise snapshot:",i),await gp(t,i)}}async function gp(t,e,n){if(!uf(e))throw e;t.Kr.add(1),await rp(t),t.Wr.set("Offline"),n||(n=()=>Sf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Gu("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await np(t)}))}function mp(t,e){return e().catch((n=>gp(t,n,e)))}async function yp(t){const e=Zu(t),n=kp(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;vp(e);)try{const t=await kf(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,wp(e,t)}catch(i){await gp(e,i)}bp(e)&&Ep(e)}function vp(t){return lp(t)&&t.Ur.length<10}function wp(t,e){t.Ur.push(e);const n=kp(t);n.cr()&&n.br&&n.Pr(e.mutations)}function bp(t){return lp(t)&&!kp(t).ar()&&t.Ur.length>0}function Ep(t){kp(t).start()}async function _p(t){kp(t).Sr()}async function Ip(t){const e=kp(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Tp(t,e,n){const r=t.Ur.shift(),i=hf.from(r,e,n);await mp(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await yp(t)}async function Sp(t,e){e&&kp(t).br&&await async function(t,e){if(function(t){switch(t){case tl.OK:return Ju();case tl.CANCELLED:case tl.UNKNOWN:case tl.DEADLINE_EXCEEDED:case tl.RESOURCE_EXHAUSTED:case tl.INTERNAL:case tl.UNAVAILABLE:case tl.UNAUTHENTICATED:return!1;case tl.INVALID_ARGUMENT:case tl.NOT_FOUND:case tl.ALREADY_EXISTS:case tl.PERMISSION_DENIED:case tl.FAILED_PRECONDITION:case tl.ABORTED:case tl.OUT_OF_RANGE:case tl.UNIMPLEMENTED:case tl.DATA_LOSS:return!0;default:return Ju()}}(n=e.code)&&n!==tl.ABORTED){const n=t.Ur.shift();kp(t).hr(),await mp(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await yp(t)}var n}(t,e),bp(t)&&Ep(t)}function Ap(t){return t.zr||(t.zr=function(t,e,n){const r=Zu(t);return r.Cr(),new Jf(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:dp.bind(null,t),Ci:fp.bind(null,t),Tr:pp.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),up(t)?cp(t):t.Wr.set("Unknown")):(await t.zr.stop(),hp(t))}))),t.zr}function kp(t){return t.Hr||(t.Hr=function(t,e,n){const r=Zu(t);return r.Cr(),new Yf(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:_p.bind(null,t),Ci:Sp.bind(null,t),Vr:Ip.bind(null,t),vr:Tp.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await yp(t)):(await t.Hr.stop(),t.Ur.length>0&&(Gu("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
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
 */}class Np{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Np(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new el(tl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(t,e){if(Wu("AsyncQueue",`${e}: ${t}`),uf(t))return new el(tl.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Rp{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pl.comparator(e.key,n.key):(t,e)=>Pl.comparator(t.key,e.key),this.keyedMap=yd(),this.sortedSet=new ud(this.comparator)}static emptySet(t){return new Rp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Rp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Dp{constructor(){this.Jr=new ud(Pl.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):Ju():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Op{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Op(t,e,Rp.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Pp{constructor(){this.Xr=void 0,this.listeners=[]}}class Lp{constructor(){this.queries=new wf((t=>Ih(t)),_h),this.onlineState="Unknown",this.Zr=new Set}}async function Mp(t,e){const n=Zu(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Pp),i)try{s.Xr=await n.onListen(r)}catch(o){const t=Cp(o,`Initialization of query '${Th(e.query)}' failed`);return void e.onError(t)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Vp(n)}async function xp(t,e){const n=Zu(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Up(t,e){const n=Zu(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&Vp(n)}function Fp(t,e,n){const r=Zu(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Vp(t){t.Zr.forEach((t=>{t.next()}))}class jp{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Op(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Op.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
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
 */class $p{constructor(t){this.key=t}}class qp{constructor(t){this.key=t}}class Bp{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=bd(),this.mutatedKeys=bd(),this.po=Ah(t),this.Eo=new Rp(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Dp,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=vh(this.query)&&r.size===this.query.limit?r.last():null,c=wh(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Sh(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),vh(this.query)||wh(this.query))for(;s.size>this.query.limit;){const t=vh(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ju()}};return n(t)-n(e)}(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Op(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Dp,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=bd(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new qp(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new $p(n))})),e}So(t){this._o=t.Gn,this.yo=bd();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Op.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class zp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Hp{constructor(t){this.key=t,this.Co=!1}}class Kp{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new wf((t=>Ih(t)),_h),this.ko=new Map,this.$o=new Set,this.Oo=new ud(Pl.comparator),this.Fo=new Map,this.Mo=new Df,this.Lo={},this.Bo=new Map,this.Uo=yf.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Gp(t,e){const n=function(t){const e=Zu(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yp.bind(null,e),e.No.Tr=Up.bind(null,e.eventManager),e.No.jo=Fp.bind(null,e.eventManager),e}(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await function(t,e){const n=Zu(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,cf.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new df(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,Eh(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Cf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return sg(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await Cf(t.localStore,e,!0),s=new Bp(e,i.Gn),o=s.Io(i.documents),a=Td.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);sg(t,n,c.vo);const u=new zp(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&ip(n.remoteStore,t)}return i}async function Wp(t,e){const n=Zu(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!_h(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),sp(n.remoteStore,r.targetId),rg(n,r.targetId)})).catch(vf)):(rg(n,r.targetId),await Nf(n.localStore,r.targetId,!0))}async function Xp(t,e,n){const r=function(t){const e=Zu(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tg.bind(null,e),e}(t);try{const t=await function(t,e){const n=Zu(t),r=fl.now(),i=e.reduce(((t,e)=>t.add(e.key)),bd());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.Pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=Xh(t,s.get(t.key));null!=e&&o.push(new Zh(t.key,e,Wl(e.value.mapValue),zh.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new ud(hl)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await cg(r,t.changes),await yp(r.remoteStore)}catch(i){const t=Cp(i,"Failed to persist write");n.reject(t)}}async function Qp(t,e){const n=Zu(t);try{const t=await Af(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(Yu(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?Yu(r.Co):t.removedDocuments.size>0&&(Yu(r.Co),r.Co=!1))})),await cg(n,t,e)}catch(r){await vf(r)}}function Jp(t,e,n){const r=Zu(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Zu(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)})),r&&Vp(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yp(t,e,n){const r=Zu(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new ud(Pl.comparator);t=t.insert(s,Xl.newNoDocument(s,pl.min()));const n=bd().add(s),i=new Id(pl.min(),new Map,new dd(hl),t,n);await Qp(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),ag(r)}else await Nf(r.localStore,e,!1).then((()=>rg(r,e,n))).catch(vf)}async function Zp(t,e){const n=Zu(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Zu(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=cf.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Yu(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(n.localStore,e);ng(n,r,null),eg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cg(n,t)}catch(i){await vf(i)}}async function tg(t,e,n){const r=Zu(t);try{const t=await function(t,e){const n=Zu(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.In.lookupMutationBatch(t,e).next((e=>(Yu(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(r.localStore,e);ng(r,e,n),eg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cg(r,t)}catch(i){await vf(i)}}function eg(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function ng(t,e,n){const r=Zu(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function rg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||ig(t,e)}))}function ig(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(sp(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),ag(t))}function sg(t,e,n){for(const r of n)r instanceof $p?(t.Mo.addReference(r.key,e),og(t,r)):r instanceof qp?(Gu("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||ig(t,r.key)):Ju()}function og(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(Gu("SyncEngine","New document in limbo: "+n),t.$o.add(r),ag(t))}function ag(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Pl(wl.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Hp(n)),t.Oo=t.Oo.insert(n,r),ip(t.remoteStore,new df(Eh(yh(n.path)),r,2,cl.T))}}async function cg(t,e,n){const r=Zu(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ef.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=Zu(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>cf.forEach(e,(e=>cf.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>cf.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!uf(r))throw r;Gu("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function ug(t,e){const n=Zu(t);if(!n.currentUser.isEqual(e)){Gu("SyncEngine","User change. New user:",e.toKey());const t=await Tf(n.localStore,e);n.currentUser=e,(r=n).Bo.forEach((t=>{t.forEach((t=>{t.reject(new el(tl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await cg(n,t.Wn)}var r}function lg(t,e){const n=Zu(t),r=n.Fo.get(e);if(r&&r.Co)return bd().add(r.key);{let t=bd();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}class hg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Wf(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return function(t,e,n,r){return new If(t,e,n,r)}(this.persistence,new _f,t.initialUser,this.N)}Go(t){return new Uf(Vf.Ns,this.N)}Wo(t){return new $f}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Jp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ug.bind(null,this.syncEngine),await async function(t,e){const n=Zu(t);e?(n.Kr.delete(2),await np(n)):e||(n.Kr.add(2),await rp(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Lp}createDatastore(t){const e=Wf(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Kf(r));var r,i;return i=t.credentials,new Zf(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Jp(this.syncEngine,t,0),s=Bf.bt()?new Bf:new qf,new ep(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Kp(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Zu(t);Gu("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await rp(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */class fg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */class pg{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Bu.UNAUTHENTICATED,this.clientId=ll.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{Gu("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new el(tl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new nl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Cp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Gu("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Gu("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Tf(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new hg)),t.offlineComponents}(t);Gu("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=Zu(t);n.asyncQueue.verifyOperationInProgress(),Gu("RemoteStore","RemoteStore received new credentials");const r=lp(n);n.Kr.add(3),await rp(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await np(n)}(e.remoteStore,t))),t.onlineComponents=e}async function mg(t){return t.onlineComponents||(Gu("FirestoreClient","Using default OnlineComponentProvider"),await gg(t,new dg)),t.onlineComponents}async function yg(t){const e=await mg(t),n=e.eventManager;return n.onListen=Gp.bind(null,e.syncEngine),n.onUnlisten=Wp.bind(null,e.syncEngine),n}class vg{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wg{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof wg&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const bg=new Map;
/**
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
 */function Eg(t,e,n){if(!n)throw new el(tl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _g(t){if(!Pl.isDocumentKey(t))throw new el(tl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ig(t){if(Pl.isDocumentKey(t))throw new el(tl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tg(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ju()}function Sg(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new el(tl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tg(t);throw new el(tl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */class Ag{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new el(tl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new el(tl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new el(tl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class kg{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ag({}),this._settingsFrozen=!1,t instanceof wg?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new el(tl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wg(t.options.projectId)}(t))}get app(){if(!this._app)throw new el(tl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new el(tl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ag(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new il;switch(t.type){case"gapi":const e=t.client;return Yu(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new al(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new el(tl.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=bg.get(t);e&&(Gu("ComponentProvider","Removing Datastore"),bg.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */class Ng{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rg(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ng(this.firestore,t,this._key)}}class Cg{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cg(this.firestore,t,this._query)}}class Rg extends Cg{constructor(t,e,n){super(t,e,yh(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ng(this.firestore,null,new Pl(t))}withConverter(t){return new Rg(this.firestore,t,this._path)}}function Dg(t,e,...n){if(t=Cn(t),Eg("collection","path",e),t instanceof kg){const r=wl.fromString(e,...n);return Ig(r),new Rg(t,null,r)}{if(!(t instanceof Ng||t instanceof Rg))throw new el(tl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wl.fromString(e,...n));return Ig(r),new Rg(t.firestore,null,r)}}function Og(t,e,...n){if(t=Cn(t),1===arguments.length&&(e=ll.I()),Eg("doc","path",e),t instanceof kg){const r=wl.fromString(e,...n);return _g(r),new Ng(t,null,new Pl(r))}{if(!(t instanceof Ng||t instanceof Rg))throw new el(tl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wl.fromString(e,...n));return _g(r),new Ng(t.firestore,t instanceof Rg?t.converter:null,new Pl(r))}}
/**
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
 */class Pg{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Xf(this,"async_queue_retry"),this.Ea=()=>{const t=Gf();t&&Gu("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Gf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Gf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new nl;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!uf(t))throw t;Gu("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,Wu("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Np.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&Ju()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function Lg(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(t)}class Mg extends kg{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Pg,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fg(this),this._firestoreClient.terminate()}}function xg(t=Zn()){return Xn(t,"firestore").getImmediate()}function Ug(t){return t._firestoreClient||Fg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fg(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new vg(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new pg(t._credentials,t._queue,r)}
/**
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
 */
/**
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
 */class Vg{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new el(tl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new El(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */class jg{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jg(Il.fromBase64String(t))}catch(e){throw new el(tl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new jg(Il.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class $g{constructor(t){this._methodName=t}}
/**
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
 */class qg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new el(tl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new el(tl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return hl(this._lat,t._lat)||hl(this._long,t._long)}}
/**
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
 */const Bg=/^__.*__$/;class zg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Zh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yh(t,this.data,e,this.fieldTransforms)}}class Hg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Zh(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Kg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ju()}}class Gg{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Gg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return sm(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Kg(this.Da)&&Bg.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Wg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Wf(t)}Ba(t,e,n,r=!1){return new Gg({Da:t,methodName:e,La:n,path:El.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Xg(t){const e=t._freezeSettings(),n=Wf(t._databaseId);return new Wg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qg(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);em("Data must be an object, but it was:",o,r);const a=Zg(r,o);let c,u;if(s.merge)c=new _l(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=nm(e,r,n);if(!o.contains(i))throw new el(tl.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);om(t,i)||t.push(i)}c=new _l(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new zg(new Gl(a),c,u)}class Jg extends $g{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Jg}}function Yg(t,e){if(tm(t=Cn(t)))return em("Unsupported field value:",e,t),Zg(t,e);if(t instanceof $g)return function(t,e){if(!Kg(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Yg(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Cn(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Rh(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=fl.fromDate(t);return{timestampValue:Md(e.N,n)}}if(t instanceof fl){const n=new fl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Md(e.N,n)}}if(t instanceof qg)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof jg)return{bytesValue:xd(e.N,t._byteString)};if(t instanceof Ng){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Vd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${Tg(t)}`)}(t,e)}function Zg(t,e){const n={};return yl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ml(t,((t,r)=>{const i=Yg(r,e.Na(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function tm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof fl||t instanceof qg||t instanceof jg||t instanceof Ng||t instanceof $g)}function em(t,e,n){if(!tm(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Tg(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}var r}function nm(t,e,n){if((e=Cn(e))instanceof Vg)return e._internalPath;if("string"==typeof e)return im(t,e);throw sm("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const rm=new RegExp("[~\\*/\\[\\]]");function im(t,e,n){if(e.search(rm)>=0)throw sm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vg(...e.split("."))._internalPath}catch(r){throw sm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sm(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new el(tl.INVALID_ARGUMENT,a+t+c)}function om(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class am{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ng(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(um("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class cm extends am{data(){return super.data()}}function um(t,e){return"string"==typeof e?im(t,e):e instanceof Vg?e._internalPath:e._delegate._internalPath}
/**
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
 */class lm{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hm extends am{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(um("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class dm extends hm{data(t={}){return super.data(t)}}class fm{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new lm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new dm(this._firestore,this._userDataWriter,n.key,n,new lm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new el(tl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new dm(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lm(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new dm(t._firestore,t._userDataWriter,e.doc.key,e.doc,new lm(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:pm(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function pm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ju()}}
/**
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
 */function gm(t){if(wh(t)&&0===t.explicitOrderBy.length)throw new el(tl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
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
 */
/**
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
 */
/**
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
 */
function mm(t){t=Sg(t,Ng);const e=Sg(t.firestore,Mg);return function(t,e,n={}){const r=new nl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new fg({next:s=>{e.enqueueAndForget((()=>xp(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new el(tl.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new el(tl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new jp(yh(n.path),s,{includeMetadataChanges:!0,uo:!0});return Mp(t,o)}(await yg(t),t.asyncQueue,e,n,r))),r.promise}(Ug(e),t._key).then((n=>Im(e,t,n)))}class ym extends class{convertValue(t,e="none"){switch(Ll(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Al(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(kl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ju()}}convertObject(t,e){const n={};return ml(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new qg(Al(t.latitude),Al(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Cl(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Rl(t));default:return null}}convertTimestamp(t){const e=Sl(t);return new fl(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=wl.fromString(t);Yu(af(n));const r=new wg(n.get(1),n.get(3)),i=new Pl(n.popFirst(5));return r.isEqual(e)||Wu(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new jg(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ng(this.firestore,null,e)}}function vm(t){t=Sg(t,Cg);const e=Sg(t.firestore,Mg),n=Ug(e),r=new ym(e);return gm(t._query),function(t,e,n={}){const r=new nl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new fg({next:n=>{e.enqueueAndForget((()=>xp(t,o))),n.fromCache&&"server"===r.source?i.reject(new el(tl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new jp(n,s,{includeMetadataChanges:!0,uo:!0});return Mp(t,o)}(await yg(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new fm(e,r,t,n)))}function wm(t,e,n){t=Sg(t,Ng);const r=Sg(t.firestore,Mg),i=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e,n);return _m(r,[Qg(Xg(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,zh.none())])}function bm(t,e,n,...r){t=Sg(t,Ng);const i=Sg(t.firestore,Mg),s=Xg(i);let o;return o="string"==typeof(e=Cn(e))||e instanceof Vg?function(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[nm(e,r,n)],c=[i];if(s.length%2!=0)throw new el(tl.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(nm(e,s[d])),c.push(s[d+1]);const u=[],l=Gl.empty();for(let d=a.length-1;d>=0;--d)if(!om(u,a[d])){const t=a[d];let e=c[d];e=Cn(e);const n=o.$a(t);if(e instanceof Jg)u.push(t);else{const r=Yg(e,n);null!=r&&(u.push(t),l.set(t,r))}}const h=new _l(u);return new Hg(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.Ba(1,e,n);em("Data must be an object, but it was:",i,r);const s=[],o=Gl.empty();ml(r,((t,r)=>{const a=im(e,t,n);r=Cn(r);const c=i.$a(a);if(r instanceof Jg)s.push(a);else{const t=Yg(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new _l(s);return new Hg(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),_m(i,[o.toMutation(t._key,zh.exists(!0))])}function Em(t,...e){var n,r,i;t=Cn(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Lg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Lg(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof Ng)u=Sg(t.firestore,Mg),l=yh(t._key.path),c={next:n=>{e[o]&&e[o](Im(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Sg(t,Cg);u=Sg(n.firestore,Mg),l=n._query;const r=new ym(u);c={next:t=>{e[o]&&e[o](new fm(u,r,n,t))},error:e[o+1],complete:e[o+2]},gm(t._query)}return function(t,e,n,r){const i=new fg(r),s=new jp(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Mp(await yg(t),s))),()=>{i.Xo(),t.asyncQueue.enqueueAndForget((async()=>xp(await yg(t),s)))}}(Ug(u),l,a,c)}function _m(t,e){return function(t,e){const n=new nl;return t.asyncQueue.enqueueAndForget((async()=>Xp(await function(t){return mg(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Ug(t),e)}function Im(t,e,n){const r=n.docs.get(e._key),i=new ym(t);return new hm(t,i,e._key,r,new lm(n.hasPendingWrites,n.fromCache),e.converter)}zu="9.0.0",Wn(new Rn("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Mg(n,new sl(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),tr("@firebase/firestore","3.0.2",undefined);function Tm(t){return"[object Date]"===Object.prototype.toString.call(t)}function Sm(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Sm(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(Tm(t)&&Tm(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=Sm(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=r[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function Am(t,r={}){const i=Zt(t);let s,o=t;function a(a,c){if(null==t)return i.set(t=a),Promise.resolve();o=a;let u=s,l=!1,{delay:h=0,duration:d=400,easing:f=e,interpolate:p=Sm}=n(n({},r),c);if(0===d)return u&&(u.abort(),u=null),i.set(t=o),Promise.resolve();const g=b()+h;let m;return s=T((e=>{if(e<g)return!0;l||(m=p(t,a),"function"==typeof d&&(d=d(t,a)),l=!0),u&&(u.abort(),u=null);const n=e-g;return n>d?(i.set(t=a),!1):(i.set(t=m(f(n/d))),!0)})),s.promise}return{set:a,update:(e,n)=>a(e(o,t),n),subscribe:i.subscribe}}
/**
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
 */
tr("firebase","9.0.2","app");export{Am as $,ct as A,n as B,Zt as C,ft as D,d as E,g as F,m as G,p as H,C as I,h as J,ht as K,u as L,Et as M,Ut as N,ie as O,t as P,Y as Q,F as R,Jt as S,Ft as T,te as U,Vt as V,oe as W,L as X,K as Y,J as Z,s as _,q as a,ne as a0,pt as a1,v as a2,at as a3,Yn as a4,Ns as a5,xg as a6,Ai as a7,mm as a8,gi as a9,lt as aA,Zi as aa,Ti as ab,Si as ac,Ii as ad,bm as ae,Og as af,wm as ag,vm as ah,Dg as ai,Em as aj,nn as ak,tt as al,O as am,$ as an,o as ao,_t as ap,se as aq,mt as ar,zt as as,$t as at,jt as au,ae as av,re as aw,y as ax,Q as ay,V as az,j as b,H as c,D as d,P as e,R as f,G as g,X as h,Qt as i,Ht as j,x as k,U as l,Kt as m,W as n,Gt as o,qt as p,Bt as q,Ot as r,a as s,M as t,Mt as u,Wt as v,Pt as w,Lt as x,dt as y,ut as z};
