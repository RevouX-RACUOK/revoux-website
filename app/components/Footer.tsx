import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 pt-20 pb-10 text-gray-600">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-lg bg-black p-2">
                    <Image
                    src="/logo.png"
                    alt="RevouX Logo"
                    width={2000}
                    height={1500}
                    className="h-12 w-auto md:h-16"
                    priority
                    />
                </div>
            </Link>


            <p className="mt-4 max-w-sm font-manrope leading-relaxed">
              Capturing moments, creating stories. We are a passionate media
              unit dedicated to bringing your vision to life through innovative
              content creation.
            </p>

            {/* Social icons */}
            

            <div className="mt-6 flex gap-3">
                <a
                    href="https://www.instagram.com/revoux.racuok?igsh=MXY0N2JsYzZtbHZueg=="
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                    <FaInstagram size={16} />
                </a>

                <a
                    href="https://www.facebook.com/share/1U8Stp3J5C/"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                    <FaFacebookF size={16} />
                </a>

                <a
                    href="https://vm.tiktok.com/ZSHEEsLHgBXve-00IHG/"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black-800 text-gray-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                    <FaTiktok size={16} />
                </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-onest text-lg font-semibold text-black">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 font-manrope">
              <li>
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-black">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-onest text-lg font-semibold text-black">
              Contact Us
            </h4>

            <ul className="mt-4 space-y-3 font-manrope">
              <li>mediaunit.racuok@gmail.com</li>
              <li>+94 71 8788 420 |  +94 70 3647 088 | +94 76 8224 295</li>
              <li>
                Rotaract Club of University of Kelaniya
                <br />
                University of Kelaniya
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gray-200" />

        {/* Bottom */}
        <p className="text-center font-manrope text-sm">
          © 2026 RêvouX Media Unit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
