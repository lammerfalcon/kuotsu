import"./MDCSlot.a7051caf.js";import{d as m,r as o,b as p,c as f,e as s,g as v,n,M as l,ap as g,aq as h,a6 as y,k as C}from"./entry.393e3877.js";import{r}from"./slot.5f23a7b9.js";const V={class:"summary"},k={class:"content"},w=m({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,x)=>{const _=y;return p(),f("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",V,[r(t.$slots,"summary",{},void 0,!0)]),v(_,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(s("div",k,[r(t.$slots,"content",{},void 0,!0)],512),[[h,l(e)]])],2)}}});const I=C(w,[["__scopeId","data-v-0a63c136"]]);export{I as default};
