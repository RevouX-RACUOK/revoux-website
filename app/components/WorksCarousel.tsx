"use client";

import { useState } from "react";

const works = [
  {
    type: "image",
    src: "/works/image.jpg",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta: "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
  },
  {
    type: "video",
    src: "/works/video.mp4",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta: "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
  },
  {
    type: "image",
    src: "/works/image.jpg",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta: "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
  },
  {
    type: "image",
    src: "/works/image.jpg",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta: "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
  },
  {
    type: "image",
    src: "/works/image.jpg",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta: "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
  },
];

export default function WorksCarousel() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative w-full overflow-hidden py-20">
      <h2 className="mb-7 text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-white">Projects</span>{" "}
        <span className="text-[#F70670]">we’ve Covered</span>
      </h2>

      <p className="mb-16 mx-auto text-center font-manrope text-[#f1f9f4] text-base md:text-lg leading-relaxed max-w-xl">
        A showcase of our finest work across various media productions and creative ventures.
      </p>

      <div className="flex items-center justify-center gap-6">
        {works.map((item, index) => {
          const isActive = index === active;

          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`
                relative cursor-pointer transition-all duration-500
                ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}
              `}
            >
              {/* ACTIVE CARD */}
              {isActive ? (
                <div className="relative h-[420px] w-[280px] rounded-3xl bg-gradient-to-br from-[#ff2d95] via-[#e6005c] to-[#ff003d] p-5 text-white shadow-2xl">
                  {/* Media */}
                  <div className="h-44 w-full overflow-hidden rounded-2xl bg-black/30">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-onest text-lg font-semibold leading-snug">
                      {item.title}
                      <br />
                      {item.subtitle}
                    </h3>

                    <p className="mt-3 text-xs text-pink-100 leading-relaxed">
                      {item.meta}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    ↗
                  </div>
                </div>
              ) : (
                /* SIDE CARDS */
                <div className="relative h-[360px] w-[240px] overflow-hidden rounded-3xl bg-black">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      preload="metadata"
                      className="h-full w-full object-cover grayscale"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt=""
                      className="h-full w-full object-cover grayscale"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {works.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === active ? "bg-[#F70670] w-4" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
