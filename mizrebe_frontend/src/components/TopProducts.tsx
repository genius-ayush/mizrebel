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
      className="w-3/4 "
    >
      <CarouselContent>
        
          <CarouselItem  className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <img src="AddisonSet.webp"/>
            </div>
          </CarouselItem>

         <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="ArubaTop.webp"/>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="BlairTop.webp"/>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="InaDress.webp"/>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="KimberlyTop.webp"/>
            </div>
          </CarouselItem>

          <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="KimberlyTop2.webp"/>
            </div>
          </CarouselItem> 

          <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <img src="RosaDress.webp"/>
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