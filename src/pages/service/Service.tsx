
 import Htext from "../../components/shared/Htext"
import'./service.css'
import { CalcolatorsChoices } from '../../components/Calculate/CalcolatorsChoices'
import BenefitCard from "../../components/HomeComponents/benefit/BenefitCard";
import { BenefitType } from '../../components/HomeComponents/benefit/benefit.types';



export default function Service() {

  return (
  <div>
    <div className="service-container">
        <h1 className="headerText"> Be the Best
          <br />version Of you</h1> 
      
       </div>
       <div >
        <div className='box'>
          <Htext>Love Sport<span className="love"> ❤</span> </Htext>
       <p className="serviceText">Welcome to our Health & Fitness Calculators page! Empower yourself with essential tools like BMI, Calorie, and BMR calculators to make informed decisions about your health and wellness journey. Get accurate insights and take charge of your well-being today!</p>
     
        </div>
        <section>
        <Htext  > Find your BMI  and health risks</Htext>
        <p className="service-text" >Planning and living a healthy lifestyle require honest calculations. Input your current and desired body parameters to understand numbers such as body mass index (BMI), ideal weight, calorie intake, and other health indicators. They will help you make informed nutrition, fitness, and overall well-being decisions.</p>
        </section>
        </div>
      <div className="container">
        {CalcolatorsChoices.map((claculater: BenefitType, index) => (
        
            <BenefitCard
              key={index}
              img={claculater.img}
              title={claculater.title}
              link={claculater.link}
              description={claculater.description}
            />
          ))}
        </div>
  
      
      </div>

      
  )
}
