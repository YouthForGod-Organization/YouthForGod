// Exercises the routed user experience on desktop and mobile viewports.
import { expect, test } from "@playwright/test";
import { config as loadEnv } from "dotenv";

loadEnv({ path: process.env.DOTENV_CONFIG_PATH || ".env", quiet: true });

const routes = {
  landing: "/",
  schedule: "/schedule",
  media: "/media",
  faq: "/faq",
  registration: "/register",
};

const conferenceRouteHeadings = [
  { route: routes.schedule, heading: /^Schedule$/i },
  { route: routes.faq, heading: /Frequently Asked Questions/i },
  { route: routes.registration, heading: /Secure Your Spot/i },
];

test.describe("Youth for God pages", () => {
  test("landing page opens with artwork and retains promo media", async ({ page, isMobile }) => {
    await page.goto(routes.landing);

    await expect(page.locator("#home.yfg-hero")).toBeVisible();
    const artwork = page.getByRole("img", { name: "Youth for God Conference — Ephesians 5:8. May 28–29, 2027." });
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

  test("home promo offers the current conference video on demand", async ({ page }) => {
    await page.goto(routes.landing);

    const promo = page.getByRole("region", { name: "2027 conference promo" });
    await expect(promo).toBeVisible();
    await expect(promo.getByRole("button", { name: "Play conference video" })).toBeVisible();
    await expect(promo.getByRole("img")).toHaveCount(0);
    await expect(promo).not.toContainText("2027 · LIVING AS THE LIGHT");
    const video = promo.getByLabel("Youth for God promo video");
    await expect(video).toHaveAttribute("controls", "");
    await expect(video).toHaveAttribute("playsinline", "");
    await expect(video).toHaveAttribute("preload", "metadata");
    await expect(video).not.toHaveAttribute("autoplay");
    await expect(video.locator("source")).toHaveCount(1);
    await expect(video.locator("source")).toHaveAttribute("type", "video/mp4");
    expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  });

  test("home promo decodes and plays the supplied video", async ({ page, isMobile }) => {
    await page.goto(routes.landing);
    const promo = page.getByRole("region", { name: "2027 conference promo" });
    const video = promo.getByLabel("Youth for God promo video");
    const supportsMp4 = await video.evaluate((element: HTMLVideoElement) =>
      element.canPlayType('video/mp4; codecs="avc1.640028, mp4a.40.2"') !== ""
    );
    test.skip(!supportsMp4, "This browser build lacks H.264/AAC; run with PLAYWRIGHT_CHROMIUM_CHANNEL=chrome for desktop playback coverage.");
    await video.scrollIntoViewIfNeeded();
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => ({
      ready: element.readyState >= 1,
      error: element.error?.message ?? null,
    }))).toEqual({ ready: true, error: null });
    const metadata = await video.evaluate((element: HTMLVideoElement) => ({
      duration: element.duration,
      width: element.videoWidth,
      height: element.videoHeight,
      paused: element.paused,
    }));
    expect(metadata.duration).toBeCloseTo(57.33, 0);
    expect(metadata.width).toBe(1920);
    expect(metadata.height).toBe(1080);
    expect(metadata.paused).toBe(true);
    const playButton = promo.getByRole("button", { name: "Play conference video" });
    if (isMobile) {
      await playButton.tap();
    } else {
      await playButton.focus();
      await page.keyboard.press("Enter");
    }
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
    await expect(playButton).toBeHidden();
    await video.evaluate((element: HTMLVideoElement) => element.pause());
  });

  test("home promo keeps controls available when playback is rejected", async ({ page }) => {
    await page.goto(routes.landing);
    await page.getByLabel("Youth for God promo video").evaluate((element: HTMLVideoElement) => {
      element.play = () => Promise.reject(new Error("Playback unavailable"));
    });
    await page.getByRole("button", { name: "Play conference video" }).click();
    await expect(page.getByRole("alert")).toContainText("Please try the video controls");
    await expect(page.getByLabel("Youth for God promo video")).toHaveAttribute("controls", "");
    await expect(page.getByRole("button", { name: "Play conference video" })).toBeVisible();
  });

  test("landing page navigation routes visitors to media", async ({ page, isMobile }) => {
    await page.goto(routes.landing);

    if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.locator("header").getByRole("link", { name: "Media", exact: true }).click();

    await expect(page).toHaveURL(/\/media$/);
    await expect(page.getByRole("heading", { name: /2026 Conference Media/i })).toBeVisible();
  });

  test("conference navigation is always available", async ({ page, isMobile }) => {
    await page.goto(routes.landing);
    if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();

    const header = page.locator("header");
    const footer = page.locator("footer");

    await expect(header.getByRole("link", { name: /^Speakers$/i })).toHaveCount(0);
    await expect(header.getByRole("link", { name: /^Schedule$/i })).toHaveCount(1);
    await expect(header.getByRole("link", { name: /^FAQ$/i })).toHaveCount(1);
    await expect(header.getByRole("link", { name: /^Register$/i })).toHaveCount(1);
    if (isMobile) await page.getByRole("button", { name: "Close menu" }).click();
    await expect(footer.getByRole("link", { name: /^Speakers$/i })).toHaveCount(0);
    await expect(footer.getByRole("link", { name: /^Schedule$/i })).toHaveCount(1);
    await expect(footer.getByRole("link", { name: /^FAQ$/i })).toHaveCount(1);
    await expect(footer.getByRole("link", { name: /^Register$/i })).toHaveCount(1);
  });

  test("schedule page lists both conference days and key session times", async ({ page }) => {
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
    for (const title of ["Expose the Works of Darkness", "Making the Best Use of Time", "Be Filled with the Spirit", "Be Imitators of God"]) {
      await expect(saturday.getByText(title, { exact: false })).toBeVisible();
    }
    await expect(saturday.getByText("12:30 PM", { exact: true })).toBeVisible();
    await expect(saturday.getByText("7:00 – 9:00 PM")).toBeVisible();
    await expect(saturday.getByText("Bonfire", { exact: true })).toBeVisible();
    await expect(page.locator(".schedule__session-meta, .schedule__session-summary, .schedule__session-texts")).toHaveCount(0);
    await expect(page.getByText(/Speaker to be assigned|Supporting texts:|45 ± 5 minutes/)).toHaveCount(0);
  });

  test("speakers page is temporarily hidden", async ({ page, isMobile }) => {
    await page.goto("/speakers");
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("#home.yfg-hero")).toBeVisible();
    if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();
    await expect(page.getByRole("link", { name: /^Speakers$/i })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: /^Speakers$/i })).toHaveCount(0);
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

  test("direct conference route visits are always available", async ({ page }) => {
    for (const { route, heading } of conferenceRouteHeadings) {
      await page.goto(route);

      await expect(page).toHaveURL(new RegExp(`${route}$`));
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    }
  });

  test("FAQ page expands logistics guidance and exposes support links", async ({ page }) => {
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

  test("registration page shows current event details", async ({ page }) => {
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
    await expect(footer.getByRole("link", { name: /^Register$/i })).toHaveCount(1);
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

test("Conference photo gallery shows six equal photos in responsive columns", async ({ page }, testInfo) => {
  await page.goto("/");
  const gallery = page.getByRole("region", { name: "Conference photo gallery" });
  await gallery.scrollIntoViewIfNeeded();
  const title = gallery.getByRole("heading", { name: "Past Conference moments", exact: true });
  await expect(title).toBeVisible();
  const sectionColor = await page.locator("#info").evaluate((element) => getComputedStyle(element).backgroundColor);
  const titleColor = await page.locator("#info h2").evaluate((element) => getComputedStyle(element).color);
  await expect(gallery).toHaveCSS("background-color", sectionColor);
  await expect(title).toHaveCSS("color", titleColor);
  await expect(gallery.getByRole("button", { name: /^View photo:/ })).toHaveCount(6);
  await expect(gallery.getByRole("status")).toHaveCount(0);
  await expect(gallery).not.toHaveAttribute("aria-roledescription", "carousel");
  const photos = gallery.getByRole("img");
  await expect(photos).toHaveCount(6);
  await expect(photos.last()).toHaveAttribute("alt", "A speaker shares a message with the conference congregation");
  for (const photo of await photos.all()) {
    await photo.scrollIntoViewIfNeeded();
    await expect.poll(() => photo.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
  }
  const boxes = await photos.evaluateAll((images) => images.map((image) => {
    const box = image.getBoundingClientRect();
    return { x: box.x, y: box.y, width: box.width, height: box.height };
  }));
  const columns = page.viewportSize()!.width < 768 ? 1 : 2;
  for (let index = 0; index < boxes.length; index++) {
    const box = boxes[index];
    expect(Math.abs(box.width - boxes[0].width)).toBeLessThan(1);
    expect(Math.abs(box.height - boxes[0].height)).toBeLessThan(1);
    expect(box.width / box.height).toBeCloseTo(4 / 3, 2);
    expect(box.x).toBeCloseTo(boxes[index % columns].x, 0);
    if (index % columns === 1) {
      expect(box.y).toBeCloseTo(boxes[index - 1].y, 0);
      expect(box.x).toBeGreaterThan(boxes[index - 1].x + boxes[index - 1].width);
    }
    if (index >= columns) expect(box.y).toBeGreaterThan(boxes[index - columns].y + boxes[index - columns].height);
  }
  expect(await gallery.evaluate((element) => {
    const info = document.querySelector("#info")!;
    const footer = document.querySelector("footer")!;
    return Boolean(info.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
      && Boolean(element.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  if (process.env.YFG_CAPTURE_SCREENSHOTS === "true") {
    await gallery.screenshot({ path: testInfo.outputPath("photo-grid.png"), style: "header { visibility: hidden; }" });
  }
});

test("Conference photo gallery opens full photos and returns focus on close", async ({ page, isMobile }, testInfo) => {
  await page.goto("/");
  const gallery = page.getByRole("region", { name: "Conference photo gallery" });
  const photoButton = gallery.getByRole("button", { name: /^View photo: Conference attendees/ });
  await photoButton.scrollIntoViewIfNeeded();
  if (isMobile) {
    await photoButton.tap();
  } else {
    await photoButton.focus();
    await page.keyboard.press("Enter");
  }
  const viewer = page.getByRole("dialog", { name: "Conference photo viewer" });
  await expect(viewer).toBeVisible();
  const image = viewer.getByRole("img");
  await expect(image).toHaveAttribute("alt", "Conference attendees listen and take notes during a session");
  await expect(image).toHaveCSS("object-fit", "contain");
  await expect(viewer.getByText("Conference attendees listen and take notes during a session")).toBeVisible();
  const close = viewer.getByRole("button", { name: "Close photo" });
  await expect(close).toBeFocused();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  const bounds = await viewer.boundingBox();
  const viewport = page.viewportSize()!;
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.y).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(viewport.width);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport.height);
  if (process.env.YFG_CAPTURE_SCREENSHOTS === "true") {
    await page.screenshot({ path: testInfo.outputPath("photo-viewer.png") });
  }
  await close.click();
  await expect(viewer).not.toBeVisible();
  await expect(photoButton).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await photoButton.click();
  await expect(viewer).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(viewer).not.toBeVisible();
  await expect(photoButton).toBeFocused();
});


test("redesigned pages preserve branding and fit the viewport", async ({ page }, testInfo) => {
  const visibleRoutes = Object.values(routes);
  for (const route of visibleRoutes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("header img[alt='Youth for God']")).toBeVisible();
    await expect(page.locator("footer img[alt='Youth for God']")).toBeVisible();
    await expect(page.locator("footer")).toContainText("Sacramento, CA");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (process.env.YFG_CAPTURE_SCREENSHOTS === "true") {
      if (route === "/") {
        const gallery = page.getByRole("region", { name: "Conference photo gallery" });
        await gallery.scrollIntoViewIfNeeded();
        await expect.poll(() => gallery.getByRole("img").first().evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
      }
      await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll("/", "") || "home"}.png`), fullPage: true });
    }
  }
});

test("mobile navigation opens and closes after following a link", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile menu only");
  await page.goto("/");
  const toggle = page.locator("header .nav__toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.locator("header").getByRole("link", { name: "Media", exact: true }).click();
  await expect(page).toHaveURL(/\/media$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation fills the screen and closes with Escape or its close button", async ({ page, isMobile }, testInfo) => {
  test.skip(!isMobile, "Mobile menu only");
  await page.goto("/");
  const toggle = page.locator("header .nav__toggle");
  await expect(toggle).toHaveText("");
  await expect(toggle).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(toggle).toHaveCSS("border-top-width", "0px");
  await expect(toggle).toHaveAttribute("aria-controls", "primary-navigation");
  const toggleBounds = await toggle.boundingBox();
  expect(toggleBounds!.width).toBeGreaterThanOrEqual(44);
  expect(toggleBounds!.height).toBeGreaterThanOrEqual(44);
  await toggle.tap();
  await expect(toggle).toHaveText("");
  const menu = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(menu).toBeVisible();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  const bounds = await dialog.boundingBox();
  expect(bounds!.x).toBe(0);
  expect(bounds!.y).toBe(0);
  expect(bounds!.width).toBe(page.viewportSize()!.width);
  expect(bounds!.height).toBe(page.viewportSize()!.height);
  await expect(dialog.getByRole("button", { name: "Close menu" })).toBeFocused();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await expect(menu.getByRole("link", { name: "Home", exact: true })).toHaveAttribute("aria-current", "page");
  if (process.env.YFG_CAPTURE_SCREENSHOTS === "true") {
    await page.screenshot({ path: testInfo.outputPath("mobile-menu.png"), animations: "disabled" });
  }
  await menu.getByRole("link", { name: "Media", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await expect(menu).not.toBeVisible();
  await toggle.tap();
  await dialog.getByRole("button", { name: "Close menu" }).tap();
  await expect(dialog).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await expect(toggle).toHaveText("");
});
