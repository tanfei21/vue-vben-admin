import{a as e,M as i,h as s,i as t,o,j as r,k as a,w as n}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import{s as m}from"./index.1b4dce19.js";import"./colors.4c63c846.js";import"./RightOutlined.0ed32762.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./index.aa9264e4.js";import"./index.a172b251.js";import"./index.7275033a.js";import"./index.74c11c11.js";import"./UpOutlined.38e2afe5.js";import"./index.c057eda9.js";import"./index.2e035149.js";import"./index.d441ac4a.js";import"./index.cb987fa7.js";import"./index.797b6bb5.js";import{a as d}from"./index.17e57564.js";import"./LoadingOutlined.5123c8e2.js";import"./RightOutlined.2ede8112.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./index.987cb735.js";import{M as p}from"./index.4e2ee161.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:s})=>i(p,{value:e[s],onChange:i=>{e[s]=i}})}];var c=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=s();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,s,m,d,p){const l=t("BasicForm"),c=t("CollapseContainer");return o(),r("div",u,[a(c,{title:"MarkDown表单"},{default:n((()=>[a(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;