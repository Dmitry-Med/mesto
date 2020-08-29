import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

import { 
  popupEditOpenButton,
  popupEditSubmitButton, 
  submitButtonText,
  createButtonText, 
  formEdit,
  popupAddOpenButton,
  popupAddSubmitButton,
  formAdd,
  formUpdate,
  popupUpdateOpenButton,
  popupUpdateSubmitButton,
  config
} from '../utils/constants.js';
import { data } from 'autoprefixer';

// функция изменения текста кнопки при загрузке
const toggleButtonText = (show, submitButtonSelector,baseButtonText) => {
  if(show) {
    submitButtonSelector.textContent = 'Сохранение...'; 
  } else {
    submitButtonSelector.textContent = baseButtonText;
  }
}

// создание  валидации для формы Add  и вызов функции проверки валидации
const formAddValidator = new FormValidator(config, formAdd);
formAddValidator.enableValidation();

// создание  валидации для формы Edit и вызов функции проверки валидации
const formEditValidator = new FormValidator(config, formEdit);
formEditValidator.enableValidation();

// создание  валидации для формы Update и вызов функции проверки валидации
const formUpdateValidator = new FormValidator(config, formUpdate);
formUpdateValidator.enableValidation();

// создание api
const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: '06b5f418-925e-4016-b3b3-00b212bba538',
    'Content-Type': 'application/json'
    } 
  });

// получение от сервера начального блока карточек и информации о пользователе
api.getAppInfo() 
  .then(res => {        
    const [initialCards, profileData] = res;
    // функция рендерящая карточку
    function rendringCards(data) {
      const newCard = new Card(data, profileData._id, '.card-template', {
      handleCardClick: () => {    
        popupPlace.open(data);
       },
      handleLikeClick: () => {    
        api.putLike (data._id).then( res => {  
          newCard.updatedLikes(res.likes);
        })
        .catch((err) => {
          console.log(err);
         })
       }, 
       handleDislikeClick: () => {    
        api.putDislike (data._id).then( res => {  
          newCard.updatedLikes(res.likes);
        })
        .catch((err) => {
          console.log(err);
         })
       },
      handleDeleteClick: () => {          
        popupConfirm.setSubmitAction (() => {           
        api.removeCard(data._id).then( res => {                   
          newCard.deleteCard(res);
          popupConfirm.close();
        })
        .catch((err) => {
          console.log(err);
         })
       })        
        popupConfirm.open();            
       }, 
      })           
      cardList.addItem(newCard.generateCard());
    }

    // проходим начальный массив карточек и генерируем карточки в контейнере
    const cardList = new Section({ 
      items: initialCards,
      renderer: (data) => {       
      rendringCards(data)
      }
    }, '.cards__list');    
      
    // получаем начальные данные профиля   
    const userInfoProfile = new UserInfo({
      username: document.querySelector('.profile__name'),
      about: document.querySelector('.profile__about')    
    });

    userInfoProfile.setUserInfo({
      username:profileData.name,
      about:profileData.about    
    }); 
    
    function getAvatar(avatar) {
      popupUpdateOpenButton.style.backgroundImage = `url(${avatar})`;
    }
    
    getAvatar(profileData.avatar);
      
    // создание  попапа редактирования профиля
    const popupEdit = new PopupWithForm (
      'popup_edit',
      { handleFormSubmit: (formValue) => {
        toggleButtonText(true,popupEditSubmitButton,submitButtonText)
        api.editUserInfo({
          name:formValue.username,
          about:formValue.about
         })
          .then( res => {             
          userInfoProfile.setUserInfo(
           { username:res.name,
            about:res.about});
          popupEdit.close();
         })
        .catch((err) => {
          console.log(err);
        }) 
        .finally(() => {
          toggleButtonText(false,popupEditSubmitButton,submitButtonText);
        })  
      }
     }
    );
    
    // обработчик при нажатии на кнопку открытия попапа редактирования профиля
    popupEditOpenButton.addEventListener('click', () => {
      const profile = userInfoProfile.getUserInfo(); 
      const usernameInput = document.querySelector('.popup__input_type_name'); 
      const aboutInput = document.querySelector('.popup__input_type_about');  
      usernameInput.value = profile.username; 
      aboutInput.value = profile.about;
      formEditValidator.resetFormErrors();    
      popupEdit.open();
    });
    
    // создание  попапа добавления  карточки
    const popupAdd = new PopupWithForm (
      'popup_add',
      {handleFormSubmit:(formValue) => { 
        toggleButtonText(true,popupAddSubmitButton,createButtonText)       
        api.addNewCard(formValue)
          .then( res => {            
          rendringCards(res);
          formAddValidator.disableButton();            
          popupAdd.close();                   
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          toggleButtonText(false,popupAddSubmitButton,createButtonText);
        })  
       }  
      }   
    );
    
    // обработчик при нажатии на кнопку открытия попапа добавления карточки
    popupAddOpenButton.addEventListener('click', () => {
      formAddValidator.resetFormErrors(); 
      popupAdd.open()
    });
          

    // создание  попапа увеличения размера карточки
    const popupPlace = new PopupWithImage ('popup_place');

   // создание  попапа подтверждения удаления карточки
    const popupConfirm = new PopupWithConfirm ('popup_confirm');

    // создание  попапа обновления аватара
    const popupUpdate = new  PopupWithForm (
      'popup_update',
      { handleFormSubmit: (formValue) => {
        toggleButtonText(true,popupUpdateSubmitButton,submitButtonText)
        api.editAvatar({avatar:formValue.avatar})   
          .then( res => {             
          getAvatar(res.avatar);          
          formUpdateValidator.disableButton();          
          popupUpdate.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          toggleButtonText(false,popupUpdateSubmitButton,submitButtonText);
        })    
      }
     }
    );

    // обработчик при нажатии на кнопку открытия попапа обновления аватара
    popupUpdateOpenButton.addEventListener('click', () => {
      formUpdateValidator.resetFormErrors(); 
      popupUpdate.open()
    });   
    return {      
      cardList,
      popupPlace,
      popupAdd,
      popupEdit,   
      popupConfirm,
      popupUpdate  
    }
  })
  .then(res => {  
    const {cardList,popupPlace,popupAdd,popupEdit,popupConfirm, popupUpdate} = res;   
    cardList.renderItems();    
    popupPlace.setEventListeners();
    popupAdd.setEventListeners();
    popupEdit.setEventListeners();
    popupConfirm.setEventListeners();
    popupUpdate.setEventListeners();
  })
  .catch((err) => {
    console.log(err);
  }); 












