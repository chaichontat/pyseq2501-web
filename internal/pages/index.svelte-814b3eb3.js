import{S as B,i as C,s as H,M as O,N as P,e as _,k as y,w as I,c as v,a as h,m as x,x as E,d as b,b as p,g as R,H as c,y as N,O as T,q as D,o as M,B as S}from"../chunks/vendor-64680ed2.js";import U from"./main.svelte-37aa8762.js";import z from"./nav.svelte-de703f4b.js";import F from"./sidebar.svelte-e2821370.js";import"../chunks/store-e16d9f55.js";import"../chunks/spinning-1a8cb980.js";function G(f){let s,a,t,$,n,r,w,k,u,o,j,l,g;function A(e){f[1](e)}let V={};return f[0]!==void 0&&(V.tab=f[0]),r=new z({props:V}),O.push(()=>P(r,"tab",A)),o=new U({props:{tab:f[0]}}),l=new F({}),{c(){s=_("div"),a=_("div"),t=_("input"),$=y(),n=_("main"),I(r.$$.fragment),k=y(),u=_("div"),I(o.$$.fragment),j=y(),I(l.$$.fragment),this.h()},l(e){s=v(e,"DIV",{});var d=h(s);a=v(d,"DIV",{class:!0});var i=h(a);t=v(i,"INPUT",{id:!0,type:!0,class:!0}),$=x(i),n=v(i,"MAIN",{class:!0});var m=h(n);E(r.$$.fragment,m),k=x(m),u=v(m,"DIV",{class:!0});var q=h(u);E(o.$$.fragment,q),q.forEach(b),m.forEach(b),j=x(i),E(l.$$.fragment,i),i.forEach(b),d.forEach(b),this.h()},h(){p(t,"id","main-menu"),p(t,"type","checkbox"),p(t,"class","drawer-toggle"),p(u,"class","p-4 lg:px-10"),p(n,"class","flex-grow block overflow-x-hidden bg-white shadow-md text-base-content drawer-content"),p(a,"class","antialiased drawer drawer-mobile")},m(e,d){R(e,s,d),c(s,a),c(a,t),c(a,$),c(a,n),N(r,n,null),c(n,k),c(n,u),N(o,u,null),c(a,j),N(l,a,null),g=!0},p(e,[d]){const i={};!w&&d&1&&(w=!0,i.tab=e[0],T(()=>w=!1)),r.$set(i);const m={};d&1&&(m.tab=e[0]),o.$set(m)},i(e){g||(D(r.$$.fragment,e),D(o.$$.fragment,e),D(l.$$.fragment,e),g=!0)},o(e){M(r.$$.fragment,e),M(o.$$.fragment,e),M(l.$$.fragment,e),g=!1},d(e){e&&b(s),S(r),S(o),S(l)}}}function J(f,s,a){let t="automatic";function $(n){t=n,a(0,t)}return[t,$]}class Z extends B{constructor(s){super();C(this,s,J,G,H,{})}}export{Z as default};
