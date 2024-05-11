export interface VideoThumbnail {
  height?: number;
  url: string;
  width?: number;
}



export interface VideoData {
  exerciseName: string;
  channelId?: string;
  channelName: string;
  description?: string;
  lengthText?: string;
  publishedTimeText?: string;
  thumbnails?: VideoThumbnail[];
  title: string;
  videoId: string;
  viewCountText?: string;
}

export interface VideoResponse {
  contents?: VideoData[];
  estimatedResults?: string;
  next?: string;
}
