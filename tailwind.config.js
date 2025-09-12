/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "bg-noise": {
          backgroundImage: `url('${
            import.meta.env.VITE_BASE_URL
          }images/noise.png')`,
        },
      });
    },
  ],
};
