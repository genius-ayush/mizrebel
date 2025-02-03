import {Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';


function Header() {
  return (
    <>
    <nav className='fixed w-full flex justify-center text-white z-10'>
      <div className='flex justify-between h-[98px] items-center w-full md:w-3/4 '>

        <div className='flex items-center text-sm gap-5'>
          <a className='md:flex hidden'>New</a>
          <a className='md:flex hidden'>Shop</a>
          <a className='md:flex hidden'>About Us</a>
          <div className='md:hidden'>
            <MobileMenu/>
        </div>
        </div>

        

        <a><Logo/></a>

        <div className='flex gap-2 md:gap-5 mr-4'>       
            <Search size={22}/>
            <User className='md:flex hidden'/>
            <ShoppingCart className=''/>
        </div>

      </div>  

    </nav>

    </>
  )
}

export default Header