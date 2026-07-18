import { test, expect } from "@playwright/test";

// Desktop and mobile viewports come from the `chromium` / `mobile-chrome`
// projects in playwright.config.ts — these groups just target one each.

test.describe("desktop nav", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "desktop-only");
  });

  test("nav links navigate to the right routes", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });

    await nav.getByRole("link", { name: "Aircraft" }).click();
    await expect(page).toHaveURL(/\/aircraft$/);

    await nav.getByRole("link", { name: "The Display" }).click();
    await expect(page).toHaveURL(/\/display$/);
  });

  test("Book the Team link goes to contact", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: "Book the Team" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("active link is highlighted for the current route", async ({ page }) => {
    await page.goto("/aircraft");
    const activeLink = page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Aircraft" });
    await expect(activeLink).toHaveClass(/text-blue/);
  });
});

test.describe("mobile nav", () => {
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chrome", "mobile-only");
  });

  test("hamburger opens and closes the overlay menu", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toBeVisible();

    await toggle.click();
    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(menu).toBeHidden();
  });

  test("menu is keyboard accessible and closes on link activation", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await toggle.focus();
    await page.keyboard.press("Enter");

    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    await menu.getByRole("link", { name: "Aircraft" }).click();
    await expect(page).toHaveURL(/\/aircraft$/);
    await expect(menu).toBeHidden();
  });
});
