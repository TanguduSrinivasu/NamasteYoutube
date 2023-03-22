import React from 'react'

const ShimmerSearchVideoCard = () => {
  return (
    <div className="flex flex-wrap justify-start pl-7 w-[82rem] ml-1 shadow-lg mb-2">
      {Array(50)
        .fill()
        .map((e, index) => (
          <div key={index} className="flex flex-row p-3 mb-6 rounded-lg shadow-lg w-[78rem] h-[12.5rem]">
            <div className='rounded-lg mr-3 shadow-lg w-64'></div>
            <div className="w-[59rem] ml-3 pl-3 rounded-lg shadow-lg"></div>
          </div>
        ))}
    </div>
  )
}

export default ShimmerSearchVideoCard;