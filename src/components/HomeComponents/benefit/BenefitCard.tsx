import { BenefitType } from "./benefit.types"
import './benefit.css'
 import { Link } from 'react-router-dom';


export default function benefitCard({ text, title, description,img,link}: BenefitType) {
  

  
  return (
    
    <div className="benefit-card">
     
      {img ? (
        <Link to={`/${link}`} className="linkSection">
       
          <img src={img} alt={title} className="benefit-img" />
          <h3 className="benefit-title">{title}</h3>
        </Link>
      ) : (
          <>
          <span className={`benefit-icon ${text}`}></span>
          <h3 className="benefit-title">{title}</h3>
            </>
        )}
     
        <p className="benefit-description">{description}</p>
        {/* </Link> */}
  </div>
  )
}