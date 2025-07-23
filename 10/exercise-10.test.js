import { checkJump } from './exercise-10.js';

describe('checkJump()', () => {
  it('should be defined as a function', () => {
    expect(typeof checkJump).toBe('function');
  });

  it('should return true for a symmetric mountain: [1, 2, 1]', () => {
    expect(checkJump([1, 2, 1])).toBe(true);
  });

  it('should return true for a long plateau before and after the peak', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true);
  });

  it('should return true for a clear peak in the middle: [1, 3, 8, 5, 2]', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true);
  });

  it('should return true for a strictly increasing then decreasing pattern', () => {
    expect(checkJump([1, 2, 3, 2, 1])).toBe(true);
  });

  it('should return true for a plateau at the peak: [1, 2, 2, 2, 1]', () => {
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true);
  });

  it('should return true for a small mountain: [0, 1, 0]', () => {
    expect(checkJump([0, 1, 0])).toBe(true);
  });

  it('should return true for a high peak with a steep descent', () => {
    expect(checkJump([1, 1000, 900, 800])).toBe(true);
  });

  it('should return false for a valley after a peak: [1, 7, 3, 5]', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false);
  });

  it('should return false for a flat terrain: [2, 2, 2, 2]', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false);
  });

  it('should return false for a strictly increasing sequence: [1, 2, 3]', () => {
    expect(checkJump([1, 2, 3])).toBe(false);
  });

  it('should return false for multiple increasing and decreasing segments', () => {
    expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false);
  });

  it('should return false for a peak followed by an insufficient descent', () => {
    expect(checkJump([1, 1000, 100, 800])).toBe(false);
  });

  it('should return false for a descent followed by another peak', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false);
  });

  it('should return false for a valid descent followed by another peak', () => {
    expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false);
  });
});
