import React from 'react'
import { MetaMaskLogo, WalletConnect, ArrowRight } from '../assets'

const Wallet = ({ setShowWallet }) => {
  return (
    <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000078]">
            <div className="relative w-auto my-6 mx-auto">
                <div className="border-0 rounded-lg w-[400px] py-5 mx-auto lg:w-[500px] md:w-[600px] relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex px-5 pb-3 items-center justify-between border-b">
                        <p className='font-bold text-lg'>Connect Wallet</p>
                        <p 
                            className='font-bold text-lg cursor-pointer'
                            onClick={() => setShowWallet(false)}
                        >
                            X
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-11/12 mx-auto mt-7">
                        <p className="text-sm">Choose your preferred wallet:</p>
                        <button className="flex justify-between items-center border-[2px] border-gay-200 p-3 rounded-xl hover:bg-[#F8F9FA] outline-none">
                            <div className="flex items-center gap-4">
                                <img src={MetaMaskLogo} alt="" />
                                <p className='font-bold text-lg'>Metamask</p>
                            </div>
                            <img src={ArrowRight} alt="" />
                        </button>
                        <button className="flex justify-between items-center border-[2px] border-gay-200 p-3 rounded-xl hover:bg-[#F8F9FA] outline-none">
                            <div className="flex items-center gap-4">
                                <img src={WalletConnect} alt="" />
                                <p className='font-bold text-lg'>WalletConnect</p>
                            </div>
                            <img src={ArrowRight} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet