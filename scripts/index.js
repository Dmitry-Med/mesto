const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.edit-button__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');

const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const occupation = profile.querySelector('.profile__occupation');

const popupName = popup.querySelector('.popup__text_name');
const popupOccupation = popup.querySelector('.popup__text_occupation');
const formElement = popup.querySelector('.popup__form');


function popupToggle() {
  if (!popup.classList.contains('popup_opened')) {
    popupName.value = name.textContent
    popupOccupation.value = occupation.textContent 
    popup.classList.toggle('popup_opened')
  }
  else {
    popup.classList.toggle('popup_opened')
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = popupName.value
  occupation.textContent = popupOccupation.value
  popupToggle() 
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler,);
