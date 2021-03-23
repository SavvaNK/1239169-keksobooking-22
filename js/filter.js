import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(50).fill(null).map(generateAd);

const typeFn = (houseType) => (
  ({ offer: { type } }) => houseType === 'any' ? type : houseType === type
);

const lowPrice = 10000;
const highPrice = 50000;

const price = {
  'any': el => el,
  'middle': ({ offer: { price } }) => price >= lowPrice && price <= highPrice,
  'low': ({ offer: { price } }) => price <= lowPrice,
  'high': ({ offer: { price } }) => price >= highPrice,
};



console.log(
  ads.filter( typeFn('any')).filter(price['any']).length,
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.length,
);
