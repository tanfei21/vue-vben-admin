import{a as e,aR as o,u as t,i,o as s,j as r,k as n,w as a}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import{T as m}from"./index.7275033a.js";import"./index.17e57564.js";import"./CloseOutlined.b855f1e8.js";import"./FullscreenOutlined.ff04728b.js";import{L as l}from"./LockOutlined.3fb506d1.js";import"./RightOutlined.2ede8112.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import{a as p}from"./index.4c709155.js";import"./useWindowSizeFn.63819168.js";var c=e({name:"FullScreen",components:{LockOutlined:l,Tooltip:m,LockAction:o((()=>import("./LockModal.2f6b22ed.js")))},setup(){const{t:e}=t(),[o,{openModal:i}]=p();return{t:e,register:o,handleLock:function(){i(!0)}}}});c.render=function(e,o,t,m,l,p){const c=i("LockOutlined"),d=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:o[1]||(o[1]=(...o)=>e.handleLock&&e.handleLock(...o))},[n(d,{title:e.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[n(c)])),_:1},8,["title","mouseEnterDelay"]),n(u,{onRegister:e.register},null,8,["onRegister"])])};export default c;