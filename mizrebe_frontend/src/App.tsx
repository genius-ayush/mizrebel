import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './components/Landing'
import Shop from './components/Shop'

function App() {

  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collection/:id" element={<Shop />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
