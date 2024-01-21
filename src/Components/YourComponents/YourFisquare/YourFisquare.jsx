import "./YourFisquare.css"
import { LoginContext } from "../../../Contexts/ContextLog"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FaBox } from "react-icons/fa6"
import { FaHeart, FaStar } from "react-icons/fa"

const YourFisquare = () => {
    const { liked, reviewNr } = useContext(LoginContext)


  return (
    <div className="yourFisquare_container">
        <div className="yourFisquare_title_container">
            <h1>Your Activity</h1>
        </div>

        <div className="yourFisquare_activity_container">
          <div className="yourFisquare_first_activity">
            <div><FaBox /></div>
            <div>
                <p>0 orders</p>
                <Link to="/orders">See orders history</Link>
            </div>
          </div>

          <div className="yourFisquare_second_activity">
            <div>{<FaHeart />}</div>
            <div>
                <p>{liked.length} liked products</p>
                <Link to="/liked" >See Liked Products</Link>
            </div>
          </div>

          <div className="yourFisquare_third_activity">
            <div><FaStar /></div>
            <div>
                <p>{reviewNr.length} reviews</p>
                <Link to="/see-reviews">See your Reviews</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default YourFisquare