import { fitsInOneBox } from './exercise-4.js';

describe('fitsInOneBox()', () => {
  it('should be defined as a function', () => {
    expect(typeof fitsInOneBox).toBe('function');
  });

  it('should return false when boxes cannot all fit inside one another (unordered)', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 }
      ])
    ).toBe(false);
  });

  it('should return true when each box fits inside the next one in increasing order', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
      ])
    ).toBe(true);
  });

  it('should return false when one of the middle boxes doesn’t fit inside the next one', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
      ])
    ).toBe(false);
  });

  it('should return false when a box has one dimension larger but equal in others', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2 }
      ])
    ).toBe(false);
  });

  it('should return true when all boxes can nest strictly in size despite initial order', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
      ])
    ).toBe(true);
  });
});
