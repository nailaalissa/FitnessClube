import { BmrProps,DailyCalorieResponse} from './Calorie.types';
import {  useEffect, useState } from 'react';
import Form from '../../shared/form';
import '../calculate.css'
import loadingImage from '../../../assets/calculate.gif';
// import Htext from '../../shared/Htext';
import height from '../../../assets/height.png'
import weight from '../../../assets/kg.png'

 import calori from '../../../assets/calori2.png'
import { Link } from 'react-router-dom';
export default function CalorieCalculate() {
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
    console.log(height)
    const weight = formData.get('weight') as string;
    const age = formData.get('age') as string;
    const gender = formData.get('gender') as string;
    const activityLevel = formData.get('activity') as string; 
  
    setBmrValues({
      height: Number(height),
      weight: Number(weight),
      age: Number(age),
      gender: gender,
      activitylevel: activityLevel, 
    });
  
    setIsLoading(true);
  }



  function calculateCalorieRequirements({ height, weight, age, gender }: BmrProps): DailyCalorieResponse {
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
   
    } else {
      bmr =  10 * weight + 6.25 * height - 5 * age + 5;
    }

    const dailyCalorieRequirement = bmr * 1.2;

    return {
      BMR: bmr,
      dailyCalorieRequirement: dailyCalorieRequirement,
      goals: {
        maintainWeight: dailyCalorieRequirement,
        mildWeightLoss: dailyCalorieRequirement - 250,
        weightLoss: dailyCalorieRequirement - 500,
        extremeWeightLoss: dailyCalorieRequirement - 1000,
        mildWeightGain: dailyCalorieRequirement + 250,
        weightGain: dailyCalorieRequirement + 500,
        extremeWeightGain: dailyCalorieRequirement + 1000,
      },
    };
  }
  useEffect(() => {
    if (bmrValues) {
      const data = calculateCalorieRequirements(bmrValues);
      setBmrData(data);
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
    <div className="calculate-section-calorie">
   
      <div className="calculate-side">
        <Form onSubmit={handleSubmit} title='BMR Calculate' input1='height' input2='weight' input3='age' text='Calculate' gender='female' activity='activity' disableButton={disableButton} />

      </div>
      
      <div className="result-side-calorie">
     <img src={calori} className='caloriImage'></img>
        <div style={{display:'flex'}}>
            <div className='loading'>
              <h3> Knowing your daily calorie requirements is important to achieve your final goal. </h3>
             
              {isLoading ? <img src={loadingImage} className='loadingImage'></img> : ''}
          
              {bmrdata && showMessage && (
           <>
            <div className='result-container'>
              <div className='result'>
                <img src={height} className='imgInfo' alt='Height' />
                <p>{bmrValues?.height} cm</p>
              </div>

                  <div className='result'>
                    <img src={weight} className='imgInfo' alt='Weight' />
                    <p>{bmrValues?.weight} kg</p>
                  </div>
                </div>

               <p className='result-text'>Daily Calorie Requirement: {bmrdata.BMR} Calories per Day</p>
    
                <div className='goals-container'>
                  <h4>Goals:</h4>
                  <ul>
                      <li>Maintain Weight: <span>{bmrdata.goals.maintainWeight.toFixed(2)}</span> Calories</li>
                      <li>Mild Weight Loss: <span>{bmrdata.goals.mildWeightLoss.toFixed(2)}</span> Calories</li>
                      <li>Weight Loss: <span>{bmrdata.goals.weightLoss.toFixed(2)}</span> Calories</li>
                      <li>Extreme Weight Loss: <span>{bmrdata.goals.extremeWeightLoss.toFixed(2)}</span> Calories</li>
                      <li>Mild Weight Gain: <span>{bmrdata.goals.mildWeightGain.toFixed(2)}</span> Calories</li>
                      <li>Weight Gain: <span>{bmrdata.goals.weightGain.toFixed(2)}</span> Calories</li>
                      <li>Extreme Weight Gain: <span>{bmrdata.goals.extremeWeightGain.toFixed(2)}</span> Calories</li>
                    </ul>
                </div>
  </>
)}
     
          </div>
       
        </div>

      </div>    
    </div>
   
</div>
  

  )
}

