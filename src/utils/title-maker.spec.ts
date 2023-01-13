import { describe, it, expect } from 'vitest';
import { titleMaker } from './title-maker';

describe('title maker test', () => {
	it('returns correct string', () => {
		const result = titleMaker('0');
		expect(result).toBe(`${0} | Malah Ngoding - Lupa Makan, Lupa Tidur, Malah Ngoding`);
	});
});
