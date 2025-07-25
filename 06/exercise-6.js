/*
  Creating Xmas Decorations
  - Exercise from: https://2022.adventjs.dev/challenges/2022/6

  A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

  The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

  To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

  const cube = createCube(3)

  // output:
    /\_\_\_\
  /\/\_\_\_\
  /\/\/\_\_\_\
  \/\/\/_/_/_/
  \/\/_/_/_/
    \/_/_/_/
  As you can see, the cube has three faces visually. The symbols used to build the cube faces are: /, \, _. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character \n.

  Other examples of cubes:

  const cubeOfOne = createCube(1)

  // output:
  /\_\
  \/_/
  const cubeOfTwo = createCube(2)

  // output:
  /\_\_\
  /\/\_\_\
  \/\/_/_/
  \/_/_/
  Take into account:

  Pay attention to the spaces in the cube.
  The cube has to be symmetrical.
  Make sure you use the correct symbols.
  Each line must be separated by a new line character \n except for the last one.
*/

export function createCube(size) {
  const arrayTop = [];
  const arrayBottom = [];

  for (let i = 0, space = size - 1;
     i < size && space >= 0;
     i++, space--) 
  {
    //TOP
    let topitos = `${`/\\`}`.repeat(i + 1);
    let slandos = `${`_\\`}`.repeat(size);
    let row = `${' '.repeat(space)}${topitos}${slandos}`;
    arrayTop.push(row);

    //BOTTOM
    topitos = `${`\\/`}`.repeat(i + 1);
    slandos = `${`_/`}`.repeat(size);
    row = `${' '.repeat(space)}${topitos}${slandos}`;
    arrayBottom.unshift(row);
  }

  return [...arrayTop, ...arrayBottom].join('\n');
}