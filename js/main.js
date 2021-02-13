import { generateAd } from './data/generate-ad.js';

const ads = new Array(10).fill(null).map(generateAd);

console.log(  // eslint-disable-line
  JSON.stringify(ads),
  ads,
);

const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const mapCanvas = document.querySelector('#map-canvas');

const typeDict = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
}

ads.forEach((ad) => {
  const popupClone = popupTemplate.cloneNode(true);

  popupClone.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);
  popupClone.querySelector('.popup__title').textContent = ad.offer.title;
  popupClone.querySelector('.popup__text--address').textContent = ad.offer.address;
  popupClone.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = typeDict[ad.offer.type];


  mapCanvas.appendChild(popupClone);
});

