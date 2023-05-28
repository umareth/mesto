export class FormValidator {
  constructor(config, popupForm) {
    const { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass } = config;
    this._form = popupForm;
    this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
    this._submitButton = popupForm.querySelector(submitButtonSelector);
    this._disableSubmit = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(errorElement, inputElement);
    } else {
      this._hideInputError(errorElement, inputElement);
    }
  }

  _hasInvalidInput = () => this._inputList.some((inputElement) => !inputElement.validity.valid);

  _showInputError = (errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  };

  _hideInputError = (errorElement, inputElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  _enableSubmitButton = () => {
    this._submitButton.classList.remove(this._disableSubmit);
    this._submitButton.disabled = false;
  };

  _disableSubmitButton = () => {
    this._submitButton.classList.add(this._disableSubmit);
    this._submitButton.disabled = true;
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetErrors() {
    this._inputList.forEach((inputElement) => {
      const errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
      this._hideInputError(errorElement, inputElement);
    });

    this._disableSubmitButton();
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
