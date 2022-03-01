import{S as ot,i as rt,s as it,e as _,c as d,a as v,d as r,b as n,a0 as nl,g as L,V as G,n as vs,o as ie,p as hs,q as se,_ as bs,F as zs,I as Is,J as Ps,K as ws,w as Oe,x as Te,y as Se,M as Ns,B as Ce,t as k,h as E,k as N,O as nt,m as O,P as at,U as A,H as s,a1 as q,Q as ge,$ as J,W as Ht,N as Ge,X as Ie,j as de,T as et,Y as lt,Z as tt}from"./vendor-9417e0b8.js";import{r as Os}from"./preview.svelte_svelte_type_style_lang-df4526fd.js";import{s as st,u as al,c as ol}from"./store-7e8ca866.js";import{S as Ts,c as We,t as qt,a as Ss}from"./tooltip-d1460923.js";function Cs(e){let l,t;const o=e[7].default,p=zs(o,e,e[6],null),f=p||As();return{c(){l=_("div"),f&&f.c(),this.h()},l(u){l=d(u,"DIV",{class:!0});var a=v(l);f&&f.l(a),a.forEach(r),this.h()},h(){n(l,"class","mx-auto")},m(u,a){L(u,l,a),f&&f.m(l,null),t=!0},p(u,a){p&&p.p&&(!t||a&64)&&Is(p,o,u,u[6],t?ws(o,u[6],a,null):Ps(u[6]),null)},i(u){t||(se(f,u),t=!0)},o(u){ie(f,u),t=!1},d(u){u&&r(l),f&&f.d(u)}}}function Ds(e){let l,t,o;return t=new Ts({props:{color:"black"}}),{c(){l=_("div"),Oe(t.$$.fragment),this.h()},l(p){l=d(p,"DIV",{class:!0});var f=v(l);Te(t.$$.fragment,f),f.forEach(r),this.h()},h(){n(l,"class","mx-auto opacity-40")},m(p,f){L(p,l,f),Se(t,l,null),o=!0},p:Ns,i(p){o||(se(t.$$.fragment,p),o=!0)},o(p){ie(t.$$.fragment,p),o=!1},d(p){p&&r(l),Ce(t)}}}function As(e){let l;return{c(){l=k("Go")},l(t){l=E(t,"Go")},m(t,o){L(t,l,o)},d(t){t&&r(l)}}}function Vs(e){let l,t,o,p,f,u,a;const b=[Ds,Cs],g=[];function V(m,h){return m[1]?0:1}return t=V(e),o=g[t]=b[t](e),{c(){l=_("button"),o.c(),this.h()},l(m){l=d(m,"BUTTON",{type:!0,class:!0,tabindex:!0});var h=v(l);o.l(h),h.forEach(r),this.h()},h(){n(l,"type","button"),n(l,"class",p=nl(`px-4 py-1 text-sm font-semibold rounded-lg white-button ${e[5][e[2]]} disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:active:bg-gray-50 disabled:text-gray-500 ${e[3]}`)+" svelte-1rnzpdo"),n(l,"tabindex","0"),l.disabled=e[0]},m(m,h){L(m,l,h),g[t].m(l,null),f=!0,u||(a=G(l,"click",e[8]),u=!0)},p(m,[h]){let I=t;t=V(m),t===I?g[t].p(m,h):(vs(),ie(g[I],1,1,()=>{g[I]=null}),hs(),o=g[t],o?o.p(m,h):(o=g[t]=b[t](m),o.c()),se(o,1),o.m(l,null)),(!f||h&12&&p!==(p=nl(`px-4 py-1 text-sm font-semibold rounded-lg white-button ${m[5][m[2]]} disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:active:bg-gray-50 disabled:text-gray-500 ${m[3]}`)+" svelte-1rnzpdo"))&&n(l,"class",p),(!f||h&1)&&(l.disabled=m[0])},i(m){f||(se(o),f=!0)},o(m){ie(o),f=!1},d(m){m&&r(l),g[t].d(),u=!1,a()}}}function Ms(e,l,t){let{$$slots:o={},$$scope:p}=l,{disabled:f=!1}=l,{spin:u=!1}=l,{color:a="indigo"}=l,{cl:b=""}=l;const g=bs(),V={blue:"text-blue-800 border-blue-300 hover:bg-blue-100 active:bg-blue-200 bg-blue-50",indigo:"text-indigo-800 border-indigo-300 hover:bg-indigo-100 active:bg-indigo-200 bg-indigo-50",green:"text-green-800 border-green-300 hover:bg-green-100 active:bg-green-200 bg-green-50",sky:"text-sky-800 border-sky-300 hover:bg-sky-100 active:bg-sky-200 bg-sky-50"},m=()=>g("click");return e.$$set=h=>{"disabled"in h&&t(0,f=h.disabled),"spin"in h&&t(1,u=h.spin),"color"in h&&t(2,a=h.color),"cl"in h&&t(3,b=h.cl),"$$scope"in h&&t(6,p=h.$$scope)},[f,u,a,b,g,V,p,o,m]}class Cl extends ot{constructor(l){super();rt(this,l,Ms,Vs,it,{disabled:0,spin:1,color:2,cl:3})}}function Us(e){let l,t,o,p,f,u,a,b,g,V,m,h,I,B,P,D,i,y,w,F,H;return I=new Cl({props:{disabled:e[3]}}),I.$on("click",e[11]),{c(){l=_("div"),t=_("div"),o=_("span"),p=k("X"),f=N(),u=_("input"),a=N(),b=_("span"),g=k("Y"),V=N(),m=_("input"),h=N(),Oe(I.$$.fragment),B=N(),P=_("button"),D=nt("svg"),i=nt("path"),y=k(`
    Current`),this.h()},l(S){l=d(S,"DIV",{class:!0});var M=v(l);t=d(M,"DIV",{class:!0});var j=v(t);o=d(j,"SPAN",{class:!0});var Z=v(o);p=E(Z,"X"),Z.forEach(r),f=O(j),u=d(j,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),a=O(j),b=d(j,"SPAN",{class:!0});var X=v(b);g=E(X,"Y"),X.forEach(r),V=O(j),m=d(j,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),j.forEach(r),h=O(M),Te(I.$$.fragment,M),B=O(M),P=d(M,"BUTTON",{type:!0,class:!0});var K=v(P);D=at(K,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var T=v(D);i=at(T,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(i).forEach(r),T.forEach(r),y=E(K,`
    Current`),K.forEach(r),M.forEach(r),this.h()},h(){n(o,"class","flex items-center border-l rounded-l-lg color-group svelte-awp8a4"),A(o,"span-disabled",e[2].block),n(u,"type","number"),n(u,"min","-5"),n(u,"max","30"),n(u,"step","0.01"),n(u,"class","z-10 h-10 text-center rounded-none pretty w-28"),u.disabled=e[3],n(b,"class","flex items-center color-group svelte-awp8a4"),A(b,"span-disabled",e[2].block),n(m,"type","number"),n(m,"min","-5"),n(m,"max","80"),n(m,"step","0.01"),n(m,"class","z-10 h-10 text-center rounded-l-none rounded-r-lg pretty w-28"),m.disabled=e[3],n(t,"class","flex font-medium"),n(i,"stroke-linecap","round"),n(i,"stroke-linejoin","round"),n(i,"stroke-width","2"),n(i,"d","M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"),n(D,"xmlns","http://www.w3.org/2000/svg"),n(D,"class","w-5 h-5 mr-1"),n(D,"fill","none"),n(D,"viewBox","0 0 24 24"),n(D,"stroke","currentColor"),n(P,"type","button"),n(P,"class","px-4 py-1 text-sm font-medium text-gray-900 rounded-lg white-button disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:active:bg-gray-50 disabled:text-gray-500"),P.disabled=e[3],n(l,"class","flex gap-x-2")},m(S,M){L(S,l,M),s(l,t),s(t,o),s(o,p),s(t,f),s(t,u),q(u,e[0][0]),s(t,a),s(t,b),s(b,g),s(t,V),s(t,m),q(m,e[0][1]),s(l,h),Se(I,l,null),s(l,B),s(l,P),s(P,D),s(D,i),s(P,y),w=!0,F||(H=[G(u,"input",e[7]),G(u,"change",e[8]),ge(We.call(null,u,[-5,30])),G(m,"input",e[9]),G(m,"change",e[10]),ge(We.call(null,m,[-5,80])),G(P,"click",e[6])],F=!0)},p(S,[M]){M&4&&A(o,"span-disabled",S[2].block),(!w||M&8)&&(u.disabled=S[3]),M&1&&J(u.value)!==S[0][0]&&q(u,S[0][0]),M&4&&A(b,"span-disabled",S[2].block),(!w||M&8)&&(m.disabled=S[3]),M&1&&J(m.value)!==S[0][1]&&q(m,S[0][1]);const j={};M&8&&(j.disabled=S[3]),I.$set(j),(!w||M&8)&&(P.disabled=S[3])},i(S){w||(se(I.$$.fragment,S),w=!0)},o(S){ie(I.$$.fragment,S),w=!1},d(S){S&&r(l),Ce(I),F=!1,Ht(H)}}}function Bs(e,l,t){let o,p,f,u;Ge(e,st,i=>t(2,o=i)),Ge(e,st,i=>t(12,p=i)),Ge(e,al,i=>t(13,f=i)),Ge(e,ol,i=>t(4,u=i));const a=bs();let{i:b}=l,{xy:g=[-1,-1]}=l;function V(){const{x:i,y}=Os(f.image_params.fc,p.x,p.y);t(0,g[0]=Math.round((i+Number.EPSILON)*100)/100,g),t(0,g[1]=Math.round((y+Number.EPSILON)*100)/100,g)}let m=!1;function h(){g[0]=J(this.value),t(0,g)}const I=()=>a("change");function B(){g[1]=J(this.value),t(0,g)}const P=()=>a("change"),D=()=>{Ie(st,o.block="moving",o),Ie(ol,u={move:b===0?{xy0:g}:{xy1:g}},u)};return e.$$set=i=>{"i"in i&&t(1,b=i.i),"xy"in i&&t(0,g=i.xy)},e.$$.update=()=>{e.$$.dirty&4&&t(3,m=Boolean(o.block))},[g,b,o,m,u,a,V,h,I,B,P,D]}class us extends ot{constructor(l){super();rt(this,l,Bs,Us,it,{i:1,xy:0})}}function js(e){let l;return{c(){l=k("Set")},l(t){l=E(t,"Set")},m(t,o){L(t,l,o)},d(t){t&&r(l)}}}function Ls(e){let l,t,o,p,f,u,a,b,g,V,m,h,I,B,P,D;return{c(){l=_("option"),t=k("Open"),o=_("option"),p=k("0.2"),f=_("option"),u=k("0.5"),a=_("option"),b=k("0.6"),g=_("option"),V=k("1.0"),m=_("option"),h=k("2.4"),I=_("option"),B=k("4.0"),P=_("option"),D=k("Closed"),this.h()},l(i){l=d(i,"OPTION",{});var y=v(l);t=E(y,"Open"),y.forEach(r),o=d(i,"OPTION",{});var w=v(o);p=E(w,"0.2"),w.forEach(r),f=d(i,"OPTION",{});var F=v(f);u=E(F,"0.5"),F.forEach(r),a=d(i,"OPTION",{});var H=v(a);b=E(H,"0.6"),H.forEach(r),g=d(i,"OPTION",{});var S=v(g);V=E(S,"1.0"),S.forEach(r),m=d(i,"OPTION",{});var M=v(m);h=E(M,"2.4"),M.forEach(r),I=d(i,"OPTION",{});var j=v(I);B=E(j,"4.0"),j.forEach(r),P=d(i,"OPTION",{});var Z=v(P);D=E(Z,"Closed"),Z.forEach(r),this.h()},h(){l.__value="Open",l.value=l.__value,o.__value="0.2",o.value=o.__value,f.__value="0.5",f.value=f.__value,a.__value="0.6",a.value=a.__value,g.__value="1.0",g.value=g.__value,m.__value="2.4",m.value=m.__value,I.__value="4.0",I.value=I.__value,P.__value="Closed",P.value=P.__value},m(i,y){L(i,l,y),s(l,t),L(i,o,y),s(o,p),L(i,f,y),s(f,u),L(i,a,y),s(a,b),L(i,g,y),s(g,V),L(i,m,y),s(m,h),L(i,I,y),s(I,B),L(i,P,y),s(P,D)},d(i){i&&r(l),i&&r(o),i&&r(f),i&&r(a),i&&r(g),i&&r(m),i&&r(I),i&&r(P)}}}function Fs(e){let l,t,o,p,f,u,a,b,g,V,m,h,I,B,P,D;return{c(){l=_("option"),t=k("Open"),o=_("option"),p=k("1.0"),f=_("option"),u=k("2.0"),a=_("option"),b=k("3.5"),g=_("option"),V=k("3.8"),m=_("option"),h=k("4.0"),I=_("option"),B=k("4.5"),P=_("option"),D=k("Closed"),this.h()},l(i){l=d(i,"OPTION",{});var y=v(l);t=E(y,"Open"),y.forEach(r),o=d(i,"OPTION",{});var w=v(o);p=E(w,"1.0"),w.forEach(r),f=d(i,"OPTION",{});var F=v(f);u=E(F,"2.0"),F.forEach(r),a=d(i,"OPTION",{});var H=v(a);b=E(H,"3.5"),H.forEach(r),g=d(i,"OPTION",{});var S=v(g);V=E(S,"3.8"),S.forEach(r),m=d(i,"OPTION",{});var M=v(m);h=E(M,"4.0"),M.forEach(r),I=d(i,"OPTION",{});var j=v(I);B=E(j,"4.5"),j.forEach(r),P=d(i,"OPTION",{});var Z=v(P);D=E(Z,"Closed"),Z.forEach(r),this.h()},h(){l.__value="Open",l.value=l.__value,o.__value="1.0",o.value=o.__value,f.__value="2.0",f.value=f.__value,a.__value="3.5",a.value=a.__value,g.__value="3.8",g.value=g.__value,m.__value="4.0",m.value=m.__value,I.__value="4.5",I.value=I.__value,P.__value="Closed",P.value=P.__value},m(i,y){L(i,l,y),s(l,t),L(i,o,y),s(o,p),L(i,f,y),s(f,u),L(i,a,y),s(a,b),L(i,g,y),s(g,V),L(i,m,y),s(m,h),L(i,I,y),s(I,B),L(i,P,y),s(P,D)},d(i){i&&r(l),i&&r(o),i&&r(f),i&&r(a),i&&r(g),i&&r(m),i&&r(I),i&&r(P)}}}function Zs(e){let l,t,o,p,f,u,a,b=(Boolean(e[1])?660:532)+"",g,V,m,h,I,B,P,D,i,y,w,F,H=2*e[1]+"",S,M,j,Z,X,K,T=2*e[1]+1+"",Pe,ye,W,rl,pe,ke,ne,il,De=(Number(e[0].od[e[1]]!=-1)*e[0].lasers[e[1]]*Math.pow(10,-e[0].od[e[1]])).toFixed(4)+"",ae,ul,ee,ce,Ee;P=new Cl({props:{$$slots:{default:[js]},$$scope:{ctx:e}}}),P.$on("click",e[7]);function Ae(z,U){return z[1]==0?Fs:Ls}let Ye=Ae(e),ue=Ye(e);return{c(){l=_("p"),t=_("span"),o=_("label"),p=_("input"),u=N(),a=_("div"),g=k(b),V=k(" nm"),m=N(),h=_("input"),B=k(`
    mW
    `),Oe(P.$$.fragment),D=N(),i=_("label"),y=_("input"),F=k(`
    Channel `),S=k(H),M=N(),j=_("label"),Z=_("input"),K=k(`
    Channel `),Pe=k(T),ye=N(),W=_("span"),rl=k(`Filter OD
    `),pe=_("select"),ue.c(),ke=N(),ne=_("p"),il=k("Effective: "),ae=k(De),ul=k(" mW"),this.h()},l(z){l=d(z,"P",{class:!0});var U=v(l);t=d(U,"SPAN",{class:!0});var fe=v(t);o=d(fe,"LABEL",{});var oe=v(o);p=d(oe,"INPUT",{type:!0,class:!0}),u=O(oe),a=d(oe,"DIV",{class:!0});var _e=v(a);g=E(_e,b),V=E(_e," nm"),_e.forEach(r),oe.forEach(r),m=O(fe),h=d(fe,"INPUT",{type:!0,class:!0,min:!0,max:!0}),B=E(fe,`
    mW
    `),Te(P.$$.fragment,fe),fe.forEach(r),D=O(U),i=d(U,"LABEL",{class:!0});var we=v(i);y=d(we,"INPUT",{type:!0,class:!0}),F=E(we,`
    Channel `),S=E(we,H),we.forEach(r),M=O(U),j=d(U,"LABEL",{class:!0});var Ve=v(j);Z=d(Ve,"INPUT",{type:!0,class:!0}),K=E(Ve,`
    Channel `),Pe=E(Ve,T),Ve.forEach(r),ye=O(U),W=d(U,"SPAN",{class:!0});var Me=v(W);rl=E(Me,`Filter OD
    `),pe=d(Me,"SELECT",{class:!0});var Je=v(pe);ue.l(Je),Je.forEach(r),ke=O(Me),ne=d(Me,"P",{class:!0});var Ue=v(ne);il=E(Ue,"Effective: "),ae=E(Ue,De),ul=E(Ue," mW"),Ue.forEach(r),Me.forEach(r),U.forEach(r),this.h()},h(){n(p,"type","checkbox"),n(p,"class",f=nl(`rounded mr-1 ${e[1]?"text-red-600 rounded focus:ring-red-300":"text-lime-500 focus:ring-lime-300"}`)+" svelte-6ipz4o"),n(a,"class","inline font-semibold"),A(a,"text-green-800",e[0].laser_onoff[e[1]]&&!e[1]),A(a,"text-red-800",e[0].laser_onoff[e[1]]&&e[1]),n(h,"type","number"),n(h,"class","w-20 h-8 pretty"),n(h,"min","0"),n(h,"max","500"),h.disabled=I=!e[0].laser_onoff[e[1]],A(h,"pretty-disabled",!e[0].laser_onoff[0]),n(t,"class","flex items-center gap-x-2"),A(t,"text-gray-400",!e[0].laser_onoff[e[1]]),n(y,"type","checkbox"),n(y,"class",w=nl(`mr-1 rounded ${e[1]?"text-rose-700 focus:ring-rose-500":"text-green-500 focus:ring-green-300"}`)+" svelte-6ipz4o"),n(i,"class","rounded-lg channel ring-red-500 svelte-6ipz4o"),A(i,"text-gray-400",!e[0].channels[2*e[1]]),n(Z,"type","checkbox"),n(Z,"class",X=nl(`mr-1 rounded ${e[1]?"text-amber-900 focus:ring-amber-700":"text-orange-600 rounded focus:ring-orange-300"}`)+" svelte-6ipz4o"),n(j,"class","channel svelte-6ipz4o"),A(j,"text-gray-400",!e[0].channels[2*e[1]+1]),n(pe,"class","py-1 text-sm border-gray-400 rounded-lg disabled:border-gray-300"),n(ne,"class","ml-3 text-sm font-medium"),n(W,"class","ml-8 font-normal opacity-85"),n(l,"class","flex flex-col")},m(z,U){L(z,l,U),s(l,t),s(t,o),s(o,p),p.checked=e[0].laser_onoff[e[1]],s(o,u),s(o,a),s(a,g),s(a,V),s(t,m),s(t,h),q(h,e[0].lasers[e[1]]),s(t,B),Se(P,t,null),s(l,D),s(l,i),s(i,y),y.checked=e[0].channels[2*e[1]],s(i,F),s(i,S),s(l,M),s(l,j),s(j,Z),Z.checked=e[0].channels[2*e[1]+1],s(j,K),s(j,Pe),s(l,ye),s(l,W),s(W,rl),s(W,pe),ue.m(pe,null),s(W,ke),s(W,ne),s(ne,il),s(ne,ae),s(ne,ul),ee=!0,ce||(Ee=[G(p,"change",e[5]),G(h,"input",e[6]),ge(We.call(null,h,[0,500])),G(y,"change",e[8]),G(Z,"change",e[9]),G(pe,"change",e[4])],ce=!0)},p(z,[U]){(!ee||U&2&&f!==(f=nl(`rounded mr-1 ${z[1]?"text-red-600 rounded focus:ring-red-300":"text-lime-500 focus:ring-lime-300"}`)+" svelte-6ipz4o"))&&n(p,"class",f),U&3&&(p.checked=z[0].laser_onoff[z[1]]),(!ee||U&2)&&b!==(b=(Boolean(z[1])?660:532)+"")&&de(g,b),U&3&&A(a,"text-green-800",z[0].laser_onoff[z[1]]&&!z[1]),U&3&&A(a,"text-red-800",z[0].laser_onoff[z[1]]&&z[1]),(!ee||U&3&&I!==(I=!z[0].laser_onoff[z[1]]))&&(h.disabled=I),U&3&&J(h.value)!==z[0].lasers[z[1]]&&q(h,z[0].lasers[z[1]]),U&1&&A(h,"pretty-disabled",!z[0].laser_onoff[0]);const fe={};U&1024&&(fe.$$scope={dirty:U,ctx:z}),P.$set(fe),U&3&&A(t,"text-gray-400",!z[0].laser_onoff[z[1]]),(!ee||U&2&&w!==(w=nl(`mr-1 rounded ${z[1]?"text-rose-700 focus:ring-rose-500":"text-green-500 focus:ring-green-300"}`)+" svelte-6ipz4o"))&&n(y,"class",w),U&3&&(y.checked=z[0].channels[2*z[1]]),(!ee||U&2)&&H!==(H=2*z[1]+"")&&de(S,H),U&3&&A(i,"text-gray-400",!z[0].channels[2*z[1]]),(!ee||U&2&&X!==(X=nl(`mr-1 rounded ${z[1]?"text-amber-900 focus:ring-amber-700":"text-orange-600 rounded focus:ring-orange-300"}`)+" svelte-6ipz4o"))&&n(Z,"class",X),U&3&&(Z.checked=z[0].channels[2*z[1]+1]),(!ee||U&2)&&T!==(T=2*z[1]+1+"")&&de(Pe,T),U&3&&A(j,"text-gray-400",!z[0].channels[2*z[1]+1]),Ye!==(Ye=Ae(z))&&(ue.d(1),ue=Ye(z),ue&&(ue.c(),ue.m(pe,null))),(!ee||U&3)&&De!==(De=(Number(z[0].od[z[1]]!=-1)*z[0].lasers[z[1]]*Math.pow(10,-z[0].od[z[1]])).toFixed(4)+"")&&de(ae,De)},i(z){ee||(se(P.$$.fragment,z),ee=!0)},o(z){ie(P.$$.fragment,z),ee=!1},d(z){z&&r(l),Ce(P),ue.d(),ce=!1,Ht(Ee)}}}function qs(e,l,t){let o,p;Ge(e,ol,I=>t(2,o=I)),Ge(e,al,I=>t(3,p=I));let{params:f}=l,{i:u}=l;function a(I){let B;switch(I.currentTarget.value){case"Open":B=0;break;case"Closed":B=-1;break;default:B=Number(I.currentTarget.value)}t(0,f.od[u]=B,f),Ie(al,p.image_params.od[u]=f.od[u],p),Ie(ol,o={move:{od:u===0?[f.od[u],void 0]:[void 0,f.od[u]]}},o)}function b(){f.laser_onoff[u]=this.checked,t(0,f)}function g(){f.lasers[u]=J(this.value),t(0,f)}const V=()=>{Ie(al,p.image_params.laser_onoff[u]=f.laser_onoff[u],p),Ie(al,p.image_params.lasers[u]=f.lasers[u],p),Ie(ol,o={move:{lasers:u===0?[f.lasers[u],void 0]:[void 0,f.lasers[u]],laser_onoff:u===0?[f.laser_onoff[u],void 0]:[void 0,f.laser_onoff[u]]}},o)};function m(){f.channels[2*u]=this.checked,t(0,f)}function h(){f.channels[2*u+1]=this.checked,t(0,f)}return e.$$set=I=>{"params"in I&&t(0,f=I.params),"i"in I&&t(1,u=I.i)},[f,u,o,p,a,b,g,V,m,h]}class fs extends ot{constructor(l){super();rt(this,l,qs,Zs,it,{params:0,i:1})}}function _s(e){let l,t;return l=new Cl({props:{color:"sky",cl:"text-lg font-semibold shadow-md shadow-sky-700/10 h-12",$$slots:{default:[Hs]},$$scope:{ctx:e}}}),{c(){Oe(l.$$.fragment)},l(o){Te(l.$$.fragment,o)},m(o,p){Se(l,o,p),t=!0},i(o){t||(se(l.$$.fragment,o),t=!0)},o(o){ie(l.$$.fragment,o),t=!1},d(o){Ce(l,o)}}}function Hs(e){let l;return{c(){l=k("Preview")},l(t){l=E(t,"Preview")},m(t,o){L(t,l,o)},d(t){t&&r(l)}}}function ds(e){let l,t,o,p,f,u;return{c(){l=_("p"),t=k("Image Path"),o=N(),p=_("input"),this.h()},l(a){l=d(a,"P",{class:!0});var b=v(l);t=E(b,"Image Path"),b.forEach(r),o=O(a),p=d(a,"INPUT",{type:!0,class:!0}),this.h()},h(){n(l,"class","text-lg svelte-1m4l8fo"),n(p,"type","text"),n(p,"class","max-w-md mb-4 pretty"),A(p,"invalid",!e[0].path)},m(a,b){L(a,l,b),s(l,t),L(a,o,b),L(a,p,b),q(p,e[0].path),f||(u=G(p,"input",e[10]),f=!0)},p(a,b){b&1&&p.value!==a[0].path&&q(p,a[0].path),b&1&&A(p,"invalid",!a[0].path)},d(a){a&&r(l),a&&r(o),a&&r(p),f=!1,u()}}}function ps(e){let l;return{c(){l=k("per z-stack.")},l(t){l=E(t,"per z-stack.")},m(t,o){L(t,l,o)},d(t){t&&r(l)}}}function cs(e){let l,t=e[1].n_z+"",o,p,f,u=e[0].z_obj+e[0].z_from*e[0].z_spacing+"",a,b,g=e[0].z_obj+e[0].z_to*e[0].z_spacing+"",V,m,h,I,B=(e[1].n_z?El(e[1].n_z*e[1].time):El(e[1].time))+"",P,D,i=e[1].n_z>1&&ms();return{c(){l=_("div"),o=k(t),p=k(" Z step"),i&&i.c(),f=k(" from "),a=k(u),b=k(" to "),V=k(g),m=N(),h=_("div"),I=k("Total time: "),P=k(B),D=k("."),this.h()},l(y){l=d(y,"DIV",{class:!0});var w=v(l);o=E(w,t),p=E(w," Z step"),i&&i.l(w),f=E(w," from "),a=E(w,u),b=E(w," to "),V=E(w,g),w.forEach(r),m=O(y),h=d(y,"DIV",{class:!0});var F=v(h);I=E(F,"Total time: "),P=E(F,B),D=E(F,"."),F.forEach(r),this.h()},h(){n(l,"class","px-2 font-base"),n(h,"class","px-2 font-semibold")},m(y,w){L(y,l,w),s(l,o),s(l,p),i&&i.m(l,null),s(l,f),s(l,a),s(l,b),s(l,V),L(y,m,w),L(y,h,w),s(h,I),s(h,P),s(h,D)},p(y,w){w&2&&t!==(t=y[1].n_z+"")&&de(o,t),y[1].n_z>1?i||(i=ms(),i.c(),i.m(l,f)):i&&(i.d(1),i=null),w&1&&u!==(u=y[0].z_obj+y[0].z_from*y[0].z_spacing+"")&&de(a,u),w&1&&g!==(g=y[0].z_obj+y[0].z_to*y[0].z_spacing+"")&&de(V,g),w&2&&B!==(B=(y[1].n_z?El(y[1].n_z*y[1].time):El(y[1].time))+"")&&de(P,B)},d(y){y&&r(l),i&&i.d(),y&&r(m),y&&r(h)}}}function ms(e){let l;return{c(){l=k("s")},l(t){l=E(t,"s")},m(t,o){L(t,l,o)},d(t){t&&r(l)}}}function Xs(e){let l,t,o,p,f,u,a,b,g,V,m,h,I,B,P,D,i,y,w,F,H,S,M,j,Z,X,K,T,Pe,ye,W,rl,pe,ke,ne,il,De,ae,ul,ee,ce,Ee,Ae,Ye,ue,z,U,fe,oe,_e,we=e[1].width.toFixed(2)+"",Ve,Me,Je=e[1].height.toFixed(2)+"",Ue,ut,ft,Be,zl=e[1].n_cols+"",Dl,_t,Il=e[1].n_bundles+"",Al,dt,pt,ze,Pl=El(e[1].time)+"",Vl,ct,mt,Ke,ml,vt,ht,Qe,Re,fl,vl,bt,gt,$e,me,yt,xe,kt,_l,hl,Et,zt,Ne,ve,It,el,Pt,je,Le,dl,wt,wl,Nt,Ot,ll,tl,sl,Tt,Fe,bl,St,Ct,Dt,Q,Ze,At,Vt,R,Ml,Mt,qe,Ut,Bt,$,Ul,jt,He,Lt,Ft,x,Bl,he,Zt,Xt,Y=e[3]&&_s(e),le=!e[3]&&ds(e);function gs(c){e[11](c)}let Wt={i:0};e[0]!==void 0&&(Wt.params=e[0]),D=new fs({props:Wt}),et.push(()=>lt(D,"params",gs));function ys(c){e[12](c)}let Gt={i:1};e[0]!==void 0&&(Gt.params=e[0]),w=new fs({props:Gt}),et.push(()=>lt(w,"params",ys));function ks(c){e[13](c)}let Yt={i:0};e[0].xy0!==void 0&&(Yt.xy=e[0].xy0),W=new us({props:Yt}),et.push(()=>lt(W,"xy",ks)),W.$on("change",e[6]);function Es(c){e[14](c)}let Jt={i:1};e[0].xy1!==void 0&&(Jt.xy=e[0].xy1),ae=new us({props:Jt}),et.push(()=>lt(ae,"xy",Es)),ae.$on("change",e[6]);let re=e[2]&&ps();xe=new Cl({}),xe.$on("click",e[17]),el=new Cl({}),el.$on("click",e[19]);let te=e[2]&&cs(e);return{c(){l=_("div"),t=_("section"),o=_("p"),p=k("Name"),f=N(),u=_("div"),a=_("input"),b=N(),Y&&Y.c(),g=N(),le&&le.c(),V=N(),m=_("section"),h=_("h2"),I=k("Laser and Channels"),B=N(),P=_("div"),Oe(D.$$.fragment),y=N(),Oe(w.$$.fragment),H=N(),S=_("section"),M=_("h2"),j=k("Positions"),Z=N(),X=_("div"),K=_("div"),T=_("p"),Pe=k("\u{1F4CC} Corner 1"),ye=N(),Oe(W.$$.fragment),pe=N(),ke=_("div"),ne=_("p"),il=k("\u{1F4CD} Corner 2"),De=N(),Oe(ae.$$.fragment),ee=N(),ce=_("div"),Ee=_("div"),Ae=_("p"),Ye=k("X-Overlap"),ue=N(),z=_("input"),U=k(`
          (0-1)`),fe=N(),oe=_("div"),_e=_("span"),Ve=k(we),Me=k(" \xD7 "),Ue=k(Je),ut=k(" mm."),ft=N(),Be=_("span"),Dl=k(zl),_t=k(" columns of "),Al=k(Il),dt=k(" bundles."),pt=N(),ze=_("span"),Vl=k(Pl),ct=N(),re&&re.c(),mt=N(),Ke=_("section"),ml=_("h2"),vt=k("Focus"),ht=N(),Qe=_("div"),Re=_("div"),fl=_("div"),vl=_("p"),bt=k("Z Tilt"),gt=N(),$e=_("div"),me=_("input"),yt=N(),Oe(xe.$$.fragment),kt=N(),_l=_("div"),hl=_("p"),Et=k("Z Objective"),zt=N(),Ne=_("span"),ve=_("input"),It=N(),Oe(el.$$.fragment),Pt=N(),je=_("button"),Le=nt("svg"),dl=nt("path"),wt=N(),wl=_("span"),Nt=k("Autofocus"),Ot=N(),ll=_("div"),tl=_("label"),sl=_("input"),Tt=N(),Fe=_("div"),bl=_("div"),St=k("Z-Stack"),Ct=N(),te&&te.c(),Dt=N(),Q=_("div"),Ze=_("span"),At=k("Spacing"),Vt=N(),R=_("input"),Mt=N(),qe=_("span"),Ut=k("From"),Bt=N(),$=_("input"),jt=N(),He=_("span"),Lt=k("To"),Ft=N(),x=_("input"),this.h()},l(c){l=d(c,"DIV",{id:!0,class:!0});var C=v(l);t=d(C,"SECTION",{class:!0});var Xe=v(t);o=d(Xe,"P",{class:!0});var Nl=v(o);p=E(Nl,"Name"),Nl.forEach(r),f=O(Xe),u=d(Xe,"DIV",{class:!0});var pl=v(u);a=d(pl,"INPUT",{type:!0,class:!0}),b=O(pl),Y&&Y.l(pl),pl.forEach(r),g=O(Xe),le&&le.l(Xe),Xe.forEach(r),V=O(C),m=d(C,"SECTION",{class:!0});var cl=v(m);h=d(cl,"H2",{class:!0});var Kt=v(h);I=E(Kt,"Laser and Channels"),Kt.forEach(r),B=O(cl),P=d(cl,"DIV",{class:!0});var jl=v(P);Te(D.$$.fragment,jl),y=O(jl),Te(w.$$.fragment,jl),jl.forEach(r),cl.forEach(r),H=O(C),S=d(C,"SECTION",{class:!0});var Ll=v(S);M=d(Ll,"H2",{class:!0});var Qt=v(M);j=E(Qt,"Positions"),Qt.forEach(r),Z=O(Ll),X=d(Ll,"DIV",{class:!0});var gl=v(X);K=d(gl,"DIV",{});var Fl=v(K);T=d(Fl,"P",{class:!0});var Rt=v(T);Pe=E(Rt,"\u{1F4CC} Corner 1"),Rt.forEach(r),ye=O(Fl),Te(W.$$.fragment,Fl),Fl.forEach(r),pe=O(gl),ke=d(gl,"DIV",{});var Zl=v(ke);ne=d(Zl,"P",{class:!0});var $t=v(ne);il=E($t,"\u{1F4CD} Corner 2"),$t.forEach(r),De=O(Zl),Te(ae.$$.fragment,Zl),Zl.forEach(r),ee=O(gl),ce=d(gl,"DIV",{class:!0});var ql=v(ce);Ee=d(ql,"DIV",{});var Ol=v(Ee);Ae=d(Ol,"P",{class:!0});var xt=v(Ae);Ye=E(xt,"X-Overlap"),xt.forEach(r),ue=O(Ol),z=d(Ol,"INPUT",{type:!0,class:!0,step:!0,min:!0,max:!0}),U=E(Ol,`
          (0-1)`),Ol.forEach(r),fe=O(ql),oe=d(ql,"DIV",{class:!0});var yl=v(oe);_e=d(yl,"SPAN",{class:!0});var Tl=v(_e);Ve=E(Tl,we),Me=E(Tl," \xD7 "),Ue=E(Tl,Je),ut=E(Tl," mm."),Tl.forEach(r),ft=O(yl),Be=d(yl,"SPAN",{class:!0});var Sl=v(Be);Dl=E(Sl,zl),_t=E(Sl," columns of "),Al=E(Sl,Il),dt=E(Sl," bundles."),Sl.forEach(r),pt=O(yl),ze=d(yl,"SPAN",{class:!0});var Hl=v(ze);Vl=E(Hl,Pl),ct=O(Hl),re&&re.l(Hl),Hl.forEach(r),yl.forEach(r),ql.forEach(r),gl.forEach(r),Ll.forEach(r),mt=O(C),Ke=d(C,"SECTION",{class:!0});var Xl=v(Ke);ml=d(Xl,"H2",{class:!0});var es=v(ml);vt=E(es,"Focus"),es.forEach(r),ht=O(Xl),Qe=d(Xl,"DIV",{class:!0});var Wl=v(Qe);Re=d(Wl,"DIV",{class:!0});var Gl=v(Re);fl=d(Gl,"DIV",{});var Yl=v(fl);vl=d(Yl,"P",{class:!0});var ls=v(vl);bt=E(ls,"Z Tilt"),ls.forEach(r),gt=O(Yl),$e=d(Yl,"DIV",{class:!0});var Jl=v($e);me=d(Jl,"INPUT",{type:!0,class:!0,min:!0,max:!0}),yt=O(Jl),Te(xe.$$.fragment,Jl),Jl.forEach(r),Yl.forEach(r),kt=O(Gl),_l=d(Gl,"DIV",{});var Kl=v(_l);hl=d(Kl,"P",{class:!0});var ts=v(hl);Et=E(ts,"Z Objective"),ts.forEach(r),zt=O(Kl),Ne=d(Kl,"SPAN",{class:!0});var kl=v(Ne);ve=d(kl,"INPUT",{type:!0,class:!0,min:!0,max:!0}),It=O(kl),Te(el.$$.fragment,kl),Pt=O(kl),je=d(kl,"BUTTON",{type:!0,class:!0});var Ql=v(je);Le=at(Ql,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var ss=v(Le);dl=at(ss,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(dl).forEach(r),ss.forEach(r),wt=O(Ql),wl=d(Ql,"SPAN",{});var ns=v(wl);Nt=E(ns,"Autofocus"),ns.forEach(r),Ql.forEach(r),kl.forEach(r),Kl.forEach(r),Gl.forEach(r),Ot=O(Wl),ll=d(Wl,"DIV",{class:!0});var Rl=v(ll);tl=d(Rl,"LABEL",{class:!0});var $l=v(tl);sl=d($l,"INPUT",{type:!0,class:!0}),Tt=O($l),Fe=d($l,"DIV",{class:!0});var xl=v(Fe);bl=d(xl,"DIV",{class:!0});var as=v(bl);St=E(as,"Z-Stack"),as.forEach(r),Ct=O(xl),te&&te.l(xl),xl.forEach(r),$l.forEach(r),Dt=O(Rl),Q=d(Rl,"DIV",{class:!0,id:!0});var be=v(Q);Ze=d(be,"SPAN",{class:!0});var os=v(Ze);At=E(os,"Spacing"),os.forEach(r),Vt=O(be),R=d(be,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),Mt=O(be),qe=d(be,"SPAN",{class:!0});var rs=v(qe);Ut=E(rs,"From"),rs.forEach(r),Bt=O(be),$=d(be,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),jt=O(be),He=d(be,"SPAN",{class:!0});var is=v(He);Lt=E(is,"To"),is.forEach(r),Ft=O(be),x=d(be,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),be.forEach(r),Rl.forEach(r),Wl.forEach(r),Xl.forEach(r),C.forEach(r),this.h()},h(){n(o,"class","mt-1 text-lg svelte-1m4l8fo"),n(a,"type","text"),n(a,"class","flex-grow mb-4 pretty text-lg h-12"),A(a,"invalid",e[7](e[0].name)),n(u,"class","flex w-full max-w-md gap-x-2"),n(t,"class","flex flex-col text-lg font-medium"),n(h,"class","svelte-1m4l8fo"),n(P,"class","grid grid-cols-2"),A(P,"opacity-70",e[4].block),n(m,"class","font-medium leading-10 "),n(M,"class","svelte-1m4l8fo"),n(T,"class","svelte-1m4l8fo"),n(ne,"class","svelte-1m4l8fo"),n(Ae,"class","svelte-1m4l8fo"),n(z,"type","number"),n(z,"class","w-20 pr-2 pretty"),n(z,"step","0.01"),n(z,"min","0"),n(z,"max","0.99"),n(_e,"class","tabular-nums"),n(Be,"class","tabular-nums"),n(ze,"class","tabular-nums"),A(ze,"font-semibold",!e[2]),n(oe,"class","flex flex-col justify-center font-normal"),n(ce,"class","flex gap-8"),n(X,"class","-mt-1 space-y-4"),n(S,"class","flex flex-col gap-2"),A(S,"-mt-20",e[3]),n(ml,"class","svelte-1m4l8fo"),n(vl,"class","svelte-1m4l8fo"),n(me,"type","number"),n(me,"class","w-28 pretty"),n(me,"min","0"),n(me,"max","25000"),n($e,"class","flex gap-2"),n(hl,"class","svelte-1m4l8fo"),n(ve,"type","number"),n(ve,"class","w-28 pretty"),n(ve,"min","0"),n(ve,"max","60000"),n(dl,"fill-rule","evenodd"),n(dl,"d","M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"),n(dl,"clip-rule","evenodd"),n(Le,"xmlns","http://www.w3.org/2000/svg"),n(Le,"class","w-5 h-5 mr-1"),n(Le,"viewBox","0 0 20 20"),n(Le,"fill","currentColor"),n(je,"type","button"),n(je,"class","px-4 py-1 font-medium text-gray-900 rounded-lg w-36 white-button"),n(Ne,"class","flex gap-2"),n(Re,"class","flex space-x-8"),n(sl,"type","checkbox"),n(sl,"class","mr-1 rounded"),n(bl,"class","pr-2"),n(Fe,"class","flex divide-x-2"),n(tl,"class","flex items-center gap-x-1"),n(Ze,"class","flex items-center border-l rounded-l-lg color-group svelte-1m4l8fo"),A(Ze,"span-disabled",e[4].block||!e[2]),n(R,"type","number"),n(R,"min","1"),n(R,"max","60000"),n(R,"step","1"),n(R,"class","z-10 h-10 text-center rounded-none pretty w-28"),R.disabled=Ml=e[4].block||!e[2],A(R,"disabled",e[4].block||!e[2]),n(qe,"class","flex items-center color-group svelte-1m4l8fo"),A(qe,"span-disabled",e[4].block||!e[2]),n($,"type","number"),n($,"min","-100"),n($,"max","100"),n($,"step","1"),n($,"class","z-10 w-16 h-10 text-center rounded-none pretty"),$.disabled=Ul=e[4].block||!e[2],A($,"disabled",e[4].block||!e[2]),n(He,"class","flex items-center color-group svelte-1m4l8fo"),A(He,"span-disabled",e[4].block||!e[2]),n(x,"type","number"),n(x,"min","-100"),n(x,"max","100"),n(x,"step","1"),n(x,"class","z-10 w-16 h-10 text-center rounded-l-none rounded-r-lg pretty"),x.disabled=Bl=e[4].block||!e[2],A(x,"disabled",e[4].block||!e[2]),n(Q,"class","flex font-medium"),n(Q,"id","zBox"),n(ll,"class","space-y-2"),n(Qe,"class","-mt-1 space-y-4"),n(Ke,"class","flex flex-col gap-2"),n(l,"id","control"),n(l,"class","grid grid-cols-2 gap-y-6 gap-x-4")},m(c,C){L(c,l,C),s(l,t),s(t,o),s(o,p),s(t,f),s(t,u),s(u,a),q(a,e[0].name),s(u,b),Y&&Y.m(u,null),s(t,g),le&&le.m(t,null),s(l,V),s(l,m),s(m,h),s(h,I),s(m,B),s(m,P),Se(D,P,null),s(P,y),Se(w,P,null),s(l,H),s(l,S),s(S,M),s(M,j),s(S,Z),s(S,X),s(X,K),s(K,T),s(T,Pe),s(K,ye),Se(W,K,null),s(X,pe),s(X,ke),s(ke,ne),s(ne,il),s(ke,De),Se(ae,ke,null),s(X,ee),s(X,ce),s(ce,Ee),s(Ee,Ae),s(Ae,Ye),s(Ee,ue),s(Ee,z),q(z,e[0].overlap),s(Ee,U),s(ce,fe),s(ce,oe),s(oe,_e),s(_e,Ve),s(_e,Me),s(_e,Ue),s(_e,ut),s(oe,ft),s(oe,Be),s(Be,Dl),s(Be,_t),s(Be,Al),s(Be,dt),s(oe,pt),s(oe,ze),s(ze,Vl),s(ze,ct),re&&re.m(ze,null),s(l,mt),s(l,Ke),s(Ke,ml),s(ml,vt),s(Ke,ht),s(Ke,Qe),s(Qe,Re),s(Re,fl),s(fl,vl),s(vl,bt),s(fl,gt),s(fl,$e),s($e,me),q(me,e[0].z_tilt),s($e,yt),Se(xe,$e,null),s(Re,kt),s(Re,_l),s(_l,hl),s(hl,Et),s(_l,zt),s(_l,Ne),s(Ne,ve),q(ve,e[0].z_obj),s(Ne,It),Se(el,Ne,null),s(Ne,Pt),s(Ne,je),s(je,Le),s(Le,dl),s(je,wt),s(je,wl),s(wl,Nt),s(Qe,Ot),s(Qe,ll),s(ll,tl),s(tl,sl),sl.checked=e[2],s(tl,Tt),s(tl,Fe),s(Fe,bl),s(bl,St),s(Fe,Ct),te&&te.m(Fe,null),s(ll,Dt),s(ll,Q),s(Q,Ze),s(Ze,At),s(Q,Vt),s(Q,R),q(R,e[0].z_spacing),s(Q,Mt),s(Q,qe),s(qe,Ut),s(Q,Bt),s(Q,$),q($,e[0].z_from),s(Q,jt),s(Q,He),s(He,Lt),s(Q,Ft),s(Q,x),q(x,e[0].z_to),he=!0,Zt||(Xt=[G(a,"input",e[9]),G(z,"input",e[15]),ge(We.call(null,z,[.01,.99])),G(me,"input",e[16]),ge(We.call(null,me,[0,25e3])),G(ve,"input",e[18]),ge(We.call(null,ve,[0,6e4])),G(sl,"change",e[20]),ge(qt.call(null,Ze,"Nyquist is 232.")),G(R,"input",e[21]),ge(We.call(null,R,[1,6e4])),ge(qt.call(null,qe,"Multiple of Spacing")),G($,"input",e[22]),ge(We.call(null,$,[-100,100])),ge(qt.call(null,He,"Multiple of Spacing")),G(x,"input",e[23]),ge(We.call(null,x,[-100,100]))],Zt=!0)},p(c,[C]){C&1&&a.value!==c[0].name&&q(a,c[0].name),C&129&&A(a,"invalid",c[7](c[0].name)),c[3]?Y?C&8&&se(Y,1):(Y=_s(c),Y.c(),se(Y,1),Y.m(u,null)):Y&&(vs(),ie(Y,1,1,()=>{Y=null}),hs()),c[3]?le&&(le.d(1),le=null):le?le.p(c,C):(le=ds(c),le.c(),le.m(t,null));const Xe={};!i&&C&1&&(i=!0,Xe.params=c[0],tt(()=>i=!1)),D.$set(Xe);const Nl={};!F&&C&1&&(F=!0,Nl.params=c[0],tt(()=>F=!1)),w.$set(Nl),C&16&&A(P,"opacity-70",c[4].block);const pl={};!rl&&C&1&&(rl=!0,pl.xy=c[0].xy0,tt(()=>rl=!1)),W.$set(pl);const cl={};!ul&&C&1&&(ul=!0,cl.xy=c[0].xy1,tt(()=>ul=!1)),ae.$set(cl),C&1&&J(z.value)!==c[0].overlap&&q(z,c[0].overlap),(!he||C&2)&&we!==(we=c[1].width.toFixed(2)+"")&&de(Ve,we),(!he||C&2)&&Je!==(Je=c[1].height.toFixed(2)+"")&&de(Ue,Je),(!he||C&2)&&zl!==(zl=c[1].n_cols+"")&&de(Dl,zl),(!he||C&2)&&Il!==(Il=c[1].n_bundles+"")&&de(Al,Il),(!he||C&2)&&Pl!==(Pl=El(c[1].time)+"")&&de(Vl,Pl),c[2]?re||(re=ps(),re.c(),re.m(ze,null)):re&&(re.d(1),re=null),C&4&&A(ze,"font-semibold",!c[2]),C&8&&A(S,"-mt-20",c[3]),C&1&&J(me.value)!==c[0].z_tilt&&q(me,c[0].z_tilt),C&1&&J(ve.value)!==c[0].z_obj&&q(ve,c[0].z_obj),C&4&&(sl.checked=c[2]),c[2]?te?te.p(c,C):(te=cs(c),te.c(),te.m(Fe,null)):te&&(te.d(1),te=null),C&20&&A(Ze,"span-disabled",c[4].block||!c[2]),(!he||C&20&&Ml!==(Ml=c[4].block||!c[2]))&&(R.disabled=Ml),C&1&&J(R.value)!==c[0].z_spacing&&q(R,c[0].z_spacing),C&20&&A(R,"disabled",c[4].block||!c[2]),C&20&&A(qe,"span-disabled",c[4].block||!c[2]),(!he||C&20&&Ul!==(Ul=c[4].block||!c[2]))&&($.disabled=Ul),C&1&&J($.value)!==c[0].z_from&&q($,c[0].z_from),C&20&&A($,"disabled",c[4].block||!c[2]),C&20&&A(He,"span-disabled",c[4].block||!c[2]),(!he||C&20&&Bl!==(Bl=c[4].block||!c[2]))&&(x.disabled=Bl),C&1&&J(x.value)!==c[0].z_to&&q(x,c[0].z_to),C&20&&A(x,"disabled",c[4].block||!c[2])},i(c){he||(se(Y),se(D.$$.fragment,c),se(w.$$.fragment,c),se(W.$$.fragment,c),se(ae.$$.fragment,c),se(xe.$$.fragment,c),se(el.$$.fragment,c),he=!0)},o(c){ie(Y),ie(D.$$.fragment,c),ie(w.$$.fragment,c),ie(W.$$.fragment,c),ie(ae.$$.fragment,c),ie(xe.$$.fragment,c),ie(el.$$.fragment,c),he=!1},d(c){c&&r(l),Y&&Y.d(),le&&le.d(),Ce(D),Ce(w),Ce(W),Ce(ae),re&&re.d(),Ce(xe),Ce(el),te&&te.d(),Zt=!1,Ht(Xt)}}}function Ws(e,l){e&&(e.querySelectorAll("input").forEach(t=>t.disabled=l),e.querySelectorAll("select").forEach(t=>t.disabled=l),e.querySelectorAll("button").forEach(t=>t.disabled=l))}function El(e){const l=new Date(e*1e3).toISOString();return e>3600?`${l.substring(11,19)} hrs`:`${l.substring(14,19)} mins`}function Gs(e,l,t){let o,p,f;Ge(e,st,T=>t(4,o=T)),Ge(e,al,T=>t(24,p=T)),Ge(e,ol,T=>t(5,f=T));let{inAuto:u=!0}=l,{params:a}=l,{stats:b={height:0,width:0,n_cols:0,n_bundles:0,n_z:1,time:0}}=l,{z_stack:g=!1}=l,{fc_:V=0}=l;function m(){Ie(al,p.image_params.xy0=a.xy0,p),Ie(al,p.image_params.xy1=a.xy1,p)}function h(T){if(!T)return!0;if(!u)return!1;const Pe=p.exps[V].cmds.filter(ye=>ye.cmd.op==="takeimage").map(ye=>ye.cmd.name);return Ss(Pe)[T]>1}function I(){a.name=this.value,t(0,a)}function B(){a.path=this.value,t(0,a)}function P(T){a=T,t(0,a)}function D(T){a=T,t(0,a)}function i(T){e.$$.not_equal(a.xy0,T)&&(a.xy0=T,t(0,a))}function y(T){e.$$.not_equal(a.xy1,T)&&(a.xy1=T,t(0,a))}function w(){a.overlap=J(this.value),t(0,a)}function F(){a.z_tilt=J(this.value),t(0,a)}const H=()=>Ie(ol,f={move:{z_tilt:a.z_tilt}},f);function S(){a.z_obj=J(this.value),t(0,a)}const M=()=>Ie(ol,f={move:{z_obj:a.z_obj}},f);function j(){g=this.checked,t(2,g)}function Z(){a.z_spacing=J(this.value),t(0,a)}function X(){a.z_from=J(this.value),t(0,a)}function K(){a.z_to=J(this.value),t(0,a)}return e.$$set=T=>{"inAuto"in T&&t(3,u=T.inAuto),"params"in T&&t(0,a=T.params),"stats"in T&&t(1,b=T.stats),"z_stack"in T&&t(2,g=T.z_stack),"fc_"in T&&t(8,V=T.fc_)},e.$$.update=()=>{e.$$.dirty&16&&Ws(document.getElementById("control"),o.block),e.$$.dirty&1&&t(1,b.height=Math.max(a.xy1[1],a.xy0[1])-Math.min(a.xy1[1],a.xy0[1]),b),e.$$.dirty&1&&t(1,b.width=Math.max(a.xy1[0],a.xy0[0])-Math.min(a.xy1[0],a.xy0[0]),b),e.$$.dirty&3&&t(1,b.n_cols=Math.ceil(b.width/(.768*(1-a.overlap))),b),e.$$.dirty&2&&t(1,b.n_bundles=Math.ceil(b.height/.048),b),e.$$.dirty&2&&t(1,b.time=b.n_bundles*b.n_cols/20,b),e.$$.dirty&1&&t(1,b.n_z=Math.abs(a.z_to-a.z_from)+1,b)},[a,b,g,u,o,f,m,h,V,I,B,P,D,i,y,w,F,H,S,M,j,Z,X,K]}class Rs extends ot{constructor(l){super();rt(this,l,Gs,Xs,it,{inAuto:3,params:0,stats:1,z_stack:2,fc_:8})}}export{Rs as T};
