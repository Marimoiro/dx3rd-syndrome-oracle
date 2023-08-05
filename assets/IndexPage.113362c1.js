import{c as m,r as s,w as j,a as D,h as u,X as E,F,G as x,I as A,J as f,K as c,V as l,Q as b,M as P,N as V}from"./index.f4d939d9.js";import{Q as O}from"./QSpinner.a0cbbbac.js";import{c as G,h as J}from"./render.11ca1f45.js";import{Q as K,_ as U,a as S,T as B}from"./TTitle.3483f3b6.js";import{u as W}from"./details.68f68892.js";import"./use-size.ba00bed1.js";import"./use-dark.f12ff2bd.js";const X={ratio:[String,Number]};function Y(e,i){return m(()=>{const o=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const Z=16/9;var p=G({name:"QImg",props:{...X,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Z},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:o}){const y=s(e.initialRatio),C=Y(e,y);let n=null,v=!1;const a=[s(null),s(T())],r=s(0),g=s(!1),d=s(!1),k=m(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=m(()=>({width:e.width,height:e.height})),H=m(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),L=m(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));j(()=>q(),w);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function T(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function w(t){n!==null&&(clearTimeout(n),n=null),d.value=!1,t===null?(g.value=!1,a[r.value^1].value=T()):g.value=!0,a[r.value].value=t}function Q({target:t}){v!==!0&&(n!==null&&(clearTimeout(n),n=null),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,N(t,1))}function N(t,h){v===!0||h===1e3||(t.complete===!0?I(t):n=setTimeout(()=>{n=null,N(t,h+1)},50))}function I(t){v!==!0&&(r.value=r.value^1,a[r.value].value=null,g.value=!1,d.value=!1,o("load",t.currentSrc||t.src))}function R(t){n!==null&&(clearTimeout(n),n=null),g.value=!1,d.value=!0,a[r.value].value=null,a[r.value^1].value=T(),o("error",t)}function M(t){const h=a[t].value,_={key:"img_"+t,class:H.value,style:L.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...h};return r.value===t?(_.class+=" q-img__image--waiting",Object.assign(_,{onLoad:Q,onError:R})):_.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+t},u("img",_))}function $(){return g.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},J(i[d.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[u(O,{color:e.spinnerColor,size:e.spinnerSize})])}return w(q()),D(()=>{v=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const t=[];return C.value!==null&&t.push(u("div",{key:"filler",style:C.value})),d.value!==!0&&(a[0].value!==null&&t.push(M(0)),a[1].value!==null&&t.push(M(1))),t.push(u(E,{name:"q-transition--fade"},$)),u("div",{class:k.value,style:z.value,role:"img","aria-label":e.alt},t)}}});const ee=["innerHTML"],te=["innerHTML"],ie=["innerHTML"],ce=F({__name:"IndexPage",setup(e){const i=W();return(o,y)=>(x(),A(K,{class:"q-pa-lg"},{default:f(()=>[c(U,{title:l(i).name},null,8,["title"]),c(S,{title:"\u3053\u306E\u30DA\u30FC\u30B8\u306B\u3064\u3044\u3066"},{default:f(()=>[b("div",{innerHTML:l(B)(l(i).description.value)},null,8,ee)]),_:1}),c(S,{title:"\u6982\u8981"},{default:f(()=>[P(V(l(i).flavor.value),1)]),_:1}),c(S,{title:l(i).name+"\u306E\u8A2D\u5B9A"},{default:f(()=>[b("div",{innerHTML:l(B)(l(i).body.value)},null,8,te)]),_:1},8,["title"]),c(S,{title:l(i).name+"\u306E\u30C7\u30B6\u30A4\u30F3"},{default:f(()=>[c(p,{src:"oracle_design.jpg"}),b("div",{innerHTML:l(B)(l(i).detail.value)},null,8,ie)]),_:1},8,["title"])]),_:1}))}});export{ce as default};