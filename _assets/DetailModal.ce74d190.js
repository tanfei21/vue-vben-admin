import{a as e,u as t,i as s,o as i,j as o,w as r,k as a,v as n}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./colors.519db886.js";import"./index.c083d443.js";import"./CloseOutlined.dd293c60.js";import"./FullscreenOutlined.f9d23297.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import{u as c}from"./useDescription.a4961d3b.js";import{D as d}from"./index.bcc6e44c.js";import"./index.ea0a8b2c.js";import"./index.abb63025.js";import{B as m}from"./index.b446f86b.js";import"./useWindowSizeFn.85c877e0.js";import{getDescSchema as p}from"./data.5d59a24f.js";var l=e({name:"ErrorLogDetailModal",components:{BasicModal:m,Description:d},props:{info:{type:Object,default:null}},setup(){const{t:e}=t(),[s]=c({column:2,schema:p()});return{register:s,useI18n:t,t:e}}});l.render=function(e,t,c,d,m,p){const l=s("Description"),u=s("BasicModal");return i(),o(u,n({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:r((()=>[a(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;