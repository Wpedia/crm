import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    }
  }
};

export default nextConfig;
