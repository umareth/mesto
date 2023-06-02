export class Card {
  constructor(data, galleryTemplate, showImage, openPopupDeleteItem, getlike) {
    // console.log(data)
    this._data = data;
    this._galleryTemplate = galleryTemplate;
    this._showImage = showImage;
    this._getlike = getlike;
    this._openPopupDeleteItem = openPopupDeleteItem;

    this._myId = data.myId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._likeCount = data.likes.length;
  }

  

  _getTemplate = () => {
    return document.querySelector(this._galleryTemplate).content.querySelector(".gallery__items").cloneNode(true);
  }

  _handleLike() {
    this._getlike(this._cardLike, this._cardId);
  }

  _checkLike = () => {
    return this._likes.some(like => like._id === this._myId);
  }

  _isLiked = () => {
    if(this._checkLike()) {
      this._cardLike.classList.add('gallery__like-button_active');
    return;
    }
  }

  toggleLike(likes) {
    this._cardLike.classList.toggle('gallery__like-button_active');
    this._likeCounter.textContent = likes.length;
  }


  _countLikes = () => {
    this._likeCounter.textContent = this._likeCount;
  }

  _handleDelete = () => {
    this._openPopupDeleteItem(this, this._cardId);
  }

  _checkGalleryTrash() {
    if (this._myId === this._ownerId) {
      this._cardRemove.style.visibility = "visible" 
    } else { 
      console.log('скрыть')
      this._cardRemove.style.visibility = "hidden" };

  }

  handleCard() {
    this._cardElement.remove();
    this._cloneElementCard = null;
  }

  _setEventListeners() {
    this._cardRemove.addEventListener("click", this._handleDelete.bind(this));
    this._cardLike.addEventListener("click", this._handleLike.bind(this));
    this._cardImg.addEventListener("click", () => {
      this._showImage({ title: this._data.name, link: this._data.link });
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImg = this._cardElement.querySelector(".gallery__image");
    this._cardTitle = this._cardElement.querySelector(".gallery__title");
    this._cardRemove = this._cardElement.querySelector(".gallery__delete-button");
    this._cardLike = this._cardElement.querySelector(".gallery__like-button");
    this._likeCounter = this._cardElement.querySelector('.gallery__like-counter');
    this._cardImg.src = this._data.link;
    this._cardImg.alt = this._data.name;
    this._cardTitle.textContent = this._data.name;
    console.log('вызываются функции')
    this._isLiked();
    this._countLikes();
    this._checkGalleryTrash();
    this._setEventListeners();
    return this._cardElement;
  }
}
