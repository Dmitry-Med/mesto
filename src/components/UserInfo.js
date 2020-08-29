export default class UserInfo {
  constructor({username,about}) {
    this._profileName = username;
    this._profileAbout = about;   
  }
  
  getUserInfo() {
    return {      
      username: this._profileName.textContent,
      about: this._profileAbout.textContent
    };
  }
  
  setUserInfo({username,about}) {
    this._profileName.textContent = username;
    this._profileAbout.textContent = about;   
  }
}