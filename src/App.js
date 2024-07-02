import './App.css'
import '../src/Components/Navbar/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import BmiCalculator from './Pages/bmiCalculator'
import CalorieTracker from './Pages/CalorieTracker'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmiCalculator" element={<BmiCalculator />} />
          <Route path="/CalorieTracker" element={<CalorieTracker />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
