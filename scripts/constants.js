 // массив начального блока карточек
const initialCards = [
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
  const popupEdit = document.querySelector('.popup_edit');
  const popupEditOpenButton = document.querySelector('.edit-button_opened');
  const popupEditCloseButton = popupEdit.querySelector('.popup__close');
  const profile = document.querySelector('.profile');
  const name = profile.querySelector('.profile__name');
  const occupation = profile.querySelector('.profile__occupation');
  const popupEditName = popupEdit.querySelector('.popup__input_type_name');
  const popupEditOccupation = popupEdit.querySelector('.popup__input_type_occupation');
  const formEdit = popupEdit.querySelector('.popup__form_edit');
  // переменные для попапа добавления карточки
  const popupAdd = document.querySelector('.popup_add');
  const popupAddOpenButton = document.querySelector('.add-button_opened');
  const popupAddCloseButton = popupAdd.querySelector('.popup__close');
  const popupAddSubmitButton = popupAdd.querySelector('.popup__button_action_develop');
  //переменные попапа добавления карточки
  const poppopupAddCardName = popupAdd.querySelector('.popup__input_type_cardname');
  const popupAddLink = popupAdd.querySelector('.popup__input_type_link') ;
  const formAdd = popupAdd.querySelector('.popup__form_develop') ;
  // переменные попапа с изображением места
  const popupPlace = document.querySelector('.popup_place');
  const popupPlaceCloseButton = popupPlace.querySelector('.popup__close');
  // переменные для создания блока карточек
  const cardsContainer = document.querySelector('.cards__list');
  // массив для класса FormValidator 
  const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  };