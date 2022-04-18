class Person {
  constructor(name) {
    this.name = name;
  }
  sayFullName() {
    return "mr " + this.name;
  }
}

let john = new Person("john");

/**
 * js classes are syntactic sugar for function constructors
 * js class are not like classes in other languages
 * its not a blueprint for creating objects
 * its just an object that has a constructor function
 *
 *
 */
