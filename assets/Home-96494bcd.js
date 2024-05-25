import{r as t,_ as N,a as E,j as e,L as C}from"./index-e8c0d262.js";import{M as x}from"./index.esm-3d7f8fc1.js";import{b as u}from"./index-9265e5c7.js";const m="/store/assets/home_drinks-bb0975ec.webp",j="/store/assets/home_drinks_M-f16fbe2d.webp",w="/store/assets/home_drinks_S-f0ded68c.webp",b="/store/assets/home_cook-4764e9d1.webp",L="/store/assets/home_cook_M-227f0c89.webp",M="/store/assets/home_cook_S-c5f34413.webp",f="/store/assets/home_shoe-08bce5e2.webp",I="/store/assets/home_shoe_M-36075ea1.webp",$="/store/assets/home_shoe_S-153fbdfa.webp",P="/store/assets/store_corporate-146c9e96.webp",T="/store/assets/store_newsletter-0c88ec4a.webp",W="/store/assets/store_marketplace-ab9b8be6.webp",r=t.lazy(()=>N(()=>import("./ProdSection-5737d750.js"),["assets/ProdSection-5737d750.js","assets/index-e8c0d262.js","assets/index-cd08b88f.css","assets/Product-f7b84b15.js","assets/index.esm-ee2050e1.js","assets/index-9265e5c7.js","assets/Product-589c271f.css","assets/products-48c132cf.js","assets/index.esm-3d7f8fc1.js","assets/ProdSection-90b7e66c.css"])),Y=({scrollFromHome:h})=>{const{section:l,setSection:g}=t.useContext(E),[o,n]=t.useState(0),[k,_]=t.useState(null),[p,v]=t.useState(!1);t.useEffect(()=>{const s=(S,y)=>{const c=document.createElement("link");c.rel="preload",c.as="image",c.href=S,c.media=y,document.head.appendChild(c)},i=window.innerWidth;i<=480?s(w,"(max-width: 480px)"):i<=760?s(j,"(min-width: 481px) and (max-width: 760px)"):s(m,"(min-width: 761px)")},[]),t.useEffect(()=>{window.scrollTo({top:0})},[]),t.useEffect(()=>{if(l){const s=document.getElementById(l);s&&s.scrollIntoView({behavior:"smooth"})}},[l,g]);const a=s=>{s=="right"?n(o===2?0:o+1):n(o===0?2:o-1)},d=window.innerWidth;return t.useEffect(()=>{const s=document.querySelector(".home_img_conteiner"),i=s.offsetWidth;o==0?s.scrollLeft=0:o==1?d>1529?s.scrollLeft=1260:d>1279?s.scrollLeft=976:s.scrollLeft=i:s.scrollLeft=2*i},[o,d]),t.useEffect(()=>{const s=setInterval(()=>{a("right")},5e3);return()=>clearInterval(s)},[o]),t.useEffect(()=>{const s=()=>{const i=window.innerHeight;window.scrollY>i?(h(!0),_(!0)):(h(!1),_(!1))};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs("div",{className:"home_container",style:{marginTop:`${k?"56px":"0"}`},children:[e.jsxs("div",{className:"home_img_main_container",children:[e.jsx("span",{className:"home_img_button_left",onClick:()=>a("left"),children:e.jsx(x,{})}),e.jsx("span",{className:"home_img_button_right",onClick:()=>a("right"),children:e.jsx(x,{})}),e.jsxs("div",{className:"home_img_conteiner",children:[e.jsx("img",{srcSet:`${w} 480w,
                  ${j} 760w,
                  ${m} 1260w`,src:m,className:"home_scrolling_mobile_imgs",alt:"presentation-imges"}),e.jsx(u.LazyLoadImage,{srcSet:`${M} 480w,
                   ${L} 760w,
                   ${b} 1260w`,src:b,className:"home_scrolling_mobile_imgs",alt:"presentation-imges"}),e.jsx(u.LazyLoadImage,{srcSet:`${$} 480w,
                   ${I} 760w,
                   ${f} 1260w`,src:f,className:"home_scrolling_mobile_imgs",alt:"presentation-imges"})]}),e.jsxs("div",{className:"home_img_buttons_container",children:[e.jsx("button",{onClick:()=>n(0),style:o==0?{backgroundColor:"red"}:null,"aria-label":"first section category image"}),e.jsx("button",{onClick:()=>n(1),style:o==1?{backgroundColor:"red"}:null,"aria-label":"second section category image"}),e.jsx("button",{onClick:()=>n(2),style:o==2?{backgroundColor:"red"}:null,"aria-label":"third section category image"})]}),e.jsx(C,{className:"home_redirect_emag",to:"https://www.emag.ro/",children:"source: emag.ro"})]}),e.jsxs("div",{className:"home_sections",children:[e.jsx("section",{id:"electronics",children:e.jsx(r,{props:"electronics"})}),e.jsx("section",{id:"fashion",children:e.jsx(r,{props:"clothes"})}),e.jsx("section",{id:"discover",children:e.jsx(r,{props:"discover"})}),p&&e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"camping",children:e.jsx(r,{props:"camping"})}),e.jsx("section",{id:"essentals",children:e.jsx(r,{props:"essentials"})}),e.jsx("section",{id:"tools",children:e.jsx(r,{props:"tools"})}),e.jsx("section",{id:"home",children:e.jsx(r,{props:"home"})})]}),p?null:e.jsx("button",{className:"home_show_more_btn",onClick:()=>v(!0),children:"Show More"})]}),e.jsxs("div",{className:"home_bottom_section_conteiner",children:[e.jsx("div",{className:"home_bottom_corporate",children:e.jsx("img",{src:P,alt:"future_projects",fetchpriority:"low"})}),e.jsxs("div",{className:"home_bottom_newsletter",children:[e.jsx("div",{children:e.jsx("img",{src:T,alt:"newsletter",fetchpriority:"low"})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Subscribe to the Store newsletter and find out about limited-time discounts!"}),e.jsx("p",{children:"You have to be over 16 to subscribe"}),e.jsxs("div",{className:"home_bottom_newsletter_inputs",children:[e.jsx("input",{type:"text",placeholder:"First name",disabled:!0}),e.jsx("input",{type:"text",placeholder:"Email",disabled:!0}),e.jsx("button",{disabled:!0,children:"Coming soon!"})]})]})]}),e.jsxs("div",{className:"home_bottom_marketplace",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"home_bottom_marketplace_title",children:[e.jsx("h1",{children:"Store"}),e.jsx("h2",{children:"Marketplace"})]}),e.jsx("h3",{children:"Sell with us!"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Instant access to ",e.jsx("span",{children:"hundreds of thousands"})," of daily ",e.jsx("span",{children:"customers"})]}),e.jsxs("li",{children:["Registration for your business is ",e.jsx("span",{children:"free"})]}),e.jsxs("li",{children:["You're just ",e.jsx("span",{children:"a few clicks away"})," from spectacular sales"]})]}),e.jsx("button",{children:"Coming soon!"})]}),e.jsx("div",{className:"home_bottom_marketplace_image_container",children:e.jsx("img",{src:W,fetchpriority:"low",alt:"selling with Store"})})]})]})]})};export{Y as default};
