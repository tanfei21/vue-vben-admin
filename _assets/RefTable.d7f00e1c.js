import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as c,w as l,p as r}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./useSortable.b798defb.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.5edef697.js";import"./index.278c333c.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./LeftOutlined.a2747bf9.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./CaretDownFilled.332f9000.js";import"./transButton.295c4225.js";import"./index.c41153d6.js";import"./CheckOutlined.5f43e1c7.js";import"./CloseOutlined.512f8bf6.js";import{s as d}from"./index.a2ab4abb.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./SettingOutlined.33e8a940.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import"./useForm.9a3cc7ae.js";import"./useExpose.37206cdb.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.04a40060.js";import{d as p}from"./table.0f36b6cb.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),h=r("获取选中行Key"),T=r("设置选中行"),y=r("清空选中行"),L=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[c("div",b,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[w])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),c("div",R,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[h])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[T])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[y])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[L])),_:1},8,["onClick"])]),c(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;