  
import ExerciseCard from '../components/Exercise/ExerciseDetail/ExerciseCard';
import { Exercise } from '../components/Exercise/ExerciseDetail/exerciseTypes.types';
import useFetch from '../components/hooks/use-fetch';
import Htext from '../components/shared/Htext';

export default function ExerciseList() {
  const { data, isLoading, isError, error } = useFetch<Exercise[]>(
    `https://exercisedb.p.rapidapi.com/exercises?limit=40`,
    import.meta.env.VITE_APP_RAPID_API_KEY,
    import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
  );

 

  return (
    <div style={{ marginTop: '6rem', marginBottom: '4rem' }}>
      <Htext>All Exercises</Htext>
      <div className="exercise-List">
        {isError && <p>Error: {error?.message}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : data  ? (
          data.map(item => (
            <ExerciseCard
              key={item.id}
              name={item.name}
              gifUrl={item.gifUrl}
              bodyPart={item.bodyPart}
              target={item.target}
              id={item.id}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
