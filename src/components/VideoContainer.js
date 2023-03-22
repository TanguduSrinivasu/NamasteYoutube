import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_API } from "../utils/Config";
import ShimmerVideoCard from "./ShimmerVideoCard";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos, setVideos] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    getVideoData() ; 
  }, []);

  //console.log('isSearched ' + isSearched);

  const getVideoData = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items);
  };

    return  videos ? (
      <div className="flex flex-wrap justify-start pl-5 mx-3">
        {videos.map((video) => {
          return (
            <Link to={'/watch?v='+video.id} key={video.id}>
              <VideoCard  info={video} />
            </Link>
          );
        })}
        {/* <VideoCard info={videos[0]}/> */}
      </div>
    ) : <ShimmerVideoCard/>
  }
  

export default VideoContainer;
