import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import axios from "axios";
import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react";
interface ProductProps {
  id: number;
  description: string;
  imageUrl: string[];
  name: string;
  price: number;
}

function TopProducts() {
  const [products , setProducts] = useState<ProductProps[]>([]) ; 

  useEffect(()=>{

    const fetchData = async()=>{

      try{
        const response = await axios.get("http://localhost:3000/collections/collections/9")
        setProducts(response.data) ;
        console.log(products); 
      }catch(error){
        console.error("error fetching data" , error) ; 
      }
      
    }
    fetchData() ; 
  } , [])
  return (
    <div className="flex justify-center mt-10">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-3/4 md:w-full"
    >
      <CarouselContent >
        {products.map((product)=>(
          <CarouselItem  className="md:basis-1/3 lg:basis-1/5 ">
          <div className="p-1">
            <img src={product.imageUrl[0]}/>
            <div className="flex flex-col justify-start p-2">
              <div className="flex justify-between">
              <div>{product.name}</div>
              <div><ShoppingCart/></div>
              </div>
              <div>₹ {product.price}.00</div>
            </div>
          </div>
        </CarouselItem>
        ))}
          

         <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/ArubaTop.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/BlairTop.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/InaDress.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/KimberlyTop.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/KimberlyTop2.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem> 

          <CarouselItem  className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <img src="/RosaDress.webp"/>
              <div className="flex flex-col justify-start p-2">
                <div className="flex justify-between">
                <div>name</div>
                <div>cart</div>
                </div>
                <div>price</div>
              </div>
            </div>
          </CarouselItem>   
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>

  )
}

export default TopProducts