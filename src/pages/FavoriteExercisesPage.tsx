
import { useFavoriteExercise } from '../components/hooks/useFavoriteExercise';
import ExerciseCard from "../components/Exercise/ExerciseDetail/ExerciseCard";
import Htext from '../components/shared/Htext';
const FavoriteExercisesPage= () => {
  const { favoriteExercises } = useFavoriteExercise();

  return (
    <div style={ {marginTop:'6rem',marginBottom:'4rem', minHeight:'90vh'}}>
    <Htext> Favorite Exercises </Htext>
      <div className='favorit-Exercise'>
              {favoriteExercises ? (
          favoriteExercises.length > 0 ? (
            favoriteExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} name={exercise.name} gifUrl={exercise.gifUrl} bodyPart={exercise.bodyPart} target={exercise.target} id={exercise.id} />
            ))
          ) : (
            <span>There are no favorite exercises selected.</span>
          )
        ) : (
          <span>Loading...</span>
        )}
      </div>
      </div>
  );
};

export default FavoriteExercisesPage;
