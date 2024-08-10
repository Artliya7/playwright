import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.three.co.uk/');
  await page.getByLabel('Button').first().click();
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('button', { name: 'Next, choose your plan' }).click();
  await page.locator('#planCalc').click();

  await page.getByRole('button', { name: 'Add to basketUI icons/Add/' }).click();
  await page.getByRole('button', { name: 'Add to basket' }).nth(3).click();
  await page.getByRole('button', { name: 'Continue to basket' }).click();
  await page.locator('#insurance-lightbox').getByText('Worldwide replacement and').first().click();
  await page.locator('.lightbox-body > div:nth-child(2) > .insurance-holder > div').first().click();
  await page.getByRole('button', { name: 'Select an insurance option' }).click();
  await page.locator('.insurance-holder > div').first().click();
  await page.getByRole('button', { name: 'Find out more Add Icon' }).nth(1).click();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Continue to basket' }).click();
  await page.getByRole('button', { name: 'Checkout now' }).click();
  await page.getByPlaceholder('First name').fill('test');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('test two');
  await page.getByPlaceholder('Day').click();
  await page.getByPlaceholder('Day').fill('11');
  await page.locator('input[name="YourDetailsSectionName\\.dateOfBirth\\.month"]').fill('11');
  await page.locator('input[name="YourDetailsSectionName\\.dateOfBirth\\.year"]').fill('2000');
  await page.getByPlaceholder('Residence status').click();
  await page.getByRole('option', { name: 'Other Tenant' }).click();
  await page.locator('.marital-status > .tuk-autocomplete > .autocomplete-container > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('option', { name: 'Other' }).click();
  await page.getByPlaceholder('Primary contact number').click();
  await page.getByPlaceholder('Primary contact number').fill('07787867654545');
  await page.getByPlaceholder('Email address', { exact: true }).click();
  await page.locator('#menu-list').getByText('Help', { exact: true }).click();
  await page.getByRole('link', { name: 'Upgrades' }).click();
});