import '../calculate.css'
import Form from '../../shared/form'
import { BmiProps,BmiResult } from './calculate.types'
import { useEffect, useState } from 'react';
import loadingImage from '../../../assets/calculate.gif';
 import height from '../../../assets/height.png'
import weight from '../../../assets/kg.png'
import bmiresult from '../../../assets/bmiresult.png'
import sparkel from '../../../assets/AbstractWaves.png'
// import classification from '../../../assets/class1.png'
import Htext from '../../shared/Htext';

export default function CalculateBMI() {
  const [bmiValues, setBmiValues] = useState<BmiProps | null>(null);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [data, setData] = useState<BmiResult | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [showMessage, setShowMessage] = useState<boolean>(false);

  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisableButton(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const height = formData.get('height') as string;
    const weight = formData.get('weight') as string;
    const age = formData.get("age") as string;
    setBmiValues({
      height:Number( height),
      weight:  Number(weight),
      age: Number(age),
    });
   
    setIsLoading(true);
 
  }


    useEffect(() => {
      // Make API call when bmiValues change
      if (bmiValues) {
        setIsLoading(true); 
        const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${bmiValues.age}&weight=${bmiValues.weight}&height=${bmiValues.height}`;
        fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY, 
            'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_HOST_FITNESS, 
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setData(data.data); 
            setIsLoading(false);
            setShowMessage(true);
           
            setTimeout(() => {
              setShowMessage(false);
            
              setBmiValues(null); 
              setDisableButton(false); 
            }, 9000); 
          })
          .catch((error) => {
            console.error('Error fetching BMI data:', error);
            setIsLoading(false); 
          });
      }
    }, [bmiValues]);
  
 
  return (
    <div style={{ marginTop: '5rem',minHeight:'90vh' }}>
      <div className="calculate-section">
     
        <div className="calculate-side">
          
          <Form onSubmit={handleSubmit} title='BMI Calculate' input1='height' input2='weight' input3='age' text='Calculate' gender='female' disableButton={disableButton} />
    
        
        </div>
        
        <div className="result-side ">
       
          <div style={{display:'flex'}}>
          <img src ={sparkel} className='rotat'></img>
        <div className='loading'>
          {isLoading &&
            <>
             <p>Calculating.......</p>
          <img src={loadingImage} alt="loading" className='loadingImage'/>
          </>
              }
            </div>
         
          </div>
       
          <div>
            {data && showMessage ? <>
              <h1 style={{marginBottom:'2rem'}}> Your  Result : </h1>
              <div className='result'>
                <img src={height} className='imgInfo' /> 
                <p>  {bmiValues?.height} cm </p>
              </div>
            
              <div className='result'>
                <img src={weight} className='imgInfo' /> 
                <p>   {bmiValues?.weight} kg </p>
              </div>
         
              <div className='result'>
             <img src={bmiresult} className='imgInfo' /> 
                  <p>{data.bmi}</p>
                  </div>
             
                 
              <h2>Your classification : {data.health } </h2>
            
              <h3>  The Healthy BMI Range  : {data.healthy_bmi_range}</h3></> : ''}

            
          </div>
        </div>
      
  
      </div>
      <div className={showMessage ? 'show' : 'notShow' }>
    <Htext> What does this mean for you?</Htext>
    {/* <img src={classification} style={{ marginLeft: '3rem' }} alt="BMI Classification" /> */}
    <div className='resultInfo'>
      <span className='Info-text' style={{color:'blue'}}>Underweight : </span>  <p>Indicates being below the normal weight range, potentially leading to health risks despite not being obese.</p>
      <span className='Info-text' style={{color:'green'}}>Normal Weight : </span><p> Falls within the healthy weight range, reducing the risk of weight-related health problems.</p>
      <span className='Info-text' style={{color:'yellowgreen'}}>Overweight : </span> <p>Signifies carrying excess weight, which can increase the risk of various health issues.</p>
      <span className='Info-text' style={{color:'orange'}}> Obesity Class I :</span> <p>Indicates the first stage of obesity, posing moderate health risks that may require medical attention.</p>
      <span className='Info-text' style={{color:'red'}}> Obesity Class II :</span> <p> Represents severe obesity, significantly increasing the risk of obesity-related diseases and requiring medical management.</p>
      <span className='Info-text' style={{color:'var(--gray-500)'}}> Obesity Class III :</span> <p> Denotes extreme or morbid obesity, associated with severe health risks that often necessitate medical interventions and lifestyle changes.</p>
    </div> 
  </div> 
    
</div>
    
  )
}

