import{r,u as v,j as e}from"./index-5393b66c.js";import{p as f}from"./products-de2471c6.js";import w from"./Product-4b428757.js";import{c as T,d as P,e as D}from"./index.esm-bcfe6b04.js";import"./index.esm-dcadf3ab.js";import"./index-aa5c0ce7.js";const R=()=>{const[a,t]=r.useState([]),[C,i]=r.useState([]),[u,o]=r.useState([]),[d,h]=r.useState(2),[x,j]=r.useState(),[l,b]=r.useState([]),[c,g]=r.useState(""),[F,p]=r.useState(0),E=v(),k=new URLSearchParams(E.search).get("data");r.useEffect(()=>{switch(k){case"cameras-tech":t([50,49,44,43,22,6,5,3,"#EBF5FB","Cameras & tech"]);break;case"fashion-decorations":t([42,41,40,38,39,37,36,28,25,"#FDEDEC","Fashion & decorations"]);break;case"sports-camping":t([22,23,24,25,26,27,28,"#E9F7EF","Sports & Camping"]);break;case"home-bedroom":t([49,48,5,12,13,14,"#FEF5E7","Home & bedroom"]);break;case"music-entertainment":t([2,1,3,5,46,43,"#F4ECF7","Music & entertainment"]);break;case"essential":t([16,29,30,31,32,33,34,35,"#FEF9E7","Essentials"]);break;case"discover-products":t([49,46,43,45,44,"#E8F8F5","Discover products"]);break;case"teeth-care":t([45,35,34,4,"#EAF2F8 ","Teeth care"]);break;case"tools":t([17,18,19,20,21,22,"#F4F6F6","Tools"]);break;case"christmas":t([11,9,10,8,"#FDEDEC","Christmas"]);break;case"relax-selfcare":t([47,46,38,4,7,"#F5EEF8","Relax"]);break;default:t([])}},[k]),r.useEffect(()=>{switch(a[a.length-1]){case"Cameras & tech":i(["Speakers","TV's","Chargers","Lights","Drone","Smart Watch","Cameras"]);break;case"Fashion & decorations":i(["Fleeces","Jackets","Sweatshirts","Sleeves","Longwear sets","T-shrits","Pullovers"]);break;case"Sports & Camping":i(["Lights","Tents","Dinnerware","Fleece","Backpack","Blankets","Jackets"]);break;case"Home & bedroom":i(["TV's","Sofas","Chairs","Plants","Microwave","Cameras"]);break;case"Music & entertainment":i(["headsets","Jbl speakers","Bose speakers","TV's","Drones","Books"]);break;case"Essentials":i(["Hand Tools","Cereals","Tissues","Sparkling water","Still water","Bread","ToothPaste","Toothbrush"]);break;case"Discover products":i(["Drones","Smart Watch","Toothpaste","Books","Cameras"]);break;case"Teeth care":i(["Electric toothbrush","Toothpaste","Toothbrush"]);break;case"Tools":i(["Screwdrivers","General tools","Tape messure","hammers","Levels","Lights"]);break;case"Christmas":i(["Pijama sets","Christmas trees","Baubles","Ornaments"]);break;case"Relax":i(["Toothbrush","Blenders","Longwears sets","Books","Coffee Machines"]);break}},[a]),r.useEffect(()=>(f.map(s=>{a.includes(Number(s.id))&&b(n=>[...n,s.price[0]])}),()=>{b([])}),[a]),r.useEffect(()=>{l.length>0&&(j(Math.max(...l)),g(Math.max(...l)))},[l]);const S=s=>{g(s.target.value)};r.useEffect(()=>{const s=window.innerWidth;s>1260?(o(["repeat(4, 1fr)","flex-start"]),p("922px")):s<980?(o(["repeat(2, 1fr)","center"]),p("456px")):s<1260&&(o(["repeat(3, 1fr)","flex-start"]),p("689px"))},[]);const m=s=>{const n=window.innerWidth;s===1?(o([`repeat(${n<980?"1":"2"}, 1fr)`,"flex-start"]),h(1)):s===2?(o([`repeat(${n<980?"2":n<1260?"3":"4"}, 1fr)`,"flex-start"]),h(2)):(o([`repeat(${n<980?"1":"2"}, 1fr)`,"flex-end"]),h(3))};return e.jsxs("div",{className:"prodCategories_container",style:{backgroundColor:`${a[a.length-2]}`},children:[e.jsxs("div",{className:"prodCategories_left_container",children:[e.jsxs("div",{className:"prodCategories_filters_container",children:[e.jsx("h1",{children:a[a.length-1]}),e.jsx("h2",{children:"("+a.length+")"}),C.map(s=>e.jsx("p",{children:s},s))]}),e.jsxs("div",{className:"prodCategories_range",children:[e.jsx("h1",{children:"Price"}),e.jsx("input",{type:"range",id:"price_range",name:"price",min:"0",max:x,value:c,onChange:S}),e.jsxs("div",{children:[e.jsx("p",{children:"0£"}),e.jsx("p",{children:"-"}),e.jsxs("p",{children:[c||x,"£"]})]})]})]}),e.jsxs("div",{className:"prodCategories_right_container",style:{alignItems:u[1]},children:[e.jsx("div",{className:"prodCategories_right_menu",children:e.jsxs("div",{style:{width:F},children:[e.jsxs("h1",{children:[a[a.length-1]," - Up to: ",c,"£",e.jsxs("span",{children:[a.length," products"]})]}),e.jsxs("div",{className:"prodCategories_sub",children:[e.jsx("span",{children:e.jsx("p",{children:"Order by: most popular"})}),e.jsxs("span",{children:[e.jsx("p",{children:"Display mode:"}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>m(1),style:{backgroundColor:d===1?"#e0e0e0":"transparent"},children:e.jsx(T,{})}),e.jsx("button",{onClick:()=>m(2),style:{backgroundColor:d===2?"#e0e0e0":"transparent"},children:e.jsx(P,{})}),e.jsx("button",{onClick:()=>m(3),style:{backgroundColor:d===3?"#e0e0e0":"transparent"},children:e.jsx(D,{})})]})]})]})]})}),e.jsx("div",{className:"prodCategories_right_products_cont",style:{gridTemplateColumns:u[0]},children:f.map(s=>a.includes(Number(s.id))&&s.price[0]<=c?e.jsx(w,{props:s},s.price[0]+s.id):null)})]})]})};export{R as default};
