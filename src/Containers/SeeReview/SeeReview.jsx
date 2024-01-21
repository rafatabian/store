import "./SeeReview.css"
import { lazy, useContext, useEffect, useState } from "react"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/products"
import { FaStar } from "react-icons/fa"
import { AiFillLike } from "react-icons/ai"
import { Link } from "react-router-dom"
import  starReview  from "../../assets/star_review.png"
import { LoginContext } from "../../Contexts/ContextLog"


const FirstAccountComponent = lazy(() => import("../../Components/YourComponents/YourFsquare/YourFsquare"))
const SecondAccountComponent = lazy(() => import("../../Components/YourComponents/YourSsquare/YourSsquare"))
const ThirdAcconutComponent = lazy(() => import("../../Components/YourComponents/YourGeniusBtn/YourGeniusBtn"))
const Footer = lazy(() => import("../../Components/Footer/Footer"))
const Review = lazy(() => import("../../Components/Review/Review"))

const SeeReview = () => {
    const { reviewNr } = useContext(LoginContext)
    const [reviewProdID, setReviewProdID] = useState([])
    const [date, setDate] = useState("")
    const [popUp, setPopUp] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [toggleSearch, setToggleSearch] = useState(true)
    const [btnStyles, setBtnStyles] = useState(false)
    const [starContStyles, setStarContStyles] = useState(false)

// close popUp
const closeFromChild = (e) => {
    setPopUp(e)
}

//check for reviews
let ids = []
useEffect(() => {
    products.map((prod) => {
      if(prod.stars !== 0){
       if(!ids.includes(prod.id)){
        ids.push(prod.id)
        setReviewProdID((prev) => [...prev, prod.id])
       }
      }
    })
}, [])

//  date
useEffect(() => {
const currentDate = new Date();
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

setDate(`${day} ${month} ${year}`);
}, [])

// clicking the like btn
const handleLike = (id) => {
    const pTag = document.getElementById(`${id}_seeReview_p`)
    const btnSvg = document.getElementById(`${id}_seeReview_btn`)
    if(pTag && btnSvg){
        if(pTag.innerHTML === "1"){
            pTag.innerHTML = "0"
            btnSvg.style.color = "#6093c3"
        }else{
            pTag.innerHTML = "1"
            btnSvg.style.color = "#005eb8"
        }
    }
}

// trow errow when searching review

useEffect(() => {
    if(searchValue.length == 0){
        setToggleSearch(true)
    }else{
        setToggleSearch(false)
    }
}, [searchValue])


// change the star massage when searching in input
const handleSearch = (e) => {
    setSearchValue(e)
    setBtnStyles(false)
}

// toggle styles on moblie
useEffect(() => {
   if(window.innerWidth < 730){
    setStarContStyles(true)
   }else{
    setStarContStyles(false)
   }
}, [])
  return (
    <div className="seeReview_container">
        <div className="seeReview_left_and_right">
         <div className="seeReview_left">
            <FirstAccountComponent />
            <SecondAccountComponent />
            <ThirdAcconutComponent />
        </div>
        <div className="seeReview_right">
            <div className="seeReview_right_menu">
                <div>
                  <h1>My reviews</h1>  
                  <div className="seeReview_right_menu_btn">number reviews {reviewNr.length}</div>
                </div>
                
                <div className="seeReview_right_filters">
                    <select>
                        <option>Latest reviews</option>
                        <option>Most popular</option>
                    </select>

                    <select>
                        <option>All reviews</option>
                        <option>5 stars reviews</option>
                        <option>4 stars reviews</option>
                        <option>3 stars reviews</option>
                        <option>2 stars reviews</option>
                        <option>1 star reviews</option>
                    </select>

                    <button className="seeReviews_verified_button" onClick={() => setBtnStyles(!btnStyles)} style={{color: btnStyles ? "#009900" : "#222222"}}>
                      <RiVerifiedBadgeFill style={{color: btnStyles ? "#009900" : "#222222"}}/>
                     {window.innerWidth > 730 ? <p>Verified reviews</p> : null}
                    </button>

                    <div className="seeReviews_input_container">
                        <input type="text" placeholder="Search review" onChange={((e) => handleSearch(e.target.value))}/>
                        < BiSearch/>
                    </div>
                    
                </div>
               
            </div>
{/* display */}
            <div className={`seeReview_right_content ${starContStyles && reviewProdID.length == 0 ? "star_cont_background" : null}`}>
                {!btnStyles && 
                toggleSearch &&
                reviewProdID.length
                ? products.map((prod) => {
                    if(reviewProdID.includes(prod.id)){
                     return <div className="seeReview_of_the_product" key={prod.price[0] + prod.id}>
                              <div className="seeReview_image_and_name">
                               <img src={prod.image} alt="product" />
                               <h3>{prod.name.slice(0, 30)}...</h3>
                              </div>

                              <div className="seeReview_product_content">
                                <div>
                                 <h3>{date}</h3>
                                 <button onClick={() => setPopUp(prod.id)}>Edit review</button>
                                </div>

                                <h1 className="seeReview_product_title">{prod.review[0]}</h1>

                                <div className="seeReview_stars_container">
                                 <FaStar style={{color: prod.stars == 5 || prod.stars == 4 || prod.stars == 3 || prod.stars == 2 || prod.stars == 1 ? "#f9bf3b" : "#ccc"}}/>
                                 <FaStar style={{color: prod.stars == 5 || prod.stars == 4 || prod.stars == 3 || prod.stars == 2 ? "#f9bf3b" : "#ccc"}}/>
                                 <FaStar style={{color: prod.stars == 5 || prod.stars == 4 || prod.stars == 3 ? "#f9bf3b" : "#ccc"}}/>
                                 <FaStar style={{color: prod.stars == 5 || prod.stars == 4 ? "#f9bf3b" : "#ccc"}}/>
                                 <FaStar style={{color: prod.stars == 5 ? "#f9bf3b" : "#ccc"}}/>
            
                                 <p>Store user review</p>
                                </div>

                                <h1 className="seeReview_content">{prod.review[1]}</h1>
                                
                                <div>
                                    <button onClick={() => handleLike(prod.id)}><AiFillLike id={`${prod.id}_seeReview_btn`}/></button>
                                    <p id={`${prod.id}_seeReview_p`}>0</p>
                                </div>
                                
                              </div>
                              {popUp === prod.id && <Review props={prod} closeFromChild={closeFromChild}/>}
                            </div>
                            
                    }})
                    // if no results found
                : <div className="seeReview_no_review">
                    <div>
                        <img src={starReview} alt="star" />
                    </div> 
                    
                    <div>
                        <h1>{toggleSearch ? "no reviews here" : "no reviews found..."}</h1>
                        <p>{!btnStyles ? !toggleSearch ? "Try imporving the searching criteria" : "First add a review for your product in" : reviewProdID.length !== 0  ? "Your reviews are under verification. Thank you for your patience." : "Here are the verified reviews. Try adding one first"} {!btnStyles && toggleSearch && <Link to="/">Store</Link>}</p>
                    </div>
                  </div>
                  }
    
            </div>
        </div>
        </div>
        
        <Footer />
    </div>
   
  )
}

export default SeeReview