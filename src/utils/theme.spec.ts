import { describe, it, expect } from 'vitest';
import { getTheme } from './theme';

describe('theme test', () => {
	it('get theme', () => {
		const result = getTheme('OK', 'OK');
		expect(result).toBe(undefined);
	});
});
