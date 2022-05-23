# My tech dictionary

# var let const

- var global scope
- let block scope
- const block scope
- var can be reassigned
- hoisting in var and let

# naming variable

- be descriptive
- be meaningful
- be consistent
- camelCase
- snake_case

# Data Types

- Primitive
- string
- number
- boolean
- null
- undefined
- symbol (represents a value that is unique and immutable)

- Non-Primitive / Reference
- Object
- making a clone of an object - Object.assign()

# Scope

- global scope
- block scope

# this keyword

- can't access this in arrow functions
- by default this is bound to the global object (window)

# bind() call() apply()

- If we want to manually set the value of this to something we can use .bind.

```js
const myCar = {
  color: "red",
  logColor: function () {
    console.log(this.color);
  },
};

const unboundGetColor = myCar.logColor;
console.log(unboundGetColor());
// undefined
const boundGetColor = unboundGetColor.bind(myCar);
console.log(boundGetColor());
// red
```

Let’s go through what we just did:

First we created an Object similarly to the previous example
We set unboundGetColor equal to the method of myCar
When we try to call unboundGetColor, it tries to look for this.color, but since it gets invoked in the global context, the value of this is the Window Object. There’s no color on it, therefore we get undefined
Lastly, we use .bind to specifically tell boundGetColor that the this keyword will refer to the Object inside of the parenthesis, in this case myCar
When we call boundGetColor you can see that this time we get the result that we were looking for
There are two other methods we can use to set the value of the this keyword: .call() and .apply().

They are both similar in that both methods call a function with a given this value. The arguments they accept are a bit different.

.call() accepts a list of arguments while .apply() accepts a single array of arguments.

Look at this example using .call()

```js
function Car(make, color) {
  this.carMake = make;
  this.carColor = color;
}

function MyCar(make, color) {
  Car.call(this, make, color);
  this.age = 5;
  console.log(this);
  // MyCar { carMake: 'bmw', carColor: 'red', age: 5 }
}
const myNewCar = new MyCar("bmw", "red");
console.log(myNewCar.carMake);
// bmw
console.log(myNewCar.carColor);
// red
```

We are passing our MyCar Object inside of the .call() so that this.carMake will get set to the make that we passed as an argument of MyCar. Same for the color.

Look at this example with .apply() to see the differences between the two.

```js
function Car(make, color) {
  this.carMake = make;
  this.carColor = color;
}

function MyCar(make, color) {
  Car.apply(this, [make, color]);
  this.age = 5;
  console.log(this);
  // MyCar { carMake: 'bmw', carColor: 'red', age: 5 }
}
const myNewCar = new MyCar("bmw", "red");
console.log(myNewCar.carMake);
// bmw
console.log(myNewCar.carColor);
// red
```

As you can see, the result was the same, but in this case .apply() accepts an array with a list of arguments.

The major difference between the two comes into play when you are writing a function that does not need to know, or doesn’t know the number of arguments required. In that case, since .call() requires you to pass the arguments individually, it becomes problematic to do. The solution is to use .apply(), because you can just pass the array and it will get unpacked inside of the function, no matter how many arguments it contains.

```js
const ourFunction = function (item, method, args) {
  method.apply(item, args);
};
ourFunction(item, method, ["argument1", "argument2"]);
ourFunction(item, method, ["argument1", "argument2", "argument3"]);
```

No matter how many arguments we pass, they will get applied individually when .apply() is called.

We have now covered the basics of JavaScript. In the next chapters, we will be looking at different features of JavaScript in detail.

# Hoisting

- processed before any code is executed and lifted up to the top of their scope (whether it’s global or block).
- The main differences lie in the fact that var can still be accessed before they are defined. This causes the value to be undefined. While on the other hand, let lets the variables sit in a temporal dead zone until they are declared.

# Arrow Functions :

