configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function enableValidation({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
}

function setEventListeners(formElement, {inputSelector, submitButtonSelector, ...rest}) {
  const formInputs = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  formInputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, rest);
      toggleButtonState(formInputs, buttonElement, rest);
    });
  });
}
// добавление класса с ошибкой для инпутабокса
function checkInputValidity(formElement, inputElement, {...rest}) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
  if (!inputElement.validity.valid) {
    showInputError(errorElement, inputElement, rest);
  } else {
    hideInputError(errorElement, inputElement, rest);
  }
}

// проверка валидности инпута
function hasInvalidInput(formInputs) {
  return formInputs.some((inputElement) => !inputElement.validity.valid);
}

// добавление класса с ошибкой для span
function showInputError(errorElement, inputElement, configValidation) {
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(configValidation.errorClass);
  inputElement.classList.add(configValidation.inputErrorClass);
}
// удаление класса с ошибкой
function hideInputError(errorElement, inputElement, configValidation) {
  inputElement.classList.remove(configValidation.inputErrorClass);
  errorElement.classList.remove(configValidation.errorClass);
  errorElement.textContent = "";
}

// отключение/включение кнопки submit
const enableSubmitButton = (buttonElement, configValidation) => {
  buttonElement.classList.remove(configValidation.inactiveButtonClass);
  buttonElement.disabled = false;
};
// отключение/включение кнопки submit
const DisableSubmitButton = (buttonElement, configValidation) => {
  buttonElement.classList.add(configValidation.inactiveButtonClass);
  buttonElement.disabled = true;
};

function toggleButtonState(inputList, buttonElement, configValidation) {
  if (hasInvalidInput(inputList)) {
    DisableSubmitButton(buttonElement, configValidation);
  } else {
    enableSubmitButton(buttonElement, configValidation);
  }
}

enableValidation(configValidation);