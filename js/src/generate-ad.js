import generateAuthor from './generate-author.js';
import generateOffer from './generate-offer.js';
import generateLocation from './generate-location.js';

const generateAd = () => ({
  author: generateAuthor(),
  offer: generateOffer(),
  location: generateLocation(),
});

export default generateAd;
