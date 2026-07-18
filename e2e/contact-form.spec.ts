import { test, expect } from "@playwright/test";

/**
 * ContactForm has no client-side error UI — it relies on native HTML5
 * `required` validation and composes a `mailto:` link on submit (no backend).
 * Assigning `location.href = "mailto:…"` surfaces as a `request` event for the
 * mailto: URL without the browser actually leaving the page — we capture that
 * request instead of trying to monkey-patch `location` (its `href` property
 * is non-configurable in Chromium, so patching it silently no-ops).
 */
function waitForMailtoRequest(page: import("@playwright/test").Page) {
  return page.waitForRequest((req) => req.url().startsWith("mailto:"));
}

test.describe("contact form", () => {
  test("required fields block submission", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Open in your mail app" }).click();

    // native validation should keep us on the page, nothing submitted
    await expect(page).toHaveURL(/\/contact$/);
    const nameValid = await page.locator("#cf-name").evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(nameValid).toBe(false);
  });

  test("happy path composes a mailto link with the entered details", async ({ page }) => {
    await page.goto("/contact");

    await page.locator("#cf-name").fill("Ada Lovelace");
    await page.locator("#cf-org").fill("Airshow Org");
    await page.locator("#cf-subject").selectOption("Sponsorship & partnership");
    await page.locator("#cf-message").fill("We'd love to have the Yakstars fly our show.");

    const [mailtoRequest] = await Promise.all([
      waitForMailtoRequest(page),
      page.getByRole("button", { name: "Open in your mail app" }).click(),
    ]);

    const href = mailtoRequest.url();
    expect(href).toMatch(/^mailto:yakstars@yahoo\.com\?subject=/);
    expect(decodeURIComponent(href)).toContain("[Sponsorship & partnership] Ada Lovelace");
    expect(decodeURIComponent(href)).toContain("Organisation: Airshow Org");
    expect(decodeURIComponent(href)).toContain("We'd love to have the Yakstars fly our show.");
  });

  test("organisation is omitted from the body when left blank", async ({ page }) => {
    await page.goto("/contact");

    await page.locator("#cf-name").fill("Ada Lovelace");
    await page.locator("#cf-message").fill("Media enquiry details here.");

    const [mailtoRequest] = await Promise.all([
      waitForMailtoRequest(page),
      page.getByRole("button", { name: "Open in your mail app" }).click(),
    ]);

    expect(decodeURIComponent(mailtoRequest.url())).not.toContain("Organisation:");
  });
});
