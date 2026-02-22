

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // required for GitHub Pages static export
  images: {
    unoptimized: true, // VERY IMPORTANT for GitHub Pages
  },
  basePath: "/revoux-website",
  assetPrefix: "/revoux-website/",
};

export default nextConfig;




// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        onest: ["var(--font-onest)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
