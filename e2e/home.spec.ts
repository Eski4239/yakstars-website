import { test, expect } from "@playwright/test";

test.describe("home formation cycler", () => {
  test("starts on the vic formation", async ({ page }) => {
    await page.goto("/");
    const label = page.locator('p[aria-live="polite"]', { hasText: /formation$/ });
    await expect(label).toHaveText(/vic formation/i);
  });

  test("cycles to the next formation after the interval", async ({ page }) => {
    await page.goto("/");
    const label = page.locator('p[aria-live="polite"]', { hasText: /formation$/ });
    await expect(label).toHaveText(/vic formation/i);

    // component advances every 3200ms; wait past one tick for the next formation
    await expect(label).not.toHaveText(/vic formation/i, { timeout: 4000 });
    await expect(label).toHaveText(/diamond formation/i);
  });
});
