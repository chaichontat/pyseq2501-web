import{S as et,i as at,s as st,l as _t,g as w,L as O,d as i,U as rt,e as h,t as M,N as V,c as m,a as d,h as j,O as D,b as l,f as pt,H as u,k as E,m as x,n as $t,o as T,p as wt,q,_ as yt,w as F,x as H,y as Q,j as Et,B as Z,$ as L,Q as gt,T as xt,V as bt}from"../chunks/vendor-d2ee3b07.js";import{S as It,L as St}from"../chunks/spinning-bf46cab3.js";import{s as kt,u as lt}from"../chunks/store-162a14c6.js";function Bt(o){let e,r,a,s;return{c(){e=h("span"),r=M(`Not Connected
    `),a=V("svg"),s=V("path"),this.h()},l(t){e=m(t,"SPAN",{class:!0,style:!0});var n=d(e);r=j(n,`Not Connected
    `),a=D(n,"svg",{role:!0,height:!0,viewBox:!0,version:!0,fill:!0,class:!0});var c=d(a);s=D(c,"path",{"fill-rule":!0,d:!0}),d(s).forEach(i),c.forEach(i),n.forEach(i),this.h()},h(){l(s,"fill-rule","evenodd"),l(s,"d","M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"),l(a,"role","img"),l(a,"height","16"),l(a,"viewBox","0 0 16 16"),l(a,"version","1.1"),l(a,"fill","rgb(207, 34, 46)"),l(a,"class","pl-1"),l(e,"class","mt-1 text-sm font-semibold animate-bounce"),pt(e,"color","rgb(207, 34, 46)")},m(t,n){w(t,e,n),u(e,r),u(e,a),u(a,s)},d(t){t&&i(e)}}}function Vt(o){let e,r,a,s;return{c(){e=h("span"),r=M(`Connected
    `),a=V("svg"),s=V("path"),this.h()},l(t){e=m(t,"SPAN",{class:!0,style:!0});var n=d(e);r=j(n,`Connected
    `),a=D(n,"svg",{"aria-label":!0,role:!0,height:!0,viewBox:!0,fill:!0,class:!0});var c=d(a);s=D(c,"path",{"fill-rule":!0,d:!0}),d(s).forEach(i),c.forEach(i),n.forEach(i),this.h()},h(){l(s,"fill-rule","evenodd"),l(s,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),l(a,"aria-label","connected"),l(a,"role","img"),l(a,"height","16"),l(a,"viewBox","0 0 16 16"),l(a,"fill","rgb(26, 127, 55)"),l(a,"class","pl-1"),l(e,"class","text-sm font-semibold"),pt(e,"color","rgb(26, 127, 55)")},m(t,n){w(t,e,n),u(e,r),u(e,a),u(a,s)},d(t){t&&i(e)}}}function Dt(o){let e;function r(t,n){return t[0]?Vt:Bt}let a=r(o),s=a(o);return{c(){s.c(),e=_t()},l(t){s.l(t),e=_t()},m(t,n){s.m(t,n),w(t,e,n)},p(t,[n]){a!==(a=r(t))&&(s.d(1),s=a(t),s&&(s.c(),s.m(e.parentNode,e)))},i:O,o:O,d(t){s.d(t),t&&i(e)}}}function Lt(o,e,r){let a;rt(o,kt,t=>r(1,a=t));let s=!1;return o.$$.update=()=>{o.$$.dirty&2&&r(0,s=a.laser_r!=-1)},[s,a]}class Nt extends et{constructor(e){super();at(this,e,Lt,Dt,st,{})}}function Ct(o){requestAnimationFrame(()=>{o.style.transition="none",o.style.color="rgba(255,62,0,1)",o.style.backgroundColor="rgba(255,62,0,0.2)",setTimeout(()=>{o.style.transition="color 1s, background 1s",o.style.color="",o.style.backgroundColor=""})})}function At(o){let e,r,a,s;return{c(){e=h("div"),r=E(),a=h("span"),s=M("Idle"),this.h()},l(t){e=m(t,"DIV",{class:!0}),d(e).forEach(i),r=x(t),a=m(t,"SPAN",{class:!0});var n=d(a);s=j(n,"Idle"),n.forEach(i),this.h()},h(){l(e,"class","ml-8"),l(a,"class","mx-4")},m(t,n){w(t,e,n),w(t,r,n),w(t,a,n),u(a,s)},p:O,i:O,o:O,d(t){t&&i(e),t&&i(r),t&&i(a)}}}function Mt(o){let e,r,a,s,t,n;return r=new It({}),{c(){e=h("div"),F(r.$$.fragment),a=E(),s=h("span"),t=M(o[0]),this.h()},l(c){e=m(c,"DIV",{class:!0});var f=d(e);H(r.$$.fragment,f),f.forEach(i),a=x(c),s=m(c,"SPAN",{class:!0});var b=d(s);t=j(b,o[0]),b.forEach(i),this.h()},h(){l(e,"class","ml-8"),l(s,"class","mx-4")},m(c,f){w(c,e,f),Q(r,e,null),w(c,a,f),w(c,s,f),u(s,t),n=!0},p(c,f){(!n||f&1)&&Et(t,c[0])},i(c){n||(q(r.$$.fragment,c),n=!0)},o(c){T(r.$$.fragment,c),n=!1},d(c){c&&i(e),Z(r),c&&i(a),c&&i(s)}}}function jt(o){let e,r,a,s,t,n;const c=[Mt,At],f=[];function b(v,_){return v[0]?0:1}return s=b(o),t=f[s]=c[s](o),{c(){e=h("div"),r=h("div"),a=E(),t.c(),this.h()},l(v){e=m(v,"DIV",{class:!0});var _=d(e);r=m(_,"DIV",{class:!0}),d(r).forEach(i),a=x(_),t.l(_),_.forEach(i),this.h()},h(){l(r,"class","absolute w-full h-full ml-4 rounded-lg"),l(e,"class","relative py-2 font-mono font-medium ")},m(v,_){w(v,e,_),u(e,r),o[3](r),u(e,a),f[s].m(e,null),n=!0},p(v,[_]){let N=s;s=b(v),s===N?f[s].p(v,_):($t(),T(f[N],1,1,()=>{f[N]=null}),wt(),t=f[s],t?t.p(v,_):(t=f[s]=c[s](v),t.c()),q(t,1),t.m(e,null))},i(v){n||(q(t),n=!0)},o(v){T(t),n=!1},d(v){v&&i(e),o[3](null),f[s].d()}}}function Tt(o,e,r){let a;rt(o,kt,c=>r(2,a=c));let s="",t;function n(c){yt[c?"unshift":"push"](()=>{t=c,r(1,t)})}return o.$$.update=()=>{o.$$.dirty&7&&a&&s!==a.msg&&(r(0,s=a.msg),Ct(t))},[s,t,a,n]}class qt extends et{constructor(e){super();at(this,e,Tt,jt,st,{})}}function Pt(o){let e,r,a,s,t,n,c,f,b,v,_,N,P,J,C,K,S,k,R,W,$,X,Y,A,y,B,z,U,tt,nt;return b=new St({}),_=new qt({}),C=new Nt({}),{c(){e=h("div"),r=h("div"),a=h("div"),s=h("label"),t=V("svg"),n=V("path"),c=E(),f=h("div"),F(b.$$.fragment),v=E(),F(_.$$.fragment),N=E(),P=h("div"),J=E(),F(C.$$.fragment),K=E(),S=h("div"),k=h("button"),R=M("Manual"),W=E(),$=h("button"),X=M("Automatic"),Y=E(),A=h("div"),y=h("a"),B=V("svg"),z=V("path"),this.h()},l(p){e=m(p,"DIV",{id:!0,class:!0});var I=d(e);r=m(I,"DIV",{class:!0});var g=d(r);a=m(g,"DIV",{class:!0});var ot=d(a);s=m(ot,"LABEL",{for:!0,class:!0});var it=d(s);t=D(it,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var ct=d(t);n=D(ct,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(n).forEach(i),ct.forEach(i),it.forEach(i),ot.forEach(i),c=x(g),f=m(g,"DIV",{class:!0});var ut=d(f);H(b.$$.fragment,ut),ut.forEach(i),v=x(g),H(_.$$.fragment,g),N=x(g),P=m(g,"DIV",{class:!0}),d(P).forEach(i),J=x(g),H(C.$$.fragment,g),K=x(g),S=m(g,"DIV",{class:!0});var G=d(S);k=m(G,"BUTTON",{class:!0});var dt=d(k);R=j(dt,"Manual"),dt.forEach(i),W=x(G),$=m(G,"BUTTON",{class:!0});var ft=d($);X=j(ft,"Automatic"),ft.forEach(i),G.forEach(i),Y=x(g),A=m(g,"DIV",{title:!0,class:!0});var ht=d(A);y=m(ht,"A",{"aria-label":!0,target:!0,href:!0,rel:!0,class:!0});var mt=d(y);B=D(mt,"svg",{xmlns:!0,viewBox:!0,class:!0});var vt=d(B);z=D(vt,"path",{d:!0}),d(z).forEach(i),vt.forEach(i),mt.forEach(i),ht.forEach(i),g.forEach(i),I.forEach(i),this.h()},h(){l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"stroke-width","2"),l(n,"d","M4 6h16M4 12h16M4 18h16"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"fill","none"),l(t,"viewBox","0 0 24 24"),l(t,"class","inline-block w-6 h-6 stroke-current"),l(s,"for","main-menu"),l(s,"class","btn btn-square btn-ghost drawer-button lg:hidden"),l(a,"class","flex-none"),l(f,"class","flex items-center flex-none lg:hidden"),l(P,"class","flex-1"),l(k,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),L(k,"tab-active",o[0].mode==="manual"),L(k,"text-gray-800",o[0].mode==="manual"),l($,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),L($,"tab-active",o[0].mode!=="manual"),L($,"text-gray-800",o[0].mode!=="manual"),l(S,"class","tabs"),l(z,"d","M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"),l(B,"xmlns","http://www.w3.org/2000/svg"),l(B,"viewBox","0 0 512 512"),l(B,"class","inline-block w-6 h-6 fill-current"),l(y,"aria-label","Github"),l(y,"target","_blank"),l(y,"href","https://github.com/saadeghi/daisyui"),l(y,"rel","noopener"),l(y,"class","normal-case btn btn-ghost drawer-button btn-square"),l(A,"title","Github \u2197\uFE0E"),l(A,"class","items-center flex-none pr-4"),l(r,"class","mx-auto space-x-1 navbar max-w-none"),l(e,"id","nav"),l(e,"class","sticky inset-x-0 top-0 z-50 w-full h-16 transition duration-200 ease-in-out bg-white shadow-sm opacity-95 text-base-content ring-1 ring-gray-900 ring-opacity-5")},m(p,I){w(p,e,I),u(e,r),u(r,a),u(a,s),u(s,t),u(t,n),u(r,c),u(r,f),Q(b,f,null),u(r,v),Q(_,r,null),u(r,N),u(r,P),u(r,J),Q(C,r,null),u(r,K),u(r,S),u(S,k),u(k,R),u(S,W),u(S,$),u($,X),u(r,Y),u(r,A),u(A,y),u(y,B),u(B,z),U=!0,tt||(nt=[gt(k,"click",o[1]),gt($,"click",o[2])],tt=!0)},p(p,[I]){I&1&&L(k,"tab-active",p[0].mode==="manual"),I&1&&L(k,"text-gray-800",p[0].mode==="manual"),I&1&&L($,"tab-active",p[0].mode!=="manual"),I&1&&L($,"text-gray-800",p[0].mode!=="manual")},i(p){U||(q(b.$$.fragment,p),q(_.$$.fragment,p),q(C.$$.fragment,p),U=!0)},o(p){T(b.$$.fragment,p),T(_.$$.fragment,p),T(C.$$.fragment,p),U=!1},d(p){p&&i(e),Z(b),Z(_),Z(C),tt=!1,xt(nt)}}}function zt(o,e,r){let a;return rt(o,lt,n=>r(0,a=n)),[a,()=>bt(lt,a.mode="manual",a),()=>bt(lt,a.mode="automatic",a)]}class Ft extends et{constructor(e){super();at(this,e,zt,Pt,st,{})}}export{Ft as default};
