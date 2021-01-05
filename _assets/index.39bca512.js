import{dl as r,a as e,r as i,u as o,a$ as t,R as s,d4 as a,dw as n,i as d,o as m,j as l,aL as p,aV as c,ap as j,aq as f,k as u,w as b,p as x,n as g}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./useSortable.ad13960b.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{f as E}from"./index.3620d909.js";import"./index.28c69232.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./LeftOutlined.afe04eed.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.4ac1b22a.js";import"./zh_CN.0242bd16.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./CaretDownFilled.5b4eb00d.js";import"./transButton.3e3572fa.js";import"./index.a56b187c.js";import"./CheckOutlined.5fcde905.js";import"./CloseOutlined.93cdb7f8.js";import{s as y}from"./index.be77f595.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./SettingOutlined.f0e8c907.js";import"./index.baee5596.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import"./index.bdc6e0da.js";import"./useDescription.e4975570.js";import"./useAttrs.4a972d2b.js";import{a as R}from"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import"./useForm.7906866b.js";import"./useExpose.0843e844.js";import{u as w}from"./useTable.79996857.js";import{getColumns as C}from"./data.61248f98.js";import T from"./DetailModal.4d35d00e.js";var h;(h||(h={})).Error="/error";var k=e({name:"ErrorHandler",components:{DetailModal:T,BasicTable:y,TableAction:E},setup(){const e=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=w({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:j}]=R();return t((()=>n.getErrorInfoState),(r=>{s((()=>{p(a(r))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(r){e.value=r,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await r.request({url:h.Error,method:"GET"})},imgListRef:d,rowInfoRef:e,t:m}}});const D={class:"p-4"};k.render=function(r,e,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",D,[(m(!0),l(p,null,c(r.imgListRef,(r=>j((m(),l("img",{key:r,src:r},null,8,["src"])),[[f,!1]]))),128)),u(a,{info:r.rowInfoRef,onRegister:r.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:r.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:r.fireVueError,type:"primary"},{default:b((()=>[x(g(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:r.fireResourceError,type:"primary"},{default:b((()=>[x(g(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:r.fireAjaxError,type:"primary"},{default:b((()=>[x(g(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:e})=>[u(E,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;