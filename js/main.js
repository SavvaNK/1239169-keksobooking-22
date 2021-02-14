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
  popupClone.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  if(!ad.offer.features.includes('wifi')) {
    popupClone.querySelector('.popup__feature--wifi').style.display = 'none';
  }
  if(!ad.offer.features.includes('dishwasher')) {
    popupClone.querySelector('.popup__feature--dishwasher').style.display = 'none';
  }
  if(!ad.offer.features.includes('parking')) {
    popupClone.querySelector('.popup__feature--parking').style.display = 'none';
  }
  if(!ad.offer.features.includes('washer')) {
    popupClone.querySelector('.popup__feature--washer').style.display = 'none';
  }
  if(!ad.offer.features.includes('elevator')) {
    popupClone.querySelector('.popup__feature--elevator').style.display = 'none';
  }
  if(!ad.offer.features.includes('conditioner')) {
    popupClone.querySelector('.popup__feature--conditioner').style.display = 'none';
  }

  mapCanvas.appendChild(popupClone);
});

