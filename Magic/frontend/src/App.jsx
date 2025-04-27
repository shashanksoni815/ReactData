import './App.css'
import Questions from './Components/Questions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Display/Home/Home'
import Age from './Display/Age/age'
import Calender from './Display/Calendars/Calendars'
import MixtuerAlligation from './Display/Mixture-Alligation/Mixture-Alligation'
import PermutationCombination from './Display/Permutation-Combination/PermutationCombination'
import PipesCisterns from './Display/Pipes-Cisterns/Pipes-Cisterns'
import ProfitLoss from './Display/Profit-Loss/Profit-Loss'
import SpeedDistanceTime from './Display/Speed-Distance-Time/Speed-Distance-Time'
import SimpleInterest from './Display/Simple-Interest/SimpleInterest'
import Navbar from './Display/Navbar/Navbar'
import Random from './Display/Random/Random'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/age' element={<Age />} />
          <Route path='/calenders' element={<Calender />} />
          <Route path='/mixtureAlligation' element={<MixtuerAlligation />} />
          <Route path='/permutationCombination' element={<PermutationCombination />} />
          <Route path='/pipesCiserns' element={<PipesCisterns />} />
          <Route path='/profitLoss' element={<ProfitLoss />} />
          <Route path='/simpleInterst' element={<SimpleInterest />} />
          <Route path='/speedDistanceTime' element={<SpeedDistanceTime />} />
          <Route path='/random' element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
