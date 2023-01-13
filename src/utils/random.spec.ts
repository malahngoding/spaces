import { describe, it, expect } from 'vitest';
import { giveNumberFromTo } from './random';

describe('random test', () => {
	it('returns valid random number between two number', () => {
		const result = giveNumberFromTo(0, 10);
		expect(result).toBeGreaterThan(0);
		expect(result).toBeLessThanOrEqual(10);
	});
});
