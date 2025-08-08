import { canExit } from './exercise-24.js';

describe('canExit()', () => {
  it('should be defined as a function', () => {
    expect(typeof canExit).toBe('function');
  });

  it('should return true when there is a clear path from S to E', () => {
    expect(
      canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toEqual(true);
  });

  it('should return false when E is unreachable due to walls', () => {
    expect(
      canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toEqual(false);
  });

  it('should return false when path is blocked before reaching E', () => {
    expect(
      canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toEqual(false);
  });

  it('should return true when S and E are in the same row without walls', () => {
    expect(canExit([['E', ' ', ' ', ' ', 'S']])).toEqual(true);
  });

  it('should return false when a wall separates S and E in the same row', () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S']])).toEqual(false);
  });

  it('should return true when E is reachable by moving vertically', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' ']
      ])
    ).toEqual(true);
  });

  it('should return true when E is reachable before encountering a wall row', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toEqual(true);
  });

  it('should return false when E is blocked by walls despite vertical space', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', 'W', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toEqual(false);
  });

  it('should return true when S is adjacent to E', () => {
    expect(
      canExit([
        ['E', 'S', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toEqual(true);
  });
});
