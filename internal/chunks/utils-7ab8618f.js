var v=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e)=>{for(var n in e||(e={}))T.call(e,n)&&b(t,n,e[n]);if(y)for(var n of y(e))O.call(e,n)&&b(t,n,e[n]);return t},i=(t,e)=>C(t,E(e));import{D as h,a7 as W}from"./vendor-958ec56b.js";const _={pump:{reagent:"",volume:0,op:"pump"},prime:{reagent:"",volume:0,op:"prime"},temp:{temp:25,wait:!0,op:"temp"},hold:{time:0,op:"hold"},takeimage:{name:"Test",path:".",xy0:[0,0],xy1:[1,1],channels:[!0,!0,!0,!0],z_tilt:19850,z_obj:32e3,save:!1,lasers:[0,0],laser_onoff:[!0,!0],od:[0,0],overlap:.1,op:"takeimage",z_from:0,z_to:0,z_spacing:232},autofocus:{channels:[!0,!0,!0,!0],laser_onoff:!0,laser:5,od:0,op:"autofocus"},goto:{step:1,n:4,op:"goto"}},$={name:"",port:1,v_pull:100,v_prime:200,v_push:2e3,wait:26};function k(t){return{name:"",path:".",fc:!1,reagents:[{uid:t+1,reagent:o({},$)}],cmds:[{uid:t+2,cmd:o({},_.pump)}]}}function I(t,e){return{name:t.name,fc:t.fc,path:t.path,reagents:t.reagents.map(n=>({uid:++e,reagent:n})),cmds:t.cmds.map(n=>({uid:++e,cmd:n}))}}function U(t){return{name:t.name,fc:t.fc,path:t.path,reagents:t.reagents.map(e=>e.reagent),cmds:t.cmds.map(e=>e.cmd)}}const N={n:0,img:[""],hist:[{counts:[10],bin_edges:[0]}],channels:[!1,!1,!1,!1],dim:[0,0]},S={running:!1,step:0,msg:{msg:"",t:Date.now()}},z={x:-1,y:-1,z_tilt:[-1,-1,-1],z_obj:-1,od:[0,0],laser_onoff:[!0,!0],lasers:[-1,-1],shutter:!1,fcs:[o({},S),o({},S)],block:"",msg:{msg:"Error: not connected.",t:Date.now()},msg2:{msg:"",t:Date.now()}};function D(t,e,{f:n=JSON.parse,onOpen:c,localStore:l,sendOnSet:f=!0}={}){let a,r;const{set:p,subscribe:w,update:g}=h(e);function s(){console.log("Connecting"),r=null,a=new WebSocket(t),a.onmessage=u=>p(n(u.data)),a.onopen=async()=>{c&&await c(),l&&l.update(u=>i(o({},u),{connected:!0})),r&&(clearTimeout(r),r=null)},a.onclose=()=>{l&&l.update(u=>i(o({},u),{connected:!1})),r||(r=setTimeout(s,2e3)),console.error("Connection closed.")}}return s(),{set(u){f&&a&&a.readyState===WebSocket.OPEN&&(u instanceof Set?a.send(JSON.stringify(Array.from(u))):a.send(typeof u=="string"?u:JSON.stringify(u))),p(u)},update:g,subscribe:w}}function L(t,e,n,{f:c=JSON.parse,beforeOpen:l,localStore:f}={}){let a,r;const{set:p,subscribe:w}=h(e);async function g(){console.log("Connecting"),r=null,l&&await l(),a&&a.close(),a=new WebSocket(t),a.onmessage=s=>p(c(s.data)),a.onopen=()=>{f&&f.update(s=>i(o({},s),{connected:!0})),r&&(clearTimeout(r),r=null)},a.onclose=()=>{f&&f.update(s=>i(o({},s),{connected:!1})),r||(r=setTimeout(g,2e3)),console.error("Connection closed.")}}return g().catch(s=>console.error(s)),{set(s){a&&a.readyState===WebSocket.OPEN&&(console.log(),s instanceof Set?a.send(JSON.stringify(Array.from(s))):a.send(typeof s=="string"?s:JSON.stringify(s)))},update(){throw new Error("Cannot update an asymWritableWebSocket")},subscribe:w}}const j={block:"",max_uid:6,exps:[k(0),k(3)],image_params:i(o({},_.takeimage),{fc:!1})},m=h({mode:"automatic",connected:!1,img:o({},N),afimg:{afimg:Array(259).fill(""),laplacian:Array(259).fill(0)},config:{machine:"HiSeq2000",logPath:"",logLevel:"DEBUG",barrelsPerLane:1,ports:[]}}),G=D(`ws://${window.location.hostname}:8000/status`,o({},z),{localStore:m,onOpen:F,sendOnSet:!1}),d=h(o({},j)),x=D(`ws://${window.location.hostname}:8000/user`,o({},j),{onOpen:J}),A=L(`ws://${window.location.hostname}:8000/cmd`,{msg:"ok"});async function J(){for(;;)try{const e=await(await fetch(`http://${window.location.hostname}:8000/usersettings`)).json();d.set(e);return}catch{console.error("Cannot get initial user settings.")}}function B(){let t=Date.now(),e=setTimeout(()=>{},1e3);d.subscribe(n=>{const c=Date.now(),l=()=>{x.set(n),t=Date.now()};c-t<1e3?(clearTimeout(e),e=setTimeout(l,1e3-(c-t))):l()})}B();function P(t){t.msg==="imgReady"?(fetch(`http://${window.location.hostname}:8000/img`).then(e=>e.json()).then(e=>m.update(n=>i(o({},n),{img:e}))).catch(e=>alert(e)),d.update(e=>i(o({},e),{block:""}))):t.msg==="afimgReady"?(fetch(`http://${window.location.hostname}:8000/afimg`).then(e=>e.json()).then(e=>m.update(n=>i(o({},n),{afimg:e}))).catch(e=>alert(e)),d.update(e=>i(o({},e),{block:""}))):t.msg==="moveDone"&&d.update(e=>i(o({},e),{block:""}))}A.subscribe(P);async function F(){await fetch(`http://${window.location.hostname}:8000/img`).then(t=>t.json()).then(t=>m.update(e=>i(o({},e),{img:t}))).catch(()=>{}),await fetch(`http://${window.location.hostname}:8000/afimg`).then(t=>t.json()).then(t=>m.update(e=>i(o({},e),{afimg:t}))).catch(()=>{}),await fetch(`http://${window.location.hostname}:8000/config`).then(t=>t.json()).then(t=>m.update(e=>i(o({},e),{config:t})))}var H=(t,e)=>{t.setAttribute("aria-label",e),t.title="";const n=W(t,{content:e,delay:[100,0]});return{update:c=>n.setContent(c),destroy:()=>n.destroy()}};function V(t){requestAnimationFrame(()=>{t&&(t.style.transition="none",t.style.backgroundColor="rgba(255,62,0,0.3)",setTimeout(()=>{t.style.transition="background 1s",t.style.backgroundColor=""}))})}function K(t){return t.reduce((e,n)=>i(o({},e),{[n]:(e[n]||0)+1}),{})}function M(t,e=[0,1/0]){const n=()=>{const c=parseFloat(t.value);e[0]<=c&&c<=e[1]?t.classList.remove("invalid"):t.classList.add("invalid")};return document.addEventListener("input",n),{destroy:()=>{document.removeEventListener("input",n)}}}function Q(...t){return t.filter(Boolean).join(" ")}export{M as a,K as b,A as c,_ as d,U as e,V as f,I as g,k as h,Q as j,m as l,$ as r,G as s,H as t,d as u};