const getData = (onSuccess, onFail) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не удалось загрузить фотографии пользователей');
      }
    }
    )
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail('Не удалось загрузить фотографии пользователей');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch ('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch (() => onFail());
};

export {getData, sendData};
