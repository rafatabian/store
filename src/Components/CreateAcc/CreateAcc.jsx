import "./CreateAcc.css"
import { Link, useNavigate } from "react-router-dom"
import dollarImg from "../../assets/dollar-inage.png"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
import { BiErrorCircle } from "react-icons/bi"
import { FiCheckCircle } from "react-icons/fi"



const CreateAcc = () => {
    const {name, setName, redirectPage, mobile} = useContext(LoginContext)

    const [password, setPassword] = useState("")
    const [errMessage, setErrMessage] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate()
    
    // password and name filters
        const handleSubmit = () => {
         if(name.length <= 1){
          setErrMessage("Please add your name")
          setError(true)
      }else if(name.length > 11){                  
        setErrMessage("Please add a shorter nane") 
        setError(true)                             
      }else if(/\d/.test(name) || name.length === 2){
         setErrMessage("Please add a valid name")
         setError(true)
      }else if (password.length === 0){
          setErrMessage("Please create a password")
          setError(true)
      }else if(password.length < 12){
        setErrMessage("Your password length should be at least 12 characters long")
        setError(true)
      }else if(!/\d/.test(password)){
          setErrMessage("Consider adding numbers to your password")
          setError(true)
        }else{
        setError(false)
        setSuccess(true)
        // redirecting to homepage
        setTimeout(() => {
        const cv = document.getElementById("secret")
        if(cv){
          cv.click()
        }
        }, 1000) 
      }
    }
    
// enter key trigers "continue" button
useEffect(() => {
    const create = document.querySelector(".createAcc_container") 
    if(create){
     create.addEventListener("keydown", (e) => {
    if(e.keyCode === 13 ){
       handleSubmit()
      } 
    })
  }
})

// go home if page refreshes 
useEffect(() => {
  if(!redirectPage){
    navigate("/")
  }
})


  return (
    <div className="createAcc_container" style={{padding: mobile ? "5rem 10px 10px 10px" : null}}>
        {/* error message */}
        {error && 
        <div className="createAcc_error" style={{width: mobile ? "calc(100vw - 20px)" : null}}>
            <BiErrorCircle />
            <p>{errMessage}</p>
        </div>
        }

        {/* success animation */}
        {success &&
        <div className={`createAcc_success ${mobile ? "createAcc_success_anim_mobile" : null}`}>
             <FiCheckCircle />
        </div>
        }
       

        <div className="createAcc_logo">
         <Link to="/" >
           <h1>ST</h1>
           <img src={dollarImg} alt="store logo" />
           <h1>RE</h1>
         </Link>
        </div>
         
        <div className={`createAcc_input_container ${mobile ? "createAcc_input_cont_mobile" : null}`}>
         <h1>welcome</h1>
         <h2>What's your first name?</h2>
         <input type="text" value={name} onChange={(e)=> setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}/>
         <h2>Choose a password</h2>
         <input type="password" onChange={(e) => setPassword(e.target.value)}/>
         <button type="submit" onClick={() => handleSubmit()}>Continue</button>
         <Link id="secret" to={redirectPage === "account" ? "/your-account" : redirectPage === "liked" ? "/liked" : redirectPage === "genius" && "/genius" }/>
         <Link to="/" id="go-home" />
        </div>

        <div className="createAcc_help_container">
            <Link to="/help1">need help?</Link>
        </div>
        
        <p className="createAcc_more_info">We don't store your personal information. This account is available for single use. The porpouse of this website is to show our potential.</p>
    </div>
  )
}

export default CreateAcc