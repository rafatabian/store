import "./YourTsquare.css"
import { MdModeEditOutline } from "react-icons/md"
import { useContext} from "react"
import { LoginContext } from "../../../Contexts/ContextLog"

const YourTsquare = () => {
  const {alias, name, phoneNr, email, setShowSettings, localImg, setLocalImg } = useContext(LoginContext)


// modify image logic
const handleImage = (e) => {
    const file = e.target.files[0]
    if(file){
      const imageURL = URL.createObjectURL(file)
      setLocalImg(imageURL)
    }
  }

  
  return (
    <div className="yourAccount_account_square">
        <h1>Account Info</h1>

        <div className="yourAccount_info_info">
          <span className="yourAccount_first_span">
            {localImg
            ? <img src={localImg} />
            : <p>{name.charAt(0)}</p>
            }
            <button onClick={() => document.getElementById('fileInput').click()}><MdModeEditOutline /></button>

            <input 
             type="file" 
             id="fileInput"
             accept="image/*"
             style={{ display: "none" }}
             onChange={handleImage}
            />
          </span>

          <span className="yourAccount_second_span_data">
            <span>
              <p>Alias:</p>
              <p>Name:</p>
              <p>Email:</p>
              <p>Phone:</p>
            </span>
             <span>
              <p>{alias ? alias : "add"}</p>
              <p>{name ? name : "add"}</p>
              <p>{email ? email : "add"}</p>
              <p>{phoneNr ? phoneNr : "add"}</p>
             </span>
          </span>

          <span className="yourAccount_third_span_thanks">
          <p>Thank you for beeing with us from</p>
          <i>Today</i>
          </span>
        </div>
        
        <div className="yourAccount_info_button_section">
          <button className="yourAccount_open_edit" onClick={() => setShowSettings(true)}>Edit account</button>
        </div>
    </div>
  )
}

export default YourTsquare