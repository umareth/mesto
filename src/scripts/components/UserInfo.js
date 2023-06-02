export class UserInfo {
  constructor(profileTitle, profileSunbtitle, profileImage) {
    this._profileNameElement = profileTitle;
    this._infoElement = profileSunbtitle;
    this._profileImage = profileImage;
  }

  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      speciality: this._infoElement.textContent,
    };
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._id = _id;
    this._profileImage.src = avatar;
    this._profileNameElement.textContent = name;
    this._infoElement.textContent = about;
  }

  setId() {
    return this._id;
  }

  getId() {
    return this._id;
  }
}
