let e=document.createElement("style");e.innerHTML=".vben-basic-table-img{display:flex}.vben-basic-table-img .ant-image{margin-right:4px;cursor:zoom-in}.vben-basic-table-img .ant-image img{border-radius:2px}",document.head.appendChild(e);import{a as i,aY as a,i as s,o as t,j as r,k as l,w as n,aM as m,b9 as o,m as d}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import{I as p}from"./index.b4d133ad.js";import"./CloseOutlined.b855f1e8.js";import"./LeftOutlined.cc53e9a8.js";import"./RightOutlined.2ede8112.js";var u=i({name:"TableImage",components:{Image:p,PreviewGroup:p.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=a("basic-table-img");return{prefixCls:e}}});u.render=function(e,i,a,p,u,c){const g=s("Image"),b=s("PreviewGroup");return e.imgList&&e.imgList.length?(t(),r("div",{key:0,class:e.prefixCls},[l(b,null,{default:n((()=>[(t(!0),r(m,null,o(e.imgList,(i=>(t(),r(g,{key:i,width:e.size,src:i},null,8,["width","src"])))),128))])),_:1})],2)):d("v-if",!0)};export default u;