import { test, expect } from '@playwright/test';

const routes = {
  landing: '/',
  schedule: '/schedule',
  speakers: '/speakers',
  faq: '/faq',
  registration: '/register',
};

test.describe('Youth for God pages', () => {
  test('landing hero renders CTA and scripture reference', async ({ page }) => {
    await page.goto(routes.landing);
    await expect(page.getByRole('heading', { name: /Solus Christus/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Register Now/i })).toBeVisible();
  });

  test('schedule table shows provided entries', async ({ page }) => {
    await page.goto(routes.schedule);
    await expect(page.getByRole('heading', { name: /Schedule & Flow/i })).toBeVisible();
    await expect(page.getByText('Friday')).toBeVisible();
    await expect(page.getByText('8:00 AM')).toBeVisible();
    await expect(page.getByText('1:00 PM')).toBeVisible();
  });

  test('speakers page lists featured speakers', async ({ page }) => {
    await page.goto(routes.speakers);
    await expect(page.getByRole('heading', { name: /Speakers & Guides/i })).toBeVisible();
    await expect(page.getByText(/Naomi Sanchez/i)).toBeVisible();
    await expect(page.getByText(/Micah Landon/i)).toBeVisible();
  });

  test('FAQ page shows common questions', async ({ page }) => {
    await page.goto(routes.faq);
    await expect(page.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeVisible();
    await expect(page.getByText(/Who is Youth for God Conference for\?/i)).toBeVisible();
  });

  test('registration page loads embed frame', async ({ page }) => {
    await page.goto(routes.registration);
    await expect(page.getByRole('heading', { name: /Secure Your Spot/i })).toBeVisible();
    await expect(page.locator('iframe[title*="Registration" i]')).toBeVisible();
  });
});
