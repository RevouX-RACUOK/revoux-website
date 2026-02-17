"use client";

import Image from "next/image";

const gallery = [
  { src: "/gallery/1.jpg", span: "row-span-2" },
  { src: "/gallery/2.jpg", span: "row-span-1" },
  { src: "/gallery/3.jpeg", span: "row-span-1" },
  { src: "/gallery/4.jpg", span: "row-span-2" },
  { src: "/gallery/5.jpg", span: "row-span-1" },
  { src: "/gallery/6.jpg", span: "row-span-1" },
  { src: "/gallery/7.jpg", span: "row-span-2" },
  { src: "/gallery/8.jpg", span: "row-span-1" },
  { src: "/gallery/9.jpg", span: "row-span-1" },
  { src: "/gallery/10.jpg", span: "row-span-2" },
  { src: "/gallery/11.jpg", span: "row-span-1" },
  { src: "/gallery/12.jpg", span: "row-span-1" },
];

export default function EditorialGallery() {
  return (
    <section className="mt-24 mb-24 relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#0b0614] p-6 md:p-10">
      {/* Action button */}
      <button className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
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
