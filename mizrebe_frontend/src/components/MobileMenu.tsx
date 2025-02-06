import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { AlignJustify, Instagram, Linkedin, Search, ShoppingCart, User, X, Youtube } from 'lucide-react'
import Logo from "./Logo"
import { useEffect, useState } from "react"
import axios from "axios"

interface categoryProps {
    id: number ; 
    name : string ; 
    createdAt : string ; 
  
  }

function MobileMenu() {
    const [categories , setCategories] = useState<categoryProps[]>([]) ; 

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const response = await axios.get("http://localhost:3000/category/categories") ; 
                setCategories(response.data) ; 
                console.log(categories)
            }catch(error){  
                console.error("error fetching data") ; 
            }
        }

        fetchData() ; 
    } , [])
    return (
        <Sheet >
            <SheetTrigger>
                <AlignJustify className="ml-4 font-thin text-[#4A1E1C]" />
            </SheetTrigger>

            <SheetContent className="w-full h-display" side="left">
                <SheetHeader className="flex justify-between h-fit rounded-xl border">
                    <SheetTitle className="flex justify-between border-b  p-2">
                        <SheetClose>
                            <X className="" size={18} />
                        </SheetClose>
                        <Logo />
                        <div className='flex gap-2 items-center'>
                            <Search size={18} />
                            <ShoppingCart size={18} />
                        </div>
                    </SheetTitle>

                    <Accordion type="single" collapsible className="w-full p-2">
                        <AccordionItem value="item-1">
                            {/* <AccordionTrigger>New</AccordionTrigger> */}
                            <a className="text-sm text-left font-medium h-14 flex flex-col justify-center" href="/collection/4">New</a>
                            
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Shop</AccordionTrigger>
                            <AccordionContent className="text-left ">
                                {categories.map((category)=>(
                                    <a href={`/collection/${category.id}`} className="pl-7 flex flex-row">{category.name}</a>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                        <div className="text-sm text-left font-medium h-14 flex flex-col justify-center">About Us</div>
                            
                        </AccordionItem>
                    </Accordion>

                    <div className="flex items-center p-2 gap-2">   
                    <User size={18}/> 
                    <div>Login</div>
                    </div>

                    <div className="flex items-center p-2 gap-8">
                        <Instagram size={18}/>
                        <Linkedin size={18}/>
                        <Youtube size={18}/>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu