/*
  Santa Claus Compiler
  - Exercise from: https://2022.adventjs.dev/challenges/2022/23

  We are testing a new CPU for the Santa Claus' sleigh. But we still have to program the software that will run on it.

  The CPU has available 8 registers, which are named V00..V07. At the start of the program, all the registers contain 0. The CPU supports the following instructions:

  MOV Vxx,Vyy: copies the value from register Vxx to register Vyy; MOV n,Vxx: assign the numeric constant n to register Vxx (overwrite if already has a value); ADD Vxx,Vyy: calculates (Vxx + Vyy) and stores the result in Vxx; DEC Vxx: decrements Vxx value by 1. INC Vxx: increments Vxx value by 1. JMP i: jumps to instruction number i if V00 is different to 0. i is guaranteed to be a valid instruction number and 0 would be the first command.

  As the CPU is 8-bit, the number it could represent goes from 0 to 255. If you increment the number 255 causes overflow and results in 0. And if you decrement 0, it results in 255. Keep in mind then that number 280 is the same as 24 (280 - 256 = 24).

  After the last instruction has been executed, you should return an array with the result for every register. From V00 to V07. Examples:

  executeCommands([
    'MOV 5,V00',  // V00 is 5
    'MOV 10,V01', // V01 is 10
    'DEC V00',    // V00 is now 4
    'ADD V00,V01', // V00 = V00 + V01 = 14
  ])

  // Output: [14, 10, 0, 0, 0, 0, 0]

  executeCommands([
    'MOV 255,V00', // V00 is 255
    'INC V00',     // V00 is 256, overflows to 0
    'DEC V01',     // V01 is -1, overflows to 255
    'DEC V01'      // V01 is 254
  ])
  // Output: [0, 254, 0, 0, 0, 0, 0]

  executeCommands([
    'MOV 10,V00', // V00 is 10
    'DEC V00',    // decrement V00 by 1  <---┐
    'INC V01',    // increment V01 by 1      |
    'JMP 1',      // loop until V00 is 0 ----┘
    'INC V06'     // increment V06 by 1
  ])

  // Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
  All the commands provided are already validated and guaranteed to be correct.


  Based on SpaceX technical interview from CodeSignal
*/

export function executeCommands(commands) {
  const MAX_LENGTH = 8;
  let state = Array.from({ length: MAX_LENGTH }, () => 0);
  if (commands == null) return state;
  if (!Array.isArray(commands))
    throw new Error('The parameter must be an Array of Strings');
  if (commands.some(n => typeof n !== 'string'))
    throw new Error('The parameter commands must be an Array only of Strings!');

  function normalizeNumber0to255(num) {
    if (num === 0) return 0;
    const valurAbsolute = Math.abs(num);
    if (num > 0) {
      const next = (valurAbsolute + 256) % 256;
      return next;
    } else if (num < 0) {
      const next = (num + 256) % 256;
      return next;
    }
  }

  for (let i = 0; i < commands.length; i++) {
    const texto = commands[i];
    const [instruction, theCommands] = texto.split(' ');
    const [command1, command2] = theCommands.split(',');
    const command1Number = Number(command1);
    const commandOneIsNumber = typeof command1Number === 'number';
    const commandOneIsString = Number.isNaN(command1Number);
    const indexA = +command1.slice(-1);
    const indexB = command2 ? +command2.slice(-1) : NaN;

    if (instruction === 'MOV' && commandOneIsNumber) {
      state[indexB] = command1Number;
    }
    if (instruction === 'MOV' && commandOneIsString) {
      state[indexB] = state[indexA];
    }
    if (instruction === 'ADD') {
      state[indexA] += state[indexB];
    }
    if (instruction === 'DEC') {
      state[indexA] -= 1;
    }
    if (instruction === 'INC') {
      state[indexA] += 1;
    }
    if (instruction === 'JMP') {
      const indexOfV00 = 0;
      if (state[indexOfV00] !== 0) {
        i = command1Number - 1; 
      }
      continue;
    }
  }

  return state.map(normalizeNumber0to255);
}
