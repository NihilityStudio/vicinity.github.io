import{S as Y,i as Z,s as $,l as k,r as S,a as T,m as w,n as y,u as I,h as _,c as C,p as E,q as K,b as W,J as n,K as B,L as ee,v as te,E as L,M as se,N as le,O as oe,o as ae,P as re}from"../chunks/index-23b4510f.js";import{s as ne,a as z}from"../chunks/utils-1f7a3290.js";const{window:V}=re;function G(l,s,e){const o=l.slice();return o[13]=s[e],o[15]=e,o}function H(l){let s,e;return{c(){s=k("p"),e=S("RebornXP might have unexpected behaviors on browsers that are NOT Chromium-based (Safari, Firefox, Internet Explorer, etc.)"),this.h()},l(o){s=w(o,"P",{class:!0});var u=y(s);e=I(u,"RebornXP might have unexpected behaviors on browsers that are NOT Chromium-based (Safari, Firefox, Internet Explorer, etc.)"),u.forEach(_),this.h()},h(){E(s,"class","text-slate-100 mt-2 max-w-[500px]")},m(o,u){W(o,s,u),n(s,e)},d(o){o&&_(s)}}}function Q(l){let s,e,o=l[13]+"",u,a,h,b;function p(){return l[7](l[15])}return{c(){s=k("div"),e=k("div"),u=S(o),this.h()},l(d){s=w(d,"DIV",{});var i=y(s);e=w(i,"DIV",{class:!0});var x=y(e);u=I(x,o),x.forEach(_),i.forEach(_),this.h()},h(){E(e,"class",a="ml-8 p-2 inline-block "+(l[15]===l[1]?"text-slate-900 bg-slate-200 cursor-pointer":"text-slate-300 cursor-pointer"))},m(d,i){W(d,s,i),n(s,e),n(e,u),h||(b=B(e,"click",p),h=!0)},p(d,i){l=d,i&2&&a!==(a="ml-8 p-2 inline-block "+(l[15]===l[1]?"text-slate-900 bg-slate-200 cursor-pointer":"text-slate-300 cursor-pointer"))&&E(e,"class",a)},d(d){d&&_(s),h=!1,b()}}}function ie(l){let s,e,o,u,a,h,b,p,d,i,x,q,v,m,N,j,M,O,X,f=!l[0]&&H(),P=l[3].slice(0,4),c=[];for(let r=0;r<P.length;r+=1)c[r]=Q(G(l,P,r));return{c(){s=k("div"),e=k("div"),o=k("p"),u=S("Use the \u2191(Up) and \u2193(Down) key to move the pointer to desired boot device."),a=T(),h=k("p"),b=S("Press (Enter) to attempt to boot or ESC to cancel."),p=T(),f&&f.c(),d=T(),i=k("p"),x=S("Boot options:"),q=T();for(let r=0;r<c.length;r+=1)c[r].c();v=T(),m=k("p"),N=S("The default entry will boot in "),j=S(l[2]),M=S(" seconds..."),this.h()},l(r){s=w(r,"DIV",{class:!0});var g=y(s);e=w(g,"DIV",{class:!0});var t=y(e);o=w(t,"P",{class:!0});var D=y(o);u=I(D,"Use the \u2191(Up) and \u2193(Down) key to move the pointer to desired boot device."),D.forEach(_),a=C(t),h=w(t,"P",{class:!0});var A=y(h);b=I(A,"Press (Enter) to attempt to boot or ESC to cancel."),A.forEach(_),p=C(t),f&&f.l(t),d=C(t),i=w(t,"P",{class:!0});var J=y(i);x=I(J,"Boot options:"),J.forEach(_),q=C(t);for(let F=0;F<c.length;F+=1)c[F].l(t);v=C(t),m=w(t,"P",{class:!0,style:!0});var U=y(m);N=I(U,"The default entry will boot in "),j=I(U,l[2]),M=I(U," seconds..."),U.forEach(_),t.forEach(_),g.forEach(_),this.h()},h(){E(o,"class","text-slate-100"),E(h,"class","text-slate-100"),E(i,"class","text-slate-100 uppercase mt-4 mb-2"),E(m,"class","text-slate-100 uppercase mt-4 mb-2"),K(m,"display",l[2]===0?"none":"block"),E(e,"class","mt-12 ml-8 text-lg flex-grow"),E(s,"class","w-screen h-screen bg-black overflow-hidden font-MSSS flex flex-col")},m(r,g){W(r,s,g),n(s,e),n(e,o),n(o,u),n(e,a),n(e,h),n(h,b),n(e,p),f&&f.m(e,null),n(e,d),n(e,i),n(i,x),n(e,q);for(let t=0;t<c.length;t+=1)c[t].m(e,null);n(e,v),n(e,m),n(m,N),n(m,j),n(m,M),O||(X=[B(V,"keydown",l[4]),B(V,"keydown",ee(l[6])),B(V,"keypress",R),B(V,"click",R)],O=!0)},p(r,[g]){if(r[0]?f&&(f.d(1),f=null):f||(f=H(),f.c(),f.m(e,d)),g&42){P=r[3].slice(0,4);let t;for(t=0;t<P.length;t+=1){const D=G(r,P,t);c[t]?c[t].p(D,g):(c[t]=Q(D),c[t].c(),c[t].m(e,v))}for(;t<c.length;t+=1)c[t].d(1);c.length=P.length}g&4&&te(j,r[2]),g&4&&K(m,"display",r[2]===0?"none":"block")},i:L,o:L,d(r){r&&_(s),f&&f.d(),se(c,r),O=!1,le(X)}}}function R(){new Audio("/audio/biosBeep.mp3").play()}function ce(l,s,e){let o=oe(),u=!0;ae(()=>{loadjs(["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js","https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js","https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"],{async:!1}),ne("none"),e(0,u=window.chrome!=null)});let a=0,h=["Start Windows Normally","Install Windows"],b=null,p=10,d=!1;function i(){b=setInterval(()=>{p===0?(clearInterval(b),v()):e(2,p--,p)},1e3)}function x(){clearInterval(b),e(2,p=10)}function q(j){switch(x(),j.keyCode){case 38:a===0?e(1,a=h.length-1):e(1,a--,a);break;case 40:a===h.length-1?e(1,a=0):e(1,a++,a);break;case 13:v();break;default:R();break}i()}function v(){d||(d=!0,a===0?(z(!1),o("load_page",{url:"./xp/starting.svelte"})):a===1&&(z(!0),o("load_page",{url:"./installation/dos/starting.svelte"})))}i();function m(){clearInterval(b),e(2,p=0)}return[u,a,p,h,q,v,m,j=>{e(1,a=j),v()}]}class fe extends Y{constructor(s){super(),Z(this,s,ce,ie,$,{})}}export{fe as default};
