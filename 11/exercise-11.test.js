import { getCompleted } from './exercise-11.js';

describe('getCompleted()', () => {
  it('should be defined as a function', () => {
    expect(typeof getCompleted).toBe('function');
  });

  it('should return "1/3" when 1 hour is completed out of 3 total hours', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3');
  });

  it('should return "1/2" when 2 hours are completed out of 4 total hours', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2');
  });

  it('should return "1/1" when the completed time equals the total time', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1');
  });

  it('should return "1/6" when 10 minutes are completed out of 1 hour', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6');
  });

  it('should return "1/3" when 1 hour 10 minutes 10 seconds are completed out of 3 hours 30 minutes 30 seconds', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3');
  });

  it('should return "2/3" when 2 hours 20 minutes 20 seconds are completed out of 3 hours 30 minutes 30 seconds', () => {
    expect(getCompleted('02:20:20', '03:30:30')).toBe('2/3');
  });

  it('should return "3/5" when 3 hours 30 minutes 30 seconds are completed out of 5 hours 50 minutes 50 seconds', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5');
  });
});
