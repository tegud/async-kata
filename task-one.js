const Api = require('mj-legacy-api');

const api = new Api();

api.lookupSku('apple', (err, details) => {
  console.log(`apple: ${details.sku}`);
});
