import { useParams } from "react-router-dom"
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string[];
  stock: number;
  categoryId: number;

}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const
type Size = (typeof SIZES)[number]


function Product() {
  const [product, setProduct] = useState<ProductProps>();
  const [selectedSize, setSelectedSize] = useState<Size>("XS");
  const params = useParams();
  console.log(params.productId);


  useEffect(() => {


    const fetchData = async () => {

      try {

        const response = await axios.get(`http://localhost:3000/product/products/${params.productId}`)
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Header bgColor="white" />
      <div className="conatiner mx-auto px-4 py-8 lg:pt-32 pt-16 lg:w-3/5">
        <div className="grid grid-8 lg:grid-cols-2 gap-5">
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {product?.imageUrl.map((url, index) => (
              <div key={index} className="aspect-[3/4] relative">
                <img src={url} className="object-cover" />
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <Carousel>
              <CarouselContent>
                {
                  product?.imageUrl.map((url, index) => (
                    <CarouselItem key={index}>
                      <div>
                        <img src={url} />
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-xl font-medium">{product?.name}</h1>
              <p className="text-base mt-2">₹ {product?.price}.00</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Size: {selectedSize}</span>
                <button className="text-sm underline">Size guide</button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {SIZES.map((size) => (
                  <Button variant={selectedSize == size ? "default" : "outline"} onClick={() => setSelectedSize(size)} className="w-full">{size}</Button>
                ))}
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-neutra-100 text-black hover:bg-neutral-200">Add To Bag</Button>
                <Button className="w-full bg-[#3A0F08] hover:bg-[#2A0B06]">Buy It Now</Button>
              </div>

              <div className="space-y-2 text-sm mt-5">
                <p>We recover 1kg of plastic with every order placed.</p>
                <p>Free shipping over ₹ 4,000.</p>
                <p>
                  <span className="underline cursor-pointer">Pick it up</span> in Kota for free.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger>DESCRIPTION</AccordionTrigger>
                  <AccordionContent>{product?.description}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="size">
                  <AccordionTrigger>SIZE & FIT</AccordionTrigger>
                  <AccordionContent>True to size. Model is wearing size XS.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="fabric">
                  <AccordionTrigger>FABRIC & CARE</AccordionTrigger>
                  <AccordionContent>Hand wash cold. Do not bleach. Line dry in shade.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="planet">
                  <AccordionTrigger>PLANET</AccordionTrigger>
                  <AccordionContent>Sustainably made with eco-friendly materials.</AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Product