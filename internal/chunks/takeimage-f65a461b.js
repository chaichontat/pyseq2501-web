var as=Object.defineProperty;var Gl=Object.getOwnPropertySymbols;var ns=Object.prototype.hasOwnProperty,os=Object.prototype.propertyIsEnumerable;var Ql=(e,l,s)=>l in e?as(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,kl=(e,l)=>{for(var s in l||(l={}))ns.call(l,s)&&Ql(e,s,l[s]);if(Gl)for(var s of Gl(l))os.call(l,s)&&Ql(e,s,l[s]);return e};import{at as rs,S as Nl,i as Ol,s as wl,e as u,t as h,k as w,O as Zt,c as p,a as _,h as m,d as n,m as T,P as qt,b as a,R as Z,g as L,H as t,$ as W,T as G,Z as R,n as is,o as Ge,p as us,q as Qe,U as Tl,N as Ht,Y as ps,M as Xt,w as dt,x as ct,y as ht,B as mt,_ as lt,j as ue,Q as Ut,W as Bt,a0 as Pl,X as jt,V as Lt}from"./vendor-5b169328.js";import{s as fs,u as Ft,c as zl}from"./store-1582af6d.js";import{S as _s}from"./spinning-267e294b.js";import{r as ds}from"./coords-813c65ab.js";var Il=(e,l,s)=>{e.setAttribute("aria-label",l),e.title="";const r=rs(e,kl({content:l,delay:[100,0]},s));return{update:d=>r.setProps(kl({},d)),destroy:()=>r.destroy()}};function cs(e){let l,s;return{c(){l=u("div"),s=h("Go"),this.h()},l(r){l=p(r,"DIV",{class:!0});var d=_(l);s=m(d,"Go"),d.forEach(n),this.h()},h(){a(l,"class","mx-auto")},m(r,d){L(r,l,d),t(l,s)},i:Xt,o:Xt,d(r){r&&n(l)}}}function hs(e){let l,s,r;return s=new _s({props:{color:"black"}}),{c(){l=u("div"),dt(s.$$.fragment),this.h()},l(d){l=p(d,"DIV",{class:!0});var v=_(l);ct(s.$$.fragment,v),v.forEach(n),this.h()},h(){a(l,"class","mx-auto opacity-40")},m(d,v){L(d,l,v),ht(s,l,null),r=!0},i(d){r||(Qe(s.$$.fragment,d),r=!0)},o(d){Ge(s.$$.fragment,d),r=!1},d(d){d&&n(l),mt(s)}}}function ms(e){let l,s,r,d,v,i,f,N,E,S,k,z,y,A,I,b,o,O,Q,V,B,q,F,U,P,se,pe;const he=[hs,cs],H=[];function K(j,D){return j[1].block?0:1}return b=K(e),o=H[b]=he[b](e),{c(){l=u("div"),s=u("div"),r=u("span"),d=h("X"),v=w(),i=u("input"),N=w(),E=u("span"),S=h("Y"),k=w(),z=u("input"),A=w(),I=u("button"),o.c(),Q=w(),V=u("button"),B=Zt("svg"),q=Zt("path"),F=h(`
    Current`),this.h()},l(j){l=p(j,"DIV",{class:!0});var D=_(l);s=p(D,"DIV",{class:!0});var X=_(s);r=p(X,"SPAN",{class:!0});var ee=_(r);d=m(ee,"X"),ee.forEach(n),v=T(X),i=p(X,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),N=T(X),E=p(X,"SPAN",{class:!0});var ge=_(E);S=m(ge,"Y"),ge.forEach(n),k=T(X),z=p(X,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),X.forEach(n),A=T(D),I=p(D,"BUTTON",{type:!0,class:!0,tabindex:!0});var Y=_(I);o.l(Y),Y.forEach(n),Q=T(D),V=p(D,"BUTTON",{type:!0,class:!0});var fe=_(V);B=qt(fe,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var ye=_(B);q=qt(ye,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),_(q).forEach(n),ye.forEach(n),F=m(fe,`
    Current`),fe.forEach(n),D.forEach(n),this.h()},h(){a(r,"class","flex items-center border-l rounded-l-lg color-group svelte-awp8a4"),Z(r,"span-disabled",e[1].block),a(i,"type","number"),a(i,"min","-5"),a(i,"max","30"),a(i,"step","0.01"),a(i,"class","z-10 h-10 text-center rounded-none pretty w-28"),i.disabled=f=e[1].block,a(E,"class","flex items-center color-group svelte-awp8a4"),Z(E,"span-disabled",e[1].block),a(z,"type","number"),a(z,"min","-5"),a(z,"max","80"),a(z,"step","0.01"),a(z,"class","z-10 h-10 text-center rounded-l-none rounded-r-lg pretty w-28"),z.disabled=y=e[1].block,a(s,"class","flex font-medium"),a(I,"type","button"),a(I,"class","px-4 py-1 text-sm font-medium text-blue-800 border-blue-300 rounded-lg w-14 hover:bg-blue-100 active:bg-blue-200 bg-blue-50 white-button disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:active:bg-gray-50 disabled:text-gray-500"),a(I,"tabindex","0"),I.disabled=O=Boolean(e[1].block),a(q,"stroke-linecap","round"),a(q,"stroke-linejoin","round"),a(q,"stroke-width","2"),a(q,"d","M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"),a(B,"xmlns","http://www.w3.org/2000/svg"),a(B,"class","w-5 h-5 mr-1"),a(B,"fill","none"),a(B,"viewBox","0 0 24 24"),a(B,"stroke","currentColor"),a(V,"type","button"),a(V,"class","px-4 py-1 text-sm font-medium text-gray-900 rounded-lg white-button disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:active:bg-gray-50 disabled:text-gray-500"),V.disabled=U=e[1].block,a(l,"class","flex gap-x-2")},m(j,D){L(j,l,D),t(l,s),t(s,r),t(r,d),t(s,v),t(s,i),W(i,e[0][0]),t(s,N),t(s,E),t(E,S),t(s,k),t(s,z),W(z,e[0][1]),t(l,A),t(l,I),H[b].m(I,null),t(l,Q),t(l,V),t(V,B),t(B,q),t(V,F),P=!0,se||(pe=[G(i,"input",e[4]),G(i,"change",e[5]),G(z,"input",e[6]),G(z,"change",e[7]),G(I,"click",e[8]),G(V,"click",e[3])],se=!0)},p(j,[D]){D&2&&Z(r,"span-disabled",j[1].block),(!P||D&2&&f!==(f=j[1].block))&&(i.disabled=f),D&1&&R(i.value)!==j[0][0]&&W(i,j[0][0]),D&2&&Z(E,"span-disabled",j[1].block),(!P||D&2&&y!==(y=j[1].block))&&(z.disabled=y),D&1&&R(z.value)!==j[0][1]&&W(z,j[0][1]);let X=b;b=K(j),b!==X&&(is(),Ge(H[X],1,1,()=>{H[X]=null}),us(),o=H[b],o||(o=H[b]=he[b](j),o.c()),Qe(o,1),o.m(I,null)),(!P||D&2&&O!==(O=Boolean(j[1].block)))&&(I.disabled=O),(!P||D&2&&U!==(U=j[1].block))&&(V.disabled=U)},i(j){P||(Qe(o),P=!0)},o(j){Ge(o),P=!1},d(j){j&&n(l),H[b].d(),se=!1,Tl(pe)}}}function vs(e,l,s){let r,d;Ht(e,fs,y=>s(9,r=y)),Ht(e,Ft,y=>s(1,d=y));let{xy:v=[-1,-1]}=l;const i=ps();function f(){const{x:y,y:A}=ds(d.image_params.fc,r.x,r.y);s(0,v[0]=Math.round((y+Number.EPSILON)*100)/100,v),s(0,v[1]=Math.round((A+Number.EPSILON)*100)/100,v)}function N(){v[0]=R(this.value),s(0,v)}const E=()=>i("change");function S(){v[1]=R(this.value),s(0,v)}const k=()=>i("change"),z=()=>i("go");return e.$$set=y=>{"xy"in y&&s(0,v=y.xy)},[v,d,i,f,N,E,S,k,z]}class Rl extends Nl{constructor(l){super();Ol(this,l,vs,ms,wl,{xy:0})}}function bs(e){let l,s,r,d,v,i,f,N,E,S,k,z,y,A,I,b;return{c(){l=u("option"),s=h("Open"),r=u("option"),d=h("0.2"),v=u("option"),i=h("0.5"),f=u("option"),N=h("0.6"),E=u("option"),S=h("1.0"),k=u("option"),z=h("2.4"),y=u("option"),A=h("4.0"),I=u("option"),b=h("Closed"),this.h()},l(o){l=p(o,"OPTION",{});var O=_(l);s=m(O,"Open"),O.forEach(n),r=p(o,"OPTION",{});var Q=_(r);d=m(Q,"0.2"),Q.forEach(n),v=p(o,"OPTION",{});var V=_(v);i=m(V,"0.5"),V.forEach(n),f=p(o,"OPTION",{});var B=_(f);N=m(B,"0.6"),B.forEach(n),E=p(o,"OPTION",{});var q=_(E);S=m(q,"1.0"),q.forEach(n),k=p(o,"OPTION",{});var F=_(k);z=m(F,"2.4"),F.forEach(n),y=p(o,"OPTION",{});var U=_(y);A=m(U,"4.0"),U.forEach(n),I=p(o,"OPTION",{});var P=_(I);b=m(P,"Closed"),P.forEach(n),this.h()},h(){l.__value="Open",l.value=l.__value,r.__value="0.2",r.value=r.__value,v.__value="0.5",v.value=v.__value,f.__value="0.6",f.value=f.__value,E.__value="1.0",E.value=E.__value,k.__value="2.4",k.value=k.__value,y.__value="4.0",y.value=y.__value,I.__value="Closed",I.value=I.__value},m(o,O){L(o,l,O),t(l,s),L(o,r,O),t(r,d),L(o,v,O),t(v,i),L(o,f,O),t(f,N),L(o,E,O),t(E,S),L(o,k,O),t(k,z),L(o,y,O),t(y,A),L(o,I,O),t(I,b)},d(o){o&&n(l),o&&n(r),o&&n(v),o&&n(f),o&&n(E),o&&n(k),o&&n(y),o&&n(I)}}}function gs(e){let l,s,r,d,v,i,f,N,E,S,k,z,y,A,I,b;return{c(){l=u("option"),s=h("Open"),r=u("option"),d=h("1.0"),v=u("option"),i=h("2.0"),f=u("option"),N=h("3.5"),E=u("option"),S=h("3.8"),k=u("option"),z=h("4.0"),y=u("option"),A=h("4.5"),I=u("option"),b=h("Closed"),this.h()},l(o){l=p(o,"OPTION",{});var O=_(l);s=m(O,"Open"),O.forEach(n),r=p(o,"OPTION",{});var Q=_(r);d=m(Q,"1.0"),Q.forEach(n),v=p(o,"OPTION",{});var V=_(v);i=m(V,"2.0"),V.forEach(n),f=p(o,"OPTION",{});var B=_(f);N=m(B,"3.5"),B.forEach(n),E=p(o,"OPTION",{});var q=_(E);S=m(q,"3.8"),q.forEach(n),k=p(o,"OPTION",{});var F=_(k);z=m(F,"4.0"),F.forEach(n),y=p(o,"OPTION",{});var U=_(y);A=m(U,"4.5"),U.forEach(n),I=p(o,"OPTION",{});var P=_(I);b=m(P,"Closed"),P.forEach(n),this.h()},h(){l.__value="Open",l.value=l.__value,r.__value="1.0",r.value=r.__value,v.__value="2.0",v.value=v.__value,f.__value="3.5",f.value=f.__value,E.__value="3.8",E.value=E.__value,k.__value="4.0",k.value=k.__value,y.__value="4.5",y.value=y.__value,I.__value="Closed",I.value=I.__value},m(o,O){L(o,l,O),t(l,s),L(o,r,O),t(r,d),L(o,v,O),t(v,i),L(o,f,O),t(f,N),L(o,E,O),t(E,S),L(o,k,O),t(k,z),L(o,y,O),t(y,A),L(o,I,O),t(I,b)},d(o){o&&n(l),o&&n(r),o&&n(v),o&&n(f),o&&n(E),o&&n(k),o&&n(y),o&&n(I)}}}function ys(e){let l,s,r,d,v,i,f,N=(Boolean(e[1])?660:532)+"",E,S,k,z,y,A,I,b,o,O,Q,V=2*e[1]+"",B,q,F,U,P,se,pe=2*e[1]+1+"",he,H,K,j,D,X,ee,ge,Y=(Number(e[0].od[e[1]]!=-1)*e[0].lasers[e[1]]*Math.pow(10,-e[0].od[e[1]])).toFixed(4)+"",fe,ye,_e,me;function ke(g,M){return g[1]==0?gs:bs}let Ue=ke(e),re=Ue(e);return{c(){l=u("p"),s=u("span"),r=u("label"),d=u("input"),i=w(),f=u("div"),E=h(N),S=h(" nm"),k=w(),z=u("input"),A=h(`
    mW`),I=w(),b=u("label"),o=u("input"),Q=h(`
    Channel `),B=h(V),q=w(),F=u("label"),U=u("input"),se=h(`
    Channel `),he=h(pe),H=w(),K=u("span"),j=h(`Filter OD
    `),D=u("select"),re.c(),X=w(),ee=u("p"),ge=h("Effective: "),fe=h(Y),ye=h(" mW"),this.h()},l(g){l=p(g,"P",{class:!0});var M=_(l);s=p(M,"SPAN",{});var Pe=_(s);r=p(Pe,"LABEL",{});var te=_(r);d=p(te,"INPUT",{type:!0,class:!0}),i=T(te),f=p(te,"DIV",{class:!0});var ie=_(f);E=m(ie,N),S=m(ie," nm"),ie.forEach(n),te.forEach(n),k=T(Pe),z=p(Pe,"INPUT",{type:!0,class:!0}),A=m(Pe,`
    mW`),Pe.forEach(n),I=T(M),b=p(M,"LABEL",{class:!0});var Ee=_(b);o=p(Ee,"INPUT",{type:!0,class:!0}),Q=m(Ee,`
    Channel `),B=m(Ee,V),Ee.forEach(n),q=T(M),F=p(M,"LABEL",{class:!0});var ze=_(F);U=p(ze,"INPUT",{type:!0,class:!0}),se=m(ze,`
    Channel `),he=m(ze,pe),ze.forEach(n),H=T(M),K=p(M,"SPAN",{class:!0});var Ie=_(K);j=m(Ie,`Filter OD
    `),D=p(Ie,"SELECT",{class:!0});var Be=_(D);re.l(Be),Be.forEach(n),X=T(Ie),ee=p(Ie,"P",{class:!0});var Ne=_(ee);ge=m(Ne,"Effective: "),fe=m(Ne,Y),ye=m(Ne," mW"),Ne.forEach(n),Ie.forEach(n),M.forEach(n),this.h()},h(){a(d,"type","checkbox"),a(d,"class",v=lt(`mr-1 rounded ${e[1]?"text-red-600 rounded focus:ring-red-300":"text-lime-500 focus:ring-lime-300"}`)+" svelte-6ipz4o"),a(f,"class","inline font-semibold"),Z(f,"text-green-800",e[0].laser_onoff[e[1]]&&!e[1]),Z(f,"text-red-800",e[0].laser_onoff[e[1]]&&e[1]),a(z,"type","number"),a(z,"class","w-20 h-8 mx-1 pretty"),z.disabled=y=!e[0].laser_onoff[e[1]],Z(z,"pretty-disabled",!e[0].laser_onoff[0]),Z(s,"text-gray-400",!e[0].laser_onoff[e[1]]),a(o,"type","checkbox"),a(o,"class",O=lt(`mr-1 rounded ${e[1]?"text-rose-700 focus:ring-rose-500":"text-green-500 focus:ring-green-300"}`)+" svelte-6ipz4o"),a(b,"class","rounded-lg channel ring-red-500 svelte-6ipz4o"),Z(b,"text-gray-400",!e[0].channels[2*e[1]]),a(U,"type","checkbox"),a(U,"class",P=lt(`mr-1 rounded ${e[1]?"text-amber-900 focus:ring-amber-700":"text-orange-600 rounded focus:ring-orange-300"}`)+" svelte-6ipz4o"),a(F,"class","channel svelte-6ipz4o"),Z(F,"text-gray-400",!e[0].channels[2*e[1]+1]),a(D,"class","py-1 text-sm border-gray-400 rounded disabled:border-gray-300"),a(ee,"class","ml-3 text-sm font-medium"),a(K,"class","ml-8 font-normal opacity-85"),a(l,"class","flex flex-col")},m(g,M){L(g,l,M),t(l,s),t(s,r),t(r,d),d.checked=e[0].laser_onoff[e[1]],t(r,i),t(r,f),t(f,E),t(f,S),t(s,k),t(s,z),W(z,e[0].lasers[e[1]]),t(s,A),t(l,I),t(l,b),t(b,o),o.checked=e[0].channels[2*e[1]],t(b,Q),t(b,B),t(l,q),t(l,F),t(F,U),U.checked=e[0].channels[2*e[1]+1],t(F,se),t(F,he),t(l,H),t(l,K),t(K,j),t(K,D),re.m(D,null),t(K,X),t(K,ee),t(ee,ge),t(ee,fe),t(ee,ye),_e||(me=[G(d,"change",e[3]),G(z,"input",e[4]),G(o,"change",e[5]),G(U,"change",e[6]),G(D,"change",e[2])],_e=!0)},p(g,[M]){M&2&&v!==(v=lt(`mr-1 rounded ${g[1]?"text-red-600 rounded focus:ring-red-300":"text-lime-500 focus:ring-lime-300"}`)+" svelte-6ipz4o")&&a(d,"class",v),M&3&&(d.checked=g[0].laser_onoff[g[1]]),M&2&&N!==(N=(Boolean(g[1])?660:532)+"")&&ue(E,N),M&3&&Z(f,"text-green-800",g[0].laser_onoff[g[1]]&&!g[1]),M&3&&Z(f,"text-red-800",g[0].laser_onoff[g[1]]&&g[1]),M&3&&y!==(y=!g[0].laser_onoff[g[1]])&&(z.disabled=y),M&3&&R(z.value)!==g[0].lasers[g[1]]&&W(z,g[0].lasers[g[1]]),M&1&&Z(z,"pretty-disabled",!g[0].laser_onoff[0]),M&3&&Z(s,"text-gray-400",!g[0].laser_onoff[g[1]]),M&2&&O!==(O=lt(`mr-1 rounded ${g[1]?"text-rose-700 focus:ring-rose-500":"text-green-500 focus:ring-green-300"}`)+" svelte-6ipz4o")&&a(o,"class",O),M&3&&(o.checked=g[0].channels[2*g[1]]),M&2&&V!==(V=2*g[1]+"")&&ue(B,V),M&3&&Z(b,"text-gray-400",!g[0].channels[2*g[1]]),M&2&&P!==(P=lt(`mr-1 rounded ${g[1]?"text-amber-900 focus:ring-amber-700":"text-orange-600 rounded focus:ring-orange-300"}`)+" svelte-6ipz4o")&&a(U,"class",P),M&3&&(U.checked=g[0].channels[2*g[1]+1]),M&2&&pe!==(pe=2*g[1]+1+"")&&ue(he,pe),M&3&&Z(F,"text-gray-400",!g[0].channels[2*g[1]+1]),Ue!==(Ue=ke(g))&&(re.d(1),re=Ue(g),re&&(re.c(),re.m(D,null))),M&3&&Y!==(Y=(Number(g[0].od[g[1]]!=-1)*g[0].lasers[g[1]]*Math.pow(10,-g[0].od[g[1]])).toFixed(4)+"")&&ue(fe,Y)},i:Xt,o:Xt,d(g){g&&n(l),re.d(),_e=!1,Tl(me)}}}function Es(e,l,s){let{params:r}=l,{i:d}=l;function v(S){let k;switch(S.currentTarget.value){case"Open":k=0;break;case"Closed":k=-1;break;default:k=Number(S.currentTarget.value)}s(0,r.od[d]=k,r)}function i(){r.laser_onoff[d]=this.checked,s(0,r)}function f(){r.lasers[d]=R(this.value),s(0,r)}function N(){r.channels[2*d]=this.checked,s(0,r)}function E(){r.channels[2*d+1]=this.checked,s(0,r)}return e.$$set=S=>{"params"in S&&s(0,r=S.params),"i"in S&&s(1,d=S.i)},[r,d,v,i,f,N,E]}class Jl extends Nl{constructor(l){super();Ol(this,l,Es,ys,wl,{params:0,i:1})}}function Kl(e){let l,s,r,d,v,i;return{c(){l=u("p"),s=h("Image Path"),r=w(),d=u("input"),this.h()},l(f){l=p(f,"P",{class:!0});var N=_(l);s=m(N,"Image Path"),N.forEach(n),r=T(f),d=p(f,"INPUT",{type:!0,class:!0}),this.h()},h(){a(l,"class","text-lg svelte-1m4l8fo"),a(d,"type","text"),a(d,"class","max-w-md mb-4 pretty")},m(f,N){L(f,l,N),t(l,s),L(f,r,N),L(f,d,N),W(d,e[0].path),v||(i=G(d,"input",e[8]),v=!0)},p(f,N){N&1&&d.value!==f[0].path&&W(d,f[0].path)},d(f){f&&n(l),f&&n(r),f&&n(d),v=!1,i()}}}function $l(e){let l;return{c(){l=h("per z-stack.")},l(s){l=m(s,"per z-stack.")},m(s,r){L(s,l,r)},d(s){s&&n(l)}}}function xl(e){let l,s=e[1].n_z+"",r,d,v=e[0].z_obj+e[0].z_from*e[0].z_spacing+"",i,f,N=e[0].z_obj+e[0].z_to*e[0].z_spacing+"",E,S,k,z,y=(e[1].n_z?st(e[1].n_z*e[1].time):st(e[1].time))+"",A,I;return{c(){l=u("div"),r=h(s),d=h(" Z steps from "),i=h(v),f=h(" to "),E=h(N),S=w(),k=u("div"),z=h("Total time: "),A=h(y),I=h("."),this.h()},l(b){l=p(b,"DIV",{});var o=_(l);r=m(o,s),d=m(o," Z steps from "),i=m(o,v),f=m(o," to "),E=m(o,N),o.forEach(n),S=T(b),k=p(b,"DIV",{class:!0});var O=_(k);z=m(O,"Total time: "),A=m(O,y),I=m(O,"."),O.forEach(n),this.h()},h(){a(k,"class","font-semibold")},m(b,o){L(b,l,o),t(l,r),t(l,d),t(l,i),t(l,f),t(l,E),L(b,S,o),L(b,k,o),t(k,z),t(k,A),t(k,I)},p(b,o){o&2&&s!==(s=b[1].n_z+"")&&ue(r,s),o&1&&v!==(v=b[0].z_obj+b[0].z_from*b[0].z_spacing+"")&&ue(i,v),o&1&&N!==(N=b[0].z_obj+b[0].z_to*b[0].z_spacing+"")&&ue(E,N),o&2&&y!==(y=(b[1].n_z?st(b[1].n_z*b[1].time):st(b[1].time))+"")&&ue(A,y)},d(b){b&&n(l),b&&n(S),b&&n(k)}}}function ks(e){let l,s,r,d,v,i,f,N,E,S,k,z,y,A,I,b,o,O,Q,V,B,q,F,U,P,se,pe,he,H,K,j,D,X,ee,ge,Y,fe,ye,_e,me,ke,Ue,re,g,M,Pe,te,ie,Ee=e[1].width.toFixed(2)+"",ze,Ie,Be=e[1].height.toFixed(2)+"",Ne,Wt,Yt,Oe,at=e[1].n_cols+"",vt,Gt,nt=e[1].n_bundles+"",bt,Qt,Rt,ve,ot=st(e[1].time)+"",gt,Jt,Kt,je,Re,$t,xt,Le,Fe,He,Je,el,tl,we,ll,Xe,Ke,sl,al,Ze,Te,nl,Se,Ce,We,ol,rt,rl,il,be,$e,qe,ul,pl,J,De,fl,_l,ae,yt,dl,Ae,cl,hl,ne,Et,ml,Ve,vl,bl,oe,kt,gl,de,yl,Sl,$=e[3]&&Kl(e);function es(c){e[9](c)}let Cl={i:0};e[0]!==void 0&&(Cl.params=e[0]),A=new Jl({props:Cl}),Ut.push(()=>Bt(A,"params",es));function ts(c){e[10](c)}let Dl={i:1};e[0]!==void 0&&(Dl.params=e[0]),o=new Jl({props:Dl}),Ut.push(()=>Bt(o,"params",ts));function ls(c){e[11](c)}let Al={};e[0].xy0!==void 0&&(Al.xy=e[0].xy0),H=new Rl({props:Al}),Ut.push(()=>Bt(H,"xy",ls)),H.$on("change",e[6]),H.$on("go",e[12]);function ss(c){e[13](c)}let Vl={};e[0].xy1!==void 0&&(Vl.xy=e[0].xy1),Y=new Rl({props:Vl}),Ut.push(()=>Bt(Y,"xy",ss)),Y.$on("change",e[6]),Y.$on("go",e[14]);let le=e[2]&&$l(),x=e[2]&&xl(e);return{c(){l=u("div"),s=u("section"),r=u("p"),d=h("Name"),v=w(),i=u("input"),f=w(),$&&$.c(),N=w(),E=u("section"),S=u("h2"),k=h("Laser and Channels"),z=w(),y=u("div"),dt(A.$$.fragment),b=w(),dt(o.$$.fragment),Q=w(),V=u("section"),B=u("h2"),q=h("Positions"),F=w(),U=u("div"),P=u("div"),se=u("p"),pe=h("\u{1F4CC} Corner 1"),he=w(),dt(H.$$.fragment),j=w(),D=u("div"),X=u("p"),ee=h("\u{1F4CD} Corner 2"),ge=w(),dt(Y.$$.fragment),ye=w(),_e=u("div"),me=u("div"),ke=u("p"),Ue=h("X-Overlap"),re=w(),g=u("input"),M=h(`
          (0-1)`),Pe=w(),te=u("div"),ie=u("span"),ze=h(Ee),Ie=h(" \xD7 "),Ne=h(Be),Wt=h(" mm."),Yt=w(),Oe=u("span"),vt=h(at),Gt=h(" columns of "),bt=h(nt),Qt=h(" bundles."),Rt=w(),ve=u("span"),gt=h(ot),Jt=w(),le&&le.c(),Kt=w(),je=u("section"),Re=u("h2"),$t=h("Focus"),xt=w(),Le=u("div"),Fe=u("div"),He=u("div"),Je=u("p"),el=h("Z Tilt"),tl=w(),we=u("input"),ll=w(),Xe=u("div"),Ke=u("p"),sl=h("Z Objective"),al=w(),Ze=u("span"),Te=u("input"),nl=w(),Se=u("button"),Ce=Zt("svg"),We=Zt("path"),ol=w(),rt=u("span"),rl=h("Autofocus"),il=w(),be=u("div"),$e=u("label"),qe=u("input"),ul=h(`
          Z-Stack`),pl=w(),J=u("div"),De=u("span"),fl=h("Spacing"),_l=w(),ae=u("input"),dl=w(),Ae=u("span"),cl=h("From"),hl=w(),ne=u("input"),ml=w(),Ve=u("span"),vl=h("To"),bl=w(),oe=u("input"),gl=w(),x&&x.c(),this.h()},l(c){l=p(c,"DIV",{id:!0,class:!0});var C=_(l);s=p(C,"SECTION",{class:!0});var Me=_(s);r=p(Me,"P",{class:!0});var it=_(r);d=m(it,"Name"),it.forEach(n),v=T(Me),i=p(Me,"INPUT",{type:!0,class:!0}),f=T(Me),$&&$.l(Me),Me.forEach(n),N=T(C),E=p(C,"SECTION",{class:!0});var Ye=_(E);S=p(Ye,"H2",{class:!0});var ut=_(S);k=m(ut,"Laser and Channels"),ut.forEach(n),z=T(Ye),y=p(Ye,"DIV",{class:!0});var Pt=_(y);ct(A.$$.fragment,Pt),b=T(Pt),ct(o.$$.fragment,Pt),Pt.forEach(n),Ye.forEach(n),Q=T(C),V=p(C,"SECTION",{class:!0});var zt=_(V);B=p(zt,"H2",{class:!0});var Ml=_(B);q=m(Ml,"Positions"),Ml.forEach(n),F=T(zt),U=p(zt,"DIV",{class:!0});var xe=_(U);P=p(xe,"DIV",{});var It=_(P);se=p(It,"P",{class:!0});var Ul=_(se);pe=m(Ul,"\u{1F4CC} Corner 1"),Ul.forEach(n),he=T(It),ct(H.$$.fragment,It),It.forEach(n),j=T(xe),D=p(xe,"DIV",{});var Nt=_(D);X=p(Nt,"P",{class:!0});var Bl=_(X);ee=m(Bl,"\u{1F4CD} Corner 2"),Bl.forEach(n),ge=T(Nt),ct(Y.$$.fragment,Nt),Nt.forEach(n),ye=T(xe),_e=p(xe,"DIV",{class:!0});var Ot=_(_e);me=p(Ot,"DIV",{});var pt=_(me);ke=p(pt,"P",{class:!0});var jl=_(ke);Ue=m(jl,"X-Overlap"),jl.forEach(n),re=T(pt),g=p(pt,"INPUT",{type:!0,class:!0,step:!0,min:!0,max:!0}),M=m(pt,`
          (0-1)`),pt.forEach(n),Pe=T(Ot),te=p(Ot,"DIV",{class:!0});var et=_(te);ie=p(et,"SPAN",{class:!0});var ft=_(ie);ze=m(ft,Ee),Ie=m(ft," \xD7 "),Ne=m(ft,Be),Wt=m(ft," mm."),ft.forEach(n),Yt=T(et),Oe=p(et,"SPAN",{class:!0});var _t=_(Oe);vt=m(_t,at),Gt=m(_t," columns of "),bt=m(_t,nt),Qt=m(_t," bundles."),_t.forEach(n),Rt=T(et),ve=p(et,"SPAN",{class:!0});var wt=_(ve);gt=m(wt,ot),Jt=T(wt),le&&le.l(wt),wt.forEach(n),et.forEach(n),Ot.forEach(n),xe.forEach(n),zt.forEach(n),Kt=T(C),je=p(C,"SECTION",{class:!0});var Tt=_(je);Re=p(Tt,"H2",{class:!0});var Ll=_(Re);$t=m(Ll,"Focus"),Ll.forEach(n),xt=T(Tt),Le=p(Tt,"DIV",{class:!0});var St=_(Le);Fe=p(St,"DIV",{class:!0});var Ct=_(Fe);He=p(Ct,"DIV",{});var Dt=_(He);Je=p(Dt,"P",{class:!0});var Fl=_(Je);el=m(Fl,"Z Tilt"),Fl.forEach(n),tl=T(Dt),we=p(Dt,"INPUT",{type:!0,class:!0}),Dt.forEach(n),ll=T(Ct),Xe=p(Ct,"DIV",{});var At=_(Xe);Ke=p(At,"P",{class:!0});var Zl=_(Ke);sl=m(Zl,"Z Objective"),Zl.forEach(n),al=T(At),Ze=p(At,"SPAN",{class:!0});var Vt=_(Ze);Te=p(Vt,"INPUT",{type:!0,class:!0}),nl=T(Vt),Se=p(Vt,"BUTTON",{type:!0,class:!0});var Mt=_(Se);Ce=qt(Mt,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var ql=_(Ce);We=qt(ql,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),_(We).forEach(n),ql.forEach(n),ol=T(Mt),rt=p(Mt,"SPAN",{});var Hl=_(rt);rl=m(Hl,"Autofocus"),Hl.forEach(n),Mt.forEach(n),Vt.forEach(n),At.forEach(n),Ct.forEach(n),il=T(St),be=p(St,"DIV",{class:!0});var tt=_(be);$e=p(tt,"LABEL",{});var El=_($e);qe=p(El,"INPUT",{type:!0,class:!0}),ul=m(El,`
          Z-Stack`),El.forEach(n),pl=T(tt),J=p(tt,"DIV",{class:!0,id:!0});var ce=_(J);De=p(ce,"SPAN",{class:!0});var Xl=_(De);fl=m(Xl,"Spacing"),Xl.forEach(n),_l=T(ce),ae=p(ce,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),dl=T(ce),Ae=p(ce,"SPAN",{class:!0});var Wl=_(Ae);cl=m(Wl,"From"),Wl.forEach(n),hl=T(ce),ne=p(ce,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),ml=T(ce),Ve=p(ce,"SPAN",{class:!0});var Yl=_(Ve);vl=m(Yl,"To"),Yl.forEach(n),bl=T(ce),oe=p(ce,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),ce.forEach(n),gl=T(tt),x&&x.l(tt),tt.forEach(n),St.forEach(n),Tt.forEach(n),C.forEach(n),this.h()},h(){a(r,"class","mt-1 text-lg svelte-1m4l8fo"),a(i,"type","text"),a(i,"class","max-w-md mb-4 pretty"),a(s,"class","flex flex-col text-lg font-medium"),a(S,"class","svelte-1m4l8fo"),a(y,"class","grid grid-cols-2"),Z(y,"opacity-70",e[4].block),a(E,"class","font-medium leading-10 "),a(B,"class","svelte-1m4l8fo"),a(se,"class","svelte-1m4l8fo"),a(X,"class","svelte-1m4l8fo"),a(ke,"class","svelte-1m4l8fo"),a(g,"type","number"),a(g,"class","w-20 pr-2 pretty"),a(g,"step","0.01"),a(g,"min","0"),a(g,"max","0.99"),a(ie,"class","tabular-nums"),a(Oe,"class","tabular-nums"),a(ve,"class","tabular-nums"),Z(ve,"font-semibold",!e[2]),a(te,"class","flex flex-col justify-center font-normal"),a(_e,"class","flex gap-8"),a(U,"class","-mt-1 space-y-4"),a(V,"class","flex flex-col gap-2"),a(Re,"class","svelte-1m4l8fo"),a(Je,"class","svelte-1m4l8fo"),a(we,"type","number"),a(we,"class","w-28 pretty"),a(Ke,"class","svelte-1m4l8fo"),a(Te,"type","number"),a(Te,"class","w-28 pretty"),a(We,"fill-rule","evenodd"),a(We,"d","M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"),a(We,"clip-rule","evenodd"),a(Ce,"xmlns","http://www.w3.org/2000/svg"),a(Ce,"class","w-5 h-5 mr-1"),a(Ce,"viewBox","0 0 20 20"),a(Ce,"fill","currentColor"),a(Se,"type","button"),a(Se,"class","px-4 py-1 font-medium text-gray-900 rounded-lg w-36 white-button"),a(Ze,"class","flex gap-2"),a(Fe,"class","flex space-x-8"),a(qe,"type","checkbox"),a(qe,"class","mr-1 rounded"),a(De,"class","flex items-center border-l rounded-l-lg color-group svelte-1m4l8fo"),Z(De,"span-disabled",e[4].block||!e[2]),a(ae,"type","number"),a(ae,"min","1"),a(ae,"max","60000"),a(ae,"step","1"),a(ae,"class","z-10 h-10 text-center rounded-none pretty w-28"),ae.disabled=yt=e[4].block||!e[2],a(Ae,"class","flex items-center color-group svelte-1m4l8fo"),Z(Ae,"span-disabled",e[4].block||!e[2]),a(ne,"type","number"),a(ne,"min","-100"),a(ne,"max","100"),a(ne,"step","1"),a(ne,"class","z-10 w-16 h-10 text-center rounded-none pretty"),ne.disabled=Et=e[4].block||!e[2],a(Ve,"class","flex items-center color-group svelte-1m4l8fo"),Z(Ve,"span-disabled",e[4].block||!e[2]),a(oe,"type","number"),a(oe,"min","-100"),a(oe,"max","100"),a(oe,"step","1"),a(oe,"class","z-10 w-16 h-10 text-center rounded-l-none rounded-r-lg pretty"),oe.disabled=kt=e[4].block||!e[2],a(J,"class","flex font-medium"),a(J,"id","zBox"),a(be,"class","space-y-2"),a(Le,"class","-mt-1 space-y-4"),a(je,"class","flex flex-col gap-2"),a(l,"id","control"),a(l,"class","grid grid-cols-2 gap-y-6 gap-x-4")},m(c,C){L(c,l,C),t(l,s),t(s,r),t(r,d),t(s,v),t(s,i),W(i,e[0].name),t(s,f),$&&$.m(s,null),t(l,N),t(l,E),t(E,S),t(S,k),t(E,z),t(E,y),ht(A,y,null),t(y,b),ht(o,y,null),t(l,Q),t(l,V),t(V,B),t(B,q),t(V,F),t(V,U),t(U,P),t(P,se),t(se,pe),t(P,he),ht(H,P,null),t(U,j),t(U,D),t(D,X),t(X,ee),t(D,ge),ht(Y,D,null),t(U,ye),t(U,_e),t(_e,me),t(me,ke),t(ke,Ue),t(me,re),t(me,g),W(g,e[0].overlap),t(me,M),t(_e,Pe),t(_e,te),t(te,ie),t(ie,ze),t(ie,Ie),t(ie,Ne),t(ie,Wt),t(te,Yt),t(te,Oe),t(Oe,vt),t(Oe,Gt),t(Oe,bt),t(Oe,Qt),t(te,Rt),t(te,ve),t(ve,gt),t(ve,Jt),le&&le.m(ve,null),t(l,Kt),t(l,je),t(je,Re),t(Re,$t),t(je,xt),t(je,Le),t(Le,Fe),t(Fe,He),t(He,Je),t(Je,el),t(He,tl),t(He,we),W(we,e[0].z_tilt),t(Fe,ll),t(Fe,Xe),t(Xe,Ke),t(Ke,sl),t(Xe,al),t(Xe,Ze),t(Ze,Te),W(Te,e[0].z_obj),t(Ze,nl),t(Ze,Se),t(Se,Ce),t(Ce,We),t(Se,ol),t(Se,rt),t(rt,rl),t(Le,il),t(Le,be),t(be,$e),t($e,qe),qe.checked=e[2],t($e,ul),t(be,pl),t(be,J),t(J,De),t(De,fl),t(J,_l),t(J,ae),W(ae,e[0].z_spacing),t(J,dl),t(J,Ae),t(Ae,cl),t(J,hl),t(J,ne),W(ne,e[0].z_from),t(J,ml),t(J,Ve),t(Ve,vl),t(J,bl),t(J,oe),W(oe,e[0].z_to),t(be,gl),x&&x.m(be,null),de=!0,yl||(Sl=[G(i,"input",e[7]),G(g,"input",e[15]),G(we,"input",e[16]),G(Te,"input",e[17]),G(qe,"change",e[18]),Pl(Il.call(null,De,"Nyquist is 232.")),G(ae,"input",e[19]),Pl(Il.call(null,Ae,"Multiple of Spacing")),G(ne,"input",e[20]),Pl(Il.call(null,Ve,"Multiple of Spacing")),G(oe,"input",e[21])],yl=!0)},p(c,[C]){C&1&&i.value!==c[0].name&&W(i,c[0].name),c[3]?$?$.p(c,C):($=Kl(c),$.c(),$.m(s,null)):$&&($.d(1),$=null);const Me={};!I&&C&1&&(I=!0,Me.params=c[0],jt(()=>I=!1)),A.$set(Me);const it={};!O&&C&1&&(O=!0,it.params=c[0],jt(()=>O=!1)),o.$set(it),C&16&&Z(y,"opacity-70",c[4].block);const Ye={};!K&&C&1&&(K=!0,Ye.xy=c[0].xy0,jt(()=>K=!1)),H.$set(Ye);const ut={};!fe&&C&1&&(fe=!0,ut.xy=c[0].xy1,jt(()=>fe=!1)),Y.$set(ut),C&1&&R(g.value)!==c[0].overlap&&W(g,c[0].overlap),(!de||C&2)&&Ee!==(Ee=c[1].width.toFixed(2)+"")&&ue(ze,Ee),(!de||C&2)&&Be!==(Be=c[1].height.toFixed(2)+"")&&ue(Ne,Be),(!de||C&2)&&at!==(at=c[1].n_cols+"")&&ue(vt,at),(!de||C&2)&&nt!==(nt=c[1].n_bundles+"")&&ue(bt,nt),(!de||C&2)&&ot!==(ot=st(c[1].time)+"")&&ue(gt,ot),c[2]?le||(le=$l(),le.c(),le.m(ve,null)):le&&(le.d(1),le=null),C&4&&Z(ve,"font-semibold",!c[2]),C&1&&R(we.value)!==c[0].z_tilt&&W(we,c[0].z_tilt),C&1&&R(Te.value)!==c[0].z_obj&&W(Te,c[0].z_obj),C&4&&(qe.checked=c[2]),C&20&&Z(De,"span-disabled",c[4].block||!c[2]),(!de||C&20&&yt!==(yt=c[4].block||!c[2]))&&(ae.disabled=yt),C&1&&R(ae.value)!==c[0].z_spacing&&W(ae,c[0].z_spacing),C&20&&Z(Ae,"span-disabled",c[4].block||!c[2]),(!de||C&20&&Et!==(Et=c[4].block||!c[2]))&&(ne.disabled=Et),C&1&&R(ne.value)!==c[0].z_from&&W(ne,c[0].z_from),C&20&&Z(Ve,"span-disabled",c[4].block||!c[2]),(!de||C&20&&kt!==(kt=c[4].block||!c[2]))&&(oe.disabled=kt),C&1&&R(oe.value)!==c[0].z_to&&W(oe,c[0].z_to),c[2]?x?x.p(c,C):(x=xl(c),x.c(),x.m(be,null)):x&&(x.d(1),x=null)},i(c){de||(Qe(A.$$.fragment,c),Qe(o.$$.fragment,c),Qe(H.$$.fragment,c),Qe(Y.$$.fragment,c),de=!0)},o(c){Ge(A.$$.fragment,c),Ge(o.$$.fragment,c),Ge(H.$$.fragment,c),Ge(Y.$$.fragment,c),de=!1},d(c){c&&n(l),$&&$.d(),mt(A),mt(o),mt(H),mt(Y),le&&le.d(),x&&x.d(),yl=!1,Tl(Sl)}}}function Ps(e,l){e&&(e.querySelectorAll("input").forEach(s=>s.disabled=l),e.querySelectorAll("select").forEach(s=>s.disabled=l),e.querySelectorAll("button").forEach(s=>s.disabled=l))}function st(e){const l=new Date(e*1e3).toISOString();return e>3600?`${l.substring(11,19)} hrs`:`${l.substring(14,19)} mins`}function zs(e,l,s){let r,d;Ht(e,Ft,P=>s(4,r=P)),Ht(e,zl,P=>s(5,d=P));let{showPath:v=!0}=l,{params:i}=l,{stats:f={height:0,width:0,n_cols:0,n_bundles:0,n_z:1,time:0}}=l,{z_stack:N=!1}=l;function E(){Lt(Ft,r.image_params.xy0=i.xy0,r),Lt(Ft,r.image_params.xy1=i.xy1,r)}function S(){i.name=this.value,s(0,i)}function k(){i.path=this.value,s(0,i)}function z(P){i=P,s(0,i)}function y(P){i=P,s(0,i)}function A(P){e.$$.not_equal(i.xy0,P)&&(i.xy0=P,s(0,i))}const I=()=>Lt(zl,d="move0",d);function b(P){e.$$.not_equal(i.xy1,P)&&(i.xy1=P,s(0,i))}const o=()=>Lt(zl,d="move1",d);function O(){i.overlap=R(this.value),s(0,i)}function Q(){i.z_tilt=R(this.value),s(0,i)}function V(){i.z_obj=R(this.value),s(0,i)}function B(){N=this.checked,s(2,N)}function q(){i.z_spacing=R(this.value),s(0,i)}function F(){i.z_from=R(this.value),s(0,i)}function U(){i.z_to=R(this.value),s(0,i)}return e.$$set=P=>{"showPath"in P&&s(3,v=P.showPath),"params"in P&&s(0,i=P.params),"stats"in P&&s(1,f=P.stats),"z_stack"in P&&s(2,N=P.z_stack)},e.$$.update=()=>{e.$$.dirty&16&&Ps(document.getElementById("control"),r.block),e.$$.dirty&1&&s(1,f.height=Math.max(i.xy1[1],i.xy0[1])-Math.min(i.xy1[1],i.xy0[1]),f),e.$$.dirty&1&&s(1,f.width=Math.max(i.xy1[0],i.xy0[0])-Math.min(i.xy1[0],i.xy0[0]),f),e.$$.dirty&3&&s(1,f.n_cols=Math.ceil(f.width/(.768*(1-i.overlap))),f),e.$$.dirty&2&&s(1,f.n_bundles=Math.ceil(f.height/.048),f),e.$$.dirty&2&&s(1,f.time=f.n_bundles*f.n_cols/20,f),e.$$.dirty&1&&s(1,f.n_z=Math.abs(i.z_to-i.z_from)+1,f)},[i,f,N,v,r,d,E,S,k,z,y,A,I,b,o,O,Q,V,B,q,F,U]}class Ss extends Nl{constructor(l){super();Ol(this,l,zs,ks,wl,{showPath:3,params:0,stats:1,z_stack:2})}}export{Ss as T,Il as t};