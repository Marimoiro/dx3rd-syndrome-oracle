import{b as r}from"./use-size.ba00bed1.js";import{c as s,h as i}from"./index.f4d939d9.js";import{c}from"./render.11ca1f45.js";const o={size:{type:[Number,String],default:"1em"},color:String};function a(e){return{cSize:s(()=>e.size in r?`${r[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var p=c({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=a(e);return()=>i("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[i("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{p as Q};
