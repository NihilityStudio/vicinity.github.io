import{_ as Ne}from"../../../chunks/preload-helper-c28b9807.js";import{S as Le,i as Ue,s as je,P as he,l as c,a as x,r as G,m as u,n as f,h as i,c as I,u as J,p as a,q as F,b as K,J as s,v as ae,E as Ce,Q as Re,f as ge,d as Oe,t as Ee,L as Ge,M as Je,o as Ke,R as Qe,w as Ye,x as Ze,y as $e,B as et,g as tt}from"../../../chunks/index-70a5fc52.js";import{b as Xe,a as st}from"../../../chunks/utils-1f7a3290.js";function Te(r){let e;return{c(){e=c("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),f(e).forEach(i),this.h()},h(){a(e,"class","bg-[url(/images/xp/radio_check.png)] bg-cover absolute inset-1/4")},m(t,n){K(t,e,n)},d(t){t&&i(e)}}}function lt(r){let e,t,n,g,p,w,h=`${r[2]}px`,D=`${r[2]}px`,_,k,E,V,o=r[0]&&Te();return{c(){e=c("div"),t=c("div"),n=c("div"),g=c("div"),w=x(),o&&o.c(),_=x(),k=c("div"),E=G(r[1]),this.h()},l(m){e=u(m,"DIV",{class:!0});var y=f(e);t=u(y,"DIV",{class:!0});var P=f(t);n=u(P,"DIV",{class:!0});var M=f(n);g=u(M,"DIV",{class:!0}),f(g).forEach(i),M.forEach(i),w=I(P),o&&o.l(P),P.forEach(i),_=I(y),k=u(y,"DIV",{class:!0});var W=f(k);E=J(W,r[1]),W.forEach(i),y.forEach(i),this.h()},h(){a(g,"class","w-full h-full bg-[linear-gradient(135deg,#dcdcd7,#fff)] opacity-70 rounded-full"),a(n,"class",p=(r[3]?"bg-gradient-to-r":"")+" group-hover:bg-gradient-to-r from-orange-300 to-orange-200 absolute inset-0 rounded-full p-[2px]"),a(t,"class","group bg-[linear-gradient(135deg,#dcdcd7,#fff)] shrink-0 rounded-full border border-[#1d5281] relative"),F(t,"width",h,!1),F(t,"height",D,!1),a(k,"class",V="ml-2 leading-none "+(r[3]?"text-orange-400":"")),a(e,"class","flex flex-row")},m(m,y){K(m,e,y),s(e,t),s(t,n),s(n,g),s(t,w),o&&o.m(t,null),s(e,_),s(e,k),s(k,E)},p(m,[y]){y&8&&p!==(p=(m[3]?"bg-gradient-to-r":"")+" group-hover:bg-gradient-to-r from-orange-300 to-orange-200 absolute inset-0 rounded-full p-[2px]")&&a(n,"class",p),m[0]?o||(o=Te(),o.c(),o.m(t,null)):o&&(o.d(1),o=null),y&4&&h!==(h=`${m[2]}px`)&&F(t,"width",h,!1),y&4&&D!==(D=`${m[2]}px`)&&F(t,"height",D,!1),y&2&&ae(E,m[1]),y&8&&V!==(V="ml-2 leading-none "+(m[3]?"text-orange-400":""))&&a(k,"class",V)},i:Ce,o:Ce,d(m){m&&i(e),o&&o.d()}}}function at(r,e,t){let{checked:n=!1}=e,{label:g=""}=e,{size:p=15}=e,{in_progress:w=!1}=e;return r.$$set=h=>{"checked"in h&&t(0,n=h.checked),"label"in h&&t(1,g=h.label),"size"in h&&t(2,p=h.size),"in_progress"in h&&t(3,w=h.in_progress)},[n,g,p,w]}class it extends Le{constructor(e){super(),Ue(this,e,at,lt,je,{checked:0,label:1,size:2,in_progress:3})}get checked(){return this.$$.ctx[0]}set checked(e){this.$$set({checked:e}),he()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),he()}get size(){return this.$$.ctx[2]}set size(e){this.$$set({size:e}),he()}get in_progress(){return this.$$.ctx[3]}set in_progress(e){this.$$set({in_progress:e}),he()}}function Ae(r,e,t){const n=r.slice();return n[14]=e[t],n[16]=t,n}function Be(r){let e,t,n;return t=new it({props:{checked:r[14][1]==2,in_progress:r[14][1]==1,size:20,label:r[14][0]}}),{c(){e=c("div"),Ye(t.$$.fragment),this.h()},l(g){e=u(g,"DIV",{class:!0});var p=f(e);Ze(t.$$.fragment,p),p.forEach(i),this.h()},h(){a(e,"class","mb-4 ml-12 mr-20 text-white font-bold text-base")},m(g,p){K(g,e,p),$e(t,e,null),n=!0},p(g,p){const w={};p&1&&(w.checked=g[14][1]==2),p&1&&(w.in_progress=g[14][1]==1),p&1&&(w.label=g[14][0]),t.$set(w)},i(g){n||(ge(t.$$.fragment,g),n=!0)},o(g){Ee(t.$$.fragment,g),n=!1},d(g){g&&i(e),et(t)}}}function rt(r){let e,t,n,g,p,w,h,D,_,k,E,V,o,m,y,P,M=r[3]>1?"minutes":"minute",W,pe,H,Q=r[2].t+"",ie,me,N,X,re,oe=`${r[2].progress}%`,ve,A,T,B,Y=r[4][r[1]].heading+"",ne,_e,L,de=r[4][r[1]].text.split(`
`).join("<br/><br/>")+"",be,Z,we,O,S,$,ye,ee,ke,te,xe,se,Ie,le,ce,R,Ve,z,U=r[0],v=[];for(let l=0;l<U.length;l+=1)v[l]=Be(Ae(r,U,l));const Fe=l=>Ee(v[l],1,1,()=>{v[l]=null});return{c(){e=c("div"),t=c("div"),n=c("img"),p=x(),w=c("div"),h=x(),D=c("div"),_=c("div");for(let l=0;l<v.length;l+=1)v[l].c();k=x(),E=c("p"),V=G("Setup will complete in approximately:"),o=x(),m=c("p"),y=G(r[3]),P=x(),W=G(M),pe=x(),H=c("p"),ie=G(Q),me=x(),N=c("div"),X=c("div"),ve=x(),A=c("div"),T=c("div"),B=c("p"),ne=G(Y),_e=x(),L=c("p"),be=x(),Z=c("div"),we=x(),O=c("div"),S=c("div"),$=c("div"),ye=x(),ee=c("div"),ke=x(),te=c("div"),xe=x(),se=c("div"),Ie=x(),le=c("div"),ce=x(),R=c("audio"),this.h()},l(l){e=u(l,"DIV",{class:!0});var d=f(e);t=u(d,"DIV",{class:!0});var b=f(t);n=u(b,"IMG",{src:!0,class:!0,alt:!0}),b.forEach(i),p=I(d),w=u(d,"DIV",{class:!0}),f(w).forEach(i),h=I(d),D=u(d,"DIV",{class:!0});var j=f(D);_=u(j,"DIV",{class:!0});var q=f(_);for(let De=0;De<v.length;De+=1)v[De].l(q);k=I(q),E=u(q,"P",{class:!0});var Se=f(E);V=J(Se,"Setup will complete in approximately:"),Se.forEach(i),o=I(q),m=u(q,"P",{class:!0});var ue=f(m);y=J(ue,r[3]),P=I(ue),W=J(ue,M),ue.forEach(i),pe=I(q),H=u(q,"P",{class:!0});var Pe=f(H);ie=J(Pe,Q),Pe.forEach(i),me=I(q),N=u(q,"DIV",{class:!0});var Me=f(N);X=u(Me,"DIV",{class:!0}),f(X).forEach(i),Me.forEach(i),q.forEach(i),ve=I(j),A=u(j,"DIV",{class:!0,id:!0});var We=f(A);T=u(We,"DIV",{class:!0});var fe=f(T);B=u(fe,"P",{class:!0,style:!0});var ze=f(B);ne=J(ze,Y),ze.forEach(i),_e=I(fe),L=u(fe,"P",{class:!0});var He=f(L);He.forEach(i),fe.forEach(i),We.forEach(i),j.forEach(i),be=I(d),Z=u(d,"DIV",{class:!0}),f(Z).forEach(i),we=I(d),O=u(d,"DIV",{class:!0});var qe=f(O);S=u(qe,"DIV",{class:!0});var C=f(S);$=u(C,"DIV",{class:!0}),f($).forEach(i),ye=I(C),ee=u(C,"DIV",{class:!0}),f(ee).forEach(i),ke=I(C),te=u(C,"DIV",{class:!0}),f(te).forEach(i),xe=I(C),se=u(C,"DIV",{class:!0}),f(se).forEach(i),Ie=I(C),le=u(C,"DIV",{class:!0}),f(le).forEach(i),C.forEach(i),qe.forEach(i),d.forEach(i),ce=I(l),R=u(l,"AUDIO",{src:!0}),f(R).forEach(i),this.h()},h(){Re(n.src,g="/images/xp_logo_horizontal.png")||a(n,"src",g),a(n,"class","h-[40px] ml-4"),a(n,"alt",""),a(t,"class","h-[70px] bg-[#00309c] flex flex-row items-center shrink-0"),a(w,"class","h-[2px] bg-[linear-gradient(45deg,#466dcd,#c7ddff,#b0c9f7,#5a7edc)] shrink-0"),a(E,"class","font-bold text-base mt-6 text-white px-8 mr-4 font-MSSS"),a(m,"class","font-bold text-base text-white mr-12 text-center font-MSSS"),a(H,"class","mt-8 ml-8 text-sm text-white font-MSSS"),a(X,"class",re="bg-green-600 h-full "+(0<r[2].progress&&r[2].progress<100?"transition-all":"")),F(X,"width",oe,!1),a(N,"class","ml-8 mr-10 mt-1 border-[#00309c] border h-6 bg-white p-[1px]"),a(_,"class","w-1/5 min-w-[300px] pt-12 pointer-events-none"),a(B,"class","text-3xl text-white font-sans font-bold"),F(B,"text-shadow","2px 2px #000"),a(L,"class","text-lg text-white mt-8 max-w-[700px] font-MSSS"),a(T,"class","p-8 pl-20 pr-24 "),a(A,"class","grow bg-[linear-gradient(#5a7edc,#7698e6,#5a7edc)] relative"),a(A,"id","_95-installing-right-side"),a(D,"class","grow bg-[radial-gradient(circle_at_5%_5%,#91b1ef_0,#7698e6_6%,#5a7edc_12%)] flex flex-row overflow-hidden"),a(Z,"class","h-[2px] bg-[linear-gradient(45deg,#003399,#f99736,#c2814d,#00309c)] shrink-0"),a($,"class","svelte-4oebc7"),a(ee,"class","svelte-4oebc7"),a(te,"class","svelte-4oebc7"),a(se,"class","svelte-4oebc7"),a(le,"class","svelte-4oebc7"),a(S,"class","indicator absolute right-10 top-[50%] -translate-y-[50%] svelte-4oebc7"),a(O,"class","h-[70px] w-full bg-[linear-gradient(90deg,#3833ac,#00309c)] shrink-0 relative"),a(e,"class","absolute inset-0 overflow-hidden flex flex-col bg-[#5a7edc]"),Re(R.src,Ve="/audio/xp_installing.mp3")||a(R,"src",Ve),R.loop=!0,R.autoplay=!0},m(l,d){K(l,e,d),s(e,t),s(t,n),s(e,p),s(e,w),s(e,h),s(e,D),s(D,_);for(let b=0;b<v.length;b+=1)v[b].m(_,null);s(_,k),s(_,E),s(E,V),s(_,o),s(_,m),s(m,y),s(m,P),s(m,W),s(_,pe),s(_,H),s(H,ie),s(_,me),s(_,N),s(N,X),s(D,ve),s(D,A),s(A,T),s(T,B),s(B,ne),s(T,_e),s(T,L),L.innerHTML=de,s(e,be),s(e,Z),s(e,we),s(e,O),s(O,S),s(S,$),s(S,ye),s(S,ee),s(S,ke),s(S,te),s(S,xe),s(S,se),s(S,Ie),s(S,le),K(l,ce,d),K(l,R,d),z=!0},p(l,[d]){if(d&1){U=l[0];let b;for(b=0;b<U.length;b+=1){const j=Ae(l,U,b);v[b]?(v[b].p(j,d),ge(v[b],1)):(v[b]=Be(j),v[b].c(),ge(v[b],1),v[b].m(_,k))}for(tt(),b=U.length;b<v.length;b+=1)Fe(b);Oe()}(!z||d&8)&&ae(y,l[3]),(!z||d&8)&&M!==(M=l[3]>1?"minutes":"minute")&&ae(W,M),(!z||d&4)&&Q!==(Q=l[2].t+"")&&ae(ie,Q),(!z||d&4&&re!==(re="bg-green-600 h-full "+(0<l[2].progress&&l[2].progress<100?"transition-all":"")))&&a(X,"class",re),d&4&&oe!==(oe=`${l[2].progress}%`)&&F(X,"width",oe,!1),(!z||d&2)&&Y!==(Y=l[4][l[1]].heading+"")&&ae(ne,Y),(!z||d&2)&&de!==(de=l[4][l[1]].text.split(`
`).join("<br/><br/>")+"")&&(L.innerHTML=de)},i(l){if(!z){for(let d=0;d<U.length;d+=1)ge(v[d]);z=!0}},o(l){v=v.filter(Boolean);for(let d=0;d<v.length;d+=1)Ee(v[d]);z=!1},d(l){l&&i(e),Ge(v,l),l&&i(ce),l&&i(R)}}}function ot(r,e,t){let n,g=Je(),p=[["Collecting information",2],["Dynamic Update",2],["Preparing Installation",2],["Installing Windows",1],["Finalizing installation",0]],w=7*60*1e3,h=w/37,D=[{t:"Installing Devices",d:6*h},{t:"Installing Network...",d:2*h},{t:"Copying files...",d:5*h},{t:"Completing installation...",d:2*h},{t:"Installing Start menu items",d:2*h},{t:"Registering components",d:10*h},{t:"Saving settings",d:7*h},{t:"Removing any temporary files used",d:3*h}],_=[{heading:"An exciting new look",text:`Windows\xAE XP Professional sports a visual design that combines a sleek look, clean lines, and appealing colors with a task-oriented design and exceptionally streamlined navigation.
The redesigned Start menu makes it easier to find important information and access the programs you use most frequently.
By automatically cleaning up the notification area of the taskbar and grouping related taskbar items, Windows XP makes it easier to switch between programs and to open, view, or close multiple items at the same time.`},{heading:"Try the easiest Windows\xAE yet",text:`Windows XP makes it easy to manage all of your information. We've enhanced the My Documents, My Pictures, and My Music folders to make them more useful. Now whenever you open these folders, you'll also see handy shortcuts to the most common tasks for documents, pictures, and music.
Integrated support for Web publishing means that you can put your documents on the Internet and get to them easily from any location.
Windows XP Professional also supports integrated CD recording, so now you can easily save files to a CD-R or CD-RW drive.`},{heading:"Stay up to date",text:`Windows Update provides you with critical software updates and hardware support files for Windows\xAE XP. And Setup gives you the opportunity to ensure that you have the latest software to install Windows quickly and successfully.
For corporate customers, there have been great improvements to the system preparation tool as well as unattended setups.`},{heading:"Your computer will be faster and more reliable",text:"Windows\xAE XP Professional not only starts faster than any previous version of Windows, but it also runs your programs more quickly and reliably than ever. If a program becomes unstable, you can close it without having to shut down Windows or lose any of your work."}],k=0,E=0,V=0,o=D[V];o.progress=0;let m=!1,y=!1;Ke(async()=>{for(P();!m;)if(await Xe(o.d/100),!y){if(t(2,o.progress=Math.min(100,o.progress+1),o),t(5,E+=o.d/100),E>=w){console.log("Done"),st(!1),g("load_page",{url:"./xp/starting.svelte"});break}if(o.progress>=100&&V<D.length){if(V==0){const M=(await Ne(()=>import("./product_key_windows.svelte-0cdf30be.js"),["_app/immutable/pages/installation/95/product_key_windows.svelte-0cdf30be.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js"])).default;let W=new M({target:document.querySelector("#_95-installing-right-side")});W.on_click_next=()=>{y=!1,W.$destroy()},y=!0}V++,V>=5&&(t(0,p[3][1]=2,p),t(0,p[4][1]=1,p)),t(2,o.progress=0,o),t(2,o=D[V]),t(2,o.progress=0,o)}}}),Qe(()=>{m=!0});async function P(){for(;!m;)await Xe(4*h),k<_.length-1?t(1,k++,k):t(1,k=0)}return r.$$.update=()=>{r.$$.dirty&32&&t(3,n=Math.ceil(Math.max(w-E,0)/h))},[p,k,o,n,_,E]}class ut extends Le{constructor(e){super(),Ue(this,e,ot,rt,je,{})}}export{ut as default};
