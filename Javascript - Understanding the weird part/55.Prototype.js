/**
 * inherubtance is a way to create a new object from an existing object
 *
 * how can we use inheritance in js?
 *
 * we can use the prototype property
 * its also called prototypical inheritance
 * its simple, extensible, easy to understand, powerful
 * all objects in js have a prototype property called __proto__
 * prototype chain is a chain of objects that are linked to each other
 * sharing properties and methods of the objects in the chain
 *
 *
 *
 */
// let a = function () {
//   this.name = "a";
// };
// console.log(a.__proto__);

/**
 * reflecion is a way to inspect an object
 * and get the properties and methods of the object
 * extends is a way to create a new object from an existing object
 *
 */
function Person(name) {
  this.name = name;
}

Person.prototype.sayFullName = function () {
  return "mr " + this.name;
};

let ayon = new Person("ayon");
console.log(ayon.sayFullName());

/**
 * function constructor - a normal function that is used to create objects
 * the 'this' varaible points a new empty object
 * and that object is returned from the function automatically
 * prototype property is used to link the objects in the chain
 * its so strong
 * using prototype we save memory
 *
 */
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};
console.log("hellllo".isLengthGreaterThan(3));
