import { dryNumber } from './exercise-18.js';

describe('dryNumber()', () => {
  it('should be defined as a function', () => {
    expect(typeof dryNumber).toBe('function');
  });

  it('should return numbers from 1 to 15 that contain the digit 1', () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);
  });

  it('should return numbers from 1 to 20 that contain the digit 2', () => {
    expect(dryNumber(2, 20)).toEqual([2, 12, 20]);
  });

  it('should return numbers from 1 to 33 that contain the digit 3', () => {
    expect(dryNumber(3, 33)).toEqual([3, 13, 23, 30, 31, 32, 33]);
  });

  it('should return numbers from 1 to 45 that contain the digit 4', () => {
    expect(dryNumber(4, 45)).toEqual([4, 14, 24, 34, 40, 41, 42, 43, 44, 45]);
  });

  it('should return numbers from 1 to 55 that contain the digit 5', () => {
    expect(dryNumber(5, 55)).toEqual([5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55]);
  });

  it('should return an empty array when no numbers up to 8 contain the digit 9', () => {
    expect(dryNumber(9, 8)).toEqual([]);
  });
});