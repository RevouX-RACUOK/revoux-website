import Image from "next/image";
import ShinyText from "@/components/ShinyText";
import LightPillar from "@/components/Lightpillar";


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* 🔵 LightPillar Background */}
      <div className="fixed inset-0 -z-10">
        <LightPillar
          topColor="#000000"
          bottomColor="#fc03ba"
        />
      </div>

      {/* 🔤 Foreground Content */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center">

        <ShinyText
          text="Welcome To"
          speed={2}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          className="mb-0 text-4xl md:text-6xl tracking-wide"
        />

        <Image
          src="/logo.png"
          alt="RevouX Logo"
          width={800}
          height={400}
          className="-mt-10 h-40 w-auto md:h-64 lg:h-80"
          priority
        />

      </section>
    </main>
  );
}
