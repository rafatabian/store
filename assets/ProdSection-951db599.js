import{r,a as m,j as e}from"./index-3882f5f9.js";import f from"./Product-7334718b.js";import{p as x}from"./products-b30bc2fc.js";import{M as a}from"./index.esm-27157d12.js";import"./index.esm-b02debe1.js";import"./index-da87bedb.js";const P=({props:n})=>{const{mobile:c}=r.useContext(m),[p,u]=r.useState([]),i=r.useRef(null),[t,s]=r.useState(0);r.useEffect(()=>{u(x)},[]);const l=o=>{const d=i.current.scrollWidth;o==="R"?t<d/4?s(t+300):s(0):t<10?s(d/4):s(t-300)};return r.useEffect(()=>{const o=i.current;o.scrollLeft=t},[t]),e.jsxs("div",{className:"home_section",style:{margin:c?"3rem 10px":null},children:[e.jsx("h1",{children:n.charAt(0).toUpperCase()+n.slice(1)}),e.jsx("div",{className:"items",ref:i,children:p.map(o=>o.category==`${n}`?e.jsx(f,{props:o},o.id+o.price[0]):null)}),!c&&e.jsx("button",{id:"home_L",onClick:()=>l("L"),children:e.jsx(a,{})}),!c&&e.jsx("button",{id:"home_R",onClick:()=>l("R"),children:e.jsx(a,{})})]})};export{P as default};
