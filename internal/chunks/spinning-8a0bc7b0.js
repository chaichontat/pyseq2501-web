var v=Object.defineProperty,g=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(n,e,t)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,u=(n,e)=>{for(var t in e||(e={}))_.call(e,t)&&c(n,t,e[t]);if(l)for(var t of l(e))y.call(e,t)&&c(n,t,e[t]);return n},d=(n,e)=>g(n,m(e));import{S as z,i as b,s as k,e as C,c as L,a as S,d as f,b as E,f as a,g as q,M as h}from"./vendor-b4247f54.js";function A(n){requestAnimationFrame(()=>{n&&(n.style.transition="none",n.style.backgroundColor="rgba(255,62,0,0.3)",setTimeout(()=>{n.style.transition="background 1s",n.style.backgroundColor=""}))})}function D(n){return n.reduce((e,t)=>d(u({},e),{[t]:(e[t]||0)+1}),{})}function M(n,e=[0,1/0]){const t=()=>{const i=parseFloat(n.value);e[0]<=i&&i<=e[1]?n.classList.remove("invalid"):n.classList.add("invalid")};return document.addEventListener("input",t),{destroy:()=>{document.removeEventListener("input",t)}}}function F(n){let e;return{c(){e=C("div"),this.h()},l(t){e=L(t,"DIV",{class:!0,style:!0}),S(e).forEach(f),this.h()},h(){E(e,"class","transition-all circle svelte-ocwmti"),a(e,"--size",n[0]),a(e,"--color",n[1]),a(e,"--duration",n[2])},m(t,i){q(t,e,i)},p(t,[i]){i&1&&a(e,"--size",t[0]),i&2&&a(e,"--color",t[1]),i&4&&a(e,"--duration",t[2])},i:h,o:h,d(t){t&&f(e)}}}function I(n,e,t){let{size:i="1rem"}=e,{color:o="blue"}=e,{duration:r="1.5s"}=e;return n.$$set=s=>{"size"in s&&t(0,i=s.size),"color"in s&&t(1,o=s.color),"duration"in s&&t(2,r=s.duration)},[i,o,r]}class R extends z{constructor(e){super();b(this,e,I,F,k,{size:0,color:1,duration:2})}}export{R as S,D as a,M as c,A as f};
