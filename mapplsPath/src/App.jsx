import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapplsDirectionApp from './mapple.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MapplsDirectionApp /> */}
      <MapplsDirectionApp />
    </>
  )
}

export default App
