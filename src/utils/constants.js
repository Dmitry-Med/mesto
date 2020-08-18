 // массив начального блока карточек
   export const initialCards = [
    {
      name: 'Архыз',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
    },
    {
      name: 'Челябинская область',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',      
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
// переменные для попапа редактирования
export const popupEditOpenButton = document.querySelector('.edit-button_opened');
export const formEdit = document.querySelector('.popup__form_edit');
// переменные для попапа добавления карточки
export const popupAddOpenButton = document.querySelector('.add-button_opened');
export const popupAddSubmitButton = document.querySelector('.popup__button_action_develop');
export const formAdd = document.querySelector('.popup__form_develop') ;
  
// массив для класса FormValidator 
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const popupOpenSelector = 'popup_opened';
