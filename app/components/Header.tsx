import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="RevouX Logo"
            width={2000}
            height={1500}
            className="h-12 w-auto md:h-16"
            priority
          />
        </Link>

        {/* Right side: Nav + CTA */}
        <div className="ml-auto flex items-center gap-8">
          
          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="#home" className="hover:text-white transition">
              Home
            </Link>
            <Link href="#events" className="hover:text-white transition">
              Events
            </Link>
            <Link href="#team" className="hover:text-white transition">
              Team
            </Link>
            <Link href="#gallery" className="hover:text-white transition">
              Gallery
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white hover:bg-pink-700 transition"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </header>
  );
}
