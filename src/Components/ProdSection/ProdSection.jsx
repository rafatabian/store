import "./ProdSection.css"
import Product from "../Product/Product"
import { products } from "../../assets/products"
import { useState, useEffect, useRef } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
// icons
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { useContext } from "react"

const ProdSection = ({props}) => {
    const { mobile } = useContext(LoginContext)
    const [loadedprod, setLoadedProd] = useState([])
    const prodContainerRef = useRef(null)
    const [scroll, setScroll] = useState(0)

// products mapping logic
useEffect(() => {
    setLoadedProd(products)
}, [])

// scroll products containers
const handleLeftMove = (e) => {
    const prodContainer = prodContainerRef.current
    const ContWidth = prodContainer.scrollWidth

   if (e === "R"){
    if(scroll < (ContWidth / 4)){
      setScroll(scroll + 300)
    }else{
      setScroll(0)
    }
   }else{
    if(scroll < 10){
      setScroll((ContWidth / 4))
    }else{
      setScroll(scroll - 300)
    }
   }
 }

 // make container scorll
 useEffect(() => {
  const prodContainer = prodContainerRef.current
  prodContainer.scrollLeft = scroll
 }, [scroll])

  return (
    <div className="home_section" style={{margin: mobile ? "3rem 10px" : null}}>
        <h1>{props.charAt(0).toUpperCase() + props.slice(1)}</h1>
        <div className="items" ref={prodContainerRef}>
          {loadedprod.map((item) => item.category == `${props}` ? <Product key={item.id + item.price[0]} props={item}/> : null)}
        </div>
        {!mobile && <button id="home_L"onClick={() => handleLeftMove("L")}><MdOutlineArrowForwardIos /></button>}
        {!mobile && <button id="home_R"onClick={() => handleLeftMove("R")}><MdOutlineArrowForwardIos /></button>}
      </div>
  )
}

export default ProdSection