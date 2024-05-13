import React, { useState,useRef,useEffect } from 'react';
import Button from '../Button';
import Input from '../input/input';
import Label from '../label/label';
import Htext from '../Htext';
import { FormProps } from './form.types';
import './form.css';

function Form({
  className, disableButton, title, text, input1,input2,input3,activity,gender,children,...rest}: FormProps) {
  const [selectedGender, setSelectedGender] = useState<string | null>('female');
  const [selectedActivityLevel, setSelectedActivityLevel] = useState<string>('level_1'); 

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };
  const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedActivityLevel(event.target.value);
   
  };
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && disableButton) {
      formRef.current.reset();
    }
  }, [disableButton]);

  return (
    <form ref={formRef} {...rest} className={`base-form ${className}`} >
      <Htext>{title}</Htext>

      {gender && (
       <div className="choose-gender">
          <div className={`segmented-control ${selectedGender === 'male' ? 'active' : ''}`}>
            <input
              id="calc-gender-male"
              type="radio"
              name="gender"
              value="male"
              checked={selectedGender === 'male'}
              onChange={handleGenderChange}
            />
            <label htmlFor="calc-gender-male" className='genterText'>Male</label>
          </div>
          <div className={`segmented-control ${selectedGender === 'female' ? 'active' : ''}`}>
            <input
              id="calc-gender-female"
              type="radio"
              name="gender"
              value="female"
              checked={selectedGender === 'female'}
              onChange={handleGenderChange}
            />
            <label htmlFor="calc-gender-female" className='genterText'>Female</label>
          </div>
        </div>
      )}
      <div className='inputSection'>
      <Label text={input1} >
        <Input name={input1} type="text" placeholder={`Add ${input1}`} required   
           />
        </Label>
        </div>
      <div className='inputSection'>
      <Label text={input2}>
        <Input name={input2}  type="text" placeholder={`Add ${input2}`} required   />
      </Label>
</div>
    

      {input3 && (
        <div className='inputSection'>
          
            <Label text={input3}>
            <Input name={input3} type="text" placeholder={`Add ${input3}`} required   />
          </Label>
          </div>
     
      )}

      {activity && (
        <div className='inputSection'>
        <Label text="activity Level" >
          <select name="activity" className='selcet' value={selectedActivityLevel} onChange={handleActivityChange}>
            <option value="level_1">Level 1</option>
            <option value="level_2">Level 2</option>
            <option value="level_3">Level 3</option>
          </select>
          </Label>
          </div>
      )}

      {children}

      <Button type="submit" disabled={disableButton} className={disableButton ? 'notActive':'active'}  >
       {disableButton ? 'waiting...' : `${text}`} 
      </Button>
    </form>
  );
}

export default Form;



