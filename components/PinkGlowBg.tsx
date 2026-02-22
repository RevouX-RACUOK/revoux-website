"use client";

export default function PinkGlowBg() {
  return (
    <>
      {/* Large Center Glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/40 blur-[180px]" />

      {/* Side Glow */}
      <div className="absolute -z-10 top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-500/30 blur-[160px]" />

      {/* Bottom Glow */}
      <div className="absolute -z-10 bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-500/30 blur-[160px]" />
    </>
  );
}