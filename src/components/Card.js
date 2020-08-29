import { likeActivitySelector } from '../utils/constants.js';
export default class Card {
  constructor(data, userId, cardTemplateSelector, {handleCardClick,handleLikeClick,handleDislikeClick, handleDeleteClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDislikeClick = handleDislikeClick;
    this._handleDeleteClick = handleDeleteClick;    
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
    this._likesCounter = this._element.querySelector('.card__like-counter');
    this._setEventListeners();  
    this.renderLikes(); 
    this._element.querySelector('.card__title').textContent = this._name;
    this._image.alt = this._name;          
    this._image.src = this._link; 
    this._trash = this._element.querySelector('.card__trash');    
    if (this._ownerId === this._userId)  {
      this._trash.style.display = 'block';
    } else {
      this._trash.style.display = 'none';
    }
    return this._element;
  }
   
  _setEventListeners() {         
    this._like.addEventListener('click', () => {            
     /* this._like.classList.toggle(likeActivitySelector);   */  
      if (this._like.classList.contains(likeActivitySelector)) {
        this._handleDislikeClick();
      } else {
        this._handleLikeClick();
      }
    });
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }  
   
  updatedLikes (likes) {
    this._likes = likes;
    this.renderLikes();
  }

  renderLikes() {
    this._likesCounter.textContent = this._likes.length;
      if (this._isLiked ()) {
        this._like.classList.add(likeActivitySelector);
      } else {
        this._like.classList.remove(likeActivitySelector);
    }
  }

  _isLiked () {   
      return this._likes.some((likes) => {
        return likes._id === this._userId;
    });
  }  
    
  deleteCard() {    
    this._element.remove();
    this._element= null;
  }   
}
    
    

