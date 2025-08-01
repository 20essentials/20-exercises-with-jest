import { sortToys } from './exercise-19.js';

describe('sortToys()', () => {
  it('should be defined as a function', () => {
    expect(typeof sortToys).toBe('function');
  });

  it('should sort toys according to their corresponding positions [2, 3, 1, 0]', () => {
    expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toEqual([
      'puzzle',
      'car',
      'ball',
      'doll'
    ]);
  });

  it('should return the toys sorted based on their given positions [3, 1, 0, 2, 4]', () => {
    expect(
      sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
    ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
  });

  it('should handle larger position values and still return sorted toys correctly', () => {
    expect(
      sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
    ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
  });

  it('should correctly sort a longer list of toys with non-sequential and large position values', () => {
    expect(
      sortToys(
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
        [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
      )
    ).toEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']);
  });
});
