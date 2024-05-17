import React, { useEffect, useState } from 'react';
import Form from '../../shared/form';
import loadingImage from '../../../assets/calculate.gif';
// import sparkel from '../../../assets/Sparkles.png'

import { BmrProps} from '../Calorie/Calorie.types';
// import { DailyCalorieResponse } from '../Calorie/Calorie.types';
import '../calculate.css';
import Htext from '../../shared/Htext';
import { Link } from 'react-router-dom';

export default function BmrCalculate() {
  const [bmrValues, setBmrValues] = useState<BmrProps | null>(null);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  // const [bmrdata, setBmrData] = useState<DailyCalorieResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [calculateBMR, setCalculateBMR] = useState<number>();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisableButton(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const height = formData.get('height') as string;
    const weight = formData.get('weight') as string;
    const age = formData.get('age') as string;
    const gender = formData.get('gender') as string;

    setBmrValues({
      height: Number(height),
      weight: Number(weight),
      age: Number(age),
      gender: gender,
      activitylevel: 'level_1',
    });

    setIsLoading(true);
    console.log('test1')
  }
  const calculatebmr = (weight:number, height:number, age:number, gender:string) => {
    if (gender == "male") {
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      setCalculateBMR(bmr);
    }
  
    const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    setCalculateBMR(bmr);
  };

 

  useEffect(() => {
    if (bmrValues) {
      calculatebmr(bmrValues.weight, bmrValues.height, bmrValues.age, bmrValues.gender);
      setIsLoading(false);
              setShowMessage(true);
              setTimeout(() => {
                setShowMessage(false);
                setBmrValues(null); 
                setDisableButton(false); 
                }, 9000); 
             
    }
  }, [bmrValues]);




  return (
    <div style={{ marginTop: '7rem', minHeight: '90vh' }}>
       <Link to={`/service`} className='back' style={{margin:'4rem'}}> <i className="fas fa-backward"> </i>  Back</Link>
      <div className="calculate-section-bmr">
        <div className="calculate-side-bmr calculate-side">
          <Form onSubmit={handleSubmit} title='BMR Calculate' input1='height' input2='weight' input3='age' text='Calculate' gender='female' disableButton={disableButton} />
        </div>

        <div className="result-side-bmr">
    
          <div className='loading'>
            <h1>Exploring the Basal Metabolic Rate (BMR) </h1>
            <p style={{fontWeight:'500'}}>To find out how much energy body needs to survive at a basic level.</p>
            {isLoading && <img src={loadingImage} alt="Loading" className='loadingImage' />}
         
            {  showMessage && (<>
                <div className='result-container-bmr border'>
                <Htext className='result-text-bmr'>BMR: {calculateBMR} Calories</Htext>
      
                </div>
              
              </>)}
          </div>
        </div>
      </div>
    </div>
  );
}
