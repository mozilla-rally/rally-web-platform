import{R as K,a1 as L,S as M,i as P,s as Q,E as W,e as X,c as Y,a as Z,d as U,b as m,a2 as V,f as v,a3 as p,F as $,G as ee,H as te,x as ne,u as oe,a4 as le}from"./vendor-dcea556b.js";function re(o,n=[]){const t=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture",...n];return s=>{const a=t.map(c=>K(s,c,i=>L(o,i)));return{destroy:()=>{a.forEach(c=>{c()})}}}}function se(o){let n,t,s,a,c;const i=o[33].default,r=W(i,o,o[32],null);return{c(){n=X("button"),r&&r.c(),this.h()},l(l){n=Y(l,"BUTTON",{style:!0,class:!0});var u=Z(n);r&&r.l(u),u.forEach(U),this.h()},h(){m(n,"style",o[1]),m(n,"class",t=""+(V(o[2])+" svelte-1kabo5y")),n.disabled=o[0]},m(l,u){v(l,n,u),r&&r.m(n,null),s=!0,a||(c=p(o[3].call(null,n)),a=!0)},p(l,u){r&&r.p&&(!s||u[1]&2)&&$(r,i,l,l[32],s?te(i,l[32],u,null):ee(l[32]),null),(!s||u[0]&2)&&m(n,"style",l[1]),(!s||u[0]&4&&t!==(t=""+(V(l[2])+" svelte-1kabo5y")))&&m(n,"class",t),(!s||u[0]&1)&&(n.disabled=l[0])},i(l){s||(ne(r,l),s=!0)},o(l){oe(r,l),s=!1},d(l){l&&U(n),r&&r.d(l),a=!1,c()}}}function ue(o,n,t){let s,a,c,i,r,l,u,y,b,_,C,k,G,H,{$$slots:D={},$$scope:N}=n,{size:d="md"}=n,{neutral:g=!1}=n,{product:h=!1}=n,{secondary:z=!1}=n,{dark:w=!1}=n,{leave:j=!1}=n,{icon:B=!1}=n,{text:E=!1}=n,{error:S=!1}=n,{compact:x=!1}=n,{disabled:R=!1}=n,{custom:f}=n,{customControl:O=!1}=n,{textColor:T}=n,{background:q}=n,{borderColor:A}=n;const I=re(le());let{styles:F={"btn-color":T,"btn-bg":q,"btn-border":A}}=n;return o.$$set=e=>{"size"in e&&t(4,d=e.size),"neutral"in e&&t(5,g=e.neutral),"product"in e&&t(6,h=e.product),"secondary"in e&&t(7,z=e.secondary),"dark"in e&&t(8,w=e.dark),"leave"in e&&t(9,j=e.leave),"icon"in e&&t(10,B=e.icon),"text"in e&&t(11,E=e.text),"error"in e&&t(12,S=e.error),"compact"in e&&t(13,x=e.compact),"disabled"in e&&t(0,R=e.disabled),"custom"in e&&t(14,f=e.custom),"customControl"in e&&t(15,O=e.customControl),"textColor"in e&&t(16,T=e.textColor),"background"in e&&t(17,q=e.background),"borderColor"in e&&t(18,A=e.borderColor),"styles"in e&&t(19,F=e.styles),"$$scope"in e&&t(32,N=e.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&16&&t(31,s=d?`mzp-t-${d}`:void 0),o.$$.dirty[0]&64&&t(30,a=h?"mzp-t-product":void 0),o.$$.dirty[0]&32&&t(29,c=g?"mzp-t-neutral":void 0),o.$$.dirty[0]&128&&t(27,i=z?"mzp-t-secondary":void 0),o.$$.dirty[0]&256&&t(28,r=w?"mzp-t-dark":void 0),o.$$.dirty[0]&512&&t(26,l=j?"mzp-t-leave":void 0),o.$$.dirty[0]&1024&&t(24,u=B?"mzp-t-icon":void 0),o.$$.dirty[0]&2048&&t(25,y=E?"mzp-t-secondary mzp-t-text":void 0),o.$$.dirty[0]&4096&&t(23,b=S?"mzp-t-error":void 0),o.$$.dirty[0]&8192&&t(22,_=x?"mzp-t-compact":void 0),o.$$.dirty[0]&16384&&t(21,C=f||void 0),o.$$.dirty[0]&32768&&t(20,k=O?"custom-control":void 0),o.$$.dirty[0]&2146435072|o.$$.dirty[1]&1&&t(2,G=["mzp-c-button",s,a,c,r,i,l,y,u,b,_,C,k].filter(e=>e).join(" ")),o.$$.dirty[0]&524288&&t(1,H=Object.entries(F).map(([e,J])=>`--${e}:${J}`).join(";"))},[R,H,G,I,d,g,h,z,w,j,B,E,S,x,f,O,T,q,A,F,k,C,_,b,u,y,l,i,r,c,a,s,N,D]}class ae extends M{constructor(n){super();P(this,n,ue,se,Q,{size:4,neutral:5,product:6,secondary:7,dark:8,leave:9,icon:10,text:11,error:12,compact:13,disabled:0,custom:14,customControl:15,textColor:16,background:17,borderColor:18,styles:19},null,[-1,-1])}}export{ae as B};
