import Image from "next/image";

const teamMembers = [
  {
    name: "Rtr. Sithika Himandith",
    role: "Digital Media Co-Director",
    image: "/about/sithika.png",
  },
  {
    name: "Rtr. Gangani Yashodara",
    role: "Digital Media Co-Director",
    image: "/about/yashodara.png",
  },
  {
    name: "Rtr. Nadeesha Nilupul",
    role: "Digital Media Co-Director",
    image: "/about/nadeesha.png",
  },
  {
    name: "Rtr. Indusara Senanayake",
    role: "Team Leader",
    image: "/about/indusara.png",
  },
  {
    name: "Rtr. Thilini Senevirathna",
    role: "Team Leader",
    image: "/about/thilini.png",
  },
  {
    name: "Rtr. Pamodya",
    role: "Team Leader",
    image: "/about/pamodya.png",
  },
  {
    name: "Rtr. Osanda Senevirathna",
    role: "Photography / Videography Team",
    image: "/about/osanda.png",
  },
  {
    name: "Rtr. Oshan Harischandra",
    role: "Photography Team",
    image: "/about/oshan.png",
  },
  {
    name: "Rtr. Sachini Rajapaksha",
    role: "Moderating Team",
    image: "/about/sachini.png",
  },
  {
    name: "Rtr. Baghya John",
    role: "Moderating Team",
    image: "/about/bagya.png",
  },
  {
    name: "Rtr. Hiranya Edirisinghe",
    role: "Moderating Team",
    image: "/about/hiranya.png",
  },
  {
    name: "Rtr. Methmi Abeysinghe",
    role: "Photography / Moderating Team",
    image: "/about/methmi.png",
  },
  {
    name: "Rtr. Sithruwani Jayarathna",
    role: "Moderating Team",
    image: "/about/sithruwani.png",
  },
  {
    name: "Rtr. Kaveesha Vimukthi",
    role: "Video Editor",
    image: "/about/kaveesha.png",
  },

];

export default function TeamSection() {
  return (
    <section className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-24 text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          
          <span className="text-[#f1f9f4]">Meet the</span>
          <span className="text-[#f70670]"> Team</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="mx-auto mb-4 h-60 w-48 overflow-hidden rounded-2xl bg-[#F70670]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-onest text-lg font-semibold text-[#f1f9f4]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 font-manrope text-sm text-gray-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
