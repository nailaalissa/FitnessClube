
import { Link, useParams } from 'react-router-dom';
import { ExerciseDetail } from './exerciseTypes.types';
import useFetch from "../../hooks/use-fetch";
import Htext from '../../shared/Htext';
import BodyPartImage from '../../../assets/body.png';
import TargetImage from '../../../assets/waist.png';
import EquipmentImage from '../../../assets/abs.png';
import VideoResult from '../VideosDetails/VideoResult';
import { useFavoriteExercise } from '../../hooks/FavoriteExercise/useFavoriteExercise';
import { useCallback } from 'react';


export default function Exercise() {
  const { addToFavorites, favoriteExercises, removeFromFavorites } = useFavoriteExercise();
  const { id } = useParams();
  const isFavorite = id && favoriteExercises.some((exercise) => exercise.id === id); 
  
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  const { data, isLoading, isError, error } = useFetch<ExerciseDetail>(
    url, '1c44fe7385msh55db4b5cd2cb225p1cf174jsn7031d59e710c', 'exercisedb.p.rapidapi.com'
  );
  const handleAddToFavorites = useCallback(() => {
    if (id  && data) {
      if (isFavorite) {
        removeFromFavorites(id);
      } else {
        addToFavorites({ id, name:data.name, gifUrl: data.gifUrl, bodyPart: data.bodyPart, target: data.target });
      }
    }
  }, [isFavorite, id, data, addToFavorites, removeFromFavorites]);
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: data?.bodyPart,
    },
    {
      icon: TargetImage,
      name: data?.target,
    },
    {
      icon: EquipmentImage,
      name: data?.equipment,
    },
  ];

  return (
    <div style={{  marginTop: '6rem', minHeight:'90vh' }}>
  

     {isLoading && <p>Loading...</p>}
			{isError && !data && <p style={{ textAlign: 'center', margin: '3rem', fontSize: '1.3rem', color: 'red' }}> error... No data available ...{error?.message}</p>}
     
 
      {data && (

        <div className='datail'>
         <Htext >Exercise <span className='text-start' style={{ textTransform: 'capitalize' }}>{data.name}</span> </Htext>
        
          <Link to={`/exercises`} className='back'> <i className="fas fa-backward"> </i>  Back</Link>
          <div className="favorit-card">
            <span className={isFavorite ? 'remove' : 'add'}  onClick={(e) => {
    e.preventDefault(); 
    handleAddToFavorites();
  }}>❤</span>
          </div>
          <div className='container-detail'>
            
          <div className='left-side'>
            <img src={data.gifUrl} alt={data.bodyPart} />
          </div>
          <div className='right-side'>
         
          <div className='detail-text' >
         <h3>  Exercise guide for {' '}
            <span className='capitalize'>
               {  data.name}.
            </span><br /></h3> 
         <p>This exercise targets the <span className='capitalize'>{data.target}</span> and is specifically designed to strengthen and tone your <span className='capitalize'>{data.bodyPart}</span>. 
          It also engages secondary muscles like <span className='capitalize' >{data.secondaryMuscles.join(', ')}</span>, providing a comprehensive workout. 
          Make sure to use the correct <span className='capitalize'>{data.equipment}</span> for optimal results.</p> 
          </div>
        
          <div className='detail-icon'>
            {extraDetail?.map((item, index) => (
                  <div key={index} className='extra-details'>
                    <img src={item.icon} alt={item.name} />
                    <p >{item.name}</p>
                  </div>
                ))}
          </div>
          
          </div>
           
           
          
          </div>  
              
          
          <div className='instructions'>
          <p>Follow the instructions below to perform this exercise effectively:</p> <br />
            <h1> Instructions</h1>
          <ul>
            {data.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          </div>   
     
          <p>
            Don't forget to watch the accompanying videos to see the exercise in action and understand the correct form and technique.
      </p>
                </div>
      )}

      {data &&  <VideoResult exerciseName={data.name} />}
     
     
    </div>
  );
}
