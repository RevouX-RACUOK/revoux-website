"use client";

import Link from "next/link";

import { useState, useRef, useEffect } from "react";

const works = [
  {
    type: "image",
    src: "/works/nethsuwa.jpg",
    title: "Project Nethsuwa",
    subtitle: "Phase 01",
    meta: "organized by the Leo Club of University of Kelaniya.",
    link: "/projects/nethsuwa",
  },
  {
    type: "video",
    src: "/works/christinzel.mp4",
    title: "Christinzel 25",
    subtitle: "A Night Wrapped in Lights and Laughter",
    meta:
      "Organized by the Club Service Avenue of Rotaract club of University of Kelaniya.",
      link: "/projects/nethsuwa",
  },
  {
    type: "image",
    src: "/works/inktalk.png",
    title: "Inktalk",
    subtitle: "Podcast Series",
    meta:
      "Organized by the Editorial Avenue of Rotaract club of University of Kelaniya.",
      link: "/projects/nethsuwa",
  },
  {
    type: "video",
    src: "/works/mmu.mp4",
    title: "Mr & Miss University '25",
    subtitle: "Inter University Pagent",
    meta:
      "Organized by the Professional Development Avenue of Rotaract club of University of Kelaniya.",
      link: "/projects/nethsuwa",
  },
  {
    type: "image",
    src: "/works/image.jpg",
    title: "Launch an Instagram account",
    subtitle: "for a beauty studio from scratch.",
    meta:
      "3,100 subscribers in the first 2 weeks, recording for 2 weeks ahead.",
      link: "/projects/nethsuwa",
  },
];

export default function WorksCarousel() {
  const [active, setActive] = useState(2);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- Center on Mobile Load ---------------- */
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const container = containerRef.current;
    if (!container) return;

    const card = container.children[active] as HTMLElement;
    if (!card) return;

    const offset =
      card.offsetLeft -
      container.offsetWidth / 2 +
      card.offsetWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: "auto",
    });
  }, []);

  /* ---------------- Desktop Drag Support ---------------- */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const mouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseleave", mouseLeave);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);

    return () => {
      container.removeEventListener("mousedown", mouseDown);
      container.removeEventListener("mouseleave", mouseLeave);
      container.removeEventListener("mouseup", mouseUp);
      container.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  /* ---------------- Detect Active Card (Smoothed) ---------------- */
  const handleScroll = () => {
    requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const cards = Array.from(container.children);
      const containerCenter =
        container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const el = card as HTMLElement;
        const cardCenter =
          el.offsetLeft + el.offsetWidth / 2;

        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    });
  };

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Heading */}
      <h2
        className="mb-7 text-center font-onest font-bold leading-[1.05] tracking-tight 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        text-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]"
      >
        <span className="text-white">Projects</span>{" "}
        <span className="text-[#F70670]">
          we’ve <span className="block md:inline">Covered</span>
        </span>
      </h2>

      <p className="mb-16 mx-auto text-center font-manrope text-[#f1f9f4] text-base md:text-lg leading-relaxed max-w-xl">
        A showcase of our finest work across various media productions and
        creative ventures.
      </p>

      {/* Carousel */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="
          flex items-center gap-6
          md:justify-center
          overflow-x-auto md:overflow-visible
          px-6 md:px-0
          snap-x snap-mandatory md:snap-none
          scroll-smooth
          scroll-px-6
          scrollbar-hide
          cursor-grab
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {works.map((item, index) => {
          const isActive = index === active;

          return (
            <div
              key={index}
              onClick={() => {
                if (window.innerWidth >= 768) {
                  setActive(index);
                }
              }}
              className={`
                relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                snap-center md:snap-none
                flex-shrink-0 md:flex-shrink
                ${
                  isActive
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-95 opacity-50 translate-y-4"
                }
              `}
            >
              {isActive ? (
                <div className="relative h-[420px] w-[280px] rounded-3xl bg-gradient-to-br from-[#ff2d95] via-[#e6005c] to-[#ff003d] p-5 text-white shadow-2xl">
                  <div className="h-44 w-full overflow-hidden rounded-2xl bg-black/30">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

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

                  <Link
                    href={item.link}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-110 active:scale-95"
                  >
                    ↗
                  </Link>
                </div>
              ) : (
                <div className="relative h-[360px] w-[240px] overflow-hidden rounded-3xl bg-black">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      preload="metadata"
                      playsInline
                      className="h-full w-full object-cover grayscale"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
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
            className={`h-2 transition-all duration-300 rounded-full ${
              i === active
                ? "bg-[#F70670] w-6"
                : "bg-gray-600 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}