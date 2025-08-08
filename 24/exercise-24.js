/*
  The Last Challenge is a Maze
  - Exercise from: https://2022.adventjs.dev/challenges/2022/24

  It's the day! Today we're going to deliver gifts… but the warehouses are a maze and the elves are lost.

  Indielfo Jones wants to write a program that, upon receiving a matrix, knows if it can quickly exit the maze from its entrance to the exit.

  Mazes have the following positions:

  W: It's a wall, you can't pass through there. S: Entry point to the warehouse. E: Exit point from the warehouse. : White spaces are where you can pass through.

  Valid movements are from one position up, down, left, or right. You can't move diagonally.

  canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]) // -> true

  // You can exit because you start at [0, 4]
  // and there's a path to the exit which is [4, 4]

  canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]) // -> false

  // There's no way to get from [0, 4] to [4, 4]
  Remember that:

  You only have to return whether you can exit the maze with a boolean.
  You can't jump over W walls.
  You can't exit the limits of the matrix, you always have to follow an internal path.
*/

export function canExit(maze) {
  if (maze == null) return false;
  if (!Array.isArray(maze))
    throw new Error('The parameter provided must be an Array');
  if (!Array.isArray(maze[0]))
    throw new Error('The parameter provided must be an Array Multidimensional');
  if (maze.some(array => array.some(el => typeof el !== 'string')))
    throw new Error(
      'The parameter provided must be an Array Multidimensional of Strings'
    );

  const rows = maze.length;
  const cols = maze[0].length;

  const moves = [
    [0, 1], // derecha
    [0, -1], // izquierda
    [1, 0], // abajo
    [-1, 0] // arriba
  ];

  // encontrar punto de inicio 'S'
  let startRow = -1;
  let startCol = -1;
  for (let i = 0; i < rows; i++) {
    const col = maze[i].indexOf('S');
    if (col !== -1) {
      startRow = i;
      startCol = col;
      break;
    }
  }

  if (startRow === -1 || startCol === -1) return false;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const queue = [[startRow, startCol]];
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    if (maze[r][c] === 'E') {
      return true;
    }

    for (const [dr, dc] of moves) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc] &&
        maze[nr][nc] !== 'W'
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  return false;
}

