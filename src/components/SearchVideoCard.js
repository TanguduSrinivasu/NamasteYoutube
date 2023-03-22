import React from "react";
import HoverData from "./HoverData";

const SearchVideoCard = ({ info }) => {
  console.log(info);
  const { snippet } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    // <div className='p-2 m-2 w-72 rounded-lg shadow-lg hover:scale-110 duration-300 h-80'>
    //   <img className='rounded-lg' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url} />
    //   <ul>
    //     <li className='font-bold py-2'>{info?.snippet?.title}</li>
    //     <li>{info?.snippet?.channelTitle}</li>
    //     <li>{info?.statistics?.viewCount} Views</li>
    //   </ul>
    // </div>
    <div className="flex flex-row p-3 mb-6 rounded-lg shadow-lg w-[78rem]">
      <img
        className="rounded-lg mr-3"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="w-[59rem] ml-3 pl-3 rounded-lg">
        {/* <li className='font-bold py-2' >{title.length > 28 ? title.slice(0,28)+'...' : title}</li> */}
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li className="mt-2">{snippet?.description}</li>
      </ul>
    </div>
  );
};

export default SearchVideoCard;
