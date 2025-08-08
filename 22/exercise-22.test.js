import { checkStepNumbers } from './exercise-22.js';

describe('checkStepNumbers()', () => {
  it('should be defined and be a function', () => {
    expect(typeof checkStepNumbers).toBe('function');
  });

  it('should return true when each object’s steps always increase in chronological order', () => {
    expect(
      checkStepNumbers(
        ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
        [1, 33, 10, 2, 44, 20]
      )
    ).toEqual(true);
  });

  it('should return false when at least one object’s steps decrease at some point', () => {
    expect(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])).toEqual(
      false
    );
  });

  it('should return true when all steps for each object are non-decreasing', () => {
    expect(checkStepNumbers(['tree_1', 'tree_1', 'house'], [1, 2, 10])).toEqual(
      true
    );
  });

  it('should return false when an object’s steps do not strictly follow increasing order across its occurrences', () => {
    expect(
      checkStepNumbers(
        [
          'house',
          'house',
          'tree_1',
          'tree_1',
          'house',
          'tree_2',
          'tree_2',
          'tree_3'
        ],
        [5, 2, 1, 2, 3, 4, 5, 6]
      )
    ).toEqual(false);
  });
});
