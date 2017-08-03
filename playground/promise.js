const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('It works!');
    reject('Something was wrong');
  }, 2000);
});

somePromise.then((message) => {
  console.log('Success:', message);
}, (error) => {
  console.log('Error', error);
});