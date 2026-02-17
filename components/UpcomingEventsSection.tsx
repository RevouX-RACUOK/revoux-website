import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Creative Summit 2024",
    description:
      "Join us for an immersive day of workshops, panels, and networking with industry leaders.",
    date: "March 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Downtown Convention Center",
    image: "/events/creative-summit.jpg",
    cta: "Register Now",
  },
  {
    title: "Film Screening",
    description:
      "Short film",
    date: "March 22, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Revoux Studio Theater",
    image: "/events/film-screening.jpg",
    cta: "Register Now",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Events list */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 rounded-3xl border bg-black border-pink-900 p-6 md:p-8"
            >
              {/* Image */}
              <div className="relative h-56 w-full md:h-44 md:w-80 overflow-hidden rounded-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-onest text-xl md:text-2xl font-semibold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-3 font-manrope text-gray-400 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Meta info */}
                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#F70670]" />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#F70670]" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#F70670]" />
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <button className="inline-flex items-center gap-3 rounded-xl bg-[#F70670] px-6 py-3 font-manrope text-sm font-medium text-white transition hover:bg-pink-700">
                    {event.cta}
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
