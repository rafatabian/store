import{j as e,L as a,r as n,a as J,u as Q,b as W}from"./index-3d19e93a.js";import{d as z}from"./dollar-inage-9b8e0cf2.js";import U from"./ExistingAcc-e85892e4.js";import{B as V,a as E,b as M,c as X,d as Y}from"./index.esm-bd221582.js";import{I as Z,a as ee,b as se,c as ae,d as ne,e as oe,f as ce,g as ie}from"./index.esm-374bc675.js";import{I as o,a as re}from"./index.esm-d7592cbe.js";import{F as te}from"./index.esm-e43d1c58.js";import{L as le,a as de}from"./index.esm-d2822621.js";import{B as he}from"./index.esm-38c07a72.js";import{F as ue,a as xe}from"./index.esm-7250ca1a.js";import{R as je,a as me}from"./index.esm-3af5fe0d.js";const pe=()=>e.jsxs("div",{className:"login_popup_account",children:[e.jsxs("div",{className:"login_text_icon",children:[e.jsx(V,{}),e.jsx("p",{children:"Join us and you will have access over premium feautures for free"})]}),e.jsxs("div",{className:"login_buttons",children:[e.jsxs(a,{to:"/login",children:[e.jsx(E,{}),e.jsx("p",{children:"Create an Account"})]}),e.jsx(a,{to:"",children:"Login"})]})]}),Le=({props:P,data:_})=>{const{name:c,redirectPage:H,setRedirectPage:g,premGenius:b,liked:k,cartProd:v,mobile:N,setMobile:C,lessTenH:ve,setLessTenH:S,setSection:i}=n.useContext(J),[O,d]=n.useState(null),[r,R]=n.useState(""),[T,B]=n.useState(!0),[w,y]=n.useState(!0),[A,L]=n.useState(!0),[F,I]=n.useState(""),[h,u]=n.useState(!1),[x,j]=n.useState(!1),t=Q(),m=W();n.useEffect(()=>{if(t.pathname==="/"){I("");const s=document.getElementById("searchBar");s&&(s.value="")}},[t.pathname]);const l=s=>{N||R(s)};n.useEffect(()=>{t.pathname=="/liked"?y(!1):t.pathname=="/your-account"?B(!1):t.pathname=="/cart"&&L(!1)});const f=s=>{if(g(s),s==="account")B(!1),D();else if(s==="liked")y(!1);else if(s==="cart")L(!1);else return},$=()=>{b||u(!0),b&&t.pathname!=="/genius"&&u(!0)};n.useEffect(()=>{window.addEventListener("scroll",()=>{d(!1)})});const D=()=>{H==="account"&&!c&&m("/login")},K=s=>{s==="Enter"&&(m("/search?data="+F),d(!1),j(!1))},q=()=>{j(!1),m("/search?data="+F),d(!1)},p=s=>{j(!1),m("/search?data="+s)};n.useEffect(()=>{const s=window.innerWidth;s<750?C(!0):s<950?S(!0):s>949&&(S(!1),C(!1))},[]),n.useEffect(()=>{const s=document.querySelector("body");h||x?s&&(s.style.overflow="hidden"):s.style.overflow="visible"},[h,x]);const G=()=>{d(!0),N&&j(!0)};return e.jsxs("div",{className:`navbar_container ${(P||_)&&"navbar_container_color_line"} ${_&&"nav_make_appear"} `,children:[e.jsxs("div",{className:"navbar_logo_container",children:[h?h&&e.jsx(Z,{className:"navbar_close_icon",onClick:()=>u(!1)}):e.jsx(le,{className:"navbar_showing_menu_icon",onClick:()=>$()}),e.jsxs(a,{to:"/",onClick:()=>u(!1),children:[e.jsx("h1",{children:"ST"}),e.jsx("img",{src:z,alt:"store logo"}),e.jsx("h1",{children:"RE"})]})]}),h&&e.jsx("div",{className:"navbar_mobile_blur_menu",onClick:()=>u(!1),children:e.jsxs("div",{className:"navbar_mobile_links_menu",children:[c?c&&e.jsxs(a,{to:"your-account",children:[e.jsxs("div",{children:[e.jsx(M,{}),e.jsx("p",{children:"My account"})]}),e.jsx(o,{})]}):e.jsx("div",{className:"navbar_mobile_login",children:e.jsxs("div",{children:[e.jsx("p",{children:"Log into your Store account for full control over exclusive offers!"}),e.jsx(a,{to:"/login",onClick:()=>g("account"),children:"Create an account"})]})}),!c&&e.jsx("h1",{children:"Categories"}),e.jsxs(a,{to:"/products-categories?data=cameras-tech",children:[e.jsxs("div",{children:[e.jsx(ee,{})," ",e.jsx("p",{children:"Cameras & Tech"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=fashion-decorations",children:[e.jsxs("div",{children:[e.jsx(se,{})," ",e.jsx("p",{children:"Fashion & Decorations"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=sports-camping",onClick:()=>i("camping"),children:[e.jsxs("div",{children:[e.jsx(re,{})," ",e.jsx("p",{children:"Sports & Camping"})," "]}),e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=home-bedroom",onClick:()=>i("home"),children:[e.jsxs("div",{children:[e.jsx(ae,{})," ",e.jsx("p",{children:"Home & Bedroom"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=music-entertainment",onClick:()=>i("electronics"),children:[e.jsxs("div",{children:[e.jsx(ne,{})," ",e.jsx("p",{children:"Music & Entertainment"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=essential",onClick:()=>i("essentals"),children:[e.jsxs("div",{children:[e.jsx(oe,{})," ",e.jsx("p",{children:"Essentials"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=discover-products",onClick:()=>i("discover"),children:[e.jsxs("div",{children:[e.jsx(te,{})," ",e.jsx("p",{children:"Discover Products"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=teeth-care",children:[e.jsxs("div",{children:[e.jsx(ce,{})," ",e.jsx("p",{children:"Teeth Care"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=tools",children:[e.jsxs("div",{children:[e.jsx(ie,{})," ",e.jsx("p",{children:"Tools"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=christmas",onClick:()=>i("home"),children:[e.jsxs("div",{children:[e.jsx(X,{})," ",e.jsx("p",{children:"Christmas"})]})," ",e.jsx(o,{})]}),e.jsxs(a,{to:"/products-categories?data=relax-selfcare",onClick:()=>i("fashion"),children:[e.jsxs("div",{children:[e.jsx(de,{})," ",e.jsx("p",{children:"Relax & Selfcare"})]})," ",e.jsx(o,{})]})]})}),e.jsxs("div",{className:"navbar_search_container",children:[e.jsx("input",{type:"text",placeholder:"Search Products",id:"searchBar",onClick:()=>G(),onKeyDown:s=>K(s.key),onChange:s=>I(s.target.value),className:x?"input_to_the_top":""}),e.jsx("button",{onClick:()=>q(),className:`navbar_button_for_searching_prod ${x&&"button_to_the_top"}`,children:e.jsx(he,{})}),O&&e.jsx("span",{className:"navbar_page_blur",onClick:()=>d(!1)}),x&&e.jsxs("div",{className:"navbar_mobile_search_menu",children:[e.jsx("h1",{children:"Popular searches on Store"}),e.jsx("p",{onClick:()=>p("sleeve"),children:"sleeve"}),e.jsx("p",{onClick:()=>p("camera"),children:"camera"}),e.jsx("p",{onClick:()=>p("tool"),children:"tool"}),e.jsx("p",{onClick:()=>p("waterproof"),children:"waterproof"})]})]}),e.jsxs("div",{className:"navbar_menu_icons",children:[e.jsxs("div",{className:"navbar_account",onMouseOver:()=>l("account"),onMouseLeave:()=>l(""),onClick:()=>f("account"),children:[e.jsxs(a,{to:c?"/your-account":"/login",children:[e.jsxs("div",{className:"navbar_account_icon_noti",children:[r==="account"?e.jsx(Y,{}):e.jsx(M,{}),T&&e.jsx("span",{id:"account-noti",children:"!"})]}),e.jsx("h2",{className:"navbar_account_name",children:c?"Account":"Sign-up"})]}),r==="account"&&!c?e.jsx(pe,{}):r==="account"&&c?e.jsx(U,{}):""]}),e.jsxs("div",{className:"navbar_liked",onMouseOver:()=>l("liked"),onMouseLeave:()=>l(""),onClick:()=>f("liked"),children:[e.jsxs(a,{to:c?"/liked":"/login",children:[e.jsxs("div",{className:"navbar_liked_icon_noti",children:[r==="liked"?e.jsx(ue,{}):e.jsx(xe,{}),!w&&k.length!==0&&e.jsx("span",{children:k.length}),w&&e.jsx("span",{className:"navbar_popup_link_notification",children:"!"})]}),e.jsx("h2",{className:"navbar_liked_name",children:"Liked"})]}),r==="liked"&&e.jsx("div",{className:"navbar_popup_liked",children:e.jsx("h1",{children:"Here are your favorite products"})})]}),e.jsxs("div",{className:"navbar_cart",onMouseOver:()=>l("cart"),onMouseLeave:()=>l(""),onClick:()=>f("cart"),children:[e.jsxs(a,{to:"/cart",children:[e.jsxs("div",{className:"navbar_cart_icon_noti",children:[r==="cart"?e.jsx(je,{}):e.jsx(me,{}),v&&v.length!==0&&e.jsx("span",{className:"nav_cart_icon",children:v.length}),A&&e.jsx("span",{className:"navbar_popup_link_notification",children:"!"})]}),e.jsx("h2",{className:"navbar_cart_name",children:"Cart"})]}),r==="cart"&&e.jsxs("div",{className:"navbar_popup_cart",children:[e.jsx("h1",{children:"Add products to the cart"}),e.jsx("div",{className:"navbar_cart_button",children:e.jsxs(a,{to:"/cart",children:[e.jsx(E,{}),e.jsx("p",{children:"See cart details"})]})})]})]})]})]})};export{Le as default};