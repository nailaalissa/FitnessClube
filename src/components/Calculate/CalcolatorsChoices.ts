import { BenefitType } from '../HomeComponents/benefit/benefit.types';
import bmi from '../../assets/bmi-icon.png'
import calori from '../../assets/calorie-icon.png'
import bmr from '../../assets/bmr-icon.png'

export const CalcolatorsChoices: Array<BenefitType> = [
  {
    text: "bmi-icon",
    title: "BMI Calculator",
    link: 'service/BmiCalculate',
    img: bmi,
    description:
      "The free Body Mass Index calculator, also known as BMI,computes and classifies BMI for children and adults using data obtained from WHO and CDC.",
  },
  {
    text: "calori-icon",
    title: "Calorie Calculator",
    link: 'service/CalorieCalculate',
    img: calori,
    description:
   "This calorie calculator computes how many calories are required daily to maintain, decrease, or gain weight. Learn about the different types of calories and how they affect you"},
  {
    text: "bmr-icon",
    title: "BMR Calculator",
    link: 'service/BmrCalculate',
    img:bmr,
    description:
     "Free BMR calculator uses well-known algorithms to calculate the basal metabolic rate. Also, find out more about the factors that influence BMR.",
  },

]