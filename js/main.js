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

const fragment = document.createDocumentFragment();

const typeDict = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const assingArray = (value) => Array.isArray(value) ? value : Array(value);

ads.forEach(({author, offer}) => {
  const popupClone = popupTemplate.cloneNode(true);

  popupClone.querySelector('.popup__avatar').setAttribute('src', author.avatar);
  popupClone.querySelector('.popup__title').textContent = offer.title;
  popupClone.querySelector('.popup__text--address').textContent = offer.address;
  popupClone.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь<span>`;
  popupClone.querySelector('.popup__type').textContent = typeDict[offer.type];
  popupClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const offerFeature = assingArray(offer.features);
  if(!offerFeature.includes('wifi')) {
    popupClone.querySelector('.popup__feature--wifi').style.display = 'none';
  }
  if(!offerFeature.includes('dishwasher')) {
    popupClone.querySelector('.popup__feature--dishwasher').style.display = 'none';
  }
  if(!offerFeature.includes('parking')) {
    popupClone.querySelector('.popup__feature--parking').style.display = 'none';
  }
  if(!offerFeature.includes('washer')) {
    popupClone.querySelector('.popup__feature--washer').style.display = 'none';
  }
  if(!offerFeature.includes('elevator')) {
    popupClone.querySelector('.popup__feature--elevator').style.display = 'none';
  }
  if(!offerFeature.includes('conditioner')) {
    popupClone.querySelector('.popup__feature--conditioner').style.display = 'none';
  }
  popupClone.querySelector('.popup__description').textContent = offer.description;

  const popupPhotos = popupClone.querySelector('.popup__photos');
  const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');
  const offerPhotos = assingArray(offer.photos);

  offerPhotos.forEach((photo) => {
    const popupPhotoClone = popupPhotoEmpty.cloneNode();
    popupPhotoClone.setAttribute('src', photo);
    popupPhotos.appendChild(popupPhotoClone);
  });

  popupPhotoEmpty.remove();

  fragment.appendChild(popupClone);
});

mapCanvas.appendChild(fragment.firstChild);
