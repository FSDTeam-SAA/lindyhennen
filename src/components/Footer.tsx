import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-white to-pink-50  ">
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="space-y-1">
            <Image src={'/logomain.png'} width={175} height={60} className=" object-cover " alt="footer logo"/>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed w-1/2">Helping you buy, sell, and value your home.</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Phone:</span> +1 (234) 567-8900
              </p>
              <p>
                <span className="font-medium">Mail:</span> example@example.com
              </p>
              <p>
                <span className="font-medium">Also:</span> example@example.com
              </p>
              <p>
                <span className="font-medium">Location:</span> Lorem Ipsum, Chudinoong
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 ">
            <h4 className="font-semibold text-gray-900">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-700 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 CentralMN Realty. All rights reserved.</p>
          <p>Designed by - Sahed</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
