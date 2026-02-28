// Exercises the routed user experience on desktop and mobile viewports.
import { expect, test } from "@playwright/test";

const routes = {
  landing: "/",
  schedule: "/schedule",
  speakers: "/speakers",
  faq: "/faq",
  registration: "/register",
};

const speakerNames = [
  "Benjamin Baljic",
  "Konstantin Neyman",
  "Roman Balatskiy",
  "Daniel Clark",
  "Stepan Misiruk",
];

test.describe("Youth for God pages", () => {
  test("landing page shows the event theme, promo media, and registration CTA", async ({ page }) => {
    await page.goto(routes.landing);

    await expect(page.getByRole("heading", { name: /Solus Christus/i })).toBeVisible();
    await expect(page.getByText(/In Christ Alone/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Register Now/i })).toBeVisible();
    await expect(page.getByLabel(/Youth for God promo video/i)).toBeVisible();
    await expect(page.getByText(/John 14:6/i)).toBeVisible();
  });

  test("landing page CTA routes visitors to registration", async ({ page }) => {
    await page.goto(routes.landing);

    await page.getByRole("link", { name: /Register Now/i }).click();

    await expect(page).toHaveURL(/\/register$/);
    await expect(page.getByRole("heading", { name: /Secure Your Spot/i })).toBeVisible();
  });

  test("schedule page lists both conference days and key session times", async ({ page }) => {
    await page.goto(routes.schedule);

    await expect(page.getByRole("heading", { name: /^Schedule$/i })).toBeVisible();
    await expect(page.getByText(/May 22 – 23 · Sacramento/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Friday$/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Saturday$/i })).toBeVisible();
    await expect(page.getByText("7:30 AM")).toBeVisible();
    await expect(page.getByText("5:00 PM")).toBeVisible();
    await expect(page.getByText(/Youth Park\/Fellowship/i)).toBeVisible();
  });

  test("speakers page renders the full featured speaker roster", async ({ page }) => {
    await page.goto(routes.speakers);

    await expect(page.getByRole("heading", { name: /^Speakers$/i })).toBeVisible();
    await expect(page.getByText(/Meet the voices/i)).toBeVisible();

    for (const speakerName of speakerNames) {
      await expect(page.getByRole("heading", { name: speakerName })).toBeVisible();
    }
  });

  test("FAQ page expands logistics guidance and exposes support links", async ({ page }) => {
    await page.goto(routes.faq);

    await expect(page.getByRole("heading", { name: /Frequently Asked Questions/i })).toBeVisible();

    const venueQuestion = page.getByText("Where will the Y4G conference be held?");
    await venueQuestion.click();

    await expect(page.getByRole("link", { name: /1000 Sacramento Ave\., West Sacramento, CA/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email Support/i })).toHaveAttribute(
      "href",
      "mailto:contact@youth4god.org"
    );
  });

  test("registration page shows pricing, event details, and the hosted embed", async ({ page }) => {
    await page.goto(routes.registration, { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { name: /Secure Your Spot/i })).toBeVisible();
    await expect(page.getByText(/May 22 – 23, 2026/i)).toBeVisible();
    await expect(page.getByText(/Sacramento, California/i)).toBeVisible();
    await expect(page.getByText(/Early Bird \(until January 1\)/i)).toBeVisible();
    await expect(page.getByText(/\$40/i)).toBeVisible();
    await expect(page.locator('iframe[title*="Registration" i]')).toBeVisible();
  });

  test("shared footer keeps quick links and support contact available on interior pages", async ({ page }) => {
    await page.goto(routes.speakers);

    const footer = page.locator("footer");

    await expect(footer.getByRole("link", { name: /^Home$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /^Register$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /contact@youth4god.org/i })).toHaveAttribute(
      "href",
      "mailto:contact@youth4god.org"
    );
  });
});
