import{d as e,g as s,h as o,o as t,i as l,w as a,j as i,m as r}from"./index.c9b191ae.js";import{_ as n}from"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import{a as c}from"./index.34b4eaee.js";import"./index.27cba524.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import{u as p}from"./useForm.d744eed5.js";import{_ as d}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=e({components:{BasicForm:n,CollapseContainer:c,PageWrapper:d},setup(){const{createMessage:e}=s(),[o,{setProps:t}]=p({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const f={class:"mb-4"},b=r("更改labelWidth"),P=r("还原labelWidth"),C=r("更改Size"),j=r("还原Size"),h=r("禁用表单"),k=r("解除禁用"),_=r("紧凑表单"),g=r("还原正常间距"),x=r(" 操作按钮位置 "),S={class:"mb-4"},v=r(" 隐藏操作按钮 "),w=r(" 显示操作按钮 "),B=r(" 隐藏重置按钮 "),W=r(" 显示重置按钮 "),F=r(" 隐藏查询按钮 "),O=r(" 显示查询按钮 "),R=r(" 修改重置按钮 "),z=r(" 修改查询按钮 ");u.render=function(e,s,r,n,c,p){const d=o("a-button"),m=o("BasicForm"),u=o("CollapseContainer"),y=o("PageWrapper");return t(),l(y,{title:"UseForm操作示例"},{default:a((()=>[i("div",f,[i(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),i(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[P])),_:1}),i(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[C])),_:1}),i(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[j])),_:1}),i(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[h])),_:1}),i(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[k])),_:1}),i(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[_])),_:1}),i(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[g])),_:1}),i(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[x])),_:1})]),i("div",S,[i(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),i(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[w])),_:1}),i(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[B])),_:1}),i(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[W])),_:1}),i(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[F])),_:1}),i(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[O])),_:1}),i(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[R])),_:1}),i(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[z])),_:1})]),i(u,{title:"useForm示例"},{default:a((()=>[i(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;