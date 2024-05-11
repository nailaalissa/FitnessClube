import React, { useEffect, useState } from 'react';
import Form from '../../shared/form';
import loadingImage from '../../../assets/calculate.gif';
// import sparkel from '../../../assets/Sparkles.png'

import { BmrProps, DailyCalorieResponse } from '../Calorie/Calorie.types';
import '../calculate.css';
import Htext from '../../shared/Htext';

export default function BmrCalculate() {
  const [bmrValues, setBmrValues] = useState<BmrProps | null>(null);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [bmrdata, setBmrData] = useState<DailyCalorieResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

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
  }
  useEffect(() => {
    if (bmrValues) {
      const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${bmrValues.age}&gender=${bmrValues.gender}&height=${bmrValues.height}&weight=${bmrValues.weight}&activitylevel=level_1`;
      setIsLoading(true);

      fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_HOST_FITNESS,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setBmrData(data.data);
          setIsLoading(false);
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
            setBmrValues(null); 
            setDisableButton(false); 
            }, 9000); 
          })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [bmrValues]);





  return (
    <div style={{ marginTop: '6rem' ,minHeight:'90vh'}}>
      <div className="calculate-section-bmr">
        <div className="calculate-side-bmr calculate-side">
          <Form onSubmit={handleSubmit} title='BMR Calculate' input1='height' input2='weight' input3='age' text='Calculate' gender='female' disableButton={disableButton} />
        </div>

        <div className="result-side-bmr">
    
          <div className='loading'>
            <h1>Exploring the Basal Metabolic Rate (BMR) </h1>
            <p style={{fontWeight:'500'}}>To find out how much energy body needs to survive at a basic level.</p>
            {isLoading && <img src={loadingImage} alt="Loading" className='loadingImage' />}
            {bmrdata && showMessage && (
              <>
                <div className='result-container-bmr border'>
                <Htext className='result-text-bmr'>BMR: {bmrdata.BMR} Calories</Htext>
      
                </div>
              
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
