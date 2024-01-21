import "./YourSsquare.css"
import genius from "../../../assets/genius_phone.png"
import { Link } from "react-router-dom"

const YourSsquare = () => {
  return (
    <div  className="yourAccount_genius_square">
        <h1>Try Genius for Free</h1>
        <p>Genius offres you premium feautures </p>
        <p>across the app and free devivery </p>
        <p>to all your products</p>
        <Link to="/genius">
          <p>Try Genius</p>
        </Link>
        <img src={genius} alt="genius"/>
      </div>
  )
}

export default YourSsquare