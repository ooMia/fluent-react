import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/jsx");
});

test("title", async ({ page }) => {
  await expect(page.locator("#title")).toContainText(/jsx/i);
});
