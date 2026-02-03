import type { Metadata } from "next";
import { Onest, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RevouX | Official Media Unit",
  description: "Capturing moments, creating stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} ${manrope.variable} bg-[#000000] text-[#F1F9F4] antialiased`}
      >
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
