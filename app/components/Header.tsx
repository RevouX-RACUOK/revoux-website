"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="flex w-full items-center px-6 py-2">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="RevouX Logo"
            width={2000}
            height={1500}
            className="h-12 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="ml-auto hidden md:flex items-center gap-10">
          <nav className="flex gap-8 font-manrope text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Events", href: "/events" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition ${
                  pathname === item.href
                    ? "text-[#F70670]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="rounded-full bg-[#F70670] px-5 py-2 font-manrope text-sm font-medium text-white transition hover:bg-pink-700"
          >
            Contact Us
          </Link>
        </div>

        {/* 🔥 Mobile Burger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="ml-auto md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/*  Mobile Dropdown */}
   
    
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Blur Background */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 w-full transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } bg-black/80 backdrop-blur-xl border-b border-white/10`}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-white font-onest text-lg">Menu</span>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex h-[calc(50vh-100px)] flex-col items-center justify-center gap-10 font-manrope text-xl">

            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Events", href: "/events" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition ${
                  pathname === item.href
                    ? "text-[#F70670]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>


    </header>
  );
}
