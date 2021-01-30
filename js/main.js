const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const generateRandomFloat = (min, max, nDigits) => (
  (Math.random() * (max - min) + min).toPrecision(nDigits + 1)
);

const checkErrors = (begin, end) => {
  if (begin < 0) {
    throw RangeError('Negative values aren\'t allowed! Use 0 and greater for the Begin.');
  }

  if (end < 0) {
    throw RangeError('Negative values aren\'t allowed! Use 0 and greater for the End.');
  }

  if (begin === end) {
    throw Error('The Begin and End both have same value! They must be different.');
  }

  if (begin > end) {
    throw Error('The Begin value exceeds the End value! The Begin value must be less the End value.');
  }
};

const checkNDigits = (nDigits) => {
  if (nDigits < 0) {
    throw RangeError('Negative values aren\'t allowed! Use 0 and greater for the nDigits.');
  }
};

const getRandomInt = (begin, end) => { // eslint-disable-line
  checkErrors(begin, end);

  return generateRandomInt(begin, end);
};

const getRandomFloat = (begin, end, nDigits) => { // eslint-disable-line
  checkErrors(begin, end);
  checkNDigits(nDigits);

  return generateRandomFloat(begin, end, nDigits);
};
