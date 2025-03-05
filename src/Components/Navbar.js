"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-black shadow-md md:p-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:justify-between justify-end">
        {/* Logo */}
        <Link href="/" className=" pt-5 pb-2" onClick={() => setIsOpen(false)}>

          <img src="/next.svg" alt="Logo" className="h-10" />
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-2xl">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/Services" className="hover:text-gray-500">Services</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/Contact" className="hover:text-gray-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Always in DOM for transitions */}
      <div className={`md:hidden overflow-hidden transition-all duration-600 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col space-y-2 p-4 text-xl bg-white text-center">
             <hr width="100%"  color="green"/>
          <Link href="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Services" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Contact" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;