export class UserInfo {
  constructor(profileTitle, profileSunbtitle) {
    this._profileNameElement = profileTitle;
    this._infoElement = profileSunbtitle;
  }

  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      speciality: this._infoElement.textContent
    };
  }

  setUserInfo({ name, speciality }) {
    this._profileNameElement.textContent = name;
    this._infoElement.textContent = speciality;
  }
}