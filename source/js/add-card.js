const cardTemplate = document.querySelector('#card').content.querySelector('.card__item');
const cardList = document.querySelector('.card__list');
const addBtn = document.querySelector('.card__load-more-btn');

const fragment = document.createDocumentFragment();

const number = () => {
    return Math.round(Math.random() * (101 - 0) + 0);
}

function addNewCard () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json()
    })
    .then((response) => {
        for (let i = 1; i < 6; i++) {
            const cardElement = cardTemplate.cloneNode(true);
            cardElement.querySelector('h4').textContent = response[number()].title;
            cardElement.querySelector('p').textContent = response[number()].body;
            fragment.appendChild(cardElement);
        }
    cardList.appendChild(fragment);
  });
}

addBtn.addEventListener('click', addNewCard);