import { countHours } from './exercise-2.js';

describe('countHours()', () => {
  it('should be a function', () => {
    expect(typeof countHours).toBe('function');
  });

  it('returns 4 hours for 2 holidays on weekdays in 2023', () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4);
  });

  it('returns 10 hours for multiple holidays on weekdays in 1985', () => {
    expect(
      countHours(1985, [
        '01/01',
        '01/06',
        '02/02',
        '02/17',
        '02/28',
        '06/03',
        '12/06',
        '12/25'
      ])
    ).toBe(10);
  });

  it('returns 0 hours when the only holiday falls on a weekend in 2000', () => {
    expect(countHours(2000, ['01/01'])).toBe(0);
  });

  it('returns 4 hours when two holidays fall on weekdays in 2022', () => {
    expect(countHours(2022, ['01/03', '12/30'])).toBe(4);
  });

  it('returns 0 hours when all holidays fall on weekends in 2022', () => {
    expect(countHours(2022, ['01/01', '12/25'])).toBe(0);
  });

  it('returns 2 hours for Feb 29 when it falls on a weekday in a leap year', () => {
    expect(countHours(2024, ['02/29'])).toBe(2);
  });

  it('returns 2 hours for Dec 31 when it falls on a weekday in 2021', () => {
    expect(countHours(2021, ['12/31'])).toBe(2);
  });

  it('only counts holidays that fall on weekdays', () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4);
  });

  it('returns 0 hours when the holiday list is empty', () => {
    expect(countHours(2023, [])).toBe(0);
  });
});
