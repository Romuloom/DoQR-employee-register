import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // Cor roxa usada no botão "Primary"
        text: "#000000", // Cor preta para o texto
        background: "#ffffff", // Cor branca para o fundo
        foreground: "#f3f4f6", // Cinza claro para contraste
      },
    },
  },
  plugins: [],
} satisfies Config;
