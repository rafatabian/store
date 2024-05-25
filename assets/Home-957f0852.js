import{r as t,_ as u,a as w,j as e,L as g}from"./index-5c27fa57.js";import{M as _}from"./index.esm-3498f713.js";const b="/store/assets/home_drinks-bb0975ec.webp",f="/store/assets/home_drinks_M-f16fbe2d.webp",v="/store/assets/home_drinks_S-f0ded68c.webp",k="/store/assets/home_cook-4764e9d1.webp",S="/store/assets/home_cook_M-227f0c89.webp",y="/store/assets/home_cook_S-c5f34413.webp",N="/store/assets/home_shoe-08bce5e2.webp",C="/store/assets/home_shoe_M-36075ea1.webp",M="/store/assets/home_shoe_S-153fbdfa.webp",E="/store/assets/store_corporate-146c9e96.webp",L="/store/assets/store_newsletter-0c88ec4a.webp",W="/store/assets/store_marketplace-ab9b8be6.webp",i=t.lazy(()=>u(()=>import("./ProdSection-8131c04c.js"),["assets/ProdSection-8131c04c.js","assets/index-5c27fa57.js","assets/index-cd08b88f.css","assets/Product-17739261.js","assets/index.esm-4879e71b.js","assets/Product-589c271f.css","assets/products-48c132cf.js","assets/index.esm-3498f713.js","assets/ProdSection-90b7e66c.css"])),T=({scrollFromHome:d})=>{const{section:c,setSection:p}=t.useContext(w),[o,n]=t.useState(0),[x,h]=t.useState(null),[m,j]=t.useState(!1);t.useEffect(()=>{window.scrollTo({top:0})},[]),t.useEffect(()=>{if(c){const s=document.getElementById(c);s&&s.scrollIntoView({behavior:"smooth"})}},[c,p]);const l=s=>{s=="right"?n(o===2?0:o+1):n(o===0?2:o-1)},a=window.innerWidth;return t.useEffect(()=>{const s=document.querySelector(".home_img_conteiner"),r=s.offsetWidth;o==0?s.scrollLeft=0:o==1?a>1529?s.scrollLeft=1260:a>1279?s.scrollLeft=976:s.scrollLeft=r:s.scrollLeft=2*r},[o,a]),t.useEffect(()=>{const s=setInterval(()=>{l("right")},5e3);return()=>clearInterval(s)},[o]),t.useEffect(()=>{const s=()=>{const r=window.innerHeight;window.scrollY>r?(d(!0),h(!0)):(d(!1),h(!1))};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs("div",{className:"home_container",style:{marginTop:`${x?"56px":"0"}`},children:[e.jsxs("div",{className:"home_img_main_container",children:[e.jsx("span",{className:"home_img_button_left",onClick:()=>l("left"),children:e.jsx(_,{})}),e.jsx("span",{className:"home_img_button_right",onClick:()=>l("right"),children:e.jsx(_,{})}),e.jsxs("div",{className:"home_img_conteiner",children:[e.jsx("img",{src:window.innerWidth<=480?v:window.innerWidth<=760?f:b,className:"home_scrolling_mobile_imgs",alt:"presentation-imges"}),e.jsx("img",{src:window.innerWidth<=480?y:window.innerWidth<=760?S:k,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",loading:"lazy"}),e.jsx("img",{src:window.innerWidth<=480?M:window.innerWidth<=760?C:N,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",loading:"lazy"})]}),e.jsxs("div",{className:"home_img_buttons_container",children:[e.jsx("button",{onClick:()=>n(0),style:o==0?{backgroundColor:"red"}:null,"aria-label":"first section category image"}),e.jsx("button",{onClick:()=>n(1),style:o==1?{backgroundColor:"red"}:null,"aria-label":"second section category image"}),e.jsx("button",{onClick:()=>n(2),style:o==2?{backgroundColor:"red"}:null,"aria-label":"third section category image"})]}),e.jsx(g,{className:"home_redirect_emag",to:"https://www.emag.ro/",children:"source: emag.ro"})]}),e.jsxs("div",{className:"home_sections",children:[e.jsx("section",{id:"electronics",children:e.jsx(i,{props:"electronics"})}),e.jsx("section",{id:"fashion",children:e.jsx(i,{props:"clothes"})}),e.jsx("section",{id:"discover",children:e.jsx(i,{props:"discover"})}),m&&e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"camping",children:e.jsx(i,{props:"camping"})}),e.jsx("section",{id:"essentals",children:e.jsx(i,{props:"essentials"})}),e.jsx("section",{id:"tools",children:e.jsx(i,{props:"tools"})}),e.jsx("section",{id:"home",children:e.jsx(i,{props:"home"})})]}),m?null:e.jsx("button",{className:"home_show_more_btn",onClick:()=>j(!0),children:"Show More"})]}),e.jsxs("div",{className:"home_bottom_section_conteiner",children:[e.jsx("div",{className:"home_bottom_corporate",children:e.jsx("img",{src:E,alt:"future_projects",fetchpriority:"low"})}),e.jsxs("div",{className:"home_bottom_newsletter",children:[e.jsx("div",{children:e.jsx("img",{src:L,alt:"newsletter",fetchpriority:"low"})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Subscribe to the Store newsletter and find out about limited-time discounts!"}),e.jsx("p",{children:"You have to be over 16 to subscribe"}),e.jsxs("div",{className:"home_bottom_newsletter_inputs",children:[e.jsx("input",{type:"text",placeholder:"First name",disabled:!0}),e.jsx("input",{type:"text",placeholder:"Email",disabled:!0}),e.jsx("button",{disabled:!0,children:"Coming soon!"})]})]})]}),e.jsxs("div",{className:"home_bottom_marketplace",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"home_bottom_marketplace_title",children:[e.jsx("h1",{children:"Store"}),e.jsx("h2",{children:"Marketplace"})]}),e.jsx("h3",{children:"Sell with us!"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Instant access to ",e.jsx("span",{children:"hundreds of thousands"})," of daily ",e.jsx("span",{children:"customers"})]}),e.jsxs("li",{children:["Registration for your business is ",e.jsx("span",{children:"free"})]}),e.jsxs("li",{children:["You're just ",e.jsx("span",{children:"a few clicks away"})," from spectacular sales"]})]}),e.jsx("button",{children:"Coming soon!"})]}),e.jsx("div",{className:"home_bottom_marketplace_image_container",children:e.jsx("img",{src:W,fetchpriority:"low",alt:"selling with Store"})})]})]})]})};export{T as default};