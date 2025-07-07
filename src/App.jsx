
import { Route, Routes } from 'react-router-dom'
import Day1 from './components/day1'
import Day2 from './components/day2'
import Day3 from './components/Wheather'

function App() {

  return (
      <Routes>
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
    </Routes>
  )
}

export default App
