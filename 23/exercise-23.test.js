import { executeCommands } from './exercise-23.js';

describe('executeCommands()', () => {
  it('should be defined as a function', () => {
    expect(typeof executeCommands).toBe('function');
  });

  it('should execute MOV, DEC, and ADD correctly with direct and register values', () => {
    expect(
      executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01'])
    ).toEqual([14, 10, 0, 0, 0, 0, 0, 0]);
  });

  it('should handle overflow and underflow with INC and DEC (wrap at 255)', () => {
    expect(
      executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'])
    ).toEqual([0, 254, 0, 0, 0, 0, 0, 0]);
  });

  it('should execute a loop using JMP to repeat instructions', () => {
    expect(
      executeCommands(['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'])
    ).toEqual([0, 10, 0, 0, 0, 0, 1, 0]);
  });

  it('should copy a register value through multiple MOV commands', () => {
    expect(
      executeCommands([
        'MOV 10,V00',
        'MOV V00,V01',
        'MOV V01,V02',
        'MOV V02,V03',
        'MOV V03,V04'
      ])
    ).toEqual([10, 10, 10, 10, 10, 0, 0, 0]);
  });
});
