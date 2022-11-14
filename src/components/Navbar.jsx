import React, { useState } from "react";
import { Logo, Hamburger } from '../assets'
import { NavLink } from 'react-router-dom'
import Wallet from "./Wallet";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showWallet, setShowWallet] = useState(false);

  return (
    <div className="z-40">  
      <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between py-5 bg-white">
        <div className="container w-11/12 lg:w-11/12 mx-auto flex flex-wrap items-center justify-between">

          <div className="w-full relative flex items-center gap-2 justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/' className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase">
              <img src={Logo} className='w-44' alt="" />
            </NavLink>

            <div className="flex justify-between items-center">
              <button
                className="text-white cursor-pointer text-sm lg:text-xl leading-none lg:px-3 py-1 w-[60px] border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <img src={Hamburger} alt="" />
              </button>
            </div>

          </div>

          <div className={"lg:flex justify-between gap-4" + (navbarOpen ? " flex flex-col gap-5 mt-5" : " hidden")}
            id="example-navbar-danger"
          >
              <ul className="flex flex-col items-start lg:flex-row lg:items-center gap-5 list-none lg:ml-auto">
                <li className="nav-item">
                  <NavLink to='/' className="text-black hover:opacity-75">
                    <span className="ml-2">Home</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to='/place-to-stay' className="text-black hover:opacity-75" href="#whychooseus">
                    <span className="ml-2">Place to stay</span>
                  </NavLink>
                </li>

                  <li className="nav-item">
                    <a className="text-black hover:opacity-75" href="#nft">
                      <span className="ml-2">NFTs</span>
                    </a>
                  </li>

                <li className="nav-item">
                  <a className="text-black hover:opacity-75" href="#community">
                    <span className="ml-2">Community</span>
                  </a>
                </li>

                <li className="nav-item">
                  <button 
                    className="lg:block bg-primary-500 py-2 px-7 rounded-lg outline-none"
                    onClick={() => setShowWallet(true)}
                  >
                    <span className="text-white">Connect wallet</span>
                  </button>
                </li>
              </ul>        
          </div>


        </div>
      </nav>

      {showWallet ? <Wallet setShowWallet={setShowWallet} /> : null}
    </div>
  )
}

export default Navbar