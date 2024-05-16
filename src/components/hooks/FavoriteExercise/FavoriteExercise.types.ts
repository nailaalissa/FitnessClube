import { Exercise } from '../../Exercise/ExerciseDetail/exerciseTypes.types';
export interface FavoriteExerciseContextType {
  favoriteExercises: Exercise[];
  addToFavorites: (exercise: Exercise) => void;
  removeFromFavorites: (exerciseId: string) => void;
}

export interface FavoriteExerciseProviderProps {
  children: React.ReactNode;
}