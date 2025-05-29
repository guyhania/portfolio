import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // padding: {
      //   2: 'calc(var(--spacing) * 2)', // will apply to .p-2, .px-2, .py-2, etc.
      // },
      colors: {
        zinc: {
          50: "var(--color-zinc-50)",
          100: "var(--color-zinc-100)",
          200: "var(--color-zinc-200)",
          300: "var(--color-zinc-300)",
          400: "var(--color-zinc-400)",
          500: "var(--color-zinc-500)",
          600: "var(--color-zinc-600)",
          700: "var(--color-zinc-700)",
          800: "var(--color-zinc-800)",
          900: "var(--color-zinc-900)",
          950: "var(--color-zinc-950)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config; 