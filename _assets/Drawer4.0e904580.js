import{a as i,i as e,o as s,j as t,w as o,k as r,J as d}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{s as n}from"./index.3620d909.js";import"./index.28c69232.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./index.dc2ddd8c.js";import"./index.a56b187c.js";import{s as m,a}from"./index.3de0ddaa.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import"./useAttrs.4a972d2b.js";import"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import{u as p}from"./useForm.7906866b.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=i({components:{BasicDrawer:m,BasicForm:n},setup(){const[i,{setFieldsValue:e}]=p({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=a((i=>{e({field2:i.data,field1:i.info})}));return{register:s,schemas:j,registerForm:i}}});c.render=function(i,n,m,a,p,j){const c=e("BasicForm"),l=e("BasicDrawer");return s(),t(l,d(i.$attrs,{onRegister:i.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(c,{onRegister:i.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;