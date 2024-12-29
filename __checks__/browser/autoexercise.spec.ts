import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Consent button depends on region
  await page.goto('https://www.automationexercise.com/');
  const consentButton = page.getByRole("button", { name: "Consent"});
  await consentButton.click()
  await page.getByRole('link', { name: ' Products' }).click();
  const searchBar = page.getByPlaceholder('Search Product');
  expect(searchBar).toBeVisible;
  const addBlueTopButton = page.locator('div.productinfo a[data-product-id="1"]').first()
  await addBlueTopButton.click()
  const modalHeading = page.getByRole("heading", { name: "Added!"});
  expect(modalHeading).toBeVisible;
  // Updated role from link to button
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: 'Cart'}).click();
  await page.getByText('Proceed To Checkout').click();
  // Current website text shows Login as second option
  await page.getByRole('link', { name: 'Register / Login'}).click();
  const signupHeading = page.getByRole('heading', { name: 'New User Signup!'});
  expect(signupHeading).toBeVisible;
});