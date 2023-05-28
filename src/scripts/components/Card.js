export class Card {
  constructor(data, galleryTemplate, showImage) {
    this._data = data;
    this._galleryTemplate = galleryTemplate;
    this._showImage = showImage;
  }

  _getTemplate() {
    return document.querySelector(this._galleryTemplate).content.querySelector(".gallery__items").cloneNode(true);
  }

  _handleRemove() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLike() {
    this._cardLike.classList.toggle("gallery__like-button_active");
  }

  _setEventListeners() {
    this._cardRemove.addEventListener("click", this._handleRemove.bind(this));
    this._cardLike.addEventListener("click", this._handleLike.bind(this));
    this._cardImg.addEventListener("click", () => {
      this._showImage({ title: this._data.name, link: this._data.link }); // Исправлено: передаем объект с данными картинки
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImg = this._cardElement.querySelector(".gallery__image");
    this._cardTitle = this._cardElement.querySelector(".gallery__title");
    this._cardRemove = this._cardElement.querySelector(".gallery__delete-button");
    this._cardLike = this._cardElement.querySelector(".gallery__like-button");

    this._cardImg.src = this._data.link;
    this._cardImg.alt = this._data.name;
    this._cardTitle.textContent = this._data.name;
    this._setEventListeners();
    return this._cardElement;
  }
}
