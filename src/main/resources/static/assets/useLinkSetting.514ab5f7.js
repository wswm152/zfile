import{l as u,c as i}from"./admin-setting.15abbbb6.js";import{ay as e}from"./index.f883e59e.js";import{E as d}from"./request.df7e735f.js";function f(){const{data:a,loading:t,reload:s}=e(u,{formatResult:r=>r.data}),{loading:o,run:n}=e(i,{manual:!0,onSuccess(){d({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:a,dataLoading:t,reload:s,saveData:()=>{n(a.value)},saveLoading:o}}export{f as u};