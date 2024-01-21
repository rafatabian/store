import "./Login.css"
import { BsFillPersonPlusFill, BsFillFastForwardFill } from "react-icons/bs"

import { Link } from "react-router-dom"

// add an ? : to login or connected

const Login = () => {


  return (
    <div className="login_popup_account">
      <div className="login_text_icon">
        <BsFillPersonPlusFill />
        <p>Join us and you will have access over premium feautures for free</p>
      </div>
      
      <div className="login_buttons">
        <Link to="/login" >
          <BsFillFastForwardFill />
          <p>Create an Account</p>
        </Link>
        <Link to="">Login</Link>
      </div>
    </div>
  )
}

export default Login