

import { NavBarProps } from './NavBar.types'
import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'; 
import { useTheme } from '../../hooks/useTheme';
import { useFavoriteExercise } from '../../hooks/FavoriteExercise/useFavoriteExercise';

export default function NavBar({ imageSrcPath, navItems }: NavBarProps) {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [theme, handleChange] = useTheme('light');
  const { favoriteExercises: favoriteExercisesCount } = useFavoriteExercise();
  return (
    <header className='test'>
      <div>
      <Link to="/" className="link nav-link">
        <img src={imageSrcPath} alt="Logo" />
        <span>Sport <span className="love">❤</span></span>
      </Link>
       </div>
      <nav className='navbar'>
     
      <ul className="nav-menu flex-between">
          {navItems.map((item, index) => (
            <li key={index}>
              {item === 'Favorites' ? (
                <Link className="link nav-link" to={`/${item}`}>
                <div className='favorits'>
                    <span className='favorits-icon'> ❤   <span className="favorits-number">  {favoriteExercisesCount.length > 0 ? favoriteExercisesCount.length : ''} </span>
                    </span>
                    </div>
                </Link>
              ) : (
                <NavLink className="link nav-link" to={`/${item}`}>
                  {item}
                </NavLink>
              )}
    </li>
          ))}
      </ul>
          
      </nav>
      <button className='mode' onClick={handleChange}> 
      {theme === 'dark' ? <span className='icon-sun'></span> : <span className='icon-moon-stroke'></span>}
        
     </button>
  
    <button className='menu icon-menu' onClick={()=> setShowModel(true)} />
          {showModel && (    <div className="fixed">
            
              <ul className="modal">
                <li>
                  <button className='icon-clear' onClick={()=>{setShowModel(false)}} />
                </li>
            {navItems.map((items, index) => (
              <li key={index}>
            <Link className="link nav-link" to={`/${items}`} onClick={()=>{setShowModel(false)}}>
              {items}
            </Link>
          </li>
        ))}
              </ul>
            
      </div>)}
    </header>
  );
}
