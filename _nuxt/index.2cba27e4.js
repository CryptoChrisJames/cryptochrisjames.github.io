import{u as h,q as _}from"./query.e1bd63d2.js";import{I as C,B as k,P as w,s as o,Q as t,R as r,S as d,o as a,U as m}from"./entry.53476974.js";import"./utils.54f81c85.js";const B=t("div",null,[t("h3",{class:"welcome"}," Welcome to the blog of Christopher James Smith (CryptoChrisJames)! This is the place where I discuss technology, entertainment, and everything else in between. ")],-1),T={class:"category-picker"},b=["onClick"],x={class:"blog-list"},$=["onClick"],A={__name:"index",async setup(E){let n,l;const p=C(),v=["Tech","Entertainment","Life"],c=k([]),g=async s=>{var u={Tech:"/tech",Entertainment:"/ent",Life:"/life"},e=s==null?"Tech":u[s];const{data:i}=await h("home",()=>_(`${e}`).find());c.value=i.value},{data:f}=([n,l]=w(()=>h("home",()=>_("/tech").find())),n=await n,l(),n);c.value=f.value;const y=s=>{p.push(`post${s}`)};return(s,u)=>(a(),o(r,null,[B,t("div",T,[(a(),o(r,null,d(v,e=>t("div",{class:"category",key:e},[t("button",{onClick:i=>g(e)},m(e),9,b)])),64))]),t("span",x,[(a(!0),o(r,null,d(c.value,e=>(a(),o("div",{class:"content-list",key:e.id},[t("div",{onClick:i=>y(e._path)},[t("h1",null,m(e.title),1)],8,$)]))),128))])],64))}};export{A as default};
