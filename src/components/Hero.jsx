import React from 'react'
import { HeroImg } from '../assets'

const Hero = () => {
  return (
    <div>
        <div className="w-11/12 mx-auto mt-32 flex flex-col gap-8 lg:grid grid-cols-2 items-center lg:w-11/12 lg:mx-auto">
            <div className="w-11/12">
                <h1 className="font-medium text-[35px] md:text-5xl text-black-100 md:leading-[60px]">Rent a <span className='text-primary-500'>Place</span> away from <span className='text-primary-500'>Home</span> in the <span className='text-primary-500'>Metaverse</span></h1>

                <p className="w-[96%] my-5 lg:my-8 text-xl text">
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>

                <div className="w-full md:w-11/12 border h-[43px] rounded-lg z-[-1] relative">
                    <input className='w-full h-full rounded-l-lg px-2 outline-none' type="text" placeholder='Search for location' />
                    <button className="bg-primary-500 px-7 md:px-14 text-white text-sm absolute rounded-r-lg right-0 h-full">Search</button>
                </div>

            </div>

            <div className="flex justify-center w-10/12 mx-auto">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero