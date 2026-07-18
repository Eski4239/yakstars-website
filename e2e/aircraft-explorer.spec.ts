import { test, expect } from "@playwright/test";

test.describe("aircraft explorer", () => {
  test("defaults to the first hotspot (engine)", async ({ page }) => {
    await page.goto("/aircraft");
    const detail = page.locator('[aria-live="polite"]');
    await expect(detail.getByRole("heading", { name: "M-14P radial engine" })).toBeVisible();

    const engineMarker = page.getByRole("button", { name: "M-14P radial engine" });
    await expect(engineMarker).toHaveAttribute("aria-pressed", "true");
  });

  test("clicking a hotspot swaps the detail card", async ({ page }) => {
    await page.goto("/aircraft");
    const detail = page.locator('[aria-live="polite"]');

    await page.getByRole("button", { name: "Tandem cockpit" }).click();
    await expect(detail.getByRole("heading", { name: "Tandem cockpit" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Tandem cockpit" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: "M-14P radial engine" })).toHaveAttribute("aria-pressed", "false");
  });

  test("each hotspot is keyboard focusable and activatable", async ({ page }) => {
    await page.goto("/aircraft");
    const gearMarker = page.getByRole("button", { name: "Semi-retractable gear" });
    await gearMarker.focus();
    await page.keyboard.press("Enter");
    await expect(gearMarker).toHaveAttribute("aria-pressed", "true");
  });
});
