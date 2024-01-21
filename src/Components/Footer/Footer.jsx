import "./Footer.css"
import { Link, useLocation } from "react-router-dom"
import { LoginContext } from  "../../Contexts/ContextLog"
// icons
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart} from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { useContext, useState } from "react"

const Footer = () => { 
     const { mobile } = useContext(LoginContext) 
     const [menu, setMenu] = useState(null)

// clicking the menus triger drop down
const handleDropdown = (e) => {
  if(menu === e){
    setMenu(null)
  }else{
    setMenu(e)
  }
}


  return (
    <div className={`footer_main_container ${mobile ? "footer_container_mobile" : null}`}>
       <div className={`footer_links_conteiner ${mobile ? "footer_links_mobile" : null}`}>
        <div className="footer_links_help">
          <div onClick={() => handleDropdown("help")}  className={mobile ? "footer_links_header_mobile" : null}>
             <h1>Help </h1>
             {mobile && <IoIosArrowDown />}
          </div>
         
         {(!mobile || menu == "help") &&
          <div className={`footer_animated_container ${mobile ? "footer_add_animation" : null}`}>
          <Link to="/help4">Get help</Link>
          <Link to="/help2">Return product</Link>
          <Link to="/help4">Contact</Link>
          <Link to="/help2">Delivery Options</Link>
          </div>
          }
        </div>
        <div className="footer_links_store">
          <div onClick={() => handleDropdown("store")} className={mobile ? "footer_links_header_mobile" : null}>
            <h1>Store</h1>
            {mobile && <IoIosArrowDown />}
          </div>
          
         {(!mobile || menu == "store") && 
          <div className={`footer_animated_container ${mobile ? "footer_add_animation" : null}`}>
          <Link to="/help2">About Store</Link>
          <Link to="/help2">Terms and conditions</Link>
          <Link to="/help3">Cookies</Link>
          <Link to="/help3">Personal data</Link>
         </div>
          }
        </div>
        <div className="footer_links_account">
          <div onClick={() => handleDropdown("account")} className={mobile ? "footer_links_header_mobile" : null}>
            <h1>Account</h1>
            {mobile && <IoIosArrowDown />}
          </div>
          
         {(!mobile || menu == "account") && 
          <div className={`footer_animated_container ${mobile ? "footer_add_animation" : null}`}> 
          <Link to="/help1">Your account</Link>
          <Link to="/help3">Your orders</Link>
          <Link to="/help1">Edit account info</Link>
          <Link to="/help1">Login data</Link>
          </div>
          }
        </div>
       </div>

       <div className="footer_bottom_container">
        {!mobile && <span><p>Thank you&nbsp;<Link to="https://www.emag.ro/">emag.ro<FaHeart /></Link></p><p>for the inspiration!</p></span>}
        
        {!mobile && <div className="footer_copyright">
          <p>&copy; 2024 Fabian Rata.</p>
          <p>All Rights Reserved.</p>
        </div>}
        <div className="footer_socials_container">
          <button onClick={() => alert("Coming soon!")}><FaInstagram /></button>
          <button onClick={() => alert("Coming soon!")}><FaFacebookF /></button>
          <button onClick={() => alert("Coming soon!")}><FaTwitter /></button>
          <button onClick={() => alert("Coming soon!")}><FaYoutube /></button>
        </div>
       </div>
       {mobile && 
       <div className="footer_bottom_mobile">
        <div className="footer_copyright">
          <p>&copy; 2024 Fabian Rata.</p>
          <p>All Rights Reserved.</p>
        </div>
       </div>}
    </div>
  )
}

export default Footer