import{bm as e,cW as n,cX as t}from"./index.c5d8d2c2.js";function i(i,s=150,r){let o=()=>{i()};const[d,c]=e(o,s,r);o=d;const a=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),c()};return n((()=>{a()})),t((()=>{m()})),[a,m]}export{i as u};