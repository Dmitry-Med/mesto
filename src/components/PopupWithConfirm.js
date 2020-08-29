import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
   super(popupSelector)
  }

  setSubmitAction(submitAction) {
   this._handleSubmitForm = submitAction;
  }

  setEventListeners () {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    })
   

  }
}




