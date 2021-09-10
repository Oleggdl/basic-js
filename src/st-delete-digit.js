import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  n = n.toString();
  let max=0;
let q=0
  for (let i = 0; i < n.length; i++) {
    q = n.split('')
    q.splice(i, 1)
    q = q.join('')
    if(max<q){
      max=q
    }
  }

  return max*1

}
