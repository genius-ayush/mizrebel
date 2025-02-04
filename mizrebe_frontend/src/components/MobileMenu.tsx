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



function MobileMenu() {
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
                            <div className="text-sm text-left font-medium h-14 flex flex-col justify-center">New</div>
                            
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Shop</AccordionTrigger>
                            <AccordionContent className="text-left ">
                                <div className="pl-7">New Arrivals</div>
                                <div className="pl-7">Dresses</div>
                                <div className="pl-7">Tops</div>
                                <div className="pl-7">Bottoms</div>
                                <div className="pl-7">Two pieces</div>
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