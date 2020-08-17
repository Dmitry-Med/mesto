export default class Card {
  constructor(data, cardTemplateSelector, {handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }
    
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);           
    return cardElement;  
  }
    
  generateCard() {  
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__image');     
    this._like = this._element.querySelector('.card__like');
    this._setEventListeners();    
    this._element.querySelector('.card__title').textContent = this._name;
    this._image.alt = this._name;          
    this._image.src = this._link;      
    return this._element;
  }
   
  _setEventListeners() {         
    this._like.addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._deleteCard();
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }  

  _likeCard() {        
    this._like.classList.toggle('card__like_active'); 
  } 
    
  _deleteCard() {    
    this._element.remove();
    this._element= null;
  }   
}
    
    

