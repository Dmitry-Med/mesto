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

 // функция закрытия попапа по клавише Esc
function popupCloseByEsc (evt) {
  const popupActive = document.querySelector('.popup_opened');
  if (evt.key === "Escape"){
    popupClose(popupActive); 
   }
}
 // функция открытия попапа с изображением места
function popupPlaceOpen() { 
  popupOpen(popupPlace);  
}