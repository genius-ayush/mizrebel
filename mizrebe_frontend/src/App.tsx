
import './App.css'
import BestSellers from './components/BestSellers'
import Categories from './components/Categories'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TopProducts from './components/TopProducts'

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <TopProducts/>
      <Categories/>
      <Features/>
      <BestSellers/>
      <Footer/>
    </div>
  )
}

export default App
