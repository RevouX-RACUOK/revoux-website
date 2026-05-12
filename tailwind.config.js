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

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'loading-bar': 'loadingBar 2.5s infinite ease-in-out',
      },
      keyframes: {
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}