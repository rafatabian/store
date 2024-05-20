import "./Nav_II.css"
import { Link, useLocation } from "react-router-dom"
import { BiSupport } from "react-icons/bi"
import { IoIosMenu } from "react-icons/io"
import { useEffect, useState, useContext } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
// icons
import { IoCameraOutline, IoShirtOutline, IoHomeOutline, IoMusicalNoteOutline, IoBagCheckOutline, IoSparklesOutline, IoHammerOutline } from "react-icons/io5"
import { IoIosFootball} from "react-icons/io"
import { FaQuestion } from "react-icons/fa6"
import { BsTree } from "react-icons/bs"
import { LuShowerHead } from "react-icons/lu"


const Nav_II = () => {
    const { name, setRedirectPage, setSection} = useContext(LoginContext)
    const [showMenu, setShowMenu] = useState(false)

    const location = useLocation()


// make menu disappear when we are not in homepage
    const locationName = location.pathname === "/"
    
    useEffect(() => {
        setShowMenu(locationName)
    }, [locationName])


// hovering the products menu triggers a dropdown
    const handleHoverProducts = (e) => {
       if(!locationName){
        setShowMenu(e)
       }
    }


    return (
        
    <div className="nav_II_container">
        <div className="navII_width">
        <div className="nav_II_buttons_container">
            <div className={`nav_II_products_btn ${showMenu ? "nav_II_products_btn_toggle" : null}`} onMouseOver={() => handleHoverProducts(true)} onMouseLeave={()=> handleHoverProducts(false)}>
            <IoIosMenu />
            <p>Products</p>
            {/* products menu */}
            {showMenu && 
                <div className="nav_II_menu">
                    <Link to="/products-categories?data=cameras-tech"><IoCameraOutline /> Cameras & Tech</Link>
                    <Link to="/products-categories?data=fashion-decorations"><IoShirtOutline /> Fashion & Decorations</Link>
                    <Link to="/products-categories?data=sports-camping" onClick={()=> setSection("camping")}><IoIosFootball /> Sports & Camping</Link>
                    <Link to="/products-categories?data=home-bedroom" onClick={()=> setSection("home")}><IoHomeOutline /> Home & Bedroom</Link>
                    <Link to="/products-categories?data=music-entertainment" onClick={()=> setSection("electronics")}><IoMusicalNoteOutline /> Music & Entertainment</Link>
                    <Link to="/products-categories?data=essential" onClick={()=> setSection("essentals")}><IoBagCheckOutline /> Essentials</Link>
                    <Link to="/products-categories?data=discover-products" onClick={()=> setSection("discover")}><FaQuestion /> Discover Products</Link>
                    <Link to="/products-categories?data=teeth-care"><IoSparklesOutline /> Teeth Care</Link>
                    <Link to="/products-categories?data=tools"><IoHammerOutline /> Tools</Link>
                    <Link to="/products-categories?data=christmas" onClick={()=> setSection("home")}><BsTree /> Christmas</Link>
                    <Link to="/products-categories?data=relax-selfcare" onClick={()=> setSection("fashion")}><LuShowerHead /> Relax & Selfcare</Link> 
                </div>
            }
            </div>
            <Link to="" onClick={()=> setSection("electronics")} className="nav_II_links_hover">Genius Deal</Link>
            <Link to="" onClick={()=> setSection("fashion")} className="nav_II_links_hover">Today offer</Link>    
            <Link to="" onClick={()=> setSection("discover")} className="nav_II_links_hover">Store offers</Link>
            <Link to="" onClick={()=> setSection("essentals")} className="nav_II_links_hover">Bestsellers</Link>
            <Link to={name ? "/genius" : "/login"} onClick={() => setRedirectPage("genius")} className="nav_II_links_hover">Genius</Link>  
        </div>
    
        <Link to="/help" className="nav_II_help_btn">
          <BiSupport />
          Info & Support
        </Link>
    </div>
  </div>
  )
}

export default Nav_II