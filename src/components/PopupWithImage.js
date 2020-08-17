import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);    
  }
  
  open(data) {    
    this._popupElement.querySelector('.popup__place-title').textContent = data.name;
    const PopupPlaceImage = this._popupElement.querySelector('.popup__image');
    PopupPlaceImage.src = data.link;
    PopupPlaceImage.alt = data.name;     
    super.open();
  }
}