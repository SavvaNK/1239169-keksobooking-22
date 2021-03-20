const serverSendUrl = 'https://22.javascript.pages.academy/keksobooking';
const serverGetUrl = `${serverSendUrl}/data`;

const getData = (onSuccess, onFail) => {
  fetch(serverGetUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onFail(`Код ошибки: ${response.status}.\nОписание ошибки: ${response.statusText}.`);
    })
    .then((ads) => {
      onSuccess(ads);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverSendUrl,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }

      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

const onFailGetDataOverlay = (err) => {
  const errorTemplate = document.querySelector('#get-data-error').content.querySelector('.get-data-error');
  const errorClone = errorTemplate.cloneNode(true);
  document.querySelector('body').appendChild(errorClone);
  errorClone.querySelector('.get-data-error__message--details').textContent = err;
};

export { getData, sendData, onFailGetDataOverlay };
