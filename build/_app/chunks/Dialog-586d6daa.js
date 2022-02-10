import{_ as zt}from"./preload-helper-ec9aa979.js";import{S as $,i as tt,s as et,E as U,e as y,c as k,a as _,d as f,b as c,_ as Dt,f as T,J as h,F as R,G,H as K,x as M,u as H,A as rt,aG as ct,T as St,Y as dt,Z as ut,K as st,j as ft,m as _t,o as ht,P as A,v as mt,ar as qt,k as Z,n as J,U as bt,M as vt,W,R as gt,t as Y,g as Q,O as pt,aF as yt}from"./vendor-fb0c71c8.js";function Tt(l){let t,e,s;const a=l[2].default,i=U(a,l,l[1],null);return{c(){t=y("div"),e=y("div"),i&&i.c(),this.h()},l(n){t=k(n,"DIV",{class:!0,style:!0});var d=_(t);e=k(d,"DIV",{});var r=_(e);i&&i.l(r),r.forEach(f),d.forEach(f),this.h()},h(){c(t,"class","gp-portal"),Dt(t,"display","none")},m(n,d){T(n,t,d),h(t,e),i&&i.m(e,null),l[3](e),s=!0},p(n,[d]){i&&i.p&&(!s||d&2)&&R(i,a,n,n[1],s?K(a,n[1],d,null):G(n[1]),null)},i(n){s||(M(i,n),s=!0)},o(n){H(i,n),s=!1},d(n){n&&f(t),i&&i.d(n),l[3](null)}}}function It(l,t,e){let{$$slots:s={},$$scope:a}=t,i,n;rt(()=>{n=document.createElement("div"),n.className="portal",document.body.appendChild(n),n.appendChild(i)}),ct(()=>{document.body.removeChild(n)});function d(r){St[r?"unshift":"push"](()=>{i=r,e(0,i)})}return l.$$set=r=>{"$$scope"in r&&e(1,a=r.$$scope)},[i,a,s,d]}class Pt extends ${constructor(t){super();tt(this,t,It,Tt,et,{})}}function Vt(l){let t,e;return{c(){t=dt("svg"),e=dt("path"),this.h()},l(s){t=ut(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var a=_(t);e=ut(a,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0}),_(e).forEach(f),a.forEach(f),this.h()},h(){c(e,"d","M9.75 29.25L29.25 9.75M9.75 9.75L29.25 29.25L9.75 9.75Z"),c(e,"stroke",l[1]),c(e,"stroke-width","2"),c(e,"stroke-linecap","round"),c(t,"width",l[0]),c(t,"height",l[0]),c(t,"viewBox","0 0 39 39"),c(t,"fill","none"),c(t,"xmlns","http://www.w3.org/2000/svg")},m(s,a){T(s,t,a),h(t,e)},p(s,[a]){a&2&&c(e,"stroke",s[1]),a&1&&c(t,"width",s[0]),a&1&&c(t,"height",s[0])},i:st,o:st,d(s){s&&f(t)}}}function Ct(l,t,e){let{size:s="1em"}=t,{color:a="currentColor"}=t;return l.$$set=i=>{"size"in i&&e(0,s=i.size),"color"in i&&e(1,a=i.color)},[s,a]}class Mt extends ${constructor(t){super();tt(this,t,Ct,Vt,et,{size:0,color:1})}}const Ht=l=>({}),kt=l=>({}),jt=l=>({}),wt=l=>({}),At=l=>({}),Et=l=>({});function Bt(l){let t;return{c(){t=Y("Title.")},l(e){t=Q(e,"Title.")},m(e,s){T(e,t,s)},d(e){e&&f(t)}}}function Ft(l){let t,e;return{c(){t=y("p"),e=Y("I am a dialog")},l(s){t=k(s,"P",{});var a=_(t);e=Q(a,"I am a dialog"),a.forEach(f)},m(s,a){T(s,t,a),h(t,e)},d(s){s&&f(t)}}}function Ot(l){let t,e,s,a,i,n,d;return{c(){t=y("button"),e=Y("Accept"),s=Z(),a=y("button"),i=Y("Cancel"),this.h()},l(r){t=k(r,"BUTTON",{class:!0});var m=_(t);e=Q(m,"Accept"),m.forEach(f),s=J(r),a=k(r,"BUTTON",{class:!0});var b=_(a);i=Q(b,"Cancel"),b.forEach(f),this.h()},h(){c(t,"class","svelte-1tcbpsq"),c(a,"class","svelte-1tcbpsq")},m(r,m){T(r,t,m),h(t,e),T(r,s,m),T(r,a,m),h(a,i),n||(d=[A(t,"click",l[4]),A(a,"click",l[3])],n=!0)},p:st,d(r){r&&f(t),r&&f(s),r&&f(a),n=!1,gt(d)}}}function Lt(l){let t,e,s,a,i,n,d,r,m,b,q,P,w,v,E,g,V,F;const j=l[14].title,u=U(j,l,l[15],Et),z=u||Bt();r=new Mt({props:{size:"28px"}});const X=l[14].body,O=U(X,l,l[15],wt),D=O||Ft(),x=l[14].cta,L=U(x,l,l[15],kt),S=L||Ot(l);return{c(){t=y("div"),e=y("div"),s=y("div"),a=y("header"),i=y("h2"),z&&z.c(),n=Z(),d=y("button"),ft(r.$$.fragment),m=Z(),b=y("div"),D&&D.c(),P=Z(),w=y("div"),S&&S.c(),this.h()},l(o){t=k(o,"DIV",{id:!0,"aria-hidden":!0});var p=_(t);e=k(p,"DIV",{tabindex:!0,"data-micromodal-close":!0,class:!0,style:!0});var lt=_(e);s=k(lt,"DIV",{role:!0,"aria-modal":!0,"aria-labelledby":!0,class:!0});var C=_(s);a=k(C,"HEADER",{class:!0});var N=_(a);i=k(N,"H2",{class:!0});var it=_(i);z&&z.l(it),it.forEach(f),n=J(N),d=k(N,"BUTTON",{class:!0});var at=_(d);_t(r.$$.fragment,at),at.forEach(f),N.forEach(f),m=J(C),b=k(C,"DIV",{class:!0});var nt=_(b);D&&D.l(nt),nt.forEach(f),P=J(C),w=k(C,"DIV",{class:!0});var ot=_(w);S&&S.l(ot),ot.forEach(f),C.forEach(f),lt.forEach(f),p.forEach(f),this.h()},h(){c(i,"class","mzp-t-mozilla svelte-1tcbpsq"),c(d,"class","dismiss svelte-1tcbpsq"),c(a,"class","container-header svelte-1tcbpsq"),c(b,"class",q=""+(bt(l[0])+" svelte-1tcbpsq")),c(w,"class","cta svelte-1tcbpsq"),c(s,"role","dialog"),c(s,"aria-modal","true"),c(s,"aria-labelledby","modal-1-title"),c(s,"class","container radius-sm mzp-t-mozilla svelte-1tcbpsq"),c(e,"tabindex","-1"),c(e,"data-micromodal-close",""),c(e,"class","overlay svelte-1tcbpsq"),c(e,"style",l[1]),c(t,"id",l[2]),c(t,"aria-hidden","true")},m(o,p){T(o,t,p),h(t,e),h(e,s),h(s,a),h(a,i),z&&z.m(i,null),h(a,n),h(a,d),ht(r,d,null),h(s,m),h(s,b),D&&D.m(b,null),h(s,P),h(s,w),S&&S.m(w,null),g=!0,V||(F=[A(d,"click",l[5]),A(e,"click",l[6])],V=!0)},p(o,p){u&&u.p&&(!g||p&32768)&&R(u,j,o,o[15],g?K(j,o[15],p,At):G(o[15]),Et),O&&O.p&&(!g||p&32768)&&R(O,X,o,o[15],g?K(X,o[15],p,jt):G(o[15]),wt),(!g||p&1&&q!==(q=""+(bt(o[0])+" svelte-1tcbpsq")))&&c(b,"class",q),L&&L.p&&(!g||p&32768)&&R(L,x,o,o[15],g?K(x,o[15],p,Ht):G(o[15]),kt),(!g||p&2)&&c(e,"style",o[1])},i(o){g||(M(z,o),M(r.$$.fragment,o),M(D,o),M(S,o),vt(()=>{v||(v=W(e,pt,{duration:200,y:5},!0)),v.run(1)}),vt(()=>{E||(E=W(t,yt,{duration:200},!0)),E.run(1)}),g=!0)},o(o){H(z,o),H(r.$$.fragment,o),H(D,o),H(S,o),v||(v=W(e,pt,{duration:200,y:5},!1)),v.run(0),E||(E=W(t,yt,{duration:200},!1)),E.run(0),g=!1},d(o){o&&f(t),z&&z.d(o),mt(r),D&&D.d(o),S&&S.d(o),o&&v&&v.end(),o&&E&&E.end(),V=!1,gt(F)}}}function Nt(l){let t,e,s,a;return t=new Pt({props:{$$slots:{default:[Lt]},$$scope:{ctx:l}}}),{c(){ft(t.$$.fragment)},l(i){_t(t.$$.fragment,i)},m(i,n){ht(t,i,n),e=!0,s||(a=A(window,"keydown",l[7]),s=!0)},p(i,[n]){const d={};n&32771&&(d.$$scope={dirty:n,ctx:i}),t.$set(d)},i(i){e||(M(t.$$.fragment,i),e=!0)},o(i){H(t.$$.fragment,i),e=!1},d(i){mt(t,i),s=!1,a()}}}let I;function B(l,t){return t?`${l}: ${t};`:void 0}function Ut({width:l,height:t,topPadding:e,fontSize:s,minHeight:a}){const i=[B("--width",l),B("--height",t),B("--fontSize",s),B("--top-padding",e),B("--min-height",a)].filter(n=>n!==void 0);if(i.length!==0)return i.join("; ")}function Rt(l,t,e){let s,a,{$$slots:i={},$$scope:n}=t,{width:d}=t,{height:r}=t,{topPadding:m}=t,{minHeight:b}=t,{fontSize:q="38px"}=t,{custom:P=""}=t;const w=qt(),v=`modal-${Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}`;function E(){I.close(v),w("cancel")}function g(){I.close(v),w("accept")}function V(){w("dismiss")}function F(u){u.target===u.currentTarget&&V()}function j(u){u.key==="Escape"&&V()}return rt(async()=>{I||(I=(await zt(()=>import("./micromodal.es-26aa1e2f.js"),[])).default,I.init({disableScroll:!0,disableFocus:!0})),I.init({disableScroll:!0,disableFocus:!0}),I.show(v,{disableScroll:!0,disableFocus:!0})}),ct(()=>{I.close(v)}),l.$$set=u=>{"width"in u&&e(8,d=u.width),"height"in u&&e(9,r=u.height),"topPadding"in u&&e(10,m=u.topPadding),"minHeight"in u&&e(11,b=u.minHeight),"fontSize"in u&&e(12,q=u.fontSize),"custom"in u&&e(13,P=u.custom),"$$scope"in u&&e(15,n=u.$$scope)},l.$$.update=()=>{l.$$.dirty&7936&&e(1,s=Ut({width:d,height:r,topPadding:m,fontSize:q,minHeight:b})),l.$$.dirty&8192&&e(0,a=["modal-body",P].filter(u=>u).join(" "))},[a,s,v,E,g,V,F,j,d,r,m,b,q,P,i,n]}class Zt extends ${constructor(t){super();tt(this,t,Rt,Nt,et,{width:8,height:9,topPadding:10,minHeight:11,fontSize:12,custom:13})}}export{Zt as default};
