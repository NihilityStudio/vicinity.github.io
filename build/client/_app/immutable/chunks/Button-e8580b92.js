import{S as m,i as y,s as k,P as o,l as g,r as B,m as E,n as S,u as T,h,p as d,b as q,J as v,K as w,v as x,E as r,o as C,W as J}from"./index-70a5fc52.js";/* empty css                                             */function K(n){let t,l,a,c,u;return{c(){t=g("button"),l=B(n[1]),this.h()},l(s){t=E(s,"BUTTON",{style:!0,class:!0});var i=S(t);l=T(i,n[1]),i.forEach(h),this.h()},h(){t.disabled=n[3],d(t,"style",a=n[2]+";"),d(t,"class","button disabled:opacity-30 svelte-vswpf1")},m(s,i){q(s,t,i),v(t,l),n[6](t),c||(u=w(t,"click",n[7]),c=!0)},p(s,[i]){i&2&&x(l,s[1]),i&8&&(t.disabled=s[3]),i&4&&a!==(a=s[2]+";")&&d(t,"style",a)},i:r,o:r,d(s){s&&h(t),n[6](null),c=!1,u()}}}function M(n,t,l){let{on_click:a=e=>{}}=t,{title:c=""}=t,{style:u=""}=t,{disabled:s=!1}=t,{focus:i=!1}=t,f;C(()=>{i&&f.focus()});function _(e){J[e?"unshift":"push"](()=>{f=e,l(4,f)})}const b=e=>a(e);return n.$$set=e=>{"on_click"in e&&l(0,a=e.on_click),"title"in e&&l(1,c=e.title),"style"in e&&l(2,u=e.style),"disabled"in e&&l(3,s=e.disabled),"focus"in e&&l(5,i=e.focus)},[a,c,u,s,f,i,_,b]}class P extends m{constructor(t){super(),y(this,t,M,K,k,{on_click:0,title:1,style:2,disabled:3,focus:5})}get on_click(){return this.$$.ctx[0]}set on_click(t){this.$$set({on_click:t}),o()}get title(){return this.$$.ctx[1]}set title(t){this.$$set({title:t}),o()}get style(){return this.$$.ctx[2]}set style(t){this.$$set({style:t}),o()}get disabled(){return this.$$.ctx[3]}set disabled(t){this.$$set({disabled:t}),o()}get focus(){return this.$$.ctx[5]}set focus(t){this.$$set({focus:t}),o()}}export{P as B};
