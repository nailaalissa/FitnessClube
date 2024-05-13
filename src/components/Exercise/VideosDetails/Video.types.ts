

export interface VideoResponse {
  contents: VideoData[];
estimatedResults: string;
next: string;
 
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

export interface VideoThumbnail {
  height?: number;
  url: string;
  width?: number;
}

export interface VideoItem {
  video?: VideoData;
  // channel?: ChannelData;
}
