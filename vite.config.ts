import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import path from "path";

// React Router v7 framework mode (SPA + prerender). The reactRouter() plugin
// replaces the standard React plugin and owns the entry point; index.html is
// no longer used. See react-router.config.ts for ssr/prerender settings.
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [reactRouter()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
