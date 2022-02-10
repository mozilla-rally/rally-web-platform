import{P as L,a1 as M,S as Q,i as R,s as W,E as X,e as Y,c as Z,a as v,d as N,b as d,U as P,f as p,a2 as $,F as ee,G as te,H as ne,x as le,u as oe,a3 as re}from"./vendor-fb0c71c8.js";function se(l,n=[]){const t=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture",...n];return s=>{const a=t.map(c=>L(s,c,i=>M(l,i)));return{destroy:()=>{a.forEach(c=>{c()})}}}}function ue(l){let n,t,s,a,c;const i=l[34].default,r=X(i,l,l[33],null);return{c(){n=Y("button"),r&&r.c(),this.h()},l(o){n=Z(o,"BUTTON",{id:!0,style:!0,class:!0});var u=v(n);r&&r.l(u),u.forEach(N),this.h()},h(){d(n,"id",l[1]),d(n,"style",l[2]),d(n,"class",t=""+(P(l[3])+" svelte-1kabo5y")),n.disabled=l[0]},m(o,u){p(o,n,u),r&&r.m(n,null),s=!0,a||(c=$(l[4].call(null,n)),a=!0)},p(o,u){r&&r.p&&(!s||u[1]&4)&&ee(r,i,o,o[33],s?ne(i,o[33],u,null):te(o[33]),null),(!s||u[0]&2)&&d(n,"id",o[1]),(!s||u[0]&4)&&d(n,"style",o[2]),(!s||u[0]&8&&t!==(t=""+(P(o[3])+" svelte-1kabo5y")))&&d(n,"class",t),(!s||u[0]&1)&&(n.disabled=o[0])},i(o){s||(le(r,o),s=!0)},o(o){oe(r,o),s=!1},d(o){o&&N(n),r&&r.d(o),a=!1,c()}}}function ce(l,n,t){let s,a,c,i,r,o,u,b,y,_,C,k,x,A,{$$slots:V={},$$scope:F}=n,{size:f="md"}=n,{neutral:g=!1}=n,{product:h=!1}=n,{secondary:z=!1}=n,{dark:w=!1}=n,{leave:j=!1}=n,{icon:B=!1}=n,{text:D=!1}=n,{error:E=!1}=n,{compact:I=!1}=n,{disabled:G=!1}=n,{custom:m}=n,{btnID:H}=n,{customControl:S=!1}=n,{textColor:O}=n,{background:T}=n,{borderColor:U}=n;const J=se(re());let{styles:q={"btn-color":O,"btn-bg":T,"btn-border":U}}=n;return l.$$set=e=>{"size"in e&&t(5,f=e.size),"neutral"in e&&t(6,g=e.neutral),"product"in e&&t(7,h=e.product),"secondary"in e&&t(8,z=e.secondary),"dark"in e&&t(9,w=e.dark),"leave"in e&&t(10,j=e.leave),"icon"in e&&t(11,B=e.icon),"text"in e&&t(12,D=e.text),"error"in e&&t(13,E=e.error),"compact"in e&&t(14,I=e.compact),"disabled"in e&&t(0,G=e.disabled),"custom"in e&&t(15,m=e.custom),"btnID"in e&&t(1,H=e.btnID),"customControl"in e&&t(16,S=e.customControl),"textColor"in e&&t(17,O=e.textColor),"background"in e&&t(18,T=e.background),"borderColor"in e&&t(19,U=e.borderColor),"styles"in e&&t(20,q=e.styles),"$$scope"in e&&t(33,F=e.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&32&&t(32,s=f?`mzp-t-${f}`:void 0),l.$$.dirty[0]&128&&t(31,a=h?"mzp-t-product":void 0),l.$$.dirty[0]&64&&t(30,c=g?"mzp-t-neutral":void 0),l.$$.dirty[0]&256&&t(28,i=z?"mzp-t-secondary":void 0),l.$$.dirty[0]&512&&t(29,r=w?"mzp-t-dark":void 0),l.$$.dirty[0]&1024&&t(27,o=j?"mzp-t-leave":void 0),l.$$.dirty[0]&2048&&t(25,u=B?"mzp-t-icon":void 0),l.$$.dirty[0]&4096&&t(26,b=D?"mzp-t-secondary mzp-t-text":void 0),l.$$.dirty[0]&8192&&t(24,y=E?"mzp-t-error":void 0),l.$$.dirty[0]&16384&&t(23,_=I?"mzp-t-compact":void 0),l.$$.dirty[0]&32768&&t(22,C=m||void 0),l.$$.dirty[0]&65536&&t(21,k=S?"custom-control":void 0),l.$$.dirty[0]&2145386496|l.$$.dirty[1]&3&&t(3,x=["mzp-c-button",s,a,c,r,i,o,b,u,y,_,C,k].filter(e=>e).join(" ")),l.$$.dirty[0]&1048576&&t(2,A=Object.entries(q).map(([e,K])=>`--${e}:${K}`).join(";"))},[G,H,A,x,J,f,g,h,z,w,j,B,D,E,I,m,S,O,T,U,q,k,C,_,y,u,b,o,i,r,c,a,s,F,V]}class ie extends Q{constructor(n){super();R(this,n,ce,ue,W,{size:5,neutral:6,product:7,secondary:8,dark:9,leave:10,icon:11,text:12,error:13,compact:14,disabled:0,custom:15,btnID:1,customControl:16,textColor:17,background:18,borderColor:19,styles:20},null,[-1,-1])}}export{ie as B};
