import { generateAuthor } from './generate-author.js';
import { generateLocation } from './generate-location.js';
import { generateOffer } from './generate-offer.js';

const generateAd = () => ({
  author: generateAuthor(),
  location: generateLocation(),
  offer: generateOffer(),
});

export { generateAd };
