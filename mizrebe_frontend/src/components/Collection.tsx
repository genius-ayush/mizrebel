import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Card } from "./ui/card";

interface ProductProps {
  id: number;
  description: string;
  imageUrl: string[];
  name: string;
  price: number;
}


const categories = [
  { id: "4", name: "New Arrivals" },
  { id: "5", name: "Dresses" },
  { id: "6", name: "Tops" },
  { id: "7", name: "Bestsellers" },
  { id: "9", name: "Shop All" },
];




function Collection() {
  const navigate = useNavigate() ; 
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { id } = useParams();

  const category = categories.find((cat) => cat.id == id);

  const handleCardClick = (productId : number)=>{
    navigate(`/collection/${id}/${productId}`)
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend.mizrebel.com/collections/collections/${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full pt-20">
      <div className="text-center p-5 font-semibold text-[#410606] text-xl">
        {category?.name}
      </div>

      <div className="grid gap-2 w-full pl-2 pr-2 md:w-3/5 mx-auto grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="rounded-none w-full max-w-[300px] mb-12 border-none shadow-none" onClick={()=>{ handleCardClick(product.id)}}>
            <img src={product.imageUrl[0]} alt={product.name} className="w-full h-auto shadow-md" />
            <div className="p-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">{product.name}</div>
                <div className="cursor-pointer"><ShoppingCart size={18} /></div>
              </div>
              <div className="text-sm font-semibold">₹ {product.price}.00</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Collection;