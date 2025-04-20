import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom'
import './App.css'
import Home from './template/Home'
import SaveData from './template/SaveData'

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route path='/' element={<Home />} />
          {/* <Route path='/' element={} /> */}
        </Routes>
      </Router>
     
    </>
  )
}

export default App
      
 {/* <SaveData /> */}