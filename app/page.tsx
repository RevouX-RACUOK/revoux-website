import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import Lightpillar from "@/components/Lightpillar";
import WorksCarousel from "./components/WorksCarousel";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Lightpillar
          topColor="#000000"
          bottomColor="#fc03ba"
          pillarRotation={12}
        />
      </div>

      <HeroSection />
      <WhatWeDoSection />
      <WorksCarousel />
      <CallToAction />
      <Footer />


    </main>
  );
}
