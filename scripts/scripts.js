const popupElement = document.querySelector(".profile-popup");
const popupElementAdding = document.querySelector(".popup_adding");
const popupCloseButtons = document.querySelectorAll(".popup__close-btn");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupaddingOpenButton = document.querySelector(".profile__button");
const popupEditFormButton = document.querySelector(".popup__form_type_edit");
const popupAddFormButton = document.querySelector(".popup__form_type_add");
const profileTitle = document.querySelector(".profile__title");
const profileSunbtitle = document.querySelector(".profile__subtitle");

const popupName = document.querySelector(".popup__input_value_name");
const popupSpeciality = document.querySelector(".popup__input_value_speciality");

const popupCardName = document.querySelector(".popup__input_value_cardname");
const popupCardLink = document.querySelector(".popup__input_value_cardlink");

const galleryButtonLike = document.querySelectorAll(".gallery__like-button");
const galleryContainer = document.querySelector(".gallery");
const galleryDeleteButton = document.querySelector(".gallery__delete-button");

const galleryTitle = document.querySelector(".gallery__title");

let initialCards = [
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

const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupImageContainer = document.querySelector(".popup_banner");



//Функция создания, удаления карточки
function createGalleryCard({ name, link }) {
  const galleryTemplate = document.querySelector("#gallery__template").content;
  const galleryCard = galleryTemplate.querySelector(".gallery__items").cloneNode(true);
  galleryCard.querySelector(".gallery__image").src = link;
  galleryCard.querySelector(".gallery__image").alt = name;
  galleryCard.querySelector(".gallery__title").textContent = name;

  galleryCard.querySelector(".gallery__delete-button").addEventListener("click", () => removeCard(galleryCard));

  galleryCard.querySelector(".gallery__like-button").addEventListener("click", (e) => likeCard(e));

  galleryCard.querySelector(".gallery__image").addEventListener("click", () => showImage(name, link));
  return galleryCard;
}

initialCards.forEach((item) =>
  galleryContainer.prepend(createGalleryCard(item))
);

function removeCard(card){
  card.remove();
}

function showImage(name, link){
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImageContainer);
}

function likeCard(e){
  e.target.classList.toggle("gallery__like-button_active");
}


// Функция открывания попапа
function openPopup(element) {
  element.classList.add("popup_opened");
  popupName.value = profileTitle.textContent;
  popupSpeciality.value = profileSunbtitle.textContent;
}

// Функция закрытия попапа
function closePopup() {
  popupElement.classList.remove("popup_opened");
  popupElementAdding.classList.remove("popup_opened");
  popupImageContainer.classList.remove("popup_opened");
  popupCardName.value = "";
  popupCardLink.value = "";
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSunbtitle.textContent = popupSpeciality.value;
  closePopup();
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  galleryContainer.prepend(createGalleryCard({ name: popupCardName.value, link: popupCardLink.value }));
  closePopup();
}

popupOpenButton.addEventListener("click", () => openPopup(popupElement));
popupCloseButtons.forEach((element) => element.addEventListener("click", closePopup));
popupaddingOpenButton.addEventListener("click", () => openPopup(popupElementAdding));
popupEditFormButton.addEventListener("submit", handleFormSubmit);
popupAddFormButton.addEventListener("submit", handleFormSubmitCard);
