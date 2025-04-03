'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/images/Logo350.png'

const navLinks = [
  { name: "WELCOME", href: "/" },
  { name: "OUR SERVICES", href: "/services" },
  { name: "RENTAL", href: "/pricing" },
  { name: "MARITIME TRANSPORT", href: "/contact" },
  { name: "PRICE & RESERVATION", href: "/" },
  { name: "ABOUT", href: "/" },
  { name: "CONTACT", href: "/" },
  
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
      <nav className="w-full bg-white ">
      <div className="container mx-auto justify-between flex  items-center  ">
        {/* Logo */}
        <div className="w-[99px] h-[99px]">
        <Link href="/">
          <Image src={logo} alt="Logo"  className="cursor-pointer" />
        </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              <Link
                href={link.href}
                className="relative flex items-center text-gray-800 font-medium text-lg px-3 py-2 transition-transform duration-600 ease-in-out"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Circle Effect */}
                <span
                  className={`absolute left-0 transform -translate-x-3 w-2 h-2 bg-[#deba91] rounded-full transition-all duration-600 ${
                    hoveredIndex === index ? "scale-100 opacity-100 -translate-x-1" : "scale-0 opacity-0"
                  }`}
                ></span>

                {/* Text Transition */}
                <span
                  className={`relative transition-all duration-300 ${
                    hoveredIndex === index ? "translate-x-2" : "translate-x-0"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
