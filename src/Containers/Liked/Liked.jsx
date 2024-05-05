import "./Liked.css"
import Fsquare from "../../Components/YourComponents/YourFsquare/YourFsquare"
import Ssquare from "../../Components/YourComponents/YourSsquare/YourSsquare"
import GeniusBtn from "../../Components/YourComponents/YourGeniusBtn/YourGeniusBtn"
import liked_folder_empty from "../../assets/liked_folder_empty.webp"
import { useContext, useEffect } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
import { Link, useNavigate } from "react-router-dom"
import { FaStar, FaHeart} from "react-icons/fa"
import { products } from "../../assets/products"
import { lazy } from "react"

const Product = lazy(() => import("../../Components/Product/Product"))


const Liked = () => {
   const { liked, redirectPage, mobile } = useContext(LoginContext)
  //  state to toggle the "liked" and favirite pages index

  const navigate = useNavigate()
  
// go home if page refreshes 
useEffect(() => {
  if(!redirectPage){
    navigate("/")
  }
})

//  scroll to top  
useEffect(() => {
  window.scrollTo({
   top:0
  })
 }, [])


// changes color when interacting with the top page sections
  const handleSectionClick = (e) => {
    const firstBlurSpan = document.querySelector(".liked_content_blue_bar_first")
    const secondBlueSpan = document.querySelector(".liked_content_blue_bar_second")
    const firstTitle = document.getElementById("liked_first_title")
    const secondTitle = document.getElementById("liked_second_title")
    
    if(e === "liked"){
      firstBlurSpan.style.backgroundColor = "#005EB8"
      secondBlueSpan.style.backgroundColor = "transparent"
      firstTitle.style.color = "#005EB8"
      secondTitle.style.color = "black"
    }else{
      secondBlueSpan.style.backgroundColor = "#005EB8"
      firstBlurSpan.style.backgroundColor = "transparent"
      secondTitle.style.color = "#005EB8"
      firstTitle.style.color = "black"
      }
  }



  return (
    <div className="liked_container">
      {!mobile &&
      <div className="liked_account_container">
       <Fsquare />
       <Ssquare />
       <GeniusBtn />
      </div>
      }

      <div className="liked_content_conteiner">
        <div className="liked_content_title">
          <h1>Liked</h1>
        </div>

        <div className="liked_content_menu">
          <div className="liked_content_first_menu" onClick={() => handleSectionClick("liked")}>
            <span className="liked_content_blue_bar_first"></span>
            <h1 id="liked_first_title">All the products</h1>
            <p>{liked.length} products</p>
          </div>
          <div className="liked_content_second_menu" onClick={() => handleSectionClick("favorites")}>
            <span className="liked_content_blue_bar_second"></span>
            <h1 id="liked_second_title" >Favourites</h1>
            <span><p>0 products </p><FaStar /></span>
            <p>Private list</p>
          </div>
        </div>
       
{/* toggle the index to "show_liked_products" to change pages */}
{/* toggle here */}
        <div className="show_liked_products">
          <div className="show_liked_title">
            <h1>All the Products</h1>
            <p>{liked.length} products</p>
          </div>
          {liked.length > 0
          ? products.map((item) => liked.includes(item.id) && <Product props={item} key={item.id + item.price[0]}/>)
          
          : <><div className="show_liked_img_container">
            <img src={liked_folder_empty} alt="oranges"/>
            </div>
            
            <div className="show_liked_title_container">
              <h1>Hmm, no products added.</h1>
              <h1>Here are some recomandations that can help.</h1>
            </div>

            <div className="show_liked_p_container">
              <p>Add products to the favorites to sort them.</p>
              <p>You can share your products anytime with your friends, and can save them to the Favorites to buy them later.<FaHeart /></p>
            </div>

            <div className="show_liked_btn_container">
              <Link to="/" >See products</Link>
            </div>
            </>
        }
{/* here create another chind that is togleled with the one on the top */}
{/* toggle here */}
        </div>
      </div>
    </div>
  )
}

export default Liked