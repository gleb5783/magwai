const ESC_BUTTON = 'Esc';
const ESCAPE_BUTTON = 'Escape';
const popup = document.querySelector('.popup');
const body = document.querySelector('.body');
const closePopupBtn = document.querySelector('.popup__close-btn');
const applicationBtn = document.querySelectorAll('#application');

function tabIndexOn () {
    document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
    popup.querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
  }
  
  function tabIndexOff () {
    document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
  }

let isEscEvent = (evt) => {
    return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

let closeEscPopup = (evt) => {
    if(isEscEvent(evt)) {
        closePopup();
        tabIndexOff();
    }
}

let closeClickPopup = (evt) => {
    if (evt.target === popup) {
        closePopup();
        tabIndexOff();
    }
}

let openPopup = () => {
    popup.classList.remove('popup--hidden');
    body.classList.add('body--overflow');
    document.addEventListener('keydown', closeEscPopup);
    document.addEventListener('click', closeClickPopup);
    tabIndexOn();
}

let closePopup = () => {
    popup.classList.add('popup--hidden');
    body.classList.remove('body--overflow');
    document.removeEventListener('keydown', closeEscPopup);
    document.removeEventListener('click', closeClickPopup);
    tabIndexOff();
}

applicationBtn.forEach((el) => {
    el.addEventListener('click', openPopup);
});

closePopupBtn.addEventListener('click', closePopup);