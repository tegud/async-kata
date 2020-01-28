const myFunctionWithCallback = (param, callback) => {
  setTimeout(() => {
    if (param) {
      return callback(undefined, 42);
    }

    return callback(new Error('FALSE!'));
  }, 500);
};

myFunctionWithCallback(true, (err, result) => {
  if (err) {
    console.log(`The answer is ${error.message}`)
    return;
  }

  console.log(`The answer is ${result}`)
});
