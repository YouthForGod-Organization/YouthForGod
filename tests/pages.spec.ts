// Exercises the routed user experience on desktop and mobile viewports.
import { expect, test } from "@playwright/test";
import { config as loadEnv } from "dotenv";

loadEnv({ path: process.env.DOTENV_CONFIG_PATH || ".env", quiet: true });

const routes = {
  landing: "/",
  schedule: "/schedule",
  speakers: "/speakers",
  media: "/media",
  faq: "/faq",
  registration: "/register",
};

const hiddenConferenceRoutes = [
  routes.schedule,
  routes.speakers,
  routes.faq,
  routes.registration,
];

const conferenceRouteHeadings = [
  { route: routes.schedule, heading: /^Schedule$/i },
  { route: routes.speakers, heading: /^Speakers$/i },
  { route: routes.faq, heading: /Frequently Asked Questions/i },
  { route: routes.registration, heading: /Secure Your Spot/i },
];

const speakerNames = [
  "Roman Balatskiy",
  "Daniel Clark",
  "Ivan Dzyuba",
  "Andrey Sentsov",
];

const showConferencePages = ["1", "true", "yes"].includes(
  String(process.env.YFG_SHOW_CONFERENCE_PAGES || "").toLowerCase()
);

const conferenceOnlyTest = showConferencePages ? test : test.skip;

