const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('It works!');
//     reject('Something was wrong');
//   }, 2000);
// });

// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (error) => {
//   console.log('Error', error);
// });

asyncAdd(34, 33)
  .then(result => {
    console.log(result);
    return asyncAdd(result, '24');
  }, error => {
    console.log(error);
  })
  .then(result => {
    console.log('should be 91 =>', result);
  }, error => {
    console.log(error);
  })
  .catch(error => {
    console.log(error);
  });
