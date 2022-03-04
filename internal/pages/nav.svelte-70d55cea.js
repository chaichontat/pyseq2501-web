import{S as ne,i as oe,s as ie,l as be,g as z,M as G,d as o,N as re,O as ae,e as h,t as Q,P as D,c as v,a as u,h as R,Q as M,b as r,f as we,H as i,R as Y,k as N,m as j,T as ke,n as ye,o as H,p as Ee,q as U,U as $e,j as Le,V as Be,w as F,x as J,y as K,B as ee,W as Z,X as xe,Y as De}from"../chunks/vendor-79b73b07.js";import{L as Me}from"../chunks/logo-48d6c818.js";import{s as te,l as le,f as Ie,S as Ve}from"../chunks/utils-e684163d.js";import{t as Se}from"../chunks/tooltip-ab038c1a.js";function Ce(c){let e,l,t,a;return{c(){e=h("span"),l=Q(`Not Connected
    `),t=D("svg"),a=D("path"),this.h()},l(s){e=v(s,"SPAN",{class:!0,style:!0});var n=u(e);l=R(n,`Not Connected
    `),t=M(n,"svg",{role:!0,height:!0,viewBox:!0,version:!0,fill:!0,class:!0});var f=u(t);a=M(f,"path",{"fill-rule":!0,d:!0}),u(a).forEach(o),f.forEach(o),n.forEach(o),this.h()},h(){r(a,"fill-rule","evenodd"),r(a,"d","M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"),r(t,"role","img"),r(t,"height","16"),r(t,"viewBox","0 0 16 16"),r(t,"version","1.1"),r(t,"fill","rgb(207, 34, 46)"),r(t,"class","pl-1"),r(e,"class","flex items-center mt-1 text-sm font-semibold translate-y-1 animate-bounce"),we(e,"color","rgb(207, 34, 46)")},m(s,n){z(s,e,n),i(e,l),i(e,t),i(t,a)},d(s){s&&o(e)}}}function Ne(c){let e,l,t,a;return{c(){e=h("span"),l=Q(`Connected
    `),t=D("svg"),a=D("path"),this.h()},l(s){e=v(s,"SPAN",{class:!0,style:!0});var n=u(e);l=R(n,`Connected
    `),t=M(n,"svg",{"aria-label":!0,role:!0,height:!0,viewBox:!0,fill:!0,class:!0});var f=u(t);a=M(f,"path",{"fill-rule":!0,d:!0}),u(a).forEach(o),f.forEach(o),n.forEach(o),this.h()},h(){r(a,"fill-rule","evenodd"),r(a,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),r(t,"aria-label","connected"),r(t,"role","img"),r(t,"height","16"),r(t,"viewBox","0 0 16 16"),r(t,"fill","rgb(26, 127, 55)"),r(t,"class","pl-1"),r(e,"class","flex items-center text-sm font-semibold"),we(e,"color","rgb(26, 127, 55)")},m(s,n){z(s,e,n),i(e,l),i(e,t),i(t,a)},d(s){s&&o(e)}}}function je(c){let e;function l(s,n){return s[0].connected?Ne:Ce}let t=l(c),a=t(c);return{c(){a.c(),e=be()},l(s){a.l(s),e=be()},m(s,n){a.m(s,n),z(s,e,n)},p(s,[n]){t!==(t=l(s))&&(a.d(1),a=t(s),a&&(a.c(),a.m(e.parentNode,e)))},i:G,o:G,d(s){a.d(s),s&&o(e)}}}function Te(c,e,l){let t,a;return re(c,te,s=>l(1,t=s)),re(c,le,s=>l(0,a=s)),c.$$.update=()=>{c.$$.dirty&1&&(a.connected||(ae(te,t.msg={msg:"Error: Not connected.",t:Date.now()/1e3},t),ae(te,t.block="capturing",t)))},[a]}class Ae extends ne{constructor(e){super();oe(this,e,Te,je,ie,{})}}function ze(c){let e,l,t;return l=new Ve({}),{c(){e=h("div"),F(l.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=u(e);J(l.$$.fragment,s),s.forEach(o),this.h()},h(){r(e,"class","w-5 h-5 translate-x-0.5 translate-y-0.5")},m(a,s){z(a,e,s),K(l,e,null),t=!0},i(a){t||(U(l.$$.fragment,a),t=!0)},o(a){H(l.$$.fragment,a),t=!1},d(a){a&&o(e),ee(l)}}}function Oe(c){let e,l;return{c(){e=D("svg"),l=D("path"),this.h()},l(t){e=M(t,"svg",{"aria-label":!0,class:!0,role:!0,viewBox:!0,fill:!0});var a=u(e);l=M(a,"path",{"fill-rule":!0,d:!0}),u(l).forEach(o),a.forEach(o),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),r(e,"aria-label","connected"),r(e,"class","w-5 h-5"),r(e,"role","img"),r(e,"viewBox","0 0 16 16"),r(e,"fill","rgb(26, 127, 55)")},m(t,a){z(t,e,a),i(e,l)},i:G,o:G,d(t){t&&o(e)}}}function Pe(c){let e,l;return{c(){e=D("svg"),l=D("path"),this.h()},l(t){e=M(t,"svg",{role:!0,height:!0,viewBox:!0,version:!0,fill:!0,class:!0});var a=u(e);l=M(a,"path",{"fill-rule":!0,d:!0}),u(l).forEach(o),a.forEach(o),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"),r(e,"role","img"),r(e,"height","16"),r(e,"viewBox","0 0 16 16"),r(e,"version","1.1"),r(e,"fill","rgb(207, 34, 46)"),r(e,"class","pl-1")},m(t,a){z(t,e,a),i(e,l)},i:G,o:G,d(t){t&&o(e)}}}function qe(c){let e,l,t,a,s,n,f,b,g,T=Y.highlight(c[2],Y.languages.javascript,"javascript")+"",k,O,y,C=c[1].msg2.msg+"",E,V,w,$;const q=[Pe,Oe,ze],I=[];function L(d,m){return m&4&&(a=null),m&4&&(s=null),a==null&&(a=d[2].search("Error")!=-1),a?0:(s==null&&(s=d[2].search(He)==-1),s?1:2)}return n=L(c,-1),f=I[n]=q[n](c),{c(){e=h("div"),l=h("div"),t=h("div"),f.c(),b=N(),g=h("code"),O=N(),y=h("code"),E=Q(C),this.h()},l(d){e=v(d,"DIV",{class:!0});var m=u(e);l=v(m,"DIV",{class:!0});var p=u(l);t=v(p,"DIV",{class:!0});var B=u(t);f.l(B),B.forEach(o),b=j(p),g=v(p,"CODE",{class:!0});var S=u(g);S.forEach(o),p.forEach(o),O=j(m),y=v(m,"CODE",{class:!0});var A=u(y);E=R(A,C),A.forEach(o),m.forEach(o),this.h()},h(){r(t,"class","ml-2"),r(g,"class","max-w-full px-2 py-2 mx-1 overflow-hidden rounded-lg overflow-ellipsis whitespace-nowrap"),r(l,"class","relative flex items-center py-2 font-mono text-base font-semibold text-gray-800"),r(y,"class","relative flex items-center py-2 font-mono text-sm text-gray-800 overflow-x-ellipsis whitespace-nowrap"),r(e,"class","grid w-full grid-cols-2")},m(d,m){z(d,e,m),i(e,l),i(l,t),I[n].m(t,null),i(l,b),i(l,g),g.innerHTML=T,c[4](g),i(e,O),i(e,y),i(y,E),V=!0,w||($=ke(k=Se.call(null,l,c[2])),w=!0)},p(d,[m]){let p=n;n=L(d,m),n!==p&&(ye(),H(I[p],1,1,()=>{I[p]=null}),Ee(),f=I[n],f||(f=I[n]=q[n](d),f.c()),U(f,1),f.m(t,null)),(!V||m&4)&&T!==(T=Y.highlight(d[2],Y.languages.javascript,"javascript")+"")&&(g.innerHTML=T),k&&$e(k.update)&&m&4&&k.update.call(null,d[2]),(!V||m&2)&&C!==(C=d[1].msg2.msg+"")&&Le(E,C)},i(d){V||(U(f),V=!0)},o(d){H(f),V=!1},d(d){d&&o(e),I[n].d(),c[4](null),w=!1,$()}}}const He=/(ing)/;function Ue(c,e,l){let t;re(c,te,b=>l(1,t=b));let a="Idle",s,n;function f(b){Be[b?"unshift":"push"](()=>{s=b,l(0,s)})}return c.$$.update=()=>{c.$$.dirty&11&&n!==t.msg.t&&(l(2,a=t.msg.msg),l(3,n=t.msg.t),Ie(s))},[s,t,a,n,f]}class Ge extends ne{constructor(e){super();oe(this,e,Ue,qe,ie,{})}}function Qe(c){let e,l,t,a,s,n,f,b,g,T,k,O,y,C,E,V,w,$,q,I,L,d,m,p,B,S,A,W,se,ce;return g=new Me({}),k=new Ge({}),E=new Ae({}),{c(){e=h("div"),l=h("div"),t=h("div"),a=h("label"),s=D("svg"),n=D("path"),f=N(),b=h("div"),F(g.$$.fragment),T=N(),F(k.$$.fragment),O=N(),y=h("div"),C=N(),F(E.$$.fragment),V=N(),w=h("div"),$=h("button"),q=Q("Manual"),I=N(),L=h("button"),d=Q("Automatic"),m=N(),p=h("div"),B=h("a"),S=D("svg"),A=D("path"),this.h()},l(_){e=v(_,"DIV",{id:!0,class:!0});var P=u(e);l=v(P,"DIV",{class:!0});var x=u(l);t=v(x,"DIV",{class:!0});var ue=u(t);a=v(ue,"LABEL",{for:!0,class:!0});var fe=u(a);s=M(fe,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var de=u(s);n=M(de,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),u(n).forEach(o),de.forEach(o),fe.forEach(o),ue.forEach(o),f=j(x),b=v(x,"DIV",{class:!0});var he=u(b);J(g.$$.fragment,he),he.forEach(o),T=j(x),J(k.$$.fragment,x),O=j(x),y=v(x,"DIV",{class:!0}),u(y).forEach(o),C=j(x),J(E.$$.fragment,x),V=j(x),w=v(x,"DIV",{id:!0,class:!0});var X=u(w);$=v(X,"BUTTON",{class:!0});var ve=u($);q=R(ve,"Manual"),ve.forEach(o),I=j(X),L=v(X,"BUTTON",{class:!0});var me=u(L);d=R(me,"Automatic"),me.forEach(o),X.forEach(o),m=j(x),p=v(x,"DIV",{title:!0,class:!0});var ge=u(p);B=v(ge,"A",{target:!0,href:!0,rel:!0,class:!0});var pe=u(B);S=M(pe,"svg",{xmlns:!0,viewBox:!0,class:!0});var _e=u(S);A=M(_e,"path",{d:!0}),u(A).forEach(o),_e.forEach(o),pe.forEach(o),ge.forEach(o),x.forEach(o),P.forEach(o),this.h()},h(){r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"stroke-width","2"),r(n,"d","M4 6h16M4 12h16M4 18h16"),r(s,"xmlns","http://www.w3.org/2000/svg"),r(s,"fill","none"),r(s,"viewBox","0 0 24 24"),r(s,"class","inline-block w-6 h-6 stroke-current"),r(a,"for","main-menu"),r(a,"class","lg:hidden"),r(t,"class","flex-none"),r(b,"class","flex items-center flex-none lg:hidden"),r(y,"class","flex-grow"),r($,"class","relative inline-flex flex-wrap items-center justify-center h-full px-4 text-lg font-medium text-center text-gray-500 transition-colors translate-y-0.5 border-b-2 cursor-pointer hover:text-gray-800 hover:border-b-gray-600 svelte-1w4boxo"),Z($,"active",c[0].mode==="manual"),r(L,"class","relative inline-flex flex-wrap items-center justify-center h-full px-4 text-lg font-medium text-center text-gray-500 transition-colors translate-y-0.5 border-b-2 cursor-pointer hover:text-gray-800 hover:border-b-gray-600 svelte-1w4boxo"),Z(L,"active",c[0].mode!=="manual"),r(w,"id","mode-selector"),r(w,"class","flex h-full gap-x-2"),r(A,"d","M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"),r(S,"xmlns","http://www.w3.org/2000/svg"),r(S,"viewBox","0 0 512 512"),r(S,"class","inline-block w-6 h-6 fill-current"),r(B,"target","_blank"),r(B,"href","https://github.com/chaichontat/pyseq2501-web"),r(B,"rel","noopener"),r(B,"class","normal-case"),r(p,"title","Github \u2197\uFE0E"),r(p,"class","items-center flex-none pr-6"),r(l,"class","flex items-center h-full mx-auto gap-x-6"),r(e,"id","nav"),r(e,"class","sticky inset-x-0 top-0 z-50 w-full h-16 transition duration-200 ease-in-out bg-white shadow-sm opacity-95 ring-1 ring-gray-900 ring-opacity-5")},m(_,P){z(_,e,P),i(e,l),i(l,t),i(t,a),i(a,s),i(s,n),i(l,f),i(l,b),K(g,b,null),i(l,T),K(k,l,null),i(l,O),i(l,y),i(l,C),K(E,l,null),i(l,V),i(l,w),i(w,$),i($,q),i(w,I),i(w,L),i(L,d),i(l,m),i(l,p),i(p,B),i(B,S),i(S,A),W=!0,se||(ce=[xe($,"click",c[1]),xe(L,"click",c[2])],se=!0)},p(_,[P]){P&1&&Z($,"active",_[0].mode==="manual"),P&1&&Z(L,"active",_[0].mode!=="manual")},i(_){W||(U(g.$$.fragment,_),U(k.$$.fragment,_),U(E.$$.fragment,_),W=!0)},o(_){H(g.$$.fragment,_),H(k.$$.fragment,_),H(E.$$.fragment,_),W=!1},d(_){_&&o(e),ee(g),ee(k),ee(E),se=!1,De(ce)}}}function Re(c,e,l){let t;return re(c,le,n=>l(0,t=n)),[t,()=>ae(le,t.mode="manual",t),()=>ae(le,t.mode="automatic",t)]}class Fe extends ne{constructor(e){super();oe(this,e,Re,Qe,ie,{})}}export{Fe as default};
