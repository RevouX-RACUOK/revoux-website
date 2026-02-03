import OurValuesSection from "@/components/OurValuesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "../components/Footer";


export default function AboutPage() {
  return (
    <main className="bg-[#000000]">
      {/* Hero */}
      <section className="px-6 pt-10 pb-24 text-center">
        <h1 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#f1f9f4]">Our </span>
          <span className="text-[#F70670]">Events</span>
        </h1>

        <p className="mx-auto mt-4 text-center font-manrope text-[#4f5250] text-base md:text-lg leading-relaxed max-w-xl">
          We are a collective of passionate creatives, technologists, and storytellers
          united by our love for compelling media.
        </p>
      </section>

      {/* Our Story */}
      <section className="px-6 pb-32">
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
          <div className="h-[320px] md:h-[420px] rounded-3xl bg-pink-200" />
        </div>
      </section>

      {/* Our Values */}
      <OurValuesSection />

      {/* Our Team */}
      <TeamSection />

      <Footer />

      
      
    </main>
  );
}
