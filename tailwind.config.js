/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39c676",
        secondary: "#7acddc",
        accent: "#2f7fb1",
        text: "#06180e",
        bg: "#f4fbf5",
        "primary-dark": "#39c676",
        "secondary-dark": "#237685",
        "accent-dark": "#4e9ed0",
        "text-dark": "#e7f9ef",
        "bg-dark": "#040b05",
      },
      fontFamily: {
        sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
      },
    },
  },
  darkMode: "class",
};
