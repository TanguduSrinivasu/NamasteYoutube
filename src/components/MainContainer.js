import React from 'react';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='shadow-lg w-[81.7rem] ml-1 mb-2'>
        <ButtonList/>
        <VideoContainer/>
        {/* <h1 className='text-3xl'>Welcome to Namaste</h1> */}
    </div>
  )
}

export default MainContainer