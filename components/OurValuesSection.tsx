import { Target, Award, Heart, Users } from "lucide-react";

const values = [
  {
    title: "Vision",
    description:
      "We see beyond the ordinary to create extraordinary content.",
    icon: Target,
  },
  {
    title: "Passion",
    description:
      "Our love for storytelling drives everything we create.",
    icon: Heart,
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-24 text-center text-[#000000] font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
    
          <span className="text-[#000000]">Our </span>
          <span className="text-[#f70670]">Values</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-[#F70670]">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-onest text-lg font-semibold text-black">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
