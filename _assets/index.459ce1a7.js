let e=document.createElement("style");e.innerHTML=".vben-setting-button{position:absolute;top:45%;right:0;z-index:10;display:flex;padding:10px;color:#fff;cursor:pointer;background:#018ffb;border-radius:6px 0 0 6px;justify-content:center;align-items:center}.vben-setting-button svg{width:1em;height:1em}",document.head.appendChild(e);import{aR as t,u as n,dL as i,dM as a,dN as o,b1 as l,dB as s,dO as E,bh as r,bw as _,dP as u,dQ as d,dR as g,dS as O,a as S,I as N,ay as T,aM as M,f as R,b2 as A,be as I,aV as c,b7 as D,aY as m,i as C,o as f,j as H,k as p}from"./index.5c6c90f9.js";import{D as b}from"./index.e8e9eb72.js";import{s as U,u as L}from"./index.b48d5179.js";import{S as y}from"./SettingOutlined.cf17f58e.js";import{d as B}from"./useHeaderSetting.cdbbc802.js";const v=t((()=>import("./TypePicker.d111e01c.js"))),h=t((()=>import("./ThemePicker.5d27e84d.js"))),W=t((()=>import("./SettingFooter.8817ce3a.js"))),G=t((()=>import("./SwitchItem.6e1e7b6d.js"))),P=t((()=>import("./SelectItem.9fc68e56.js"))),F=t((()=>import("./InputNumberItem.2a6cb4ab.js"))),{t:w}=n();var x,X;(X=x||(x={}))[X.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",X[X.MENU_HAS_DRAG=1]="MENU_HAS_DRAG",X[X.MENU_ACCORDION=2]="MENU_ACCORDION",X[X.MENU_TRIGGER=3]="MENU_TRIGGER",X[X.MENU_TOP_ALIGN=4]="MENU_TOP_ALIGN",X[X.MENU_COLLAPSED=5]="MENU_COLLAPSED",X[X.MENU_COLLAPSED_SHOW_TITLE=6]="MENU_COLLAPSED_SHOW_TITLE",X[X.MENU_WIDTH=7]="MENU_WIDTH",X[X.MENU_SHOW_SIDEBAR=8]="MENU_SHOW_SIDEBAR",X[X.MENU_THEME=9]="MENU_THEME",X[X.MENU_SPLIT=10]="MENU_SPLIT",X[X.MENU_FIXED=11]="MENU_FIXED",X[X.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=12]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",X[X.MENU_TRIGGER_MIX_SIDEBAR=13]="MENU_TRIGGER_MIX_SIDEBAR",X[X.MENU_FIXED_MIX_SIDEBAR=14]="MENU_FIXED_MIX_SIDEBAR",X[X.HEADER_SHOW=15]="HEADER_SHOW",X[X.HEADER_THEME=16]="HEADER_THEME",X[X.HEADER_FIXED=17]="HEADER_FIXED",X[X.HEADER_SEARCH=18]="HEADER_SEARCH",X[X.TABS_SHOW_QUICK=19]="TABS_SHOW_QUICK",X[X.TABS_SHOW_REDO=20]="TABS_SHOW_REDO",X[X.TABS_SHOW=21]="TABS_SHOW",X[X.LOCK_TIME=22]="LOCK_TIME",X[X.FULL_CONTENT=23]="FULL_CONTENT",X[X.CONTENT_MODE=24]="CONTENT_MODE",X[X.SHOW_BREADCRUMB=25]="SHOW_BREADCRUMB",X[X.SHOW_BREADCRUMB_ICON=26]="SHOW_BREADCRUMB_ICON",X[X.GRAY_MODE=27]="GRAY_MODE",X[X.COLOR_WEAK=28]="COLOR_WEAK",X[X.SHOW_LOGO=29]="SHOW_LOGO",X[X.SHOW_FOOTER=30]="SHOW_FOOTER",X[X.ROUTER_TRANSITION=31]="ROUTER_TRANSITION",X[X.OPEN_PROGRESS=32]="OPEN_PROGRESS",X[X.OPEN_PAGE_LOADING=33]="OPEN_PAGE_LOADING",X[X.OPEN_ROUTE_TRANSITION=34]="OPEN_ROUTE_TRANSITION";const k=[{value:i.FULL,label:w("layout.setting.contentModeFull")},{value:i.FIXED,label:w("layout.setting.contentModeFixed")}],j=[{value:a.CENTER,label:w("layout.setting.topMenuAlignRight")},{value:a.START,label:w("layout.setting.topMenuAlignLeft")},{value:a.END,label:w("layout.setting.topMenuAlignCenter")}],K=[o.ZOOM_FADE,o.FADE,o.ZOOM_OUT,o.FADE_SIDE,o.FADE_BOTTOM,o.FADE_SCALE].map((e=>({label:e,value:e}))),Y=[{title:w("layout.setting.menuTypeSidebar"),mode:l.INLINE,type:s.SIDEBAR},{title:w("layout.setting.menuTypeMix"),mode:l.INLINE,type:s.MIX},{title:w("layout.setting.menuTypeTopMenu"),mode:l.HORIZONTAL,type:s.TOP_MENU},{title:w("layout.setting.menuTypeMixSidebar"),mode:l.INLINE,type:s.MIX_SIDEBAR}],Q=[{value:E.HOVER,label:w("layout.setting.triggerHover")},{value:E.CLICK,label:w("layout.setting.triggerClick")}];function V(e,t){const n=function(e,t){switch(e){case x.CHANGE_LAYOUT:const{mode:e,type:n,split:i}=t;return{menuSetting:{mode:e,type:n,collapsed:!1,show:!0,hidden:!1,...void 0===i?{split:i}:{}}};case x.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case x.MENU_ACCORDION:return{menuSetting:{accordion:t}};case x.MENU_TRIGGER:return{menuSetting:{trigger:t}};case x.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case x.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case x.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case x.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case x.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case x.MENU_THEME:return O(t),{menuSetting:{bgColor:t}};case x.MENU_SPLIT:return{menuSetting:{split:t}};case x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case x.MENU_FIXED:return{menuSetting:{fixed:t}};case x.MENU_TRIGGER_MIX_SIDEBAR:case x.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case x.OPEN_PAGE_LOADING:return _.commitPageLoadingState(!1),{transitionSetting:{openPageLoading:t}};case x.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case x.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case x.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case x.LOCK_TIME:return{lockTime:t};case x.FULL_CONTENT:return{fullContent:t};case x.CONTENT_MODE:return{contentMode:t};case x.SHOW_BREADCRUMB:return{showBreadCrumb:t};case x.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case x.GRAY_MODE:return g(t),{grayMode:t};case x.SHOW_FOOTER:return{showFooter:t};case x.COLOR_WEAK:return d(t),{colorWeak:t};case x.SHOW_LOGO:return{showLogo:t};case x.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case x.TABS_SHOW:return{multiTabsSetting:{show:t}};case x.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case x.HEADER_THEME:return u(t),{headerSetting:{bgColor:t}};case x.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case x.HEADER_FIXED:return{headerSetting:{fixed:t}};case x.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);_.commitProjectConfigState(n)}const $=["#ffffff","#009688","#5172DC","#1E9FFF","#018ffb","#409eff","#4e73df","#e74c3c","#24292e","#394664","#001529","#383f45"],z=["#273352","#ffffff","#191b24","#191a23","#001529","#304156","#001628","#28333E","#344058","#383f45"],{t:Z}=n();var q=S({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:i,getShowBreadCrumb:a,getShowBreadCrumbIcon:o,getShowLogo:l,getFullContent:E,getColorWeak:_,getGrayMode:u,getLockTime:d}=A(),{getOpenPageLoading:g,getBasicTransition:O,getEnableTransition:S,getOpenNProgress:m}=I(),{getIsHorizontal:C,getShowMenu:f,getMenuType:H,getTrigger:p,getCollapsedShowTitle:L,getMenuFixed:y,getCollapsed:X,getCanDrag:q,getTopMenuAlign:J,getAccordion:ee,getMenuWidth:te,getMenuBgColor:ne,getIsTopMenu:ie,getSplit:ae,getIsMixSidebar:oe,getCloseMixSidebarOnChange:le,getMixSideTrigger:se,getMixSideFixed:Ee}=c(),{getShowHeader:re,getFixed:_e,getHeaderBgColor:ue,getShowSearch:de}=B(),{getShowMultipleTab:ge,getShowQuick:Oe,getShowRedo:Se}=D(),Ne=N((()=>R(f)&&!R(C)));function Te(){let e=R(p);const t=(i=R(ae),[{value:r.NONE,label:w("layout.setting.menuTriggerNone")},{value:r.FOOTER,label:w("layout.setting.menuTriggerBottom")},...i?[]:[{value:r.HEADER,label:w("layout.setting.menuTriggerTop")}]]);var i;return t.some((t=>t.value===e))||(e=r.FOOTER),T(M,null,T(G,{title:Z("layout.setting.menuDrag"),event:x.MENU_HAS_DRAG,def:R(q),disabled:!R(Ne)}),T(G,{title:Z("layout.setting.menuSearch"),event:x.HEADER_SEARCH,def:R(de),disabled:!R(re)}),T(G,{title:Z("layout.setting.menuAccordion"),event:x.MENU_ACCORDION,def:R(ee),disabled:!R(Ne)}),T(G,{title:Z("layout.setting.menuCollapse"),event:x.MENU_COLLAPSED,def:R(X),disabled:!R(Ne)||R(oe)}),T(G,{title:Z("layout.setting.collapseMenuDisplayName"),event:x.MENU_COLLAPSED_SHOW_TITLE,def:R(L),disabled:!R(Ne)||!R(X)}),T(G,{title:Z("layout.setting.fixedHeader"),event:x.HEADER_FIXED,def:R(_e),disabled:!R(re)}),T(G,{title:Z("layout.setting.fixedSideBar"),event:x.MENU_FIXED,def:R(y),disabled:!R(Ne)||R(oe)}),T(P,{title:Z("layout.setting.topMenuLayout"),event:x.MENU_TOP_ALIGN,def:R(J),options:j,disabled:!R(re)||R(ae)||!R(ie)&&!R(ae)||R(oe)}),T(P,{title:Z("layout.setting.menuCollapseButton"),event:x.MENU_TRIGGER,def:e,options:t,disabled:!R(Ne)||R(oe)}),T(P,{title:Z("layout.setting.contentMode"),event:x.CONTENT_MODE,def:R(n),options:k}),T(F,{title:Z("layout.setting.autoScreenLock"),min:0,event:x.LOCK_TIME,defaultValue:R(d),formatter:e=>0===parseInt(e)?`0(${Z("layout.setting.notAutoScreenLock")})`:`${e}${Z("layout.setting.minute")}`}),T(F,{title:Z("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:x.MENU_WIDTH,disabled:!R(Ne),defaultValue:R(te),formatter:e=>`${parseInt(e)}px`}))}return()=>T(U,{...t,title:Z("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"},{default:()=>T(M,null,T(b,null,(()=>Z("layout.setting.navMode"))),T(M,null,T(v,{menuTypeList:Y,handler:e=>{V(x.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!R(C)&&void 0})},def:R(H)}),T(G,{title:Z("layout.setting.splitMenu"),event:x.MENU_SPLIT,def:R(ae),disabled:!R(Ne)||R(H)!==s.MIX}),T(G,{title:Z("layout.setting.mixSidebarFixed"),event:x.MENU_FIXED_MIX_SIDEBAR,def:R(Ee),disabled:!R(oe)}),T(G,{title:Z("layout.setting.closeMixSidebarOnChange"),event:x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:R(le),disabled:!R(oe)}),T(P,{title:Z("layout.setting.mixSidebarTrigger"),event:x.MENU_TRIGGER_MIX_SIDEBAR,def:R(se),options:Q,disabled:!R(oe)})),T(b,null,(()=>Z("layout.setting.headerTheme"))),T(h,{colorList:$,def:R(ue),event:x.HEADER_THEME}),T(b,null,(()=>Z("layout.setting.sidebarTheme"))),T(h,{colorList:z,def:R(ne),event:x.MENU_THEME}),T(b,null,(()=>Z("layout.setting.interfaceFunction"))),Te(),T(b,null,(()=>Z("layout.setting.interfaceDisplay"))),T(M,null,T(G,{title:Z("layout.setting.breadcrumb"),event:x.SHOW_BREADCRUMB,def:R(a),disabled:!R(re)}),T(G,{title:Z("layout.setting.breadcrumbIcon"),event:x.SHOW_BREADCRUMB_ICON,def:R(o),disabled:!R(re)}),T(G,{title:Z("layout.setting.tabs"),event:x.TABS_SHOW,def:R(ge)}),T(G,{title:Z("layout.setting.tabsRedoBtn"),event:x.TABS_SHOW_REDO,def:R(Se),disabled:!R(ge)}),T(G,{title:Z("layout.setting.tabsQuickBtn"),event:x.TABS_SHOW_QUICK,def:R(Oe),disabled:!R(ge)}),T(G,{title:Z("layout.setting.sidebar"),event:x.MENU_SHOW_SIDEBAR,def:R(f),disabled:R(C)}),T(G,{title:Z("layout.setting.header"),event:x.HEADER_SHOW,def:R(re)}),T(G,{title:"Logo",event:x.SHOW_LOGO,def:R(l),disabled:R(oe)}),T(G,{title:Z("layout.setting.footer"),event:x.SHOW_FOOTER,def:R(i)}),T(G,{title:Z("layout.setting.fullContent"),event:x.FULL_CONTENT,def:R(E)}),T(G,{title:Z("layout.setting.grayMode"),event:x.GRAY_MODE,def:R(u)}),T(G,{title:Z("layout.setting.colorWeak"),event:x.COLOR_WEAK,def:R(_)})),T(b,null,(()=>Z("layout.setting.animation"))),T(M,null,T(G,{title:Z("layout.setting.progress"),event:x.OPEN_PROGRESS,def:R(m)}),T(G,{title:Z("layout.setting.switchLoading"),event:x.OPEN_PAGE_LOADING,def:R(g)}),T(G,{title:Z("layout.setting.switchAnimation"),event:x.OPEN_ROUTE_TRANSITION,def:R(S)}),T(P,{title:Z("layout.setting.animationType"),event:x.ROUTER_TRANSITION,def:R(O),options:K,disabled:!R(S)})),T(b,null),T(W,null))})}}),J=S({name:"SettingButton",components:{SettingOutlined:y,SettingDrawer:q},setup(){const[e,{openDrawer:t}]=L(),{prefixCls:n}=m("setting-button");return{prefixCls:n,register:e,openDrawer:t}}});J.render=function(e,t,n,i,a,o){const l=C("SettingOutlined"),s=C("SettingDrawer");return f(),H("div",{onClick:t[1]||(t[1]=(...t)=>e.openDrawer&&e.openDrawer(...t)),class:e.prefixCls},[p(l),p(s,{onRegister:e.register},null,8,["onRegister"])],2)};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{V as b,ee as i};