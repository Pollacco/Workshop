import filter from './filter';

export default function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card'),
  catalogList = document.querySelector('.catalog-list'),
  catalogWrapper = document.querySelector('.catalog'),
  catalogBtn = document.querySelector('.catalog-button'),
  categories = new Set();

  cards.forEach((card) => {
    categories.add(card.dataset.category);
  });

  categories.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    catalogList.appendChild(li);
  });

  const liList = catalogList.querySelectorAll('li');

  catalogBtn.addEventListener('click', (event) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }

    if (event.target.tagName === 'LI') {
      liList.forEach((elem) => {
        if (elem === event.target) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
      filter();
    }
  });
}
