import{S as Q,i as R,P as d,s as V,w as v,x as E,y as I,f as q,t as P,B as $,Y,o as j,l as b,a as K,m as x,n as M,c as L,h as w,p as u,Q as O,b as T,J as z,W}from"../../../chunks/index-70a5fc52.js";import{W as U}from"../../../chunks/Window-654de68f.js";import{z as X,r as Z,a as y}from"../../../chunks/store-59feb90e.js";import{M as ee}from"../../../chunks/Menu-84d20aec.js";import"../../../chunks/TitleBar-5f961d1e.js";import"../../../chunks/utils-1f7a3290.js";import"../../../chunks/lodash-b0811ec1.js";import"../../../chunks/_commonjsHelpers-cea7ac1a.js";import"../../../chunks/index-355ed6be.js";import"../../../chunks/index-f053a494.js";function te(r){let e,s,f,t,o,a,l;return s=new ee({props:{menu:r[5]}}),{c(){e=b("div"),v(s.$$.fragment),f=K(),t=b("iframe"),this.h()},l(n){e=x(n,"DIV",{slot:!0,class:!0});var m=M(e);E(s.$$.fragment,m),f=L(m),t=x(m,"IFRAME",{title:!0,src:!0,class:!0,frameborder:!0}),M(t).forEach(w),m.forEach(w),this.h()},h(){var n;u(t,"title","minesweeper"),O(t.src,o="/html/games/minesweeper/index.html")||u(t,"src",o),u(t,"class",a="w-full h-full "+(((n=r[0])==null?void 0:n.z_index)==r[4]?"pointer-events-auto":"pointer-events-none")),u(t,"frameborder","0"),u(e,"slot","content"),u(e,"class","absolute inset-0 flex flex-col bg-xp-yellow")},m(n,m){T(n,e,m),I(s,e,null),z(e,f),z(e,t),r[9](t),l=!0},p(n,m){var c;(!l||m&17&&a!==(a="w-full h-full "+(((c=n[0])==null?void 0:c.z_index)==n[4]?"pointer-events-auto":"pointer-events-none")))&&u(t,"class",a)},i(n){l||(q(s.$$.fragment,n),l=!0)},o(n){P(s.$$.fragment,n),l=!1},d(n){n&&w(e),$(s),r[9](null)}}}function ne(r){let e,s,f={options:r[2],on_click_close:r[1],$$slots:{content:[te]},$$scope:{ctx:r}};return e=new U({props:f}),r[10](e),{c(){v(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){I(e,t,o),s=!0},p(t,[o]){const a={};o&4&&(a.options=t[2]),o&131097&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){r[10](null),$(e,t)}}}let N=30,k=30;function ie(r,e,s){let f;Y(r,X,i=>s(4,f=i));let{id:t}=e,{window:o}=e,{self:a}=e,{parentNode:l}=e,n,m={beginner:{width:236,height:295},intermediate:{width:436,height:495},expert:{width:786,height:495}};j(()=>{});function c(){Z.update(i=>i.filter(_=>_!=a)),a.$destroy()}let{options:g={title:"Minesweeper",width:236,height:295+N+k,icon:"/images/xp/icons/Minesweeper.png",resizable:!1,maximize_btn_disabled:!0,id:t}}=e,A=[{name:"Game",items:[[{name:"New Game",action:()=>{B()}}],[{name:"Beginner",action:()=>{C()}},{name:"Intermediate",action:()=>{G()}},{name:"Expert",action:()=>{H()}}],[{name:"Exit",action:()=>{c()}}]]},{name:"Help",items:[[{name:"Contents",action:()=>{y.set({path:"./programs/internet_explorer.svelte",fs_item:{url:"https://en.wikipedia.org/wiki/Minesweeper_(video_game)"}})}},{name:"About Minesweeper",action:()=>{y.set({path:"./programs/internet_explorer.svelte",fs_item:{url:"https://en.wikipedia.org/wiki/Minesweeper_(video_game)"}})}}]]}];function B(){n.contentWindow.new_game()}function C(){p("beginner"),n.contentWindow.beginner()}function G(){p("intermediate"),n.contentWindow.intermediate()}function H(){p("expert"),n.contentWindow.expert()}function p(i){let{width:_,height:h}=m[i];h=h+N+k;let F=(l.offsetHeight-h)/2,J=(l.offsetWidth-_)/2;o.set_position({top:F,left:J,width:_,height:h})}function S(i){W[i?"unshift":"push"](()=>{n=i,s(3,n)})}function D(i){W[i?"unshift":"push"](()=>{o=i,s(0,o)})}return r.$$set=i=>{"id"in i&&s(6,t=i.id),"window"in i&&s(0,o=i.window),"self"in i&&s(7,a=i.self),"parentNode"in i&&s(8,l=i.parentNode),"options"in i&&s(2,g=i.options)},[o,c,g,n,f,A,t,a,l,S,D]}class _e extends Q{constructor(e){super(),R(this,e,ie,ne,V,{id:6,window:0,self:7,parentNode:8,destroy:1,options:2})}get id(){return this.$$.ctx[6]}set id(e){this.$$set({id:e}),d()}get window(){return this.$$.ctx[0]}set window(e){this.$$set({window:e}),d()}get self(){return this.$$.ctx[7]}set self(e){this.$$set({self:e}),d()}get parentNode(){return this.$$.ctx[8]}set parentNode(e){this.$$set({parentNode:e}),d()}get destroy(){return this.$$.ctx[1]}get options(){return this.$$.ctx[2]}set options(e){this.$$set({options:e}),d()}}export{_e as default};
