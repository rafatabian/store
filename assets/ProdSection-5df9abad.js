import{r,j as t}from"./index-b228bbca.js";import f from"./Product-609630a3.js";import{p as u}from"./products-48c132cf.js";import{M as d}from"./index.esm-e1759289.js";import"./index.esm-55309041.js";import"./index-fac5f354.js";const S=({props:n})=>{const[a,p]=r.useState([]),l=r.useRef(null),[e,s]=r.useState(0);r.useEffect(()=>{p(u)},[]);const i=o=>{const c=l.current.scrollWidth;o==="R"&&s(e===c?0:c),o==="L"&&s(e===c?0:c)};return r.useEffect(()=>{const o=l.current;o.scrollLeft=e},[e]),t.jsxs("div",{className:"home_section",children:[t.jsx("h1",{children:n.charAt(0).toUpperCase()+n.slice(1)}),t.jsx("div",{className:"items",ref:l,children:a.map(o=>o.category==`${n}`?t.jsx(f,{props:o},o.id+o.price[0]):null)}),t.jsx("button",{id:"home_L",onClick:()=>i("L"),"aria-label":"scroll products to the left",children:t.jsx(d,{})}),t.jsx("button",{id:"home_R",onClick:()=>i("R"),"aria-label":"scroll products to the right",children:t.jsx(d,{})})]})};export{S as default};