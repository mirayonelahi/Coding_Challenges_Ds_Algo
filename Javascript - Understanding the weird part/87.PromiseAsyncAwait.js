/*
functions are first class citizens in javascript
functions are just objects
functions can be passed as arguments
functions can be returned from other functions
functions can be assigned to variables
functions can be assigned to properties of objects
functions can be used as the value of an object property
functions can be used as the value of an array element

*/

function runThis(otherFn) {
  console.log("running ....");
  otherFn();
}

runThis(() => {
  console.log("function 1.....");
});

runThis(() => {
  console.log("function 2.....");
});
