export default class Api {
  constructor({ baseUrl, headers  }) {
    this._baseUrl = `${baseUrl}`;
    this._headers = headers;
    this._token = headers.authorization;
  }

  _processingServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
    .then(this._processingServerResponse)
    .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._processingServerResponse)
    .catch((err) => console.log(err));
  };


  setUserInfo(InputValue) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: InputValue.name,
        about: InputValue.speciality
      })
    })
    .then(this._processingServerResponse)
    .catch((err) => console.log(err));
  }

}
