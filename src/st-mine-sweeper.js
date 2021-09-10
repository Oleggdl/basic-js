import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  let mas = ([a, b]) => [[a - 1, b - 1], [a - 1, b], [a - 1, b + 1], [a, b - 1],
  [a, b + 1], [a + 1, b - 1], [a + 1, b], [a + 1, b + 1],]
  return matrix.map((q, w) => q.map((_, b) => {
    let i = 0
    mas([w, b]).forEach(([y, u]) => (i += +((matrix[y] && matrix[y][u]) || 0)));
    return i
  })
  )
}