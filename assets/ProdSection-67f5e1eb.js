import{r as t,j as r}from"./index-aa36164b.js";import p from"./Product-33639192.js";import{p as u}from"./products-de2471c6.js";import{M as l}from"./index.esm-60ca2192.js";import"./index.esm-d8ec3e8a.js";import"./index-e7e71a92.js";const S=({props:c})=>{const[a,f]=t.useState([]),i=t.useRef(null),[e,s]=t.useState(0);t.useEffect(()=>{f(u)},[]);const d=o=>{const n=i.current.scrollWidth;o==="R"&&s(e===n?0:n),o==="L"&&s(e===n?0:n)};return t.useEffect(()=>{const o=i.current;o.scrollLeft=e},[e]),r.jsxs("div",{className:"home_section",children:[r.jsx("h1",{children:c.charAt(0).toUpperCase()+c.slice(1)}),r.jsx("div",{className:"items",ref:i,children:a.map(o=>o.category==`${c}`?r.jsx(p,{props:o},o.id+o.price[0]):null)}),r.jsx("button",{id:"home_L",onClick:()=>d("L"),children:r.jsx(l,{})}),r.jsx("button",{id:"home_R",onClick:()=>d("R"),children:r.jsx(l,{})})]})};export{S as default};