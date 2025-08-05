// 1. What is a promise : A promise is a javascript object that represents the evetual completion (or failure) of an asynchronous operation and its resulting value.

// Promise has three states :
// - Pending
// - Fulfilled
//- rejected


// const myPromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve("Data has been fetched...");
//   }, 3000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("It will run always..."));


//  2. What is callback  function :- A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. 
