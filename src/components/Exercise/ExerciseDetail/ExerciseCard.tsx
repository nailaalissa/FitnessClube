

import { useCallback } from 'react';
import { Exercise } from './exerciseTypes.types';
import { Link } from 'react-router-dom';
import '../exercise.css';
import Htext from '../../shared/Htext';
import { useFavoriteExercise } from '../../hooks/FavoriteExerciseContext';

export default function ExerciseCard({ name, gifUrl, bodyPart, target, id }: Exercise) {
  const { addToFavorites, favoriteExercises, removeFromFavorites } = useFavoriteExercise();
  const isFavorite = favoriteExercises.some((exercise) => exercise.id === id);

  const handleAddToFavorites = useCallback(() => {
    if (isFavorite) {
      if (id) {
        removeFromFavorites(id);
        //console.log('test1');
      }
    } else {
      addToFavorites({ id, name, gifUrl, bodyPart, target });
      //console.log('test2');
    }
  }, [isFavorite, id, name, gifUrl, bodyPart, target, addToFavorites, removeFromFavorites]);
//console.log('card')
  return (
    <div className="exercise-link">
      <div>
        <div className="favorit-card">
          <span className={isFavorite ? 'remove' : 'add'} onClick={handleAddToFavorites}>❤</span>
        </div>
        
        <div className="exercise-card">
          <Link to={`/exercise/${id}`}>
            <img src={gifUrl} alt={name} />
          </Link>
          <Link to={`/exercise/${id}`} style={{ textDecoration: 'none' }}>
            <Htext className="text">{name}</Htext>
          </Link>
          <div className="buttons">
            <p className="group1">{bodyPart}</p>
            <p className="group2">{target}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

