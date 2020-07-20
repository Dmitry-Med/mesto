// переменные для попапа редактирования
const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.edit-button_opened');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const occupation = profile.querySelector('.profile__occupation');
const popupEditName = popupEdit.querySelector('.popup__input_type_name');
const popupEditOccupation = popupEdit.querySelector('.popup__input_type_occupation');
const formEditElement = popupEdit.querySelector('.popup__form_edit');
// переменные для попапа добавления карточки
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.add-button_opened');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
//переменные попапа добавления карточки
const poppopupAddCardName = popupAdd.querySelector('.popup__input_type_cardname');
const popupAddLink = popupAdd.querySelector('.popup__input_type_link') ;
const formAddCard = popupAdd.querySelector('.popup__form_develop') ;
// переменные попапа с изображением места
const popupPlace = document.querySelector('.popup_place');
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close');
// переменные для создания блока карточек
const cardTemplate = document.querySelector('.card-template');
const cardsContainer = document.querySelector('.cards__list');

// общая функция открытия попапов
function popupOpen(popup) {    
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", popupCloseByEsc); 
}

// общая функция закрытия попапов
function popupClose(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", popupCloseByEsc); 
}

// функция закрытия попапа по оверлею
function popupCloseByOverlay (evt) {  
  if(evt.target !== evt.currentTarget){return};
  popupClose(evt.target);  
}

// функция закрытия попапа по клавише Esc
function popupCloseByEsc (evt) {
  const popupActive = document.querySelector('.popup_opened');
  if (evt.key === "Escape"){
    popupClose(popupActive); 
  }
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
formEditElement.addEventListener('submit', formSubmitHandler);
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

// функция открытия попапа с изображением места
function popupPlaceOpen() { 
  popupOpen(popupPlace);  
}

// функция закрытия попапа с изображением места
function popupPlaceClose() { 
  popupClose(popupPlace);  
}

// обработчики попапа с изображением места
popupPlaceCloseButton.addEventListener('click', popupPlaceClose);
popupPlace.addEventListener('click', popupCloseByOverlay);

// функция создания шаблона карточки
function createCard(item) {
  const card = cardTemplate.content.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  cardTitle.textContent = item.name;  
  cardImage.src = item.link;
  cardImage.alt = item.name;

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
    cardImage.addEventListener('click', function popupPlaceBig () {
    popupPlace.querySelector('.popup__place-title').textContent = item.name;
    popupPlace.querySelector('.popup__image').src = item.link;
    popupPlaceOpen();
  });
  return card;
}

  // размещаем карточку в начале блока карточек
function renderCard (card, cardsContainer)  {   
  cardsContainer.prepend(card);  
}

  // проходим начальный массив карточек
initialCards.forEach((item) => {
    const card = createCard(item)
    renderCard(card, cardsContainer)
});

  // функция добавления новой карточки
function createNewCard(evt) {
  evt.preventDefault();    
  const inputCardName = poppopupAddCardName.value;  
  const inputCardLink = popupAddLink.value;
  const inputCard = { name: inputCardName, link: inputCardLink };  
  const card = createCard(inputCard);  
  renderCard(card, cardsContainer);
  popupAddClose();   
}

// обработчик добавления новой карточки
formAddCard.addEventListener('submit', createNewCard);