test.describe("Youth for God pages", () => {
  test("landing page opens with artwork and retains promo media", async ({ page, isMobile }) => {
    await page.goto(routes.landing);

    await expect(page.locator("#home.yfg-hero")).toBeVisible();
    const artwork = page.getByRole("img", { name: "Living as the Light — Ephesians 5:8. Youth for God, May 28–29, 2027." });
    await expect(artwork).toBeVisible();
    await expect.poll(() => artwork.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    await expect.poll(() => artwork.evaluate((img: HTMLImageElement) => img.currentSrc)).toContain(
      isMobile ? "/living-as-the-light-hero-mobile.jpg" : "/living-as-the-light-hero.jpg"
    );
    const artworkBox = await artwork.boundingBox();
    expect(artworkBox!.width / artworkBox!.height).toBeCloseTo(isMobile ? 9 / 16 : 16 / 9, 2);
    await expect(page.locator(".yfg-hero__intro")).toHaveCount(0);
    await expect(page.locator(".yfg-hero").getByRole("link", { name: /View Media/i })).toHaveCount(0);
    await expect(page.getByLabel(/Youth for God promo video/i)).toBeVisible();
    await expect(page.getByText("Ephesians 5:8", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Youth For God Conference 2027" })).toBeVisible();
  });

  test("landing page navigation routes visitors to media", async ({ page, isMobile }) => {
    await page.goto(routes.landing);

    if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.locator("header").getByRole("link", { name: "Media", exact: true }).click();

    await expect(page).toHaveURL(/\/media$/);
    await expect(page.getByRole("heading", { name: /2026 Conference Media/i })).toBeVisible();
  });

  test("conference planning navigation follows the feature flag", async ({ page, isMobile }) => {
    await page.goto(routes.landing);
    if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();

    const header = page.locator("header");
    const footer = page.locator("footer");

    const expectedLinkCount = showConferencePages ? 1 : 0;

    await expect(header.getByRole("link", { name: /^Speakers$/i })).toHaveCount(expectedLinkCount);
    await expect(header.getByRole("link", { name: /^Schedule$/i })).toHaveCount(expectedLinkCount);
    await expect(header.getByRole("link", { name: /^FAQ$/i })).toHaveCount(expectedLinkCount);
    await expect(header.getByRole("link", { name: /^Register$/i })).toHaveCount(expectedLinkCount);
    await expect(footer.getByRole("link", { name: /^Speakers$/i })).toHaveCount(expectedLinkCount);
    await expect(footer.getByRole("link", { name: /^Schedule$/i })).toHaveCount(expectedLinkCount);
    await expect(footer.getByRole("link", { name: /^Register$/i })).toHaveCount(expectedLinkCount);
  });

  conferenceOnlyTest("schedule page lists both conference days and key session times", async ({ page }) => {
    await page.goto(routes.schedule);

    await expect(page.getByRole("heading", { name: /^Schedule$/i })).toBeVisible();
    await expect(page.getByText(/May 28 – 29, 2027 · Citrus Heights/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Friday$/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /^Saturday$/i })).toBeVisible();

    const friday = page.locator(".schedule__card").filter({
      has: page.getByRole("heading", { name: /^Friday$/i }),
    });
    const saturday = page.locator(".schedule__card").filter({
      has: page.getByRole("heading", { name: /^Saturday$/i }),
    });

    await expect(friday.getByText("5:00 PM", { exact: true })).toBeVisible();
    await expect(friday.getByText("Session I · Introduction", { exact: true })).toBeVisible();
    await expect(friday.getByText("8:30 – 10:00 PM")).toBeVisible();
    await expect(saturday.getByText("7:00 AM", { exact: true })).toBeVisible();
    for (const title of ["Expose the works of Darkness", "The best use of Time", "Be filled with the Spirit", "Be imitators of God"]) {
      await expect(saturday.getByText(title, { exact: false })).toBeVisible();
    }
    await expect(saturday.getByText("12:30 PM", { exact: true })).toBeVisible();
    await expect(saturday.getByText("7:00 – 9:00 PM")).toBeVisible();
    await expect(saturday.getByText("Bonfire", { exact: true })).toBeVisible();
    await expect(page.locator(".schedule__session-meta, .schedule__session-summary, .schedule__session-texts")).toHaveCount(0);
    await expect(page.getByText(/Speaker to be assigned|Supporting texts:|45 ± 5 minutes/)).toHaveCount(0);
  });

  conferenceOnlyTest("speakers page renders the full featured speaker roster", async ({ page }) => {
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

  test("direct conference route visits follow the feature flag", async ({ page }) => {
    if (showConferencePages) {
      for (const { route, heading } of conferenceRouteHeadings) {
        await page.goto(route);

        await expect(page).toHaveURL(new RegExp(`${route}$`));
        await expect(page.getByRole("heading", { name: heading })).toBeVisible();
      }
    } else {
      for (const hiddenRoute of hiddenConferenceRoutes) {
        await page.goto(hiddenRoute);

        await expect(page).toHaveURL(/\/$/);
        await expect(page.locator("#home.yfg-hero")).toBeVisible();
      }
    }
  });

  conferenceOnlyTest("FAQ page expands logistics guidance and exposes support links", async ({ page }) => {
    await page.goto(routes.faq);

    await expect(page.getByRole("heading", { name: /Frequently Asked Questions/i })).toBeVisible();

    const venueQuestion = page.getByText("Where will the Y4G conference be held?");
    await venueQuestion.click();

    await expect(page.getByText("Bible Baptist Church, Citrus Heights, CA", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email Support/i })).toHaveAttribute("href", "mailto:contact@youth4god.org");
    await page.getByText("What are the dates for Y4G conference?").click();
    await expect(page.getByText(/Friday, May 28 and Saturday, May 29, 2027/)).toBeVisible();
    await page.getByText("Will food be provided?").click();
    await expect(page.getByText(/Saturday lunch at 12:30 PM and supper at 6:00 PM/)).toBeVisible();
    await expect(page.getByText(/same-day registration remains \$60|March 31st|Thursday, May 21/i)).toHaveCount(0);
  });

  conferenceOnlyTest("registration page shows current event details", async ({ page }) => {
    await page.goto(routes.registration, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /Secure Your Spot/i })).toBeVisible();
    await expect(page.getByText("May 28 – 29, 2027", { exact: true })).toBeVisible();
    await expect(page.getByText(/Bible Baptist Church, Citrus Heights/)).toBeVisible();
    await expect(page.getByText(/Thursday, May 21/)).toHaveCount(0);
    await expect(page.locator('iframe[title*="Registration"]')).toHaveAttribute("src", "https://subsplash.com/bbc-ca/lb/ev/+pn3qtnr/register");
  });

  test("shared footer keeps quick links and support contact available on interior pages", async ({ page }) => {
    await page.goto(routes.media);

    const footer = page.locator("footer");

    await expect(footer.getByRole("link", { name: /^Home$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /^Media$/i })).toBeVisible();
    await expect(footer.getByRole("link", { name: /^Register$/i })).toHaveCount(
      showConferencePages ? 1 : 0
    );
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


test("redesigned pages preserve branding and fit the viewport", async ({ page }, testInfo) => {
  const visibleRoutes = showConferencePages ? Object.values(routes) : ["/", "/media"];
  for (const route of visibleRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("header img[alt='Youth for God']")).toBeVisible();
    await expect(page.locator("footer img[alt='Youth for God']")).toBeVisible();
    await expect(page.locator("footer")).toContainText("Sacramento, CA");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (process.env.YFG_CAPTURE_SCREENSHOTS === "true") {
      await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll("/", "") || "home"}.png`), fullPage: true });
    }
  }
});

test("mobile navigation opens and closes after following a link", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile menu only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.locator("header").getByRole("link", { name: "Media", exact: true }).click();
  await expect(page).toHaveURL(/\/media$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});
