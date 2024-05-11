import{r as t,_ as v,a as k,j as e,L as y}from"./index-3d19e93a.js";/* empty css             */import{M as f}from"./index.esm-1dd122e7.js";const S="/store/assets/home_drinks-cb02ec82.webp",I="/store/assets/home_cook-d7876483.webp",E="/store/assets/home_shoe-ce301502.webp",N="/store/assets/store_corporate-8ba281b5.webp",C="/store/assets/store_newsletter-0c88ec4a.webp",L="/store/assets/store_marketplace-a1d51c5e.webp",n=t.lazy(()=>v(()=>import("./ProdSection-bb12afe7.js"),["assets/ProdSection-bb12afe7.js","assets/index-3d19e93a.js","assets/index-d8a4f56c.css","assets/Product-56102119.js","assets/index.esm-7250ca1a.js","assets/index-e7a6ee95.js","assets/Product-a2f880a1.css","assets/products-de2471c6.js","assets/index.esm-1dd122e7.js","assets/ProdSection-c8c1d72a.css"])),B=({scrollFromHome:a})=>{const{section:m,setSection:g}=t.useContext(k),[o,i]=t.useState(0),[b,h]=t.useState(null),[d,w]=t.useState(!1);t.useEffect(()=>{window.scrollTo({top:0})},[]),t.useEffect(()=>{switch(m){case"fashion":const s=document.getElementById("fashion");s&&s.scrollIntoView({behavior:"smooth"});break;case"electronics":const r=document.getElementById("electronics");r&&r.scrollIntoView({behavior:"smooth"});break;case"camping":const _=document.getElementById("camping");_&&_.scrollIntoView({behavior:"smooth"});break;case"home":const u=document.getElementById("home");u&&u.scrollIntoView({behavior:"smooth"});break;case"essentals":const x=document.getElementById("essentals");x&&x.scrollIntoView({behavior:"smooth"});break;case"discover":const j=document.getElementById("discover");j&&j.scrollIntoView({behavior:"smooth"});break;case"tools":const p=document.getElementById("tools");p&&p.scrollIntoView({behavior:"smooth"});break}g("")},[m]);const c=s=>{s=="right"?o==0?i(1):o==1?i(2):i(0):s=="left"&&(o==0?i(2):o==1?i(0):i(1))},l=window.innerWidth;return t.useEffect(()=>{const s=document.querySelector(".home_img_conteiner"),r=s.offsetWidth;o==0?s.scrollLeft=0:o==1?l>1529?s.scrollLeft=1260:l>1279?s.scrollLeft=976:s.scrollLeft=r:s.scrollLeft=2*r},[o,l]),t.useEffect(()=>{const s=setInterval(()=>{c("right")},5e3);return()=>clearInterval(s)},[o]),t.useEffect(()=>{const s=()=>{const r=window.innerHeight;window.scrollY>r?(a(!0),h(!0)):(a(!1),h(!1))};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs("div",{className:"home_container",style:{marginTop:`${b?"56px":"0"}`},children:[e.jsxs("div",{className:"home_img_main_container",children:[e.jsx("span",{className:"home_img_button_left",onClick:()=>c("left"),children:e.jsx(f,{})}),e.jsx("span",{className:"home_img_button_right",onClick:()=>c("right"),children:e.jsx(f,{})}),e.jsxs("div",{className:"home_img_conteiner",children:[e.jsx("img",{src:S,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"}),e.jsx("img",{src:I,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"}),e.jsx("img",{src:E,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"})]}),e.jsxs("div",{className:"home_img_buttons_container",children:[e.jsx("button",{onClick:()=>i(0),style:o==0?{backgroundColor:"red"}:null}),e.jsx("button",{onClick:()=>i(1),style:o==1?{backgroundColor:"red"}:null}),e.jsx("button",{onClick:()=>i(2),style:o==2?{backgroundColor:"red"}:null})]}),e.jsx(y,{className:"home_redirect_emag",to:"https://www.emag.ro/",children:"source: emag.ro"})]}),e.jsxs("div",{className:"home_sections",children:[e.jsx("section",{id:"electronics",children:e.jsx(n,{props:"electronics"})}),e.jsx("section",{id:"fashion",children:e.jsx(n,{props:"clothes"})}),e.jsx("section",{id:"discover",children:e.jsx(n,{props:"discover"})}),d&&e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"camping",children:e.jsx(n,{props:"camping"})}),e.jsx("section",{id:"essentals",children:e.jsx(n,{props:"essentials"})}),e.jsx("section",{id:"tools",children:e.jsx(n,{props:"tools"})}),e.jsx("section",{id:"home",children:e.jsx(n,{props:"home"})})]}),d?null:e.jsx("button",{className:"home_show_more_btn",onClick:()=>w(!0),children:"Show More"})]}),e.jsxs("div",{className:"home_bottom_section_conteiner",children:[e.jsx("div",{className:"home_bottom_corporate",children:e.jsx("img",{src:N,alt:"future_projects",fetchPriority:"low"})}),e.jsxs("div",{className:"home_bottom_newsletter",children:[e.jsx("div",{children:e.jsx("img",{src:C,alt:"newsletter",fetchPriority:"low"})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Subscribe to the Store newsletter and find out about limited-time discounts!"}),e.jsx("p",{children:"You have to be over 16 to subscribe"}),e.jsxs("div",{className:"home_bottom_newsletter_inputs",children:[e.jsx("input",{type:"text",placeholder:"First name",disabled:!0}),e.jsx("input",{type:"text",placeholder:"Email",disabled:!0}),e.jsx("button",{disabled:!0,children:"Coming soon!"})]})]})]}),e.jsxs("div",{className:"home_bottom_marketplace",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"home_bottom_marketplace_title",children:[e.jsx("h1",{children:"Store"}),e.jsx("h2",{children:"Marketplace"})]}),e.jsx("h3",{children:"Sell with us!"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Instant access to ",e.jsx("span",{children:"hundreds of thousands"})," of daily ",e.jsx("span",{children:"customers"})]}),e.jsxs("li",{children:["Registration for your business is ",e.jsx("span",{children:"free"})]}),e.jsxs("li",{children:["You're just ",e.jsx("span",{children:"a few clicks away"})," from spectacular sales"]})]}),e.jsx("button",{children:"Coming soon!"})]}),e.jsx("div",{className:"home_bottom_marketplace_image_container",children:e.jsx("img",{src:L,fetchPriority:"low",alt:"selling with Store"})})]})]})]})};export{B as default};
