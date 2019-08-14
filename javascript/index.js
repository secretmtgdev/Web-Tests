var promise1 = new Promise((resolve, reject) => {
  isDbOperationCompleted = false;
  if (isDbOperationCompleted) {
    resolve("Completed");
  } else {
    reject("Not completed");
  }
});

promise1
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log(error));
