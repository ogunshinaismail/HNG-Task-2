import React from 'react'
import { CommunityImg } from '../assets'

const Community = () => {
  return (
    <div className='bg-primary-500 py-14 lg:py-10' id='community'>
        <div className="w-11/12 mx-auto grid md:grid-cols-2 items-center ">
            <div className='w-10/12 text-white flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>Metabnb NFTs</h1>
                <p className='w-9/12 leading-9'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className='bg-white w-[150px] px-5 py-2 mt-6 text-primary-500 rounded-lg'>Learn More</button>
            </div>
            <img src={CommunityImg} alt="" />
        </div>
    </div>
  )
}

export default Community