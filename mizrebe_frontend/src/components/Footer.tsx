import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import a from "next/a"
import { Instagram, Linkedin, PinIcon as Pinterest } from "lucide-react"
// import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F1E3] px-4 py-12 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Shop Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4A3419]">SHOP</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/new-arrivals" className="text-sm text-[#4A3419] hover:underline">
                New Arrivals
              </a>
              <a href="/dresses" className="text-sm text-[#4A3419] hover:underline">
                Dresses
              </a>
              <a href="/tops" className="text-sm text-[#4A3419] hover:underline">
                Tops
              </a>
              <a href="/bottoms" className="text-sm text-[#4A3419] hover:underline">
                Bottoms
              </a>
              <a href="/shoes" className="text-sm text-[#4A3419] hover:underline">
                Shoes
              </a>
              <a href="/gift-cards" className="text-sm text-[#4A3419] hover:underline">
                Gift Cards
              </a>
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4A3419]">SUPPORT</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/make-return" className="text-sm text-[#4A3419] hover:underline">
                Make a Return
              </a>
              <a href="/return-policy" className="text-sm text-[#4A3419] hover:underline">
                Return Policy
              </a>
              <a href="/shipping-policy" className="text-sm text-[#4A3419] hover:underline">
                Shipping Policy
              </a>
              <a href="/faqs" className="text-sm text-[#4A3419] hover:underline">
                FAQs
              </a>
              <a href="/size-guide" className="text-sm text-[#4A3419] hover:underline">
                Size Guide
              </a>
            </nav>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4A3419]">ABOUT</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/about-us" className="text-sm text-[#4A3419] hover:underline">
                About Us
              </a>
              <a href="/terms" className="text-sm text-[#4A3419] hover:underline">
                Terms of Service
              </a>
              <a href="/privacy" className="text-sm text-[#4A3419] hover:underline">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4A3419]">STAY IN THE LOOP</h3>
            <p className="text-sm text-[#4A3419]">SIGN UP TO GET 15% OFF YOUR FIRST ORDER</p>
            <div className="flex flex-col space-y-2">
              <div className="md:flex space-x-2 items-center">
                <Input
                  type="email"
                  placeholder="er@gmail.com"
                  className="bg-transparent border-[#4A3419] text-[#4A3419] placeholder:text-[#4A3419]/60 mt-5"
                />
                <Button
                  variant="outline"
                  className="border-[#4A3419] text-[#4A3419] hover:bg-[#4A3419] hover:text-white "
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Space */}
        {/* <div className="my-8 flex justify-center"> */}
          {/* Logo space left empty for future addition */}
          {/* <div className="h-32 w-32 "><Logo/></div> */}
        {/* </div> */}

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t border-[#4A3419]/20 pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-[#4A3419]">&copy; 2025 MIZREBEL. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#4A3419] hover:text-[#4A3419]/80">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-[#4A3419] hover:text-[#4A3419]/80">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-[#4A3419] hover:text-[#4A3419]/80">
              <Pinterest className="h-5 w-5" />
              <span className="sr-only">Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

