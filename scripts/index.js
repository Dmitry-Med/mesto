// переменные для попапа редактирования
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.edit-button__open-popup');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');


const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const occupation = profile.querySelector('.profile__occupation');

const popupEditName = popupEdit.querySelector('.popup__text_name');
const popupEditOccupation = popupEdit.querySelector('.popup__text_occupation');
const formEditElement = popupEdit.querySelector('.popup__form_edit');

function popupToggle(popup) {
  popup.classList.toggle('popup_opened');
}

function popupEditToggle() {
  if (!popupEdit.classList.contains('popup_opened')) {
    popupEditName.value = name.textContent;
    popupEditOccupation.value = occupation.textContent;    
  }
  popupToggle(popupEdit);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = popupEditName.value;
  occupation.textContent = popupEditOccupation.value;
  popupEditToggle();
}

popupEditOpenButton.addEventListener('click', popupEditToggle);
popupEditCloseButton.addEventListener('click', popupEditToggle);
formEditElement.addEventListener('submit', formSubmitHandler);

// переменные для попапа добавления карточки
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.add-button__open-popup');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');

function popupAddToggle() { 
  popupToggle(popupAdd);
}

const poppopupAddCardName = popupAdd.querySelector('.popup__text_cardname');
const popupAddLink = popupAdd.querySelector('.popup__text_link') ;
const formAddCard = popupAdd.querySelector('.popup__form_develop') ;


popupAddOpenButton.addEventListener('click', popupAddToggle);
popupAddCloseButton.addEventListener('click', popupAddToggle);



// создание начального блока карточек

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

const allCards = document.querySelector(".cards__list");
const cardTemplate = document.querySelector(".card-template");
// функция создания блока карточек
function addCards(item) {
  const card = cardTemplate.content.cloneNode(true);  
  card.querySelector('.card__title').textContent = item.name;
  card.querySelector('.card__image').alt = item.name;
  card.querySelector('.card__image').src = item.link;    
  // поставить лайк карточке
  card.querySelector('.card__like').addEventListener('click', function likeCard(evt) {   
    evt.target.classList.toggle('card__like_active'); 
  });
    //удаление карточки  
  card.querySelector('.card__trash').addEventListener('click', function  deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
  });

  allCards. prepend(card);
}

initialCards.forEach(function (item) {
  addCards(item);
});

  // добавление новой карточки
function createCard(evt) {
  evt.preventDefault();   
  const inputCardName = poppopupAddCardName.value;  
  const inputCardLink = popupAddLink.value;   
  const inputCard = { name: inputCardName, link: inputCardLink };
  poppopupAddCardName.value = '' ;
  popupAddLink.value = '' ;
  addCards(inputCard);
  popupAddToggle();     
}

formAddCard .addEventListener('submit',createCard);

 
