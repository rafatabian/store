import "./Orders.css"
import { lazy, useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io" 
import { IoInformationCircleOutline } from "react-icons/io5"
import  frigde  from "../../assets/fridge.webp"


// const Footer = lazy(() => import("../Footer/Footer"))
// const First = lazy(() => import("../YourComponents/YourFsquare/YourFsquare"))
// const Second = lazy(() => import("../YourComponents/YourSsquare/YourSsquare"))
// const GeniusBtn = lazy(() => import("../YourComponents/YourGeniusBtn/YourGeniusBtn"))
// normal import 
import Footer from "../Footer/Footer"
import First from "../YourComponents/YourFsquare/YourFsquare"
import Second from "../YourComponents/YourSsquare/YourSsquare"
import GeniusBtn from "../YourComponents/YourGeniusBtn/YourGeniusBtn"

const Orders = () => {
    const [orders, setOrders] = useState(false)

// setting empty firdge pop up
const handleInput = (e) => {
    if(e){
        setOrders(true)
    }else{
        setOrders(false)
    }
 }  

 useEffect(() => {
    const handleClickOutside = () => {
        setOrders(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
        window.removeEventListener("click", handleClickOutside);
    };
}, []);
 
 
 return (
    <div className="orders_container">
        <div className="orders_center_container">
        <div className="orders_left_and_right">
        <div className="orders_left">
            <First />
            <Second />
            <GeniusBtn />
        </div>
    
        <div className="orders_right">
            <div className="orders_right_menu">
              <h1>Your orders</h1>
              <div  className="orders_right_filters"> 
              <div className="orders_span_container">
                <span>
                    <p>type</p>
                    <select>
                        <option>all orders</option>
                        <option>active orders</option>
                        <option>cancelled orders</option>
                    </select>
                </span>

                <span>
                   <p>from</p>
                   <select>
                        <option>last 3 months</option>
                        <option>last 6 months</option>
                        <option>last year</option>
                        <option>all</option>
                    </select>
                </span>
                </div>

                <div className="orders_input">
                    <button><IoIosSearch /></button>
                    <input type="text" placeholder="search product" onChange={(e) => handleInput(e.target.value)}/>
                    {/* pop up */}
                    {orders && 
                    <div className="orders_search_result">
                     <div>
                      <img src={frigde} alt="enpty fridge"/>
                     </div>
                     <div>
                        <p>No results found for your search.</p>
                        <p>Please verify the search term.</p>
                     </div>
                    </div>}
                </div>

              </div>
            </div>

            <div className="orders_notification">
                <div>
                    <span className="orders_notification_first">
                     <IoInformationCircleOutline />
                    </span>

                    <span className="orders_notification_second">
                        <p>No orders were placed during the selected period.</p>
                        <p>Please choose another time frame.</p>
                    </span>
                </div>
            </div>
        </div>

    </div>
    </div>

      <Footer />
    </div>
  )
}

export default Orders