import "./Product.css"
import { FaRegHeart, FaHeart, FaWallet, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { LoginContext } from "../../Contexts/ContextLog"
import { useEffect, useState, useContext} from "react"
import { Link } from "react-router-dom"

const Product = ({props}) => {
    const {liked, setLiked, setProdID, cartProd, setCartProd, mobile} = useContext(LoginContext)
    const [random, setRandom] = useState(0)
    const [buyers, setBuyers] = useState(0)


// generate random nr from 4.5 to 5  for reviews
useEffect(() => {
    let random = Math.random() * 1 + 4
    setRandom(random.toString().slice(0, 3))

    setBuyers(Math.floor(Math.random() * 500))
}, [])
    

// handle liked prod
const handleLiked = (id) => {
    if(liked.includes(id)){
        setLiked(liked.filter((num) => num !== id))
    }else{
       setLiked((n) => [...n, id]) 
    }
}
// add prod to the cart 
const handleCartClick = (id) => {
    if(!cartProd.includes(id)){
      setCartProd((prev) => [...prev, id])
    }
}


const handleProdDetails = (id) => {
    setProdID(id)
}


return(
    <div className="products_main_container" style={{margin: mobile ? 3 : null}}>
         <div className="products_like_icon_container"> {/*adds prod to liked when clicked*/}
          {/*props.price[1] > 45 && */}<span>genius</span>
          {liked.includes(props.id)
          ?<span onClick={() => handleLiked(props.id)} className="home_heart_full_icon"><FaHeart /></span>
          :<span onClick={() => handleLiked(props.id)} className="home_heart_empty_icon"><FaRegHeart /></span> 
          }
        </div>
        
        <div className="products_image_container">
            <Link to="/details-product" onClick={() => handleProdDetails(props.id)}>
            <LazyLoadImage
            src={props.image}
            placeholderSrc={props.smallImg}
            effect="blur"
            alt="products"
            />
            </Link>
            <div>
              {props.price[0] < 25 && <span>Top Deals</span>}
              {props.price[0] < 25 && props.price[1] > 50 ? <span className="home_top_favourite_span">Top Favourite</span> : null}
            </div> 
        </div>

        <div className="products_price_title_review">
            <Link to="/details-product" onClick={() => handleProdDetails(props.id)} className="product_name_link">
               <h2>{props.name.length > 44 ? props.name.slice(0, 44) + "..." : props.name}</h2> 
            </Link>
            
            <Link to="/details-product" className="products_review" onClick={() => handleProdDetails(props.id)}>
                <FaStar className="products_rewiew_star_icon"/>
                <FaStar className="products_rewiew_star_icon"/>
                <FaStar className="products_rewiew_star_icon"/>
                <FaStar className="products_rewiew_star_icon"/>
                {random <= 4.1 ? null : random >= 4.75 ? <FaStar className="products_rewiew_star_icon"/> : <FaStarHalf  className="products_rewiew_star_icon"/>}
                <p>{random} <span>({buyers})</span></p>  
            </Link>
            <div className="products_payment_split">
                <FaWallet />
                {props.price[0] > 100 
                ?<p>5 payments of {String(props.price[0] / 5).slice(0, 5)}£</p>
                :<p>3 payments of {String(props.price[0] / 3).slice(0, 4)}£</p>}
            </div>
            <div className="products_price_cartBtn">
                <span>
                    <p>{props.price[1]}% OFF</p>
                    <h3>{props.price[0]}£</h3>
                </span>
                <Link to="/cart" onClick={() => handleCartClick(props.id)}>
                    <FaShoppingCart />   
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Product