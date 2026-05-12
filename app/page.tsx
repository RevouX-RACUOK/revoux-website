"use client";

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import Lightpillar from "@/components/Lightpillar";
import WorksCarousel from "./components/WorksCarousel";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Handle Responsive Check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // 2. Safety Timeout 
    // If the video or assets take too long, we show the site anyway after 4s
    const backupTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(backupTimer);
    };
  }, []);

  return (
    <>
      {/* Preloader Overlay */}
      {isLoading && <Preloader />}

      <main 
        className={`relative min-h-[100svh] overflow-x-hidden transition-opacity duration-1000 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Layer */}
        <div className="fixed inset-0 -z-10 h-[100svh] w-full bg-black">
          {isMobile ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setIsLoading(false)} // Hides loader when video is buffered
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/bg.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="h-full w-full">
               <Lightpillar
                topColor="#000000"
                bottomColor="#fc03ba"
                pillarRotation={12}
                // If Lightpillar is Three.js, it usually loads fast, 
                // but we can manually trigger finish after a short delay:
              />
              {/* Trigger reveal for desktop since Lightpillar is usually instant */}
              {!isMobile && setTimeout(() => setIsLoading(false), 800) && null}
            </div>
          )}
        </div>

        {/* Sections */}
        <HeroSection />
        <WhatWeDoSection />
        <WorksCarousel />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}