import("./e2e/register.ts");

import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:5173",
    headless: true,
  },
  webServer: {
    command: "pnpm dev",
    port: 5173,
    reuseExistingServer: true,
  },
});
