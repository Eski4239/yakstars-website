import { test, expect } from "@playwright/test";

test.describe("home page", () => {
  test("hero shows the wordmark and tagline", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "YAKSTARS" })).toBeVisible();
    await expect(
      page.getByText("The first Spanish–Portuguese Aerobatic Display Team flying Yak-52 Warbirds."),
    ).toBeVisible();
  });

  test("shows section lists an event and links to the schedule", async ({ page }) => {
    await page.goto("/");
    // Label flips between "Up next" and "Recent shows" depending on whether any
    // sample event in src/data/events.ts is still in the future relative to today.
    await expect(page.getByText(/^(Up next|Recent shows)$/)).toBeVisible();
    await page.getByRole("link", { name: "Full schedule →" }).click();
    await expect(page).toHaveURL(/\/schedule$/);
  });

  test("display slideshow advances through manoeuvres", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Loop in Vic Formation" })).toBeVisible();

    await page.getByRole("button", { name: "Next manoeuvre" }).click();
    await expect(page.getByRole("heading", { name: "Solo Manoeuvres" })).toBeVisible();

    await page.getByRole("button", { name: "Previous manoeuvre" }).click();
    await expect(page.getByRole("heading", { name: "Loop in Vic Formation" })).toBeVisible();
  });

  test("team grid links to the team page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Miguel Padilla/ }).click();
    await expect(page).toHaveURL(/\/team$/);
  });

  test("aircraft hook links to the aircraft page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Explore the Yak-52/ }).click();
    await expect(page).toHaveURL(/\/aircraft$/);
  });

  test("final CTA links work", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Become a sponsor" }).click();
    await expect(page).toHaveURL(/\/sponsors$/);
  });
});
