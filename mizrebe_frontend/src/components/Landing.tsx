

import Categories from './Categories'
import Features from './Features'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import TopProducts from './TopProducts'

function Landing() {
  return (
    <div>
      <Header bgColor={""}/>
      <Hero/>
      <TopProducts/>
      <Categories/>
      <Features/>
      {/* <BestSellers/> */}
      <Footer/>
    </div>
  )
}

export default Landing