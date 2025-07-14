import { wrapping } from './exercise-1.js';

describe('wrapping()', () => {
  it('should be defined as a function', () => {
    expect(typeof wrapping).toBe('function');
  });

  it('should wrap multiple gifts with the correct number of asterisks', () => {
    expect(wrapping(['cat', 'game', 'socks'])).toEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]);
  });

  it('should wrap a single gift correctly', () => {
    expect(wrapping(['midu'])).toEqual(['******\n*midu*\n******']);
  });

  it('should wrap a one-letter gift correctly', () => {
    expect(wrapping(['a'])).toEqual(['***\n*a*\n***']);
  });

  it('should return an empty array when given no gifts', () => {
    expect(wrapping([])).toEqual([]);
  });
});
