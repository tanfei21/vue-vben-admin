import{d as e,h as t,o as i,i as o,j as a,w as r,m as s}from"./index.263e87c1.js";import"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import"./index.9380c6e4.js";import"./CheckOutlined.02c2529f.js";import"./index.6fa633b9.js";import{_ as n}from"./index.378fb246.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./SettingOutlined.6e381a06.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import"./useForm.1ba423af.js";import"./useSortable.3b304a95.js";import"./useExpose.7c858fec.js";import{u as d}from"./useTable.909da54c.js";import{getBasicColumns as m}from"./tableData.7aa0192c.js";import{d as p}from"./table.54b1c548.js";var l=e({components:{BasicTable:n},setup(){const[e,{reload:t}]=d({title:"远程加载示例",api:p,columns:m()});return{registerTable:e,handleReloadCurrent:function(){t()},handleReload:function(){t({page:1})}}}});const c={class:"p-4"},u=s(" 刷新当前页 "),j=s(" 刷新并返回第一页 ");l.render=function(e,s,n,d,m,p){const l=t("a-button"),f=t("BasicTable");return i(),o("div",c,[a(f,{onRegister:e.registerTable},{toolbar:r((()=>[a(l,{type:"primary",onClick:e.handleReloadCurrent},{default:r((()=>[u])),_:1},8,["onClick"]),a(l,{type:"primary",onClick:e.handleReload},{default:r((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;