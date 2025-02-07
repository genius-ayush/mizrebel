import { useParams } from "react-router-dom"
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

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
      <div className="conatiner mx-auto px-4 py-8 lg:pt-32 pt-16">
        <div className="grid grid-8 lg:grid-cols-2">
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold">{product?.name}</h1>
              <p className="text-xl mt-2">₹ {product?.price}.00</p>
            </div>

            <div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Product