// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const currentValue = document.querySelector('#value');

let counterValue = 0;

// Option #1

const decrementClick = () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick)
incrementBtn.addEventListener("click", incrementClick)

// Option #2

// decrementBtn.addEventListener('click', event => {
//   counterValue -= 1;
//   currentValue.textContent = counterValue;
// });

// incrementBtn.addEventListener('click', event => {
//   counterValue += 1;
//   currentValue.textContent = counterValue;
// });
