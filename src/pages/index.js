import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";

import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {
  popupOpenButton,
  popupEditFormButton,
  popupElementAdding,
  popupProfile,
  popupAddFormButton,
  configValidation,
  galleryTemplate,
  popupImageContainer,
  galleryContainer,
  profileTitle,
  profileSunbtitle,
  profileImage,
  popupSubmitRemove,
  popupaddingOpenButton,
  popupEditImage,
  popupEditImageBtn,
  popupAvatarFormButton,
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(profileTitle, profileSunbtitle, profileImage);

const popupShowImage = new PopupWithImage(popupImageContainer);
popupShowImage.setEventListeners();

import Api from "../scripts/components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "2e9ea00f-a4b6-41b7-9927-84e2f267cb21",
    "Content-Type": "application/json",
  },
});

const deleteGalleryСard = new PopupDeleteCard(popupSubmitRemove, (card, cardId) => {

  api
    .removeCard(cardId)
    .then((res) => {
      card.handleCard();
      deleteGalleryСard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      deleteGalleryСard.resetButtonText();
    });
});
deleteGalleryСard.setEventListeners();

function createCard(initialCard) {
  const card = new Card(initialCard, galleryTemplate, popupShowImage.open, deleteGalleryСard.open, (like, cardId) => {

    if (like.classList.contains("gallery__like-button_active")) {
      api
        .removeLike(cardId)
        .then((res) => {
          card.toggleLike(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .addLike(cardId)
        .then((res) => {
          card.toggleLike(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return card.generateCard();
}

const section = new Section((element) => {
  section.addItem(createCard(element));
}, galleryContainer);

const popupFormEdit = new PopupWithForm(popupProfile, (InputValue) => {
  api
    .setUserInfo(InputValue)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupFormEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormEdit.resetButtonText();
    });
});
popupFormEdit.setEventListeners();

const popupCardAdd = new PopupWithForm(popupElementAdding, (InputValue) => {
  api
    .addCard(InputValue)
    .then((initialCard) => {
      initialCard.myId = userInfo.setId();
      section.addItemPrepend(createCard(initialCard));
      popupCardAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCardAdd.resetButtonText();
    });
});
popupCardAdd.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupEditImage, (InputValue) => {

  api
    .setAvatar(InputValue)
    .then((res) => {

      userInfo.setUserInfo(res);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.resetButtonText();
    });
});
popupEditAvatar.setEventListeners();

const profileFormValidator = new FormValidator(configValidation, popupEditFormButton);
profileFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(configValidation, popupAddFormButton);
cardAddFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(configValidation, popupAvatarFormButton);
avatarFormValidator.enableValidation();

popupOpenButton.addEventListener("click", () => {
  avatarFormValidator.resetErrors();
  popupFormEdit.setInputValues(userInfo.getUserInfo());
  popupFormEdit.open();
});

popupaddingOpenButton.addEventListener("click", () => {
  cardAddFormValidator.resetErrors();
  popupCardAdd.open();
});

popupEditImageBtn.addEventListener("click", () => {
  cardAddFormValidator.resetErrors();
  popupEditAvatar.open();
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, initialCards]) => {
    initialCards.forEach((initialCard) => {
      initialCard.myId = user._id;
    });
    userInfo.setId(user._id);
    userInfo.setUserInfo(user);
    section.renderItems(initialCards);
  })

  .catch((error) => {
    console.log(error);
  });
