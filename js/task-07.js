// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector('#font-size-control');
const fontSizeValue = document.querySelector('#font-size-control').value;
const textResult = document.querySelector('#text');

textResult.style.fontSize = `${fontSizeValue}px`;

fontSizeControl.addEventListener('input', onChange);

function onChange(e) {
  textResult.style.fontSize = `${e.currentTarget.value}px`;
}
