import generateRandomInt from './generate-random-int';

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

export default getRandomInt;
