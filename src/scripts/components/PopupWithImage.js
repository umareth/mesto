import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
    // console.log(this._popupImage);
    // console.log(this._popupCaption);
  }

  open = (element) => {
    const { link, title } = element;
    
    this._popupImage.src = link;
    this._popupImage.alt = title;
    this._popupCaption.textContent = title;
    
    super.open();
  }
}