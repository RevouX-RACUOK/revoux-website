"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      e.preventDefault(); // ⛔ stop Next.js restore
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

        {/* Nav */}
        <div className="ml-auto flex items-center gap-10">
          <nav className="hidden md:flex gap-8 font-manrope text-sm">
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

          {/* CTA */}
          <Link
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="hidden md:inline-flex rounded-full bg-[#F70670] px-5 py-2 font-manrope text-sm font-medium text-white transition hover:bg-pink-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