- explicit return ```js var greeting = () => { console.log(`hello ${name}`);
  }

```
- implicit return  `const greeting = name => `hello ${name}`; `
```

# Promises :

- we used to use callbacks to handle asynchronous code.
- callback nesting creates callback hell which is a nightmare to debug.
- Promises are a way to handle asynchronous code.

create a new promise

```js
const promise = new Promise((resolve, reject) => {});
```

- By default, the promise is in the pending state.
- The promise is in the pending state until the resolve or reject methods are called.
- The resolve method is called when the promise is fulfilled.
- The reject method is called when the promise is rejected.

```js
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("success");
  } else {
    reject("failure");
  }
  ß;
});
```

```js
promise.then((result) => {
  console.log(result);
});
```

- we can chain multiple thens on the same promise.
- we can catch errors with the catch method.
- by using then we are giving imperative instructions to the promise.

Promise.all()

- takes an array of promises and returns a promise that resolves when all the promises in the array have resolved.
- if any of the promises in the array rejects, the returned promise will also reject.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first value");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second value");
});

Promise.all([promise1, promise2]).then((data) => {
  const [promise1data, promise2data] = data;
  console.log(promise1data, promise2data);
});
// after 1000 ms
// first value second value
```

```js
const promise1 = new Promise((resolve, reject) => {
  resolve("my first value");
});
const promise2 = new Promise((resolve, reject) => {
  reject(Error("oooops error"));
});

// one of the two promises will fail, but `.all` will return only a rejection.
Promise.all([promise1, promise2])
  .then((data) => {
    const [promise1data, promise2data] = data;
    console.log(promise1data, promise2data);
  })
  .catch((err) => {
    console.log(err);
  });
// Error: oooops error
```

Promise.race()

- on the other hand returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects with the value from that promise.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first value");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "second value");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "second value"
// If we passed an empty iterable, the race would be pending forever!
```

# Some String methods:

- indexOf()

```js
const str = "this is a short sentence";
console.log(str.indexOf("short"));
// Output: 10
```

- indexOf()

```js
const str = "this is a short sentence";
console.log(str.indexOf("short"));
// Output: 10
```

- slice()

```js
const str = "pizza, orange, cereals";
console.log(str.slice(0, 5));
// Output: "pizza"
// Output: 10
```

- includes()

```js
const code = "ABCDEF";

console.log(code.includes("ABB"));
// false
console.log(code.includes("abc"));
// false, includes is case sensitive
console.log(code.includes("CDE"));
// true
```

- repeat()

```js
let hello = "Hi";
console.log(hello.repeat(10));
// "HiHiHiHiHiHiHiHiHiHi"
```

# class:

“Classes are primarily syntactic sugar over Javascript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.”

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

const alberto = new Person("Alberto", 26);
const caroline = new Person("Caroline", 26);

alberto.greet();
// Hello, my name is Alberto
caroline.greet();
// Hello, my name is Caroline
```

// now lets do this using ES6 classes

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  } // no commas in between methods
  farewell() {
    console.log("goodbye friend");
  }
}

const alberto = new Person("Alberto", 26);

alberto.greet();
// Hello, my name is Alberto and I am 26 years old
alberto.farewell();
// goodbye friend
```

Static methods #
Right now the two new methods that we created- greet() and farewell()- can be accessed by every new instance of Person, but what if we want a method that can only be accessed by the class itself, similarly to Array.of() for arrays?

The following example will throw an error:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static info() {
    console.log("I am a Person class, nice to meet you");
  }
}

const alberto = new Person("Alberto", 26);

alberto.info();
// TypeError: alberto.info is not a function
```

set and get

```js
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.nickname = "";
  }
  set nicknames(value) {
    this.nickname = value;
    console.log(this.nickname);
  }
  get nicknames() {
    console.log(`Your nickname is ${this.nickname}`);
  }
}

const alberto = new Person("Alberto", "Montalesi");

// first we call the setter
alberto.nicknames = "Albi";
// "Albi"

// then we call the getter
alberto.nicknames;
// "Your nickname is Albi"
```
