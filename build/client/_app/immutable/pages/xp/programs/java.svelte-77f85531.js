import"../../../chunks/preload-helper-c28b9807.js";import{S as I,i as P,P as m,s as S,w as b,x as y,y as N,f as k,t as J,B as W,Y as A,l as d,a as F,m as g,n as w,c as M,h as u,Q,p as h,b as R,J as p,W as x}from"../../../chunks/index-70a5fc52.js";import{W as V}from"../../../chunks/Window-654de68f.js";import{B as Y}from"../../../chunks/Button-e8580b92.js";import{h as j,r as z}from"../../../chunks/store-59feb90e.js";import"../../../chunks/TitleBar-5f961d1e.js";import"../../../chunks/utils-1f7a3290.js";import"../../../chunks/lodash-b0811ec1.js";import"../../../chunks/_commonjsHelpers-cea7ac1a.js";import"../../../chunks/index-355ed6be.js";/* empty css                                                           */import"../../../chunks/index-f053a494.js";function G(o){let t,n,l,e,r,c;return n=new Y({props:{title:"Call Child",on_click:o[9]}}),{c(){t=d("div"),b(n.$$.fragment),l=F(),e=d("iframe"),this.h()},l(i){t=g(i,"DIV",{slot:!0,class:!0});var a=w(t);y(n.$$.fragment,a),l=M(a),e=g(a,"IFRAME",{src:!0,class:!0,allow:!0}),w(e).forEach(u),a.forEach(u),this.h()},h(){Q(e.src,r="/html/ffmpeg/index.html")||h(e,"src",r),h(e,"class","w-full h-40"),h(e,"allow","cross-origin-isolated"),h(t,"slot","content"),h(t,"class","absolute inset-0 flex flex-col bg-xp-yellow")},m(i,a){R(i,t,a),N(n,t,null),p(t,l),p(t,e),o[10](e),c=!0},p(i,a){const f={};a&8&&(f.on_click=i[9]),n.$set(f)},i(i){c||(k(n.$$.fragment,i),c=!0)},o(i){J(n.$$.fragment,i),c=!1},d(i){i&&u(t),W(n),o[10](null)}}}function H(o){let t,n,l={options:o[2],on_click_close:o[1],$$slots:{content:[G]},$$scope:{ctx:o}};return t=new V({props:l}),o[11](t),{c(){b(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,r){N(t,e,r),n=!0},p(e,[r]){const c={};r&4&&(c.options=e[2]),r&65544&&(c.$$scope={dirty:r,ctx:e}),t.$set(c)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){J(t.$$.fragment,e),n=!1},d(e){o[11](null),W(t,e)}}}function K(o,t,n){A(o,j,s=>n(12,s));let{id:l}=t,{window:e}=t,{self:r}=t,{parentNode:c}=t,{fs_item:i}=t,{exec_path:a}=t,f;function B(){z.update(s=>s.filter(D=>D!=r)),r.$destroy()}let{options:_={title:"Java",min_width:500,min_height:400,width:700,height:500,icon:"/images/xp/icons/Java.png",id:l,exec_path:a}}=t;const C=()=>f.contentWindow.say_hello();function E(s){x[s?"unshift":"push"](()=>{f=s,n(3,f)})}function q(s){x[s?"unshift":"push"](()=>{e=s,n(0,e)})}return o.$$set=s=>{"id"in s&&n(4,l=s.id),"window"in s&&n(0,e=s.window),"self"in s&&n(5,r=s.self),"parentNode"in s&&n(6,c=s.parentNode),"fs_item"in s&&n(7,i=s.fs_item),"exec_path"in s&&n(8,a=s.exec_path),"options"in s&&n(2,_=s.options)},[e,B,_,f,l,r,c,i,a,C,E,q]}class it extends I{constructor(t){super(),P(this,t,K,H,S,{id:4,window:0,self:5,parentNode:6,fs_item:7,exec_path:8,destroy:1,options:2})}get id(){return this.$$.ctx[4]}set id(t){this.$$set({id:t}),m()}get window(){return this.$$.ctx[0]}set window(t){this.$$set({window:t}),m()}get self(){return this.$$.ctx[5]}set self(t){this.$$set({self:t}),m()}get parentNode(){return this.$$.ctx[6]}set parentNode(t){this.$$set({parentNode:t}),m()}get fs_item(){return this.$$.ctx[7]}set fs_item(t){this.$$set({fs_item:t}),m()}get exec_path(){return this.$$.ctx[8]}set exec_path(t){this.$$set({exec_path:t}),m()}get destroy(){return this.$$.ctx[1]}get options(){return this.$$.ctx[2]}set options(t){this.$$set({options:t}),m()}}export{it as default};
