import{d as e,r as n,e as a,h as t,o,i as r,w as s,j as l,m as u}from"./index.263e87c1.js";import{_ as i}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";import{M as m}from"./index.785151e5.js";var f=e({components:{MarkDown:m,PageWrapper:i},setup(){const e=n(null),t=n("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const n=a(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const c=u("黑暗主题");f.render=function(e,n,a,u,i,m){const f=t("a-button"),d=t("MarkDown"),p=t("PageWrapper");return o(),r(p,{title:"MarkDown组件示例"},{default:s((()=>[l(f,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:s((()=>[c])),_:1},8,["onClick"]),l(d,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default f;