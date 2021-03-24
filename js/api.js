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

const sendData = (onSuccess, onFail, data) => {
  fetch(
    serverSendUrl,
    {
      method: 'POST',
      // body,
      body: data,
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

export { getData, sendData };
