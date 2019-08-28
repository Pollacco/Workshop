export default  function toggleCart () {
  const btnCart = document.getElementById('cart'),
  modalCart = document.querySelector('.cart'),
  closeCartBtn = document.querySelector('.cart-close');
  
  btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  
  closeCartBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
}