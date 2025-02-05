import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import * as React from "react"
// import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "New Arrivals",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Dresses",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Tops",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Bottoms",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Two Pieces Sets",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "BestSellers",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]


function Header() {
  return (
    <>
      <nav className='fixed w-full flex justify-center text-white z-10 '>
        <div className='flex justify-between md:h-[90px] h-[40px] items-center w-full md:w-3/4 '>

          <div className='flex items-center text-sm gap-5'>
            {/* <a className='md:flex hidden hover:underline hover:cursor-pointer text-[#410606]'>New</a> */}
            <a className='md:flex hidden'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-[#410606] bg-transparent hover:bg-transparent'>New</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              {/* <Icons.logo className="h-6 w-6" /> */}
                              <div className="mb-2 mt-4 text-lg font-medium">
                                New Arrivals
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Discover the latest trends designed for comfort & elegance
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <img src='/hero.webp' />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-[#410606] bg-transparent'>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-[#410606]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a href="/docs" >
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About Us
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </a>
            {/* <a className='md:flex hidden hover:underline hover:cursor-pointer text-[#410606]'>About Us</a> */}
            <div className='md:hidden'>
              <MobileMenu />
            </div>
          </div>



          <a><Logo /></a>

          <div className='flex gap-2 md:gap-5 mr-5'>
            <Search size={22} className='text-[#410606]' />
            <User className='md:flex hidden text-[#410606]' />
            <ShoppingCart className='text-[#410606]' />
          </div>

        </div>

      </nav>

    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header