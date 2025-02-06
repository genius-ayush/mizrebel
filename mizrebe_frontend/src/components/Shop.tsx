import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

interface productProps{
  id: number ; 
  description : string ;
  imageUrl : string[] ; 
  name : string ; 
  price : number ;
}
function Shop() {

  const [products , setProducts] = useState<productProps[]>([]) ;
  const {id} = useParams() ;
  console.log(id) ; 
  
  useEffect( ()=>{

    const fetchData = async()=>{
      try{

        const response = await axios.get(`http://localhost:3000/collections/collections/${id}`)
        console.log(response.data) ;
      }catch(error){
        console.error("effror fetching data" , error) ;
      }

       
    }

    fetchData() ;
  } , [])

  return (
    <>
    <Header/>
    <div className="w-full h-screen">Shop</div>
    <Footer/>
    </>
  )
}

export default Shop