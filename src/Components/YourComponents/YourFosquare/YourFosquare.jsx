import "./YourFosquare.css"
import genius_logo from "../../../assets/logo_genius.png"
import { FaTruckFast, FaUnlock } from "react-icons/fa6"
import { MdLocalOffer } from "react-icons/md"
import { Link } from "react-router-dom"

const YourFosquare = () => {
  return (
    <div className="yourfosquare_container">
        <div className="yourfosquare_img_container">
            <img src={genius_logo} alt="genius"/>
        </div>

        <div className="yourfosquare_title_container">
            <h1>Your subscription to free shipping and exclusive offers</h1>
        </div>

        <div className="yourfosquare_text_and_icons_container">
            <p>Try Genius and take advantage of all the benefits:</p>
            <div className="yourfosquare_icons">
                <div>
                    <span><FaTruckFast /></span>
                    <p>Free delivery</p>
                </div>

                <div>
                    <span><FaUnlock /></span>
                    <p>Premium access</p>
                </div>

                <div>
                    <span><MdLocalOffer /></span>
                    <p>Exclusive discounts</p>
                </div>
            </div>
        </div>

        <Link to="/genius" className="yourfosquare_button_container">
           <p>Try Genius</p>
        </Link>
    </div>
  )
}

export default YourFosquare