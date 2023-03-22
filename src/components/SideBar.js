import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    //console.log(isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 mb-2 h-[645px]">
        <ul className='pb-3 px-2 py-3 font-semibold'>
            <li><Link to='/'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <hr></hr>
        <ul className='pt-3 pb-3 px-2 py-2 font-semibold'>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <hr></hr>
        <ul className='pt-3 pb-3 px-2 py-2 font-semibold'>

            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
        </ul>
        <hr></hr>
        <ul className='pt-3 px-2 py-2 font-semibold'>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>
    </div>
  )
}

export default SideBar