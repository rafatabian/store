import "./Footer.css"
import { Link } from "react-router-dom"
// icons
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart} from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect, useState } from "react"

const Footer = () => { 
     const [menu, setMenu] = useState(null)
     const [vw, setVw] = useState(null)

// clicking the menus triger drop down
const handleDropdown = (e) => {
  if(menu === e){
    setMenu(null)
  }else{
    setMenu(e)
  }
}

// checking and setting window width when changes
useEffect(() => {
  const handleResize = () => {
    setVw(window.innerWidth > 750)
  }
  handleResize()
  window.addEventListener("resize", handleResize)

  return () => {
  window.removeEventListener("resize", handleResize)
  }
}, [])


  return (
    <div className="footer_main_container">
       <div className="footer_links_conteiner">
        <div className="footer_links_help">
          <div onClick={() => handleDropdown("help")} className="footer_links_header_mobile">
             <h1>Help </h1>
             <IoIosArrowDown />
          </div>
         
         {(vw || menu == "help" ) &&
          <div className="footer_animated_container">
          <Link to="/help4">Get help</Link>
          <Link to="/help2">Return product</Link>
          <Link to="/help4">Contact</Link>
          <Link to="/help2">Delivery Options</Link>
          </div>
          }
        </div>
        <div className="footer_links_store">
          <div onClick={() => handleDropdown("store")} className="footer_links_header_mobile">
            <h1>Store</h1>
            <IoIosArrowDown />
          </div>
          
         {(vw || menu == "store") && 
          <div className="footer_animated_container">
          <Link to="/help2">About Store</Link>
          <Link to="/help2">Terms and conditions</Link>
          <Link to="/help3">Cookies</Link>
          <Link to="/help3">Personal data</Link>
         </div>
          }
        </div>
        <div className="footer_links_account">
          <div onClick={() => handleDropdown("account")} className="footer_links_header_mobile">
            <h1>Account</h1>
            <IoIosArrowDown />
          </div>
          
         {(vw || menu == "account") && 
          <div className="footer_animated_container"> 
          <Link to="/help1">Your account</Link>
          <Link to="/help3">Your orders</Link>
          <Link to="/help1">Edit account info</Link>
          <Link to="/help1">Login data</Link>
          </div>
          }
        </div>
       </div>

       <div className="footer_bottom_container">
        <span><p>Thank you&nbsp;<Link to="https://www.emag.ro/">emag.ro<FaHeart /></Link></p><p>for the inspiration!</p></span>
        
        <div className="footer_copyright">
          <p>&copy; 2024 Fabian Rata.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="footer_socials_container">
          <button onClick={() => alert("Coming soon!")}><FaInstagram /></button>
          <button onClick={() => alert("Coming soon!")}><FaFacebookF /></button>
          <button onClick={() => alert("Coming soon!")}><FaTwitter /></button>
          <button onClick={() => alert("Coming soon!")}><FaYoutube /></button>
        </div>
       </div>

       <div className="footer_bottom_mobile">
        <div className="footer_copyright_mobile">
          <p>&copy; 2024 Fabian Rata.</p>
          <p>All Rights Reserved.</p>
        </div>
       </div>
    </div>
  )
}

export default Footer