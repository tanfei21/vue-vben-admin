import{a as t,u as o,a$ as e,I as r,ay as a,dx as s,i as n,o as i,j as u,w as l,k as d}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import{B as c}from"./index.25538577.js";import"./colors.eda34fc4.js";import{T as m}from"./index.c6a9e5cf.js";import{B as f}from"./BugOutlined.774ffcbd.js";var p=t({name:"ErrorAction",components:{BugOutlined:f,Tooltip:m,Badge:c},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>s.getErrorListCountState)),handleToErrorList:function(){n(a.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});p.render=function(t,o,e,r,a,s){const c=n("BugOutlined"),m=n("Badge"),f=n("Tooltip");return i(),u(f,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[d(m,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[d(c)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;