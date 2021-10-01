const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__link-list');
const btnGroup = document.querySelector('.header__items--order-3');

let openMenu = () => {
    menu.classList.toggle('header__link-list--toggle');

    if (window.innerWidth <= 767) {
        btnGroup.classList.toggle('header__items--hidden');
    }
}

burger.addEventListener('click', openMenu);