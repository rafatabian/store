import{r as o,_ as h,a as m,b as u,j as e,L as p}from"./index-b238fb6e.js";import x from"./YourFsquare-ac62d7e8.js";import j from"./YourSsquare-7623d857.js";import k from"./YourGeniusBtn-ee3ecfde.js";import{b as f,F as v}from"./index.esm-782353b9.js";import{p as b}from"./products-b30bc2fc.js";import"./index.esm-deb63c76.js";import"./index.esm-481692e4.js";import"./index.esm-04e97f57.js";import"./logo_genius_btn-3604c32d.js";import"./logo_genius-5077a98c.js";const y="/store/assets/liked_folder_empty-f2b3ebc6.webp",g=o.lazy(()=>h(()=>import("./Product-1cf88f2a.js"),["assets/Product-1cf88f2a.js","assets/index-b238fb6e.js","assets/index-cdec8ad9.css","assets/index.esm-782353b9.js","assets/index-c106062c.js","assets/Product-e49e0630.css"])),T=()=>{const{liked:t,redirectPage:d,mobile:a}=o.useContext(m),_=u();o.useEffect(()=>{d||_("/")}),o.useEffect(()=>{window.scrollTo({top:0})},[]);const r=s=>{const i=document.querySelector(".liked_content_blue_bar_first"),l=document.querySelector(".liked_content_blue_bar_second"),n=document.getElementById("liked_first_title"),c=document.getElementById("liked_second_title");s==="liked"?(i.style.backgroundColor="#005EB8",l.style.backgroundColor="transparent",n.style.color="#005EB8",c.style.color="black"):(l.style.backgroundColor="#005EB8",i.style.backgroundColor="transparent",c.style.color="#005EB8",n.style.color="black")};return e.jsxs("div",{className:"liked_container",children:[!a&&e.jsxs("div",{className:"liked_account_container",children:[e.jsx(x,{}),e.jsx(j,{}),e.jsx(k,{})]}),e.jsxs("div",{className:"liked_content_conteiner",children:[e.jsx("div",{className:"liked_content_title",children:e.jsx("h1",{children:"Liked"})}),e.jsxs("div",{className:"liked_content_menu",children:[e.jsxs("div",{className:"liked_content_first_menu",onClick:()=>r("liked"),children:[e.jsx("span",{className:"liked_content_blue_bar_first"}),e.jsx("h1",{id:"liked_first_title",children:"All the products"}),e.jsxs("p",{children:[t.length," products"]})]}),e.jsxs("div",{className:"liked_content_second_menu",onClick:()=>r("favorites"),children:[e.jsx("span",{className:"liked_content_blue_bar_second"}),e.jsx("h1",{id:"liked_second_title",children:"Favourites"}),e.jsxs("span",{children:[e.jsx("p",{children:"0 products "}),e.jsx(f,{})]}),e.jsx("p",{children:"Private list"})]})]}),e.jsxs("div",{className:"show_liked_products",children:[e.jsxs("div",{className:"show_liked_title",children:[e.jsx("h1",{children:"All the Products"}),e.jsxs("p",{children:[t.length," products"]})]}),t.length>0?b.map(s=>t.includes(s.id)&&e.jsx(g,{props:s},s.id+s.price[0])):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"show_liked_img_container",children:e.jsx("img",{src:y,alt:"oranges"})}),e.jsxs("div",{className:"show_liked_title_container",children:[e.jsx("h1",{children:"Hmm, no products added."}),e.jsx("h1",{children:"Here are some recomandations that can help."})]}),e.jsxs("div",{className:"show_liked_p_container",children:[e.jsx("p",{children:"Add products to the favorites to sort them."}),e.jsxs("p",{children:["You can share your products anytime with your friends, and can save them to the Favorites to buy them later.",e.jsx(v,{})]})]}),e.jsx("div",{className:"show_liked_btn_container",children:e.jsx(p,{to:"/",children:"See products"})})]})]})]})]})};export{T as default};
