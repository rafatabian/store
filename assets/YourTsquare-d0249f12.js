import{r as h,a as p,j as s}from"./index-2407b54e.js";import{c as x}from"./index.esm-9d23ccef.js";const _=()=>{const{alias:e,name:n,phoneNr:c,email:t,setShowSettings:o,localImg:a,setLocalImg:r}=h.useContext(p),l=d=>{const i=d.target.files[0];if(i){const u=URL.createObjectURL(i);r(u)}};return s.jsxs("div",{className:"yourAccount_account_square",children:[s.jsx("h1",{children:"Account Info"}),s.jsxs("div",{className:"yourAccount_info_info",children:[s.jsxs("span",{className:"yourAccount_first_span",children:[a?s.jsx("img",{src:a}):s.jsx("p",{children:n.charAt(0)}),s.jsx("button",{onClick:()=>document.getElementById("fileInput").click(),children:s.jsx(x,{})}),s.jsx("input",{type:"file",id:"fileInput",accept:"image/*",style:{display:"none"},onChange:l})]}),s.jsxs("span",{className:"yourAccount_second_span_data",children:[s.jsxs("span",{children:[s.jsx("p",{children:"Alias:"}),s.jsx("p",{children:"Name:"}),s.jsx("p",{children:"Email:"}),s.jsx("p",{children:"Phone:"})]}),s.jsxs("span",{children:[s.jsx("p",{children:e||"add"}),s.jsx("p",{children:n||"add"}),s.jsx("p",{children:t||"add"}),s.jsx("p",{children:c||"add"})]})]}),s.jsxs("span",{className:"yourAccount_third_span_thanks",children:[s.jsx("p",{children:"Thank you for beeing with us from"}),s.jsx("i",{children:"Today"})]})]}),s.jsx("div",{className:"yourAccount_info_button_section",children:s.jsx("button",{className:"yourAccount_open_edit",onClick:()=>o(!0),children:"Edit account"})})]})};export{_ as default};