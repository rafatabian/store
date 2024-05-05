import "./ProdSection.css"
import Product from "../Product/Product"
import { products } from "../../assets/products"
import { useState, useEffect, useRef } from "react"
// icons
import { MdOutlineArrowForwardIos } from "react-icons/md"

const ProdSection = ({props}) => {
    const [loadedprod, setLoadedProd] = useState([])
    const prodContainerRef = useRef(null)
    const [scroll, setScroll] = useState(0)

// products mapping logic
useEffect(() => {
    setLoadedProd(products)
}, [])

// clicking btns horizontal scroll logic
const handleLeftMove = (e) => {
  const prodContainer = prodContainerRef.current
  const ContWidth = prodContainer.scrollWidth

 if (e === "R"){
  if(scroll === ContWidth){
    setScroll(0)
  }else{
    setScroll(ContWidth)
  }
 }
 if(e === "L"){
  if(scroll === ContWidth){
    setScroll(0)
  }else{
    setScroll(ContWidth)
  }
 }
}

 // make container scorll
 useEffect(() => {
  const prodContainer = prodContainerRef.current
  prodContainer.scrollLeft = scroll
 }, [scroll])

  return (
    <div className="home_section">
        <h1>{props.charAt(0).toUpperCase() + props.slice(1)}</h1>
        <div className="items" ref={prodContainerRef}>
          {loadedprod.map((item) => item.category == `${props}` ? <Product key={item.id + item.price[0]} props={item}/> : null)}
        </div>
        <button id="home_L"onClick={() => handleLeftMove("L")}><MdOutlineArrowForwardIos /></button> 
        <button id="home_R"onClick={() => handleLeftMove("R")}><MdOutlineArrowForwardIos /></button>
      </div>
  )
}

export default ProdSection