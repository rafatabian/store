import "./Home.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { lazy } from "react"
// icons
import { MdOutlineArrowForwardIos } from "react-icons/md"
// images 
import home_christmas  from "../../assets/home_img/home_drinks.webp"
import home_christmas_s from "../../assets/home_img/home_drinks_s.webp"
import home_tree from "../../assets/home_img/home_cook.webp"
import home_tree_s from "../../assets/home_img/home_cook_s.webp"
import home_shoe from "../../assets/home_img/home_shoe.webp"
import home_shoe_s from "../../assets/home_img/home_shoe_s.webp"
import store_corporate from "../../assets/home_img/store_corporate.webp"
import store_corporate_s from "../../assets/home_img/store_corporate_s.webp"
import store_newsletter from "../../assets/home_img/store_newsletter.webp"
import store_marketplace from "../../assets/home_img/store_marketplace.webp"

import { useState, useContext } from "react"
import { useEffect } from "react"
import { Link, } from "react-router-dom"
import { LoginContext } from "../../Contexts/ContextLog"

const ProductSection = lazy(() => import("../../Components/ProdSection/ProdSection"))


const Home = ({scrollFromHome}) => {
  const { section, setSection, mobile, lessTenH} = useContext(LoginContext)
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
  switch(section){
    case "fashion":
    const nSection = document.getElementById("fashion")
    if(nSection){
      nSection.scrollIntoView({
        behavior:"smooth"
      })
    }
    break;

    case "electronics":
    const fSection = document.getElementById("electronics")
    if(fSection){
      fSection.scrollIntoView({
        behavior:"smooth" 
      })
    }
    break;

    case "camping":
    const sSection = document.getElementById("camping")
    if(sSection){
      sSection.scrollIntoView({
        behavior:"smooth" 
      })
    }
    break;

    case "home":
    const hSection = document.getElementById("home")
    if(hSection){
      hSection.scrollIntoView({
        behavior:"smooth" 
      })
    }
    break;

    case "essentals":
    const eSection = document.getElementById("essentals")
    if(eSection){
      eSection.scrollIntoView({
        behavior:"smooth" 
      })
    }
    break;

    case "discover":
      const dSection = document.getElementById("discover")
      if(dSection){
        dSection.scrollIntoView({
          behavior:"smooth" 
        })
      }
      break;

      case "tools":
      const tSection = document.getElementById("tools")
      if(tSection){
        tSection.scrollIntoView({
          behavior:"smooth" 
        })
      }
      break;
  }
  

   setSection("")
}, [section])
// moving imgs logic 
   const handleArrow = (e) => {
      if(e == "right"){
        if(position == 0){
          setPosition(1)
        }else if(position == 1){
          setPosition(2)
        }else{
          setPosition(0)
        }
      }else if(e == "left"){
         if(position == 0){
          setPosition(2)
         }else if(position == 1){
          setPosition(0)
         }else{
          setPosition(1)
         }
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
        
           <LazyLoadImage 
           className="home_scrolling_mobile_imgs"
           src={home_christmas}
           placeholderSrc={home_christmas_s}
           effect="blur"
           alt="first_home_img"
           />
           <LazyLoadImage 
          className="home_scrolling_mobile_imgs"
           src={home_tree}
           placeholderSrc={home_tree_s}
           effect="blur"
           alt="second_home_img"
           />
           <LazyLoadImage 
           className="home_scrolling_mobile_imgs"
           src={home_shoe}
           placeholderSrc={home_shoe_s}
           effect="blur"
           alt="third_home_img"
           />
          
        </div>
        <div className="home_img_buttons_container">
        <button onClick={() => setPosition(0)} style={position== 0 ?{backgroundColor: "red"} : null}></button>
        <button onClick={() => setPosition(1)} style={position== 1 ?{backgroundColor: "red"} : null}></button>
        <button onClick={() => setPosition(2)} style={position== 2 ?{backgroundColor: "red"} : null}></button>
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
      <button onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button>
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
    </div>
      

     <div className="home_bottom_section_conteiner">
      <div className="home_bottom_corporate">
        <LazyLoadImage
        src={store_corporate}
        placeholderSrc={store_corporate_s}
        effect="blur"
        alt="corporate_business"
        />
      </div>

      <div className="home_bottom_newsletter">
        <div>
         <img src={store_newsletter} alt="newsletter"/>
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
         <img src={store_marketplace} />
        </div>
      </div>
     </div>
    </div>
  )
}


export default Home