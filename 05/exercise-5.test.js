import { getMaxGifts } from './exercise-5.js';

describe('getMaxGifts()', () => {
  it('should be defined as a function', () => {
    expect(typeof getMaxGifts).toBe('function');
  });

  it('should return the maximum gifts (20) without exceeding the limit (20) using up to 3 cities', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20);
  });

  it('should return 0 when the only city exceeds the gift limit', () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0);
  });

  it('should return the gift amount of the only city when it is within the limit', () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50);
  });

  it('should return the largest gift amount among the cities without exceeding the limit or max cities', () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70);
  });

  it('should return the best combination of 2 cities without exceeding the limit (50 + 50 = 100)', () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100);
  });

  it('should return the best combination of up to 3 cities without exceeding the limit (70 + 30 = 100)', () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100);
  });

  it('should return the best total (50 + 40 + 10 = 100) without exceeding limit (199) and max cities (4)', () => {
    expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toBe(100);
  });

  it('should return the sum of all cities when limit and max cities are high enough', () => {
    expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115);
  });
});
