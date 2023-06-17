// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');
const inputDataLength = Number(document.querySelector('#validation-input').getAttribute('data-length'));

input.addEventListener('change', onChange);

function onChange(e) {
  if (!e.currentTarget.value) {
    input.classList.remove('invalid');
  } else if (e.currentTarget.value.length !== inputDataLength) {
    addClassInvalidInput();
  } else {
    addClassValidInput();
  }
}

function addClassValidInput() {
  input.classList.add('valid');
  input.classList.remove('invalid');
}
function addClassInvalidInput() {
  input.classList.add('invalid');
  input.classList.remove('valid');
}
