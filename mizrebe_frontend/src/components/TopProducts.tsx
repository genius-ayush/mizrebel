import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// import { Card, CardContent } from "@/components/ui/card"

function TopProducts() {
  return (
    <div className="flex justify-center mt-10">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-3/4 md:w-full"
    >
      <CarouselContent >
        
          <CarouselItem  className="md:basis-1/3 lg:basis-1/5 ">
            <div className="p-1">
              <img src="/AddisonSet.webp"/>
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