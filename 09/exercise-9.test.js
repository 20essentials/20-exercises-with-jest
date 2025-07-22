import { countTime } from './exercise-9.js';

describe('countTime()', () => {
  it('should be defined as a function', () => {
    expect(typeof countTime).toBe('function');
  });

  it('should return 7 for [0, 1, 1, 0, 1], where the longest sequence of consecutive zeros is 1', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7);
  });

  it('should return 21 for [0, 0, 0, 1], where the longest sequence of consecutive zeros is 3', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21);
  });

  it('should return 28 for [0, 0, 1, 0, 0], where the longest sequence of zeros wraps around the array and is 4', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28);
  });

  it('should return 14 for [1, 0, 0, 1, 0, 0], where the longest sequence of consecutive zeros is 2', () => {
    expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14);
  });

  it('should return 28 for [1, 1, 0, 0, 0, 0], where the longest sequence of consecutive zeros is 4 at the end', () => {
    expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28);
  });

  it('should return 0 for [1, 1, 1], since there are no zeros to turn on', () => {
    expect(countTime([1, 1, 1])).toBe(0);
  });
});
