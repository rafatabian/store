import "./YourAccount.css"
import { lazy, useContext, useState, useEffect } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
import { IoClose } from 'react-icons/io5'
import { BiErrorCircle } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"


// const Fsquare = lazy(() => import("../../Components/YourComponents/YourFsquare/YourFsquare"))
// const Ssquare = lazy(() => import("../../Components/YourComponents/YourSsquare/YourSsquare"))
// const Tsquare = lazy(() =>  import("../../Components/YourComponents/YourTsquare/YourTsquare"))
// const Fosquare = lazy(() => import("../../Components/YourComponents/YourFosquare/YourFosquare"))
// const Fisquare = lazy(() => import("../../Components/YourComponents/YourFisquare/YourFisquare"))
// const GeniusBtn = lazy(() => import("../../Components/YourComponents/YourGeniusBtn/YourGeniusBtn"))
// normal imports 
import Fsquare from "../../Components/YourComponents/YourFsquare/YourFsquare"
import Ssquare from "../../Components/YourComponents/YourSsquare/YourSsquare"
import Tsquare from "../../Components/YourComponents/YourTsquare/YourTsquare"
import Fosquare from "../../Components/YourComponents/YourFosquare/YourFosquare"
import Fisquare from "../../Components/YourComponents/YourFisquare/YourFisquare"
import GeniusBtn from"../../Components/YourComponents/YourGeniusBtn/YourGeniusBtn"

const YourAccount = () => {
  const {redirectPage, year, setYear, month, setMonth, day, setDay, setName, setAlias, setEmail, setPhoneNr, showSettings, setShowSettings} = useContext(LoginContext)

  const [errMessage, setErrMessage] = useState("") 
  const navigate = useNavigate()
 
  //  scroll to top  
  useEffect(() => {
    window.scrollTo({
     top:0
    })
   }, [])

  // temporary values 
  const [temporaryAlias, setTemporaryAlias] = useState("")
  const [temporaryName, setTemporaryName] = useState("")
  const [temporaryEmail, setTemporaryEmail] = useState("")
  const [temporaryPhone, setTemporaryPhone] = useState("")

// go home if page refreshes 
useEffect(() => {
  if(!redirectPage){
    navigate("/")
  }
})

// pressing enter trigers handleSave 
const handleEnter = (e) => {
  if(e.key === "Enter"){
    handleSave()
  }
}


// click the blur and close settings
useEffect(() => {
   const blur = document.querySelector(".yourAccount_settings_blur")
   if(blur){
    blur.addEventListener("click", (event) => {
      if(event.target === blur){
      setShowSettings(false)
      }
    })
  }
})

// handle birth date
const handleDay = (e) => {
  if(e.length <= 2){
        setDay(e) 
       }
}
const handleMonth = (e) => {
  if(e.length <= 2){
    setMonth(e) 
   }
}
const handleYear = (e) =>{
  if(e.length <= 4){
    setYear(e) 
   }
}


// TO DO improve code logic down here
// clicking the save button logic
    const handleSave = () => {
      let emailError = null
      let phoneError = null

      if(temporaryAlias != ""){
        setAlias(temporaryAlias)
      }
      
      if(temporaryName != ""){
        setName(temporaryName)
      }
  
      // email filter
     if(temporaryEmail != ""){
      if(!temporaryEmail.includes("@") || temporaryEmail.length > 35){
        emailError = true
        setErrMessage("add a valid email address")
      }else{
        emailError = false
        setErrMessage("")
        setEmail(temporaryEmail)
     }
    }

    // phone number filter
    if(temporaryPhone != "" && !emailError){
      if(!temporaryPhone.includes("07") || temporaryPhone.length > 11){
        phoneError = true
          setErrMessage("add a valid phone number")
      }else{
        phoneError = false
        setErrMessage("")
        setPhoneNr(temporaryPhone)
      }
    }
// closing the settings pannel

    if(!emailError && !phoneError){
       setShowSettings(false)
    }
  }
   


      return(
      <div className="yourAccount_container">
       <Link to="/" id="go-home-from-account"/>
      <div className="yourAccount_info_details">
            <Fsquare />
            <Ssquare />
            <GeniusBtn />
      </div>

      <div className="yourAccount_squares_container">
        <div className="yourAccount_squares_first_set">
          <Tsquare />
          <Fosquare />
        </div>
        <div className="yourAccount_squares_first_set">
          <Fisquare />
        </div>

      </div>

      {/* settings that modify user info */}
      {showSettings && 
      <div className="yourAccount_settings_blur">
        <div className="yourAcocunt_settings_pannel" onKeyDown={handleEnter}>

          <div className="yourAccount_settings_title-close">
            <h1>Account Settings</h1>
            <IoClose onClick={() => setShowSettings(false)}/>
          </div>
         
         <span className="yourAccount_setthing_thin_line"></span>

          <div className="yourAccount_settings_settings">
            <div className="yourAccount_settings_inputs_label">
              <div className="yourAccount_settings_firstChild">
                <div><p>Alias:</p><input type="text" placeholder="ex: Edy20" onChange={(e) => setTemporaryAlias(e.target.value)}/></div>
                <div><p>Name:</p><input value={temporaryName} type="text" onChange={(e) => setTemporaryName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}/></div>
                <div><p>Email:</p> <input type="email" onChange={(e) => setTemporaryEmail(e.target.value)}/></div>
                <div><p>Phone Number:</p><input type="number" onChange={(e) => setTemporaryPhone(e.target.value)}/></div>        
              </div>
              <div className="yourAccount_settings_secondChild">
                
                
               
                
              </div>
            </div>

            <p className="yourAccount_birth_sugestion">Add your date of birth in order to help us send the best offers</p>

            <div className="yourAccount_settings_birth_container">
              <p>Date of birth:</p>
              <div className="yourAccount_settings_birth_optins">
                <input value={day} onChange={(e) => handleDay(e.target.value)} id="day" type="number" placeholder="DD"/>
                <input value={month} onChange={(e) => handleMonth(e.target.value)} id="month" type="number" placeholder="MM"/>
                <input value={year} onChange={(e) => handleYear(e.target.value)} id="year" type="number" placeholder="YYYY"/>
              </div>
            </div>
          

          <div className="yourAccount_settings_save_button_container">
            <div>
              <button onClick={() => handleSave()}>Save</button>
            </div>
          </div>

          </div>
        </div>
          {errMessage &&
          <div className="yourAccount_settings_error">
            <BiErrorCircle />
            <p>{errMessage}</p>
          </div>
          }
      </div>
      }
    </div>
  )
}

export default YourAccount