/*
  Automating Christmas gift wrapping
  - Exercise from: https://2022.adventjs.dev/challenges/2022/2

  A millionaire bought a social network, and he doesn't bring good news. He has announced that each time an employee misses a working day due to a holiday, they will have to compensate it with two extra hours another working day of the same year.

  Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

  Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

  Given a year and an array with the dates of the holidays, return the number of extra hours that would be done during that year:

  const year = 2022
  const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

  // 01/06 is January 6, Thursday. Count.
  // 04/01 is April 1, Friday. Count.
  // 12/25 is December 25, Sunday. Do not count.

  countHours(year, holidays) // 2 days -> 4 extra hours in the year
  Things to keep in mind:

  The year may be a leap year. Make the checks you need for it, if necessary.
  Although the holiday is December 31, the extra hours will be done the same year.
  Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

*/

export function countHours(year, holidays) {
  return (
    holidays.filter(mmdd =>
      [1, 2, 3, 4, 5].includes(new Date(`${year}/${mmdd}`).getDay())
    ).length * 2
  );
}
