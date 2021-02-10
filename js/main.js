import getRandomFloat from './utils/get-random-float.js';
import generateAuthor from './src/generate-author.js';
import generateOffer from './src/generate-offer.js';

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
const generateLocation = () => ({ // eslint-disable-line
  //   x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  x: getRandomFloat(35.65000, 35.70000, 5),

  //   y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  y: getRandomFloat(139.70000, 139.80000, 5),
});

const generateAd = () => ({
  author: generateAuthor(),
  offer: generateOffer(),
  location: generateLocation(),
});

const ads = new Array(10).fill(null).map(generateAd);

console.log(  // eslint-disable-line
  JSON.stringify(ads),
  ads,
);
