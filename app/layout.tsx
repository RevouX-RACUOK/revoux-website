import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Inter } from "next/font/google";


const interBlack = Inter({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-inter-black",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${interBlack.variable} bg-black text-white antialiased`}
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
