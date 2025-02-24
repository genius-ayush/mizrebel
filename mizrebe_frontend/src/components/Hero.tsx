import { Button } from "./ui/button"


function Hero() {
  return (
    <div>
      <img src="https://summeraway.in/cdn/shop/files/mbanner-.com.png" alt="heroimg" className="w-full md:object-cover md:object-[50%_10%]  
               md:h-[110vh]   "/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 mt-[5%] md:mt-[40%] sm:mt-[10%]">
    
      <p className="text-lg md:font-medium md:text-3xl sm:text-xl ">
      Discover the latest trends designed for comfort & elegance.
    </p>

    <a href="/collection/9"><Button className="bg-white  rounded-none p-5 text-[#410606]">Shop Now</Button></a>
    
  </div>
    </div>
  )
}

export default Hero


