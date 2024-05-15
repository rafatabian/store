import{r as t,_ as y,a as I,j as e,L as E}from"./index-2407b54e.js";/* empty css             */import{M as b}from"./index.esm-9d23ccef.js";const w="/store/assets/home_drinks-cb02ec82.webp",N="/store/assets/home_drinks_M-e2d3528e.webp",C="/store/assets/home_drinks_S-6659ee32.webp",f="/store/assets/home_cook-d7876483.webp",M="/store/assets/home_cook_M-0b325655.webp",L="/store/assets/home_cook_S-17d500b4.webp",g="/store/assets/home_shoe-ce301502.webp",$="/store/assets/home_shoe_M-69c544ed.webp",P="/store/assets/home_shoe_S-0cb4d552.webp",V="/store/assets/store_corporate-8ba281b5.webp",B="/store/assets/store_newsletter-0c88ec4a.webp",T="/store/assets/store_marketplace-a1d51c5e.webp",n=t.lazy(()=>y(()=>import("./ProdSection-a3707230.js"),["assets/ProdSection-a3707230.js","assets/index-2407b54e.js","assets/index-d8a4f56c.css","assets/Product-f7f8fbb2.js","assets/index.esm-15608dbe.js","assets/index-2d519011.js","assets/Product-589c271f.css","assets/products-de2471c6.js","assets/index.esm-9d23ccef.js","assets/ProdSection-90b7e66c.css"])),Y=({scrollFromHome:a})=>{const{section:h,setSection:v}=t.useContext(I),[o,i]=t.useState(0),[k,m]=t.useState(null),[d,S]=t.useState(!1);t.useEffect(()=>{window.scrollTo({top:0})},[]),t.useEffect(()=>{switch(h){case"fashion":const s=document.getElementById("fashion");s&&s.scrollIntoView({behavior:"smooth"});break;case"electronics":const r=document.getElementById("electronics");r&&r.scrollIntoView({behavior:"smooth"});break;case"camping":const _=document.getElementById("camping");_&&_.scrollIntoView({behavior:"smooth"});break;case"home":const p=document.getElementById("home");p&&p.scrollIntoView({behavior:"smooth"});break;case"essentals":const u=document.getElementById("essentals");u&&u.scrollIntoView({behavior:"smooth"});break;case"discover":const x=document.getElementById("discover");x&&x.scrollIntoView({behavior:"smooth"});break;case"tools":const j=document.getElementById("tools");j&&j.scrollIntoView({behavior:"smooth"});break}v("")},[h]);const c=s=>{s=="right"?o==0?i(1):o==1?i(2):i(0):s=="left"&&(o==0?i(2):o==1?i(0):i(1))},l=window.innerWidth;return t.useEffect(()=>{const s=document.querySelector(".home_img_conteiner"),r=s.offsetWidth;o==0?s.scrollLeft=0:o==1?l>1529?s.scrollLeft=1260:l>1279?s.scrollLeft=976:s.scrollLeft=r:s.scrollLeft=2*r},[o,l]),t.useEffect(()=>{const s=setInterval(()=>{c("right")},5e3);return()=>clearInterval(s)},[o]),t.useEffect(()=>{const s=()=>{const r=window.innerHeight;window.scrollY>r?(a(!0),m(!0)):(a(!1),m(!1))};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsxs("div",{className:"home_container",style:{marginTop:`${k?"56px":"0"}`},children:[e.jsxs("div",{className:"home_img_main_container",children:[e.jsx("span",{className:"home_img_button_left",onClick:()=>c("left"),children:e.jsx(b,{})}),e.jsx("span",{className:"home_img_button_right",onClick:()=>c("right"),children:e.jsx(b,{})}),e.jsxs("div",{className:"home_img_conteiner",children:[e.jsx("img",{srcSet:`${C} 480w,
                  ${N} 760w,
                  ${w} 1260w`,src:w,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"}),e.jsx("img",{srcSet:`${L} 480w,
                   ${M} 760w,
                   ${f} 1260w`,src:f,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"}),e.jsx("img",{srcSet:`${P} 480w,
                   ${$} 760w,
                   ${g} 1260w`,src:g,className:"home_scrolling_mobile_imgs",alt:"presentation-imges",fetchPriority:"high"})]}),e.jsxs("div",{className:"home_img_buttons_container",children:[e.jsx("button",{onClick:()=>i(0),style:o==0?{backgroundColor:"red"}:null}),e.jsx("button",{onClick:()=>i(1),style:o==1?{backgroundColor:"red"}:null}),e.jsx("button",{onClick:()=>i(2),style:o==2?{backgroundColor:"red"}:null})]}),e.jsx(E,{className:"home_redirect_emag",to:"https://www.emag.ro/",children:"source: emag.ro"})]}),e.jsxs("div",{className:"home_sections",children:[e.jsx("section",{id:"electronics",children:e.jsx(n,{props:"electronics"})}),e.jsx("section",{id:"fashion",children:e.jsx(n,{props:"clothes"})}),e.jsx("section",{id:"discover",children:e.jsx(n,{props:"discover"})}),d&&e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"camping",children:e.jsx(n,{props:"camping"})}),e.jsx("section",{id:"essentals",children:e.jsx(n,{props:"essentials"})}),e.jsx("section",{id:"tools",children:e.jsx(n,{props:"tools"})}),e.jsx("section",{id:"home",children:e.jsx(n,{props:"home"})})]}),d?null:e.jsx("button",{className:"home_show_more_btn",onClick:()=>S(!0),children:"Show More"})]}),e.jsxs("div",{className:"home_bottom_section_conteiner",children:[e.jsx("div",{className:"home_bottom_corporate",children:e.jsx("img",{src:V,alt:"future_projects",fetchPriority:"low"})}),e.jsxs("div",{className:"home_bottom_newsletter",children:[e.jsx("div",{children:e.jsx("img",{src:B,alt:"newsletter",fetchPriority:"low"})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Subscribe to the Store newsletter and find out about limited-time discounts!"}),e.jsx("p",{children:"You have to be over 16 to subscribe"}),e.jsxs("div",{className:"home_bottom_newsletter_inputs",children:[e.jsx("input",{type:"text",placeholder:"First name",disabled:!0}),e.jsx("input",{type:"text",placeholder:"Email",disabled:!0}),e.jsx("button",{disabled:!0,children:"Coming soon!"})]})]})]}),e.jsxs("div",{className:"home_bottom_marketplace",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"home_bottom_marketplace_title",children:[e.jsx("h1",{children:"Store"}),e.jsx("h2",{children:"Marketplace"})]}),e.jsx("h3",{children:"Sell with us!"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Instant access to ",e.jsx("span",{children:"hundreds of thousands"})," of daily ",e.jsx("span",{children:"customers"})]}),e.jsxs("li",{children:["Registration for your business is ",e.jsx("span",{children:"free"})]}),e.jsxs("li",{children:["You're just ",e.jsx("span",{children:"a few clicks away"})," from spectacular sales"]})]}),e.jsx("button",{children:"Coming soon!"})]}),e.jsx("div",{className:"home_bottom_marketplace_image_container",children:e.jsx("img",{src:T,fetchPriority:"low",alt:"selling with Store"})})]})]})]})};export{Y as default};
