import{r as d,a as l,u,b as x,j as s,f as h,L as e,g as j}from"./index-30dc07c3.js";import{i as m}from"./index.esm-a7e2629a.js";import{d as p}from"./index.esm-d2453820.js";import{I as _}from"./index.esm-875b13c5.js";const N=()=>{const{name:o,setShowSettings:r,localImg:n}=d.useContext(l),c=new Date().toLocaleDateString(),t=u(),a=x(),i=()=>{(t.pathname==="/liked"||t.pathname==="/see-reviews")&&a("/your-account"),r(!0)};return s.jsxs("div",{className:"yourAccount_info_square",children:[s.jsxs("div",{className:"yourAccount_firts_square_background",children:[s.jsx("div",{className:"yourAccount_photo",children:n?s.jsx("img",{src:n}):s.jsx("p",{children:o.charAt(0)})}),s.jsxs("div",{className:"yourAccount_name_and_date",children:[s.jsx("h1",{children:o}),s.jsxs("p",{children:["created on ",c]})]}),s.jsx("button",{onClick:()=>i(),children:s.jsx(h,{})})]}),s.jsxs("div",{className:"yourAccount_first_options",children:[s.jsxs(e,{to:"",children:[s.jsx("div",{children:s.jsx(m,{})}),s.jsx("p",{children:"Orders"})]}),s.jsxs(e,{to:"",children:[s.jsx("div",{children:s.jsx(p,{})}),s.jsx("p",{children:"Discounts"})]}),s.jsxs(e,{to:"/help",children:[s.jsx("div",{children:s.jsx(j,{})}),s.jsx("p",{children:"Help"})]})]}),s.jsxs("button",{onClick:()=>i(),className:"yourAccount_add_number",children:[s.jsx("p",{children:"Add Your Phone Number"}),s.jsx(_,{})]})]})};export{N as default};
