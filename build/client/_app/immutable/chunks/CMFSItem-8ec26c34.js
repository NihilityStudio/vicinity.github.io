import{_ as F}from"./preload-helper-c28b9807.js";import{i as p,k as R,a as u,x as S,t as T,w as C,y as U,p as E,g as _,f as g}from"./store-59feb90e.js";import{j as M}from"./utils-1f7a3290.js";import{a4 as h}from"./index-70a5fc52.js";import{s as B,k as D,d as q,a as H,c as P,p as $,l as L}from"./fs-f48425c2.js";import{c as v}from"./_commonjsHelpers-cea7ac1a.js";import"./index-f053a494.js";import"./index-355ed6be.js";import"./finder-52261c48.js";var j={exports:{}};(function(w,e){(function(s,m){m()})(v,function(){function s(t,n){return typeof n>"u"?n={autoBom:!1}:typeof n!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function m(t,n,d){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){l(a.response,n,d)},a.onerror=function(){console.error("could not download file")},a.send()}function r(t){var n=new XMLHttpRequest;n.open("HEAD",t,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof v=="object"&&v.global===v?v:void 0,f=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(t,n,d){var a=i.URL||i.webkitURL,o=document.createElement("a");n=n||t.name||"download",o.download=n,o.rel="noopener",typeof t=="string"?(o.href=t,o.origin===location.origin?c(o):r(o.href)?m(t,n,d):c(o,o.target="_blank")):(o.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(o.href)},4e4),setTimeout(function(){c(o)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,d){if(n=n||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(s(t,d),n);else if(r(t))m(t,n,d);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){c(a)})}}:function(t,n,d,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof t=="string")return m(t,n,d);var o=t.type==="application/octet-stream",O=/constructor/i.test(i.HTMLElement)||i.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||o&&O||f)&&typeof FileReader<"u"){var x=new FileReader;x.onloadend=function(){var y=x.result;y=A?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=y:location=y,a=null},x.readAsDataURL(t)}else{var k=i.URL||i.webkitURL,b=k.createObjectURL(t);a?a.location=b:location.href=b,a=null,setTimeout(function(){k.revokeObjectURL(b)},4e4)}});i.saveAs=l.saveAs=l,w.exports=l})})(j);const W=j.exports;let Y=({type:w,originator:e})=>({required_width:180+20,required_height:27*11+20,menu:[[...e.item.parent!=p?[{name:"Open",action:()=>{e.open(e.item.id)},font:"bold"},{name:"Explore"},{name:"Search...",disabled:e.type=="file"}]:[],...e.item.parent!=p&&R[e.item.ext]!=null&&R[e.item.ext].length>=2?[{name:"Open With",items:R[e.item.ext].map(s=>({name:s.name,icon:s.icon,action:()=>u.set({path:s.path,fs_item:e.item})}))}]:[],...S.includes(e.item.ext)?[{name:"Set as Desktop Wallpaper",action:()=>{let s=B.generate();D(e.item.id,T,s),C.set(s)}}]:[]],[...U.includes(e.item.ext)&&e.item.parent!=p?[{name:"Extract here...",icon:"/images/xp/icons/RAR.png",action:()=>{u.set({path:"./programs/winrar.svelte",fs_item:e.item})}}]:[],...["file","folder"].includes(e.item.type)&&e.item.parent!=p?[{name:"Add to archive...",icon:"/images/xp/icons/RAR.png",action:()=>{u.set({path:"./programs/zip.svelte",fs_item:e.item})}}]:[]],[...e.item.parent!=p?[{name:"Send To",items:[...e.item.type=="file"&&e.item.storage_type!="fake"?[{name:"Local Computer (Download)",icon:"/images/xp/icons/CopyingConflict.png",action:async()=>{let s=await q(e.item.id),m=new File([s],e.item.name,{type:M(e.item.name)});W.saveAs(m)}}]:[],{name:"Compressed (Zipped) Folder",icon:"/images/xp/icons/Zipfolder.png",action:()=>{u.set({path:"./programs/zip.svelte",fs_item:e.item})}},{name:"Desktop (create shortcut)",icon:"/images/xp/icons/Desktop.png"},{name:"Mail Recipient",icon:"/images/xp/icons/Email.png"},{name:"Floppy (A:)",icon:"/images/xp/icons/FloppyDisk.png"}]}]:[]],[...E.includes(e.item.id)?[]:[{name:"Cut",disabled:h(_).length==0,action:()=>{H()}}],...e.item.type=="drive"||e.item.type=="removable_storage"?[]:[{name:"Copy",disabled:h(_).length==0,action:()=>{P()}}],...e.item.type!="file"&&e.item.parent!=p?[{name:"Paste",disabled:h(g).length==0,action:()=>{$(e.item.id)}}]:[]],[...E.includes(e.item.id)?[]:[{name:"Delete",action:()=>{var l;let s=[...h(_)];console.log(s);let m=()=>{if(e.item.parent==p)for(let t of s)L(t);else for(let t of s)D(t,p,null),L(t)},r=e.item.name.length>70?e.item.name.slice(0,70)+"...":e.item.name,c="",i="";s.length==1?i="":s.length==2?i=" and 1 other item":s.length>2&&(i=` and ${s.length-1} other items`),e.item.parent==p?c=`Do you want to permanently delete ${r}${i}? This action can't be undone?`:c=`Do you want to move ${r}${i} to the Recycle Bin?`;let f=e.item.parent==p?"/images/xp/icons/DeleteConfirmation.png":"/images/xp/icons/RecycleBinempty.png";z({node_ref:((l=e.my_computer_instance)==null?void 0:l.window.node_ref)||document.body,title:"Confirm Delete File",icon:f,message:c,yes_action:m,no_action:()=>{}})}}],...E.includes(e.item.id)||e.item.parent==p?[]:[{name:"Rename",action:()=>{_.set([e.item.id]),e.rename()}}]],[{name:"Properties",action:()=>{e.item.type=="drive"||e.item.type=="removable_storage"?u.set({path:"./programs/disk_properties.svelte",fs_item:e.item}):u.set({path:"./programs/properties.svelte",fs_item:e.item})}}]]});async function z({node_ref:w,title:e,message:s,icon:m,yes_action:r,no_action:c}){const i=(await F(()=>import("./Dialog-b1bab363.js"),["_app/immutable/chunks/Dialog-b1bab363.js","_app/immutable/assets/Button-bfb744c1.css","_app/immutable/chunks/index-70a5fc52.js","_app/immutable/chunks/lodash-b0811ec1.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/TitleBar-5f961d1e.js","_app/immutable/chunks/Button-e8580b92.js"])).default;let f=[{name:"OK",action:()=>{r(),l.destroy()},focus:!0},{name:"Cancel",action:()=>{c(),l.destroy()}}],l=new i({target:w,props:{icon:m,title:e,message:s,buttons:f}});l.self=l}export{Y as make};
