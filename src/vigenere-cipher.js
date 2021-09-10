import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.v(str, key, 'e')


  }
  decrypt(str, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.v(str, key, 'd')
  }
  v(str, key, m) {
    if (!str || !key || !m) {
      throw new Error('Incorrect arguments!')
    }
    str = str.toUpperCase()
    key = key.toUpperCase()
    let result = []
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        if (m === 'd') {
          result.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) +
            (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)))
        } else {
          result.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) +
            (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)))
        }
        j++
      } else {
        result.push(str[i])
      }
    }
    return this.mode ? result.join('') : result.reverse().join('')
  }

}
