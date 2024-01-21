import "./ExistingAcc.css"
import { LoginContext } from "../../Contexts/ContextLog"
import { useContext } from "react"
import { Link } from "react-router-dom"

const ExistingAcc = () => {
  const {name} = useContext(LoginContext)

   

  return (
    <div className="existingAcc_container">

      <div className="existingAcc_title">
        <h1>Hi {name}!</h1>
      </div>
    
      <div className="existingAcc_options">
      <Link to="/your-account"><p>My account</p></Link>
      <Link to="/see-reviews"><p>My reviews</p></Link>
      <Link to="/genius"><p className="existingAcc_genius">Genius<span>Genius</span></p></Link>
      <Link to="/orders"><p>My orders</p></Link>
      </div>

    </div>
  )
}

export default ExistingAcc