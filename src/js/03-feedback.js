import throttle from 'lodash.throttle';

const CONTACT_FORM_LS_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(CONTACT_FORM_LS_KEY)));
  localStorage.removeItem(CONTACT_FORM_LS_KEY);
}

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(CONTACT_FORM_LS_KEY, JSON.stringify(formData));
}

fillContactFormFilles();

function fillContactFormFilles() {
  const formDataFromLS = JSON.parse(localStorage.getItem(CONTACT_FORM_LS_KEY));
  if (formDataFromLS) {
    Object.entries(formDataFromLS).forEach(([message, value]) => {
      form.elements[message].value = value;
    });
  }
}
