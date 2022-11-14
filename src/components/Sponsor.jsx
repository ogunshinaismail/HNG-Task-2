import React from 'react'
import { MbToken, OpenSea, MetaMask } from '../assets'

const Sponsor = () => {
  return (
    <div className='my-12 bg-primary-500'>
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-wrap gap-4 justify-evenly md:flex-row lg:justify-between items-center py-3">
            <img src={MbToken} className='w-40' alt="" />
            <img src={MetaMask} className='w-40' alt="" />
            <img src={OpenSea} className='w-40' alt="" />
        </div>
    </div>
  )
}

export default Sponsor