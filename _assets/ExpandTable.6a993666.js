import{a as e,i,o as t,j as s,k as o,w as r,n as p}from"./index.ed640425.js";import"./xlsx.a48e520c.js";import"./useSortable.45284f08.js";import"./index.3d118838.js";import"./Trigger.10f3ef36.js";import"./omit.438f158a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d7b24863.js";import"./CheckOutlined.6e3f46e9.js";import"./index.1b4dce19.js";import"./colors.4c63c846.js";import"./index.5444a7ef.js";import"./RightOutlined.0ed32762.js";import"./index.bfdeacdc.js";import"./types.862677e9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1c23be2f.js";import"./_baseFor.f4e5f03f.js";import"./index.aa9264e4.js";import"./index.a172b251.js";import"./index.7275033a.js";import"./index.74c11c11.js";import"./UpOutlined.38e2afe5.js";import"./LeftOutlined.1c703b09.js";import"./index.c057eda9.js";import"./index.2e035149.js";import"./index.8e1cda31.js";import"./index.d441ac4a.js";import"./index.655ce238.js";import"./zh_CN.0242bd16.js";import"./index.cb987fa7.js";import"./index.797b6bb5.js";import"./CaretDownFilled.7857eebe.js";import"./index.17e57564.js";import"./CheckOutlined.92a90225.js";import"./CloseOutlined.b855f1e8.js";import{s as m}from"./index.0745fcc6.js";import"./FullscreenOutlined.ff04728b.js";import"./LeftOutlined.cc53e9a8.js";import"./LoadingOutlined.5123c8e2.js";import"./TableAction.d4cb015a.js";import"./RightOutlined.2ede8112.js";import"./SettingOutlined.f912e4a6.js";import"./useTimeout.c8b873c8.js";import"./tsxHelper.cdbc5a80.js";import"./index.03b19eac.js";import"./domUtils.d9f4b793.js";import"./index.bf1aa8c9.js";import"./animation.b8dec64d.js";import"./useScrollTo.35a9ddd8.js";import"./useAttrs.74aef446.js";import"./index.987cb735.js";import"./useForm.f8029a39.js";import"./index.4c709155.js";import"./useWindowSizeFn.63819168.js";import"./uuid.40269c00.js";import"./useExpose.01082bae.js";import{u as d}from"./useTable.6d82f1c8.js";import{getBasicColumns as a}from"./tableData.a61200db.js";import{d as n}from"./table.c1ccf9d5.js";var j=e({components:{BasicTable:m},setup(){const[e]=d({title:"可展开表格",api:n,titleHelpMessage:"不能与scroll共用",columns:a(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,m,d,a,n,j){const l=i("BasicTable");return t(),s("div",c,[o(l,{onRegister:e.registerTable},{expandedRowRender:r((({record:e})=>[o("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default j;