const select = document.querySelectorAll('.main-form__select-head');

let changeLiftingSelect = (evt) => {
    const selectVariables = evt.target.closest('.main-form__select').querySelectorAll('.main-form__select-variables');
    const selectBody = evt.target.closest('.main-form__select').querySelector('.main-form__select-body');
    const selectHead = evt.target;
    const selectCurent = evt.target.querySelector('.main-form__curent');

    selectHead.classList.toggle('main-form__select-head--active');
    selectBody.classList.toggle('main-form__select-body--active');
    
    selectVariables.forEach(el => {
        el.addEventListener('click', (evt) => {

            selectCurent.style.color = 'black';
            selectHead.classList.remove('main-form__select-head--active');
            selectBody.classList.remove('main-form__select-body--active');
            selectCurent.innerText = evt.target.innerText;
        });
    });
}

select.forEach(el => {
    el.addEventListener('click', changeLiftingSelect);
});
