import{S as D,i as E,s as I,l as m,r as A,a as S,w as V,m as _,n as h,u as R,h as u,c as w,x as W,p as v,b as $,J as p,y as k,f as C,t as F,B as X,O as q,o as B,Y as J}from"../../../chunks/index-23b4510f.js";import{S as L}from"../../../chunks/status_bar-38c498f3.js";import{d as M}from"../../../chunks/index-b421a415.js";import{c as O}from"../../../chunks/utils-1f7a3290.js";function Y(b){let e,s,l,i,f,c,a,r,g,n,y,P={};return n=new L({props:P}),b[1](n),{c(){e=m("div"),s=m("div"),l=m("p"),i=A("Windows XP Professional Setup"),f=S(),c=m("div"),a=S(),r=m("div"),g=S(),V(n.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var d=h(e);s=_(d,"DIV",{class:!0});var o=h(s);l=_(o,"P",{class:!0});var x=h(l);i=R(x,"Windows XP Professional Setup"),x.forEach(u),f=w(o),c=_(o,"DIV",{class:!0}),h(c).forEach(u),a=w(o),r=_(o,"DIV",{class:!0}),h(r).forEach(u),o.forEach(u),d.forEach(u),g=w(t),W(n.$$.fragment,t),this.h()},h(){v(l,"class","px-2"),v(c,"class","w-full h-[1px] mb-1 bg-slate-400"),v(r,"class","w-full h-[1px] bg-slate-400"),v(s,"class","mt-4 text-xl font-bold text-slate-400 inline-block"),v(e,"class","absolute inset-0 bg-[rgb(2,7,176)] overflow-hidden font-Levi")},m(t,d){$(t,e,d),p(e,s),p(s,l),p(l,i),p(s,f),p(s,c),p(s,a),p(s,r),$(t,g,d),k(n,t,d),y=!0},p(t,[d]){const o={};n.$set(o)},i(t){y||(C(n.$$.fragment,t),y=!0)},o(t){F(n.$$.fragment,t),y=!1},d(t){t&&u(e),t&&u(g),b[1](null),X(n,t)}}}function j(b,e,s){let l=q(),i,f=[{l:"Press F6 if you need to install a third party SCSI or RAID Driver",d:2e3},{l:"Press F2 to run Automated System Recovery (ASR)...",d:2e3},...(()=>{let a=new Array(12);for(let r=0;r<a.length;r++)a[r]={l:"Setup is loading files "+M.system.directoryPath()+"...",d:O(2,7)*50};return a})(),{l:"Setup is starting Windows",d:2e3}];B(async()=>{await i.display(f),l("load_page",{url:"./installation/dos/welcome.svelte"})});function c(a){J[a?"unshift":"push"](()=>{i=a,s(0,i)})}return[i,c]}class N extends D{constructor(e){super(),E(this,e,j,Y,I,{})}}export{N as default};
