// Exercises the routed user experience on desktop and mobile viewports.
import { expect, test } from "@playwright/test";

const routes = {
  landing: "/",
  schedule: "/schedule",
  speakers: "/speakers",
  media: "/media",
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
  test("landing page shows the event theme, promo media, and media CTA", async ({ page }) => {
    await page.goto(routes.landing);

    await expect(page.locator("#home.yfg-hero")).toBeVisible();
    const mediaCta = page.locator(".yfg-hero").getByRole("link", { name: /View Media/i });
    await expect(mediaCta).toBeVisible();
    await expect(mediaCta).toHaveCSS("animation-name", "yfg-media-cta-jump");
    await expect(page.locator(".yfg-hero").getByRole("link", { name: /Register Now/i })).toHaveCount(0);
    await expect(page.getByLabel(/Youth for God promo video/i)).toBeVisible();
    await expect(page.getByText(/John 14:6/i)).toBeVisible();
  });

  test("landing page CTA routes visitors to media", async ({ page }) => {
    await page.goto(routes.landing);

    await page.locator(".yfg-hero").getByRole("link", { name: /View Media/i }).click();

    await expect(page).toHaveURL(/\/media$/);
    await expect(page.getByRole("heading", { name: /2026 Conference Media/i })).toBeVisible();
  });

  test("schedule page lists both conference days and key session times", async ({ page }) => {
    await page.goto(routes.schedule);

    await expect(page.getByRole("heading", { name: /^Schedule$/i })).toBeVisible();
    await expect(page.getByText(/May 22 – 23 · Sacramento/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Friday$/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Saturday$/i })).toBeVisible();

    const friday = page.locator(".schedule__card").filter({
      has: page.getByRole("heading", { name: /^Friday$/i }),
    });
    const saturday = page.locator(".schedule__card").filter({
      has: page.getByRole("heading", { name: /^Saturday$/i }),
    });

    await expect(friday.getByText("8:00 AM")).toBeVisible();
    await expect(friday.getByText("Registration")).toBeVisible();
    await expect(friday.getByText("8:00 - 9:30 AM")).toBeVisible();
    await expect(friday.getByText("Coffee Cart Open")).toBeVisible();
    await expect(saturday.getByText("8:00 AM")).toBeVisible();
    await expect(saturday.getByText("Registration")).toBeVisible();
    await expect(saturday.getByText("8:00 - 9:30 AM")).toBeVisible();
    await expect(saturday.getByText("Coffee Cart Open")).toBeVisible();
    await expect(saturday.getByText("3:00 PM")).toBeVisible();
    await expect(saturday.getByText(/Park \/ Dinner/i)).toBeVisible();
  });

  test("speakers page renders the full featured speaker roster", async ({ page }) => {
    await page.goto(routes.speakers);

    await expect(page.getByRole("heading", { name: /^Speakers$/i })).toBeVisible();
    await expect(page.getByText(/Meet the voices/i)).toBeVisible();

    for (const speakerName of speakerNames) {
      await expect(page.getByRole("heading", { name: speakerName })).toBeVisible();
    }
  });

  test("media page separates conference sermons and music videos", async ({ page }) => {
    await page.goto(routes.media);

    await expect(page.getByRole("heading", { name: /2026 Conference Media/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Sermons$/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Music Videos$/i })).toBeVisible();

    const sermons = page.locator(".media__section").filter({
      has: page.getByRole("heading", { name: /^Sermons$/i }),
    });
    const music = page.locator(".media__section").filter({
      has: page.getByRole("heading", { name: /^Music Videos$/i }),
    });

    await expect(sermons.getByRole("heading", { name: /Христос в истории/i })).toBeVisible();
    await expect(sermons.getByRole("heading", { name: /Христос - Пророк/i })).toBeVisible();
    await expect(
      sermons.getByRole("link", { name: /Watch Христос в истории on YouTube/i })
    ).toHaveAttribute("href", "https://www.youtube.com/watch?v=xKLiXmKJbxg");

    await expect(music.getByRole("heading", { name: /Jesus - There's Just Something About That Name/i })).toBeVisible();
    await expect(music.getByRole("heading", { name: /Ты вошел в жизнь мою/i })).toBeVisible();
    await expect(music.getByRole("heading", { name: /Господи, услыши/i })).toBeVisible();
    await expect(
      music.getByRole("link", { name: /Watch Господи, услыши on YouTube/i })
    ).toHaveAttribute("href", "https://www.youtube.com/watch?v=ZHEvi9W7sww");
    await expect(music.getByRole("heading", { name: /Ты достоин принять всю славу и честь/i })).toBeVisible();
    await expect(music.getByRole("heading", { name: /Кто приносит в жертву хвалу/i })).toBeVisible();
    await expect(
      music.getByRole("link", { name: /Watch Кто приносит в жертву хвалу on YouTube/i })
    ).toHaveAttribute("href", "https://www.youtube.com/watch?v=hnFKywbVMAU");
  });

  test("FAQ page expands logistics guidance and exposes support links", async ({ page }) => {
    await page.goto(routes.faq);

    await expect(page.getByRole("heading", { name: /Frequently Asked Questions/i })).toBeVisible();

    const venueQuestion = page.getByText("Where will the Y4G conference be held?");
    await venueQuestion.click();

    await expect(page.getByRole("link", { name: /1000 Sacramento Ave, West Sacramento, CA/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email Support/i })).toHaveAttribute(
      "href",
      "mailto:contact@youth4god.org"
    );

    await page.getByText("Will registration prices change as we get closer to the conference?").click();
    await expect(page.getByText(/same-day registration remains \$60/i)).toBeVisible();
    await expect(page.getByText(/no day-of upcharge/i)).toBeVisible();

    await page.getByText("Can I get a refund if I cancel my registration?").click();
    await expect(page.getByText(/Thursday, May 21 at 11:59 PM/i)).toBeVisible();
    await expect(page.getByText(/strict deadline/i)).toBeVisible();

    await page.getByText("Will food be provided?").click();
    await expect(page.getByText(/providing lunch both days and dinner only Saturday at the park/i)).toBeVisible();
    await expect(page.getByText(/dietary restrictions or allergies/i)).toBeVisible();

    await page.getByText("When is the deadline for registering for the conference?").click();
    await expect(page.getByText(/online registration closes March 31st/i)).toBeVisible();
    await expect(page.getByText(/same-day registration will still be available for \$60/i)).toBeVisible();
  });

  test("registration page shows event details and the hosted embed", async ({ page }) => {
    await page.goto(routes.registration, { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("heading", { name: /Secure Your Spot/i })).toBeVisible();
    await expect(page.getByText(/May 22 – 23, 2026/i)).toBeVisible();
    await expect(page.getByText(/Sacramento, California/i)).toBeVisible();
    const refundDeadline = page.getByText("Refund Deadline: Thursday, May 21 at 11:59 PM");
    await expect(refundDeadline).toBeVisible();
    await expect(refundDeadline).toHaveCSS("text-align", "center");
    await expect(page.locator('iframe[title*="Registration" i]')).toBeVisible();
  });

  test("shared footer keeps quick links and support contact available on interior pages", async ({ page }) => {
    await page.goto(routes.speakers);

    const footer = page.locator("footer");

    await expect(footer.getByRole("link", { name: /^Home$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /^Media$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /^Register$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /contact@youth4god.org/i })).toHaveAttribute(
      "href",
      "mailto:contact@youth4god.org"
    );
    await expect(footer.getByRole("link", { name: /^Instagram$/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/youth4godcon/"
    );
  });
});
