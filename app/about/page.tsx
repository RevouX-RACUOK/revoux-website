import OurValuesSection from "@/components/OurValuesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative bg-[#000000] overflow-hidden">

      {/* 🔥 TOP HALF PINK GLOW */}
      <div className="absolute inset-x-0 -top-[350px] h-[900px] bg-[radial-gradient(circle_at_top,rgba(247,6,112,0.55)_0%,rgba(0,0,0,0)_65%)] pointer-events-none" />

      {/* Hero */}
      <section className="relative px-6 pt-16 pb-24 text-center z-10">
        <h1 className="font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          <span className="text-[#f1f9f4]">About </span>
          <span className="text-[#F70670]">RêvouX</span>
        </h1>

        <p className="mx-auto mt-4 font-manrope text-[#8e8e8e] text-base md:text-lg leading-relaxed max-w-xl">
          We are a collective of passionate creatives, technologists, and storytellers
          united by our love for compelling media.
        </p>
      </section>

      {/* Our Story */}
      <section className="relative px-6 pb-32 z-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#f1f9f4]">Our </span>
              <span className="text-[#f70670]">Story</span>
            </h2>

            <p className="mt-6 max-w-xl font-manrope text-base md:text-lg leading-relaxed text-gray-500">
              Founded in 2025, RêvouX began as a small team with a big dream to
              revolutionize how stories are told through media.
              <br /><br />
              RêvouX was first established as the Official Media Unit of the
              Rotaract Club of the University of Kelaniya by the Digital Media
              Avenue during the 2025–26 term.
              <br /><br />
              The initiative was guided by Rtn. Rtr. Himantha Sayuru, President
              2025–26, alongside Rtr. Delishia Febian, Secretary, under the
              oversight of EXCO member and Assistant Secretary Rtr. Kareema
              Qadiry, and the dedicated leadership of the Digital Media Avenue
              Directors — Rtr. Sithika Himandith, Rtr. Gangani Yashodara, and
              Rtr. Nadeesha Nilupul.
              <br /><br />
              Their collective vision and commitment laid the foundation for
              RêvouX’s growth into a dynamic and impactful media identity.
            </p>
          </div>

          {/* Visual */}
          <div className="relative w-full aspect-video md:h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/about/grp.png"
              alt="Our story"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Rotaract logo */}
      <div className="mb-10 flex flex-col items-center text-center z-10 relative">
        <p className="font-manrope text-sm tracking-wide text-gray-500">
          Powered by
        </p>

        <Image
          src="/RACUOK.png"
          alt="RevouX Logo"
          width={400}
          height={50}
          className="h-40 w-auto md:h-64 lg:h-40"
          priority
        />
      </div>

      {/* Our Values */}
      <OurValuesSection />

      {/* Our Team */}
      <TeamSection />


      {/* 🔥 Bottom Pink Glow Before Footer */}
      {/* <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-x-0 bottom-[-350px] h-[900px] bg-[radial-gradient(circle_at_bottom,rgba(247,6,112,0.55)_0%,rgba(0,0,0,0)_65%)] pointer-events-none" />
      </div> */}

      <Footer />
    </main>
  );
}