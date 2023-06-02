export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = `${baseUrl}`;
    this._headers = headers;
    this._token = headers.authorization;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
  }

  setUserInfo(InputValue) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: InputValue.name,
        about: InputValue.speciality,
      }),
    })
      .then(this._getResponseData)
  }

  addCard(InputValue) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: InputValue.name,
        link: InputValue.link,
      }),
    })
      .then(this._getResponseData)
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
  }

  setAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link.avatar,
      }),
    })
      .then(this._getResponseData)
  }
}
