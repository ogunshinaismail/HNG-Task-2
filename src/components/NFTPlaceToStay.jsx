import React from 'react'
import data from '../data/data'

const NFTPlaceToStay = () => {
  return (
    <div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-12">
    {data.map( (data) =>  (
      <div className='border berder-gray rounded-xl p-4 flex flex-col' key={data.id}>
        <div>
          <img src={data.img} className='w-full' alt="" />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">{data.name}</p>
            <p className="text-sm font-bold">{data.price}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-[13px]">{data.location}</p>
            <p className="text-[13px]">{data.availability}</p>
          </div>
          <img src={data.rating} className='w-24 mt-2' alt="" />
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}

export default NFTPlaceToStay