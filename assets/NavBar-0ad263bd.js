import{j as e,L as a,r,a as D,u as K,b as q}from"./index-a1ad70d6.js";import{d as G}from"./dollar-inage-98a76c0f.js";import J from"./ExistingAcc-fa9ad3eb.js";import{B as Q,a as F,b as L,c as W,d as z}from"./index.esm-6e3aa0f4.js";import{I as U,a as V,b as X,c as Y,d as Z,e as ee,f as se,g as ae}from"./index.esm-e177649d.js";import{I as n,a as re}from"./index.esm-37508d06.js";import{F as ne}from"./index.esm-1b969ce0.js";import{L as ce,a as ie}from"./index.esm-9ff049e1.js";import{B as oe}from"./index.esm-dbdc508a.js";import{F as te,a as le}from"./index.esm-35978d6e.js";import{R as de,a as he}from"./index.esm-98ed4042.js";const ue=()=>e.jsxs("div",{className:"login_popup_account",children:[e.jsxs("div",{className:"login_text_icon",children:[e.jsx(Q,{}),e.jsx("p",{children:"Join us and you will have access over premium feautures for free"})]}),e.jsxs("div",{className:"login_buttons",children:[e.jsxs(a,{to:"/login",children:[e.jsx(F,{}),e.jsx("p",{children:"Create an Account"})]}),e.jsx(a,{to:"",children:"Login"})]})]}),Ce=({props:I,data:b})=>{const{name:c,redirectPage:E,setRedirectPage:f,premGenius:g,liked:k,cartProd:v,setSection:i}=r.useContext(D),[M,l]=r.useState(null),[o,t]=r.useState(""),[P,N]=r.useState(!0),[C,S]=r.useState(!0),[O,B]=r.useState(!0),[y,w]=r.useState(""),[d,h]=r.useState(!1),[u,j]=r.useState(!1),x=K(),m=q();r.useEffect(()=>{if(x.pathname==="/"){w("");const s=document.getElementById("searchBar");s&&(s.value="")}},[x.pathname]),r.useEffect(()=>{switch(x.pathname){case"/liked":S(!1);break;case"/your-account":N(!1);break;case"/cart":B(!1);break}},[x.pathname]);const _=s=>{if(f(s),s==="account")N(!1),H();else if(s==="liked")S(!1);else if(s==="cart")B(!1);else return},R=()=>{g||h(!0),g&&x.pathname!=="/genius"&&h(!0)};r.useEffect(()=>{const s=()=>l(!1);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const H=()=>{E==="account"&&!c&&m("/login")},A=s=>{s==="Enter"&&(m("/search?data="+y),l(!1),j(!1))},T=()=>{j(!1),m("/search?data="+y),l(!1)},p=s=>{j(!1),m("/search?data="+s)};r.useEffect(()=>{const s=document.querySelector("body");s.style.overflow=d||u?"hidden":"visible"},[d,u]);const $=()=>{l(!0),window.innerWidth<750&&j(!0)};return e.jsxs("div",{className:`navbar_container ${(I||b)&&"navbar_container_color_line"} ${b&&"nav_make_appear"} `,children:[e.jsxs("div",{className:"navbar_logo_container",children:[d?d&&e.jsx(U,{className:"navbar_close_icon",onClick:()=>h(!1)}):e.jsx(ce,{className:"navbar_showing_menu_icon",onClick:()=>R()}),e.jsxs(a,{to:"/",onClick:()=>h(!1),"aria-label":"home",children:[e.jsx("h1",{children:"ST"}),e.jsx("img",{src:G,alt:"store logo",fetchpriority:"high"}),e.jsx("h1",{children:"RE"})]})]}),d&&e.jsx("div",{className:"navbar_mobile_blur_menu",onClick:()=>h(!1),children:e.jsxs("div",{className:"navbar_mobile_links_menu",children:[c?c&&e.jsxs(a,{to:"your-account","aria-label":"your account",children:[e.jsxs("div",{children:[e.jsx(L,{}),e.jsx("p",{children:"My account"})]}),e.jsx(n,{})]}):e.jsx("div",{className:"navbar_mobile_login",children:e.jsxs("div",{children:[e.jsx("p",{children:"Log into your Store account for full control over exclusive offers!"}),e.jsx(a,{to:"/login",onClick:()=>f("account"),"aria-label":"create an account",children:"Create an account"})]})}),!c&&e.jsx("h1",{children:"Categories"}),e.jsxs(a,{to:"/products-categories?data=cameras-tech","aria-label":"tech",children:[e.jsxs("div",{children:[e.jsx(V,{})," ",e.jsx("p",{children:"Cameras & Tech"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=fashion-decorations","aria-label":"fashion",children:[e.jsxs("div",{children:[e.jsx(X,{})," ",e.jsx("p",{children:"Fashion & Decorations"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=sports-camping",onClick:()=>i("camping"),"aria-label":"sports",children:[e.jsxs("div",{children:[e.jsx(re,{})," ",e.jsx("p",{children:"Sports & Camping"})," "]}),e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=home-bedroom",onClick:()=>i("home"),"aria-label":"bedroom",children:[e.jsxs("div",{children:[e.jsx(Y,{})," ",e.jsx("p",{children:"Home & Bedroom"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=music-entertainment",onClick:()=>i("electronics"),"aria-label":"entertainment",children:[e.jsxs("div",{children:[e.jsx(Z,{})," ",e.jsx("p",{children:"Music & Entertainment"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=essential",onClick:()=>i("essentals"),"aria-label":"essentials",children:[e.jsxs("div",{children:[e.jsx(ee,{})," ",e.jsx("p",{children:"Essentials"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=discover-products",onClick:()=>i("discover"),"aria-label":"discover",children:[e.jsxs("div",{children:[e.jsx(ne,{})," ",e.jsx("p",{children:"Discover Products"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=teeth-care","aria-label":"oral hygiene",children:[e.jsxs("div",{children:[e.jsx(se,{})," ",e.jsx("p",{children:"Teeth Care"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=tools","aria-label":"tools",children:[e.jsxs("div",{children:[e.jsx(ae,{})," ",e.jsx("p",{children:"Tools"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=christmas",onClick:()=>i("home"),"aria-label":"christmas",children:[e.jsxs("div",{children:[e.jsx(W,{})," ",e.jsx("p",{children:"Christmas"})]})," ",e.jsx(n,{})]}),e.jsxs(a,{to:"/products-categories?data=relax-selfcare",onClick:()=>i("fashion"),"aria-label":"selfcare",children:[e.jsxs("div",{children:[e.jsx(ie,{})," ",e.jsx("p",{children:"Relax & Selfcare"})]})," ",e.jsx(n,{})]})]})}),e.jsxs("div",{className:"navbar_search_container",children:[e.jsx("input",{type:"text",placeholder:"Search Products",id:"searchBar",onClick:()=>$(),onKeyDown:s=>A(s.key),onChange:s=>w(s.target.value),className:u?"input_to_the_top":""}),e.jsx("button",{onClick:()=>T(),className:`navbar_button_for_searching_prod ${u&&"button_to_the_top"}`,"aria-label":"Search",children:e.jsx(oe,{})}),M&&e.jsx("span",{className:"navbar_page_blur",onClick:()=>l(!1)}),u&&e.jsxs("div",{className:"navbar_mobile_search_menu",children:[e.jsx("h1",{children:"Popular searches on Store"}),e.jsx("p",{onClick:()=>p("sleeve"),children:"sleeve"}),e.jsx("p",{onClick:()=>p("camera"),children:"camera"}),e.jsx("p",{onClick:()=>p("tool"),children:"tool"}),e.jsx("p",{onClick:()=>p("waterproof"),children:"waterproof"})]})]}),e.jsxs("div",{className:"navbar_menu_icons",children:[e.jsxs("div",{className:"navbar_account",onMouseOver:()=>t("account"),onMouseLeave:()=>t(""),onClick:()=>_("account"),children:[e.jsxs(a,{to:c?"/your-account":"/login","aria-label":"account",children:[e.jsxs("div",{className:"navbar_account_icon_noti",children:[o==="account"?e.jsx(z,{}):e.jsx(L,{}),P&&e.jsx("span",{id:"account-noti",children:"!"})]}),e.jsx("h2",{className:"navbar_account_name",children:c?"Account":"Sign-up"})]}),o==="account"&&!c?e.jsx(ue,{}):o==="account"&&c?e.jsx(J,{}):""]}),e.jsxs("div",{className:"navbar_liked",onMouseOver:()=>t("liked"),onMouseLeave:()=>t(""),onClick:()=>_("liked"),children:[e.jsxs(a,{to:c?"/liked":"/login","aria-label":"liked product",children:[e.jsxs("div",{className:"navbar_liked_icon_noti",children:[o==="liked"?e.jsx(te,{}):e.jsx(le,{}),!C&&k.length!==0&&e.jsx("span",{children:k.length}),C&&e.jsx("span",{className:"navbar_popup_link_notification",children:"!"})]}),e.jsx("h2",{className:"navbar_liked_name",children:"Liked"})]}),o==="liked"&&e.jsx("div",{className:"navbar_popup_liked",children:e.jsx("h1",{children:"Here are your favorite products"})})]}),e.jsxs("div",{className:"navbar_cart",onMouseOver:()=>t("cart"),onMouseLeave:()=>t(""),onClick:()=>_("cart"),children:[e.jsxs(a,{to:"/cart","aria-label":"cart",children:[e.jsxs("div",{className:"navbar_cart_icon_noti",children:[o==="cart"?e.jsx(de,{}):e.jsx(he,{}),v&&v.length!==0&&e.jsx("span",{className:"nav_cart_icon",children:v.length}),O&&e.jsx("span",{className:"navbar_popup_link_notification",children:"!"})]}),e.jsx("h2",{className:"navbar_cart_name",children:"Cart"})]}),o==="cart"&&e.jsxs("div",{className:"navbar_popup_cart",children:[e.jsx("h1",{children:"Add products to the cart"}),e.jsx("div",{className:"navbar_cart_button",children:e.jsxs(a,{to:"/cart","aria-label":"cart",children:[e.jsx(F,{}),e.jsx("p",{children:"See cart details"})]})})]})]})]})]})};export{Ce as default};
