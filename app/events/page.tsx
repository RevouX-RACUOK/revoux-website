
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import MasonryGallery from "@/components/MasonryGallery";
import Footer from "../components/Footer";


export default function AboutPage() {
  return (
    <main className="bg-[#000000]">
      {/* Hero */}
      <section className="px-6 pt-10 pb-24 text-center">
        <h1 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#f1f9f4]">Upcoming </span>
          <span className="text-[#F70670]">Events</span>
        </h1>

        <p className="mt-4 mx-auto text-center font-manrope text-[#8e8e8e] text-base md:text-lg leading-relaxed max-w-xl">
          Designed to inspire, built to connect.
        </p>
      </section>

      <UpcomingEventsSection />
      <MasonryGallery />

      <Footer />

      
      
    </main>
  );
}
