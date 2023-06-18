// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (!loginForm.elements.email.value || !loginForm.elements.password.value) {
    alert('Please fill all fields');
    return;
  }
  const formData = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
  };

  console.log(formData);
  loginForm.reset();
}
