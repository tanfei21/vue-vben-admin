import{r as e,e as t,be as r,bd as a,d as n,h as o,o as s,i as l,w as i,j as d,m as c}from"./index.263e87c1.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import{a as m}from"./index.9380c6e4.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import{_ as p}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:m,PageWrapper:p},setup(){const n=e(null),{setWatermark:o,clear:s}=function(n=e(document.body)){let o=()=>{};const s=u.toString(),l=()=>{const e=document.getElementById(s);if(e){const r=t(n);r&&r.removeChild(e)}window.removeEventListener("resize",o)},i=e=>{l();const r=document.createElement("canvas");r.width=300,r.height=240;const a=r.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(e,r.width/20,r.height));const o=document.createElement("div");o.id=s,o.style.pointerEvents="none",o.style.top="3px",o.style.left="0px",o.style.position="absolute",o.style.zIndex="100000",o.style.width=document.documentElement.clientWidth+"px",o.style.height=document.documentElement.clientHeight+"px",o.style.background="url("+r.toDataURL("image/png")+") left top repeat";const i=t(n);return i&&i.appendChild(o),s};return{setWatermark:function(e){i(e),o=()=>{i(e)},window.addEventListener("resize",o),a()&&r((()=>{l()}))},clear:l}}();return{setWatermark:o,clear:s,areaRef:n}}});const g=c(" Create "),h=c("Clear"),x=c(" Reset ");f.render=function(e,t,r,a,n,c){const m=o("a-button"),p=o("CollapseContainer"),u=o("PageWrapper");return s(),l(u,{title:"水印示例"},{default:i((()=>[d(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:i((()=>[d(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:i((()=>[g])),_:1}),d(m,{color:"error",class:"mr-2",onClick:e.clear},{default:i((()=>[h])),_:1},8,["onClick"]),d(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:i((()=>[x])),_:1})])),_:1})])),_:1})};export default f;