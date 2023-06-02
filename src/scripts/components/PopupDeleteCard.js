import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupElement, submitCallback) {
        console.log('Вход в PopupDeleteCard')

        super(popupElement);
        this._submitCallback = submitCallback;
        console.log(this._submitCallback)
        this._submitButtom = this._form.querySelector('.popup__button');
        this._resetText = this._submitButtom.textContent;

    }

    open = ( card, cardId ) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
      }

      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitButtom.textContent = `${this._submitButtom.textContent}...`;
          this._submitCallback(this._card, this._cardId);
        });
      }

    resetButtonText() {
        this._submitButtom.textContent = this._resetText;
    }
}