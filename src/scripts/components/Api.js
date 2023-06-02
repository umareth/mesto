export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = `${baseUrl}`;
    this._headers = headers;
    this._token = headers.authorization;
  }

  _processingServerResponse(res) {
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
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
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
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
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
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }

  setAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link.avatar,
      }),
    })
      .then(this._processingServerResponse)
      .catch((err) => console.log(err));
  }
}
