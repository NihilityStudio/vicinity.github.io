import{_ as s}from"../../chunks/preload-helper-c28b9807.js";import{S as b,i as y,s as $,l as k,w as I,a as z,m as q,n as S,x as R,c as W,h as V,p as P,$ as j,b as H,y as A,J as B,a0 as C,f as L,t as O,B as T,Y as J,o as M,R as U,W as Y}from"../../chunks/index-70a5fc52.js";import F from"./wallpaper.svelte-0a3b69a5.js";import{a as h,r as l}from"../../chunks/store-59feb90e.js";import"../../chunks/lodash-b0811ec1.js";import{s as i}from"../../chunks/fs-f48425c2.js";import G from"./desktop_folder.svelte-733cc851.js";import{t as K}from"../../chunks/finder-52261c48.js";import"../../chunks/index-355ed6be.js";import"../../chunks/index-f053a494.js";import"../../chunks/_commonjsHelpers-cea7ac1a.js";import"../../chunks/utils-1f7a3290.js";import"../../chunks/dir_parser-92703b79.js";import"../../chunks/Previewable-7057b01c.js";function Q(g){let n,m,w,t,f,v,c;return m=new F({}),t=new G({}),{c(){n=k("div"),I(m.$$.fragment),w=z(),I(t.$$.fragment),this.h()},l(_){n=q(_,"DIV",{id:!0,class:!0});var u=S(n);R(m.$$.fragment,u),w=W(u),R(t.$$.fragment,u),u.forEach(V),this.h()},h(){P(n,"id","work-space"),P(n,"class",f="absolute inset-0 "+(g[2]!=null?"waiting":"")),j(()=>g[4].call(n))},m(_,u){H(_,n,u),A(m,n,null),B(n,w),A(t,n,null),g[3](n),v=C(n,g[4].bind(n)),c=!0},p(_,[u]){(!c||u&4&&f!==(f="absolute inset-0 "+(_[2]!=null?"waiting":"")))&&P(n,"class",f)},i(_){c||(L(m.$$.fragment,_),L(t.$$.fragment,_),c=!0)},o(_){O(m.$$.fragment,_),O(t.$$.fragment,_),c=!1},d(_){_&&V(n),T(m),T(t),g[3](null),v()}}}function X(g,n,m){let w;J(g,h,d=>m(2,w=d));let t,f;h.subscribe(d=>{d!=null&&v(d)}),M(()=>{}),U(()=>{});async function v(d){let{fs_item:p,webapp:E,copying_obj:D,target_folder_id:x,path:r}=d;if(r=="./programs/my_computer.svelte"){const a=(await s(()=>import("./programs/my_computer.svelte-444c6d1a.js"),["_app/immutable/pages/xp/programs/my_computer.svelte-444c6d1a.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Menu-84d20aec.js","_app/immutable/chunks/RButton-0543564c.js","_app/immutable/chunks/tooltip-f551ec3c.js","_app/immutable/pages/xp/programs/my_computer/viewer.svelte-2ce7fb85.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/dir_parser-92703b79.js","_app/immutable/chunks/Previewable-7057b01c.js","_app/immutable/pages/xp/programs/my_computer/sidebar.svelte-0b394610.js"])).default;let e=new a({target:t,props:{id:i.generate(),fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/display_properties.svelte"){const a=(await s(()=>import("./programs/display_properties.svelte-229ae2a4.js"),["_app/immutable/pages/xp/programs/display_properties.svelte-229ae2a4.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/Tab-95d85a5b.js","_app/immutable/assets/Tab-1c55912b.css"])).default;let e=new a({target:t,props:{id:i.generate(),exec_path:r}});e.self=e}else if(r=="./programs/internet_explorer.svelte"){let a=await c(p);const e=(await s(()=>import("./programs/internet_explorer.svelte-e2c0603e.js"),["_app/immutable/pages/xp/programs/internet_explorer.svelte-e2c0603e.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Menu-84d20aec.js","_app/immutable/chunks/RButton-0543564c.js","_app/immutable/chunks/tooltip-f551ec3c.js","_app/immutable/chunks/ProgressBar-f6d33f67.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js"])).default;let o=new e({target:t,props:{id:i.generate(),url:a,exec_path:r}});o.self=o,l.update(N=>[...N,o])}else if(r=="./programs/xp_tour.svelte"){const a=(await s(()=>import("./programs/xp_tour.svelte-8ce81869.js"),["_app/immutable/pages/xp/programs/xp_tour.svelte-8ce81869.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/paint.svelte"){const a=(await s(()=>import("./programs/paint.svelte-1484549a.js"),["_app/immutable/pages/xp/programs/paint.svelte-1484549a.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/photon.svelte"){const a=(await s(()=>import("./programs/photon.svelte-613b7f9b.js"),["_app/immutable/pages/xp/programs/photon.svelte-613b7f9b.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/media_player_classic.svelte"){const a=(await s(()=>import("./programs/media_player_classic.svelte-c9b1969c.js"),["_app/immutable/pages/xp/programs/media_player_classic.svelte-c9b1969c.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/RangeSlider-35d73b0e.js","_app/immutable/assets/RangeSlider-3b636b73.css","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/tooltip-f551ec3c.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,p&&(e.options={...e.options,title:p.name}),l.update(o=>[...o,e])}else if(r=="./programs/minesweeper.svelte"){const a=(await s(()=>import("./programs/minesweeper.svelte-d97c4fad.js"),["_app/immutable/pages/xp/programs/minesweeper.svelte-d97c4fad.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Menu-84d20aec.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/properties.svelte"){const a=(await s(()=>import("./programs/properties.svelte-d07524a4.js"),["_app/immutable/pages/xp/programs/properties.svelte-d07524a4.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/Tab-95d85a5b.js","_app/immutable/assets/Tab-1c55912b.css","_app/immutable/chunks/CheckBox-adbe613c.js","_app/immutable/chunks/finder-52261c48.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,p&&(e.options={...e.options,title:p.name+" Properties"})}else if(r=="./programs/disk_properties.svelte"){const a=(await s(()=>import("./programs/disk_properties.svelte-5b62887c.js"),["_app/immutable/pages/xp/programs/disk_properties.svelte-5b62887c.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/Tab-95d85a5b.js","_app/immutable/assets/Tab-1c55912b.css","_app/immutable/chunks/CheckBox-adbe613c.js","_app/immutable/chunks/finder-52261c48.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,p&&(e.options={...e.options,title:p.display_name+" Properties"})}else if(r=="./programs/notepad.svelte"){const a=(await s(()=>import("./programs/notepad.svelte-d6fb8f4f.js"),["_app/immutable/pages/xp/programs/notepad.svelte-d6fb8f4f.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Menu-84d20aec.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/java.svelte"){const a=(await s(()=>import("./programs/java.svelte-77f85531.js"),["_app/immutable/pages/xp/programs/java.svelte-77f85531.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,p&&(e.options={...e.options,title:p.display_name}),l.update(o=>[...o,e])}else if(r=="./programs/foxit_reader.svelte"){const a=(await s(()=>import("./programs/foxit_reader.svelte-87ef57d0.js"),["_app/immutable/pages/xp/programs/foxit_reader.svelte-87ef57d0.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/microsoft_word.svelte"){const a=(await s(()=>import("./programs/microsoft_word.svelte-97460668.js"),["_app/immutable/pages/xp/programs/microsoft_word.svelte-97460668.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/koodo.svelte"){const a=(await s(()=>import("./programs/koodo.svelte-57713dfd.js"),["_app/immutable/pages/xp/programs/koodo.svelte-57713dfd.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/winrar.svelte"){const a=(await s(()=>import("./programs/winrar.svelte-34d4f7ca.js"),["_app/immutable/pages/xp/programs/winrar.svelte-34d4f7ca.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/zip.svelte"){const a=(await s(()=>import("./programs/zip.svelte-367df3dc.js"),["_app/immutable/pages/xp/programs/zip.svelte-367df3dc.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/webapp.svelte"){const a=(await s(()=>import("./programs/webapp.svelte-25adc7e5.js"),["_app/immutable/pages/xp/programs/webapp.svelte-25adc7e5.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,webapp:E,exec_path:r+"::"+E.url}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/image_viewer.svelte"){const a=(await s(()=>import("./programs/image_viewer.svelte-91b68437.js"),["_app/immutable/pages/xp/programs/image_viewer.svelte-91b68437.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/copier.svelte"){const a=(await s(()=>import("./programs/copier.svelte-036ee1f7.js"),["_app/immutable/pages/xp/programs/copier.svelte-036ee1f7.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,copying_obj:D,target_folder_id:x,exec_path:r}});e.self=e}else if(r=="./programs/app_installer.svelte"){const a=(await s(()=>import("./programs/app_installer.svelte-cf2868c8.js"),["_app/immutable/pages/xp/programs/app_installer.svelte-cf2868c8.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/Button-e8580b92.js","_app/immutable/chunks/fs-f48425c2.js","_app/immutable/chunks/finder-52261c48.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,copying_obj:D,target_folder_id:x,exec_path:r}});e.self=e,l.update(o=>[...o,e])}else if(r=="./programs/flash_player.svelte"){const a=(await s(()=>import("./programs/flash_player.svelte-aa9c1d8c.js"),["_app/immutable/pages/xp/programs/flash_player.svelte-aa9c1d8c.js","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/Window-654de68f.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/utils-1f7a3290.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/index-355ed6be.js","_app/immutable/chunks/store-59feb90e.js","_app/immutable/chunks/index-f053a494.js","_app/immutable/chunks/DumbProgress-0b7ff768.js","_app/immutable/chunks/ProgressBar-f6d33f67.js"])).default;let e=new a({target:t,props:{id:i.generate(),parentNode:t,fs_item:p,exec_path:r}});e.self=e,l.update(o=>[...o,e])}h.set(null)}async function c(d){return d==null?"https://app.usepanda.com/#/":d.storage_type=="local"?K(d.id):d.url}function _(d){Y[d?"unshift":"push"](()=>{t=d,m(0,t)})}function u(){f=this.clientHeight,m(1,f)}return[t,f,w,_,u]}class ue extends b{constructor(n){super(),y(this,n,X,Q,$,{})}}export{ue as default};
