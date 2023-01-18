import { expect, test } from '@playwright/test';
import StatusCodes from 'http-status-codes';

test.describe('Can view the homepage', () => {
    test('Show 200 code homepage', async ({ page }) => {
        const response = await page.goto('/');
        expect(response?.status()).toBe(StatusCodes.OK);
    });
});
