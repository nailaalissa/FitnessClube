
import { useParams } from 'react-router-dom';
import { ExerciseDetail } from './exerciseTypes.types';
import useFetch from "../../hooks/use-fetch";
import Htext from '../../shared/Htext';
import BodyPartImage from '../../../assets/body.png';
import TargetImage from '../../../assets/waist.png';
import EquipmentImage from '../../../assets/abs.png';
// import Video from '../VideosDetails/Video';
// import { useEffect, useState } from "react";
// import { VideoData} from '../VideosDetails/Video.types';

export default function Exercise() {
  // const [exerciseName, setExerciseName] = useState('');
  // const [videos, setVideos] = useState<VideoData[] | null>(null);
  const { id } = useParams();
  // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise/';
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  const { data, isLoading, isError, error } = useFetch<ExerciseDetail>(
    url, import.meta.env.VITE_APP_RAPID_API_KEY, import.meta.env.VITE_APP_RAPID_HOST_EXERCISES
  );
 
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
// console.log(data?.bodyPart,data?.target,data?.equipment)
  // const fetchVideo = async (exerciseName: string) => {
  //   try {
  //     const response = await fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName} exercise`, {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
  //         'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_HOST_VIDEOS
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const responseData = await response.json();
  //   // console.log(responseData.contents); 
  //     setVideos(responseData.contents)
  //   } catch (error) {
  //     console.error('Error fetching video data:', error);
  //   }
  // };
  // useEffect(() => {
  //   if (data && data.name) {
  //     setExerciseName(data.name)
  //     fetchVideo(data.name); 
  //     // console.log(videos)
  //   }
    
  // }, [data]);
  return (
    <div style={{  marginTop: '6rem' }}>
  

      {isLoading && <p>Loading...</p>}
			{isError && <p>{error?.message}</p>}
     
 
      {data && (

        <div className='datail'>
         <Htext >Exercise <span className='text-start' style={{ textTransform: 'capitalize' }}>{data.name}</span> </Htext>
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
      
{/*       
      {videos && videos.map((item: VideoData) => (
       <div>
       <h2>Exercise ID: {exerciseName}</h2>
       <h3>{item.title}</h3>
       <p>Channel: {item.channelName}</p>
      <p>Description: {item.description}</p>
       <p>Published Time: {item.publishedTimeText}</p>
   
       <a href={`https://www.youtube.com/watch?v=${item.videoId}&ab_channel=${item.channelId}`} target="_blank" rel="noopener noreferrer">Watch Video</a>
    
        <Video
          key={item.channelId}
          exerciseName={exerciseName}
          title={item.title} 
          channelName={item.channelName}
          // description={item.description}
          // publishedTimeText={item.publishedTimeText}
          videoId={item.videoId}
          channelId={item.channelId}
          />
           </div>
))} */}
 
    </div>
  );
}
