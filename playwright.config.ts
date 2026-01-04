import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  outputDir: "e2e/output",
  snapshotPathTemplate: "e2e/snapshots/{testFilePath}/{arg}{ext}",
  use: {
    baseURL: "http://localhost:4321",
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
