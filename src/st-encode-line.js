import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {


  let a = []
  let i = 0


  while(i<str.length){
    let e=str[i++]
    let q=1
    while(i<str.length&&str[i]===str[i-1]){
      q++
      i++
    }
    a.push([q,e])
  }
  return a.flat().filter((q)=>q!==1).join('')
  



  // throw new NotImplementedError('Not implemented');
}
