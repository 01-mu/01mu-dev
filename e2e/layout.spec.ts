import { expect, test } from "@playwright/test";

test.describe("layout snapshots", () => {
  const pages = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "tags", path: "/tags" },
  ];

  for (const pageInfo of pages) {
    test(pageInfo.name, async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: "domcontentloaded" });
      await page.locator("footer").waitFor();
      await expect(page).toHaveScreenshot(`${pageInfo.name}.png`, {
        fullPage: true,
      });
    });
  }
});
