"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import Lightpillar from "@/components/Lightpillar";
import WorksCarousel from "./components/WorksCarousel";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="relative min-h-[100svh] overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 h-[100svh] w-full">


        {/* 📱 Mobile → Video */}
        {isMobile ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        ) : (
          /* 💻 Desktop → LightPillar (unchanged) */
          <Lightpillar
            topColor="#000000"
            bottomColor="#fc03ba"
            pillarRotation={12}
          />
        )}

      </div>

      <HeroSection />
      <WhatWeDoSection />
      <WorksCarousel />
      <CallToAction />
      <Footer />

    </main>
  );
}
