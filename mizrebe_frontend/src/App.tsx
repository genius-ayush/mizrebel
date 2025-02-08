import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './components/Landing'
import Shop from './components/Shop'
import Footer from "./components/Footer";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {

  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/collection/:id" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/collection/:id/:productId" element={<Product/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  )
}

export default App
