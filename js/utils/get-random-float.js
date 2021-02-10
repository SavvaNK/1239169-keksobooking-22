import generateRandomFloat from './generate-random-float.js';

const checkErrors = (begin, end, nDigits) => {
  if (begin < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the Begin.');
  }

  if (end < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the End.');
  }

  if (begin === end) {
    throw new RangeError('The Begin and End both have same value! They must be different.');
  }

  if (begin > end) {
    throw new RangeError('The Begin value exceeds the End value! The Begin value must be less the End value.');
  }

  if (nDigits < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the nDigits.');
  }
};

/**
 * Get a random positive floating point number in range inclusively from 'begin' and 'end', specifying the required number of decimal places with 'nDigits' (default value: 2).
 *
 * @param {number} begin - begin positive number
 * @param {number} end - end positive number
 * @param {number} nDigits - nDigits positive number
 * @return {number} a random positive floating point number
 */

const getRandomFloat = (begin, end, nDigits= 2) => { // eslint-disable-line
  checkErrors(begin, end, nDigits);

  return generateRandomFloat(begin, end, nDigits);
};

export default getRandomFloat;
