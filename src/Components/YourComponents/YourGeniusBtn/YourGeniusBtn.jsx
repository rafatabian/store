import "./YourGeniusBtn.css"
import { Link } from 'react-router-dom'
import genius_btn from "../../../assets/logo_genius_btn.png"
import genius_long_logo from "../../../assets/logo_genius.png"
import { MdOutlineArrowForwardIos } from "react-icons/md"

const YourGeniusBtn = () => {
  return (
    <div className="yourGenuis_btn_container">
        <Link to="/genius">
            <div className="yourGeniusBtn_first_container">
                <img src={genius_btn} alt="genius"/>
                <p>Genius</p>
            </div>
            <div className="yourGeniusBtn_second_container">
                <img src={genius_long_logo} alt="genius"/>
                <MdOutlineArrowForwardIos />
            </div>
        </Link>
    </div>
  )
}

export default YourGeniusBtn