let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,d9 as i,da as s,i as o,o as a,j as r,k as d,bp as n,p as m}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import{s as p}from"./index.5edef697.js";import"./index.278c333c.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useAttrs.fddcc395.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import{u as c}from"./useForm.9a3cc7ae.js";import{step2Schemas as l}from"./data.da74d885.js";var j=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[i,{validate:s,setProps:o}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:i}}});const u=n("data-v-3e6a7e30");i("data-v-3e6a7e30");const f={class:"step2"},b=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");s();const h=u(((t,e,i,s,n,m)=>{const p=o("a-alert"),c=o("a-descriptions-item"),l=o("a-descriptions"),j=o("a-divider"),h=o("BasicForm");return a(),r("div",f,[d(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),d(l,{column:1,class:"mt-5"},{default:u((()=>[d(c,{label:"付款账户"},{default:u((()=>[b])),_:1}),d(c,{label:"收款账户"},{default:u((()=>[x])),_:1}),d(c,{label:"收款人姓名"},{default:u((()=>[g])),_:1}),d(c,{label:"转账金额"},{default:u((()=>[O])),_:1})])),_:1}),d(j),d(h,{onRegister:t.register},null,8,["onRegister"])])}));j.render=h,j.__scopeId="data-v-3e6a7e30";export default j;