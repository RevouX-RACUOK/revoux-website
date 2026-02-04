import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="px-6 pt-10 pb-16 text-center">
        <h1 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          
          <span className="text-[#f1f9f4]">Get in </span>
         <span className="text-[#f70670]">Touch</span>
        </h1>

        <p className="mt-4 mx-auto text-center font-manrope text-[#6a6a6a] text-base md:text-lg leading-relaxed max-w-xl">
          Have a project in mind? We’d love to hear from you. Let’s create
          something amazing together.
        </p>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="rounded-2xl border bg-white border-gray-200 p-8">
            <h2 className="mb-6 font-onest text-[#000000] text-lg font-semibold">
              Send us a message
            </h2>

            <form className="space-y-5">
              <div className=" text-[#000000] grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
                />
              </div>

              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
              />

              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full resize-none rounded-lg border text-[#000000]   border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F70670] px-6 py-3 font-manrope text-sm font-medium text-white transition hover:bg-pink-700"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="mb-4 font-onest text-lg font-semibold">
                Contact Information
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">✉</span>
                  hello@revoux.media
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">☎</span>
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">📍</span>
                  123 Creative Street, Media City, MC 12345
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-48 items-center justify-center rounded-2xl bg-pink-100 text-center text-sm text-gray-600">
              📍 Interactive map coming soon
            </div>

            {/* Office Hours */}
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="mb-4 font-onest font-semibold">
                Office Hours
              </h3>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
