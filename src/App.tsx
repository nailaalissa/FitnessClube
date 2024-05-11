
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import Footer from './components/shared/Footer/Footer';
import NavBar from './components/Header/NavBar';
import imagePath from '../src/assets/Logo-Fitness.png'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import Exercise from './components/Exercise/ExerciseDetail/Exercise'
import ExerciseList from './pages/ExersiceList';
import CalculateBMI from './components/Calculate/BMI/CalculateBMI';
import Bmr from './components/Calculate/BMR/BmrCalculate';
import CalorieCalculate from './components/Calculate/Calorie/CalorieCalculate';
// import { FavoriteExerciseProvider } from './components/hooks/FavoriteExerciseContext';
import FavoriteExercisesPage from './pages/FavoriteExercisesPage';
function App() { 
  const items = ["Home","Exercises", "Service","Contact","Favorites"];
  return (
    <>
  
    <NavBar 
      imageSrcPath={imagePath} 
        navItems={items} />
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Exercises" element={<ExerciseList />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Exercise/:id" element={<Exercise  />} />
      <Route path="/service/BmiCalculate" element={<CalculateBMI  />} />
      <Route path="/service/bmrCalculate" element={<Bmr />} />
      <Route path="service/CalorieCalculate" element={<CalorieCalculate />} />
      <Route path="/favorites" element={<FavoriteExercisesPage />} />

      </Routes> 
      
    <Footer />
        
</>
      )
}
export default App