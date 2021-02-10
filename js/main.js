import generateAuthor from './src/generate-author.js';
import generateOffer from './src/generate-offer.js';
import generateLocation from './src/generate-location.js';

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
