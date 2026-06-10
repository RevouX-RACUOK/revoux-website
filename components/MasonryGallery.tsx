"use client";

import Image from "next/image";

const gallery = [
  { src: "/gallery/29.webp", span: "row-span-1" },
  { src: "/gallery/1.jpg", span: "row-span-2" },
  { src: "/gallery/23.webp", span: "row-span-1" },
  { src: "/gallery/24.webp", span: "row-span-2" },
  { src: "/gallery/25.webp", span: "row-span-2" },
  { src: "/gallery/26.webp", span: "row-span-2" },
  { src: "/gallery/27.webp", span: "row-span-1" },
  { src: "/gallery/28.webp", span: "row-span-2" },
  { src: "/gallery/29.webp", span: "row-span-2" },

  { src: "/gallery/33.webp", span: "row-span-1" },
  { src: "/gallery/34.webp", span: "row-span-2" },
  { src: "/gallery/35.webp", span: "row-span-1" },
  { src: "/gallery/36.webp", span: "row-span-2" },
  { src: "/gallery/37.webp", span: "row-span-2" },
  { src: "/gallery/38.webp", span: "row-span-2" },
  { src: "/gallery/39.webp", span: "row-span-1" },
  { src: "/gallery/40.webp", span: "row-span-2" },
  { src: "/gallery/41.webp", span: "row-span-1" },
  { src: "/gallery/42.webp", span: "row-span-2" },
  { src: "/gallery/43.webp", span: "row-span-1" },
  
  { src: "/gallery/2.JPG", span: "row-span-1" },
  { src: "/gallery/3.JPG", span: "row-span-1" },
  { src: "/gallery/4.webp", span: "row-span-2" },
  { src: "/gallery/5.webp", span: "row-span-1" },
  { src: "/gallery/6.JPG", span: "row-span-1" },
  { src: "/gallery/7.webp", span: "row-span-2" },
  { src: "/gallery/8.webp", span: "row-span-1" },
  { src: "/gallery/9.webp", span: "row-span-1" },
  { src: "/gallery/10.webp", span: "row-span-2" },
  { src: "/gallery/11.webp", span: "row-span-1" },
  { src: "/gallery/12.webp", span: "row-span-2" },
  { src: "/gallery/13.webp", span: "row-span-1" },
  { src: "/gallery/14.webp", span: "row-span-2" },
  { src: "/gallery/15.webp", span: "row-span-1" },
  { src: "/gallery/17.webp", span: "row-span-1" },
  { src: "/gallery/18.webp", span: "row-span-1" },
  { src: "/gallery/19.webp", span: "row-span-1" },
  { src: "/gallery/20.JPG", span: "row-span-2" },
  { src: "/gallery/21.JPG", span: "row-span-1" },
  { src: "/gallery/22.JPG", span: "row-span-1" },
];

export default function EditorialGallery() {
  return (
    <section className="mt-24 mb-24 relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#0b0614] p-6 md:p-10">
      {/* Action button */}
      <button
        onClick={() => window.location.reload()}
        className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        ⟳
      </button>


      {/* Grid */}
      <div
        className="
          grid grid-cols-2 gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          auto-rows-[140px]
        "
      >
        {gallery.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${item.span}`}
          >
            <Image
              src={item.src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover grayscale transition hover:grayscale-0 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
