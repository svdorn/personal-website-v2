import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Bind IPv4 explicitly. Vite's default ("localhost") resolves to [::1]
    // on this machine, which leaves the server unreachable over 127.0.0.1.
    host: "127.0.0.1",
    port: 3000,
    open: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
  build: { outDir: "build" },
});
