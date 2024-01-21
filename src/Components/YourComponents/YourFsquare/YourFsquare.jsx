import "./YourFsquare.css"
import { useContext } from "react"
import { LoginContext } from "../../../Contexts/ContextLog"
import { FaNewspaper } from "react-icons/fa" 
import { BiSolidDiscount } from "react-icons/bi"
import { AiFillQuestionCircle } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
import { MdModeEditOutline } from "react-icons/md"
import { Link, useLocation, useNavigate} from "react-router-dom"

const YourFsquare = () => {
    const {name, setShowSettings, localImg} = useContext(LoginContext)

    const date = new Date().toLocaleDateString()
    const location = useLocation()
    const navigate = useNavigate()

// if editing from /liked root then redirect to account root
const handleClick = () => {
     if(location.pathname === "/liked" || location.pathname === "/see-reviews"){
      navigate("/your-account")
      setShowSettings(true)
     }else{
      setShowSettings(true)
     }
}

  return (

    <div className="yourAccount_info_square">

         <div className="yourAccount_firts_square_background">  
         <div className="yourAccount_photo">{localImg ? <img src={localImg}/> : <p>{name.charAt(0)}</p>}</div>
          <div className="yourAccount_name_and_date">
            <h1>{name}</h1>
            <p>created on {date}</p>
          </div>
{/* TO DO add link here to modify */}
          <button onClick={() => handleClick()}>
            <MdModeEditOutline />
          </button>
         </div>
      

        <div className="yourAccount_first_options">
          <Link to="">
            <div>
              <FaNewspaper />
            </div>
           <p>Orders</p> 
          </Link>

          <Link to="">
            <div>
              <BiSolidDiscount />
            </div>
            <p>Discounts</p>  
          </Link>

          <Link to="/help">
            <div>
              <AiFillQuestionCircle />
            </div>
            <p>Help</p> 
          </Link>
        </div>
 
        <button onClick={() =>handleClick()} className="yourAccount_add_number">
          <p>Add Your Phone Number</p>
          <IoIosArrowForward />
        </button>

      </div>
  )
}

export default YourFsquare