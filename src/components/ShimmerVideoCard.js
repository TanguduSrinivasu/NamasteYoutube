import React from 'react'

const ShimmerVideoCard = () => {
  return (
    <div className="flex flex-wrap justify-start pl-7">
      {Array(50)
        .fill()
        .map((e, index) => (
          <div key={index} className='p-3 m-3 w-72 rounded-lg shadow-lg h-72'>
            <div className='rounded-lg shadow-lg mr-3 h-36 w-[16.5rem]'></div>
            <div className='rounded-lg shadow-lg h-28'></div>
          </div>
        ))}
    </div>
  )
}

export default ShimmerVideoCard