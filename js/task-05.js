// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onChange);

// Option 1

function onChange(e) {
  e.currentTarget.value ? (output.textContent = e.currentTarget.value) : (output.textContent = 'Anonymous');
}

// Option 2

// function onChange(e) {
//   if (e.currentTarget.value) {
//     output.textContent = e.currentTarget.value;
//   } else {
//     output.textContent = 'Anonymous';
//   }
// }
