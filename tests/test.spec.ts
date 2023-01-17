import { expect, test } from '@playwright/test';

test('Show 404 for not found page', async ({ page }) => {
	await page.goto('/page-not-found-test-oiqw09eqi');
	expect(await page.textContent('h1')).toBe('404 - Halaman Tidak Ditemukan');
});
