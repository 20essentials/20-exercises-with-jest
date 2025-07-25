import { selectSleigh } from './exercise-12.js';

describe('selectSleigh()', () => {
  it('debería estar definida como una función', () => {
    expect(typeof selectSleigh).toBe('function');
  });

  it('debería devolver "TMChein" cuando su consumo es el más alto dentro del límite de 1 unidad', () => {
    expect(
      selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 }
      ])
    ).toBe('TMChein');
  });

  it('debería devolver "Pedrosillano" como el trineo con mayor consumo dentro del límite de 10 unidades', () => {
    expect(
      selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 }
      ])
    ).toBe('Pedrosillano');
  });

  it('debería devolver "SamarJaffal" como el trineo con mayor consumo dentro del límite de 10 unidades', () => {
    expect(
      selectSleigh(10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ])
    ).toBe('SamarJaffal');
  });

  it('debería devolver null cuando ningún trineo puede usarse dentro del límite de 50 unidades', () => {
    expect(
      selectSleigh(50, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ])
    ).toBe(null);
  });
});
