import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {

  chainMaker: [],


  getLength() {

    return this.chainMaker.length;
  },
  addLink(value) {

  this.chainMaker.push(String(value) )

    
    return this
  },
  removeLink(position) {
    if(!position || !Number.isInteger(position) || typeof position !== 'number' || position > this.chainMaker.length || position <= 0) {
      this.chainMaker = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chainMaker.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chainMaker.reverse()
    return this

  },
  finishChain() {
    let result = this.chainMaker.map((q) => `( ${typeof q === 'function' ? 'function () { }' : q} )`).join('~~')
    this.chainMaker = []
    return result
  }
};
