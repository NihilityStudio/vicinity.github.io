import{S as s,d as m,h as i,i as r,f as c,a as p}from"./store-59feb90e.js";import{a4 as n}from"./index-70a5fc52.js";import{p as u,b as o}from"./fs-f48425c2.js";import"./index-f053a494.js";import"./utils-1f7a3290.js";import"./_commonjsHelpers-cea7ac1a.js";import"./index-355ed6be.js";import"./finder-52261c48.js";let E=({type:f,originator:a})=>{let d=[{name:"None",value:s.NONE},{name:"Name",value:s.NAME},{name:"Size",value:s.SIZE},{name:"Date Created",value:s.DATE_CREATED},{name:"Date Modified",value:s.DATE_MODIFIED}],l=[{name:"Ascending",value:m.ASCENDING},{name:"Descending",value:m.DESCENDING}];return{required_width:180+20,required_height:27*6+20,menu:[[{name:"Sort By",items:[...d.map(e=>({...e,check:e.value==n(i)[a.id].sort_option,action:()=>{i.update(t=>(t[a.id].sort_option=e.value,t))}})),null,...l.map(e=>({...e,check:e.value==n(i)[a.id].sort_order,action:()=>{i.update(t=>(t[a.id].sort_order=e.value,t))}}))]},{name:"Refresh",action:()=>{console.log("refresh");let e=document.querySelectorAll(".fs-item");for(let t of e)t.classList.add("animate-blink");setTimeout(()=>{for(let t of e)t.classList.remove("animate-blink")},1e3)}}],[...a.id!=r?[{name:"Paste",disabled:n(c).length==0,action:()=>{u(a.id)}},{name:"Paste Shortcut",disabled:!0}]:[]],[...a.id!=r?[{name:"New",items:[{name:"Folder",icon:"/images/xp/icons/FolderClosed.png",action:()=>{o("folder","","New Folder",a.id)}},{name:"Shortcut",icon:"/images/xp/icons/Shortcutoverlay.png"},{name:"Briefcase",icon:"/images/xp/icons/Briefcase.png"},{name:"Bitmap Image",icon:"/images/xp/icons/Bitmap.png",action:()=>{o("file",".bmp","New Bitmap Image",a.id)}},{name:"Text Document",icon:"/images/xp/icons/TXT.png",action:()=>{o("file",".txt","New Text Document",a.id)}},{name:"Wave Sound",icon:"/images/xp/icons/WMV.png",action:()=>{o("file",".wav","New Sound",a.id)}},{name:"Compressed (zipped) Folder",icon:"/images/xp/icons/Zipfolder.png"}]}]:[]],[{name:"Properties",action:()=>{let e=n(i)[a.id];e.type=="drive"||e.type=="removable_storage"?p.set({path:"./programs/disk_properties.svelte",fs_item:e}):p.set({path:"./programs/properties.svelte",fs_item:e})}}]]}};export{E as make};
