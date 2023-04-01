let popupElement = document.querySelector(".popup");
let popupElementAdding = document.querySelector(".popup__adding");
let popupCloseButton = document.querySelectorAll(".popup__close-btn");
let popupOpenButton = document.querySelector(".profile__edit-button");
let popupaddingOpenButton = document.querySelector(".profile__button");
let popupEditFormButton = document.querySelector(".popup__form_type_edit");
let popupAddFormButton = document.querySelector(".popup__form_type_add");
let profileTitle = document.querySelector(".profile__title");
let profileSunbtitle = document.querySelector(".profile__subtitle");

let popupName = document.querySelector(".popup__input_value_name");
let popupSpeciality = document.querySelector(".popup__input_value_speciality");

let popupCardName = document.querySelector(".popup__input_value_cardname");
let popupCardLink = document.querySelector(".popup__input_value_cardlink");

let galleryButtonLike = document.querySelectorAll(".gallery__like-button");
let galleryContainer = document.querySelector(".gallery");
let galleryDeleteButton = document.querySelector(".gallery__delete-button");

let galleryTitle = document.querySelector(".gallery__title");

let popupAddingButton = document.querySelector(".popup__form");

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

let popupImage = document.querySelector(".popup__image");
let popupCaption = document.querySelector(".popup__caption");
let popupImageContainer = document.querySelector(".popup__container_type_image");



//Функция создания, удаления карточки
function createGalleryCard({ name, link }) {
  let galleryTemplate = document.querySelector("#gallery__template").content;
  let galleryCard = galleryTemplate.querySelector(".gallery__items").cloneNode(true);
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
  console.log('hi')
  evt.preventDefault();
  console.log(popupCardName.value, popupCardLink.value);
  galleryContainer.prepend(createGalleryCard({ name: popupCardName.value, link: popupCardLink.value }));
  closePopup();
}

popupOpenButton.addEventListener("click", () => openPopup(popupElement));
popupCloseButton.forEach((element) => element.addEventListener("click", closePopup));
popupaddingOpenButton.addEventListener("click", () => openPopup(popupElementAdding));
popupEditFormButton.addEventListener("submit", handleFormSubmit);
popupAddFormButton.addEventListener("submit", handleFormSubmitCard);
