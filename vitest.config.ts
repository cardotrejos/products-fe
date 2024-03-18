import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./setupTests.ts"],
    globals: true,
    environment: "jsdom",
  },
});
