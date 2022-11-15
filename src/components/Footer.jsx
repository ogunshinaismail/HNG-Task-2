import React from 'react'
import { LogoWhite, Facebook, Instagram, Twitter } from '../assets'

const Footer = () => {
  return (
    <div className='bg-secondary-500 pt-10 pb-4 text-white'>
        <div className="grid lg:grid-cols-4 gap-9 md:grid-cols-2 lg:gap-2 w-11/12 mx-auto">
            <div className='flex flex-col gap-7 md:w-6/12 md:mx-auto lg:justify-between'>
                <img src={LogoWhite} className='w-44' alt="" />
                <div className="flex items-center gap-6 lg:mb-7">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>

            <div className='md:w-6/12 md:mx-auto'>
                <div className="flex flex-col gap-4">
                    <h4 className='font-medium'>Community</h4>
                    <a href="#" className='text-sm font-light pointer'>NFT</a>
                    <a href="#" className='text-sm font-light pointer'>Tokens</a>
                    <a href="#" className='text-sm font-light pointer'>Landlords</a>
                    <a href="#" className='text-sm font-light pointer'>Discord</a>
                </div>
            </div>

            <div className='md:w-6/12 md:mx-auto'>
                <div className="flex flex-col gap-4">
                    <h4 className='font-medium'>Places</h4>
                    <a href="#" className='text-sm font-light pointer'>Places</a>
                    <a href="#" className='text-sm font-light pointer'>Farms</a>
                    <a href="#" className='text-sm font-light pointer'>Beach</a>
                    <a href="#" className='text-sm font-light pointer'>Learn more</a>
                </div>
            </div>

            <div className='md:w-6/12 md:mx-auto'>
                <div className="flex flex-col gap-4">
                    <h4 className='font-medium'>About us</h4>
                    <a href="#" className='text-sm font-light pointer'>Road map</a>
                    <a href="#" className='text-sm font-light pointer'>Creators</a>
                    <a href="#" className='text-sm font-light pointer'>Career</a>
                    <a href="#" className='text-sm font-light pointer'>Contact us</a>
                </div>
            </div>
        </div>

        <p className="w-10/12 text-center lg:text-left mx-auto mt-8 font-light">&copy; 2022 Metabnb</p>
    </div>
  )
}

export default Footer