const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typeDict = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getDeclensionRooms = (roomNumber) => {
  roomNumber = roomNumber.toString();
  let result = 'комнат';

  if (RegExp('[2-4]$').test(roomNumber)) {
    result = 'комнаты';
  }
  if (RegExp('1$').test(roomNumber)) {
    result = 'комната';
  }

  if (RegExp('11$').test(roomNumber)) {
    result = 'комнат';
  }

  return result;
};

const getDeclensionGuests = (guestsNumber) => guestsNumber === 1 ? 'гостя' : 'гостей';

// const popupProperties = [
//   {
//     selector: '.popup__avatar',
//     properties: ['avatar'],
//     attribute: 'src',
//     fnBody: `${prop1}`,
//   },
//   {
//     selector: '.popup__title',
//     properties: ['title'],
//     attribute: 'textContent',
//     fnBody: `${prop1}`,
//   },
//   {
//     selector: '.popup__text--address',
//     properties: ['address'],
//     attribute: 'textContent',
//     fnBody: `${prop1}`,
//   },
// ];

// const fillElement = ({parentSelector , selector, properties, attribute, fnBody}) => {
//
//   if (properties.every(property => property)) {
//
//   }
// }
//
// const fillElement = (parentSelector, childSelector, object, propertyNames, attribute, value) => {
//
//   const element = parentSelector.querySelector(childSelector);
//   const stringAttr = Object.keys({...propertyNames});
//   const fnc = new Function(stringAttr, `return ${value}`);
//   propertyNames.every(property => property) ? element.setAttribute(attribute, fnc()) : element.remove();
// };

// const assignAttribute = (parentSelector, childSelector, valueToSet, attribute = 'innerText') => {
//   const element = parentSelector.querySelector(childSelector);
//   valueToSet ? element.setAttribute(attribute, valueToSet) : element.remove();
// }

const createPopup = ({ author, offer }) => {
  const { avatar } = author;
  const { address, checkin, checkout, description, features, guests, photos, price, rooms, title, type } = offer;

  const popup = popupTemplate.cloneNode(true);

  const popupAvatar = popup.querySelector('.popup__avatar');
  avatar
    ? popupAvatar.src = avatar
    : popupAvatar.remove();

  const popupTitle = popup.querySelector('.popup__title');
  title
    ? popupTitle.textContent = title
    : popupTitle.remove();

  const popupAddress = popup.querySelector('.popup__text--address');
  address
    ? popupAddress.textContent = address
    : popupAddress.remove();

  const popupPrice = popup.querySelector('.popup__text--price');
  price
    ? popupPrice.innerHTML = `${price} <span>₽/ночь<span>`
    : popupPrice.remove();

  const popupType = popup.querySelector('.popup__type');
  type
    ? popupType.textContent = typeDict[type]
    : popupType.remove();

  const popupCapacity = popup.querySelector('.popup__text--capacity');
  rooms && guests
    ? popupCapacity.textContent = `${rooms} ${getDeclensionRooms(rooms)} для ${guests} ${getDeclensionGuests(guests)}`
    : popupCapacity.remove();

  const popupTime = popup.querySelector('.popup__text--time');
  checkin && checkout
    ? popupTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`
    : popupTime.remove();

  const popupDescription = popup.querySelector('.popup__description');
  description
    ? popupDescription.textContent = description
    : popupDescription.remove();

  features
    ? featuresList.forEach((feature) => {
      if(!features.includes(feature)) {
        popup.querySelector(`.popup__feature--${feature}`).remove();
      }
    })
    : popup.querySelector('.popup__features').remove();

  const popupPhotos = popup.querySelector('.popup__photos');
  if (photos) {
    const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');
    photos.forEach((photo) => {
      const popupPhotoClone = popupPhotoEmpty.cloneNode();
      popupPhotoClone.src = photo;
      popupPhotos.appendChild(popupPhotoClone);
    });
    popupPhotoEmpty.remove();
  } else {
    popupPhotos.remove();
  }

  return popup;
};

export { createPopup };
