import{S as ae,i as se,s as re,l as pe,g as w,M as O,d as o,N as le,e as m,t as P,O as D,c as h,a as f,h as T,P as N,b as l,f as be,H as u,k as E,m as x,n as ke,o as C,p as we,q,Q as Ee,w as H,x as Q,y as R,j as xe,B as Z,R as V,T as _e,U as ye,V as ge}from"../chunks/vendor-5b169328.js";import{L as Ie}from"../chunks/logo-acce5c2b.js";import{s as $e,u as te}from"../chunks/store-1582af6d.js";import{f as Se}from"../chunks/utils-0b1d73e0.js";import{S as Be}from"../chunks/spinning-267e294b.js";function Ve(c){let t,r,a,s;return{c(){t=m("span"),r=P(`Not Connected
    `),a=D("svg"),s=D("path"),this.h()},l(e){t=h(e,"SPAN",{class:!0,style:!0});var n=f(t);r=T(n,`Not Connected
    `),a=N(n,"svg",{role:!0,height:!0,viewBox:!0,version:!0,fill:!0,class:!0});var i=f(a);s=N(i,"path",{"fill-rule":!0,d:!0}),f(s).forEach(o),i.forEach(o),n.forEach(o),this.h()},h(){l(s,"fill-rule","evenodd"),l(s,"d","M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"),l(a,"role","img"),l(a,"height","16"),l(a,"viewBox","0 0 16 16"),l(a,"version","1.1"),l(a,"fill","rgb(207, 34, 46)"),l(a,"class","pl-1"),l(t,"class","mt-1 text-sm font-semibold animate-bounce"),be(t,"color","rgb(207, 34, 46)")},m(e,n){w(e,t,n),u(t,r),u(t,a),u(a,s)},d(e){e&&o(t)}}}function De(c){let t,r,a,s;return{c(){t=m("span"),r=P(`Connected
    `),a=D("svg"),s=D("path"),this.h()},l(e){t=h(e,"SPAN",{class:!0,style:!0});var n=f(t);r=T(n,`Connected
    `),a=N(n,"svg",{"aria-label":!0,role:!0,height:!0,viewBox:!0,fill:!0,class:!0});var i=f(a);s=N(i,"path",{"fill-rule":!0,d:!0}),f(s).forEach(o),i.forEach(o),n.forEach(o),this.h()},h(){l(s,"fill-rule","evenodd"),l(s,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),l(a,"aria-label","connected"),l(a,"role","img"),l(a,"height","16"),l(a,"viewBox","0 0 16 16"),l(a,"fill","rgb(26, 127, 55)"),l(a,"class","pl-1"),l(t,"class","text-sm font-semibold"),be(t,"color","rgb(26, 127, 55)")},m(e,n){w(e,t,n),u(t,r),u(t,a),u(a,s)},d(e){e&&o(t)}}}function Ne(c){let t;function r(e,n){return e[0]?De:Ve}let a=r(c),s=a(c);return{c(){s.c(),t=pe()},l(e){s.l(e),t=pe()},m(e,n){s.m(e,n),w(e,t,n)},p(e,[n]){a!==(a=r(e))&&(s.d(1),s=a(e),s&&(s.c(),s.m(t.parentNode,t)))},i:O,o:O,d(e){s.d(e),e&&o(t)}}}function Le(c,t,r){let a;le(c,$e,e=>r(1,a=e));let s=!1;return c.$$.update=()=>{c.$$.dirty&2&&r(0,s=a.lasers[0]!=-1)},[s,a]}class Me extends ae{constructor(t){super();se(this,t,Le,Ne,re,{})}}function Ae(c){let t,r,a,s;return{c(){t=m("div"),r=E(),a=m("span"),s=P("Idle"),this.h()},l(e){t=h(e,"DIV",{class:!0}),f(t).forEach(o),r=x(e),a=h(e,"SPAN",{class:!0});var n=f(a);s=T(n,"Idle"),n.forEach(o),this.h()},h(){l(t,"class","ml-8"),l(a,"class","mx-4")},m(e,n){w(e,t,n),w(e,r,n),w(e,a,n),u(a,s)},p:O,i:O,o:O,d(e){e&&o(t),e&&o(r),e&&o(a)}}}function Ce(c){let t,r,a,s,e,n;return r=new Be({}),{c(){t=m("div"),H(r.$$.fragment),a=E(),s=m("span"),e=P(c[0]),this.h()},l(i){t=h(i,"DIV",{class:!0});var d=f(t);Q(r.$$.fragment,d),d.forEach(o),a=x(i),s=h(i,"SPAN",{class:!0});var b=f(s);e=T(b,c[0]),b.forEach(o),this.h()},h(){l(t,"class","ml-8"),l(s,"class","mx-4")},m(i,d){w(i,t,d),R(r,t,null),w(i,a,d),w(i,s,d),u(s,e),n=!0},p(i,d){(!n||d&1)&&xe(e,i[0])},i(i){n||(q(r.$$.fragment,i),n=!0)},o(i){C(r.$$.fragment,i),n=!1},d(i){i&&o(t),Z(r),i&&o(a),i&&o(s)}}}function qe(c){let t,r,a,s,e,n;const i=[Ce,Ae],d=[];function b(v,p){return v[0]?0:1}return s=b(c),e=d[s]=i[s](c),{c(){t=m("div"),r=m("div"),a=E(),e.c(),this.h()},l(v){t=h(v,"DIV",{class:!0});var p=f(t);r=h(p,"DIV",{class:!0}),f(r).forEach(o),a=x(p),e.l(p),p.forEach(o),this.h()},h(){l(r,"class","absolute w-full h-full ml-4 rounded-lg"),l(t,"class","relative py-2 font-mono font-medium ")},m(v,p){w(v,t,p),u(t,r),c[3](r),u(t,a),d[s].m(t,null),n=!0},p(v,[p]){let L=s;s=b(v),s===L?d[s].p(v,p):(ke(),C(d[L],1,1,()=>{d[L]=null}),we(),e=d[s],e?e.p(v,p):(e=d[s]=i[s](v),e.c()),q(e,1),e.m(t,null))},i(v){n||(q(e),n=!0)},o(v){C(e),n=!1},d(v){v&&o(t),c[3](null),d[s].d()}}}function Pe(c,t,r){let a;le(c,$e,i=>r(2,a=i));let s="",e;function n(i){Ee[i?"unshift":"push"](()=>{e=i,r(1,e)})}return c.$$.update=()=>{c.$$.dirty&7&&a&&s!==a.msg&&(r(0,s=a.msg),Se(e))},[s,e,a,n]}class Te extends ae{constructor(t){super();se(this,t,Pe,qe,re,{})}}function je(c){let t,r,a,s,e,n,i,d,b,v,p,L,j,F,M,J,S,$,K,W,k,X,Y,A,y,B,z,U,ee,ne;return b=new Ie({}),p=new Te({}),M=new Me({}),{c(){t=m("div"),r=m("div"),a=m("div"),s=m("label"),e=D("svg"),n=D("path"),i=E(),d=m("div"),H(b.$$.fragment),v=E(),H(p.$$.fragment),L=E(),j=m("div"),F=E(),H(M.$$.fragment),J=E(),S=m("div"),$=m("button"),K=P("Manual"),W=E(),k=m("button"),X=P("Automatic"),Y=E(),A=m("div"),y=m("a"),B=D("svg"),z=D("path"),this.h()},l(_){t=h(_,"DIV",{id:!0,class:!0});var I=f(t);r=h(I,"DIV",{class:!0});var g=f(r);a=h(g,"DIV",{class:!0});var oe=f(a);s=h(oe,"LABEL",{for:!0,class:!0});var ie=f(s);e=N(ie,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var ce=f(e);n=N(ce,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),f(n).forEach(o),ce.forEach(o),ie.forEach(o),oe.forEach(o),i=x(g),d=h(g,"DIV",{class:!0});var ue=f(d);Q(b.$$.fragment,ue),ue.forEach(o),v=x(g),Q(p.$$.fragment,g),L=x(g),j=h(g,"DIV",{class:!0}),f(j).forEach(o),F=x(g),Q(M.$$.fragment,g),J=x(g),S=h(g,"DIV",{class:!0});var G=f(S);$=h(G,"BUTTON",{class:!0});var fe=f($);K=T(fe,"Manual"),fe.forEach(o),W=x(G),k=h(G,"BUTTON",{class:!0});var de=f(k);X=T(de,"Automatic"),de.forEach(o),G.forEach(o),Y=x(g),A=h(g,"DIV",{title:!0,class:!0});var me=f(A);y=h(me,"A",{target:!0,href:!0,rel:!0,class:!0});var he=f(y);B=N(he,"svg",{xmlns:!0,viewBox:!0,class:!0});var ve=f(B);z=N(ve,"path",{d:!0}),f(z).forEach(o),ve.forEach(o),he.forEach(o),me.forEach(o),g.forEach(o),I.forEach(o),this.h()},h(){l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"stroke-width","2"),l(n,"d","M4 6h16M4 12h16M4 18h16"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"class","inline-block w-6 h-6 stroke-current"),l(s,"for","main-menu"),l(s,"class","btn btn-square btn-ghost drawer-button lg:hidden"),l(a,"class","flex-none"),l(d,"class","flex items-center flex-none lg:hidden"),l(j,"class","flex-grow"),l($,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),V($,"tab-active",c[0].mode==="manual"),V($,"text-gray-800",c[0].mode==="manual"),l(k,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),V(k,"tab-active",c[0].mode!=="manual"),V(k,"text-gray-800",c[0].mode!=="manual"),l(S,"class","tabs"),l(z,"d","M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"),l(B,"xmlns","http://www.w3.org/2000/svg"),l(B,"viewBox","0 0 512 512"),l(B,"class","inline-block w-6 h-6 fill-current"),l(y,"target","_blank"),l(y,"href","https://github.com/chaichontat/pyseq2501-web"),l(y,"rel","noopener"),l(y,"class","normal-case btn btn-ghost drawer-button btn-square"),l(A,"title","Github \u2197\uFE0E"),l(A,"class","items-center flex-none pr-4"),l(r,"class","mx-auto space-x-1 navbar max-w-none"),l(t,"id","nav"),l(t,"class","sticky inset-x-0 top-0 z-50 w-full h-16 bg-white transition duration-200 ease-in-out shadow-sm opacity-95 text-base-content ring-1 ring-gray-900 ring-opacity-5")},m(_,I){w(_,t,I),u(t,r),u(r,a),u(a,s),u(s,e),u(e,n),u(r,i),u(r,d),R(b,d,null),u(r,v),R(p,r,null),u(r,L),u(r,j),u(r,F),R(M,r,null),u(r,J),u(r,S),u(S,$),u($,K),u(S,W),u(S,k),u(k,X),u(r,Y),u(r,A),u(A,y),u(y,B),u(B,z),U=!0,ee||(ne=[_e($,"click",c[1]),_e(k,"click",c[2])],ee=!0)},p(_,[I]){I&1&&V($,"tab-active",_[0].mode==="manual"),I&1&&V($,"text-gray-800",_[0].mode==="manual"),I&1&&V(k,"tab-active",_[0].mode!=="manual"),I&1&&V(k,"text-gray-800",_[0].mode!=="manual")},i(_){U||(q(b.$$.fragment,_),q(p.$$.fragment,_),q(M.$$.fragment,_),U=!0)},o(_){C(b.$$.fragment,_),C(p.$$.fragment,_),C(M.$$.fragment,_),U=!1},d(_){_&&o(t),Z(b),Z(p),Z(M),ee=!1,ye(ne)}}}function ze(c,t,r){let a;return le(c,te,n=>r(0,a=n)),[a,()=>ge(te,a.mode="manual",a),()=>ge(te,a.mode="automatic",a)]}class Re extends ae{constructor(t){super();se(this,t,ze,je,re,{})}}export{Re as default};