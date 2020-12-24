let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as r,u as s,au as t,s as o,ds as a,g as i,i as d,o as l,j as n,w as c,k as p,n as m,p as u,v as f}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import{s as x}from"./index.237a3252.js";import"./colors.519db886.js";import"./RightOutlined.4dd7a895.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.6f702cdb.js";import"./index.b1e85ccd.js";import"./CloseOutlined.dd293c60.js";import"./FullscreenOutlined.f9d23297.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import{_ as j}from"./header.0299ae16.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import{u as b}from"./useForm.47a60267.js";import{B as h,b as g}from"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";var _=r({name:"LockModal",components:{BasicModal:h,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:r}=t("header-lock-modal"),d=o((()=>{var e;return null==(e=i.getUserInfoState)?void 0:e.realName})),[l,{closeModal:n}]=g(),[c,{validateFields:p,resetFields:m}]=b({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:r,getRealName:d,register:l,registerForm:c,handleLock:async function(){const e=(await p()).password;n(),a.commitLockInfoState({isLock:!0,pwd:e}),await m()}}}});_.render=function(e,r,s,t,o,a){const i=d("BasicForm"),x=d("a-button"),b=d("BasicModal");return l(),n(b,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:j,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),p(i,{onRegister:e.registerForm,layout:"vertical"},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(x,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[u(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;