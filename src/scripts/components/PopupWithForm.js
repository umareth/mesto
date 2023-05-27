import Popup from "./Popup.js"

export default class PopupWhithForm extends Popup {
    constructor(popupSelect, handleFormSubmit){
        super(popupSelect);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        const formValues  = {};
        // console.log(formValues );
        this._inputList.forEach((item) => {
            formValues [item.name] = item.value;
        });
        // console.log('чек поинт валью 2');
        return formValues ;
      } 

      setInputValues(data) {
        this._inputList.forEach(Item => {Item.value = data[Item.name]})
      }
    

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
      }
    

    closePopup() {
        super.close();
        this._form.reset();
      }
}