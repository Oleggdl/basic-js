import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  var counter = 0, find = -1;
  for (var i = 0; i < s1.length; i++) {
    find = s2.indexOf(s1.charAt(i));
    if (find > -1) {
      counter++;
      s2 = s2.substr(0, find) + s2.substr(find + 1);
    }
  }
  return counter
}
