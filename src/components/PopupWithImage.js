import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPlaceName =this._popupElement.querySelector('.popup__place-title');
    this._popupPlaceImage = this._popupElement.querySelector('.popup__image');
  }
  
  open(data) {    
    this._popupPlaceName.textContent = data.name;    
    this._popupPlaceImage.src = data.link;
    this._popupPlaceImage.alt = data.name;     
    super.open();
  }
}