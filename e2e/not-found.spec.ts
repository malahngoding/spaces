import { expect, test } from '@playwright/test';
import StatusCodes from 'http-status-codes';

test.describe('Error Handling Not-Found-Page', () => {
	test('Show 404 error code for not available page', async ({ page }) => {
		const response = await page.goto('/page-not-found-test-oiqw09eqi');
		expect(response?.status()).toBe(StatusCodes.NOT_FOUND);
	});

	test('Shows not found page with error message', async ({ page }) => {
		await page.goto('/page-not-found-test-oiqw09eqi');
		expect(await page.textContent('h1')).toBe('404 - Halaman Tidak Ditemukan');
	});

	test('Show button that will bring back to home', async ({ page }) => {
		await page.goto('/page-not-found-test-oiqw09eqi');
		await page.getByRole('link', { name: 'silahkan kembali ke halaman awal' }).click();
		await expect(page).toHaveURL('/');
	});
});
