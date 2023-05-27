import  './index.css';
import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
  popupOpenButton,
  popupEditFormButton,
  popupElementAdding,
  popupProfile,
  popupAddFormButton,
  initialCards,
  configValidation,
  galleryTemplate,
  popupImageContainer,
  galleryContainer,
  profileTitle,
  profileSunbtitle,
  popupaddingOpenButton } from '../scripts/utils/constants.js';

  const userInfo = new UserInfo (profileTitle, profileSunbtitle);

  
  const popupShowImage = new PopupWithImage(popupImageContainer);
  popupShowImage.setEventListeners();



const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, galleryTemplate, popupShowImage.open);
    return card.generateCard();
  }
},
  galleryContainer);
section.renderItems();

const popupFormEdit = new PopupWithForm(popupProfile, (evt) => {
  // // console.log('чек1')
  // console.log(popupFormEdit)
  evt.preventDefault();
  userInfo.setUserInfo(popupFormEdit._getInputValues());
  popupFormEdit.close();
});
popupFormEdit.setEventListeners();


const popupCardAdd = new PopupWithForm(popupElementAdding, (evt) => {
  // console.log('Вызов popupCardAdd')
  // console.log(popupCardAdd)
  evt.preventDefault();
  // console.log('Вывод popupCardAdd')
  section.addItem(section.renderer(popupCardAdd._getInputValues()));
  // console.log('section.addItem')
  popupCardAdd.closePopup();
});
popupCardAdd.setEventListeners();

const profileFormValidator = new FormValidator(configValidation, popupEditFormButton);
profileFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(configValidation, popupAddFormButton);
cardAddFormValidator.enableValidation();

popupOpenButton.addEventListener('click', () => {
  profileFormValidator.resetErrors();
  popupFormEdit.setInputValues(userInfo.getUserInfo());
  popupFormEdit.open();
});

popupaddingOpenButton.addEventListener('click', () => {
  cardAddFormValidator.resetErrors();
  popupCardAdd.open();
});




// initialCards.forEach((item) => galleryContainer.prepend(createCard(item)));

// function addCard (dataCard) {
// 	galleryContainer.prepend(createCard(dataCard));	
// }

//Функция создания, удаления карточки
// function createCard(dataCard) {
//   const card = new Card(dataCard, galleryTemplate, showImage);
//   const cardElement = card.generateCard();

//   return cardElement;
// }

// // Функция открытия картинки карточки
// function showImage(name, link) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupCaption.textContent = name;
//   openPopup(popupImageContainer);
// }


// // Функция открывания попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener('keydown', closePopupEsc);
// }

// // Функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener('keydown', closePopupEsc);
// }

// // Функция закрытия попапа по нажатию ESC
// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened')
//     closePopup(popup);
//   }
// }

// // Функция закрытия попапа по клику
// function closePopupOverlay(evt) {
//   if (evt.target !== evt.currentTarget) {
//     return;
//   };
//     closePopup(evt.currentTarget);
// };

// const popups = document.querySelectorAll('.popup');
// popups.forEach(popup => {
//   popup.addEventListener('click', closePopupOverlay);
// });

// // Фнкция сохранения попапа профиля
// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = popupName.value;
//   profileSunbtitle.textContent = popupSpeciality.value;
//   closePopup(popupProfile);
// }

// // Фнкция сохранения попапа карточки
// function handleFormSubmitCard(evt) {
//   evt.preventDefault();
//   galleryContainer.prepend(createCard({ name: popupCardName.value, link: popupCardLink.value }));
//   closePopup(popupElementAdding);
// }

// popupOpenButton.addEventListener("click", () => {
//   popupName.value = profileTitle.textContent;
//   popupSpeciality.value = profileSunbtitle.textContent;
//   profileFormValidator.resetErrors();
//   openPopup(popupProfile);
// });
// popupaddingOpenButton.addEventListener("click", () => {
//   popupAddFormButton.reset();
//   cardAddFormValidator.resetErrors();
//   openPopup(popupElementAdding);
// });

// popupProfileClose.addEventListener("click", () => closePopup(popupProfile));
// popupAddingClose.addEventListener("click", () => closePopup(popupElementAdding));
// popupImageClose.addEventListener("click", () => closePopup(popupBanner));

// popupEditFormButton.addEventListener("submit", submitEditProfileForm);
// popupAddFormButton.addEventListener("submit", handleFormSubmitCard);






// initialCards.forEach((item) => galleryContainer.prepend(createCard(item)));

// function addCard (dataCard) {
// 	galleryContainer.prepend(createCard(dataCard));	
// }

//Функция создания, удаления карточки
// function createCard(dataCard) {
//   const card = new Card(dataCard, galleryTemplate, showImage);
//   const cardElement = card.generateCard();

//   return cardElement;
// }

// // Функция открытия картинки карточки
// function showImage(name, link) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupCaption.textContent = name;
//   openPopup(popupImageContainer);
// }


// // Функция открывания попапа
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener('keydown', closePopupEsc);
// }

// // Функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener('keydown', closePopupEsc);
// }

// // Функция закрытия попапа по нажатию ESC
// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened')
//     closePopup(popup);
//   }
// }

// // Функция закрытия попапа по клику
// function closePopupOverlay(evt) {
//   if (evt.target !== evt.currentTarget) {
//     return;
//   };
//     closePopup(evt.currentTarget);
// };

// const popups = document.querySelectorAll('.popup');
// popups.forEach(popup => {
//   popup.addEventListener('click', closePopupOverlay);
// });

// // Фнкция сохранения попапа профиля
// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = popupName.value;
//   profileSunbtitle.textContent = popupSpeciality.value;
//   closePopup(popupProfile);
// }

// // Фнкция сохранения попапа карточки
// function handleFormSubmitCard(evt) {
//   evt.preventDefault();
//   galleryContainer.prepend(createCard({ name: popupCardName.value, link: popupCardLink.value }));
//   closePopup(popupElementAdding);
// }

// popupOpenButton.addEventListener("click", () => {
//   popupName.value = profileTitle.textContent;
//   popupSpeciality.value = profileSunbtitle.textContent;
//   profileFormValidator.resetErrors();
//   openPopup(popupProfile);
// });
// popupaddingOpenButton.addEventListener("click", () => {
//   popupAddFormButton.reset();
//   cardAddFormValidator.resetErrors();
//   openPopup(popupElementAdding);
// });

// popupProfileClose.addEventListener("click", () => closePopup(popupProfile));
// popupAddingClose.addEventListener("click", () => closePopup(popupElementAdding));
// popupImageClose.addEventListener("click", () => closePopup(popupBanner));

// popupEditFormButton.addEventListener("submit", submitEditProfileForm);
// popupAddFormButton.addEventListener("submit", handleFormSubmitCard);

