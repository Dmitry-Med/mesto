export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;      
    this._inputErrorClass = config.inputErrorClass; 
    this._errorClass = config.errorClass;
    this._form = form;   
  }
    // функция запуска процесса наложения валидации
  enableValidation ()  {    
    this._form.addEventListener('submit',evt => {
       evt.preventDefault();    
      });
    this._setEventListeners();    
  }  
    // функция показать ошибку под полем инпута
  _showInputError = (input) => {          
    const inputName = input.getAttribute('name');
    const erorPlace = document.getElementById (`${inputName}-error`);        
    erorPlace.textContent = input.validationMessage;
    erorPlace.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass); 
  }
   // функция скрыть ошибку под полем инпута
  _hideInputError = (input) => {
    const inputName = input.getAttribute('name');
    const erorPlace = document.getElementById (`${inputName}-error`);
    erorPlace.textContent = '';
    erorPlace.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }
   // функция проверки валидности  инпута
  _checkInputValidity = (input) =>  {            
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }
  // функция при невалидности какого-либо из полей формы блокирует кнопку submit
  _setEventListeners = () =>  {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);   
    inputList.forEach((input) => {      
    input.addEventListener('input', () =>   {        
    this._checkInputValidity(input);
    this._toggleButtonState(inputList);
    });
   });
  }
  // функция проверки есть ли хоть одно невалидное поле в форме  
  _hasInvalidInput = (inputList) => {  
    return inputList.some((input) => {    
      return !input.validity.valid;
    });
  }

  // функция включения активности кнопки
  _unlockButton = () => { 
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._inactiveButtonClass);     
  }
  
  // функция отключения активности кнопки
  disableButton = () => { 
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._inactiveButtonClass);     
  }

  // функция переключения активности кнопки
  _toggleButtonState = (inputList) => {  
    if (this._hasInvalidInput(inputList)) {
      this.disableButton();    
    }  else {
      this._unlockButton();    
    }  
  }

  resetForm = (inputList) => {    
    if (this._hasInvalidInput(inputList)) {
      this._hideInputError(input);
    } 
  } 
}


