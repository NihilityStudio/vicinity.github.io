import{S as y,i as g,s as m,P as h,l as u,m as d,n as c,h as o,p as r,q as f,b as _,J as b,E as v}from"./index-70a5fc52.js";function w(n){let t,s,i=`${100*n[0]/n[1]}%`;return{c(){t=u("div"),s=u("div"),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var a=c(t);s=d(a,"DIV",{class:!0});var l=c(s);l.forEach(o),a.forEach(o),this.h()},h(){r(s,"class","h-full bg-[url(/images/xp/battery_cell.png)] bg-contain bg-repeat-x"),f(s,"width",i,!1),r(t,"class","bg-slate-100 border border-slate-500 rounded-sm w-10 h-1 p-0.5 overflow-hidden"),r(t,"style",n[2])},m(e,a){_(e,t,a),b(t,s)},p(e,[a]){a&3&&i!==(i=`${100*e[0]/e[1]}%`)&&f(s,"width",i,!1),a&4&&r(t,"style",e[2])},i:v,o:v,d(e){e&&o(t)}}}function x(n,t,s){let{value:i=0}=t,{total:e=100}=t,{style:a=""}=t;return n.$$set=l=>{"value"in l&&s(0,i=l.value),"total"in l&&s(1,e=l.total),"style"in l&&s(2,a=l.style)},[i,e,a]}class P extends y{constructor(t){super(),g(this,t,x,w,m,{value:0,total:1,style:2})}get value(){return this.$$.ctx[0]}set value(t){this.$$set({value:t}),h()}get total(){return this.$$.ctx[1]}set total(t){this.$$set({total:t}),h()}get style(){return this.$$.ctx[2]}set style(t){this.$$set({style:t}),h()}}export{P};
