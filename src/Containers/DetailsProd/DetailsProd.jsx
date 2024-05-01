import "./DetailsProd.css"
import { useEffect, useContext, useState, lazy } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
import { products } from "../../assets/products"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { FaStar, FaStarHalf, FaHeart, FaRegStar, FaShoppingCart, FaRegHeart } from "react-icons/fa" 
import { FaTruck, FaCheck } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link, useLocation, useNavigate } from "react-router-dom"
import geniusBTN from "../../assets/logo_genius_btn.webp"

// const Review = lazy(() => import("../../Components/Review/Review"))
// normal imprt 
import Review from "../../Components/Review/Review"


// component pentru vizalizare detalii produs
const DetailsProd = () => {
  const {prodID, premGenius, cartProd, setCartProd, liked, setLiked, mobile} = useContext(LoginContext)
  const [random, setRandom] = useState(0)
  const [buyers, setBuyers] = useState(0)
  const [confirmation, setConfirmation ] = useState("")
  const [popUp, setPopUp] = useState(null)
  const [btnMenuMobile, setBtnMenuMobile] = useState(false)
  const [border, setBorder] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

// redirect home when refreshes
useEffect(() => {
  if(!prodID){
    navigate("/")
  }
}, [prodID])

// set a border top if in the right conditions
useEffect(() => {
  if(window.innerWidth < 550 && location.pathname == "/details-product"){
      setBorder(true)
  }else{
      setBorder(false)
  }
}, [])

//buttons position:fixed on mobile 

useEffect(() => {
  window.addEventListener("scroll", () => {
    handleScroll()
  })

  const handleScroll = () => {
     const btnMenu = document.querySelector(".detailsProd_inStock")
    if(btnMenu){
      const rect = btnMenu.getBoundingClientRect()
      const inVeiwport = rect.bottom <= window.innerHeight
      if(inVeiwport){
        setBtnMenuMobile(true)
      }else{
        setBtnMenuMobile(false)
      }
    }
  }
  return window.removeEventListener("scroll", () => {handleScroll()})
})   


// generate random reviews and buyers nr 
  useEffect(() => {
    window.scroll(0, 0)
    let random = Math.random() * 1 + 4
    setRandom(random.toString().slice(0, 3))

    setBuyers(Math.floor(Math.random() * 500))
   }, [])
// delivery dates
const date = new Date()
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sathurday"]
let dayOfTheWeek = null
let nextDay = null
let standardDeliveryDay = (date.getDate() + 2)
let nextDayDelivery = (date.getDate() + 1)

   switch(date.getDay()) {
    case 1:
    dayOfTheWeek = 3
    nextDay = 2
    break;
    case 2:
    dayOfTheWeek = 4
    nextDay = 3
    break;
    case 3:
    dayOfTheWeek = 5
    nextDay = 4
    break;
    case 4:
    dayOfTheWeek = 6
    nextDay = 5
    break;
    case 5:
    dayOfTheWeek = 7
    nextDay = 6
    break;
    case 6:
    dayOfTheWeek = 1
    nextDay = 7
    break;
    default:
    dayOfTheWeek = 2
    nextDay = 1
   }

// add prod to the basked
const handleBasketClick = (id) => {
  if(!mobile){
     window.scroll({top:0, left:0, behavior:"smooth"})
  }

  if(!cartProd.includes(id)){
   setCartProd((prev) => [...prev, id])
  }
   setConfirmation("addedToCart")
   trigerDissapear()
  //  redirect to cart
   setTimeout(() =>{
     document.querySelector(".detailsProd_link_to_cart").click()
   }, 1400)
}
// add prod to favourite
const handleFavouriteClick = (id) => {
  if(window.innerWidth  > 750){
  window.scroll({top:0, left:0, behavior:"smooth"})
  }
    if(liked.includes(id)){
      const filteredIDs = liked.filter((num) => num !== id)
      setLiked(filteredIDs)
      setConfirmation("removedFromFav")
      trigerDissapear()
      return
    }else{
        setLiked((prev) => [...prev, id])
        setConfirmation("addedToFavourite")
        trigerDissapear()
      }
     }
    // make pop up dissapear
    const trigerDissapear = () => {
       setTimeout(() => {
        setConfirmation(false)
       }, 1400)
    }

// console.log(closePopUp)
const closeFromChild = (e) => {
   setPopUp(e)
}

  return (
    <div className="details_prod_background">
    {products.map((item) => item.id == prodID ? (
     <div key={item.id + item.price[0]} className="detailsProd_main_container">
      
        <div className="detailsProd_image_container">
          <LazyLoadImage
          src={item.image}
          placeholderSrc={item.smallImg}
          effect="blur"
          alt="product details"
          />
          <div className="detailsProd_flags">
              <div className="detailsProd_genius">Genius</div>
              <div>
              {item.price[0] < 25 && <span>Top Deals</span>}
              {item.price[0] < 25 && item.price[1] > 50 ? <span>Top Favourite</span> : null}
              </div>
          </div>
        </div>

        <div className="detailsProd_main_content">
           <h1>{item.name}</h1>
          {item.store && <Link to={item.store} className="detailsProd_link">Visit the official store</Link>}
          <div className="products_review" style={{borderTop: border ? "10px solid #f4f4f4" : null }}>
                <FaStar className="products_review_star"/>
                <FaStar className="products_review_star"/>
                <FaStar className="products_review_star"/>
                <FaStar className="products_review_star"/>
                {random <= 4.1 ? null : random >= 4.75 ? <FaStar className="products_review_star"/> : <FaStarHalf className="products_review_star"/>}
                <p>{random} <span>({buyers} reviews)</span></p> 
                <button onClick={() => setPopUp(true)} className="detailsProd_add_review_btn">Add review</button>

                {popUp && <Review props={item} closeFromChild={closeFromChild}/>}

          </div>
          <p className="detailsProd_buyers">{buyers % 2 == 0 ? 100 : 50}+ bought in past month</p>

          <div className="detailsProd_price">
            <div>
              <p>-{item.price[1]}%</p>
              <h2>{item.price[0]}£</h2>
            </div>
            <p>Retail price: {((item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 3)).slice(-1) == "." ? (item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 2) : (item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 3)}£</p>
          </div>
          <div className="detailsProd_delivery">
            <div>
              <span><FaTruck /></span>
            </div>

            <div>
              <h3>Delivery</h3>
              <div className="detailsProd_delivery_options">
                <div>
                  <p>Standard delivery</p>
                  <p>{dayName[dayOfTheWeek]} {standardDeliveryDay}</p>
                  <p>Free</p>
                </div>
                <div>
                  <p>Next day delivery</p>
                  <p>{dayName[nextDay]} {nextDayDelivery}</p>
                  <p>4.99£</p>
                </div>
              </div>
            </div>   
          </div>  
        </div>
  
{/* advantages */}
      <div className="detailsProd_buy_main_container">
        <div className="detailsProd_buy_continer">
          <div className="detailsProd_benefits">  
            <div>
              <span>< FaRegStar/></span>
            </div>
            <div>
              <p>Advantages</p>
              <p className="detailsProd_benefits_p"><FaCheck />Free return within 30 days <Link to="/help2">&nbsp;Details</Link></p>
            </div>
          </div>
        
          <div className="detailsProd_buy_price">
            <div>
              <p>PRP: {((item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 3)).slice(-1) == "." ? (item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 2) : (item.price[0] / (1 - (item.price[1] / 100))).toString().slice(0, 3)}£</p>
              <p>{item.price[0]}£</p>
            </div> 
            <div>
              <span className="detailsProd_installments">Monthly installments from&nbsp;  
                {item.price[0] > 100 
                ? <p>{String(item.price[0] / 5).slice(0, 5)}£</p>
                : <p>{String(item.price[0] / 4).slice(0, 4)}£</p>
                }
              <Link to="/help2">&nbsp;More details</Link>
               </span>
            </div>
          </div>

           <div className="detailsProd_buy_genius">
            <img src={geniusBTN} alt="genius" />
            {premGenius 
            ?<p>Geniuns unloked</p>
            :<Link to="/genius">Try Genius for <span>free next day delivery</span></Link>
            }
           </div>

           <h3 className="detailsProd_inStock">In stock</h3>

           <div className={`detailsProd_buttons ${!btnMenuMobile? "detailsProd_menu_fixed" : null}`}>
            <button onClick={() => handleBasketClick(item.id)} className="detaildProd_basket"><FaShoppingCart /> Add to basket</button>
            <button onClick={() => handleFavouriteClick(item.id)} className="detaildProd_favourites">{liked.includes(item.id) ? <FaHeart id="red-heart"/> : <FaRegHeart />}Add to favourites</button>
           </div>

           {confirmation && <div className="detailsProd_confirmation" style={{marginTop: mobile ? `${window.scrollY - 92}px` : null, height: mobile ? "100vh" : null }}>
            {confirmation == "addedToCart"
            ?<span><FaShoppingCart id="prodDetails_cart"/></span>
            :confirmation == "addedToFavourite" 
            ?<span><FaHeart id="prodDetails_heart"/></span>
            :confirmation == "removedFromFav"
            && <span><RiDeleteBin6Line className="detailsProd_bin_icon"/></span>
            }
            {confirmation == "removedFromFav"
            ? <p>Product removed</p>
            : <p>Product added</p>}
           </div>}
          </div>
      </div>
      <Link to="/cart" className="detailsProd_link_to_cart"/>
      <Link to="/liked" className="detaildProd_link_to_favorites"/>
    </div>
    )
    : null
    )}
    </div> 
  )
}

export default DetailsProd