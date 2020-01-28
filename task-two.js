const Api = require('mj-legacy-api');

const api = new Api();

api.createBasket((err, basket) => {
  console.log('Basket Created');
});
