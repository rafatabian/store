import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginFunction = ({children}) => {
    const [name, setName] = useState("")
    // account states
    const [localImg, setLocalImg] = useState("")
    const [alias, setAlias] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNr, setPhoneNr] = useState("")
    // birth date 
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    // account settings pop up
    const [showSettings, setShowSettings] = useState(null)
    // favorite products
    const [liked, setLiked] = useState([])
    // review
    const [reviewNr, setReviewNr] = useState([])
    //genius
    const [premGenius, setPremGenius] = useState(false)
    // cart
    const [cartProd, setCartProd] = useState([])
    const [productHistory, setProductHistory] = useState(false)
    // product id 
    const [prodID, setProdID] = useState(0)
    // navbar button clicked to redirect from login
// TO DO the redirect function if not wokring  properly when refreshin the page
    const [redirectPage, setRedirectPage] = useState("")
    // TO DO save profile photo url
    // screll to sections
    const [section, setSection] = useState("")
    // mobile verison
    const [mobile, setMobile] = useState(false)
    const [lessTenH, setLessTenH] = useState(false)

return(<LoginContext.Provider value={{year, setYear, month, setMonth, day, setDay, name, setName, localImg, setLocalImg, alias, setAlias, email, setEmail, phoneNr, setPhoneNr, showSettings, setShowSettings, liked, setLiked, premGenius, setPremGenius, cartProd, setCartProd, prodID, setProdID, redirectPage, setRedirectPage, productHistory, setProductHistory, section, setSection, mobile, setMobile, lessTenH, setLessTenH, reviewNr, setReviewNr}}>
    {children}
    </LoginContext.Provider>)
}