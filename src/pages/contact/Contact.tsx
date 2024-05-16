import Button from "../../components/shared/Button";
import Htext from "../../components/shared/Htext";
import './contact.css'
import imgArrow from '../../assets/Arrow.png'
import shapImage from '../../assets/BenefitsPageGraphic.png'
import animation from '../../assets/Animation - 1713948483984.gif'
import { useState,useRef } from "react";

export default function ContactUs() {
  const [send, sentSend] = useState<boolean>(false); 
 
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sentSend(true);
    setTimeout(() => {
      sentSend(false);
    }, 9000);
    if (formRef.current) {
      formRef.current.reset();
    }

  }
  return (
    <div className="contact">
      <Htext>  <span className="text-start">JOIN NOW</span> TO GET IN SHAPE</Htext>
    
      <div className="container">
    
      <section className="contact-us">
      <h1 className="title">
         
            <img src={animation} alt=' '  className="shap-animation"/>
            Contact us
          </h1>
       
   
          {send ? <h1 className="displayText"> Thanks for your Message and We will replay as Soon as Possible </h1> : ''}
          
          <div className={!send ? ' display' : 'notdisplay'}>
          <p className="subtitle">
        Contact Us for more information and get notification when We have new Sport Class and publish something new.
          </p>
          <div style={{ justifyContent: 'space-between' }} className="flex" >
       
      <form onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label htmlFor="email">Email Address:</label>
                  <input autoComplete="off" type="email" name="email" id="email" required />
           
          </div>
          <div className="" style={{ marginTop: '24px' }}>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" required  />
           
          </div>
         
           <Button type="submit" className="Contact-btn"> Submit</Button>
        
        </form>
         
            </div>
            </div>
        </section>
        <div className="image-container ">
        <img src={shapImage} alt="shapeimage" className="shap"/>
        <img src={imgArrow} alt="arrow"  className="arrow"/>
         
       </div>
      </div>
  
    </div>
    
  )
}
