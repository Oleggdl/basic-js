import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  let count = 1;
  for (let i = 0; i < names.length; i++) {
    count = 1
    for (let j = 0; j < names.length; j++) {
      if (i !== j + 1) {
        if (names[i] === names[j + 1]) {
          names[j + 1] = names[j + 1] + '(' + count + ')'
          count++
        }
      }

    }
  }
  return names
}
