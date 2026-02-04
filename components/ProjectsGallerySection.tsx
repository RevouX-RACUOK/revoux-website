import Image from "next/image";

const projects = [
  {
    category: "Film Production",
    title: "Annual Tech Summit 2024",
    image: "/projects/tech-summit.jpg",
    type: "video", // video | image
  },
  {
    category: "Photography",
    title: "Fashion Week Showcase",
    image: "/projects/fashion-week.jpg",
    type: "image",
  },
  {
    category: "Event Coverage",
    title: "Leadership Conference",
    image: "/projects/conference.jpg",
    type: "image",
  },
  {
    category: "Digital Media",
    title: "Brand Launch Campaign",
    image: "/projects/brand-launch.jpg",
    type: "video",
  },
];

export default function ProjectsGallerySection() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          
          <span className="text-[#f1f9f4]">Our </span>
          <span className="text-[#f70670]">Projects</span>
        </h2>

        <p className="mt-4 mx-auto text-center font-manrope text-[#8e8e8e] text-base md:text-lg leading-relaxed max-w-xl">
          A showcase of our finest work across various media productions and
          creative ventures.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-200 transition hover:shadow-lg"
            >
              {/* Media */}
              <div className="relative h-64 bg-pink-200 flex items-center justify-center">
                {project.type === "video" ? (
                  <span className="text-4xl">🎬</span>
                ) : (
                  <span className="text-4xl">📸</span>
                )}

                {/* If you want real images later, replace above with:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <p className="text-xs font-manrope uppercase tracking-wide text-[#F70670]">
                  {project.category}
                </p>

                <h3 className="mt-2 font-onest text-lg font-semibold text-black">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
