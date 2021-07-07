const header = document.querySelector('.header');
const openButton = document.querySelector('.header__burger');

openButton.addEventListener('click', function () {
  if (!header.classList.contains('header--open')) {
    header.classList.add('header--open');
  } else {
    header.classList.remove('header--open');
  }
});












