import React from 'react'
import Community from '../components/Community'
import Hero from '../components/Hero'
import NFTs from '../components/NFTs'
import Sponsor from '../components/Sponsor'

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsor />
      <NFTs />
      <Community />
    </>
  )
}

export default Home