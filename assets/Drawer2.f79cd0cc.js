import{d as r,h as e,o as t,i as s,w as a,j as i,a0 as o,m as n}from"./index.263e87c1.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.9380c6e4.js";import{_ as m,a as c}from"./index.322529b9.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";var d=r({components:{BasicDrawer:m},setup(){const[r,{closeDrawer:e}]=c();return{register:r,closeDrawer:e}}});const p=n(" Drawer Info. "),l=n("内部关闭drawer");d.render=function(r,n,m,c,d,u){const j=e("a-button"),f=e("BasicDrawer");return t(),s(f,o(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[p,i(j,{type:"primary",onClick:r.closeDrawer},{default:a((()=>[l])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;