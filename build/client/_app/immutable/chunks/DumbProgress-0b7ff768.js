import{S as c,i as u,s as f,l as h,w as _,m as g,n as p,x as y,h as l,p as m,b,y as d,f as v,t as w,B as D,o as P,W as B}from"./index-70a5fc52.js";import{P as M}from"./ProgressBar-f6d33f67.js";import{b as S}from"./utils-1f7a3290.js";function k(i){let s,t,r,o={value:10,style:"width:100%;height:100%;"};return t=new M({props:o}),i[3](t),{c(){s=h("div"),_(t.$$.fragment),this.h()},l(e){s=g(e,"DIV",{style:!0});var a=p(s);y(t.$$.fragment,a),a.forEach(l),this.h()},h(){m(s,"style",i[0])},m(e,a){b(e,s,a),d(t,s,null),r=!0},p(e,[a]){const n={};t.$set(n),(!r||a&1)&&m(s,"style",e[0])},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){e&&l(s),i[3](null),D(t)}}}function q(i,s,t){let{style:r=""}=s,{increment:o=5}=s,e;P(async()=>{for(;e!=null;)t(1,e.value=Math.min(e.value+o,100),e),e.value>=100&&t(1,e.value=0,e),await S(500)});function a(n){B[n?"unshift":"push"](()=>{e=n,t(1,e)})}return i.$$set=n=>{"style"in n&&t(0,r=n.style),"increment"in n&&t(2,o=n.increment)},[r,e,o,a]}class I extends c{constructor(s){super(),u(this,s,q,k,f,{style:0,increment:2})}}export{I as D};
