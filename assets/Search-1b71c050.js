import{r as t,_ as y,u as S,j as e}from"./index-b238fb6e.js";import{p as r}from"./products-b30bc2fc.js";import{i as E}from"./index.esm-6c2eafac.js";import{c as k,d as I,e as L}from"./index.esm-3b5e9c9e.js";const R=t.lazy(()=>y(()=>import("./Product-1cf88f2a.js"),["assets/Product-1cf88f2a.js","assets/index-b238fb6e.js","assets/index-cdec8ad9.css","assets/index.esm-782353b9.js","assets/index-c106062c.js","assets/Product-e49e0630.css"])),W=t.lazy(()=>y(()=>import("./Footer-bc5a0463.js"),["assets/Footer-bc5a0463.js","assets/index-b238fb6e.js","assets/index-cdec8ad9.css","assets/index.esm-09fffb7b.js","assets/index.esm-481692e4.js","assets/Footer-56c206c1.css"])),A=()=>{const[l,w]=t.useState([]),[p,i]=t.useState([]),[c,d]=t.useState(2),[v,C]=t.useState([]),[b,h]=t.useState(0),[m,j]=t.useState(null),P=S(),o=new URLSearchParams(P.search).get("data");let _=new Set,u=[];t.useEffect(()=>{let s=o.toLowerCase();const n=new RegExp(s,"i");for(let a=0;a<r.length;a++){const g=r[a].name.split(" ");for(let f=0;f<g.length;f++){const N=g[f].toLowerCase();n.test(N)&&(_.add(r[a].id),u.includes(r[a].category)||u.push(r[a].category))}}(()=>{w(Array.from(_)),C(u)})()},[o,r]),t.useEffect(()=>{l.length===0?j(!0):j(!1)},[l]),t.useEffect(()=>{const s=window.innerWidth;s>1260?(i(["repeat(4, 1fr)","flex-start"]),h("947px")):s<980?(i(["repeat(2, 1fr)","center"]),h("464px")):s<1260&&(i(["repeat(3, 1fr)","flex-start"]),h("706px"))},[]);const x=s=>{const n=window.innerWidth;s===1?(i([`repeat(${n<980?"1":"2"}, 1fr)`,"flex-start"]),d(1)):s===2?(i([`repeat(${n<980?"2":n<1260?"3":"4"}, 1fr)`,"flex-start"]),d(2)):(i([`repeat(${n<980?"1":"2"}, 1fr)`,"flex-end"]),d(3))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"search_results_container",children:[e.jsxs("div",{className:"search_left_section",children:[e.jsx("h1",{children:m?"No categories found":"Categories found"}),v.map(s=>e.jsx("p",{children:s},s))]}),e.jsxs("div",{className:"search_right_container",children:[e.jsxs("div",{className:"search_menu",style:{width:b},children:[e.jsxs("h1",{children:[l.length," results for: ",e.jsxs("p",{children:['"',o.length>20?o.slice(0,20)+"...":o,'"']})]}),e.jsxs("p",{children:[e.jsx(E,{}),"Select a category to view the available filters"]}),e.jsxs("span",{className:"search_right_order_settings",children:[e.jsx("p",{children:"Order by: relevance"}),e.jsxs("span",{children:[e.jsx("p",{className:"",children:"Display mode:"}),e.jsxs("div",{className:"search_display_btns",children:[e.jsx("button",{onClick:()=>x(1),style:{backgroundColor:c===1?"#e0e0e0":"white"},children:e.jsx(k,{})}),e.jsx("button",{onClick:()=>x(2),style:{backgroundColor:c===2?"#e0e0e0":"white"},children:e.jsx(I,{})}),e.jsx("button",{onClick:()=>x(3),style:{backgroundColor:c===3?"#e0e0e0":"white"},children:e.jsx(L,{})})]})]})]})]}),e.jsxs("div",{className:"search_results",style:{justifyContent:p[1]},children:[m?e.jsxs("div",{className:"search_no_prod_found",children:[e.jsx("h1",{children:"To find the desired product, try the following:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check if you've spelled the terms correctly."}),e.jsx("li",{children:"Consider using synonyms."}),e.jsx("li",{children:"Please retry with a broader search."}),e.jsx("li",{children:"Explore the different sections."})]})]}):null,e.jsx("div",{className:"search_display_mode",style:{gridTemplateColumns:p[0]},children:r.map(s=>l.includes(s.id)?e.jsx(R,{props:s},s.price[0]+s.price[1]):null)})]})]})]}),e.jsx(W,{})]})};export{A as default};
