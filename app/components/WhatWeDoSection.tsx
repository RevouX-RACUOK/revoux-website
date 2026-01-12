import ServiceCard from "./ServiceCard";
import { Camera, Video, Mic, PenTool } from "lucide-react";


export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="min-h-screen px-6 py-32"
    >
      {/* Section heading */}
      <h2 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight">
        <span className="text-white">what we </span>
        <span className="text-[#f70670]">do</span>
      </h2>


      <p className="mt-4 max-w-2xl mx-auto text-center text-gray-400">
        We craft creative solutions that bring stories to life across
        visual, audio, and digital mediums.
      </p>

            {/* Cards */}
        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
