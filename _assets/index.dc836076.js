let e=document.createElement("style");e.innerHTML=".demo-box[data-v-2a8e92fa]{display:flex;width:100%;height:300px;font-size:24px;color:#fff;background:#408ede;border-radius:10px;justify-content:center;align-items:center}",document.head.appendChild(e);import{a,r as t,c$ as i,d0 as n,i as s,o as c,j as d,k as o,n as l,aS as r}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import{A as f}from"./index.f69020fc.js";import{s as u}from"./index.cf77ba7a.js";var m=a({components:{ClickOutSide:u,Alert:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const k=r("data-v-2a8e92fa");i("data-v-2a8e92fa");const p={class:"p-10"};n();const x=k(((e,a,t,i,n,r)=>{const f=s("Alert"),u=s("ClickOutSide");return c(),d("div",p,[o(f,{message:"点内外部触发事件","show-icon":""}),o(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center mt-10"},{default:k((()=>[o("div",{onClick:a[1]||(a[1]=(...a)=>e.innerClick&&e.innerClick(...a)),class:"demo-box"},l(e.text),1)])),_:1},8,["onClickOutside"])])}));m.render=x,m.__scopeId="data-v-2a8e92fa";export default m;