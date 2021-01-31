/**
 * Get a random integer in range inclusively from 'min' and 'max'.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */

const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

/**
 * Get a random floating point number in range inclusively from 'min' and 'max', specifying the required number of decimal places with 'nDigits'.
 *
 * @param {number} min - min positive number
 * @param {number} max - max positive number
 * @param {number} nDigits - nDigits positive number
 * @return {number} a random floating point number
 */

const generateRandomFloat = (min, max, nDigits) => (
  parseFloat((Math.random() * (max - min) + min).toPrecision(nDigits + 1))
);

const checkErrors = (begin, end) => {
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
};

const checkNDigits = (nDigits) => {
  if (nDigits < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the nDigits.');
  }
};

/**
 * Get a random positive integer in range inclusively from 'begin' and 'end'.
 *
 * @param {number} begin - begin positive number
 * @param {number} end - end positive number
 * @return {number} a random positive integer
 */

const getRandomInt = (begin, end) => { // eslint-disable-line
  checkErrors(begin, end);

  return generateRandomInt(begin, end);
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
  checkErrors(begin, end);
  checkNDigits(nDigits);

  return generateRandomFloat(begin, end, nDigits);
};
