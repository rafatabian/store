import{r as t,a as u,u as h,j as s,L as e}from"./index-f896b9ea.js";import{a as m}from"./index.esm-8037c1ce.js";import{b as x,a as I}from"./index.esm-b985a701.js";import{a as j,b as p,c as _,d as v,e as f,f as g,g as k}from"./index.esm-05da4928.js";import{F as C}from"./index.esm-2b7efdda.js";import{c as N}from"./index.esm-958aa514.js";import{a as S}from"./index.esm-480303be.js";const w=()=>{const{name:i,setRedirectPage:l,setSection:o}=t.useContext(u),[n,r]=t.useState(!1),a=h().pathname==="/";t.useEffect(()=>{r(a)},[a]);const c=d=>{a||r(d)};return s.jsx("div",{className:"nav_II_container",children:s.jsxs("div",{className:"navII_width",children:[s.jsxs("div",{className:"nav_II_buttons_container",children:[s.jsxs("div",{className:`nav_II_products_btn ${n?"nav_II_products_btn_toggle":null}`,onMouseOver:()=>c(!0),onMouseLeave:()=>c(!1),children:[s.jsx(x,{}),s.jsx("p",{children:"Products"}),n&&s.jsxs("div",{className:"nav_II_menu",children:[s.jsxs(e,{to:"/products-categories?data=cameras-tech",children:[s.jsx(j,{})," Cameras & Tech"]}),s.jsxs(e,{to:"/products-categories?data=fashion-decorations",children:[s.jsx(p,{})," Fashion & Decorations"]}),s.jsxs(e,{to:"/products-categories?data=sports-camping",onClick:()=>o("camping"),children:[s.jsx(I,{})," Sports & Camping"]}),s.jsxs(e,{to:"/products-categories?data=home-bedroom",onClick:()=>o("home"),children:[s.jsx(_,{})," Home & Bedroom"]}),s.jsxs(e,{to:"/products-categories?data=music-entertainment",onClick:()=>o("electronics"),children:[s.jsx(v,{})," Music & Entertainment"]}),s.jsxs(e,{to:"/products-categories?data=essential",onClick:()=>o("essentals"),children:[s.jsx(f,{})," Essentials"]}),s.jsxs(e,{to:"/products-categories?data=discover-products",onClick:()=>o("discover"),children:[s.jsx(C,{})," Discover Products"]}),s.jsxs(e,{to:"/products-categories?data=teeth-care",children:[s.jsx(g,{})," Teeth Care"]}),s.jsxs(e,{to:"/products-categories?data=tools",children:[s.jsx(k,{})," Tools"]}),s.jsxs(e,{to:"/products-categories?data=christmas",onClick:()=>o("home"),children:[s.jsx(N,{})," Christmas"]}),s.jsxs(e,{to:"/products-categories?data=relax-selfcare",onClick:()=>o("fashion"),children:[s.jsx(S,{})," Relax & Selfcare"]})]})]}),s.jsx(e,{to:"",onClick:()=>o("electronics"),className:"nav_II_links_hover",children:"Genius Deal"}),s.jsx(e,{to:"",onClick:()=>o("fashion"),className:"nav_II_links_hover",children:"Today offer"}),s.jsx(e,{to:"",onClick:()=>o("discover"),className:"nav_II_links_hover",children:"Store offers"}),s.jsx(e,{to:"",onClick:()=>o("essentals"),className:"nav_II_links_hover",children:"Bestsellers"}),s.jsx(e,{to:i?"/genius":"/login",onClick:()=>l("genius"),className:"nav_II_links_hover",children:"Genius"})]}),s.jsxs(e,{to:"/help",className:"nav_II_help_btn",children:[s.jsx(m,{}),"Info & Support"]})]})})};export{w as default};
