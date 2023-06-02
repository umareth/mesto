
  const configValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  
  const popupProfile = document.querySelector(".profile-popup");
  const popupProfileClose = popupProfile.querySelector(".popup__close-btn");
  
  const popupElementAdding = document.querySelector(".popup_adding");
  const popupAddingClose = popupElementAdding.querySelector(".popup__close-btn");
  
  const popupOpenButton = document.querySelector(".profile__edit-button");
  const popupaddingOpenButton = document.querySelector(".profile__button");
  const popupForm = document.querySelector(".popup__form");
  const popupEditFormButton = document.querySelector(".popup__form_type_edit");
  const popupAddFormButton = document.querySelector(".popup__form_type_add");
  const popupAvatarFormButton = document.querySelector(".popup__form_type_avatar");
  const profileTitle = document.querySelector(".profile__title");
  const profileSunbtitle = document.querySelector(".profile__subtitle");
  const profileImage = document.querySelector(".profile__avatar");

  
  const popupName = document.querySelector(".popup__input_value_name");
  const popupSpeciality = document.querySelector(".popup__input_value_speciality");
  
  const popupCardName = document.querySelector(".popup__input_value_cardname");
  const popupCardLink = document.querySelector(".popup__input_value_cardlink");
  
  const popupBanner = document.querySelector(".popup_banner");
  const popupImage = document.querySelector(".popup__image");
  const popupCaption = document.querySelector(".popup__caption");
  const popupImageContainer = document.querySelector(".popup_banner");
  const popupImageClose = document.querySelector(".popup__close-btn");
  const popupSubmitRemove = document.querySelector(".popup_del_card");
  const popupEditImage = document.querySelector(".popup_avatar");

  const popupEditImageBtn = document.querySelector('.profile__avatar-button');




  
  const galleryTemplate = "#gallery__template";
  const galleryButtonLike = document.querySelectorAll(".gallery__like-button");
  const galleryContainer = document.querySelector(".gallery");
  const galleryDeleteButton = document.querySelector(".gallery__delete-button");
  
  const galleryTitle = document.querySelector(".gallery__title");
  
  export {
    configValidation,
    popupProfile,
    popupProfileClose,
    popupElementAdding,
    popupAddingClose,
    popupOpenButton,
    popupaddingOpenButton,
    popupForm,
    popupEditFormButton,
    popupAddFormButton,
    profileTitle,
    profileSunbtitle,
    popupName,
    popupSpeciality,
    popupCardName,
    popupCardLink,
    popupBanner,
    popupImage,
    popupCaption,
    popupImageContainer,
    popupImageClose,
    galleryTemplate,
    galleryButtonLike,
    galleryContainer,
    galleryDeleteButton,
    galleryTitle,
    popupSubmitRemove,
    profileImage,
    popupEditImage,
    popupEditImageBtn,
    popupAvatarFormButton
  };
  