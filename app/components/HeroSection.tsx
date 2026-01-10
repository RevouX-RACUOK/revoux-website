import Image from "next/image";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      {/* Welcome text */}
      <ShinyText
        text="Welcome To"
        speed={2}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        className="mb-0 text-4xl md:text-6xl tracking-wide"
      />

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="RevouX Logo"
        width={800}
        height={400}
        className="-mt-10 h-40 w-auto md:h-64 lg:h-80"
        priority
      />

      {/* Buttons */}
        <div className="mt-10 flex flex-row items-center gap-6">

        {/* Primary Button */}
        <Link
            href="#what-we-do"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#0f172a] px-8 py-4 text-sm md:text-base font-medium text-white transition hover:bg-[#020617]"
        >
            Explore Our Work
            <span className="transition-transform group-hover:translate-x-1">
            →
            </span>
        </Link>

        {/* Secondary Button */}
        <Link
            href="#contact"
            className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-sm md:text-base font-medium text-gray-900 transition hover:bg-gray-100"
        >
            Get in Touch
        </Link>

        </div>

    </section>
  );
}
