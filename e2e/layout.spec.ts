import { expect, test } from "@playwright/test";

test.describe("layout snapshots", () => {
  const pages = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "tags", path: "/tags" },
  ];
  const viewports = [
    // Capture both desktop and mobile to validate responsive layout changes.
    { name: "desktop", width: 1280, height: 720 },
    { name: "mobile", width: 390, height: 844 },
  ];

  for (const pageInfo of pages) {
    for (const viewport of viewports) {
      test(`${pageInfo.name}-${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });
        await page.goto(pageInfo.path, { waitUntil: "domcontentloaded" });
        await page.locator("footer").waitFor();
        await expect(page).toHaveScreenshot(
          `${pageInfo.name}-${viewport.name}.png`,
          {
            fullPage: true,
          },
        );
      });
    }
  }
});
