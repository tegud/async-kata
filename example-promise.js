const myPromise = (param) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (param) {
      return resolve(42);
    }

    return reject(new Error('FALSE!'));
  }, 500);
});

myPromise(true)
  .then(result => console.log(`The answer is ${result}`))
  .catch(error => console.log(`The answer is ${error.message}`));
