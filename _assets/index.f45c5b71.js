import{r as e,f as t,bG as r,cE as a,a as o,i as n,o as s,j as l,k as i,w as c,p as d}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import{a as m}from"./index.1f4cd203.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";const p=Symbol("watermark-dom");var u=o({components:{CollapseContainer:m},setup(){const o=e(null),{setWatermark:n,clear:s}=function(o=e(document.body)){let n=()=>{};const s=p.toString(),l=()=>{const e=document.getElementById(s);if(e){const r=t(o);r&&r.removeChild(e)}window.removeEventListener("resize",n)},i=e=>{l();const r=document.createElement("canvas");r.width=300,r.height=240;const a=r.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(e,r.width/20,r.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+r.toDataURL("image/png")+") left top repeat";const i=t(o);return i&&i.appendChild(n),s};return{setWatermark:function(e){i(e),n=()=>{i(e)},window.addEventListener("resize",n),a()&&r((()=>{l()}))},clear:l}}();return{setWatermark:n,clear:s,areaRef:o}}});const f={class:"p-4"},x=d(" Create "),h=d("Clear"),b=d(" Reset ");u.render=function(e,t,r,a,o,d){const m=n("a-button"),p=n("CollapseContainer");return s(),l("div",f,[i(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:c((()=>[i(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:c((()=>[x])),_:1}),i(m,{color:"error",class:"mr-2",onClick:e.clear},{default:c((()=>[h])),_:1},8,["onClick"]),i(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:c((()=>[b])),_:1})])),_:1})])};export default u;