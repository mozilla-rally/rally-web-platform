import{S as G,i as M,s as N,Y as y,Z as C,a as v,d as m,b as p,f as k,J as g,M as F,N as V,aD as x,O as Z,aE as J,e as B,t as z,k as A,j as T,c as I,g as O,n as D,m as R,_ as ne,o as S,W as L,x as w,u as E,v as j,P as ae,r as W,w as X,ar as ie,aF as H,ay as le,l as K,au as ue,D as Q,L as ee,T as fe,aA as ce}from"../../chunks/vendor-590b911b.js";import{g as P}from"../../chunks/navigation-2ffed81e.js";import{C as de}from"../../chunks/Content-4bd88ebc.js";/* empty css                                                                       */import{B as te}from"../../chunks/Button-14e92cee.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/survey-schema-0711fa1d.js";function pe(l){let e,s,i,t,a,f,o,r,c,n,d,u,_,h;return{c(){e=y("svg"),s=y("path"),a=y("g"),f=y("path"),c=y("defs"),n=y("linearGradient"),d=y("stop"),u=y("stop"),_=y("stop"),this.h()},l($){e=C($,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var b=v(e);s=C(b,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),v(s).forEach(m),a=C(b,"g",{});var U=v(a);f=C(U,"path",{d:!0,fill:!0}),v(f).forEach(m),U.forEach(m),c=C(b,"defs",{});var Y=v(c);n=C(Y,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var q=v(n);d=C(q,"stop",{"stop-color":!0}),v(d).forEach(m),u=C(q,"stop",{offset:!0,"stop-color":!0}),v(u).forEach(m),_=C(q,"stop",{offset:!0,"stop-color":!0}),v(_).forEach(m),q.forEach(m),Y.forEach(m),b.forEach(m),this.h()},h(){p(s,"d","M1 127.619C21.591 127.619 45.2219 104 48 86.6193C50.7781 69.2386 49 52.5 37 52.5C25 52.5 24.5 64.7377 39 67.5C53.5 70.2623 90 42.8807 21 6"),p(s,"stroke","url(#paint0_linear)"),p(s,"stroke-width","2"),p(s,"stroke-linecap","round"),p(f,"d","M16.7936 6.80449C16.2329 5.50077 15.0019 2.53349 15.5375 1.87833C16.1876 1.08304 17.9814 1.6468 20.0777 2.08646C21.8484 2.45783 24.5709 2.9662 24.3878 4.0835C24.2626 4.84797 21.9746 4.79424 20.8596 6.12262C20.0794 7.05222 19.8038 9.26208 19.0255 9.56392C18.2472 9.86577 17.3544 8.10822 16.7936 6.80449Z"),p(f,"fill","#F53A68"),p(d,"stop-color","#FF9100"),p(u,"offset","0.489583"),p(u,"stop-color","#F10366"),p(_,"offset","1"),p(_,"stop-color","#6173FF"),p(n,"id","paint0_linear"),p(n,"x1","50.7846"),p(n,"y1","-43.3675"),p(n,"x2","-35.6052"),p(n,"y2","104.653"),p(n,"gradientUnits","userSpaceOnUse"),p(e,"width","63"),p(e,"height","129"),p(e,"viewBox","0 0 63 129"),p(e,"fill","none"),p(e,"xmlns","http://www.w3.org/2000/svg")},m($,b){k($,e,b),g(e,s),g(e,a),g(a,f),g(e,c),g(c,n),g(n,d),g(n,u),g(n,_),h=!0},p($,[b]){l=$},i($){h||(F(()=>{t&&t.end(1),i=V(s,x,{duration:1e3,delay:l[0]}),i.start()}),F(()=>{r&&r.end(1),o=V(a,Z,{x:10,y:5,delay:800+l[0],opacity:0}),o.start()}),h=!0)},o($){i&&i.invalidate(),$&&(t=J(s,x,{duration:500,delay:l[0]})),o&&o.invalidate(),$&&(r=J(a,Z,{duration:350,delay:l[0],x:20,y:10})),h=!1},d($){$&&m(e),$&&t&&t.end(),$&&r&&r.end()}}}function _e(l,e,s){let{delay:i=0}=e;return l.$$set=t=>{"delay"in t&&s(0,i=t.delay)},[i]}class me extends G{constructor(e){super();M(this,e,_e,pe,N,{delay:0})}}function he(l){let e;return{c(){e=z("Save & Continue")},l(s){e=O(s,"Save & Continue")},m(s,i){k(s,e,i)},d(s){s&&m(e)}}}function $e(l){let e;return{c(){e=z("Skip for Now")},l(s){e=O(s,"Skip for Now")},m(s,i){k(s,e,i)},d(s){s&&m(e)}}}function re(l){let e,s,i,t,a,f,o,r,c;return r=new me({}),{c(){e=B("div"),s=z("the following 7"),i=B("br"),t=z(" questions are optional"),f=A(),o=B("div"),T(r.$$.fragment),this.h()},l(n){e=I(n,"DIV",{class:!0,style:!0});var d=v(e);s=O(d,"the following 7"),i=I(d,"BR",{}),t=O(d," questions are optional"),d.forEach(m),f=D(n),o=I(n,"DIV",{class:!0});var u=v(o);R(r.$$.fragment,u),u.forEach(m),this.h()},h(){p(e,"class","shortcut-callout"),ne(e,"text-align","right"),p(o,"class","arrow svelte-2q9qqd")},m(n,d){k(n,e,d),g(e,s),g(e,i),g(e,t),k(n,f,d),k(n,o,d),S(r,o,null),c=!0},i(n){c||(n&&F(()=>{a||(a=L(e,H,{duration:400},!0)),a.run(1)}),w(r.$$.fragment,n),c=!0)},o(n){n&&(a||(a=L(e,H,{duration:400},!1)),a.run(0)),E(r.$$.fragment,n),c=!1},d(n){n&&m(e),n&&a&&a.end(),n&&m(f),n&&m(o),j(r)}}}function ge(l){let e=!1,s=()=>{e=!1},i,t,a,f,o,r,c,n,d;F(l[3]),a=new te({props:{btnID:"save",size:"xl",product:!0,$$slots:{default:[he]},$$scope:{ctx:l}}}),a.$on("click",l[4]),o=new te({props:{btnID:"skip",size:"xl",product:!0,secondary:!0,$$slots:{default:[$e]},$$scope:{ctx:l}}}),o.$on("click",l[5]);let u=l[1]&&se&&re();return{c(){t=B("div"),T(a.$$.fragment),f=A(),T(o.$$.fragment),r=A(),u&&u.c(),this.h()},l(_){t=I(_,"DIV",{class:!0});var h=v(t);R(a.$$.fragment,h),f=D(h),R(o.$$.fragment,h),r=D(h),u&&u.l(h),h.forEach(m),this.h()},h(){p(t,"class","cta-wrapper")},m(_,h){k(_,t,h),S(a,t,null),g(t,f),S(o,t,null),g(t,r),u&&u.m(t,null),c=!0,n||(d=ae(window,"scroll",()=>{e=!0,clearTimeout(i),i=setTimeout(s,100),l[3]()}),n=!0)},p(_,[h]){h&1&&!e&&(e=!0,clearTimeout(i),scrollTo(window.pageXOffset,_[0]),i=setTimeout(s,100));const $={};h&64&&($.$$scope={dirty:h,ctx:_}),a.$set($);const b={};h&64&&(b.$$scope={dirty:h,ctx:_}),o.$set(b),_[1]&&se?u?h&2&&w(u,1):(u=re(),u.c(),w(u,1),u.m(t,null)):u&&(W(),E(u,1,1,()=>{u=null}),X())},i(_){c||(w(a.$$.fragment,_),w(o.$$.fragment,_),w(u),c=!0)},o(_){E(a.$$.fragment,_),E(o.$$.fragment,_),E(u),c=!1},d(_){_&&m(t),j(a),j(o),u&&u.d(),n=!1,d()}}}let se=!1;function ve(l,e,s){const i=ie();let t=0,a=!0;function f(){s(0,t=window.pageYOffset)}const o=()=>i("save"),r=()=>i("skip");return l.$$.update=()=>{l.$$.dirty&1&&(t>20?s(1,a=!1):s(1,a=!0))},[t,a,i,f,o,r]}class we extends G{constructor(e){super();M(this,e,ve,ge,N,{})}}function oe(l){let e,s,i,t,a;function f(r){l[7](r)}let o={};return l[1]!==void 0&&(o.formattedResults=l[1]),e=new de({props:o}),fe.push(()=>ce(e,"formattedResults",f)),t=new we({}),t.$on("save",l[4](!0)),t.$on("skip",l[4](!1)),{c(){T(e.$$.fragment),i=A(),T(t.$$.fragment)},l(r){R(e.$$.fragment,r),i=D(r),R(t.$$.fragment,r)},m(r,c){S(e,r,c),k(r,i,c),S(t,r,c),a=!0},p(r,c){const n={};!s&&c&2&&(s=!0,n.formattedResults=r[1],le(()=>s=!1)),e.$set(n)},i(r){a||(w(e.$$.fragment,r),w(t.$$.fragment,r),a=!0)},o(r){E(e.$$.fragment,r),E(t.$$.fragment,r),a=!1},d(r){j(e,r),r&&m(i),j(t,r)}}}function be(l){var a,f;let e,s,i,t=l[0]._initialized&&!((f=(a=l[0])==null?void 0:a.user)==null?void 0:f.onboarded)&&oe(l);return{c(){e=A(),t&&t.c(),s=K(),this.h()},l(o){ue('[data-svelte="svelte-19tu7ba"]',document.head).forEach(m),e=D(o),t&&t.l(o),s=K(),this.h()},h(){document.title="Tell Us About Yourself | Mozilla Rally"},m(o,r){k(o,e,r),t&&t.m(o,r),k(o,s,r),i=!0},p(o,[r]){var c,n;o[0]._initialized&&!((n=(c=o[0])==null?void 0:c.user)==null?void 0:n.onboarded)?t?(t.p(o,r),r&1&&w(t,1)):(t=oe(o),t.c(),w(t,1),t.m(s.parentNode,s)):t&&(W(),E(t,1,1,()=>{t=null}),X())},i(o){i||(w(t),i=!0)},o(o){E(t),i=!1},d(o){o&&m(e),t&&t.d(o),o&&m(s)}}}function ke(l,e,s){let i,t;var a;const f=Q("rally:store");ee(l,f,d=>s(0,i=d));const o=Q("rally:isAuthenticated");ee(l,o,d=>s(6,t=d));let r;function c(d=!1){return async()=>{d&&await f.updateDemographicSurvey(r),await f.updateOnboardedStatus(!0),P("/studies")}}function n(d){r=d,s(1,r)}return l.$$.update=()=>{l.$$.dirty&97&&(t===!1?P("/signup"):t===!0&&(s(5,a=i==null?void 0:i.user)===null||a===void 0?void 0:a.onboarded)&&P("/studies"))},[i,r,f,o,c,a,t,n]}class Se extends G{constructor(e){super();M(this,e,ke,be,N,{})}}export{Se as default};
