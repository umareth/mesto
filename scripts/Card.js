export class Card {
    constructor(data, template, showimage){
        this._name= data.name;
        this._link = data.link;
        this._template = template;
        this._showimage = showimage;
        // console.log(this._showimage)
    }

    _getTemplate() {
      return this._template.firstElementChild.cloneNode(true);
    }

    _handleRemove() {
      this._cardElement.remove();
      this._cardElement = null;
    }

    _handleLike() {
      this._cardLike.classList.toggle('gallery__like-button_active')
    }

   _setEventListeners () {
    this._cardRemove.addEventListener('click', this._handleRemove.bind(this));
    this._cardLike.addEventListener('click', this._handleLike.bind(this));
    // this._cardImg.addEventListener('click', this._showimage(this, this._name, this._link));
    this._cardImg.addEventListener('click', () => {this._showimage(this._name, this._link);});
  }

    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardImg = this._cardElement.querySelector('.gallery__image');
        this._cardElement.querySelector('.gallery__title').textContent = this._name;
        this._cardImg.src = this._link;
        this._cardRemove = this._cardElement.querySelector('.gallery__delete-button');
        this._cardLike = this._cardElement.querySelector('.gallery__like-button');
        this._setEventListeners();
        return this._cardElement;
      }
}

