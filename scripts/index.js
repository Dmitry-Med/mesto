// переменные для попапа редактирования
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.edit-button__open-popup');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');

const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const occupation = profile.querySelector('.profile__occupation');

const popupEditName = popupEdit.querySelector('.popup__input_type_name');
const popupEditOccupation = popupEdit.querySelector('.popup__input_type_occupation');
const formEditElement = popupEdit.querySelector('.popup__form_edit');

// общая функция вкл-выкл попапов
function popupToggle(popup) {
  popup.classList.toggle('popup_opened'); 
  // обработчик закрытия попапа по клавише Esc
  document.addEventListener('keydown', popupCloseByEsc); 
}

// функция закрытия попапа по оверлею
function popupCloseByOverlay (evt) {  
  if(evt.target !== evt.currentTarget){return}
  popupToggle(evt.target);  
  
}

// функция закрытия попапа по клавише Esc
function popupCloseByEsc (evt) {
  const popupActive = document.querySelector('.popup_opened');  
  if (evt.key === "Escape"){
  popupToggle(popupActive); 
  // после закрытия попапа снимаем обработчик закрытия попапа по клавише Esc
  document.removeEventListener('keydown', popupCloseByEsc);
  }
}

//  функция вкл-выкл попапа редактирования
function popupEditToggle() {
  if (!popupEdit.classList.contains('popup_opened')) {
    popupEditName.value = name.textContent;
    popupEditOccupation.value = occupation.textContent;    
  }
  popupToggle(popupEdit);
 
}

// функция "сохранить" попапа редактирования
function formSubmitHandler(evt) {
  evt.preventDefault();
  if(!popupEditName.value) {    
    return;
  }  
  if(!popupEditOccupation.value) {
       return;
  }
  name.textContent = popupEditName.value;
  occupation.textContent = popupEditOccupation.value;
  popupEditToggle();
}
// обработчики попапа редактирования
popupEditOpenButton.addEventListener('click', popupEditToggle);
popupEditCloseButton.addEventListener('click', popupEditToggle);
formEditElement.addEventListener('submit', formSubmitHandler);
popupEdit.addEventListener('click', popupCloseByOverlay);


// переменные для попапа добавления карточки
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.add-button__open-popup');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');

//  функция вкл-выкл попапа добавления карточки
function popupAddToggle() { 
  popupToggle(popupAdd); 
  
}

//переменные попапа добавления карточки
const poppopupAddCardName = popupAdd.querySelector('.popup__input_type_cardname');
const popupAddLink = popupAdd.querySelector('.popup__input_type_link') ;
const formAddCard = popupAdd.querySelector('.popup__form_develop') ;

// обработчики попапа добавления карточки
popupAddOpenButton.addEventListener('click', popupAddToggle);
popupAddCloseButton.addEventListener('click', popupAddToggle);
popupAdd.addEventListener('click', popupCloseByOverlay);
// переменные попапа с изображением места
const popupPlace = document.querySelector('.popup_place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close');

//  функция вкл-выкл попапа с изображением места
function popupPlaceToggle() { 
  popupToggle(popupPlace);  
}

// обработчики попапа с изображением места
popupPlaceCloseButton.addEventListener('click', popupPlaceToggle);
popupPlace.addEventListener('click', popupCloseByOverlay);

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

// переменные для создания блока карточек
  const allCards = document.querySelector('.cards__list');
  const cardTemplate = document.querySelector('.card-template');

// функция создания блока карточек
function addCards(item) {
  const card = cardTemplate.content.cloneNode(true);  
  card.querySelector('.card__title').textContent = item.name;  
  card.querySelector('.card__image').src = item.link;
  card.querySelector('.card__image').alt = item.name;

  // поставить лайк карточке
  card.querySelector('.card__like').addEventListener('click', function likeCard(evt) {   
    evt.target.classList.toggle('card__like_active'); 
  });

    //удаление карточки  
  card.querySelector('.card__trash').addEventListener('click', function  deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
  });

  // попап увеличения изображения места  
  card.querySelector('.card__image').addEventListener('click', function popupPlaceBig () {
    popupPlace.querySelector('.popup__place-title').textContent = item.name;
    popupPlace.querySelector('.popup__image').src = item.link;
    popupPlaceToggle()
  });
  // размещаем карточку в начале блока карточек
  allCards. prepend(card);
}
  // проходим начальный массив карточек
  initialCards.forEach(function (item) {
   addCards(item);
});

  // функция добавления новой карточки
function createCard(evt) {
  evt.preventDefault();  
  if(!poppopupAddCardName.value) {    
    return;
  }  
  if(!popupAddLink.value) {    
    return;
  }
  const inputCardName = poppopupAddCardName.value;  
  const inputCardLink = popupAddLink.value;
  const inputCard = { name: inputCardName, link: inputCardLink };
  poppopupAddCardName.value = '' ;
  popupAddLink.value = '' ;
  addCards(inputCard);
  popupAddToggle();     
}

// обработчик добавления новой карточки
formAddCard.addEventListener('submit', createCard);
