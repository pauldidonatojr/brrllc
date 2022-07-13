import React from 'react'
import { Hero, Featured,  Filler, Services, Article } from '../components'
const HomePage = () => {
 return (
  <main>
   <Hero />
   {/* <Featured /> */}
   <Services />
   <Filler />
   <Article />
  </main>
 )
}

export default HomePage
