let popupElement = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-btn");
let popupOpenButton = document.querySelector(".profile__edit-button");
let popupSaveButtonForm = document.querySelector(".popup__form");

let profileTitle = document.querySelector(".profile__title");
let profileSunbtitle = document.querySelector(".profile__subtitle");

let popupName = document.querySelector(".popup__input_value_name");
let popupSpeciality = document.querySelector(".popup__input_value_speciality");

function openPopup() {
  popupElement.classList.toggle("popup_opened");
  popupName.value = profileTitle.textContent;
  popupSpeciality.value = profileSunbtitle.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSunbtitle.textContent = popupSpeciality.value;
  openPopup();
}

popupOpenButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", openPopup);
popupSaveButtonForm.addEventListener("submit", handleFormSubmit);
