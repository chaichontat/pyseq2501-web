import{S as ae,i as se,s as re,l as ge,g as A,M as J,d as i,N as le,e as m,t as O,O as y,c as v,a as u,h as U,P as B,b as s,f as be,H as o,k as L,m as V,n as $e,o as z,p as we,q as P,j as ke,Q as xe,w as Q,x as R,y as Z,B as F,R as N,T as _e,U as Ee,V as pe}from"../chunks/vendor-b4247f54.js";import{L as ye}from"../chunks/logo-acc18e53.js";import{l as Be,s as Se,u as te}from"../chunks/store-2be0a284.js";import{f as Ie,S as Le}from"../chunks/spinning-8a0bc7b0.js";function Ve(c){let e,r,t,a;return{c(){e=m("span"),r=O(`Not Connected
    `),t=y("svg"),a=y("path"),this.h()},l(l){e=v(l,"SPAN",{class:!0,style:!0});var n=u(e);r=U(n,`Not Connected
    `),t=B(n,"svg",{role:!0,height:!0,viewBox:!0,version:!0,fill:!0,class:!0});var d=u(t);a=B(d,"path",{"fill-rule":!0,d:!0}),u(a).forEach(i),d.forEach(i),n.forEach(i),this.h()},h(){s(a,"fill-rule","evenodd"),s(a,"d","M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"),s(t,"role","img"),s(t,"height","16"),s(t,"viewBox","0 0 16 16"),s(t,"version","1.1"),s(t,"fill","rgb(207, 34, 46)"),s(t,"class","pl-1"),s(e,"class","mt-1 text-sm font-semibold animate-bounce"),be(e,"color","rgb(207, 34, 46)")},m(l,n){A(l,e,n),o(e,r),o(e,t),o(t,a)},d(l){l&&i(e)}}}function De(c){let e,r,t,a;return{c(){e=m("span"),r=O(`Connected
    `),t=y("svg"),a=y("path"),this.h()},l(l){e=v(l,"SPAN",{class:!0,style:!0});var n=u(e);r=U(n,`Connected
    `),t=B(n,"svg",{"aria-label":!0,role:!0,height:!0,viewBox:!0,fill:!0,class:!0});var d=u(t);a=B(d,"path",{"fill-rule":!0,d:!0}),u(a).forEach(i),d.forEach(i),n.forEach(i),this.h()},h(){s(a,"fill-rule","evenodd"),s(a,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),s(t,"aria-label","connected"),s(t,"role","img"),s(t,"height","16"),s(t,"viewBox","0 0 16 16"),s(t,"fill","rgb(26, 127, 55)"),s(t,"class","pl-1"),s(e,"class","text-sm font-semibold"),be(e,"color","rgb(26, 127, 55)")},m(l,n){A(l,e,n),o(e,r),o(e,t),o(t,a)},d(l){l&&i(e)}}}function Me(c){let e;function r(l,n){return l[0].connected?De:Ve}let t=r(c),a=t(c);return{c(){a.c(),e=ge()},l(l){a.l(l),e=ge()},m(l,n){a.m(l,n),A(l,e,n)},p(l,[n]){t!==(t=r(l))&&(a.d(1),a=t(l),a&&(a.c(),a.m(e.parentNode,e)))},i:J,o:J,d(l){a.d(l),l&&i(e)}}}function Ne(c,e,r){let t;return le(c,Be,a=>r(0,t=a)),[t]}class Ce extends ae{constructor(e){super();se(this,e,Ne,Me,re,{})}}function Ae(c){let e,r,t;return r=new Le({}),{c(){e=m("div"),Q(r.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var l=u(e);R(r.$$.fragment,l),l.forEach(i),this.h()},h(){s(e,"class","w-5 h-5 translate-x-0.5 translate-y-0.5")},m(a,l){A(a,e,l),Z(r,e,null),t=!0},i(a){t||(P(r.$$.fragment,a),t=!0)},o(a){z(r.$$.fragment,a),t=!1},d(a){a&&i(e),F(r)}}}function qe(c){let e,r;return{c(){e=y("svg"),r=y("path"),this.h()},l(t){e=B(t,"svg",{"aria-label":!0,class:!0,role:!0,viewBox:!0,fill:!0});var a=u(e);r=B(a,"path",{"fill-rule":!0,d:!0}),u(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"fill-rule","evenodd"),s(r,"d","M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"),s(e,"aria-label","connected"),s(e,"class","w-5 h-5"),s(e,"role","img"),s(e,"viewBox","0 0 16 16"),s(e,"fill","rgb(26, 127, 55)")},m(t,a){A(t,e,a),o(e,r)},i:J,o:J,d(t){t&&i(e)}}}function Te(c){let e,r,t,a,l,n,d,E,_,D,w;const q=[qe,Ae],k=[];function T(f,g){return g&1&&(l=null),l==null&&(l=f[0].search(ze)==-1),l?0:1}return n=T(c,-1),d=k[n]=q[n](c),{c(){e=m("div"),r=m("div"),t=L(),a=m("div"),d.c(),E=L(),_=m("span"),D=O(c[0]),this.h()},l(f){e=v(f,"DIV",{class:!0});var g=u(e);r=v(g,"DIV",{class:!0}),u(r).forEach(i),t=V(g),a=v(g,"DIV",{class:!0});var p=u(a);d.l(p),p.forEach(i),E=V(g),_=v(g,"SPAN",{class:!0});var b=u(_);D=U(b,c[0]),b.forEach(i),g.forEach(i),this.h()},h(){s(r,"class","absolute w-full h-full ml-4 rounded-lg"),s(a,"class","ml-2"),s(_,"class","mx-1 px-2 py-2 rounded-lg"),s(e,"class","relative py-2 font-mono text-base font-semibold text-gray-800 ")},m(f,g){A(f,e,g),o(e,r),o(e,t),o(e,a),k[n].m(a,null),o(e,E),o(e,_),o(_,D),c[3](_),w=!0},p(f,[g]){let p=n;n=T(f,g),n!==p&&($e(),z(k[p],1,1,()=>{k[p]=null}),we(),d=k[n],d||(d=k[n]=q[n](f),d.c()),P(d,1),d.m(a,null)),(!w||g&1)&&ke(D,f[0])},i(f){w||(P(d),w=!0)},o(f){z(d),w=!1},d(f){f&&i(e),k[n].d(),c[3](null)}}}const ze=/(ing)/;function Pe(c,e,r){let t;le(c,Se,d=>r(2,t=d));let a="Idle",l;function n(d){xe[d?"unshift":"push"](()=>{l=d,r(1,l)})}return c.$$.update=()=>{c.$$.dirty&7&&a!==t.msg&&(r(0,a=t.msg),Ie(l))},[a,l,t,n]}class je extends ae{constructor(e){super();se(this,e,Pe,Te,re,{})}}function Oe(c){let e,r,t,a,l,n,d,E,_,D,w,q,k,T,f,g,p,b,K,W,x,X,Y,C,S,M,j,G,ee,ne;return _=new ye({}),w=new je({}),f=new Ce({}),{c(){e=m("div"),r=m("div"),t=m("div"),a=m("label"),l=y("svg"),n=y("path"),d=L(),E=m("div"),Q(_.$$.fragment),D=L(),Q(w.$$.fragment),q=L(),k=m("div"),T=L(),Q(f.$$.fragment),g=L(),p=m("div"),b=m("button"),K=O("Manual"),W=L(),x=m("button"),X=O("Automatic"),Y=L(),C=m("div"),S=m("a"),M=y("svg"),j=y("path"),this.h()},l(h){e=v(h,"DIV",{id:!0,class:!0});var I=u(e);r=v(I,"DIV",{class:!0});var $=u(r);t=v($,"DIV",{class:!0});var oe=u(t);a=v(oe,"LABEL",{for:!0,class:!0});var ie=u(a);l=B(ie,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var ce=u(l);n=B(ce,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),u(n).forEach(i),ce.forEach(i),ie.forEach(i),oe.forEach(i),d=V($),E=v($,"DIV",{class:!0});var ue=u(E);R(_.$$.fragment,ue),ue.forEach(i),D=V($),R(w.$$.fragment,$),q=V($),k=v($,"DIV",{class:!0}),u(k).forEach(i),T=V($),R(f.$$.fragment,$),g=V($),p=v($,"DIV",{class:!0});var H=u(p);b=v(H,"BUTTON",{class:!0});var de=u(b);K=U(de,"Manual"),de.forEach(i),W=V(H),x=v(H,"BUTTON",{class:!0});var fe=u(x);X=U(fe,"Automatic"),fe.forEach(i),H.forEach(i),Y=V($),C=v($,"DIV",{title:!0,class:!0});var he=u(C);S=v(he,"A",{target:!0,href:!0,rel:!0,class:!0});var me=u(S);M=B(me,"svg",{xmlns:!0,viewBox:!0,class:!0});var ve=u(M);j=B(ve,"path",{d:!0}),u(j).forEach(i),ve.forEach(i),me.forEach(i),he.forEach(i),$.forEach(i),I.forEach(i),this.h()},h(){s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"stroke-width","2"),s(n,"d","M4 6h16M4 12h16M4 18h16"),s(l,"xmlns","http://www.w3.org/2000/svg"),s(l,"fill","none"),s(l,"viewBox","0 0 24 24"),s(l,"class","inline-block w-6 h-6 stroke-current"),s(a,"for","main-menu"),s(a,"class","btn btn-square btn-ghost drawer-button lg:hidden"),s(t,"class","flex-none"),s(E,"class","flex items-center flex-none lg:hidden"),s(k,"class","flex-grow"),s(b,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),N(b,"tab-active",c[0].mode==="manual"),N(b,"text-gray-800",c[0].mode==="manual"),s(x,"class","font-medium transition-colors h-14 tab tab-lg tab-bordered"),N(x,"tab-active",c[0].mode!=="manual"),N(x,"text-gray-800",c[0].mode!=="manual"),s(p,"class","tabs"),s(j,"d","M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"),s(M,"xmlns","http://www.w3.org/2000/svg"),s(M,"viewBox","0 0 512 512"),s(M,"class","inline-block w-6 h-6 fill-current"),s(S,"target","_blank"),s(S,"href","https://github.com/chaichontat/pyseq2501-web"),s(S,"rel","noopener"),s(S,"class","normal-case btn btn-ghost drawer-button btn-square"),s(C,"title","Github \u2197\uFE0E"),s(C,"class","items-center flex-none pr-4"),s(r,"class","mx-auto space-x-1 navbar max-w-none"),s(e,"id","nav"),s(e,"class","sticky inset-x-0 top-0 z-50 w-full h-16 transition duration-200 ease-in-out bg-white shadow-sm opacity-95 text-base-content ring-1 ring-gray-900 ring-opacity-5")},m(h,I){A(h,e,I),o(e,r),o(r,t),o(t,a),o(a,l),o(l,n),o(r,d),o(r,E),Z(_,E,null),o(r,D),Z(w,r,null),o(r,q),o(r,k),o(r,T),Z(f,r,null),o(r,g),o(r,p),o(p,b),o(b,K),o(p,W),o(p,x),o(x,X),o(r,Y),o(r,C),o(C,S),o(S,M),o(M,j),G=!0,ee||(ne=[_e(b,"click",c[1]),_e(x,"click",c[2])],ee=!0)},p(h,[I]){I&1&&N(b,"tab-active",h[0].mode==="manual"),I&1&&N(b,"text-gray-800",h[0].mode==="manual"),I&1&&N(x,"tab-active",h[0].mode!=="manual"),I&1&&N(x,"text-gray-800",h[0].mode!=="manual")},i(h){G||(P(_.$$.fragment,h),P(w.$$.fragment,h),P(f.$$.fragment,h),G=!0)},o(h){z(_.$$.fragment,h),z(w.$$.fragment,h),z(f.$$.fragment,h),G=!1},d(h){h&&i(e),F(_),F(w),F(f),ee=!1,Ee(ne)}}}function Ue(c,e,r){let t;return le(c,te,n=>r(0,t=n)),[t,()=>pe(te,t.mode="manual",t),()=>pe(te,t.mode="automatic",t)]}class Ze extends ae{constructor(e){super();se(this,e,Ue,Oe,re,{})}}export{Ze as default};
