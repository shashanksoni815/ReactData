import { useState } from 'react'
import './App.css'
import NavBar from './LandingPage/NavBar'
import Hero from './LandingPage/Hero'
import PayStrip from './LandingPage/PayStrip'
import SaveCard from './LandingPage/SaveCard'
import SaveTime from './LandingPage/SaveTime'


function App() {

  return (
    <>
    <div className=" bg-lime-300">
      <NavBar />
      <Hero />
      <PayStrip />

      <SaveTime />
    </div>
    </>
  )
}

export default App
