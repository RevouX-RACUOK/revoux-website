import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import MasonryGallery from "@/components/MasonryGallery";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-black overflow-x-hidden">

      {/* Hero */}
      <section className="px-5 pt-8 pb-16 md:px-6 md:pt-10 md:pb-24 text-center">
        <h1 className="mx-auto max-w-5xl font-onest font-bold leading-[1.1] tracking-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#f1f9f4]">Upcoming </span>
          <span className="text-[#F70670]">Events</span>
        </h1>

        <p className="mt-3 mx-auto max-w-md md:max-w-xl font-manrope
                      text-sm sm:text-base md:text-lg leading-relaxed text-[#8e8e8e]">
          Designed to inspire, built to connect.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 sm:px-6 lg:px-8">
        <UpcomingEventsSection />
      </section>

      {/* Gallery */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <MasonryGallery />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}
