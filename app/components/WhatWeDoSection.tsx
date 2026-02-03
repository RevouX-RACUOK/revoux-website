import ServiceCard from "./ServiceCard";
import { Camera, Video, Mic, PenTool } from "lucide-react";


export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="min-h-screen px-6 py-32"
    >
      {/* Section heading */}
      <h2 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        
        <span className="text-[#f1f9f4]">What we </span>
        <span className="text-[#f70670]">Do</span>
      </h2>
mx-auto text-center font-manrope text-[#f1f9f4] text-base md:text-lg leading-relaxed max-w-xl
      <p className="">
        We craft creative solutions that bring stories to life across
        visual, audio, and digital mediums.
      </p>



            {/* Cards */}
        <div className="font-manrope mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<Camera size={26} />}
            title="Photography"
            description="Capturing stunning visuals that tell your story with precision and artistry."
          />

          <ServiceCard
            icon={<Video size={26} />}
            title="Videography"
            description="Creating cinematic experiences that engage and inspire your audience."
          />

          <ServiceCard
            icon={<Mic size={26} />}
            title="Audio Production"
            description="Crafting immersive soundscapes and crystal-clear audio content."
          />

          <ServiceCard
            icon={<PenTool size={26} />}
            title="Creative Design"
            description="Designing visuals and identities that elevate your brand presence."
          />
        </div>

    </section>
  );
}
