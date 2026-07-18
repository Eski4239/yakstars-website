import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/about",
  "/team",
  "/team/pilots",
  "/team/pilots/miguel-padilla",
  "/team/support",
  "/aircraft",
  "/display",
  "/schedule",
  "/gallery",
  "/sponsors",
  "/media",
  "/contact",
  "/privacy",
  "/legal",
];

test.describe("route smoke tests", () => {
  for (const route of ROUTES) {
    test(`${route} renders with no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      page.on("pageerror", (err) => errors.push(err.message));

      const response = await page.goto(route);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("body")).toBeVisible();
      expect(errors).toEqual([]);
    });
  }

  test("unknown route renders the 404 page", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
  });
});
