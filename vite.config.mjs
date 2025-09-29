import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import detectPort from "detect-port";

const DEFAULT_PORT = 5173;

// Function to find the first available port starting from DEFAULT_PORT
async function getAvailablePort(startPort) {
  let port = startPort;
  while (true) {
    const freePort = await detectPort(port);
    if (freePort === port) return port;
    port++;
  }
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const port = await getAvailablePort(DEFAULT_PORT);

  console.log(`🚀 Dev server running on http://localhost:${port}`);

  return {
    // Build config
    build: {
      outDir: "build",
      chunkSizeWarningLimit: 2000,
    },
    plugins: [tsconfigPaths(), react(), tagger()],
    server: {
      port,
      host: "0.0.0.0",
      strictPort: false, // now false so Vite can pick next available port
      allowedHosts: ['.amazonaws.com', '.builtwithrocket.new'],
    },
  };
});
