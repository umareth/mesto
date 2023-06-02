import Popup from "./Popup.js";

export default class PopupWhithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    console.log('Вход в PopupWhithForm')
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButtom = this._form.querySelector('.popup__button');
    this._resetText = this._submitButtom.textContent;
  }

  _getInputValues() {
    const formValues = {};
    // console.log(formValues );
    this._inputList.forEach((item) => {
      formValues[item.name] = item.value;
    });
    // console.log('чек поинт валью 2');
    return formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((Item) => {
      Item.value = data[Item.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButtom.textContent = `${this._submitButtom.textContent}...`;
      this._handleFormSubmit(this._getInputValues());
    });
  }

  resetButtonText() {
    this._submitButtom.textContent = this._resetText;
}

  closePopup() {
    super.close();
    this._form.reset();
  }
}
