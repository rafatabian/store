import "./Review.css"
import { IoClose } from 'react-icons/io5'
import { FaStar } from "react-icons/fa"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/ContextLog"

const Review = ({props, closeFromChild}) => {
    const { reviewNr, setReviewNr } = useContext(LoginContext)

    const [changeStarColor, setChangeStarColor] = useState(true)
    const [starIndex, setStarIndex] = useState()
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewContent, setReviewContent] = useState("")
    const [starErr, setStarErr] = useState(false)
    const [errMessage, setErrMessage] = useState([])
    const [pageHeight, setPageHeight] = useState(0)


useEffect(() => {
// set blur height
    setPageHeight(document.body.scrollHeight + 92)
// chech if the review exist already
   if(props.stars){
    handleStarClick(props.stars -1)
   }
   if(props.review[0]){
    setReviewTitle(props.review[0])
   }
   if(props.review[1]){
    setReviewContent(props.review[1])
   }
}, [])

// stars hover logic
const handleHover = (e) => {
    if(changeStarColor){
    const firstStar = document.getElementById("review_first_star")
    const secondStar = document.getElementById("review_second_star")
    const thirdStar = document.getElementById("review_third_star")
    const forthStar = document.getElementById("review_forth_star")
    const fifthStar = document.getElementById("review_fifth_star")
 
    const stars = [firstStar, secondStar, thirdStar, forthStar, fifthStar]

    if(e[0] === "enter"){
        setStarIndex(e[1])  
        for(let i = 0; i <= e[1]; i++){
           if(stars[i]){
            stars[i].style.color= "#f9bf3b"
           }
        }
    }else{
        stars.forEach((star) => {
          if(star){
            star.style.color= "rgb(216, 216, 216)"
          }
        }
    )}
    }
}

// cliking the star
const handleStarClick = (e) => {
    const firstStar = document.getElementById("review_first_star")
    const secondStar = document.getElementById("review_second_star")
    const thirdStar = document.getElementById("review_third_star")
    const forthStar = document.getElementById("review_forth_star")
    const fifthStar = document.getElementById("review_fifth_star")

    const stars = [firstStar, secondStar, thirdStar, forthStar, fifthStar]
    //  make all the stars gray
    for (let i = 0; i <= 4; i++){
        if(firstStar && secondStar && thirdStar && forthStar && fifthStar){
          stars[i].style.color = "rgb(216, 216, 216)"
        }
    }

    // make the stars yellow 
    for (let i = 0; i <= e; i++){
        if(firstStar && secondStar && thirdStar && forthStar && fifthStar){ 
            stars[i].style.color = "#f9bf3b"
        }
    }
    // set the star index
    setChangeStarColor(false)
    setStarIndex(e)
    setStarErr(true)

}

// saving the review
const handleSave = () => {
    // errors
    if(!reviewContent){
        setErrMessage("addContent")
    }else if(reviewContent.length < 10){
        setErrMessage("contentLength")
    }
    if(!reviewTitle){
        setErrMessage("addTitle")
    }else if(reviewTitle.length < 10){
        setErrMessage("titleLength")
    }
    if(!starErr){
        setErrMessage("stars") 
    }
    //  if no errors then this
     if(starErr && reviewTitle.length > 10 && reviewContent.length > 10){
        props.stars = starIndex + 1
        props.review[0] = [reviewTitle]
        props.review[1] = [reviewContent]
        closeFromChild(false)
        //set reviews number 
        if(!reviewNr.includes(props.id)){
             setReviewNr((prev) => [...prev, props.id])
        }
     }  
}

  return (
    <div className="review_blur" style={{height: pageHeight}}>
        <div className="review_container">
          <div className="review_prod_details">
            <div className="review_image_and_title">
                <div className="review_image">
                    <img src={props.image} />
                </div>
                <div className="review_title_title">
                    <h1>Add a review for:</h1> 
                    <p>{props.name.slice(0, 60)}...</p>
                </div>
            </div>
            <div className="review_close_icon" onClick={() => closeFromChild(false)}>
              <IoClose />
            </div>
          </div>

          <div className="review_main">
            <div>
                <div className="review_stars_conatiner">
                    <div className="review_stars">
                        <span onMouseOver={() => handleHover(["enter", 0])} onMouseLeave={() => handleHover(["exit", "first"])} onClick={() => handleStarClick(0)}><FaStar id="review_first_star"/></span>
                        <span onMouseOver={() => handleHover(["enter", 1])} onMouseLeave={() => handleHover(["exit", "first"])} onClick={() => handleStarClick(1)}><FaStar id="review_second_star"/></span>
                        <span onMouseOver={() => handleHover(["enter", 2])} onMouseLeave={() => handleHover(["exit", "first"])} onClick={() => handleStarClick(2)}><FaStar id="review_third_star"/></span>
                        <span onMouseOver={() => handleHover(["enter", 3])} onMouseLeave={() => handleHover(["exit", "first"])} onClick={() => handleStarClick(3)}><FaStar id="review_forth_star"/></span>
                        <span onMouseOver={() => handleHover(["enter", 4])} onMouseLeave={() => handleHover(["exit", "first"])} onClick={() => handleStarClick(4)}><FaStar id="review_fifth_star"/></span>
                    </div>
                    <h1>{starIndex === 0 
                    ? "Terrible" 
                    :starIndex === 1
                    ? "Poor"
                    :starIndex === 2
                    ? "Average"
                    :starIndex === 3
                    ? "Good"
                    : starIndex === 4 
                    ? "Excellent"
                    : "Assign a rating" }</h1>
                </div>
               {errMessage === "stars" ? <h2 className="review_stars_error">Please add your rating</h2> : null}
            </div>
            
            <div className="review_title_riveiw">
                <h1>Review title:</h1>
                <input value={reviewTitle} type="text" maxLength="50" placeholder="Use a suggestion or write your own title" onChange={(e) => {setReviewTitle(e.target.value)}}/>
                {errMessage === "addTitle" ? <h2 className="review_title_error">What's that matter of a review without title? :)</h2> : null}
                {errMessage === "titleLength" ? <h2 className="review_title_error">Please add a longer title</h2> : null}
            </div>
            <div className="review_main_review">
                <h1>Review:</h1>
                <textarea value={reviewContent} id="customInput" maxLength="200" onChange={(e) => setReviewContent(e.target.value)} placeholder="Tell us about your experience&#10;• Does it meet your expectations? &#10;• Are you satisfied with the quality-to-price ratio?&#10;• Would you recommend it to others?" rows="6"></textarea>           
                {errMessage === "addContent" ?<h2 className="review_textarea_error">Write something interesting :)</h2> : null}
                {errMessage === "contentLength" ?<h2 className="review_textarea_error">Please add a longer product description</h2> : null}
                <p>Experiencing issues with the product or delivery? Submit a report</p>
                <p>By submitting the review, you agree to the terms and conditions of the website</p>
            </div>

            <button className="review_submit_button" onClick={() => handleSave()}>Add review</button>
          </div>
        </div>
    </div>
  )
}

export default Review