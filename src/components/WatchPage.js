import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY } from "../utils/Config";
import CommentsContainer from "./CommentsContainer";
import HoverData from "./HoverData";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //console.log(videoId);
  const [videoData, setVideoData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&maxResults=50&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    //console.log(json.items[0].snippet);
    setVideoData(json.items[0].snippet);
  };

  const showDataHandler = () => {
    setShowData(!showData);
  };

  //console.log(showData);

  return (
    <div className="px-5 w-[81.5rem] ml-1 mb-2 shadow-lg">
      <div className="flex flex-row bg-gray-100">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="bg-gray-100">
          <h1 className="p-2">Hello</h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold py-3 text-xl">
          {videoData?.localized?.title}
        </h1>
        {showData ? (
          <h3 className="py-3 text-sm w-[67.5%] rounded-lg shadow-lg bg-gray-200 p-3 mb-3">
            {videoData?.localized?.description}
            <button className="font-bold" onClick={() => showDataHandler()}>
              {showData ? "ShowLess" : "ShowMore"}
            </button>
          </h3>
        ) : (
          <h3 className="py-3 text-sm w-[67.5%] rounded-lg shadow-lg bg-gray-200 p-3 mb-3">
            {videoData?.localized?.description.length > 500 &&
              videoData?.localized?.description.slice(0, 500) + "..."}
            <button className="font-bold" onClick={() => showDataHandler()}>
              {showData ? "ShowLess" : "ShowMore"}
            </button>
          </h3>
        )}
        {/* <h3 className="py-3 text-sm w-2/3">{videoData?.localized?.description}</h3> */}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
