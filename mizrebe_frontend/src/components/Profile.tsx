
import { useEffect, useState } from 'react';
import Header from './Header'
import axios from 'axios';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button';
import { Input } from './ui/input';

interface userProps{
    name : string ;
    email : string ; 
    passwordHash : string ; 
    orders : string[] ; 
    cart : string[] ; 
}

function Profile() {

    const token = localStorage.getItem("token");
    const [user , setUser] = useState<userProps>() ;
    const [isEditingUserInfo , setIsEditingUserInfo] = useState(false) ;  
    const [isEditingAddress , setIsEditingAddress] = useState(false) ; 
    const [name , setName] = useState("") ; 
    const [email , setEmail] = useState("") ; 
    const [password , setPassword] = useState("") ;
    const [address , setAddress] = useState("") ; 

    const handleSave = ()=>{
        setIsEditingUserInfo(false) ; 
        setIsEditingAddress(false) ; 
    }

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get("http://localhost:3000/user/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })

                console.log(response.data);
                setUser(response.data) ; 
            } catch (error) {
                console.error("Error")
            }

        }

        fetchData();
    }, [])



    return (
        <>
            <Header bgColor='' />
            <div className=' pt-32 text-center text-xl font-medium'>Welcome Ayush</div>
            <div className='lg:w-2/5 mx-auto h-96 mt-10 pl-5 pr-5'>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-lg'>User Information</AccordionTrigger>
                    <AccordionContent className='pl-3'>
                        {
                            isEditingUserInfo ? (
                                <div>
                                    <Input type='text' value={name} onChange={(e)=> setName(e.target.value)} className='mb-2'/>
                                    <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='mb-2'/>
                                    <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='mb-2'/>
                                    <Button onClick={handleSave}>Save</Button>
                                </div>
                            ) : (
                                <div className=''>
                                    <div>Username: <span>{user?.name}</span></div>
                                    <div>Email: <span>{user?.email}</span></div>
                                    <div>Password: <span>{user?.passwordHash}</span></div>
                                    {/* <Button onClick={()=> setIsEditingUserInfo(true)} className='mt-2'>Edit</Button> */}
                                </div>
                            )
                        }
                        
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-lg'>Delivery Address</AccordionTrigger>
                    <AccordionContent>
                    {
                            isEditingAddress ? (
                                <div>
                                    <Input type='text' value={address} onChange={(e)=> setAddress(e.target.value)} className='mb-2'/>
                                    <Button onClick={handleSave}>Save</Button>
                                </div>
                            ) : (
                                <div className=''>
                                    <div>Address: <span>E-10 staff coloney Maral Overseas Ltd</span></div>
                                    {/* <Button onClick={()=> setIsEditingAddress(true)} className='mt-2'>Edit</Button> */}
                                </div>
                            )
                        }
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-lg'>Your Cart</AccordionTrigger>
                    <AccordionContent>
                        Coming soon...
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-lg'>Your Orders</AccordionTrigger>
                    <AccordionContent>
                        Comming soon...
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </>
    )
}

export default Profile