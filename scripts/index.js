import Card from './Card.js';
import FormValidator from './FormValidator.js';

// проходим начальный массив карточек и генерируем карточки в контейнере
initialCards.forEach((item) => {
  const NewCard = new Card(item.name, item.link, '.card-template')
  const cardElement = NewCard.generateCard(); 
  cardsContainer.prepend(cardElement);        
}); 

// создание класса валидации для формы Add  и вызов функции проверки валидации
const FormAddValidator = new FormValidator(config, formAdd);
FormAddValidator.enableValidation();

// создание класса валидации для формы Edit и вызов функции проверки валидации
const FormEditValidator = new FormValidator(config, formEdit);
FormEditValidator.enableValidation();

// функция закрытия попапа по оверлею
function popupCloseByOverlay (evt) {  
  if(evt.target !== evt.currentTarget){return};
  popupClose(evt.target);  
}

//  функция открытия попапа редактирования
function popupEditOpen () {
  if (!popupEdit.classList.contains('popup_opened')) {
    popupEditName.value = name.textContent;
    popupEditOccupation.value = occupation.textContent;           
  }
  popupOpen(popupEdit);
}

//  функция закрытия попапа редактирования
function popupEditClose () {
  popupClose(popupEdit);
}

// функция "сохранить" попапа редактирования
function formSubmitHandler(evt) {
  evt.preventDefault();  
  name.textContent = popupEditName.value;
  occupation.textContent = popupEditOccupation.value;      
  popupEditClose();
}

// обработчики попапа редактирования
popupEditOpenButton.addEventListener('click', popupEditOpen );
popupEditCloseButton.addEventListener('click', popupEditClose);
formEdit.addEventListener('submit', formSubmitHandler);
popupEdit.addEventListener('click', popupCloseByOverlay);

//  функция открытия попапа добавления карточки
function popupAddOpen() {   
    popupOpen(popupAdd); 
}

//  функция закрытия попапа добавления карточки
function popupAddClose() {   
  popupClose(popupAdd); 
}

// обработчики попапа добавления карточки
popupAddOpenButton.addEventListener('click', popupAddOpen);
popupAddCloseButton.addEventListener('click', popupAddClose);
popupAdd.addEventListener('click', popupCloseByOverlay);

// функция закрытия попапа с изображением места
function popupPlaceClose() { 
  popupClose(popupPlace);  
}

// обработчики попапа с изображением места
popupPlaceCloseButton.addEventListener('click', popupPlaceClose);
popupPlace.addEventListener('click', popupCloseByOverlay);

 // функция добавления новой карточки
function createNewCard(evt) {
  evt.preventDefault();    
  const inputCardName = poppopupAddCardName.value;  
  const inputCardLink = popupAddLink.value;   
  poppopupAddCardName.value = '' ;
  popupAddLink.value = '' ;  
  popupAddSubmitButton.setAttribute('disabled', true);
  popupAddSubmitButton.classList.add('popup__button_disabled'); 
  const NewCard = new Card(inputCardName, inputCardLink,'.card-template');
  const cardElement = NewCard.generateCard(); 
  cardsContainer.prepend(cardElement);
  popupAddClose();   
}

// обработчик добавления новой карточки
formAdd.addEventListener('submit', createNewCard);

