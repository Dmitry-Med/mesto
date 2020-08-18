import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


import {
  initialCards,
  popupEditOpenButton,  
  formEdit,
  popupAddOpenButton,
  popupAddSubmitButton,
  formAdd,
  config
} from '../utils/constants.js';

// создание класса попапа увеличения размера карточки
const popupPlace = new PopupWithImage ('popup_place'); 
popupPlace.setEventListeners();

// функция рендерящая карточку
function rendringCards(data) {
  const newCard = new Card(data, '.card-template', {
  handleCardClick: () => {    
      popupPlace.open(data);
   } 
  });
  cardList.addItem(newCard.generateCard());
}

// проходим начальный массив карточек и генерируем карточки в контейнере
const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
  rendringCards(data);
  }
},'.cards__list');   
cardList.renderItems();

const userInfoProfile = new UserInfo({
  username: document.querySelector('.profile__name'),
  occupation: document.querySelector('.profile__occupation')
});

// создание класса попапа редактирования профиля
const popupEdit = new PopupWithForm (
  'popup_edit',
  { handleFormSubmit: (formValue) => {
    userInfoProfile.setUserInfo(formValue);
    popupEdit.close();
    }    
  }
);
popupEdit.setEventListeners();

// обработчик при нажатии на кнопку открытия попапа редактирования профиля
popupEditOpenButton.addEventListener('click', () => {
  const profile = userInfoProfile.getUserInfo(); 
  const nameInput = document.querySelector('.popup__input_type_name'); 
  const occupationInput = document.querySelector('.popup__input_type_occupation');  
  nameInput.value = profile.username; 
  occupationInput.value = profile.occupation;     
  popupEdit.open();
});

// создание класса попапа добавления карточки
const popupAdd = new PopupWithForm (
  'popup_add',
  {handleFormSubmit:(formValue) => {rendringCards(formValue)   
   *popupAddSubmitButton.setAttribute('disabled', true);
    popupAddSubmitButton.classList.add('popup__button_disabled');           
    popupAdd.close();
  }}    
);

 // обработчик при нажатии на кнопку открытия попапа добавления карточки
popupAddOpenButton.addEventListener('click', () => {popupAdd.open()});
popupAdd.setEventListeners();

// создание класса валидации для формы Add  и вызов функции проверки валидации
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

// создание класса валидации для формы Edit и вызов функции проверки валидации
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();


