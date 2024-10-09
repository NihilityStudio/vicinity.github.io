import{_ as He}from"../../../chunks/preload-helper-c28b9807.js";import{S as Ue,i as Le,s as Oe,R as he,l as d,a as x,r as G,m as u,n as f,h as i,c as I,u as J,p as a,q as j,b as K,J as s,v as ae,E as qe,T as Ce,f as ge,d as Ne,t as Ee,M as Ge,O as Je,o as Ke,U as Ye,w as Qe,x as Ze,y as $e,B as et,g as tt}from"../../../chunks/index-23b4510f.js";import{b as Xe,a as st}from"../../../chunks/utils-1f7a3290.js";function Te(r){let e;return{c(){e=d("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),f(e).forEach(i),this.h()},h(){a(e,"class","bg-[url(/images/xp/radio_check.png)] bg-cover absolute inset-1/4")},m(t,n){K(t,e,n)},d(t){t&&i(e)}}}function lt(r){let e,t,n,g,p,w,h=`${r[2]}px`,D=`${r[2]}px`,_,k,E,V,o=r[0]&&Te();return{c(){e=d("div"),t=d("div"),n=d("div"),g=d("div"),w=x(),o&&o.c(),_=x(),k=d("div"),E=G(r[1]),this.h()},l(m){e=u(m,"DIV",{class:!0});var y=f(e);t=u(y,"DIV",{class:!0});var P=f(t);n=u(P,"DIV",{class:!0});var M=f(n);g=u(M,"DIV",{class:!0}),f(g).forEach(i),M.forEach(i),w=I(P),o&&o.l(P),P.forEach(i),_=I(y),k=u(y,"DIV",{class:!0});var W=f(k);E=J(W,r[1]),W.forEach(i),y.forEach(i),this.h()},h(){a(g,"class","w-full h-full bg-[linear-gradient(135deg,#dcdcd7,#fff)] opacity-70 rounded-full"),a(n,"class",p=(r[3]?"bg-gradient-to-r":"")+" group-hover:bg-gradient-to-r from-orange-300 to-orange-200 absolute inset-0 rounded-full p-[2px]"),a(t,"class","group bg-[linear-gradient(135deg,#dcdcd7,#fff)] shrink-0 rounded-full border border-[#1d5281] relative"),j(t,"width",h,!1),j(t,"height",D,!1),a(k,"class",V="ml-2 leading-none "+(r[3]?"text-orange-400":"")),a(e,"class","flex flex-row")},m(m,y){K(m,e,y),s(e,t),s(t,n),s(n,g),s(t,w),o&&o.m(t,null),s(e,_),s(e,k),s(k,E)},p(m,[y]){y&8&&p!==(p=(m[3]?"bg-gradient-to-r":"")+" group-hover:bg-gradient-to-r from-orange-300 to-orange-200 absolute inset-0 rounded-full p-[2px]")&&a(n,"class",p),m[0]?o||(o=Te(),o.c(),o.m(t,null)):o&&(o.d(1),o=null),y&4&&h!==(h=`${m[2]}px`)&&j(t,"width",h,!1),y&4&&D!==(D=`${m[2]}px`)&&j(t,"height",D,!1),y&2&&ae(E,m[1]),y&8&&V!==(V="ml-2 leading-none "+(m[3]?"text-orange-400":""))&&a(k,"class",V)},i:qe,o:qe,d(m){m&&i(e),o&&o.d()}}}function at(r,e,t){let{checked:n=!1}=e,{label:g=""}=e,{size:p=15}=e,{in_progress:w=!1}=e;return r.$$set=h=>{"checked"in h&&t(0,n=h.checked),"label"in h&&t(1,g=h.label),"size"in h&&t(2,p=h.size),"in_progress"in h&&t(3,w=h.in_progress)},[n,g,p,w]}class it extends Ue{constructor(e){super(),Le(this,e,at,lt,Oe,{checked:0,label:1,size:2,in_progress:3})}get checked(){return this.$$.ctx[0]}set checked(e){this.$$set({checked:e}),he()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),he()}get size(){return this.$$.ctx[2]}set size(e){this.$$set({size:e}),he()}get in_progress(){return this.$$.ctx[3]}set in_progress(e){this.$$set({in_progress:e}),he()}}function Ae(r,e,t){const n=r.slice();return n[14]=e[t],n[16]=t,n}function Be(r){let e,t,n;return t=new it({props:{checked:r[14][1]==2,in_progress:r[14][1]==1,size:20,label:r[14][0]}}),{c(){e=d("div"),Qe(t.$$.fragment),this.h()},l(g){e=u(g,"DIV",{class:!0});var p=f(e);Ze(t.$$.fragment,p),p.forEach(i),this.h()},h(){a(e,"class","mb-4 ml-12 mr-20 text-white font-bold text-base")},m(g,p){K(g,e,p),$e(t,e,null),n=!0},p(g,p){const w={};p&1&&(w.checked=g[14][1]==2),p&1&&(w.in_progress=g[14][1]==1),p&1&&(w.label=g[14][0]),t.$set(w)},i(g){n||(ge(t.$$.fragment,g),n=!0)},o(g){Ee(t.$$.fragment,g),n=!1},d(g){g&&i(e),et(t)}}}function rt(r){let e,t,n,g,p,w,h,D,_,k,E,V,o,m,y,P,M=r[3]>1?"minutes":"minute",W,pe,F,Y=r[2].t+"",ie,me,H,X,re,oe=`${r[2].progress}%`,ve,A,T,B,Q=r[4][r[1]].heading+"",ne,_e,U,ce=r[4][r[1]].text.split(`
`).join("<br/><br/>")+"",be,Z,we,N,S,$,ye,ee,ke,te,xe,se,Ie,le,de,C,Ve,z,L=r[0],v=[];for(let l=0;l<L.length;l+=1)v[l]=Be(Ae(r,L,l));const je=l=>Ee(v[l],1,1,()=>{v[l]=null});return{c(){e=d("div"),t=d("div"),n=d("img"),p=x(),w=d("div"),h=x(),D=d("div"),_=d("div");for(let l=0;l<v.length;l+=1)v[l].c();k=x(),E=d("p"),V=G("Setup will complete in approximately:"),o=x(),m=d("p"),y=G(r[3]),P=x(),W=G(M),pe=x(),F=d("p"),ie=G(Y),me=x(),H=d("div"),X=d("div"),ve=x(),A=d("div"),T=d("div"),B=d("p"),ne=G(Q),_e=x(),U=d("p"),be=x(),Z=d("div"),we=x(),N=d("div"),S=d("div"),$=d("div"),ye=x(),ee=d("div"),ke=x(),te=d("div"),xe=x(),se=d("div"),Ie=x(),le=d("div"),de=x(),C=d("audio"),this.h()},l(l){e=u(l,"DIV",{class:!0});var c=f(e);t=u(c,"DIV",{class:!0});var b=f(t);n=u(b,"IMG",{src:!0,class:!0,alt:!0}),b.forEach(i),p=I(c),w=u(c,"DIV",{class:!0}),f(w).forEach(i),h=I(c),D=u(c,"DIV",{class:!0});var O=f(D);_=u(O,"DIV",{class:!0});var R=f(_);for(let De=0;De<v.length;De+=1)v[De].l(R);k=I(R),E=u(R,"P",{class:!0});var Se=f(E);V=J(Se,"Setup will complete in approximately:"),Se.forEach(i),o=I(R),m=u(R,"P",{class:!0});var ue=f(m);y=J(ue,r[3]),P=I(ue),W=J(ue,M),ue.forEach(i),pe=I(R),F=u(R,"P",{class:!0});var Pe=f(F);ie=J(Pe,Y),Pe.forEach(i),me=I(R),H=u(R,"DIV",{class:!0});var Me=f(H);X=u(Me,"DIV",{class:!0}),f(X).forEach(i),Me.forEach(i),R.forEach(i),ve=I(O),A=u(O,"DIV",{class:!0,id:!0});var We=f(A);T=u(We,"DIV",{class:!0});var fe=f(T);B=u(fe,"P",{class:!0,style:!0});var ze=f(B);ne=J(ze,Q),ze.forEach(i),_e=I(fe),U=u(fe,"P",{class:!0});var Fe=f(U);Fe.forEach(i),fe.forEach(i),We.forEach(i),O.forEach(i),be=I(c),Z=u(c,"DIV",{class:!0}),f(Z).forEach(i),we=I(c),N=u(c,"DIV",{class:!0});var Re=f(N);S=u(Re,"DIV",{class:!0});var q=f(S);$=u(q,"DIV",{class:!0}),f($).forEach(i),ye=I(q),ee=u(q,"DIV",{class:!0}),f(ee).forEach(i),ke=I(q),te=u(q,"DIV",{class:!0}),f(te).forEach(i),xe=I(q),se=u(q,"DIV",{class:!0}),f(se).forEach(i),Ie=I(q),le=u(q,"DIV",{class:!0}),f(le).forEach(i),q.forEach(i),Re.forEach(i),c.forEach(i),de=I(l),C=u(l,"AUDIO",{src:!0}),f(C).forEach(i),this.h()},h(){Ce(n.src,g="/images/xp_logo_horizontal.png")||a(n,"src",g),a(n,"class","h-[40px] ml-4"),a(n,"alt",""),a(t,"class","h-[70px] bg-[#00309c] flex flex-row items-center shrink-0"),a(w,"class","h-[2px] bg-[linear-gradient(45deg,#466dcd,#c7ddff,#b0c9f7,#5a7edc)] shrink-0"),a(E,"class","font-bold text-base mt-6 text-white px-8 mr-4 font-MSSS"),a(m,"class","font-bold text-base text-white mr-12 text-center font-MSSS"),a(F,"class","mt-8 ml-8 text-sm text-white font-MSSS"),a(X,"class",re="bg-green-600 h-full "+(0<r[2].progress&&r[2].progress<100?"transition-all":"")),j(X,"width",oe,!1),a(H,"class","ml-8 mr-10 mt-1 border-[#00309c] border h-6 bg-white p-[1px]"),a(_,"class","w-1/5 min-w-[300px] pt-12 pointer-events-none"),a(B,"class","text-3xl text-white font-sans font-bold"),j(B,"text-shadow","2px 2px #000"),a(U,"class","text-lg text-white mt-8 max-w-[700px] font-MSSS"),a(T,"class","p-8 pl-20 pr-24 "),a(A,"class","grow bg-[linear-gradient(#5a7edc,#7698e6,#5a7edc)] relative"),a(A,"id","_95-installing-right-side"),a(D,"class","grow bg-[radial-gradient(circle_at_5%_5%,#91b1ef_0,#7698e6_6%,#5a7edc_12%)] flex flex-row overflow-hidden"),a(Z,"class","h-[2px] bg-[linear-gradient(45deg,#003399,#f99736,#c2814d,#00309c)] shrink-0"),a($,"class","svelte-4oebc7"),a(ee,"class","svelte-4oebc7"),a(te,"class","svelte-4oebc7"),a(se,"class","svelte-4oebc7"),a(le,"class","svelte-4oebc7"),a(S,"class","indicator absolute right-10 top-[50%] -translate-y-[50%] svelte-4oebc7"),a(N,"class","h-[70px] w-full bg-[linear-gradient(90deg,#3833ac,#00309c)] shrink-0 relative"),a(e,"class","absolute inset-0 overflow-hidden flex flex-col bg-[#5a7edc]"),Ce(C.src,Ve="/audio/xp_installing.mp3")||a(C,"src",Ve),C.loop=!0,C.autoplay=!0},m(l,c){K(l,e,c),s(e,t),s(t,n),s(e,p),s(e,w),s(e,h),s(e,D),s(D,_);for(let b=0;b<v.length;b+=1)v[b].m(_,null);s(_,k),s(_,E),s(E,V),s(_,o),s(_,m),s(m,y),s(m,P),s(m,W),s(_,pe),s(_,F),s(F,ie),s(_,me),s(_,H),s(H,X),s(D,ve),s(D,A),s(A,T),s(T,B),s(B,ne),s(T,_e),s(T,U),U.innerHTML=ce,s(e,be),s(e,Z),s(e,we),s(e,N),s(N,S),s(S,$),s(S,ye),s(S,ee),s(S,ke),s(S,te),s(S,xe),s(S,se),s(S,Ie),s(S,le),K(l,de,c),K(l,C,c),z=!0},p(l,[c]){if(c&1){L=l[0];let b;for(b=0;b<L.length;b+=1){const O=Ae(l,L,b);v[b]?(v[b].p(O,c),ge(v[b],1)):(v[b]=Be(O),v[b].c(),ge(v[b],1),v[b].m(_,k))}for(tt(),b=L.length;b<v.length;b+=1)je(b);Ne()}(!z||c&8)&&ae(y,l[3]),(!z||c&8)&&M!==(M=l[3]>1?"minutes":"minute")&&ae(W,M),(!z||c&4)&&Y!==(Y=l[2].t+"")&&ae(ie,Y),(!z||c&4&&re!==(re="bg-green-600 h-full "+(0<l[2].progress&&l[2].progress<100?"transition-all":"")))&&a(X,"class",re),c&4&&oe!==(oe=`${l[2].progress}%`)&&j(X,"width",oe,!1),(!z||c&2)&&Q!==(Q=l[4][l[1]].heading+"")&&ae(ne,Q),(!z||c&2)&&ce!==(ce=l[4][l[1]].text.split(`
`).join("<br/><br/>")+"")&&(U.innerHTML=ce)},i(l){if(!z){for(let c=0;c<L.length;c+=1)ge(v[c]);z=!0}},o(l){v=v.filter(Boolean);for(let c=0;c<v.length;c+=1)Ee(v[c]);z=!1},d(l){l&&i(e),Ge(v,l),l&&i(de),l&&i(C)}}}function ot(r,e,t){let n,g=Je(),p=[["Collecting information",2],["Dynamic Update",2],["Preparing Installation",2],["Installing Windows",1],["Finalizing installation",0]],w=7*60*1e3,h=w/37,D=[{t:"Installing Devices",d:6*h},{t:"Installing Network...",d:2*h},{t:"Copying files...",d:5*h},{t:"Completing installation...",d:2*h},{t:"Installing Start menu items",d:2*h},{t:"Registering components",d:10*h},{t:"Saving settings",d:7*h},{t:"Removing any temporary files used",d:3*h}],_=[{heading:"An exciting new look",text:`RebornXP aims to recreate the iconic Windows\xAE XP Professional design that combines a sleek look, clean lines, and appealing colors with a task-oriented design and exceptionally streamlined navigation.
The redesigned Start menu makes it easier to find important information and access the programs you use most frequently.
By automatically cleaning up the notification area of the taskbar and grouping related taskbar items, Windows XP makes it easier to switch between programs and to open, view, or close multiple items at the same time.`},{heading:"Try the easiest Windows\xAE yet",text:`Windows XP makes it easy to manage all of your information. We've enhanced the My Documents, My Pictures, and My Music folders to make them more useful. Now whenever you open these folders, you'll also see handy shortcuts to the most common tasks for documents, pictures, and music.
Integrated support for Web publishing means that you can put your documents on the Internet and get to them easily from any location.
Windows XP Professional also supports integrated CD recording, so now you can easily save files to a CD-R or CD-RW drive.`},{heading:"Stay up to date",text:`Windows Update provides you with critical software updates and hardware support files for Windows\xAE XP. And Setup gives you the opportunity to ensure that you have the latest software to install Windows quickly and successfully.
For corporate customers, there have been great improvements to the system preparation tool as well as unattended setups.`},{heading:"Your computer will be faster and more reliable",text:"Windows\xAE XP Professional not only starts faster than any previous version of Windows, but it also runs your programs more quickly and reliably than ever. If a program becomes unstable, you can close it without having to shut down Windows or lose any of your work."}],k=0,E=0,V=0,o=D[V];o.progress=0;let m=!1,y=!1;Ke(async()=>{for(P();!m;)if(await Xe(o.d/100),!y){if(t(2,o.progress=Math.min(100,o.progress+1),o),t(5,E+=o.d/100),E>=w){console.log("Done"),st(!1),g("load_page",{url:"./xp/starting.svelte"});break}if(o.progress>=100&&V<D.length){if(V==0){const M=(await He(()=>import("./product_key_windows.svelte-ccc236fe.js"),["_app/immutable/pages/installation/95/product_key_windows.svelte-ccc236fe.js","_app/immutable/chunks/index-23b4510f.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js"])).default;let W=new M({target:document.querySelector("#_95-installing-right-side")});W.on_click_next=()=>{y=!1,W.$destroy()},y=!0}V++,V>=5&&(t(0,p[3][1]=2,p),t(0,p[4][1]=1,p)),t(2,o.progress=0,o),t(2,o=D[V]),t(2,o.progress=0,o)}}}),Ye(()=>{m=!0});async function P(){for(;!m;)await Xe(4*h),k<_.length-1?t(1,k++,k):t(1,k=0)}return r.$$.update=()=>{r.$$.dirty&32&&t(3,n=Math.ceil(Math.max(w-E,0)/h))},[p,k,o,n,_,E]}class ut extends Ue{constructor(e){super(),Le(this,e,ot,rt,Oe,{})}}export{ut as default};
