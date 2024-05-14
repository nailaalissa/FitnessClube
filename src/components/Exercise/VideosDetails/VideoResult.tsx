import { useEffect, useState } from "react";
import { VideoData, VideoItem } from '../VideosDetails/Video.types';
import useFetch from "../../hooks/use-fetch";
import '../exercise.css'
export default function VideoResult({ exerciseName }: { exerciseName: string }) {
  const [videos, setVideos] = useState<VideoData[] | null>(null);
  const { data } = useFetch<{ contents?: VideoItem[] }>( 
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName}exercise`,
    '3dad8895d7mshdc18f9f812fc78bp1856b0jsna7e1282f969d',
    'youtube-search-and-download.p.rapidapi.com'
  );

  useEffect(() => {
    if (data && data.contents) {
      // Extract video data from contents array
      const extractedVideos = data.contents
        .filter(item => item.video && item.video.thumbnails && item.video.thumbnails.length > 0)
        .map(item => item.video as VideoData);
      setVideos(extractedVideos.slice(0, 4));
    }
  }, [data]);

  return (
    <div>
      {/* Display videos */}
      <div className="container" style={{ display:'flex',flexDirection:'column', gap:'1rem'}}>
      {videos?.map(video => (
        <div key={video.videoId} className="video">
          <h3 className="videoTitle">{video.title}</h3>

         <div>
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
              <div>
                
          {video.thumbnails && video.thumbnails.length > 0 && (
            <img
              src={video.thumbnails[0].url} 
              alt={video.title}
              style={{ width: 100, height: 100 }} 
            />
          )}
          </div>
            </a>
            </div>
            <div className="divider"></div>
        </div>
      ))}</div>
    </div>
  );
}
