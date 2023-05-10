import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


const popupProfile = document.querySelector(".profile-popup");
const popupProfileClose = popupProfile.querySelector(".popup__close-btn");

const popupElementAdding = document.querySelector(".popup_adding");
const popupAddingClose = popupElementAdding.querySelector(".popup__close-btn");

const popupOpenButton = document.querySelector(".profile__edit-button");
const popupaddingOpenButton = document.querySelector(".profile__button");
const popupForm = document.querySelector(".popup__form");
const popupEditFormButton = document.querySelector(".popup__form_type_edit");
const popupAddFormButton = document.querySelector(".popup__form_type_add");
const profileTitle = document.querySelector(".profile__title");
const profileSunbtitle = document.querySelector(".profile__subtitle");

const popupName = document.querySelector(".popup__input_value_name");
const popupSpeciality = document.querySelector(".popup__input_value_speciality");

const popupCardName = document.querySelector(".popup__input_value_cardname");
const popupCardLink = document.querySelector(".popup__input_value_cardlink");

const popupBanner = document.querySelector(".popup_banner");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupImageContainer = document.querySelector(".popup_banner");
const popupImageClose = popupBanner.querySelector(".popup__close-btn");


const galleryTemplate = document.querySelector("#gallery__template").content;
const galleryButtonLike = document.querySelectorAll(".gallery__like-button");
const galleryContainer = document.querySelector(".gallery");
const galleryDeleteButton = document.querySelector(".gallery__delete-button");

const galleryTitle = document.querySelector(".gallery__title");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}

initialCards.forEach((item) => galleryContainer.prepend(createCard(item)));

function addCard (dataCard) {
	galleryContainer.prepend(createCard(dataCard));	
}

//Функция создания, удаления карточки
function createCard(dataCard) {
  const card = new Card(dataCard, galleryTemplate, showImage);
  const cardElement = card.generateCard();

  return cardElement;
}

// Функция открытия картинки карточки
function showImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImageContainer);
}


// Функция открывания попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
}

// Функция закрытия попапа по нажатию ESC
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup);
  }
}

// Функция закрытия попапа по клику
function closePopupOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  };
    closePopup(evt.currentTarget);
};

const popups = document.querySelectorAll('.popup');
popups.forEach(popup => {
  popup.addEventListener('click', closePopupOverlay);
});

// Фнкция сохранения попапа профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSunbtitle.textContent = popupSpeciality.value;
  closePopup(popupProfile);
}

// Фнкция сохранения попапа карточки
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  galleryContainer.prepend(createCard({ name: popupCardName.value, link: popupCardLink.value }));
  closePopup(popupElementAdding);
}

popupOpenButton.addEventListener("click", () => {
  popupName.value = profileTitle.textContent;
  popupSpeciality.value = profileSunbtitle.textContent;
  profileFormValidator.resetErrors();
  openPopup(popupProfile);
});
popupaddingOpenButton.addEventListener("click", () => {
  popupAddFormButton.reset();
  cardAddFormValidator.resetErrors();
  openPopup(popupElementAdding);
});

popupProfileClose.addEventListener("click", () => closePopup(popupProfile));
popupAddingClose.addEventListener("click", () => closePopup(popupElementAdding));
popupImageClose.addEventListener("click", () => closePopup(popupBanner));

popupEditFormButton.addEventListener("submit", submitEditProfileForm);
popupAddFormButton.addEventListener("submit", handleFormSubmitCard);

const profileFormValidator = new FormValidator(configValidation, popupEditFormButton);
profileFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(configValidation, popupAddFormButton);
cardAddFormValidator.enableValidation();
