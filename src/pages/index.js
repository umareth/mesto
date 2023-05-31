import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
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
  profileImage,
  popupaddingOpenButton,
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(profileTitle, profileSunbtitle, profileImage);

const popupShowImage = new PopupWithImage(popupImageContainer);
popupShowImage.setEventListeners();

import Api from '../scripts/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '2e9ea00f-a4b6-41b7-9927-84e2f267cb21',
    'Content-Type': 'application/json'
  }
});

function createCard(initialCard) {
  console.log("вызов createCard")
  const card = new Card (initialCard, galleryTemplate, popupShowImage.open)
  return card.generateCard();
}

const section = new Section((element) => {
  section.addItem(createCard(element))
},
  galleryContainer);



const popupFormEdit = new PopupWithForm(popupProfile, (InputValue) => {
  console.log('Проверка в popupFormEdit');
  api.setUserInfo(InputValue)
    .then(res => {
      userInfo.setUserInfo(res);
      popupFormEdit.close();
    })
    .catch(err => {
      console.log(err);
    })
});
popupFormEdit.setEventListeners();

const popupCardAdd = new PopupWithForm(popupElementAdding, (data) => {
  api.setUserInfo(data)
    .then(initialCard => {
      section.addItem(createCard(initialCard));
      popupCreateCard.closePopup();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => popupCreateCard.setdefaultTextBtn())
});
popupCardAdd.setEventListeners();

const profileFormValidator = new FormValidator(configValidation, popupEditFormButton);
profileFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(configValidation, popupAddFormButton);
cardAddFormValidator.enableValidation();

popupOpenButton.addEventListener("click", () => {
  profileFormValidator.resetErrors();
  popupFormEdit.setInputValues(userInfo.getUserInfo());
  popupFormEdit.open();
});

popupaddingOpenButton.addEventListener("click", () => {
  cardAddFormValidator.resetErrors();
  popupCardAdd.open();
});


Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, initialCards]) => {
    section.renderItems(initialCards);
    userInfo.setUserInfo(user);
  })
  .catch(error => {
    console.log(error);
  });

