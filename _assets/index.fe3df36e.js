import{a as e,r as a,f as o,h as s,i as t,o as i,j as r,k as l,w as n,p}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import{a as c}from"./index.1f4cd203.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import{u}from"./useCopyToClipboard.3a9bc86f.js";var d=e({name:"Copy",components:{CollapseContainer:c},setup(){const e=a(""),{createMessage:t}=s(),{clipboardRef:i,copiedRef:r}=u();return{handleCopy:function(){const a=o(e);a?(i.value=a,o(r)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"p-4"},f={class:"flex justify-center"},j=p("Copy");d.render=function(e,a,o,s,p,c){const u=t("a-input"),d=t("a-button"),C=t("CollapseContainer");return i(),r("div",m,[l(C,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[l("div",f,[l(u,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),l(d,{type:"primary",onClick:e.handleCopy},{default:n((()=>[j])),_:1},8,["onClick"])])])),_:1})])};export default d;