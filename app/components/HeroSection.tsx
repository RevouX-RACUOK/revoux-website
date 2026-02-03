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
        speed={10}
        color="#F1F9F4"
        shineColor="#F70670"
        spread={120}
        direction="left"
        className="font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
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
            className="group inline-flex items-center gap-3 rounded-4xl bg-[#000000] px-8 py-4 text-sm md:text-base font-medium text-[#f70670] transition hover:text-[#F1F9F4]"
        >
            Explore Our Work
            <span className="transition-transform group-hover:translate-x-1">
            →
            </span>
        </Link>

        {/* Secondary Button */}
        <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-4xl bg-[#F1F9F4] px-8 py-4 text-sm md:text-base font-medium text-[#000000] transition "
        >
        
            Get in Touch
        </Link>

        </div>

    </section>
  );
}
