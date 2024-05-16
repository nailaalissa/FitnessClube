import { useContext } from 'react';
import { FavoriteExerciseContext } from './FavoriteExerciseContext';

export const useFavoriteExercise = () => {
  const context = useContext(FavoriteExerciseContext);
  if (!context) {
    throw new Error('useFavoriteExercise must be used within a FavoriteExerciseProvider');
  }
  return context;
};


