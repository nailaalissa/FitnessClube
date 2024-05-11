import Htext from "../../shared/Htext"
import './benefit.css'
import BenefitCard from "./BenefitCard";
import { BenefitType } from './benefit.types';
import { benefits } from './benefit-Data'


export default function Benefit() {
  return (
    <section style={ {backgroundColor: 'var(--white)'}}>
    <div className="benifit-section">
      <Htext> More than Just a GYM</Htext>
      <p className="benifit-text">  We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
          care into each and every member.</p>
          <div className="container">
      {benefits.map((benefit: BenefitType, index) => (
            <BenefitCard
              key= {index}
              text={benefit.text}
              title={benefit.title}
              description={benefit.description}

            />
          ))}
        </div>
       
  
      </div>
    
      </section>
  )
}
