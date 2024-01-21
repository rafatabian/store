import "./Search.css"
import { useLocation } from "react-router-dom"
import { products } from "../../assets/products"
import { useEffect, useState, lazy } from "react"
import { IoInformationCircleOutline } from "react-icons/io5"
import { RiMenu2Fill, RiMenuFill, RiMenu3Fill} from "react-icons/ri"


const Product = lazy(() => import("../../Components/Product/Product"))
const Footer = lazy(() => import("../../Components/Footer/Footer"))


const Search = () => {
    const [prodIDs, setProdIDs] = useState([])
    const [menuPosition, setMenuPosition] = useState([])
    const [btnBackG, setBtnbackG] = useState(2)
    const [category, setCategory] = useState([])
    const [menuWidth, setMenuWidth] = useState(0)
    // no product found
    const [noProd, setNoProd] = useState(null)

    // retrive the data from url
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const data = params.get("data")

    let cv = new Set()
    let categ = []
    useEffect(() => {
        let dataLower = data.toLowerCase();
        const regex = new RegExp(dataLower, 'i'); 
    
        for (let i = 0; i < products.length; i++) {
            const words = products[i].name.split(" ");

            for (let j = 0; j < words.length; j++) {
                const wordLower = words[j].toLowerCase();
                if (regex.test(wordLower)) {
                        cv.add(products[i].id) 
                        if(!categ.includes(products[i].category)){
                           categ.push(products[i].category)  
                        }    
                }
            }
        }
        const elaborateProdIds = () => {
           setProdIDs(Array.from(cv))
           setCategory(categ)
        }
        
        elaborateProdIds()
    }, [data, products])


// trow message no product found    
useEffect(() => {
if(prodIDs.length === 0){
    setNoProd(true)
}else{
  setNoProd(false)
}
}, [prodIDs])

// set rows from default for products display besed on page width
useEffect(() => {
  const pageWidth = window.innerWidth
  
  if(pageWidth > 1260){
      setMenuPosition(["repeat(4, 1fr)", "flex-start"])
      setMenuWidth("947px")
  }else if(pageWidth < 980){
      setMenuPosition(["repeat(2, 1fr)", "center"])
      setMenuWidth("464px")
  }else if(pageWidth < 1260){
      setMenuPosition(["repeat(3, 1fr)", "flex-start"])
      setMenuWidth("706px")
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
    <>
    <div className="search_results_container">

      <div className="search_left_section">
        <h1>{noProd ? "No categories found" : "Categories found"}</h1>
        {category.map((s) => <p key={s}>{s}</p>)}
      </div>

      <div className="search_right_container">
        <div className="search_menu" style={{width: menuWidth}}>
          <h1>{prodIDs.length} results for: <p>"{data.length > 20 ? data.slice(0, 20)+ "..." : data}"</p></h1>
          <p><IoInformationCircleOutline />Select a category to view the available filters</p>
          <span className="search_right_order_settings">
            <p>Order by: relevance</p>
            <span>
              <p className="">Display mode:</p>
              <div className="search_display_btns">
                <button onClick={() => handleShowProd(1)} style={{backgroundColor: btnBackG === 1 ? "#e0e0e0" : "white"}}><RiMenu2Fill /></button>
                <button onClick={() => handleShowProd(2)}  style={{backgroundColor: btnBackG === 2 ? "#e0e0e0" : "white"}}><RiMenuFill /></button>
                <button onClick={() => handleShowProd(3)} style={{backgroundColor: btnBackG === 3 ? "#e0e0e0" : "white"}}><RiMenu3Fill /></button>
              </div>
            </span>
          </span>
        </div>

       <div  className="search_results" style={{justifyContent: menuPosition[1]}}> 
       {noProd 
       ? <div className="search_no_prod_found">
        <h1>To find the desired product, try the following:</h1>
        <ul>
          <li>Check if you've spelled the terms correctly.</li>
          <li>Consider using synonyms.</li>
          <li>Please retry with a broader search.</li>
          <li>Explore the different sections.</li>
        </ul>
       </div>
       : null}
        <div className="search_display_mode" style={{gridTemplateColumns: menuPosition[0]}}>

        {products.map((prod) => (
               prodIDs.includes(prod.id) ? <Product props={prod} key={prod.price[0] + prod.price[1]}/> : null          
          ))}

          </div>
       </div>

      </div>
     </div>

    <Footer />
    </>
  )
}

export default Search