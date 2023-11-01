/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "9xl": "900px",
        50: "50px",
      },
      colors: { summaryGray: "#EAEAEC", odu: "#1C3766" },
      brightness: {
        40: ".40",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        0.08: "0.08em",
        1.5: "1.5px",
      },
      fontSize: {
        title: "32px",
        summary: "22px",
        iconLabel: "14px",
        technologies: "16px",
      },
      fontWeight: {
        250: "250",
        200: "200",
        225: "225",
      },
      width: {
        50: "50px",
        640: "640px",
      },
      padding: {
        68: "68px",
        resume: "22px 38px",
        6: "24px",
      },
      maxWidth: {
        256: "256px",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
