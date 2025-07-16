import { distributeGifts } from './exercise-3.js';

describe('distributeGifts()', () => {
  it('should be defined as a function', () => {
    expect(typeof distributeGifts).toBe('function');
  });

  it('should return 2 when 3 gifts are shared between 2 reindeers', () => {
    expect(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])).toBe(2);
  });

  it('should return 1 when 3 small gifts are distributed among 2 short-named reindeers', () => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1);
  });

  it('should return 0 when reindeers cannot carry the total weight of the gifts', () => {
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0);
  });

  it('should return 5 when multiple large gifts are distributed among many reindeers with long names', () => {
    expect(
      distributeGifts(
        ['game', 'videoconsole', 'computer'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd'
        ]
      )
    ).toBe(5);
  });

  it('should return 26 when a single light gift is distributed among many reindeers', () => {
    expect(
      distributeGifts(
        ['music'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd'
        ]
      )
    ).toBe(26);
  });
});
