// переменные для попапа редактирования
export const popupEditOpenButton = document.querySelector('.edit-button_opened');
export const formEdit = document.querySelector('.popup__form_edit');
export const popupEditSubmitButton = document.querySelector('.popup__button_action_save');
// переменные для попапа добавления карточки
export const popupAddOpenButton = document.querySelector('.add-button_opened');
export const popupAddSubmitButton = document.querySelector('.popup__button_action_develop');
export const formAdd = document.querySelector('.popup__form_develop') ;
// переменные для попапа обновления аватара
export const formUpdate = document.querySelector('.popup__form_update');
export const popupUpdateOpenButton = document.querySelector('.profile__avatar_opened');
export const popupUpdateSubmitButton = document.querySelector('.popup__button_action_update');
// текст кнопок
export const submitButtonText = 'Сохранить';
export const createButtonText = 'Создать';
// селектор активности кнопки лайка
export const likeActivitySelector ='card__like_active';
// селектор открытого попапа
export const popupOpenedSelector ='popup_opened';
  
// массив для класса FormValidator 
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
