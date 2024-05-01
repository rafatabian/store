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

// const ProductSection = lazy(() => import("../../Components/ProdSection/ProdSection"))

// normal import
import ProductSection from "../../Components/ProdSection/ProdSection"


const Home = ({scrollFromHome}) => {
  const { section, setSection, mobile, setMobile, lessTenH, setLessTenH} = useContext(LoginContext)
  const [position, setPosition] = useState(0)
  const [marginScroll, setMarginScroll] = useState(null)


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

   useEffect(() => {
       const vw = window.innerWidth
        const smallVW = vw - 84
       const imgDiv = document.querySelector(".home_img_conteiner")
      if(position == 0){
        imgDiv.scrollLeft = 0
      }else if(position == 1){
        if(vw > 1529){
          imgDiv.scrollLeft = 1260
        }else if(vw > 1279){
          imgDiv.scrollLeft = 976
        }else{
          imgDiv.scrollLeft = lessTenH ? smallVW : mobile ? vw : vw - 304
        }
      }else{
        imgDiv.scrollLeft = lessTenH ? 2 * smallVW : mobile ? 2 * vw : 2 * vw - 304
      }
   }, [position])

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
      <div className="home_img_main_container" style={{height: (lessTenH || mobile) ? "100%" : null, padding: lessTenH ? "0 42px" : mobile ? 0 : null, marginTop: lessTenH ? "10px" : null}}>
          <span className="home_img_button_left" onClick={()=> handleArrow("left")} style={{left: mobile ? 0 : lessTenH ? 42 : null}}><MdOutlineArrowForwardIos /></span>
          <span className="home_img_button_right" onClick={()=> handleArrow("right")} style={{right: mobile ? 0 : null}}><MdOutlineArrowForwardIos /></span>
        <div className="home_img_conteiner">
        
           <LazyLoadImage 
           className={lessTenH ? "images_make_responsive" : mobile ? "home_scrolling_mobile_imgs" : ""}
           src={home_christmas}
           placeholderSrc={home_christmas_s}
           effect="blur"
           alt="first_home_img"
           />
           <LazyLoadImage 
          className={lessTenH ? "images_make_responsive" : mobile ? "home_scrolling_mobile_imgs" : ""}
           src={home_tree}
           placeholderSrc={home_tree_s}
           effect="blur"
           alt="second_home_img"
           />
           <LazyLoadImage 
           className={lessTenH ? "images_make_responsive" : mobile ? "home_scrolling_mobile_imgs" : ""}
           src={home_shoe}
           placeholderSrc={home_shoe_s}
           effect="blur"
           alt="third_home_img"
           />
          
        </div>
        <div className="home_img_buttons_container" style={{right: mobile ? "calc(50vw - 30px)" : null, bottom: mobile ? 10 : null}}>
        <button onClick={() => setPosition(0)} style={position== 0 ?{backgroundColor: "red"} : null}></button>
        <button onClick={() => setPosition(1)} style={position== 1 ?{backgroundColor: "red"} : null}></button>
        <button onClick={() => setPosition(2)} style={position== 2 ?{backgroundColor: "red"} : null}></button>
        </div>
         <Link to="https://www.emag.ro/" style={{right: mobile ? 10 : null}}>source: emag.ro</Link>
      </div>

    <div className="home_sections">
      <section id="electronics" style={{width: "100%"}}>
        <ProductSection props="electronics"/>
      </section>
      <section id="fashion">
        <ProductSection props="clothes"/>
      </section>
      <section id="discover">
        <ProductSection props="discover"/>
      </section>
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
    </div>
      

     <div className="home_bottom_section_conteiner">
      <div className={`home_bottom_corporate ${mobile ? "home_bottom_corporate_mobile" : null}`} style={{marginBottom: mobile ? 20 : null }}>
        <LazyLoadImage
        src={store_corporate}
        placeholderSrc={store_corporate_s}
        effect="blur"
        alt="corporate_business"
        />
      </div>

      <div className={`home_bottom_newsletter ${mobile ? "home_newsletters_mobile" : null}` }>
        <div>
         {!lessTenH && !mobile && <img src={store_newsletter} alt="newsletter"/>}
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

      <div className={`home_bottom_marketplace ${mobile ? "home_marketplace_mobile" : null}`}>
        <div>
          <span className="home_bottom_marketplace_title"><h1>Store</h1><h2>Marketplace</h2></span>
          <h3>Sell with us!</h3>
          {!lessTenH && !mobile &&
          <ul>
            <li>Instant access to <span>hundreds of thousands</span> of daily <span>customers</span></li>
            <li>Registration for your business is <span>free</span></li>
            <li>You're just <span>a few clicks away</span> from spectacular sales</li>
          </ul>
          }
          <button>Coming soon!</button>
        </div>
        <div className="home_bottom_marketplace_image_container"> 
         {!lessTenH && ! mobile && <img src={store_marketplace} />}
        </div>
      </div>
     </div>

    </div>
  )
}


export default Home