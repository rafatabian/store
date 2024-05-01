import "./Genius.css"
import logo_genius from "../../assets/logo_genius.webp"
import { FaTruckFast, FaUnlock } from "react-icons/fa6"
import { MdLocalOffer } from "react-icons/md"
import { FaUnlockAlt } from "react-icons/fa"
import { useContext, useEffect, useRef, useState } from "react"
import { LoginContext } from "../../Contexts/ContextLog"
import { Link, useNavigate } from "react-router-dom"

const Genius = () => {
    const {premGenius, setPremGenius, redirectPage} = useContext(LoginContext)
    const [unlokHeight, setUnlockHeight] = useState(0)
    const linkRef = useRef(null)
    const navigate = useNavigate()

    
    // redirect /home when refreshes 
    useEffect(() => {
      if(!redirectPage){
        navigate("/")
      }
    })
    
    // set blur height
    useEffect(() => {
      const geniusCont = document.querySelector(".genius_contaier")
      if(geniusCont){
       setUnlockHeight(geniusCont.offsetHeight + ((window.innerWidth < 750) ? 47 : 0));
      }
    }, [])

    const handleUnlockClick = () => {
        setPremGenius(true)
      // redirect to homepage
        setTimeout(() => {
          linkRef.current.click()
          // setPremGenius(false)
        }, 1000)
    }

  return (
    <div className="genius_contaier">
       <div className="genius_logo_conteiner">
        <img src={logo_genius} />
       </div>

       <div className="genius_info_container">
        <div className="genius_first_info">
          <span><FaTruckFast /></span>
          <span><p>Free fast delivery</p></span>
        </div>
        <div className="genius_second_info">
          <span><FaUnlock /></span>
          <span><p>Premium feautures</p></span>
        </div>

        <div className="genius_third_info">
          <span><MdLocalOffer /></span>
          <span><p>Exclusive discounts</p></span>
        </div>
       </div>

       <div className="genius_main_text_container">
        <p>Your subsciption to</p>
        <p>FREE DELIVERY AND</p>
        <p>EXCLUSIVE OFFERS</p>
       </div>

       <div className="genius_btn_container">
        <button onClick={() => handleUnlockClick()}>Unlock for free</button>
       </div>
{/* genius unlock animation */}
      {premGenius &&
      <div className="genius_unlock_container" style={{height: unlokHeight}}>
        <FaUnlockAlt />
        <Link to="/" ref={linkRef}/>
      </div>
       }
    </div>
  )
}

export default Genius