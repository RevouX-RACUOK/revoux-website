import { Target, Heart } from "lucide-react";

const values = [
  {
    title: "Vision",
    description:
      "To enhance visibility and engagement through creative digital content, connecting communities and expanding Rotaract’s reach beyond the club.",
    icon: Target,
  },
  {
    title: "Values",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Creativity</li>
        <li>Authenticity</li>
        <li>Collaboration</li>
        <li>Responsiveness</li>
      </ul>
    ),
    icon: Heart,
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="mb-24 text-center text-black font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-black">Our </span>
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
                <div className="font-manrope text-sm leading-relaxed text-gray-600">
                  {value.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
