import {popupOpenSelector} from '../utils/constants.js';
export default class Popup {
    constructor(popupSelector) {
     this._popupSelector = popupSelector;
     this._popupElement = document.querySelector(`.${popupSelector}`);      
     this._popupCloseByEsc = this._popupCloseByEsc.bind(this);
    }
  open  () {   
    this._popupElement.classList.add(popupOpenSelector);      
    document.addEventListener("keydown", this._popupCloseByEsc);
  }

  close  () {
    this._popupElement.classList.remove(popupOpenSelector);
    document.removeEventListener("keydown", this._popupCloseByEsc); 
  }

  _popupCloseByEsc = (evt) => {
    if (evt.key === "Escape") {        
    this.close();  
    }
  }

  _popupCloseByOverlay = (evt) => {  
    if(evt.target !== evt.currentTarget){return};
    this.close();  
  }
    
  setEventListeners () {
    const popupCloseButton = this._popupElement.querySelector('.popup__close');
    popupCloseButton.addEventListener('click', () => {
      this.close();
    });

    this._popupElement.addEventListener('click',(evt) => {
      this._popupCloseByOverlay(evt);
    });  
  }
}