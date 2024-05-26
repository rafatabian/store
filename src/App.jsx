import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react"
import { LoginFunction } from "./Contexts/ContextLog"
import { AiOutlineLoading } from "react-icons/ai"

const NavBar = lazy(() => import("./Containers/NavBar/NavBar"))
const Home = lazy(() => import("./Containers/Home/Home"))
const Nav_II = lazy(() => import("./Components/Nav_II/Nav_II"))
const Footer = lazy(() => import("./Components/Footer/Footer"))
const ExistingAcc = lazy(() => import("./Components/ExistingAcc/ExistingAcc"))
const Liked = lazy(() => import("./Containers/Liked/Liked"))
const Cart = lazy(() => import("./Containers/Cart/Cart"))
const Login = lazy(() => import("./Components/CreateAcc/CreateAcc"))
const Help = lazy(() => import("./Components/Help/Help"))
const YourAccount = lazy(() => import("./Containers/YourAccount/YourAccount"))
const Genius = lazy(() => import("./Components/Genius/Genius"))
const DetailsProduct = lazy(() => import("./Containers/DetailsProd/DetailsProd"))
const ProdCategories = lazy(() => import("./Containers/prodCategories/prodCategories"))
const Search = lazy(() => import("./Containers/Search/Search"))
const Orders = lazy(() => import("./Components/Orders/Orders"))
const SeeReview = lazy(() => import("./Containers/SeeReview/SeeReview"))

import home_drinks from "./assets/home_img/home_drinks.webp"
import home_drinks_M from "./assets/home_resized_imgs/home_drinks_M.webp"
import home_drinks_S from "./assets/home_resized_imgs/home_drinks_S.webp"

const App = () => {
  const [dataFromHome, setDataFromHome] = useState(null)
  const footerPages = ["/" , "/details-product", "/liked", "/your-account"]
  const navIIPages = ["/genius", "/login", "/cart"]

  // preloaing 3 imgs from home
  useEffect(() => {
    const preloadImage = (href, media) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      link.media = media;
      document.head.appendChild(link);
    };

    const vw = window.innerWidth;
    if (vw <= 480) {
      preloadImage(home_drinks_S, '(max-width: 480px)');
    } else if (vw <= 760) {
      preloadImage(home_drinks_M, '(min-width: 481px) and (max-width: 760px)');
      console.log("runs M")
    } else {
      preloadImage(home_drinks, '(min-width: 761px)');
    }
  }, []);

  // conditionally render the navbar
  const location = useLocation()
  const currentPathName = location.pathname === "/login"


  // when scrolling in home make navbar stay fixed
  const handleScrollFromHome = (data) => {
    setDataFromHome(data)
  }

  return (
    <div className="app_container">
      <LoginFunction>
        <Suspense fallback={<div id="App_loading"><AiOutlineLoading /></div>}>
          {!currentPathName && <NavBar data={dataFromHome} />}
          {navIIPages.includes(location.pathname) ? null : <Nav_II />}
          <Routes>
            <Route path="/" element={<Home scrollFromHome={handleScrollFromHome} />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/existing-account" element={<ExistingAcc />} />
            <Route path="/:help?" element={<Help />} />
            <Route path="/your-account" element={<YourAccount />} />
            <Route path="/genius" element={<Genius />} />
            <Route path="/details-product" element={<DetailsProduct />} />
            <Route path="/products-categories" element={<ProdCategories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<Search />} />
            <Route path="/see-reviews" element={<SeeReview />} />
          </Routes>
          {footerPages.includes(location.pathname) ? <Footer /> : null}
        </Suspense>
      </LoginFunction>
    </div>
  )
}

export default App
