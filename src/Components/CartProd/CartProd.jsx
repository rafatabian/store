import "./CartProd.css"
import { useState, useContext, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import shield from "../../assets/store_shield.png"
import { LoginContext } from "../../Contexts/ContextLog"
import { Link } from "react-router-dom"
import { TfiControlForward } from "react-icons/tfi"

import { FaWallet } from "react-icons/fa"
import { FaMinus, FaPlus } from "react-icons/fa6"
import { MdKeyboardArrowDown } from "react-icons/md"
import { BiWorld } from "react-icons/bi"


const CartProd = ({props, priceFromChild}) => {
    const {cartProd, setCartProd, setProductHistory, liked, setLiked } = useContext(LoginContext)
    const [price, setPrice] = useState(props.price[0])
    const [numberItems, setNumberItems] = useState(1)
    const [toggleWarranty, setToggleWarranty] = useState(true)
    // toggle radion menu
    const [radioMenu, setRadioMenu] = useState(false)


// clicking + or - buttons
  let itemsNr 
const handleNumberItems = (e) => {
  if(numberItems === 1 && e === "-"){
    setProductHistory(true)
    setCartProd(cartProd.filter((e) => e !== props.id))
  }else if(e === "+"){
   setNumberItems(numberItems + 1)
   itemsNr = numberItems + 1
  priceFromChild([props.price[0], "+"])  
  }else{
    setNumberItems(numberItems - 1)
    itemsNr = numberItems - 1
    priceFromChild([props.price[0], "-"])
  }
  setPrice(parseFloat(itemsNr * props.price[0]).toFixed(2))
}

// adding and removing from liked 
const handleSettings = () => {
  if(liked.includes(props.id)){
    setLiked(liked.filter((e) => e !== props.id))
  }else{
    setLiked((prev) => [...prev, props.id])
  }
}

// inputs logic
// calculate individaul product price with warranty
const handleInputs = (e) => {
   setPrice(parseFloat(numberItems * props.price[0] + e).toFixed(2))   //
   priceFromChild([e, "w"])
}

// make input unselect when changin price
useEffect(() => {
  const firstInp = document.querySelector(`.cartProd_first_input${props.id}`);
  const secondInp = document.querySelector(`.cartProd_second_input${props.id}`)
  if(firstInp){
    firstInp.checked = false
  }
  if(secondInp){
     secondInp.checked = false
  }
}, [numberItems])

// make imput select when clicking the parent 
const handleRadio = (e) => {
  const firstInp = document.querySelector(`.cartProd_first_input${props.id}`)
  const secondInp = document.querySelector(`.cartProd_second_input${props.id}`)
  if(e === "first"){
    firstInp.checked = true
    setPrice(parseFloat(numberItems * props.price[0]  + 5.99).toFixed(2))
    priceFromChild([5.99, "w", numberItems, props.price[0], props.id])
  }else{
    secondInp.checked = true
    setPrice(parseFloat(numberItems * props.price[0]  + 7.99).toFixed(2))
    priceFromChild([7.99, "w", numberItems, props.price[0], props.id])
  }
}

// add styles to the imput text when hovering over

//check for FaBreadSlice, whater and hyde warranty
useEffect(() => {
  if(props.id == 29 || props.id == 30 || props.id == 31 || props.id == 32 || props.id == 33 || props.id == 34 || props.id == 35 || props.id == 45) {
    setToggleWarranty(false)
  }
})




  return (
   <div className="cartProd_container">
      <div className="cartProd_img_container">
        <LazyLoadImage
        src={props.image}
        placeholderSrc={props.smallImg}
        effect="blur"
        alt="product"
        />
      </div>
     <div className="cartProd_info_and_price">
      <div className="cartProd_info">
        <h1>{props.name}</h1>
        <span>
          <p className="cartProd_info_sold_by">Sold by: Store</p>
          <p>Avaiability: In stock</p>
        </span>
      {toggleWarranty 
      ? <div className="cartRrod_info_warranty" onClick={() => setRadioMenu(!radioMenu)} style={radioMenu ?{borderBottom: "none" }: null}>
          <span>
            <img src={shield} alt="wananty" />
            <p>Extend the standard warranty by 1 or 2 years!</p>
          </span>
          <MdKeyboardArrowDown />
        </div>
      : <div className="cartProd_subscription">
          <p><BiWorld />Climate Pledge Friendly</p>   
        <div className="cartProd_subscription_checkbox">
            <div>
              <input type="checkbox" />
              <p>Subscribe & save:</p>
            </div>
            <p className="cartPRod_subscription_moreInfo">Save 10% now and up to 15% when you schedule repeat deliveries.</p>
        </div>  
        </div>}


          {radioMenu && <><div className="cartProd_inputs">
            <div className="cartProd_inputs_container_options" onClick={() => handleRadio("first")}>
              <div className="cartProd_inputs_radio">
                <input type="radio" name={`warranty${props.id}`} value="5.99" onClick={()=> handleInputs(5.99)} className={`cartProd_first_input${props.id}`}/> 
              </div>
              <div className="cartProd_inputs_text">
                <p>1 year extra warranty</p>
                <p>5.99£</p>
              </div>
            </div>
            <div className="cartProd_inputs_container_options" onClick={() => handleRadio("second")}>
              <div className="cartProd_inputs_radio">
                <input type="radio" name={`warranty${props.id}`} value="7.99" onClick={()=> handleInputs(7.99)} className={`cartProd_second_input${props.id}`}/>
              </div>
                <div className="cartProd_inputs_text">
                  <p>2 years extra warranty</p>             
                  <p>7.99£</p>
                </div> 
              </div>
          </div>
          <Link to="/help2" className="cartProd_inputs_link"><TfiControlForward />Show more details</Link>
          </>
         } 

        
      </div>
      <div className="cartProd_price">
          <h1>{price}£</h1>
          <span> <p>Installments with</p> <p><FaWallet />MyWallet</p></span>
          <div className="cartProd_number_items">
            <button onClick={() => handleNumberItems("-")}><FaMinus /></button>
              <p>{numberItems}</p>
            <button onClick={() => handleNumberItems("+")}><FaPlus /></button>
          </div>
          <button onClick={() => handleSettings()} className="cartProd_price_move_btn">{liked.includes(props.id) ? "Remove from " : "Move to "}liked</button>
          <button onClick={() => setCartProd(cartProd.filter((e) => e !== props.id))} className="cartProd_price_delete_btn">Delete</button>
      </div>
      </div>
   </div>
  )
}

export default CartProd