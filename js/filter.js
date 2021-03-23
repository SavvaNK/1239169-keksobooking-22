import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(50).fill(null).map(generateAd);

const typeFn = (houseType) => (
  ({ offer: { type } }) => houseType === 'any' ? true : houseType === type
);

const lowPrice = 10000;
const highPrice = 50000;

const price = {
  'any': el => el,
  'middle': ({ offer: { price } }) => price >= lowPrice && price <= highPrice,
  'low': ({ offer: { price } }) => price <= lowPrice,
  'high': ({ offer: { price } }) => price >= highPrice,
};

const rooms = {
  'any': el => el,
  '1': ({ offer: { rooms } }) => rooms === 1,
  '2': ({ offer: { rooms } }) => rooms === 2,
  '3': ({ offer: { rooms } }) => rooms === 3,
};

const guests = {
  'any': el => el,
  '1': ({ offer: { guests } }) => guests === 1,
  '2': ({ offer: { guests } }) => guests === 2,
  '0': ({ offer: { guests } }) => guests === 0,
};

console.log(
  ads.filter( typeFn('any')).filter(price['any']).filter(rooms['1']).filter(guests['1']),
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.filter( typeFn('any')).filter(price['any']).filter(rooms['1']).filter(guests['1']).length,
  '--------------------------------\n',
  ads.length,
);
