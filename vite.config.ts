import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "IntercomWidget",
      fileName: (format) => `intercom-widget.${format}.js`,
    },
    rollupOptions: {
      // Ensure the React and ReactDOM are externalized to reduce bundle size
      // external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React", // Optional, only if you still want to provide globals
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    process: {
      env: { NODE_ENV: "production" },
    },
  },
});
