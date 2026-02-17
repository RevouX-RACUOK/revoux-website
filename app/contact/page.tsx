"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState(null); // success | error
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

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

            {/* ✅ ALERT MESSAGE */}
            {status && (
              <div
                className={`mb-5 rounded-lg border px-4 py-3 text-sm font-medium ${
                  status === "success"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-red-500 bg-red-50 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="text-[#000000] grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
                className="w-full rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full resize-none rounded-lg border text-[#000000] border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#F70670]"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F70670] px-6 py-3 font-manrope text-sm font-medium text-white transition hover:bg-pink-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>

          {/* Right: Info (UNCHANGED) */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="mb-4 font-onest text-lg font-semibold">
                Contact Information
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">✉</span>
                  mediaunit.racuok@gmail.com
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">☎</span>
                  071 8788 420 | 070 3647 088 | 076 8224 295
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                  <span className="text-[#F70670]">📍</span>
                  Rotaract Club of University of Kelaniya, University of Kelaniya
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="p-6">
              <h3 className="mb-4 font-onest font-semibold">
                Follow Us
              </h3>

              <div className="mt-6 flex gap-10">
                <a
                  href="https://www.instagram.com/revoux.racuok?igsh=MXY0N2JsYzZtbHZueg=="
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-pink-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/share/1U8Stp3J5C/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-pink-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="https://vm.tiktok.com/ZSHEEsLHgBXve-00IHG/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black-800 text-pink-700 transition hover:bg-gray-100 hover:text-[#F70670]"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
