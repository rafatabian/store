import "./NavBar.css"
import dollarImg from "../../assets/dollar-inage.webp"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContext } from "../../Contexts/ContextLog"
import ExistingAcc from "../../Components/ExistingAcc/ExistingAcc"
import Login from "../../Components/Login/Login"
import { useLocation } from "react-router-dom"
// icons
import { IoClose, IoCameraOutline, IoShirtOutline, IoHomeOutline, IoMusicalNoteOutline, IoBagCheckOutline, IoSparklesOutline, IoHammerOutline } from "react-icons/io5"
import { IoIosFootball, IoIosArrowForward } from "react-icons/io"
import { FaQuestion } from "react-icons/fa6"
import { BsTree } from "react-icons/bs"
import { LuShowerHead, LuMenu } from "react-icons/lu"
import { BiSearch } from "react-icons/bi"
import { BsFillPersonFill, BsPerson, BsFillFastForwardFill } from "react-icons/bs"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri"



const NavBar = ({ data }) => {
  const { name, redirectPage, setRedirectPage, premGenius, liked, cartProd, setSection } = useContext(LoginContext)

  const [pageBlur, setPageBlur] = useState(null)
  const [hovered, setHovered] = useState("")
  const [accountNoti, setAccountNoti] = useState(true)
  const [likedNoti, setLikedNoti] = useState(true)
  const [cartNoti, setCartNoti] = useState(true)
  const [searchString, setSearchString] = useState("")
  // show left menu with sections on mobile version
  const [showMenuu, setShowMenuu] = useState(false)
  // adds styles to the input and search button in mobile version
  const [stylesSearchBtn, setStylesSerachBtn] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()


  // make searchbar empty when going home
  useEffect(() => {
    if (location.pathname === "/") {
      setSearchString("")
      const seachBar = document.getElementById("searchBar")
      if (seachBar) {
        seachBar.value = ""
      }
    }
  }, [location.pathname])

  // check where we are and make notification dissapear
  useEffect(() => {
    switch (location.pathname) {
      case "/liked":
        setLikedNoti(false)
        break;
      case "/your-account":
        setAccountNoti(false)
        break;
      case "/cart":
        setCartNoti(false)
        break;
      default:
        break;
    }
  }, [location.pathname])


  const handleButtonsClick = (e) => {
    setRedirectPage(e)
    if (e === "account") {
      setAccountNoti(false)
      handleRedirect()
    } else if (e === "liked") {
      setLikedNoti(false)
    } else if (e === "cart") {
      setCartNoti(false)
    } else {
      return
    }
  }

  //when genius blur is active the menu don't appear
  const handleMobileMenu = () => {
    if (!premGenius) {
      setShowMenuu(true)
    }
    if (premGenius && location.pathname !== "/genius") {
      setShowMenuu(true)
    }
  }

  // listen for page scroll to make the blur disappear  
  useEffect(() => {
    const handleScroll = () => setPageBlur(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  // redirect to login pannel 
  const handleRedirect = () => {
    if (redirectPage === "account" && !name) {
      navigate("/login")
    }
  }

  // handle input search when click enter
  const handleKeyDown = (e) => {
    if (e === "Enter") {
      navigate("/search?data=" + searchString)
      setPageBlur(false)
      setStylesSerachBtn(false)
    }
  }
  const searchBtn = () => {
    setStylesSerachBtn(false)
    navigate("/search?data=" + searchString)
    setPageBlur(false)
  }

  // redirecting to products when choosing a popular search button in  mobile version
  const handlePopular = (e) => {
    setStylesSerachBtn(false)
    navigate("/search?data=" + e)
  }

  // check page width and make menu dissapear
  // useEffect(() => {
  //   const width = window.innerWidth
  //   if(width < 750){
  //     setMobile(true)
  //   }else if(width < 950){
  //       setLessTenH(true)
  //   }else if(width > 949){
  //     setLessTenH(false)
  //     setMobile(false) //
  //   }
  //   }, [])

  // make scroll imposible when menu active
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = showMenuu || stylesSearchBtn ? "hidden" : "visible"
  }, [showMenuu, stylesSearchBtn])

  // when clicking the searchbar
  const handleInput = () => {
    setPageBlur(true)
    //  add class for the search button in mobile verison
    if (window.innerWidth < 750) {
      setStylesSerachBtn(true)
    }
  }

  return (
    <div className={`navbar_container ${location.pathname == "/genius" || location.pathname == "/login" || location.pathname == "/cart" ? "navbar_container_color_line" : data && "navbar_container_color_line"} ${data && "nav_make_appear"} `}>

      <div className="navbar_logo_container">
        {!showMenuu ? <LuMenu className="navbar_showing_menu_icon" onClick={() => handleMobileMenu()} /> : showMenuu && <IoClose className="navbar_close_icon" onClick={() => setShowMenuu(false)} />}
        <Link to="/" onClick={() => setShowMenuu(false)} aria-label="home">
          <h1>ST</h1>
          <img src={dollarImg} alt="store logo" fetchpriority="high" />
          <h1>RE</h1>
        </Link>
      </div>
      {/* mobile version menu */}
      {showMenuu &&
        <div className="navbar_mobile_blur_menu" onClick={() => setShowMenuu(false)}>
          <div className="navbar_mobile_links_menu">
            {!name ? <div className="navbar_mobile_login">
              <div>
                <p>Log into your Store account for full control over exclusive offers!</p>
                <Link to="/login" onClick={() => setRedirectPage("account")} aria-label="create an account">Create an account</Link>
              </div>
            </div>
              : name &&
              <Link to="your-account" aria-label="your account"><div><BsPerson /><p>My account</p></div><IoIosArrowForward /></Link>
            }
            {!name && <h1>Categories</h1>}
            <Link to="/products-categories?data=cameras-tech" aria-label="tech"><div><IoCameraOutline /> <p>Cameras & Tech</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=fashion-decorations" aria-label="fashion"><div><IoShirtOutline /> <p>Fashion & Decorations</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=sports-camping" onClick={() => setSection("camping")} aria-label="sports"><div><IoIosFootball /> <p>Sports & Camping</p> </div><IoIosArrowForward /></Link>
            <Link to="/products-categories?data=home-bedroom" onClick={() => setSection("home")} aria-label="bedroom"><div><IoHomeOutline /> <p>Home & Bedroom</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=music-entertainment" onClick={() => setSection("electronics")} aria-label="entertainment"><div><IoMusicalNoteOutline /> <p>Music & Entertainment</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=essential" onClick={() => setSection("essentals")} aria-label="essentials"><div><IoBagCheckOutline /> <p>Essentials</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=discover-products" onClick={() => setSection("discover")} aria-label="discover"><div><FaQuestion /> <p>Discover Products</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=teeth-care" aria-label="oral hygiene"><div><IoSparklesOutline /> <p>Teeth Care</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=tools" aria-label="tools"><div><IoHammerOutline /> <p>Tools</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=christmas" onClick={() => setSection("home")} aria-label="christmas"><div><BsTree /> <p>Christmas</p></div> <IoIosArrowForward /></Link>
            <Link to="/products-categories?data=relax-selfcare" onClick={() => setSection("fashion")} aria-label="selfcare"><div><LuShowerHead /> <p>Relax & Selfcare</p></div> <IoIosArrowForward /></Link>
          </div>
        </div>
      }

      <div className="navbar_search_container">
        <input type="text" placeholder="Search Products" id="searchBar" onClick={() => handleInput()} onKeyDown={(e) => handleKeyDown(e.key)} onChange={(e) => setSearchString(e.target.value)} className={stylesSearchBtn ? "input_to_the_top" : ""} />
        <button onClick={() => searchBtn()} className={`navbar_button_for_searching_prod ${stylesSearchBtn && "button_to_the_top"}`} aria-label="Search">
          <BiSearch />
        </button>
        {
          pageBlur && <span className="navbar_page_blur" onClick={() => setPageBlur(false)} />
        }
        {/* mobile search menu */}
        {stylesSearchBtn &&
          <div className="navbar_mobile_search_menu">
            <h1>Popular searches on Store</h1>
            <p onClick={() => handlePopular("sleeve")}>sleeve</p>
            <p onClick={() => handlePopular("camera")}>camera</p>
            <p onClick={() => handlePopular("tool")}>tool</p>
            <p onClick={() => handlePopular("waterproof")}>waterproof</p>
          </div>
        }
      </div>

      <div className="navbar_menu_icons">
        {/* account icon */}

        <div className="navbar_account" onMouseOver={() => setHovered("account")} onMouseLeave={() => setHovered("")} onClick={() => handleButtonsClick("account")}>
          <Link to={!name ? "/login" : "/your-account"} aria-label="account">
            <div className="navbar_account_icon_noti">
              {hovered === "account" ? <BsFillPersonFill /> : <BsPerson />}
              {accountNoti && <span id="account-noti">!</span>}
            </div>
            <h2 className="navbar_account_name" >{name ? "Account" : "Sign-up"}</h2>
          </Link>

          {hovered === "account" && !name
            ? <Login />
            : hovered === "account" && name
              ? <ExistingAcc />
              : ""}

          {/* change the h2 to react based of accound creation in context*/}
        </div>


        {/* liked icon */}
        <div className="navbar_liked" onMouseOver={() => setHovered("liked")} onMouseLeave={() => setHovered("")} onClick={() => handleButtonsClick("liked")}>

          <Link to={name ? "/liked" : "/login"} aria-label="liked product">
            <div className="navbar_liked_icon_noti">
              {hovered === "liked" ? <FaHeart /> : <FaRegHeart />}
              {!likedNoti && liked.length !== 0 && <span>{liked.length}</span>}
              {likedNoti && <span className="navbar_popup_link_notification">!</span>}
            </div>
            <h2 className="navbar_liked_name">Liked</h2>

          </Link>
          {hovered === "liked" &&
            <div className="navbar_popup_liked">
              <h1>Here are your favorite products</h1>
              {/* add more options */}
            </div>}
        </div>

        {/* cart icon */}
        <div className="navbar_cart" onMouseOver={() => setHovered("cart")} onMouseLeave={() => setHovered("")} onClick={() => handleButtonsClick("cart")}>
          <Link to="/cart" aria-label="cart">
            <div className="navbar_cart_icon_noti">
              {hovered === "cart" ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
              {cartProd && cartProd.length !== 0 && <span className="nav_cart_icon">{cartProd.length}</span>}
              {cartNoti && <span className="navbar_popup_link_notification">!</span>}
            </div>
            <h2 className="navbar_cart_name">Cart</h2>
          </Link>
          {hovered === "cart" &&
            <div className="navbar_popup_cart">
              <h1>Add products to the cart</h1>
              {/* add more options */}
              <div className="navbar_cart_button">
                <Link to="/cart" aria-label="cart">
                  <BsFillFastForwardFill />
                  <p>See cart details</p>
                </Link>
              </div>
              {/* options added */}
            </div>}
        </div>
      </div>
    </div>
  )
}

export default NavBar