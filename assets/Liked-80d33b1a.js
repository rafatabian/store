import{r as o,_ as h,a as m,b as u,j as e,L as p}from"./index-30dc07c3.js";import x from"./YourFsquare-57873d78.js";import j from"./YourSsquare-34629538.js";import k from"./YourGeniusBtn-96944673.js";import{b as f,F as v}from"./index.esm-a7e2629a.js";import{p as b}from"./products-de2471c6.js";import"./index.esm-d2453820.js";import"./index.esm-875b13c5.js";import"./logo_genius_btn-1d1d7c8b.js";import"./logo_genius-67e109af.js";const y="/store/assets/liked_folder_empty-94655c9f.webp",g=o.lazy(()=>h(()=>import("./Product-77bc72dc.js"),["assets/Product-77bc72dc.js","assets/index-30dc07c3.js","assets/index-274a069f.css","assets/index.esm-a7e2629a.js","assets/index-392173a5.js","assets/Product-a2f880a1.css"])),A=()=>{const{liked:t,redirectPage:d,mobile:a}=o.useContext(m),_=u();o.useEffect(()=>{d||_("/")}),o.useEffect(()=>{window.scrollTo({top:0})},[]);const r=s=>{const i=document.querySelector(".liked_content_blue_bar_first"),l=document.querySelector(".liked_content_blue_bar_second"),n=document.getElementById("liked_first_title"),c=document.getElementById("liked_second_title");s==="liked"?(i.style.backgroundColor="#005EB8",l.style.backgroundColor="transparent",n.style.color="#005EB8",c.style.color="black"):(l.style.backgroundColor="#005EB8",i.style.backgroundColor="transparent",c.style.color="#005EB8",n.style.color="black")};return e.jsxs("div",{className:"liked_container",children:[!a&&e.jsxs("div",{className:"liked_account_container",children:[e.jsx(x,{}),e.jsx(j,{}),e.jsx(k,{})]}),e.jsxs("div",{className:"liked_content_conteiner",children:[e.jsx("div",{className:"liked_content_title",children:e.jsx("h1",{children:"Liked"})}),e.jsxs("div",{className:"liked_content_menu",children:[e.jsxs("div",{className:"liked_content_first_menu",onClick:()=>r("liked"),children:[e.jsx("span",{className:"liked_content_blue_bar_first"}),e.jsx("h1",{id:"liked_first_title",children:"All the products"}),e.jsxs("p",{children:[t.length," products"]})]}),e.jsxs("div",{className:"liked_content_second_menu",onClick:()=>r("favorites"),children:[e.jsx("span",{className:"liked_content_blue_bar_second"}),e.jsx("h1",{id:"liked_second_title",children:"Favourites"}),e.jsxs("span",{children:[e.jsx("p",{children:"0 products "}),e.jsx(f,{})]}),e.jsx("p",{children:"Private list"})]})]}),e.jsxs("div",{className:"show_liked_products",children:[e.jsxs("div",{className:"show_liked_title",children:[e.jsx("h1",{children:"All the Products"}),e.jsxs("p",{children:[t.length," products"]})]}),t.length>0?b.map(s=>t.includes(s.id)&&e.jsx(g,{props:s},s.id+s.price[0])):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"show_liked_img_container",children:e.jsx("img",{src:y,alt:"oranges"})}),e.jsxs("div",{className:"show_liked_title_container",children:[e.jsx("h1",{children:"Hmm, no products added."}),e.jsx("h1",{children:"Here are some recomandations that can help."})]}),e.jsxs("div",{className:"show_liked_p_container",children:[e.jsx("p",{children:"Add products to the favorites to sort them."}),e.jsxs("p",{children:["You can share your products anytime with your friends, and can save them to the Favorites to buy them later.",e.jsx(v,{})]})]}),e.jsx("div",{className:"show_liked_btn_container",children:e.jsx(p,{to:"/",children:"See products"})})]})]})]})]})};export{A as default};
