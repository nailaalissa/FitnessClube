
import { VideoData } from './Video.types';



export default function Video({channelId,exerciseName,title, channelName,description, publishedTimeText,videoId}:VideoData) {


  const url = `https://www.youtube.com/watch?v=${videoId}&ab_channel=${channelId}`;
  // https://www.youtube.com/watch?v=y_SSnkLy22w&ab_channel=FITTADDICTinc.
  // const query=`https://www.youtube.com/results?search_query=${videoId}`

  return (
    <div>
    <h2>Exercise ID: {exerciseName}</h2>
    <h3>{title}</h3>
    <p>Channel: {channelName}</p>
    {description && <p>Description: {description}</p>}
    <p>Published Time: {publishedTimeText}</p>

    <a href={url} target="_blank" rel="noopener noreferrer">Watch Video</a>
  </div>
  );
}