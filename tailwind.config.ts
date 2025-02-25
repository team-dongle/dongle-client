import type { Config } from "tailwindcss";

export default {
  content: ["./*/**.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        "50": "#f1f8fe",
        "100": "#e2f0fc",
        "200": "#bee1f9",
        "300": "#84c9f5",
        "400": "#31a6ec", // Default Color
        "500": "#1a94dd",
        "600": "#0d75bc",
        "700": "#0c5e98",
        "800": "#0e4f7e",
        "900": "#114369",
        "950": "#0c2a45",
      },
    },
  },
  plugins: [],
} satisfies Config;
