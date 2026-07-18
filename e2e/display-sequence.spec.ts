import { test, expect } from "@playwright/test";

test.describe("display sequence explorer", () => {
  test("defaults to the first manoeuvre", async ({ page }) => {
    await page.goto("/display");
    const panel = page.locator('[aria-live="polite"]');
    await expect(panel.getByRole("heading", { name: "Loop in Vic Formation" })).toBeVisible();

    const items = page.locator("ol > li");
    await expect(items.first().getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  test("selecting another manoeuvre updates the diagram panel", async ({ page }) => {
    await page.goto("/display");
    const items = page.locator("ol > li");
    const panel = page.locator('[aria-live="polite"]');

    await items.nth(2).getByRole("button").click();
    await expect(panel.getByRole("heading", { name: "Cloverleaf & Loop — Diamond" })).toBeVisible();
    await expect(items.nth(2).getByRole("button")).toHaveAttribute("aria-pressed", "true");
    await expect(items.first().getByRole("button")).toHaveAttribute("aria-pressed", "false");
  });

  test("order counter reflects the active step", async ({ page }) => {
    await page.goto("/display");
    const items = page.locator("ol > li");
    await items.nth(1).getByRole("button").click();
    await expect(page.locator("text=02 /")).toBeVisible();
  });
});
