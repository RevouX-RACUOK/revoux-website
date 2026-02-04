export default function CallToAction() {
  return (
    <section className="w-full bg-[#000000] py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-center font-onest font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-[#f1f9f4]">Ready to Create </span>
            <br/>
            <span className="text-[#f70670]">Something Amazing</span>
        
          
        </h2>

        {/* Subtext */}
        <p className="mt-5 mx-auto text-center font-manrope text-[#494b49] text-base md:text-lg leading-relaxed max-w-xl">
          Let’s collaborate and bring your vision to life. Our team is ready to
          make magic happen.
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-[#F70670] px-8 py-4 font-manrope font-semibold text-white transition hover:bg-[#e00566]">
            Start Your Project
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
