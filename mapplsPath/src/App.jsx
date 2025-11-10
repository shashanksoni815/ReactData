import { useState } from 'react'
import './App.css'
import NavBar from './LandingPage/NavBar'
import Hero from './LandingPage/Hero'
import PayStrip from './LandingPage/PayStrip'


function App() {

  return (
    <>
    <div className=" bg-lime-300">
      <NavBar />
      <Hero />
      {/* <PayStrip /> */}
    </div>
    </>
  )
}

export default App
