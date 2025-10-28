import { useState } from 'react'
import './App.css'
import UI from './Components/UI'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UI /> */}
    <Home />
    </>
  )
}

export default App
