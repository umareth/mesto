config = {
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
function showInputError(errorElement, inputElement, config) {
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
}
// удаление класса с ошибкой
function hideInputError(errorElement, inputElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}

// отключение/включение кнопки submit
const enableSubmitButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
};
// отключение/включение кнопки submit
const disableSubmitButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
};

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, config);
  } else {
    enableSubmitButton(buttonElement, config);
  }
}

function resetErrors(form){
  form.forEach(function(element) {
    element.querySelectorAll(config.inputSelector).forEach((inputElement) => {
      const errorElement = element.querySelector(`.${inputElement.id}-input-error`);
      hideInputError(errorElement, inputElement, config);
    });
    const buttonElement = element.querySelector(config.submitButtonSelector);
    disableSubmitButton(buttonElement, config);
  });
}


enableValidation(config);