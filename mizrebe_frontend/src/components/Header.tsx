import {Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


function Header() {
  return (
    <>
    <nav className='fixed w-full flex justify-center text-white'>
      <div className='flex justify-between h-[98px] items-center w-3/4 '>

        <div className='flex items-center text-sm gap-5'>
          <a>New</a>
          <a>Shop</a>
          <a>About Us</a>
        </div>

        <a><div className='text-7xl'>Mizrebel</div></a>

        <div className='flex gap-5'>       
            <Search size={22}/>
            <User />
            <ShoppingCart />
        </div>

      </div>

    </nav>

    </>
  )
}

export default Header