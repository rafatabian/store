import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginFunction = ({ children }) => {
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
    const [redirectPage, setRedirectPage] = useState("")
    // screll to sections
    const [section, setSection] = useState("")

    return (<LoginContext.Provider value={{ year, setYear, month, setMonth, day, setDay, name, setName, localImg, setLocalImg, alias, setAlias, email, setEmail, phoneNr, setPhoneNr, showSettings, setShowSettings, liked, setLiked, premGenius, setPremGenius, cartProd, setCartProd, prodID, setProdID, redirectPage, setRedirectPage, productHistory, setProductHistory, section, setSection, reviewNr, setReviewNr }}>
        {children}
    </LoginContext.Provider>)
}