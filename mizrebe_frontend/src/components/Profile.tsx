
import { useEffect } from 'react';
import Header from './Header'
import axios from 'axios';
function Profile() {

    const token = localStorage.getItem("token") ; 

    useEffect(()=>{
        
        const fetchData = async()=>{

            try{
                const response = await axios.get("http://localhost:3000/user/users" , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })

                console.log(response.data); 
            }catch(error){
                console.error("Error")
            }
            
        }

        fetchData(); 
    } , [])


    
  return (
    <>
        <Header bgColor=''/>
        <div className='h-screen pt-32 text-center'>Profile</div>
    </>
  )
}

export default Profile