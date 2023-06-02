export default class Popup {
  constructor(popupElement) {
    console.log('Вход class Popuр')

    console.log(popupElement)

    this._popup = popupElement;
    this._form = this._popup.querySelector(".popup__form");
    this._closeButton = this._popup.querySelector(".popup__close-btn");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    console.log('вызван open')
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (event) => {
      if (event.target === this._popup) {
        this.close();
      }
    });
  }
}
