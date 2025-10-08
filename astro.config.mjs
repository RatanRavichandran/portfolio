// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://ratan.is-a.dev',
  base: '/', // Remove /portfolio base path since you're using a custom domain
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
