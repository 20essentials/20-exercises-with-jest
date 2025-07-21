/*
  We need a mechanic!
  - Exercise from: https://2022.adventjs.dev/challenges/2022/8

  Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

  The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

  A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

  Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

  checkPart("uwu") // true
  // "uwu" is a palindrome without removing any character

  checkPart("miidim") // true
  // "miidim" can be a palindrome after removing the first "i"

  checkPart("midu") // false
  // "midu" cannot be a palindrome after removing a character

*/

export function checkPart(part) {
  const arrayPart = part.split('');
  const { length } = part;
  for (let i = 0; i < length; i++) {
    let curr = arrayPart.filter((_, ind) => ind !== i).join('');
    let rev = curr.split('').reverse().join('');
    if (rev === curr) {
      return true;
    }
  }

  return false;
}
