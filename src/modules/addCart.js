export default function addCart() {
  const goods = document.querySelectorAll('.goods .card'),
  cartWrapper = document.querySelector('.cart-wrapper'),
  emptyCard = document.getElementById('cart-empty'),
  countGoods = document.querySelector('.counter');
  
  
  goods.forEach((card) => {
    const btn = card.querySelector('button');
  
    btn.addEventListener('click',() => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      showData()
  
      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить из корзины';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData()
      })
    });  
  });
  
  function showData() {
    const goodsNumber = cartWrapper.querySelectorAll('.card'),
      cardsPrice = cartWrapper.querySelectorAll('.card-price'),
      cardTotal = document.querySelector('.cart-total span');
  
    countGoods.textContent = goodsNumber.length;

    let sum = 0;
    cardsPrice.forEach((cardPrice) => {
      let price = parseFloat(cardPrice.textContent);  
      sum += price;  
    });
    cardTotal.textContent = sum;
  
    if (goodsNumber.length === 0) {
      cartWrapper.appendChild(emptyCard);
    } else {
      emptyCard.remove();
    }  
  }
}