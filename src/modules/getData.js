export default function getData() {
  const goodsWrapper = document.querySelector('.goods');
  return fetch('../db/db.json')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error ('Ошибка. Данные не были получены: ' + response.status);
    }
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
    goodsWrapper.innerHTML = '<div>Что-то пошло не так</div>'
  });
}