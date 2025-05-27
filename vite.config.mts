import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@layouts": "/src/layouts",
      "@/hooks": "/src/hooks",
      "@/lib": "/src/lib",
      "@/stores": "/src/stores",
      "@/views": "/src/views",
      "@/assets": "/src/assets",
      "@/routes": "/src/routes",
      "@/services": "/src/services",
      "@/constants": "/src/constants",
    },
  },
});
