let e=document.createElement("style");e.innerHTML=".qrcode-demo-item[data-v-727cd0d1]{width:30%;margin-right:1%}",document.head.appendChild(e);import{aR as o,a as t,r as l,l as a,f as r,d0 as d,d1 as s,i,o as n,j as c,k as m,bi as u,p}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import{a as g}from"./index.17e57564.js";import"./RightOutlined.2ede8112.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";const b=o((()=>import("./index.f82856ff.js")));var v=t({components:{CollapseContainer:g,QrCode:b},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const f=u("data-v-727cd0d1");d("data-v-727cd0d1");const q={class:"p-4 flex flex-wrap"},x=p(" 下载 "),C=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);s();const j=f(((e,o,t,l,a,r)=>{const d=i("QrCode"),s=i("CollapseContainer"),u=i("a-button");return n(),c("div",q,[m(s,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(s,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(s,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(s,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(s,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:f((()=>[x])),_:1},8,["onClick"]),C])),_:1}),m(s,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:f((()=>[m(d,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])}));v.render=j,v.__scopeId="data-v-727cd0d1";export default v;