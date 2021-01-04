import{a as e,h as t,i,o,j as s,k as n,w as a,p as l}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./useSortable.a4ced273.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import"./index.aeff4252.js";import"./colors.1664fe18.js";import"./index.3613bcf8.js";import"./RightOutlined.76c81f82.js";import"./index.05e306d6.js";import"./types.9988e678.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./_baseFor.f4e5f03f.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.e8e9eb72.js";import"./index.83bd1b65.js";import"./index.00ee5d21.js";import"./zh_CN.0242bd16.js";import"./index.62730274.js";import"./index.4a8e715a.js";import"./CaretDownFilled.72e52daf.js";import"./index.1f4cd203.js";import"./CheckOutlined.cd949935.js";import"./CloseOutlined.d97483db.js";import{s as c}from"./index.f02b363f.js";import"./FullscreenOutlined.d60c703c.js";import"./LeftOutlined.fb5a19ac.js";import"./LoadingOutlined.c197daea.js";import"./TableAction.2263a2d2.js";import"./RightOutlined.68bb84f7.js";import"./SettingOutlined.cf17f58e.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import"./useForm.2f01440e.js";import"./uuid.40269c00.js";import"./useExpose.9a70527a.js";import{u as r}from"./useTable.c3b0d1c2.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.231b5f54.js";import{d as p}from"./table.b8850035.js";var u=e({components:{BasicTable:c},setup(){const{createMessage:e}=t(),[i,{setLoading:o,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:c,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=r({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:p,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:i,changeLoading:function(){o(!0),setTimeout((()=>{o(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=l("还原"),g=l("开启loading"),C=l("更改Columns"),x=l("获取Columns"),k=l("获取表格数据"),S=l("跳转到第2页"),T={class:"mb-4"},w=l("获取选中行"),R=l("获取选中行Key"),_=l("设置选中行"),h=l("清空选中行"),y=l("获取分页信息");u.render=function(e,t,l,c,r,d){const m=i("a-button"),p=i("BasicTable");return o(),s("div",f,[n("div",j,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[g])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[S])),_:1},8,["onClick"])]),n("div",T,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[w])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[h])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[y])),_:1},8,["onClick"])]),n(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;