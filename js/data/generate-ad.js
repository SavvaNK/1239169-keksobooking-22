import generateAuthor from './generate-author.js';
import generateOffer from './generate-offer.js';

const generateAd = () => ({
  author: generateAuthor(),
  offer: generateOffer(),
});

export default generateAd;
