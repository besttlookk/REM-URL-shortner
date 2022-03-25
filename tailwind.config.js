module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/layouts/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "hsl(180, 66%, 49%)",
        primaryDark: "hsl(257, 27%, 26%)",
        danger: "hsl(0, 87%, 67%)",
        para: "hsl(257, 7%, 63%)",
        head: "hsl(255, 11%, 22%)",
        voiletDark: "hsl(260, 8%, 14%)",
        fade: "hsl(0, 0%, 75%)",
      },
      screens: {
        laptop: "1040px",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        autofill: "repeat(auto-fill, minmax(220px, 1fr))",
      },

      width: {
        "90w": "90vw",
      },
    },
  },
  plugins: [],
};
