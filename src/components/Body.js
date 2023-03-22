import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex pt-[62px] shadow-lg'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body