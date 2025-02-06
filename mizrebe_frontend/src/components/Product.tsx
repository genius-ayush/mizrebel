import { useParams } from "react-router-dom"
import Header from "./Header";
import { useEffect, useState } from "react";



function Product() {
    const [product , setProduct] = useState([]) ; 
    const params = useParams() ; 
    console.log(params) ; 

    useEffect(()=>{

        const fetchData = ()=>{
            
        }
    } , [])

  return (
    <>
    <Header bgColor="white"/>
    <div className="w-full h-screen pt-32 md:pt:16 text-center">Product</div>
    </>
  )
}

export default Product