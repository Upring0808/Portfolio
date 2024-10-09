import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  assetsInclude: ["**/*.JPG"], // Include .JPG files as assets
  server: {
    hmr: {
      overlay: false, // This will disable the error overlay if you want to remove the pop-up error messages
    },
  },
});
