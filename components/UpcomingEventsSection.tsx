import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

type EventType = {
  title: string;
  description: string;
  image: string;
  cta?: string;
  link?: string;
  date?: string;
  time?: string;
  location?: string;
  contactName?: string;
  contactPhone?: string;
  price?: string;
};

const events: EventType[] = [
  {
    title: "Pixels 01st Round - Inter University Graphic Designing Competition",
    description:
      "Inter University Graphic designing competition organized by the Digital Media Avenue of the ROtaract Club of University of Kelaniya. This is a great opportunity for students to showcase their creativity and design skills.",
    image: "/events/pixels.png",
    date: "May 04, 2026",
    time: "08:00 AM onwards",
    cta: "Register Now!",
    link: "https://forms.gle/Ck6V4trtpmREe3jN9",

  },
  {
    title: "Career Fair '26 Closing Ceremony",
    description:
      "Unleash your creativity and bring your ideas to life! Challenges designers to craft visually compelling artwork that communicates a powerful message. This is your chance to showcase your talent, gain recognition.",
    date: "May 22, 2026",
    time: "13:00 PM - 15:00 PM",
    location: "Social Science Auditorium, University of Kelaniya",
    image: "/events/careerfair.jpeg",
    
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
              <div className="flex flex-1 flex-col justify-between md:pr-6">
                <div>
                  <h3 className="font-onest text-xl md:text-2xl font-semibold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-3 font-manrope text-gray-400 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Price */}
                  {event.price && (
                    <div className="mt-3 text-sm font-medium text-[#ffffff]">
                      💰 {event.price}
                    </div>
                  )}

                  {/* Meta info */}
                  {(event.date || event.time || event.location) && (
                    <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-500">
                      {event.date && (
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-[#F70670]" />
                          {event.date}
                        </div>
                      )}

                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-[#F70670]" />
                          {event.time}
                        </div>
                      )}

                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#F70670]" />
                          {event.location}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Contact */}
                  {event.contactPhone && (
                    <a
                      href={`tel:${event.contactPhone}`}
                      className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-white transition"
                    >
                      <Phone size={16} className="text-[#F70670]" />
                      {event.contactName} ({event.contactPhone})
                    </a>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6 flex md:block">
                  {event.link && (
                    <Link
                      href={event.link}
                      target="_blank"
                      className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-xl bg-[#F70670] px-6 py-3 font-manrope text-sm font-medium text-white transition hover:bg-pink-700"
                    >
                      {event.cta}
                      <span>→</span>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}