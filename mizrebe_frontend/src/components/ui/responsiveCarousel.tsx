"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/whiteDress.webp",
  "/blackDress.jpg",
  "/blackAndWhite.webp",
];

export default function ResponsiveCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <Carousel
      ref={emblaRef}
      className="w-full mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4 w-full">
        {images.map((src, index) => (
          <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
            <div className="p-1 flex justify-center">
              <img
                src={src || "/placeholder.svg"}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-auto aspect-[4/5] object-cover  shadow-lg"
              />
            </div>
            <div className="text-center">Shot sets</div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
