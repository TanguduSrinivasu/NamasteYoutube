import React from 'react'
import HoverData from './HoverData';

const VideoCard = ({info}) => {
    
  //console.log(info);
  const {snippet, statistics} = info;
  const {title, thumbnails, channelTitle} = snippet;
 
  return (
    // <div className='p-2 m-2 w-72 rounded-lg shadow-lg hover:scale-110 duration-300 h-80'>
    //   <img className='rounded-lg' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url} />
    //   <ul>
    //     <li className='font-bold py-2'>{info?.snippet?.title}</li>
    //     <li>{info?.snippet?.channelTitle}</li>
    //     <li>{info?.statistics?.viewCount} Views</li>
    //   </ul>
    // </div>
    <div className='p-3 m-3 w-72 rounded-lg shadow-lg h-72'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul>
        {/* <li className='font-bold py-2'>{title.length > 28 ? title.slice(0,28)+'..' : title}</li> */}
        <li className='font-bold py-2'><HoverData text={title.length > 30 && title.slice(0,30)+'..'} data={title} /></li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard