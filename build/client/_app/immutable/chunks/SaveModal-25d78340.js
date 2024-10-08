import{S as Qe,i as Xe,s as $e,P as U,l as k,a as C,r as W,m as w,n as x,h as u,c as T,u as Y,p as c,q as Z,b as G,J as i,K as q,Z as zt,v as et,E as Te,L as Ce,_ as Lt,T as ht,U as _t,W as tt,w as ye,x as Ee,a5 as Le,a9 as gt,y as De,g as Nt,a6 as qt,a8 as Rt,d as Ot,f as ne,t as oe,B as Ie,Y as Ht,M as At,a1 as Jt}from"./index-70a5fc52.js";import{T as Kt}from"./TitleBar-5f961d1e.js";import"./lodash-b0811ec1.js";import{h as Wt,o as Yt,u as Zt,l as mt,n as Gt,j as Qt,m as Xt,b as $t}from"./store-59feb90e.js";import{t as el,a as tl,b as ll}from"./finder-52261c48.js";import"./fs-f48425c2.js";import{B as pt}from"./Button-e8580b92.js";import{u as sl}from"./utils-1f7a3290.js";import{P as il}from"./Previewable-7057b01c.js";import"./_commonjsHelpers-cea7ac1a.js";import"./index-f053a494.js";import"./index-355ed6be.js";/* empty css                                             */function bt(l,e,t){const s=l.slice();return s[13]=e[t],s[15]=t,s}function vt(l){let e,t=l[13].name+"",s,o,a=`${Ne}px`,f,r;function d(){return l[9](l[15])}return{c(){e=k("div"),s=W(t),o=C(),this.h()},l(v){e=w(v,"DIV",{class:!0});var b=x(e);s=Y(b,t),o=T(b),b.forEach(u),this.h()},h(){c(e,"class","box-border w-full flex flex-row p-0.5 pl-2 items-center hover:bg-blue-600 hover:text-slate-50 "+(l[15]!=0?"border-t":"")+" border-slate-300"),Z(e,"height",a,!1)},m(v,b){G(v,e,b),i(e,s),i(e,o),f||(r=q(e,"click",d),f=!0)},p(v,b){l=v,b&2&&t!==(t=l[13].name+"")&&et(s,t)},d(v){v&&u(e),f=!1,r()}}}function kt(l){let e,t,s,o=`${Ne-2}px`,a,f;return{c(){e=k("div"),t=ht("svg"),s=ht("path"),this.h()},l(r){e=w(r,"DIV",{class:!0});var d=x(e);t=_t(d,"svg",{class:!0,xmlns:!0,viewBox:!0});var v=x(t);s=_t(v,"path",{d:!0}),x(s).forEach(u),v.forEach(u),d.forEach(u),this.h()},h(){c(s,"d","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"),c(t,"class","w-full h-full fill-blue-700"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"viewBox","0 0 512 512"),c(e,"class","absolute right-[1px] top-[1px] bottom-[1px] p-1 rounded bg-blue-200 border-2 border-slate-50 box-border"),Z(e,"width",o,!1)},m(r,d){G(r,e,d),i(e,t),i(t,s),a||(f=q(e,"click",l[7]),a=!0)},p:Te,d(r){r&&u(e),a=!1,f()}}}function nl(l){var L;let e,t,s,o=`${l[3]?Math.min(l[1].length*Ne,100):0}px`,a,f,r=((L=l[1][l[0]])==null?void 0:L.name)+"",d,v,b,y,p=l[1],_=[];for(let m=0;m<p.length;m+=1)_[m]=vt(bt(l,p,m));let E=l[1].length>1&&kt(l);return{c(){e=k("div"),t=k("div");for(let m=0;m<_.length;m+=1)_[m].c();a=C(),f=k("div"),d=W(r),v=C(),E&&E.c(),this.h()},l(m){e=w(m,"DIV",{class:!0,style:!0});var g=x(e);t=w(g,"DIV",{class:!0,style:!0});var P=x(t);for(let F=0;F<_.length;F+=1)_[F].l(P);P.forEach(u),a=T(g),f=w(g,"DIV",{class:!0});var I=x(f);d=Y(I,r),I.forEach(u),v=T(g),E&&E.l(g),g.forEach(u),this.h()},h(){c(t,"class",s="absolute bg-slate-50 w-full left-0 max-h-[100px] overflow-y-auto box-content border border-slate-300 "+(l[3]?"block":"hidden")),c(t,"style",l[5]),Z(t,"height",o,!1),c(f,"class","absolute inset-0 flex flex-row items-center pl-2"),c(e,"class","bg-slate-50 h-6 text-slate-800 border border-blue-300 p-1 text-[11px] absolute"),c(e,"style",l[2])},m(m,g){G(m,e,g),i(e,t);for(let P=0;P<_.length;P+=1)_[P].m(t,null);i(e,a),i(e,f),i(f,d),i(e,v),E&&E.m(e,null),l[10](e),b||(y=[q(f,"click",l[7]),zt(l[6].call(null,e)),q(e,"click_outside",l[11])],b=!0)},p(m,[g]){var P;if(g&11){p=m[1];let I;for(I=0;I<p.length;I+=1){const F=bt(m,p,I);_[I]?_[I].p(F,g):(_[I]=vt(F),_[I].c(),_[I].m(t,null))}for(;I<_.length;I+=1)_[I].d(1);_.length=p.length}g&8&&s!==(s="absolute bg-slate-50 w-full left-0 max-h-[100px] overflow-y-auto box-content border border-slate-300 "+(m[3]?"block":"hidden"))&&c(t,"class",s),g&32&&c(t,"style",m[5]),g&10&&o!==(o=`${m[3]?Math.min(m[1].length*Ne,100):0}px`)&&Z(t,"height",o,!1),g&3&&r!==(r=((P=m[1][m[0]])==null?void 0:P.name)+"")&&et(d,r),m[1].length>1?E?E.p(m,g):(E=kt(m),E.c(),E.m(e,null)):E&&(E.d(1),E=null),g&4&&c(e,"style",m[2])},i:Te,o:Te,d(m){m&&u(e),Ce(_,m),E&&E.d(),l[10](null),b=!1,Lt(y)}}}let Ne=24;function ol(l,e,t){const{click_outside:s}=sl;let{items:o=[]}=e,{selected_index:a=0}=e,{style:f=""}=e,{direction:r}=e,d=!1,v,b="";function y(){p(),t(3,d=!0),console.log({expand:d})}function p(){r=="bottom"?t(5,b="top:100%;"):r=="top"?t(5,b="bottom:100%;"):document.body.offsetHeight-v.getBoundingClientRect().y>150?t(5,b="top:100%;"):t(5,b="bottom:100%;")}const _=m=>{t(0,a=m),t(3,d=!1)};function E(m){tt[m?"unshift":"push"](()=>{v=m,t(4,v)})}const L=()=>t(3,d=!1);return l.$$set=m=>{"items"in m&&t(1,o=m.items),"selected_index"in m&&t(0,a=m.selected_index),"style"in m&&t(2,f=m.style),"direction"in m&&t(8,r=m.direction)},[a,o,f,d,v,b,s,y,r,_,E,L]}class al extends Qe{constructor(e){super(),Xe(this,e,ol,nl,$e,{items:1,selected_index:0,style:2,direction:8})}get items(){return this.$$.ctx[1]}set items(e){this.$$set({items:e}),U()}get selected_index(){return this.$$.ctx[0]}set selected_index(e){this.$$set({selected_index:e}),U()}get style(){return this.$$.ctx[2]}set style(e){this.$$set({style:e}),U()}get direction(){return this.$$.ctx[8]}set direction(e){this.$$set({direction:e}),U()}}function wt(l,e,t){const s=l.slice();return s[28]=e[t],s}function xt(l,e,t){const s=l.slice();return s[28]=e[t],s}function yt(l,e,t){const s=l.slice();return s[28]=e[t],s}function Et(l,e,t){const s=l.slice();return s[28]=e[t],s}function rl(l){let e,t;return{c(){e=k("div"),this.h()},l(s){e=w(s,"DIV",{class:!0});var o=x(e);o.forEach(u),this.h()},h(){c(e,"class",t="w-[30px] h-[30px] shrink-0 bg-contain bg-no-repeat "+(l[28].type=="folder"?"bg-[url(/images/xp/icons/FolderClosed.png)]":"bg-[url(/images/xp/icons/Default.png)]")),Z(e,"background-image",l[17](l[28]),!1)},m(s,o){G(s,e,o)},p(s,o){o[0]&2048&&t!==(t="w-[30px] h-[30px] shrink-0 bg-contain bg-no-repeat "+(s[28].type=="folder"?"bg-[url(/images/xp/icons/FolderClosed.png)]":"bg-[url(/images/xp/icons/Default.png)]"))&&c(e,"class",t),o[0]&2048&&Z(e,"background-image",s[17](s[28]),!1)},i:Te,o:Te,d(s){s&&u(e)}}}function cl(l){let e,t;return e=new il({props:{size:30,default_icon:l[17](l[28]),fs_id:l[28].id}}),{c(){ye(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,o){De(e,s,o),t=!0},p(s,o){const a={};o[0]&2048&&(a.default_icon=s[17](s[28])),o[0]&2048&&(a.fs_id=s[28].id),e.$set(a)},i(s){t||(ne(e.$$.fragment,s),t=!0)},o(s){oe(e.$$.fragment,s),t=!1},d(s){Ie(e,s)}}}function Dt(l,e){let t,s,o,a,f,r,d=e[28].name+"",v,b,y,p,_,E,L;const m=[cl,rl],g=[];function P(F,D){return D[0]&2048&&(s=null),s==null&&(s=!!Gt.includes(F[28].ext)),s?0:1}o=P(e,[-1,-1]),a=g[o]=m[o](e);function I(){return e[19](e[28])}return{key:l,first:null,c(){t=k("div"),a.c(),f=C(),r=k("p"),v=W(d),b=C(),this.h()},l(F){t=w(F,"DIV",{"fs-id":!0,class:!0});var D=x(t);a.l(D),f=T(D),r=w(D,"P",{class:!0});var V=x(r);v=Y(V,d),V.forEach(u),b=T(D),D.forEach(u),this.h()},h(){c(r,"class","px-1 text-[11px] break-words line-clamp-2 text-ellipsis leading-tight"),c(t,"fs-id",y=e[28].id),c(t,"class",p="w-[100px] overflow-hidden m-2 inline-flex flex-row items-center font-MSSS relative "+(Mt(e[28])?"":"opacity-50")),this.first=t},m(F,D){G(F,t,D),g[o].m(t,null),i(t,f),i(t,r),i(r,v),i(t,b),_=!0,E||(L=q(t,"dblclick",I),E=!0)},p(F,D){e=F;let V=o;o=P(e,D),o===V?g[o].p(e,D):(Nt(),oe(g[V],1,1,()=>{g[V]=null}),Ot(),a=g[o],a?a.p(e,D):(a=g[o]=m[o](e),a.c()),ne(a,1),a.m(t,f)),(!_||D[0]&2048)&&d!==(d=e[28].name+"")&&et(v,d),(!_||D[0]&2048&&y!==(y=e[28].id))&&c(t,"fs-id",y),(!_||D[0]&2048&&p!==(p="w-[100px] overflow-hidden m-2 inline-flex flex-row items-center font-MSSS relative "+(Mt(e[28])?"":"opacity-50")))&&c(t,"class",p)},i(F){_||(ne(a),_=!0)},o(F){oe(a),_=!1},d(F){F&&u(t),g[o].d(),E=!1,L()}}}function It(l){let e,t,s,o,a=(l[28].display_name!=null?l[28].display_name:l[28].name)+"",f,r,d;function v(){return l[20](l[28])}return{c(){e=k("div"),t=k("div"),s=C(),o=k("div"),f=W(a),this.h()},l(b){e=w(b,"DIV",{class:!0});var y=x(e);t=w(y,"DIV",{class:!0});var p=x(t);p.forEach(u),s=T(y),o=w(y,"DIV",{class:!0});var _=x(o);f=Y(_,a),_.forEach(u),y.forEach(u),this.h()},h(){c(t,"class","w-[40px] h-[40px] shrink-0 bg-[url(/images/xp/icons/FolderClosed.png)] bg-contain"),Z(t,"background-image",l[28].icon==null?"":`url(${l[28].icon})`,!1),c(o,"class","px-1 text-[11px] line-clamp-2 text-ellipsis leading-tight"),c(e,"class","w-[150px] ml-4 mr-8 overflow-hidden inline-flex flex-row items-center font-MSSS")},m(b,y){G(b,e,y),i(e,t),i(e,s),i(e,o),i(o,f),r||(d=q(e,"dblclick",v),r=!0)},p(b,y){l=b},d(b){b&&u(e),r=!1,d()}}}function Vt(l){let e,t,s,o,a=(l[28].display_name!=null?l[28].display_name:l[28].name)+"",f,r,d;function v(){return l[21](l[28])}return{c(){e=k("div"),t=k("div"),s=C(),o=k("div"),f=W(a),this.h()},l(b){e=w(b,"DIV",{class:!0});var y=x(e);t=w(y,"DIV",{class:!0});var p=x(t);p.forEach(u),s=T(y),o=w(y,"DIV",{class:!0});var _=x(o);f=Y(_,a),_.forEach(u),y.forEach(u),this.h()},h(){c(t,"class","w-[50px] h-[50px] shrink-0 bg-[url(/images/xp/icons/LocalDisk.png)] bg-contain"),c(o,"class","px-1 text-[11px] line-clamp-2 text-ellipsis leading-tight"),c(e,"class","w-[150px] ml-4 mr-8 overflow-hidden inline-flex flex-row items-center font-MSSS")},m(b,y){G(b,e,y),i(e,t),i(e,s),i(e,o),i(o,f),r||(d=q(e,"dblclick",v),r=!0)},p(b,y){l=b},d(b){b&&u(e),r=!1,d()}}}function St(l){let e,t,s,o,a=(l[28].display_name!=null?l[28].display_name:l[28].name)+"",f,r,d,v;function b(){return l[22](l[28])}return{c(){e=k("div"),t=k("div"),s=C(),o=k("div"),f=W(a),r=C(),this.h()},l(y){e=w(y,"DIV",{class:!0});var p=x(e);t=w(p,"DIV",{class:!0});var _=x(t);_.forEach(u),s=T(p),o=w(p,"DIV",{class:!0});var E=x(o);f=Y(E,a),E.forEach(u),r=T(p),p.forEach(u),this.h()},h(){c(t,"class","w-[50px] h-[50px] shrink-0 bg-[url(/images/xp/icons/RemovableMedia.png)] bg-contain"),c(o,"class","px-1 text-[11px] line-clamp-2 text-ellipsis leading-tight"),c(e,"class","w-[150px] ml-4 mr-8 overflow-hidden inline-flex flex-row items-center font-MSSS")},m(y,p){G(y,e,p),i(e,t),i(e,s),i(e,o),i(o,f),i(e,r),d||(v=q(e,"dblclick",b),d=!0)},p(y,p){l=y},d(y){y&&u(e),d=!1,v()}}}function fl(l){let e,t,s,o,a,f,r,d,v,b,y,p,_,E,L,m,g,P,I=[],F=new Map,D,V,N,O,K,Q,ae,le,h,z,Oe,Ve,Ue,Pe,ue,je,ze,Se,qe,Re,re,X,he,He,Ae,_e,$,Je,ge,ce,Ke,ee,me,We,Ye,se,Ze,pe,fe,ie,Ge,lt,Me=l[11];const st=n=>n[28].id;for(let n=0;n<Me.length;n+=1){let S=Et(l,Me,n),B=st(S);F.set(B,I[n]=Dt(B,S))}let be=l[13].filter(Ct),R=[];for(let n=0;n<be.length;n+=1)R[n]=It(yt(l,be,n));let ve=l[13].filter(Tt),H=[];for(let n=0;n<ve.length;n+=1)H[n]=Vt(xt(l,ve,n));let ke=l[13].filter(Pt),A=[];for(let n=0;n<ke.length;n+=1)A[n]=St(wt(l,ke,n));ce=new pt({props:{title:"Save",on_click:l[6],disabled:l[1].length==0||l[0]==null}});let Ut={style:"left:100px;right:100px;bottom:5px;",items:l[4],selected_index:l[4].indexOf(l[3])>=0?l[4].indexOf(l[3]):0};return se=new al({props:Ut}),l[25](se),fe=new pt({props:{title:"Cancel",on_click:l[7]}}),{c(){e=k("div"),t=k("div"),s=k("div"),o=k("input"),a=C(),f=k("div"),d=C(),v=k("button"),y=C(),p=k("button"),E=C(),L=k("button"),g=C(),P=k("div");for(let n=0;n<I.length;n+=1)I[n].c();D=C(),V=k("div"),N=k("p"),O=W("Files Stored on This Computer"),K=C(),Q=k("div"),ae=C();for(let n=0;n<R.length;n+=1)R[n].c();le=C(),h=k("p"),z=W("Hard Disk Drives"),Oe=C(),Ve=k("div"),Ue=C();for(let n=0;n<H.length;n+=1)H[n].c();Pe=C(),ue=k("p"),je=W("Devices with Removable Storage"),ze=C(),Se=k("div"),qe=C();for(let n=0;n<A.length;n+=1)A[n].c();Re=C(),re=k("div"),X=k("div"),he=k("div"),He=W("File name:"),Ae=C(),_e=k("div"),$=k("input"),Je=C(),ge=k("div"),ye(ce.$$.fragment),Ke=C(),ee=k("div"),me=k("div"),We=W("Save as type:"),Ye=C(),ye(se.$$.fragment),Ze=C(),pe=k("div"),ye(fe.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var S=x(e);t=w(S,"DIV",{class:!0});var B=x(t);s=w(B,"DIV",{class:!0});var de=x(s);o=w(de,"INPUT",{class:!0,type:!0}),a=T(de),f=w(de,"DIV",{class:!0});var Be=x(f);Be.forEach(u),de.forEach(u),d=T(B),v=w(B,"BUTTON",{class:!0});var M=x(v);M.forEach(u),y=T(B),p=w(B,"BUTTON",{class:!0});var te=x(p);te.forEach(u),E=T(B),L=w(B,"BUTTON",{class:!0});var jt=x(L);jt.forEach(u),B.forEach(u),g=T(S),P=w(S,"DIV",{class:!0});var it=x(P);for(let J=0;J<I.length;J+=1)I[J].l(it);it.forEach(u),D=T(S),V=w(S,"DIV",{class:!0});var j=x(V);N=w(j,"P",{class:!0});var nt=x(N);O=Y(nt,"Files Stored on This Computer"),nt.forEach(u),K=T(j),Q=w(j,"DIV",{class:!0}),x(Q).forEach(u),ae=T(j);for(let J=0;J<R.length;J+=1)R[J].l(j);le=T(j),h=w(j,"P",{class:!0});var ot=x(h);z=Y(ot,"Hard Disk Drives"),ot.forEach(u),Oe=T(j),Ve=w(j,"DIV",{class:!0}),x(Ve).forEach(u),Ue=T(j);for(let J=0;J<H.length;J+=1)H[J].l(j);Pe=T(j),ue=w(j,"P",{class:!0});var at=x(ue);je=Y(at,"Devices with Removable Storage"),at.forEach(u),ze=T(j),Se=w(j,"DIV",{class:!0}),x(Se).forEach(u),qe=T(j);for(let J=0;J<A.length;J+=1)A[J].l(j);j.forEach(u),Re=T(S),re=w(S,"DIV",{class:!0});var Fe=x(re);X=w(Fe,"DIV",{class:!0});var we=x(X);he=w(we,"DIV",{class:!0});var rt=x(he);He=Y(rt,"File name:"),rt.forEach(u),Ae=T(we),_e=w(we,"DIV",{class:!0});var ct=x(_e);$=w(ct,"INPUT",{type:!0,class:!0}),ct.forEach(u),Je=T(we),ge=w(we,"DIV",{class:!0});var ft=x(ge);Ee(ce.$$.fragment,ft),ft.forEach(u),we.forEach(u),Ke=T(Fe),ee=w(Fe,"DIV",{class:!0});var xe=x(ee);me=w(xe,"DIV",{class:!0});var dt=x(me);We=Y(dt,"Save as type:"),dt.forEach(u),Ye=T(xe),Ee(se.$$.fragment,xe),Ze=T(xe),pe=w(xe,"DIV",{class:!0});var ut=x(pe);Ee(fe.$$.fragment,ut),ut.forEach(u),xe.forEach(u),Fe.forEach(u),S.forEach(u),this.h()},h(){c(o,"class","absolute inset-0 w-[300px] pl-7 border border-blue-300 outline-none"),c(o,"type","text"),o.value=l[12],c(f,"class",r="w-[17px] h-[17px] absolute top-[4px] left-[4px] bg-no-repeat "+(l[0]==null?"bg-[url(/images/xp/icons/MyComputer.png)]":"bg-[url(/images/xp/icons/FolderClosed.png)]")+" bg-contain"),Z(f,"background-image",l[17](l[10][l[0]]),!1),c(s,"class","h-full w-[300px] relative"),c(v,"class","mx-1.5 ml-4 w-4 h-4 bg-[url(/images/xp/icons/Back.png)] bg-contain disabled:grayscale"),v.disabled=b=l[9]==0,c(p,"class","mx-1.5 w-4 h-4 bg-[url(/images/xp/icons/Forward.png)] bg-contain disabled:grayscale"),p.disabled=_=l[9]==l[8].length-1,c(L,"class","mx-1.5 w-5 h-5 bg-[url(/images/xp/icons/Up.png)] bg-contain disabled:grayscale"),L.disabled=m=l[8][l[9]]==null,c(t,"class","absolute inset-1 top-0.5 h-6 mb-2 flex flex-row items-center text-[11px]"),c(P,"class","absolute top-7 left-1 right-1 h-[360px] overflow-auto bg-slate-50 border border-blue-300"),Le(P,"hidden",l[0]==null),c(N,"class","ml-2 mt-0.5 font-MSSS text-black text-[11px] font-bold"),c(Q,"class","mb-4 w-[300px] h-[2px] bg-gradient-to-r from-blue-500 to-slate-50"),c(h,"class","ml-2 mt-4 font-MSSS text-black text-[11px] font-bold"),c(Ve,"class","mb-4 w-[300px] h-[2px] bg-gradient-to-r from-blue-500 to-slate-50"),c(ue,"class","ml-2 mt-4 font-MSSS text-black text-[11px] font-bold"),c(Se,"class","mb-4 w-[300px] h-[2px] bg-gradient-to-r from-blue-500 to-slate-50"),c(V,"class","absolute top-7 left-1 right-1 h-[360px] overflow-auto bg-slate-50 border border-blue-300"),Le(V,"hidden",l[0]!=null),c(he,"class","w-[100px] shrink-0"),c($,"type","text"),c($,"class","w-full h-6 text-[11px] outline-none border border-blue-300 disabled:bg-slate-50"),c(_e,"class","grow"),c(ge,"class","w-[100px] shrink-0 flex flex-row justify-end "),c(X,"class","absolute top-0 right-0 left-0 h-[35px] flex flex-row items-center"),c(me,"class","w-[100px] shrink-0"),c(pe,"class","w-[100px] shrink-0 flex flex-row justify-end "),c(ee,"class","absolute bottom-0 right-0 left-0 h-[35px] flex flex-row items-center justify-between"),c(re,"class","absolute bottom-1 right-1 left-1 h-[70px] text-[11px] text-black"),c(e,"class","absolute inset-0 bg-xp-yellow")},m(n,S){G(n,e,S),i(e,t),i(t,s),i(s,o),i(s,a),i(s,f),i(t,d),i(t,v),i(t,y),i(t,p),i(t,E),i(t,L),i(e,g),i(e,P);for(let B=0;B<I.length;B+=1)I[B].m(P,null);i(e,D),i(e,V),i(V,N),i(N,O),i(V,K),i(V,Q),i(V,ae);for(let B=0;B<R.length;B+=1)R[B].m(V,null);i(V,le),i(V,h),i(h,z),i(V,Oe),i(V,Ve),i(V,Ue);for(let B=0;B<H.length;B+=1)H[B].m(V,null);i(V,Pe),i(V,ue),i(ue,je),i(V,ze),i(V,Se),i(V,qe);for(let B=0;B<A.length;B+=1)A[B].m(V,null);i(e,Re),i(e,re),i(re,X),i(X,he),i(he,He),i(X,Ae),i(X,_e),i(_e,$),gt($,l[1]),i(X,Je),i(X,ge),De(ce,ge,null),i(re,Ke),i(re,ee),i(ee,me),i(me,We),i(ee,Ye),De(se,ee,null),i(ee,Ze),i(ee,pe),De(fe,pe,null),ie=!0,Ge||(lt=[q(o,"click",dl),q(o,"keyup",l[18]),q(v,"click",l[14]),q(p,"click",l[15]),q(L,"click",l[16]),q($,"input",l[23]),q($,"keyup",l[24])],Ge=!0)},p(n,S){if((!ie||S[0]&4096&&o.value!==n[12])&&(o.value=n[12]),(!ie||S[0]&1&&r!==(r="w-[17px] h-[17px] absolute top-[4px] left-[4px] bg-no-repeat "+(n[0]==null?"bg-[url(/images/xp/icons/MyComputer.png)]":"bg-[url(/images/xp/icons/FolderClosed.png)]")+" bg-contain"))&&c(f,"class",r),S[0]&1025&&Z(f,"background-image",n[17](n[10][n[0]]),!1),(!ie||S[0]&512&&b!==(b=n[9]==0))&&(v.disabled=b),(!ie||S[0]&768&&_!==(_=n[9]==n[8].length-1))&&(p.disabled=_),(!ie||S[0]&768&&m!==(m=n[8][n[9]]==null))&&(L.disabled=m),S[0]&133152&&(Me=n[11],Nt(),I=qt(I,S,st,1,n,Me,F,P,Rt,Dt,null,Et),Ot()),S[0]&1&&Le(P,"hidden",n[0]==null),S[0]&8224){be=n[13].filter(Ct);let M;for(M=0;M<be.length;M+=1){const te=yt(n,be,M);R[M]?R[M].p(te,S):(R[M]=It(te),R[M].c(),R[M].m(V,le))}for(;M<R.length;M+=1)R[M].d(1);R.length=be.length}if(S[0]&8224){ve=n[13].filter(Tt);let M;for(M=0;M<ve.length;M+=1){const te=xt(n,ve,M);H[M]?H[M].p(te,S):(H[M]=Vt(te),H[M].c(),H[M].m(V,Pe))}for(;M<H.length;M+=1)H[M].d(1);H.length=ve.length}if(S[0]&8224){ke=n[13].filter(Pt);let M;for(M=0;M<ke.length;M+=1){const te=wt(n,ke,M);A[M]?A[M].p(te,S):(A[M]=St(te),A[M].c(),A[M].m(V,null))}for(;M<A.length;M+=1)A[M].d(1);A.length=ke.length}S[0]&1&&Le(V,"hidden",n[0]!=null),S[0]&2&&$.value!==n[1]&&gt($,n[1]);const B={};S[0]&64&&(B.on_click=n[6]),S[0]&3&&(B.disabled=n[1].length==0||n[0]==null),ce.$set(B);const de={};S[0]&16&&(de.items=n[4]),S[0]&24&&(de.selected_index=n[4].indexOf(n[3])>=0?n[4].indexOf(n[3]):0),se.$set(de);const Be={};S[0]&128&&(Be.on_click=n[7]),fe.$set(Be)},i(n){if(!ie){for(let S=0;S<Me.length;S+=1)ne(I[S]);ne(ce.$$.fragment,n),ne(se.$$.fragment,n),ne(fe.$$.fragment,n),ie=!0}},o(n){for(let S=0;S<I.length;S+=1)oe(I[S]);oe(ce.$$.fragment,n),oe(se.$$.fragment,n),oe(fe.$$.fragment,n),ie=!1},d(n){n&&u(e);for(let S=0;S<I.length;S+=1)I[S].d();Ce(R,n),Ce(H,n),Ce(A,n),Ie(ce),l[25](null),Ie(se),Ie(fe),Ge=!1,Lt(lt)}}}function Mt(l){return!0}const dl=l=>l.target.select(),Ct=l=>l.type=="folder",Tt=l=>l.type=="drive",Pt=l=>l.type=="removable_storage";function ul(l,e,t){let s,o,a;Ht(l,Wt,h=>t(10,a=h)),At();let{id:f}=e,r=[f],d=0,v=Yt.map(h=>a[h]),{selected_filetype:b}=e,{filetypes:y=[]}=e,{filename:p=""}=e,{select_box:_}=e;function E(h){let z=a[h];(z==null?void 0:z.type)=="file"||(t(8,r=[...r.slice(0,d+1),h]),t(9,d=r.length-1),t(0,f=r[d]))}function L(){t(9,d=Math.max(0,d-1)),t(0,f=r[d])}function m(){t(9,d=Math.min(r.length-1,d+1)),t(0,f=r[d])}function g(){let h=a[r[d]].parent;E(h)}function P(h){return h==null?null:h.icon!=null?`url(${h.icon})`:mt[h.ext]!=null?`url(/images/xp/icons/${mt[h.ext]})`:null}function I(h){if(h.key=="Enter"){let z=tl(h.target.value);z==null&&(z=ll(h.target.value)),console.log("found id",z),z&&(E(z),h.target.blur())}}let{on_save:F=()=>{}}=e,{on_cancel:D=()=>{}}=e;const V=h=>E(h.id),N=h=>E(h.id),O=h=>E(h.id),K=h=>E(h.id);function Q(){p=this.value,t(1,p)}const ae=h=>{h.key=="Enter"&&f!=null&&p.length>0&&F()};function le(h){tt[h?"unshift":"push"](()=>{_=h,t(2,_)})}return l.$$set=h=>{"id"in h&&t(0,f=h.id),"selected_filetype"in h&&t(3,b=h.selected_filetype),"filetypes"in h&&t(4,y=h.filetypes),"filename"in h&&t(1,p=h.filename),"select_box"in h&&t(2,_=h.select_box),"on_save"in h&&t(6,F=h.on_save),"on_cancel"in h&&t(7,D=h.on_cancel)},l.$$.update=()=>{l.$$.dirty[0]&768&&t(12,s=el(r[d])||"My Computer"),l.$$.dirty[0]&1025&&t(11,o=a[f]==null?[]:a[f].children.map(h=>a[h]).filter(h=>h!=null).filter(h=>!Zt.includes(h.id)))},[f,p,_,b,y,E,F,D,r,d,a,o,s,v,L,m,g,P,I,V,N,O,K,Q,ae,le]}class hl extends Qe{constructor(e){super(),Xe(this,e,ul,fl,$e,{id:0,selected_filetype:3,filetypes:4,filename:1,select_box:2,open:5,on_save:6,on_cancel:7},null,[-1,-1])}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),U()}get selected_filetype(){return this.$$.ctx[3]}set selected_filetype(e){this.$$set({selected_filetype:e}),U()}get filetypes(){return this.$$.ctx[4]}set filetypes(e){this.$$set({filetypes:e}),U()}get filename(){return this.$$.ctx[1]}set filename(e){this.$$set({filename:e}),U()}get select_box(){return this.$$.ctx[2]}set select_box(e){this.$$set({select_box:e}),U()}get open(){return this.$$.ctx[5]}get on_save(){return this.$$.ctx[6]}set on_save(e){this.$$set({on_save:e}),U()}get on_cancel(){return this.$$.ctx[7]}set on_cancel(e){this.$$set({on_cancel:e}),U()}}function Bt(l,e,t){const s=l.slice();return s[14]=e[t],s}function Ft(l){let e,t,s=`url(${l[14].icon})`,o,a,f=l[14].name+"",r,d,v,b;function y(){return l[10](l[14])}return{c(){e=k("div"),t=k("div"),o=C(),a=k("span"),r=W(f),d=C(),this.h()},l(p){e=w(p,"DIV",{class:!0});var _=x(e);t=w(_,"DIV",{class:!0}),x(t).forEach(u),o=T(_),a=w(_,"SPAN",{class:!0});var E=x(a);r=Y(E,f),E.forEach(u),d=T(_),_.forEach(u),this.h()},h(){c(t,"class","w-8 h-8 bg-contain bg-no-repeat"),Z(t,"background-image",s,!1),c(a,"class","mt-1 text-[12px] text-black"),c(e,"class","w-full h-[80px] flex flex-col items-center p-2 hover:bg-slate-100 rounded")},m(p,_){G(p,e,_),i(e,t),i(e,o),i(e,a),i(a,r),i(e,d),v||(b=q(e,"click",y),v=!0)},p(p,_){l=p},d(p){p&&u(e),v=!1,b()}}}function _l(l){let e,t,s,o,a,f,r,d,v,b,y,p,_,E,L,m,g;s=new Kt({props:{options:{title:"Save",maximize_btn:!1,minimize_btn:!1},on_click_close:l[6]}});let P=l[8],I=[];for(let D=0;D<P.length;D+=1)I[D]=Ft(Bt(l,P,D));let F={id:l[4],filetypes:l[5],selected_filetype:l[1],on_save:l[11],on_cancel:l[6]};return E=new hl({props:F}),l[12](E),{c(){e=k("div"),t=k("div"),ye(s.$$.fragment),o=C(),a=k("div"),f=k("div"),r=k("div"),d=k("span"),v=W("Look in:"),b=C(),y=k("div");for(let D=0;D<I.length;D+=1)I[D].c();p=C(),_=k("div"),ye(E.$$.fragment),this.h()},l(D){e=w(D,"DIV",{class:!0});var V=x(e);t=w(V,"DIV",{class:!0});var N=x(t);Ee(s.$$.fragment,N),o=T(N),a=w(N,"DIV",{class:!0});var O=x(a);f=w(O,"DIV",{class:!0});var K=x(f);r=w(K,"DIV",{class:!0});var Q=x(r);d=w(Q,"SPAN",{class:!0});var ae=x(d);v=Y(ae,"Look in:"),ae.forEach(u),Q.forEach(u),b=T(K),y=w(K,"DIV",{class:!0});var le=x(y);for(let z=0;z<I.length;z+=1)I[z].l(le);le.forEach(u),K.forEach(u),p=T(O),_=w(O,"DIV",{class:!0});var h=x(_);Ee(E.$$.fragment,h),h.forEach(u),O.forEach(u),N.forEach(u),V.forEach(u),this.h()},h(){c(d,"class","text-[11px] text-black"),c(r,"class","h-7 mr-2 flex flex-row justify-end items-center"),c(y,"class","bg-xp-yellow-light shadow rounded w-full"),c(f,"class","absolute top-1 left-1 bottom-0 w-[100px]"),c(_,"class","absolute top-1 left-[110px] right-1 bottom-1"),c(a,"class","absolute inset-0 top-[28px] bg-xp-yellow shadow-lg border-t-0 border-2 border-blue-600"),c(t,"class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col"),Z(t,"width","600px",!1),Z(t,"height","500px",!1),c(e,"class","absolute inset-0 bg-slate-50/40 rounded-t-lg z-10")},m(D,V){G(D,e,V),i(e,t),De(s,t,null),i(t,o),i(t,a),i(a,f),i(f,r),i(r,d),i(d,v),i(f,b),i(f,y);for(let N=0;N<I.length;N+=1)I[N].m(y,null);i(a,p),i(a,_),De(E,_,null),L=!0,m||(g=q(e,"click",Jt(l[13])),m=!0)},p(D,[V]){if(V&257){P=D[8];let O;for(O=0;O<P.length;O+=1){const K=Bt(D,P,O);I[O]?I[O].p(K,V):(I[O]=Ft(K),I[O].c(),I[O].m(y,null))}for(;O<I.length;O+=1)I[O].d(1);I.length=P.length}const N={};V&16&&(N.id=D[4]),V&32&&(N.filetypes=D[5]),V&2&&(N.selected_filetype=D[1]),V&143&&(N.on_save=D[11]),E.$set(N)},i(D){L||(ne(s.$$.fragment,D),ne(E.$$.fragment,D),L=!0)},o(D){oe(s.$$.fragment,D),oe(E.$$.fragment,D),L=!1},d(D){D&&u(e),Ie(s),Ce(I,D),l[12](null),Ie(E),m=!1,g()}}}function gl(l,e,t){let{self:s}=e,{id:o}=e,{viewer:a}=e,{filetypes:f=[]}=e,{selected_filetype:r}=e,{filename:d}=e,{parent_id:v}=e,b=[{id:Qt,name:"Desktop",icon:"/images/xp/icons/Desktop.png"},{id:Xt,name:"My Pictures",icon:"/images/xp/icons/MyPictures.png"},{id:$t,name:"My Music",icon:"/images/xp/icons/MyMusic.png"},{id:null,name:"My Computer",icon:"/images/xp/icons/MyComputer.png"}];function y(){console.log(s),s.$destroy()}let{on_save:p=()=>{}}=e;const _=g=>a.open(g.id),E=()=>{t(3,v=a.id),t(2,d=a.filename),t(1,r=a.select_box.items[a.select_box.selected_index]),console.log(r),p()};function L(g){tt[g?"unshift":"push"](()=>{a=g,t(0,a)})}const m=g=>{g.target.querySelector("div").classList.add("animate-blink"),setTimeout(()=>{g.target.querySelector("div").classList.remove("animate-blink")},400)};return l.$$set=g=>{"self"in g&&t(9,s=g.self),"id"in g&&t(4,o=g.id),"viewer"in g&&t(0,a=g.viewer),"filetypes"in g&&t(5,f=g.filetypes),"selected_filetype"in g&&t(1,r=g.selected_filetype),"filename"in g&&t(2,d=g.filename),"parent_id"in g&&t(3,v=g.parent_id),"on_save"in g&&t(7,p=g.on_save)},[a,r,d,v,o,f,y,p,b,s,_,E,L,m]}class Ml extends Qe{constructor(e){super(),Xe(this,e,gl,_l,$e,{self:9,id:4,viewer:0,filetypes:5,selected_filetype:1,filename:2,parent_id:3,destroy:6,on_save:7})}get self(){return this.$$.ctx[9]}set self(e){this.$$set({self:e}),U()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),U()}get viewer(){return this.$$.ctx[0]}set viewer(e){this.$$set({viewer:e}),U()}get filetypes(){return this.$$.ctx[5]}set filetypes(e){this.$$set({filetypes:e}),U()}get selected_filetype(){return this.$$.ctx[1]}set selected_filetype(e){this.$$set({selected_filetype:e}),U()}get filename(){return this.$$.ctx[2]}set filename(e){this.$$set({filename:e}),U()}get parent_id(){return this.$$.ctx[3]}set parent_id(e){this.$$set({parent_id:e}),U()}get destroy(){return this.$$.ctx[6]}get on_save(){return this.$$.ctx[7]}set on_save(e){this.$$set({on_save:e}),U()}}export{Ml as default};
