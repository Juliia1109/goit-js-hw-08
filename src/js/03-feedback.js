import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

// const emailName = document.querySelector('input');
// console.log(emailName);
// const buttonSubmit = document.querySelector('button');
// console.log(buttonSubmit);

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();
const STORAGE_KEY = 'feedback-msg';
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
