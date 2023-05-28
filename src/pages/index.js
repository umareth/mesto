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
  popupaddingOpenButton,
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(profileTitle, profileSunbtitle);

const popupShowImage = new PopupWithImage(popupImageContainer);
popupShowImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, galleryTemplate, popupShowImage.open);
      return card.generateCard();
    },
  },
  galleryContainer
);
section.renderItems();

const popupFormEdit = new PopupWithForm(popupProfile, (InputValue) => {
  userInfo.setUserInfo(InputValue);
  popupFormEdit.close();
});
popupFormEdit.setEventListeners();

const popupCardAdd = new PopupWithForm(popupElementAdding, (InputValues) => {
  section.addItem(section.renderer(InputValues));
  popupCardAdd.closePopup();
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
