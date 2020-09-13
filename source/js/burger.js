var toggle = document.querySelector('.header__toggle');
var mainNav = document.querySelector('.main-nav');

toggle.addEventListener('click', function (evt) {
    toggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});
