import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react"
import { LoginFunction } from "./Contexts/ContextLog"
import { AiOutlineLoading } from "react-icons/ai"


const NavBar = lazy(() => import("./Containers/NavBar/NavBar"))
const Home = lazy(() => import("./Containers/Home/Home"))
const Nav_II = lazy(() => import("./Components/Nav_II/Nav_II"))
const Footer = lazy(() => import("./Components/Footer/Footer"))
const Liked = lazy(() => import("./Containers/Liked/Liked"))
const Cart = lazy(() => import("./Containers/Cart/Cart"))
const Login = lazy(() => import("./Components/CreateAcc/CreateAcc") )
const ExistingAcc = lazy(() =>import("./Components/ExistingAcc/ExistingAcc"))
const Help = lazy(() => import("./Components/Help/Help"))
const YourAccount = lazy(() => import("./Containers/YourAccount/YourAccount"))
const Genius = lazy(() => import("./Components/Genius/Genius"))
const DetailsProduct = lazy(() => import("./Containers/DetailsProd/DetailsProd"))
const ProdCategories = lazy(() => import("./Containers/prodCategories/prodCategories"))
const Search = lazy(() => import("./Containers/Search/Search"))
const Orders = lazy(() => import("./Components/Orders/Orders"))
const SeeReview = lazy(() => import("./Containers/SeeReview/SeeReview"))

const App = () => {
  const [path, setPath] = useState(true)
  const [showFooter, setShowFooter] = useState(null)
  const [dataFromHome, setDataFromHome] = useState(null)
  const [appBackgropund, setAppBackground] = useState(null)
  const [spacialMobile, setSpecialMobile] = useState(false)

  // conditionally render the navbar
  const location = useLocation()
  const currentPathName = location.pathname === "/login"
  
  // condionally render the second navbar
  useEffect(() => {
      if(location.pathname == "/genius" || location.pathname == "/login" || location.pathname == "/cart"){
        setPath(false)
      }else{
        setPath(true)
      }
      // change background 
      if(location.pathname === "/details-product"){
       setAppBackground(true)
      }else{
        setAppBackground(false)
      }

  }, [location.pathname])

  // conditionally render the footer
  useEffect(() => {
    const pageName = location.pathname
    if(pageName === "/" || pageName === "/details-product" || pageName === "/liked" || pageName === "/your-account" || pageName === "/"){
      setShowFooter(true)
    }else{
      setShowFooter(false)
    }
    //
    if(pageName !== "/"){
      setDataFromHome(false)
    }
    //
  })

  // when scrolling in home make navbar stay fixed
  const handleScrollFromHome = (data) => {
    setDataFromHome(data)
  }

  // check page width
  useEffect(() => {
    const vw = window.innerWidth
    if(vw < 750){
      setSpecialMobile(true)
    }
  }, [])
  // TO DO when refeshing the page to return to the home and not in a different root
  return (

    <div className="app_container" style={{background: `${appBackgropund ? "linear-gradient(to right, white, var(--off-white))" : "var(--off-white)"}`}}>
    <LoginFunction>
      <Suspense fallback={<div id="App_loading"><AiOutlineLoading /></div>}>
        {!currentPathName && <NavBar props={!path ? true : false} data={dataFromHome}/>}   
        {path && !spacialMobile && <Nav_II  />}
           <Routes>
            <Route path="/" element={<Home scrollFromHome={handleScrollFromHome}/>} />
             {/* <Route path="/account" element={<Account />} />  */}
             <Route path="/liked" element={<Liked/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/existing-account" element={<ExistingAcc/>} />
            <Route path="/:help?" element={<Help/>} />
            <Route path="/your-account" element={<YourAccount/>} />
            <Route path="/genius" element={<Genius/>} />
            <Route path="/details-product" element={<DetailsProduct/>} />
            <Route path="/products-categories" element={<ProdCategories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<Search />} />
            <Route path="/see-reviews" element={<SeeReview />} />
          </Routes>  
         {showFooter && <Footer />} 
      </Suspense>
    </LoginFunction>
   </div>
  )
}

export default App
