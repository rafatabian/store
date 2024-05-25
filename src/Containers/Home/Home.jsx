import "./Home.css"
import { lazy } from "react"
// icons
import { MdOutlineArrowForwardIos } from "react-icons/md"
// images 
import home_drinks  from "../../assets/home_img/home_drinks.webp"
import home_drinks_M from "../../assets/home_resized_imgs/home_drinks_M.webp"
import home_drinks_S from "../../assets/home_resized_imgs/home_drinks_S.webp"

import home_cook from "../../assets/home_img/home_cook.webp"
import home_cook_M from "../../assets/home_resized_imgs/home_cook_M.webp"
import home_cook_S from "../../assets/home_resized_imgs/home_cook_S.webp"

import home_shoe from "../../assets/home_img/home_shoe.webp"
import home_shoe_M from "../../assets/home_resized_imgs/home_shoe_M.webp"
import home_shoe_S from "../../assets/home_resized_imgs/home_shoe_S.webp"

import store_corporate from "../../assets/home_img/store_corporate.webp"
import store_newsletter from "../../assets/home_img/store_newsletter.webp"
import store_marketplace from "../../assets/home_img/store_marketplace.webp"

import { useState, useContext} from "react"
import { useEffect } from "react"
import { Link, } from "react-router-dom"
import { LoginContext } from "../../Contexts/ContextLog"

const ProductSection = lazy(() => import("../../Components/ProdSection/ProdSection"))


const Home = ({scrollFromHome}) => {
  const { section, setSection} = useContext(LoginContext)
  const [position, setPosition] = useState(0)
  const [marginScroll, setMarginScroll] = useState(null)
  const [showMore, setShowMore] = useState(false)


// scroll to top
useEffect(() => {
  window.scrollTo({
    top:0
  })
}, [])


// when clicking the navbarII btns make scoll to the sections
  useEffect(() => {
    if(section){
    const targetSection = document.getElementById(section)
    if(targetSection){
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
   }
  }, [section, setSection])


// moving imgs logic 
   const handleArrow = (e) => {
      if(e == "right"){
        setPosition(position === 2 ? 0 : position + 1)
      }else{
        setPosition(position === 0 ? 2 : position - 1) 
      }
   }

const vw = window.innerWidth
   useEffect(() => {
       const imgDiv = document.querySelector(".home_img_conteiner")
       const imgContWidth = imgDiv.offsetWidth
      if(position == 0){
        imgDiv.scrollLeft = 0
      }else if(position == 1){
        if(vw > 1529){
          imgDiv.scrollLeft = 1260
        }else if(vw > 1279){
          imgDiv.scrollLeft = 976
        }else{
          imgDiv.scrollLeft = imgContWidth
        }
      }else{
        imgDiv.scrollLeft = 2 * imgContWidth
      }
   }, [position, vw])

   useEffect(() => {
const trigerImagesToMove = setInterval(() => {
   handleArrow("right")
}, 5000);

return () => clearInterval(trigerImagesToMove)
  }, [position])


// when scrolling down make navbar appear
useEffect(() => {
  const handleScroll = () => {
    const cv = window.innerHeight;
    if (window.scrollY > cv) {
      scrollFromHome(true)
      setMarginScroll(true)
    }else{
      scrollFromHome(false)
      setMarginScroll(false)
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <div className="home_container" style={{marginTop: `${marginScroll ? "56px" : "0"}`}}>
      {/* moving images */}
      <div className="home_img_main_container">
          <span className="home_img_button_left" onClick={()=> handleArrow("left")}><MdOutlineArrowForwardIos /></span>
          <span className="home_img_button_right" onClick={()=> handleArrow("right")}><MdOutlineArrowForwardIos /></span>
        <div className="home_img_conteiner">
        
          {/*high priority imgs*/}
          <img
           srcSet={`${home_drinks_S} 480w,
                  ${home_drinks_M} 760w,
                  ${home_drinks} 1260w`}
          src={home_drinks} 
          className="home_scrolling_mobile_imgs" 
          alt="presentation-imges" 
          // fetchpriority="high"
          />
          <img 
          srcSet={`${home_cook_S} 480w,
                   ${home_cook_M} 760w,
                   ${home_cook} 1260w`}
          src={home_cook} 
          className="home_scrolling_mobile_imgs" 
          alt="presentation-imges" 
          loading="lazy"
          />
          <img
          srcSet={`${home_shoe_S} 480w,
                   ${home_shoe_M} 760w,
                   ${home_shoe} 1260w`}
          src={home_shoe} 
          className="home_scrolling_mobile_imgs" 
          alt="presentation-imges"
          loading="lazy"
          />

        </div>
        <div className="home_img_buttons_container">
        <button onClick={() => setPosition(0)} style={position== 0 ?{backgroundColor: "red"} : null} aria-label="first section category image"></button>
        <button onClick={() => setPosition(1)} style={position== 1 ?{backgroundColor: "red"} : null} aria-label="second section category image"></button>
        <button onClick={() => setPosition(2)} style={position== 2 ?{backgroundColor: "red"} : null} aria-label="third section category image"></button>
        </div>
        <Link className="home_redirect_emag" to="https://www.emag.ro/">source: emag.ro</Link>
      </div>

    <div className="home_sections">
      <section id="electronics">
        <ProductSection props="electronics"/>
      </section>
      <section id="fashion">
        <ProductSection props="clothes"/>
      </section>
      <section id="discover">
        <ProductSection props="discover"/>
      </section>
      {showMore &&
      <>
      <section id="camping">
        <ProductSection props="camping"/>
      </section>
      <section id="essentals">
        <ProductSection props="essentials"/>
      </section>
      <section id="tools">
        <ProductSection props="tools"/>
      </section>
      <section id="home">
        <ProductSection props="home"/>
      </section>
      </>}
      {!showMore 
      ? <button className="home_show_more_btn" onClick={() => setShowMore(true)}>Show More</button>
      : null}
    </div>
      

     <div className="home_bottom_section_conteiner">
      <div className="home_bottom_corporate">
        <img src={store_corporate} alt="future_projects" fetchpriority="low" />
      </div>

      <div className="home_bottom_newsletter">
        <div>
         <img src={store_newsletter} alt="newsletter" fetchpriority="low"/>
        </div>
        <div>
          <h1>Subscribe to the Store newsletter and find out about limited-time discounts!</h1>
          <p>You have to be over 16 to subscribe</p>

          <div className="home_bottom_newsletter_inputs">
            <input type="text"  placeholder="First name" disabled/>
            <input type="text"  placeholder="Email" disabled/>
            <button disabled>Coming soon!</button>
          </div>
        </div>
      </div>

      <div className="home_bottom_marketplace">
        <div>
          <span className="home_bottom_marketplace_title"><h1>Store</h1><h2>Marketplace</h2></span>
          <h3>Sell with us!</h3>
          <ul>
            <li>Instant access to <span>hundreds of thousands</span> of daily <span>customers</span></li>
            <li>Registration for your business is <span>free</span></li>
            <li>You're just <span>a few clicks away</span> from spectacular sales</li>
          </ul>

          <button>Coming soon!</button>
        </div>
        <div className="home_bottom_marketplace_image_container"> 
         <img src={store_marketplace} fetchpriority="low" alt="selling with Store"/>
        </div>
      </div>
     </div>
    </div>
  )
}


export default Home