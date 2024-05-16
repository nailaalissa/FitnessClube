
import  { createContext, useState } from 'react';
import { Exercise } from '../../Exercise/ExerciseDetail/exerciseTypes.types';
import {FavoriteExerciseContextType ,FavoriteExerciseProviderProps} from './FavoriteExercise.types'


export const FavoriteExerciseContext = createContext<FavoriteExerciseContextType | null>(null);

export const FavoriteExerciseProvider = ({ children }: FavoriteExerciseProviderProps) => {
  const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);

  const addToFavorites = (exercise: Exercise) => {
    setFavoriteExercises((prevFavorites) => [...prevFavorites, exercise]);
  };

  const removeFromFavorites = (exerciseId: string) => {
    setFavoriteExercises((prevFavorites) =>
      prevFavorites.filter((exercise) => exercise.id !== exerciseId)
    );
  };

  return (
    <FavoriteExerciseContext.Provider value={{ favoriteExercises, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteExerciseContext.Provider>
  );
};
