import "./CartFooter.css"
import { FaBox } from "react-icons/fa6"
import  { HiChatAlt2 } from "react-icons/hi"
import { VscHistory } from "react-icons/vsc"
import  { FaLock } from "react-icons/fa"
import { Link } from "react-router-dom"


const CartFooter = ({mobile}) => {

  return (
    <div className="cartFooter_container">
        <div className="cartFooter_title" >
            <h1>With Shore you have:</h1>
        </div>

        <div className="cartFooter_main">
            <div className="cartFooter_main_first">
                <div className="cartFooter_main_first_icon_container">
                    <FaBox />
                </div>
                <div className="cartFooter_main_first_text_container">
                    <p>Waranty for secure delivery</p>
                    <p>Open the package when delivered</p>
                </div>
            </div>

            <div className="cartFooter_main_second">
                <div className="cartFooter_main_second_icon_container">
                    <VscHistory />
                </div>
                <div className="cartFooter_main_second_text_container">
                    <p>30 days time to return a product</p>
                    <p>For all our products</p>
                </div>
            </div>

            <div className="cartFooter_main_third">
                <div className="cartFooter_main_third_icon_container">
                    <HiChatAlt2 />
                </div>
                <div className="cartFooter_main_third_text_container">
                    <p>Online Support</p>
                    <p>Our operators are ready to answer you</p>
                </div>
            </div>

            <div className="cartFooter_main_forth">
                <div className="cartFooter_main_forth_icon_container">
                    <FaLock />
                </div>
                <div className="cartFooter_main_forth_text_container">
                    <p>Secure payments and private navigation</p>
                    <p>Our sistem provide you 100% privacy</p>
                </div>
            </div>
        </div>
  
       <div className="cartFooter_links_container">
        <h1>Your can discover more about:</h1>
        <div className="cartFooter_links">
          <Link to="/help3">Payment Method</Link>
          <Link to="/help3">Delivery Method</Link>
          <Link to="/help3">Cookies Policy</Link>
          <Link to="/help3">Mobile Version</Link>
        </div>
       </div>
    </div>
  )
}

export default CartFooter