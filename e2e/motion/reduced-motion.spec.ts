import { test, expect } from "@playwright/test";

/**
 * This spec runs under the `motion` project, which overrides the default
 * `reducedMotion: 'reduce'` context option with `no-preference` — these
 * assertions only hold when animation is actually enabled.
 */
test.describe("animation enabled (no-preference)", () => {
  test("active aircraft hotspot shows the animated ping ring", async ({ page }) => {
    await page.goto("/aircraft");
    // default active hotspot is "engine" — its ping ring only renders when useReducedMotion() is false
    const marker = page.getByRole("button", { name: "M-14P radial engine" });
    const pingRing = marker.locator(".animate-ping");
    await expect(pingRing).toBeVisible();
  });
});
