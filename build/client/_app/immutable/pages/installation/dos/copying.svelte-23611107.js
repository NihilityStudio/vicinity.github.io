import{S as ut,i as ft,s as ht,l,r as D,a as h,w as mt,m as r,n as o,u as S,h as s,c as m,x as _t,p as i,q as nt,b as ct,J as t,y as vt,K as bt,v as wt,f as xt,t as gt,B as yt,O as Et,o as Pt,U as Dt,L as St,Y as It}from"../../../chunks/index-23b4510f.js";import{S as Vt}from"../../../chunks/status_bar-38c498f3.js";import"../../../chunks/index-b421a415.js";import{b as pt,c as Z,d as $t}from"../../../chunks/utils-1f7a3290.js";function kt(_){let c,n,v,u,b,w,q,y,L,a,I,O,U,V,Y,j,$,z,A,k,d,C,F,G,E,T=Math.floor(_[1])+"",B,H,N,M,P,J=`${_[1]}%`,K,f,X,Q,tt,dt={show_separator:!0,l_message:""};return f=new Vt({props:dt}),_[2](f),{c(){c=l("div"),n=l("div"),v=l("p"),u=D("Windows XP Professional Setup"),b=h(),w=l("div"),q=h(),y=l("div"),L=h(),a=l("div"),I=l("p"),O=D("Please wait while Setup copies files"),U=h(),V=l("p"),Y=D("to the Windows installation folders."),j=h(),$=l("p"),z=D("This might take several minutes to complete."),A=h(),k=l("div"),d=l("div"),C=l("p"),F=D("Setup is copying files..."),G=h(),E=l("p"),B=D(T),H=D("%"),N=h(),M=l("div"),P=l("div"),K=h(),mt(f.$$.fragment),this.h()},l(e){c=r(e,"DIV",{class:!0});var p=o(c);n=r(p,"DIV",{class:!0});var x=o(n);v=r(x,"P",{class:!0});var et=o(v);u=S(et,"Windows XP Professional Setup"),et.forEach(s),b=m(x),w=r(x,"DIV",{class:!0}),o(w).forEach(s),q=m(x),y=r(x,"DIV",{class:!0}),o(y).forEach(s),x.forEach(s),L=m(p),a=r(p,"DIV",{class:!0});var g=o(a);I=r(g,"P",{class:!0});var st=o(I);O=S(st,"Please wait while Setup copies files"),st.forEach(s),U=m(g),V=r(g,"P",{class:!0});var at=o(V);Y=S(at,"to the Windows installation folders."),at.forEach(s),j=m(g),$=r(g,"P",{class:!0});var lt=o($);z=S(lt,"This might take several minutes to complete."),lt.forEach(s),A=m(g),k=r(g,"DIV",{class:!0});var rt=o(k);d=r(rt,"DIV",{class:!0});var W=o(d);C=r(W,"P",{class:!0});var ot=o(C);F=S(ot,"Setup is copying files..."),ot.forEach(s),G=m(W),E=r(W,"P",{class:!0});var R=o(E);B=S(R,T),H=S(R,"%"),R.forEach(s),N=m(W),M=r(W,"DIV",{class:!0});var it=o(M);P=r(it,"DIV",{class:!0}),o(P).forEach(s),it.forEach(s),W.forEach(s),rt.forEach(s),g.forEach(s),p.forEach(s),K=m(e),_t(f.$$.fragment,e),this.h()},h(){i(v,"class","px-2"),i(w,"class","w-full h-[1px] mb-1 bg-slate-400"),i(y,"class","w-full h-[1px] bg-slate-400"),i(n,"class","mt-4 text-xl font-bold text-slate-400 inline-block"),i(I,"class","text-center"),i(V,"class","mt-2 text-center"),i($,"class","mt-2 text-center"),i(C,"class","text-slate-400 ml-4 my-2"),i(E,"class","my-2 text-center"),i(P,"class","transition-all h-full bg-yellow-300"),nt(P,"width",J,!1),i(M,"class","mx-auto w-[500px] border-2 border-slate-400 h-[40px] mb-4 pt-[8px] pb-[4px] px-[4px]"),i(d,"class","border-double border-4 border-slate-400 mx-auto max-w-[700px]"),i(k,"class","absolute bottom-[150px] left-0 right-0"),i(a,"class","mt-12 text-xl text-slate-400"),i(c,"class","absolute inset-0 bg-[rgb(2,7,176)] overflow-hidden font-Levi")},m(e,p){ct(e,c,p),t(c,n),t(n,v),t(v,u),t(n,b),t(n,w),t(n,q),t(n,y),t(c,L),t(c,a),t(a,I),t(I,O),t(a,U),t(a,V),t(V,Y),t(a,j),t(a,$),t($,z),t(a,A),t(a,k),t(k,d),t(d,C),t(C,F),t(d,G),t(d,E),t(E,B),t(E,H),t(d,N),t(d,M),t(M,P),ct(e,K,p),vt(f,e,p),X=!0,Q||(tt=bt(window,"keydown",St(Ct)),Q=!0)},p(e,[p]){(!X||p&2)&&T!==(T=Math.floor(e[1])+"")&&wt(B,T),p&2&&J!==(J=`${e[1]}%`)&&nt(P,"width",J,!1);const x={};f.$set(x)},i(e){X||(xt(f.$$.fragment,e),X=!0)},o(e){gt(f.$$.fragment,e),X=!1},d(e){e&&s(c),e&&s(K),_[2](null),yt(f,e),Q=!1,tt()}}}function Ct(_){switch(_.keyCode){}}function Mt(_,c,n){let v=Et(),u,b=0,w=!1;Pt(async()=>{y(),q()}),Dt(()=>{w=!0});async function q(){for(;b<100;)await pt(Z(1,10)*10),n(1,b=Math.min(100,b+Z(1,10)/12));v("load_page",{url:"./installation/dos/restart.svelte"})}async function y(){for(;!w;)await pt(Z(1,30)*10),n(0,u.r_message="Copying: "+$t(),u)}function L(a){It[a?"unshift":"push"](()=>{u=a,n(0,u)})}return[u,b,L]}class Xt extends ut{constructor(c){super(),ft(this,c,Mt,kt,ht,{})}}export{Xt as default};
