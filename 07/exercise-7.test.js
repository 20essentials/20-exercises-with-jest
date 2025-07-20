import { getGiftsToRefill } from './exercise-7.js';

describe('getGiftsToRefill()', () => {
  it('should be defined as a function', () => {
    expect(typeof getGiftsToRefill).toBe('function');
  });

  it('should return gifts that are missing from some stores', () => {
    const a1 = ['bike', 'car', 'bike', 'bike'];
    const a2 = ['car', 'bike', 'doll', 'car'];
    const a3 = ['bike', 'pc', 'pc'];

    expect(getGiftsToRefill(a1, a2, a3)).toEqual(['doll', 'pc']);
  });

  it('should return an empty array when all stores are empty', () => {
    expect(getGiftsToRefill([], [], [])).toEqual([]);
  });

  it('should return an empty array when all stores have the exact same gifts', () => {
    expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([]);
  });

  it('should return all gifts when each store has completely different gifts', () => {
    expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toEqual([
      'a',
      'b',
      'c'
    ]);
  });

  it('should return all gifts when there is no overlap between any of the stores', () => {
    expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f'
    ]);
  });
});
