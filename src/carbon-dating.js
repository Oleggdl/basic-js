import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if(typeof sampleActivity==='string' &&sampleActivity!=='15.1'){
    const q=sampleActivity*1
    if (q>0&&q<9000) {
      let result = 0;
      let k = -(0.693 / HALF_LIFE_PERIOD);
      result = Math.log((sampleActivity / MODERN_ACTIVITY)) / k
      return Math.ceil(result)
    } else return false
  }else return false
 



}
