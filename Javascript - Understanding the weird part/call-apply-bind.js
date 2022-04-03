/**
 *
 */

var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("----------------");
};

var logPersonName = logName.bind(person, "en", "es");

logPersonName();

//bind  creates a reference / copy of the function
//call  invokes the function
//apply invokes the function with an array

//function borrowing

var person2 = {
  firstname: "Jane",
  lastname: "Doe",
};
// we can borrow the function from person object
console.log(person.getFullName.apply(person2));

// function currying

function multiply(a, b) {
  return a * b;
}
// we can create a new function that has access to a and b
// but only a and b are passed in
// the new function will return the result of multiply
// when invoked with the new values
// this is called currying
var multiplyByTwo = multiply.bind(this, 2);
var multiplyByThree = multiply.bind(this, 3);

// function currying
// creating a copy of the function
// with some preset value/parameter
// and then we can invoke the function
// with the new values
// very useful in mathematical situations
