import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Header() {
  return (
    <>
      <nav className='fixed w-full flex justify-center text-white z-10 '>
        <div className='flex justify-between md:h-[90px] h-[40px] items-center w-full md:w-3/4 '>

          <div className='flex items-center text-sm gap-5'>
            <a className='md:flex hidden hover:underline hover:cursor-pointer text-[#410606]'>New</a>
            <a className='md:flex hidden'>
              <Accordion type="single" collapsible className="w-full p-2">
                <AccordionItem value="item-2">
                  <AccordionTrigger className='text-[#410606]'>Shop</AccordionTrigger>
                  <AccordionContent className="text-left ">
                    <div className="pl-7 text-[#410606]">New Arrivals</div>
                    <div className="pl-7 text-[#410606]">Dresses</div>
                    <div className="pl-7 text-[#410606]">Tops</div>
                    <div className="pl-7 text-[#410606]">Bottoms</div>
                    <div className="pl-7 text-[#410606]">Two pieces</div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </a>
            <a className='md:flex hidden hover:underline hover:cursor-pointer text-[#410606]'>About Us</a>
            <div className='md:hidden'>
              <MobileMenu />
            </div>
          </div>



          <a><Logo /></a>

          <div className='flex gap-2 md:gap-5 mr-5'>
            <Search size={22} className='text-[#410606]'/>
            <User className='md:flex hidden text-[#410606]' />
            <ShoppingCart className='text-[#410606]' />
          </div>

        </div>

      </nav>

    </>
  )
}

export default Header