  
import { useMemo } from 'react';
import ExerciseCard from '../components/Exercise/ExerciseDetail/ExerciseCard';
import { Exercise } from '../components/Exercise/ExerciseDetail/exerciseTypes.types';
import useFetch from '../components/hooks/use-fetch';
import Htext from '../components/shared/Htext';

export default function ExerciseList() {
  const { data, isLoading, isError, error } = useFetch<Exercise[]>(
    `https://exercisedb.p.rapidapi.com/exercises?limit=40`,
  '8a693a8e53mshe7579073abe3371p10e94bjsnc1d0e7a6b7fe',
  'exercisedb.p.rapidapi.com'
  );
//console.log(!isError)
 

const card_component = useMemo(
  () =>
    data &&
    data.map(item => (
      <ExerciseCard
        key={item.id}
        name={item.name}
        gifUrl={item.gifUrl}
        bodyPart={item.bodyPart}
        target={item.target}
        id={item.id}
      />
    )),
  
  [data]
);

return (
    <div style={ {marginTop:'6rem',marginBottom:'4rem'}}>
    <Htext> all Exercises </Htext>
    <div className="exersice-List">

      {isLoading && <p>Loading...</p>}
			{isError && !data && <p style={{ textAlign: 'center', margin: '3rem', fontSize: '1.3rem', color: 'red' }}> error... No data available ...{error?.message}</p>}
      {card_component}
      </div>
      </div>
  );
}