import { test, expect } from "@playwright/test";

test.describe("gallery lightbox", () => {
  test("opening a tile shows the dialog with its caption", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();

    const dialog = page.getByRole("dialog", { name: "Vic on the climb" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Opening pass, smoke on")).toBeVisible();
  });

  test("Escape closes the dialog", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();
    const dialog = page.getByRole("dialog", { name: "Vic on the climb" });
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("ArrowRight advances to the next image, ArrowLeft goes back", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();

    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("dialog", { name: "The crossing" })).toBeVisible();

    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("dialog", { name: "Vic on the climb" })).toBeVisible();
  });

  test("ArrowLeft from the first image wraps to the last image", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();

    await page.keyboard.press("ArrowLeft");
    const dialog = page.getByRole("dialog");
    await expect(dialog).not.toHaveAccessibleName("Vic on the climb");
  });

  test("close button (✕) closes the dialog", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();
    const dialog = page.getByRole("dialog", { name: "Vic on the climb" });

    await page.getByRole("button", { name: "Close", exact: true }).click();
    await expect(dialog).toBeHidden();
  });
});

test.describe("gallery lightbox — desktop-only prev/next controls", () => {
  // The ← / → arrow buttons are `hidden md:flex` and only rendered at desktop widths.
  test.beforeEach(({}, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "desktop-only controls");
  });

  test("Next button advances, Previous button goes back", async ({ page }) => {
    await page.goto("/gallery");
    await page.getByRole("button", { name: "Open “Vic on the climb”" }).click();

    await page.getByRole("button", { name: "Next" }).click();
    await expect(page.getByRole("dialog", { name: "The crossing" })).toBeVisible();

    await page.getByRole("button", { name: "Previous" }).click();
    await expect(page.getByRole("dialog", { name: "Vic on the climb" })).toBeVisible();
  });
});
