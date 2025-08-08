import { printTable } from './exercise-21.js';

describe('printTable()', () => {
  it('debería estar definida y ser una función', () => {
    expect(typeof printTable).toBe('function');
  });

  it('debería generar correctamente una tabla con nombres largos y cantidades grandes', () => {
    expect(
      printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
      ])
    ).toEqual(
      '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************'
    );
  });

  it('debería generar correctamente una tabla con varias filas y datos pequeños', () => {
    expect(
      printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
      ])
    ).toEqual(
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************'
    );
  });

  it('debería generar correctamente una tabla con una sola fila y cantidad grande', () => {
    expect(printTable([{ name: 'Game', quantity: 10000 }])).toEqual(
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************'
    );
  });

  it('debería ajustar el ancho de la columna de cantidad para valores numéricos largos', () => {
    expect(printTable([{ name: 'Game', quantity: 1234567890 }])).toEqual(
      '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************'
    );
  });

  it('debería alinear correctamente varias filas con cantidades de diferente longitud', () => {
    expect(
      printTable([
        { name: 'Toy', quantity: 12 },
        { name: 'Mic', quantity: 123 }
      ])
    ).toEqual(
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************'
    );
  });
});
