
// import  { createContext, useState } from 'react';
// import { Exercise } from '../Exercise/ExerciseDetail/exerciseTypes.types';

// interface FavoriteExerciseContextType {
//   favoriteExercises: Exercise[];
//   addToFavorites: (exercise: Exercise) => void;
//   removeFromFavorites: (exerciseId: string) => void;
//   // counter: number;
//   // incrementCounter: () => void;
//   // resetCounter: () => void;
// }
// interface FavoriteExerciseProviderProps {
//   children: React.ReactNode;
// }
// export const FavoriteExerciseContext = createContext<FavoriteExerciseContextType | null>(null);






// export  const FavoriteExerciseProvider = ({ children } : FavoriteExerciseProviderProps) => {
//   const [favoriteExercises, setFavoriteExercises] = useState<Exercise[]>([]);
//   // const [counter, setCounter] = useState<number>(0);
//   const addToFavorites = (exercise: Exercise) => {
//     setFavoriteExercises((prevFavorites) => [...prevFavorites, exercise]);
//   };

//   const removeFromFavorites = (exerciseId: string) => {
//     setFavoriteExercises((prevFavorites) =>
//       prevFavorites.filter((exercise) => exercise.id !== exerciseId)
//     );
//   };
//   // const incrementCounter = () => {
//   //   setCounter((prevCounter) => prevCounter + 1);
//   // };

//   // const resetCounter = () => {
//   //   setCounter(0);
//   // };
//   return (
//     <FavoriteExerciseContext.Provider value={{ favoriteExercises, addToFavorites, removeFromFavorites}}>
//       {children}
//     </FavoriteExerciseContext.Provider>
//   );
// };


// // eslint-disable-next-line react-refresh/only-export-components
import React, { createContext, useState } from 'react';
import { Exercise } from '../Exercise/ExerciseDetail/exerciseTypes.types';

interface FavoriteExerciseContextType {
  favoriteExercises: Exercise[];
  addToFavorites: (exercise: Exercise) => void;
  removeFromFavorites: (exerciseId: string) => void;
}

interface FavoriteExerciseProviderProps {
  children: React.ReactNode;
}

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
