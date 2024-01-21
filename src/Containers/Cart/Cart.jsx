import "./Cart.css"
import { useContext, useEffect, useState, lazy } from "react" 
import { LoginContext } from "../../Contexts/ContextLog"
import { IoInformationCircle, IoClose } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import CartFooter from "../../Components/CartFooter/CartFooter"
import { IoIosArrowForward } from "react-icons/io"
import { BsFastForwardFill } from "react-icons/bs"

const CartProducts = lazy(() => import("../../Components/CartProd/CartProd"))
import { products } from "../../assets/products"


const Cart = () => {
  const { cartProd, redirectPage, productHistory, mobile} = useContext(LoginContext)
  const [emptyCart, setEmptyCart] = useState(false)
  const [closeNoti, setCloseNoti] = useState(true)
  const [voucherError, setVoucherError] = useState(false)
  // prices
  const [productPrice, setProductPrice] = useState()
  const navigate = useNavigate()
  const [ids, setIds] = useState([])

// go home if page refreshes 
useEffect(() => {
  if(!redirectPage && cartProd.length === 0 && !productHistory){
    navigate("/")          
  }
})

// check if cart is empty
  useEffect(() => {
   if(cartProd.length == 0){
    setEmptyCart(false)
   }else{
    setEmptyCart(true)
   }
  
  })

 //  scroll to top  
  useEffect(() => {
   window.scrollTo({
    top:0
   })
  }, [])

// calculate total product price  
useEffect(() => {
  const filteredProducts = products.filter((prod) => cartProd.includes(prod.id));
  const pricesArray = filteredProducts.map((prod) => prod.price[0]);
  let totalPrice = pricesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  setProductPrice(totalPrice);
}, [cartProd, products]);


// handling more than 1 product from the child
const handlePriceFromChild = (price) => {
  if(price[1] === "+"){
    setProductPrice(productPrice + price[0])
  }else if(price[1] === "-"){
    setProductPrice(productPrice - price[0])
  }else if(price[1] === "w"){
     const filteredProducts = products.filter((prod) => cartProd.includes(prod.id));
     const pricesArray = filteredProducts.map((prod) => prod.price[0]);
     let totalPrice = pricesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


     if(!ids.includes(price[4])){
      if(productPrice / price[2] - totalPrice === 0){
         setProductPrice(productPrice + price[0])
         console.log("1 runs")
        setIds((ids) => [...ids, price[4]])
      }
      }else if(productPrice - (price[2] * price[3]) == 5.990000000000009 && price[0] === 7.99){
        setProductPrice(productPrice + 2)
        console.log("2 runs")
     }else if(productPrice - (price[2] * price[3]) == 7.990000000000009 && price[0] === 5.99){
        setProductPrice(productPrice - 2)
        console.log("3 runs")
     }
  }
} 


  return (
    <div className="cart_conteiner">
     <div className="cart_title_container">
        <h1>My Cart</h1>
     </div>

    <div className="cart_products_and_summary_container">
      {emptyCart 
      ? <div className="cart_products_added">{products.map((prod) => cartProd.includes(prod.id) && <CartProducts props={prod} key={prod.price[0] + prod.id} priceFromChild={handlePriceFromChild}/>)}</div>
      : closeNoti && 
      //  notification about cart is empty
      <div className="cart_notification_container">
          <IoInformationCircle className="cart_info_noti"/>
          <div className="cart_notification_text">
            <p>Your cart is empty. To add productrs to the cart please return&nbsp;<Link to="/">to the store.</Link></p>
            
          </div>
          <div className="cart_notification_close_conteiner" onClick={() =>setCloseNoti(false)}>
          <IoClose />
          </div>
        </div>
      }
      {/* order summary */}
      {emptyCart && 
      <div className="cart_summary_and_voucher">
      <div className="cart_order_summary">
        <h1>Order summary</h1>
        <span>Products price: <p>{parseFloat(productPrice).toFixed(2)}£</p></span>   
        <span>Delivery price: <p>4.98£</p></span>
        <h2>Total:</h2>
        <h1 className="cart_total_price">{parseFloat(productPrice + 4.98).toFixed(2)}£</h1>
        <div className="cart_order_summary_gift">
          <input type="checkbox"/>
          <p>This order contains a gift</p>
        </div>
        <button onClick={() => alert("The checkout option is not available at the moment")} className="cart_checkout"><BsFastForwardFill />Checkout</button>
      </div>
       {/* voucher */}
       <div className="cart_order_voucher">
        <h1>Giftcard or voucher code</h1>
        <div> 
          <input type="text" />
          <button onClick={() => setVoucherError(true)}><IoIosArrowForward /></button>
        </div>
        {voucherError && <p>Invalid code. Please try again</p>}
       </div>
      </div>}

    </div>
    <CartFooter mobile={mobile}/>
    </div>
  )
}

export default Cart