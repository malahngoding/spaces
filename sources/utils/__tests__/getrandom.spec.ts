import { getRandomInt } from '../getrandom';

describe('Get Random int', () => {
  it('it should return correct random number, lower than boundaries', () => {
    expect(getRandomInt(-100, 100)).toBeLessThanOrEqual(100);
  });
  it('it should return correct random number, higher than boundaries', () => {
    expect(getRandomInt(-100, 100)).toBeGreaterThanOrEqual(-100);
  });
});
