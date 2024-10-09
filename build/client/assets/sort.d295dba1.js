(function(){"use strict";var E=function(r){return function(t,e,i){return r(t,e,i)*i}},p=function(r,t){if(r)throw Error("Invalid sort config: "+t)},g=function(r){var t=r||{},e=t.asc,i=t.desc,n=e?1:-1,a=e||i;p(!a,"Expected `asc` or `desc` property"),p(e&&i,"Ambiguous object with `asc` and `desc` config properties");var u=r.comparer&&E(r.comparer);return{order:n,sortBy:a,comparer:u}},N=function(r){return function t(e,i,n,a,u,s,o){var f,l;if(typeof e=="string")f=s[e],l=o[e];else if(typeof e=="function")f=e(s),l=e(o);else{var c=g(e);return t(c.sortBy,i,n,c.order,c.comparer||r,s,o)}var I=u(f,l,a);return(I===0||f==null&&l==null)&&i.length>n?t(i[n],i,n+1,a,u,s,o):I}};function m(r,t,e){if(r===void 0||r===!0)return function(a,u){return t(a,u,e)};if(typeof r=="string")return p(r.includes("."),"String syntax not allowed for nested properties."),function(a,u){return t(a[r],u[r],e)};if(typeof r=="function")return function(a,u){return t(r(a),r(u),e)};if(Array.isArray(r)){var i=N(t);return function(a,u){return i(r[0],r,1,e,t,a,u)}}var n=g(r);return m(n.sortBy,n.comparer||t,n.order)}var v=function(r,t,e,i){var n;return Array.isArray(t)?(Array.isArray(e)&&e.length<2&&(n=e,e=n[0]),t.sort(m(e,i,r))):t};function A(r){var t=E(r.comparer);return function(e){var i=Array.isArray(e)&&!r.inPlaceSorting?e.slice():e;return{asc:function(n){return v(1,i,n,t)},desc:function(n){return v(-1,i,n,t)},by:function(n){return v(1,i,n,t)}}}}var S=function(r,t,e){return r==null?e:t==null?-e:r<t?-1:r>t?1:0},_=A({comparer:S});A({comparer:S,inPlaceSorting:!0});let d=Object.freeze({NONE:0,NAME:1,SIZE:2,DATE_CREATED:3,DATE_MODIFIED:4}),C=Object.freeze({ASCENDING:0,DESCENDING:1}),D={};onmessage=async({data:r})=>{let{type:t,hash:e,id:i,items:n,sort_option:a,sort_order:u}=r;if(t!="sort")return;if(a==d.NONE){postMessage({id:i,sorted_items:n,type:"sorted"});return}if(D[e]!=null){postMessage({id:i,sorted_items:D[e],type:"sorted"});return}console.log("sorting",e);for(let c of n)c.type=="folder"&&(c.size=0);let s=u==C.ASCENDING?"asc":"desc",o="name";switch(a){case d.NAME:o="name";break;case d.SIZE:o="size";break;case d.DATE_CREATED:o="date_created";break;case d.DATE_MODIFIED:o="date_modified";break}let f={};f[s]=c=>o=="name"?c[o].toLowerCase():c[o];let l=_(n).by([f]);postMessage({id:i,sorted_items:l,type:"sorted"})}})();
