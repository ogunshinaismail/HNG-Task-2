import React from 'react'
import { FilterIcon } from '../assets'

const Filter = () => {
  return (
    <div className='w-11/12 flex flex-wrap gap-4 justify-center items-center lg:justify-between mt-40'>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Resturant</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Cottage</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Castle</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>fantast city</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>beach</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Carbins</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Off-grid</a>
        <a href='#' className='cursor-pointer hover:text-primary-500'>Farm</a>
        <div className="flex border border-gray-200 py-2 px-3 rounded-lg gap-6 items-center cursor-pointer hover:text-primary-500 hover:border-primary-500">
            <p>Location</p>
            <img src={FilterIcon} alt="" />
        </div>
    </div>
  )
}

export default Filter