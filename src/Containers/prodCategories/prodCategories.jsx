import "./prodCategories.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { products } from "../../assets/products"
import Product from "../../Components/Product/Product"
import { RiMenu2Fill, RiMenuFill, RiMenu3Fill} from "react-icons/ri"

const prodCategories = () => {
    const [selectedProdID, setSelectedProdID] = useState([])
    const [prodNames, setProdNames] = useState([])
    const [menuPosition, setMenuPosition] = useState([])
    const [btnBackG, setBtnbackG] = useState(2)
    // prices filter
    const [maxPrice, setMaxPrice] = useState()
    const [filteredProd, setFilteredProd] = useState([])
    const [inpDisplay, setInpDisplay] = useState("")
    const [menuWidth, setMenuWidth] = useState(0)

// retrive data from url
const location = useLocation()
const params = new URLSearchParams(location.search)
const receivedData = params.get("data")

// sort the products
useEffect(() => {
   switch(receivedData){
    case "cameras-tech":
    setSelectedProdID([50, 49, 44, 43, 22, 6, 5, 3,"#EBF5FB", "Cameras & tech"])
    break;
    case "fashion-decorations":
    setSelectedProdID([42, 41, 40, 38, 39, 37, 36, 28, 25, "#FDEDEC", "Fashion & decorations"])
    break;
    case "sports-camping":
    setSelectedProdID([22, 23, 24, 25, 26, 27, 28, "#E9F7EF", "Sports & Camping"])
    break;
    case "home-bedroom":
    setSelectedProdID([49, 48, 5, 12, 13, 14, "#FEF5E7", "Home & bedroom"])
    break;
    case "music-entertainment":
    setSelectedProdID([2, 1 ,3, 5, 46, 43, "#F4ECF7", "Music & entertainment"])
    break;
    case "essential":
    setSelectedProdID([16, 29, 30, 31, 32, 33, 34, 35,"#FEF9E7", "Essentials"])
    break;
    case "discover-products":
    setSelectedProdID([49, 46, 43, 45, 44,"#E8F8F5", "Discover products"])
    break;
    case "teeth-care":
    setSelectedProdID([45, 35, 34, 4,"#EAF2F8 ", "Teeth care"])
    break;
    case "tools":
    setSelectedProdID([17, 18, 19, 20, 21, 22, "#F4F6F6", "Tools"])
    break;
    case "christmas":
    setSelectedProdID([11, 9, 10, 8, "#FDEDEC", "Christmas"])
    break;
    case "relax-selfcare":
    setSelectedProdID([47, 46, 38, 4, 7, "#F5EEF8", "Relax"])
    break;
    default:
    setSelectedProdID([])
   }
}, [receivedData])


// add blue names of the products on the left
useEffect(() => {
   switch(selectedProdID[selectedProdID.length - 1]){
    case "Cameras & tech":
    setProdNames(["Speakers", "TV's", "Chargers", "Lights", "Drone", "Smart Watch", "Cameras"])
    break;
    case "Fashion & decorations":
    setProdNames(["Fleeces", "Jackets", "Sweatshirts", "Sleeves", "Longwear sets", "T-shrits", "Pullovers"])
    break;
    case "Sports & Camping":
    setProdNames(["Lights", "Tents", "Dinnerware", "Fleece", "Backpack", "Blankets", "Jackets"])
    break;
    case "Home & bedroom":
    setProdNames(["TV's", "Sofas", "Chairs", "Plants", "Microwave", "Cameras"])
    break;
    case "Music & entertainment":
    setProdNames(["headsets", "Jbl speakers", "Bose speakers", "TV's", "Drones", "Books"])
    break;
    case "Essentials":
    setProdNames(["Hand Tools", "Cereals", "Tissues", "Sparkling water", "Still water", "Bread", "ToothPaste", "Toothbrush"])
    break;
    case "Discover products":
    setProdNames(["Drones", "Smart Watch", "Toothpaste", "Books", "Cameras"])
    break;
    case "Teeth care":
    setProdNames(["Electric toothbrush", "Toothpaste", "Toothbrush"])
    break;
    case "Tools":
    setProdNames(["Screwdrivers", "General tools", "Tape messure", "hammers", "Levels", "Lights"])
    break;
    case "Christmas":
    setProdNames(["Pijama sets", "Christmas trees", "Baubles", "Ornaments"])
    break;
    case "Relax":
    setProdNames(["Toothbrush", "Blenders", "Longwears sets", "Books", "Coffee Machines"])
    break;
   }

}, [selectedProdID])

// save prices in an array for the current prods
useEffect(() => {
    products.map((prod) => {
        if(selectedProdID.includes(Number(prod.id))){
         setFilteredProd((prev) => [...prev, prod.price[0]]) 
        }
    })

    return () => {
        setFilteredProd([])
    }
}, [selectedProdID])

// find the gratest price
useEffect(() => {
    if(filteredProd.length > 0){
       setMaxPrice(Math.max(...filteredProd))
       setInpDisplay(Math.max(...filteredProd))
    }
}, [filteredProd])

// handle price when interacting with the input
const handleSliderChange = (e) => {        
    setInpDisplay(e.target.value)
}

// set rows from default for products display besed on page width
useEffect(() => {
const pageWidth = window.innerWidth

if(pageWidth > 1260){
    setMenuPosition(["repeat(4, 1fr)", "flex-start"])
    setMenuWidth("922px")
}else if(pageWidth < 980){
    setMenuPosition(["repeat(2, 1fr)", "center"])
    setMenuWidth("456px")
}else if(pageWidth < 1260){
    setMenuPosition(["repeat(3, 1fr)", "flex-start"])
    setMenuWidth("689px")
}
}, [])

// handle right display position
const handleShowProd = (e) => {
    const windowWidth = window.innerWidth
   if(e === 1){
    setMenuPosition([`repeat(${windowWidth < 980 ? "1" : "2"}, 1fr)`, "flex-start"])
    setBtnbackG(1)
   }else if(e === 2){
    setMenuPosition([`repeat(${windowWidth < 980 ? "2" : windowWidth < 1260 ? "3" : "4"}, 1fr)`, "flex-start"])
    setBtnbackG(2)
   }else{
    setMenuPosition([`repeat(${windowWidth < 980 ? "1" : "2"}, 1fr)`, "flex-end"])
    setBtnbackG(3)
   }
}

  return (
    <div className="prodCategories_container" style={{backgroundColor: `${selectedProdID[selectedProdID.length - 2]}`}}>
        <div className="prodCategories_left_container">
            <div className="prodCategories_filters_container">
                <h1>{selectedProdID[selectedProdID.length - 1]}</h1>
                <h2>{"(" + selectedProdID.length + ")"}</h2>
                {prodNames.map((name) => <p key={name}>{name}</p>)}
            </div>
            {/* range */}
            <div className="prodCategories_range" >
                <h1>Price</h1>
                <input 
                type="range"
                id="price_range"
                name="price"
                min="0"
                max={maxPrice}
                value={inpDisplay}
                onChange={handleSliderChange} 
                />
                <div>
                    <p>0£</p>
                    <p>-</p>
                    <p>{inpDisplay ? inpDisplay : maxPrice}£</p>
                </div>
            </div>
        </div>
            
        <div className="prodCategories_right_container" style={{alignItems: menuPosition[1]}}>
            <div className="prodCategories_right_menu">
            <div style={{width: menuWidth}}>
              <h1>{selectedProdID[selectedProdID.length - 1]} - Up to: {inpDisplay}£<span>{selectedProdID.length} products</span></h1>
              <div className="prodCategories_sub">
                <span>
                    <p>Order by: most popular</p>
                </span>
                <span>
                    <p>Display mode:</p>
                    <div>
                        <button onClick={() => handleShowProd(1)} style={{backgroundColor: btnBackG === 1 ? "#e0e0e0" : "transparent"}}><RiMenu2Fill /></button>
                        <button onClick={() => handleShowProd(2)}  style={{backgroundColor: btnBackG === 2 ? "#e0e0e0" : "transparent"}}><RiMenuFill /></button>
                        <button onClick={() => handleShowProd(3)} style={{backgroundColor: btnBackG === 3 ? "#e0e0e0" : "transparent"}}><RiMenu3Fill /></button>
                    </div>
                </span>
              </div>
            </div>
            </div>

            <div className="prodCategories_right_products_cont" style={{gridTemplateColumns: menuPosition[0]}}>
                {/* display */}
                {products.map((prod) => selectedProdID.includes(Number(prod.id)) && prod.price[0] <= inpDisplay ? <Product props={prod} key={prod.price[0] + prod.id}/> : null)}
                {/* display */}
            </div>
           
        </div>
       
    </div>
  )
}

export default prodCategories