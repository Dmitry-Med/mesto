// функция запуска процесса наложения валидации
const enableValidation = ({formSelector, ...rest}) => {  
  const formListArray = Array.from(document.querySelectorAll(formSelector));  
  formListArray.forEach((form) => {
    form.addEventListener('submit',evt => { evt.preventDefault()    
    });
    setEventListeners(form,{...rest});
  });
}

// функция показать ошибку под полем инпута
const showInputError = (input, {errorClass,inputErrorClass, ...rest}) => {
  const inputName = input.getAttribute('name');
  const erorPlace = document.getElementById (`${inputName}-error`);        
  erorPlace.textContent = input.validationMessage;
  erorPlace.classList.add(errorClass);
  input.classList.add(inputErrorClass); 
}
  
 // функция скрыть ошибку под полем инпута
const hideInputError = (input, {errorClass,inputErrorClass, ...rest}) => {
  const inputName = input.getAttribute('name');
  const erorPlace = document.getElementById (`${inputName}-error`);
  erorPlace.textContent = '';
  erorPlace.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}
  

// функция проверки валидности  инпута
const checkInputValidity = (input,{errorClass,inputErrorClass, ...rest}) => {
  if (!input.validity.valid) {
    showInputError(input, {errorClass,inputErrorClass, rest});
  } else {
      hideInputError(input, {errorClass,inputErrorClass, rest});
  }
}

 // функция невалидности какого-либо из полей формы блокирует кнопку submit
const setEventListeners = (form,{inputSelector, submitButtonSelector,inactiveButtonClass,errorClass,inputErrorClass, ...rest}) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const submitButton = form.querySelector(submitButtonSelector); 
  /* toggleButtonState(inputList,submitButton,{inactiveButtonClass,rest});*/
  inputList.forEach((input) => {      
    input.addEventListener('input', function () {        
    checkInputValidity(input,{errorClass,inputErrorClass,rest});
    toggleButtonState(inputList,submitButton,{inactiveButtonClass,rest});
    });
  });
}

// функция проверки есть ли хоть одно невалидное поле в форме
const hasInvalidInput = (inputList) => {  
  return inputList.some((input) => {    
    return !input.validity.valid;
  });
}

// функция переключения активности кнопки
const toggleButtonState = (inputList, submitButton,{inactiveButtonClass, ...rest}) => {  
  if (hasInvalidInput(inputList)) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(inactiveButtonClass);    
  }  else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(inactiveButtonClass);     
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 




