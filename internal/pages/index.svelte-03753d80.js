import{S as q,i as M,s as N,k as B,e as d,m as C,c as m,a as p,d as u,b as x,g as v,H,o as $,p as R,q as b,N as j,n as z,w as g,x as w,y as D,a3 as E,a4 as I,a5 as V,B as S,a6 as k}from"../chunks/vendor-720ad347.js";import{u as A}from"../chunks/store-cd2ed933.js";import"../chunks/takeimage-ae97bd53.js";import F from"./main_manual.svelte-651ebd81.js";import G from"./main_auto.svelte-c66974ae.js";import"../chunks/spinning-782accff.js";import"../chunks/coords-9a57de07.js";import"../chunks/utils-0b1d73e0.js";function J(f){let e,t,i,a,o;return t=new F({}),{c(){e=d("div"),g(t.$$.fragment)},l(r){e=m(r,"DIV",{});var s=p(e);w(t.$$.fragment,s),s.forEach(u)},m(r,s){v(r,e,s),D(t,e,null),o=!0},p(r,s){},i(r){o||(b(t.$$.fragment,r),E(()=>{a&&a.end(1),i=I(e,k,{duration:_,delay:_}),i.start()}),o=!0)},o(r){$(t.$$.fragment,r),i&&i.invalidate(),a=V(e,k,{duration:_}),o=!1},d(r){r&&u(e),S(t),r&&a&&a.end()}}}function K(f){let e,t,i,a,o;return t=new G({}),{c(){e=d("div"),g(t.$$.fragment)},l(r){e=m(r,"DIV",{});var s=p(e);w(t.$$.fragment,s),s.forEach(u)},m(r,s){v(r,e,s),D(t,e,null),o=!0},p(r,s){},i(r){o||(b(t.$$.fragment,r),E(()=>{a&&a.end(1),i=I(e,k,{duration:_,delay:_}),i.start()}),o=!0)},o(r){$(t.$$.fragment,r),i&&i.invalidate(),a=V(e,k,{duration:_}),o=!1},d(r){r&&u(e),S(t),r&&a&&a.end()}}}function L(f){let e,t,i,a,o,r;const s=[K,J],c=[];function h(n,l){return n[0].mode!=="manual"?0:1}return e=h(f),t=c[e]=s[e](f),{c(){t.c(),i=B(),a=d("div"),o=d("div"),this.h()},l(n){t.l(n),i=C(n),a=m(n,"DIV",{class:!0});var l=p(a);o=m(l,"DIV",{class:!0}),p(o).forEach(u),l.forEach(u),this.h()},h(){x(o,"class","self-center w-2/5 mx-auto border-t border-gray-200"),x(a,"class","flex h-36")},m(n,l){c[e].m(n,l),v(n,i,l),v(n,a,l),H(a,o),r=!0},p(n,[l]){let y=e;e=h(n),e===y?c[e].p(n,l):(z(),$(c[y],1,1,()=>{c[y]=null}),R(),t=c[e],t?t.p(n,l):(t=c[e]=s[e](n),t.c()),b(t,1),t.m(i.parentNode,i))},i(n){r||(b(t),r=!0)},o(n){$(t),r=!1},d(n){c[e].d(n),n&&u(i),n&&u(a)}}}const _=150;function O(f,e,t){let i;return j(f,A,a=>t(0,i=a)),[i]}class ee extends q{constructor(e){super();M(this,e,O,L,N,{})}}export{ee as default};
