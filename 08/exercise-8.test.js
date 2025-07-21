import { checkPart } from './exercise-8.js';

describe('checkPart()', () => {
  it('should be defined as a function', () => {
    expect(typeof checkPart).toBe('function');
  });

  it('should return true for "uwu" (a palindrome)', () => {
    expect(checkPart('uwu')).toBe(true);
  });

  it('should return false for "midu" (not a near-palindrome)', () => {
    expect(checkPart('midu')).toBe(false);
  });

  it('should return true for "lolol" (can become a palindrome by removing one letter)', () => {
    expect(checkPart('lolol')).toBe(true);
  });

  it('should return true for "yolooloy" (is already a palindrome)', () => {
    expect(checkPart('yolooloy')).toBe(true);
  });

  it('should return true for "zzzoonzzz" (can become a palindrome by removing one letter)', () => {
    expect(checkPart('zzzoonzzz')).toBe(true);
  });
});
