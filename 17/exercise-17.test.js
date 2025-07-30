import { carryGifts } from './exercise-17.js';

describe('carryGifts()', () => {
  it('should be defined as a function', () => {
    expect(typeof carryGifts).toBe('function');
  });

  it('should group gifts into bags without exceeding the max weight (10)', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual([
      'game bike',
      'book toy'
    ]);
  });

  it('should start new bag when adding a gift exceeds weight limit (7)', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual([
      'game',
      'bike',
      'book toy'
    ]);
  });

  it('should put each gift in a separate bag when weight limit is too small (4)', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual([
      'game',
      'bike',
      'book',
      'toy'
    ]);
  });

  it('should create one bag per gift when all gifts fit individually but not together (6)', () => {
    expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual([
      'toy',
      'gamme',
      'toy',
      'bike'
    ]);
  });

  it('should return an empty array when all gifts exceed max weight (2)', () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([]);
  });

  it('should group multiple small gifts and separate larger ones properly (7)', () => {
    expect(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)).toEqual([
      'toy toy',
      'disk',
      'disk toy',
      'toy'
    ]);
  });
});
