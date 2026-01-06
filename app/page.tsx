import Image from "next/image";
import ShinyText from "@/components/ShinyText";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col items-center text-center">
        
        {/* Welcome Text */}
        <h1
          className="mb-0 text-1xl tracking-wide md:text-6xl"
          style={{ fontFamily: "var(--font-inter-black)" }}
        >
          Welcome To
        </h1>
        import ShinyText from './ShinyText';

        <ShinyText
          text="✨ Shiny Text Effect"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
        />

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="RevouX Logo"
          width={800}
          height={400}
          className="h-40 w-auto md:h-64 lg:h-80"
          priority
        />


      </section>
    </main>
  );
}
