import{r as t,_ as n,a as Y,b as R,j as e,L as z}from"./index-c9016a42.js";import{I as M}from"./index.esm-058a98d1.js";import{b as O}from"./index.esm-ca39ddc4.js";const V=t.lazy(()=>n(()=>import("./YourFsquare-2c32f81c.js"),["assets/YourFsquare-2c32f81c.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/index.esm-fa651420.js","assets/index.esm-ca39ddc4.js","assets/index.esm-fcb5111f.js","assets/index.esm-0fc3e2db.js","assets/YourFsquare-d473788c.css"])),k=t.lazy(()=>n(()=>import("./YourSsquare-354c5f08.js"),["assets/YourSsquare-354c5f08.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/YourSsquare-02271654.css"])),w=t.lazy(()=>n(()=>import("./YourTsquare-2e946487.js"),["assets/YourTsquare-2e946487.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/index.esm-0fc3e2db.js","assets/YourTsquare-23ae0110.css"])),F=t.lazy(()=>n(()=>import("./YourFosquare-4741b9c5.js"),["assets/YourFosquare-4741b9c5.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/logo_genius-67e109af.js","assets/index.esm-02d29fa2.js","assets/index.esm-0fc3e2db.js","assets/YourFosquare-475e42b8.css"])),B=t.lazy(()=>n(()=>import("./YourFisquare-2c0dc769.js"),["assets/YourFisquare-2c0dc769.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/index.esm-02d29fa2.js","assets/index.esm-fa651420.js","assets/YourFisquare-35b09013.css"])),G=t.lazy(()=>n(()=>import("./YourGeniusBtn-e5fa67e3.js"),["assets/YourGeniusBtn-e5fa67e3.js","assets/index-c9016a42.js","assets/index-cd08b88f.css","assets/logo_genius_btn-1d1d7c8b.js","assets/logo_genius-67e109af.js","assets/index.esm-0fc3e2db.js","assets/YourGeniusBtn-7e2ce47c.css"])),H=()=>{const{redirectPage:h,year:m,setYear:x,month:p,setMonth:y,day:j,setDay:v,setName:g,setAlias:f,setEmail:A,setPhoneNr:E,showSettings:N,setShowSettings:c}=t.useContext(Y),[u,a]=t.useState(""),b=R();t.useEffect(()=>{window.scrollTo({top:0})},[]);const[d,C]=t.useState(""),[l,S]=t.useState(""),[i,D]=t.useState(""),[o,P]=t.useState("");t.useEffect(()=>{h||b("/")});const T=s=>{s.key==="Enter"&&_()};t.useEffect(()=>{const s=document.querySelector(".yourAccount_settings_blur");s&&s.addEventListener("click",r=>{r.target===s&&c(!1)})});const L=s=>{s.length<=2&&v(s)},q=s=>{s.length<=2&&y(s)},I=s=>{s.length<=4&&x(s)},_=()=>{let s=null,r=null;d!=""&&f(d),l!=""&&g(l),i!=""&&(!i.includes("@")||i.length>35?(s=!0,a("add a valid email address")):(s=!1,a(""),A(i))),o!=""&&!s&&(!o.includes("07")||o.length>11?(r=!0,a("add a valid phone number")):(r=!1,a(""),E(o))),!s&&!r&&c(!1)};return e.jsxs("div",{className:"yourAccount_container",children:[e.jsx(z,{to:"/",id:"go-home-from-account"}),e.jsxs("div",{className:"yourAccount_info_details",children:[e.jsx(V,{}),e.jsx(k,{}),e.jsx(G,{})]}),e.jsxs("div",{className:"yourAccount_squares_container",children:[e.jsxs("div",{className:"yourAccount_squares_first_set",children:[e.jsx(w,{}),e.jsx(F,{})]}),e.jsx("div",{className:"yourAccount_squares_first_set",children:e.jsx(B,{})})]}),N&&e.jsxs("div",{className:"yourAccount_settings_blur",children:[e.jsxs("div",{className:"yourAcocunt_settings_pannel",onKeyDown:T,children:[e.jsxs("div",{className:"yourAccount_settings_title-close",children:[e.jsx("h1",{children:"Account Settings"}),e.jsx(M,{onClick:()=>c(!1)})]}),e.jsx("span",{className:"yourAccount_setthing_thin_line"}),e.jsxs("div",{className:"yourAccount_settings_settings",children:[e.jsxs("div",{className:"yourAccount_settings_inputs_label",children:[e.jsxs("div",{className:"yourAccount_settings_firstChild",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Alias:"}),e.jsx("input",{type:"text",placeholder:"ex: Edy20",onChange:s=>C(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Name:"}),e.jsx("input",{value:l,type:"text",onChange:s=>S(s.target.value.charAt(0).toUpperCase()+s.target.value.slice(1))})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Email:"})," ",e.jsx("input",{type:"email",onChange:s=>D(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Phone Number:"}),e.jsx("input",{type:"number",onChange:s=>P(s.target.value)})]})]}),e.jsx("div",{className:"yourAccount_settings_secondChild"})]}),e.jsx("p",{className:"yourAccount_birth_sugestion",children:"Add your date of birth in order to help us send the best offers"}),e.jsxs("div",{className:"yourAccount_settings_birth_container",children:[e.jsx("p",{children:"Date of birth:"}),e.jsxs("div",{className:"yourAccount_settings_birth_optins",children:[e.jsx("input",{value:j,onChange:s=>L(s.target.value),id:"day",type:"number",placeholder:"DD"}),e.jsx("input",{value:p,onChange:s=>q(s.target.value),id:"month",type:"number",placeholder:"MM"}),e.jsx("input",{value:m,onChange:s=>I(s.target.value),id:"year",type:"number",placeholder:"YYYY"})]})]}),e.jsx("div",{className:"yourAccount_settings_save_button_container",children:e.jsx("div",{children:e.jsx("button",{onClick:()=>_(),children:"Save"})})})]})]}),u&&e.jsxs("div",{className:"yourAccount_settings_error",children:[e.jsx(O,{}),e.jsx("p",{children:u})]})]})]})};export{H as default};