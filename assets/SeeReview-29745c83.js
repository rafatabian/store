import{r as t,_ as a,L as T,j as e,$ as A,a0 as C,v as c,a1 as D,a as $}from"./index-22f1df2d.js";import{p as j}from"./products-48c132cf.js";const F="/store/assets/star_review-040964a0.webp",I=t.lazy(()=>a(()=>import("./YourFsquare-063545c7.js"),["assets/YourFsquare-063545c7.js","assets/index-22f1df2d.js","assets/index-60c2eadb.css","assets/YourFsquare-d473788c.css"])),P=t.lazy(()=>a(()=>import("./YourSsquare-f98b3944.js"),["assets/YourSsquare-f98b3944.js","assets/index-22f1df2d.js","assets/index-60c2eadb.css","assets/YourSsquare-02271654.css"])),V=t.lazy(()=>a(()=>import("./YourGeniusBtn-313f4f13.js"),["assets/YourGeniusBtn-313f4f13.js","assets/index-22f1df2d.js","assets/index-60c2eadb.css","assets/logo_genius_btn-1d1d7c8b.js","assets/logo_genius-67e109af.js","assets/YourGeniusBtn-7e2ce47c.css"])),k=t.lazy(()=>a(()=>import("./Footer-d4da1a2e.js"),["assets/Footer-d4da1a2e.js","assets/index-22f1df2d.js","assets/index-60c2eadb.css","assets/Footer-bf9b47a1.css"])),M=t.lazy(()=>a(()=>import("./Review-6bca396b.js"),["assets/Review-6bca396b.js","assets/index-22f1df2d.js","assets/index-60c2eadb.css","assets/Review-26053c06.css"])),B=()=>{const{reviewNr:w}=t.useContext(T),[l,m]=t.useState([]),[f,g]=t.useState(""),[R,d]=t.useState(!1),[h,y]=t.useState(""),[o,v]=t.useState(!0),[n,_]=t.useState(!1),[p,u]=t.useState(!1),S=s=>{d(s)};let x=[];t.useEffect(()=>{j.map(s=>{s.stars!==0&&(x.includes(s.id)||(x.push(s.id),m(i=>[...i,s.id])))})},[]),t.useEffect(()=>{const s=new Date,i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=s.getDate(),E=i[s.getMonth()],L=s.getFullYear();g(`${r} ${E} ${L}`)},[]);const b=s=>{const i=document.getElementById(`${s}_seeReview_p`),r=document.getElementById(`${s}_seeReview_btn`);i&&r&&(i.innerHTML==="1"?(i.innerHTML="0",r.style.color="#6093c3"):(i.innerHTML="1",r.style.color="#005eb8"))};t.useEffect(()=>{h.length==0?v(!0):v(!1)},[h]);const N=s=>{y(s),_(!1)};return t.useEffect(()=>{window.innerWidth<730?u(!0):u(!1)},[]),e.jsxs("div",{className:"seeReview_container",children:[e.jsxs("div",{className:"seeReview_left_and_right",children:[e.jsxs("div",{className:"seeReview_left",children:[e.jsx(I,{}),e.jsx(P,{}),e.jsx(V,{})]}),e.jsxs("div",{className:"seeReview_right",children:[e.jsxs("div",{className:"seeReview_right_menu",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"My reviews"}),e.jsxs("div",{className:"seeReview_right_menu_btn",children:["number reviews ",w.length]})]}),e.jsxs("div",{className:"seeReview_right_filters",children:[e.jsxs("select",{children:[e.jsx("option",{children:"Latest reviews"}),e.jsx("option",{children:"Most popular"})]}),e.jsxs("select",{children:[e.jsx("option",{children:"All reviews"}),e.jsx("option",{children:"5 stars reviews"}),e.jsx("option",{children:"4 stars reviews"}),e.jsx("option",{children:"3 stars reviews"}),e.jsx("option",{children:"2 stars reviews"}),e.jsx("option",{children:"1 star reviews"})]}),e.jsxs("button",{className:"seeReviews_verified_button",onClick:()=>_(!n),style:{color:n?"#009900":"#222222"},children:[e.jsx(A,{style:{color:n?"#009900":"#222222"}}),window.innerWidth>730?e.jsx("p",{children:"Verified reviews"}):null]}),e.jsxs("div",{className:"seeReviews_input_container",children:[e.jsx("input",{type:"text",placeholder:"Search review",onChange:s=>N(s.target.value)}),e.jsx(C,{})]})]})]}),e.jsx("div",{className:`seeReview_right_content ${p&&l.length==0?"star_cont_background":null}`,children:!n&&o&&l.length?j.map(s=>{if(l.includes(s.id))return e.jsxs("div",{className:"seeReview_of_the_product",children:[e.jsxs("div",{className:"seeReview_image_and_name",children:[e.jsx("img",{src:s.image,alt:"product"}),e.jsxs("h3",{children:[s.name.slice(0,30),"..."]})]}),e.jsxs("div",{className:"seeReview_product_content",children:[e.jsxs("div",{children:[e.jsx("h3",{children:f}),e.jsx("button",{onClick:()=>d(s.id),children:"Edit review"})]}),e.jsx("h1",{className:"seeReview_product_title",children:s.review[0]}),e.jsxs("div",{className:"seeReview_stars_container",children:[e.jsx(c,{style:{color:s.stars==5||s.stars==4||s.stars==3||s.stars==2||s.stars==1?"#f9bf3b":"#ccc"}}),e.jsx(c,{style:{color:s.stars==5||s.stars==4||s.stars==3||s.stars==2?"#f9bf3b":"#ccc"}}),e.jsx(c,{style:{color:s.stars==5||s.stars==4||s.stars==3?"#f9bf3b":"#ccc"}}),e.jsx(c,{style:{color:s.stars==5||s.stars==4?"#f9bf3b":"#ccc"}}),e.jsx(c,{style:{color:s.stars==5?"#f9bf3b":"#ccc"}}),e.jsx("p",{children:"Store user review"})]}),e.jsx("h1",{className:"seeReview_content",children:s.review[1]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>b(s.id),children:e.jsx(D,{id:`${s.id}_seeReview_btn`})}),e.jsx("p",{id:`${s.id}_seeReview_p`,children:"0"})]})]}),R===s.id&&e.jsx(M,{props:s,closeFromChild:S})]},s.price[0]+s.id)}):e.jsxs("div",{className:"seeReview_no_review",children:[e.jsx("div",{children:e.jsx("img",{src:F,alt:"star"})}),e.jsxs("div",{children:[e.jsx("h1",{children:o?"no reviews here":"no reviews found..."}),e.jsxs("p",{children:[n?l.length!==0?"Your reviews are under verification. Thank you for your patience.":"Here are the verified reviews. Try adding one first":o?"First add a review for your product in":"Try imporving the searching criteria"," ",!n&&o&&e.jsx($,{to:"/",children:"Store"})]})]})]})})]})]}),e.jsx(k,{})]})};export{B as default};
