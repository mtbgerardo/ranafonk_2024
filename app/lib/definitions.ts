type High = {
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  
type Snippet = {
    channelId: string;
    title: string;
    description: string;
    thumbnails: High;
    channelTitle: string;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
    playlistId: string;
    resourceId: {
        kind: string;
        videoId: string;
    };
};
  
export type Data = {
    id: string;
    snippet: Snippet;
};

export type Portfolio = {
    id: number
    icon: string;
    title: string;
    opacity: string;
    content: string;
    img: string;
    is: string;
}