var x=Object.defineProperty,z=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var w=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,o=(t,e)=>{for(var s in e||(e={}))j.call(e,s)&&w(t,s,e[s]);if(h)for(var s of h(e))v.call(e,s)&&w(t,s,e[s]);return t},c=(t,e)=>z(t,T(e));import{D as f}from"./vendor-b4247f54.js";const _={pump:{reagent:"",volume:0,op:"pump"},prime:{reagent:"",volume:0,op:"prime"},temp:{temp:25,wait:!0,op:"temp"},hold:{time:0,op:"hold"},takeimage:{name:"Test",path:".",xy0:[0,0],xy1:[1,1],channels:[!0,!0,!0,!0],z_tilt:19850,z_obj:32e3,save:!1,lasers:[0,0],laser_onoff:[!0,!0],od:[0,0],overlap:.1,op:"takeimage",z_from:0,z_to:0,z_spacing:232},autofocus:{channels:[!0,!0,!0,!0],laser_onoff:!0,laser:5,od:0,op:"autofocus"},goto:{step:1,n:4,op:"goto"}},$={name:"",port:1,v_pull:100,v_prime:200,v_push:2e3,wait:26},b={name:"",path:".",fc:!1,reagents:[{uid:0,reagent:o({},$)}],cmds:[{uid:0,cmd:o({},_.pump)}]};function U(t,e){return{name:t.name,fc:t.fc,path:t.path,reagents:t.reagents.map(s=>({uid:++e,reagent:s})),cmds:t.cmds.map(s=>({uid:++e,cmd:s}))}}function q(t){return{name:t.name,fc:t.fc,path:t.path,reagents:t.reagents.map(e=>e.reagent),cmds:t.cmds.map(e=>e.cmd)}}const O={n:0,img:[""],hist:[{counts:[10],bin_edges:[0]}],channels:[!1,!1,!1,!1]},W={x:-1,y:-1,z_tilt:[-1,-1,-1],z_obj:-1,od:[0,0],laser_onoff:[!0,!0],lasers:[-1,-1],shutter:!1,msg:"Idle"};function p(t,e,{f:s=JSON.parse,broadcastOnSet:u,beforeOpen:i,localStore:m}={}){let n,r;const{set:l,subscribe:D,update:S}=f(e);async function g(){console.log("Connecting"),r=null,i&&await i(),n=new WebSocket(t),n.onmessage=a=>l(s(a.data)),n.onopen=()=>{m&&m.update(a=>c(o({},a),{connected:!0})),r&&(clearTimeout(r),r=null)},n.onclose=()=>{m&&m.update(a=>c(o({},a),{connected:!1})),r||(r=setTimeout(g,2e3)),console.error("Connection closed.")}}return l(e),g(),{set(a){n&&n.readyState===WebSocket.OPEN&&n.send(typeof a=="object"?JSON.stringify(a):a),u&&l(a)},update:S,subscribe:D}}function C(t,e,s={}){return{subscribe:p(t,e,s).subscribe}}const k={block:"",max_uid:2,mode:"editingA",exps:[o({},b),o({},b)],image_params:c(o({},_.takeimage),{fc:!1})},y=f({mode:"auto",connected:!1,img:o({},O)}),B=C(`ws://${window.location.hostname}:8000/status`,o({},W),{localStore:y}),d=f(o({},k)),E=p(`ws://${window.location.hostname}:8000/user`,o({},k),{beforeOpen:I}),N=p(`ws://${window.location.hostname}:8000/cmd`,{msg:"ok"},{broadcastOnSet:!1});async function I(){for(;;)try{const e=await(await fetch(`http://${window.location.hostname}:8000/usersettings`)).json();d.set(e);return}catch{console.error("Cannot get initial user settings.")}}function J(){let t=Date.now(),e=setTimeout(()=>{},1e3);d.subscribe(s=>{let u=Date.now();const i=()=>{E.set(s),t=Date.now()};u-t<1e3?(clearTimeout(e),e=setTimeout(i,1e3-(u-t))):i()})}J();function A(t){t.msg==="imgReady"&&(fetch(`http://${window.location.hostname}:8000/img`).then(e=>e.json()).then(e=>y.update(s=>c(o({},s),{img:e}))).catch(e=>alert(e)),d.update(e=>c(o({},e),{block:""})))}N.subscribe(A);export{_ as a,N as c,b as e,U as f,y as l,$ as r,B as s,q as t,d as u};
