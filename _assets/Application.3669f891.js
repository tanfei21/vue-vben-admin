let a=document.createElement("style");a.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(a);import{a as t,i,o,j as c,w as n,k as e,aM as r,aX as s,m as l,p,n as d}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./RightOutlined.095e9d4c.js";import"./index.04ccb94b.js";import"./UpOutlined.d1c97ab1.js";import"./LeftOutlined.a2747bf9.js";import{C as m}from"./index.53907294.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.79bf1a1f.js";import{s as u}from"./index.97911cfc.js";import{applicationList as _}from"./data.afa5c221.js";var x=t({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const b=p(" 活跃用户："),j=p(" 万 "),g=p(" 新增用户：");x.render=function(a,t,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),v=i("a-row"),L=i("List");return o(),c(L,{class:a.prefixCls},{default:n((()=>[e(v,{gutter:16},{default:n((()=>[(o(!0),c(r,null,s(a.list,((t,i)=>(o(),c(w,{key:i,span:6},{default:n((()=>[e(h,null,{default:n((()=>[e(C,{hoverable:!0,class:`${a.prefixCls}__card`},{default:n((()=>[e("div",{class:`${a.prefixCls}__card-title`},[t.icon?(o(),c(x,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):l("v-if",!0),p(" "+d(t.title),1)],2),e("div",{class:`${a.prefixCls}__card-num`},[b,e("span",null,d(t.active),1),j],2),e("div",{class:`${a.prefixCls}__card-num`},[g,e("span",null,d(t.new),1)],2),t.download?(o(),c(x,{key:0,class:`${a.prefixCls}__card-download`,icon:t.download},null,8,["class","icon"])):l("v-if",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;