import y from"./Input.e5d7a000.js";import h from"./Button.4af5741c.js";import{d as b,x,l as v,r as S,a3 as F,b as l,c,e as d,F as w,Z as B,M as s,g as C,w as R,D as T,t as V,X as k,k as E}from"./entry.393e3877.js";const j=["action"],M={class:"inputs"},N=b({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=x().alpine,{FORMSPREE_URL:n}=v().public;n||console.warn("No FORMSPREE_URL provided");const t=S(),p=F(m.fields.map(e=>({...e,data:""}))),_=async e=>{e.preventDefault();const u=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:u,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=i.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,u)=>{const r=y,a=h;return l(),c("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:_},[d("div",M,[(l(!0),c(w,null,B(s(p),(o,f)=>(l(),k(r,{key:f,modelValue:o.data,"onUpdate:modelValue":g=>o.data=g,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[C(a,{type:"submit",disabled:!s(n)},{default:R(()=>[T(V(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,j)}}});const A=E(N,[["__scopeId","data-v-5d75a1e1"]]);export{A as default};
