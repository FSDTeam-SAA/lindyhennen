"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Menu,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-linear-to-tr from-pink-200 via-white to-pink-200 border-b border-gray-200">
        <div className="container mx-auto hidden md:block">
          <div className="md:pt-3 flex items-center justify-between">
            <div className="items-center gap-3 hidden md:flex">
              <a
                href="tell:13202501317"
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors text-lg"
              >
                {" "}
                <Phone className="w-5 h-5" />
                <span>+13202501317</span>
              </a>
              <a
                href="https://www.facebook.com/mern.sahed"
                target="_blank"
                aria-label="Globe"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://www.facebook.com/mern.sahed"
                target="_blank"
                aria-label="Globe"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mern-sahed/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
            </div>
            <a
              href="mailto:lindy@centralmnrealty.com"
              className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors text-lg"
            >
              {" "}
              <Mail className="w-5 h-5" />
              <span>lindy@centralmnrealty.com</span>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-2 lg:px-0 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logomain.png"
              alt="Central MN Realty"
              width={200}
              height={100}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center md:gap-10 gap-1">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay - Full width when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-0 z-40 w-screen h-screen overflow-y-auto duration-500 ease-in-out">
          <div className="fixed inset-0 bg-primary/10 backdrop-blur-md w-screen h-screen" />

          {/* Menu Content */}
          <div className="relative transition-all duration-500 ease-in-out z-10 flex flex-col min-h-screen w-full md:w-2/5 lg:w-1/4 md:ml-auto bg-[url('/menu-bg.png')] bg-contain bg-center bg-no-repeat backdrop-blur-sm bg-white shadow-2xl">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between lg:px-6 px-3 py-4 border-b border-white/20">
              <h2 className="text-xl font-semibold text-black">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-800 cursor-pointer" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 lg:px-6 px-3 py-8 space-y-6">
              <Link
                href="/"
                className="block text-primary font-semibold text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Homepage
              </Link>
              <Link
                href="/contact"
                className="block text-primary font-semibold text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Contact Information */}
            <div className="lg:px-6 px-3 py-6 border-t border-white/20">
              <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                Contact Us
              </h3>
              <div className="space-y-3 text-sm text-[#575F65] flex flex-col">
                <a href="tell:13202501317">
                  <span className="">Phone:</span> +13202501317
                </a>
                <a href="mailto:lindy@centralmnrealty.com">
                  <span className="">Mail:</span> lindy@centralmnrealty.com
                </a>
                <p>
                  <span className="">Location:</span> 80 37th Ave S #200, St
                  Cloud, MN 56301, USA
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:px-6 px-3 py-6 border-t border-white/20">
              <h3 className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/mern.sahed"
                  target="_blank"
                  aria-label="Facebook"
                  className="flex items-center justify-center rounded-full text-primary transition-colors"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-full text-primary transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
