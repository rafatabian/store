import { useEffect, useRef } from "react"
import "./Help.css"


const Help = () => {
  const target1 = useRef(null)
  const target2 = useRef(null)
  const target3 = useRef(null)
  const target4 = useRef(null)


  useEffect(() => {
    const url = window.location.href
    const urlTermination = url.split("/").pop()

      let targetRef
      switch(urlTermination){
        case"help1":
        targetRef = target1
        break;
        case"help2":
        targetRef = target2
        break;
        case"help3":
        targetRef = target3
        break;
        case"help4":
        targetRef = target4
        break;
        default:
        targetRef = target1
        break;
      }

       if(targetRef.current){
        targetRef.current.scrollIntoView({behavior: "smooth"})
       }
  }, [])

  return (
    <div className="help_container">
      <section id="create_account" ref={target1}>
        <div>
           <h1>Creating an account</h1>
        <ul>
        <li>Your name should be at least 3 charachers long and contain only letters.</li>
        <li>The maximum length of the name can be 11 characters only.</li>
        <li>Your name will be displayed in the applicaiton, once the page refreshs it will not be stored and you need to start the process again becouse this website if for demonstrative purpouse only.</li>
        <li>Your password should be at least 12 characters long, and contain at least one number</li>
       </ul>  
        </div>
       
      </section>  

       <section id="returns_anstallments" ref={target2}>
        <div>
           <h1>Returns & Installments</h1>
        <ul>
          <li>The Store website is a simulated environment intended for showcasing product features and user interfaces. It does not support real product transactions, and no actual purchases can be made.</li>
          <li>Given the nature of my mockup website, there is no provision for returning products. I encourage you to explore the features and layout of the platform without the expectation of receiving physical items.</li>
          <li>The installment payment option is not available on my mockup website. The website primarily serves as a visual representation, and financial transactions, including installment plans, are not supported.</li>
        </ul>
        </div>
       
       </section>

       <section id="payment_delivery_cookies" ref={target3}>
        <div>
          <h1>Payment, Delivery, Cookies Polocy</h1>
        <ul>
          <li>There is no actual payment processing functionality. Any payment methods or related options displayed are part of the simulated environment and are not applicable for real transactions. Rest assured, your personal and financial information is not at risk, as the website does not process actual payments.</li>
          <li>My mockup website does not facilitate the delivery of physical goods. Any references to delivery methods or shipping processes are part of the simulated experience. Feel free to explore the website's features without expecting any tangible items to be delivered to you.</li>
          <li>To enhance your experience on our platform, I use cookies as part of our simulated environment. These cookies are solely for the purpose of improving website functionality and user interactions within the demonstration setting. Rest assured, no personal information is collected or stored through these cookies.</li>
        </ul>
        </div>
        
       </section>

       <section id="contact" ref={target4}>
        <div>
          <h1>Contact</h1>
            <p>Please feel free to contact me on: <span>fabianrwork@gmail.com</span></p>          
            <p>Thank you for your time!</p>
        </div>
          
       </section>

    </div>
  )
}

export default Help