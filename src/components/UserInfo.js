export default class UserInfo {
  constructor({username, occupation}) {
    this._profileName = username;
    this._profileOccupation = occupation;   
  }
  
  getUserInfo() {
    return {
      username: this._profileName.textContent,
      occupation: this._profileOccupation.textContent
    };
  }
  
  setUserInfo({username, occupation }) {
    this._profileName.textContent = username;
    this._profileOccupation.textContent = occupation;
  }
}
  