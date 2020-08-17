import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector,{handleFormSubmit }) {
      super(popupSelector)
      this._popupForm = this._popupElement.querySelector('.popup__form')
      this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
      this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
      this._formValue = {};
      this._inputList.forEach(item => {
        this._formValue[item.name] = item.value;
      });
      return this._formValue;
    }

    setEventListeners() {
      super.setEventListeners();
      this._popupElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());   
      });
    }

    close() {
      this._popupElement.querySelector('.popup__form').reset();
      super.close();
    }
  }