const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const getRandomInt = (begin, end) => {
  if ((begin < 0) || (end < 0)) {
    throw 'Negative values aren\'t allowed!';
  }

  if (begin === end) {
    throw 'The Begin and End both have same value!';
  }

  if (begin > end) {
    throw 'The Begin value exceeds the End value!';
  }

  return generateRandomInt(begin, end);
};
