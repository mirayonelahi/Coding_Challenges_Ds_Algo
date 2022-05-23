# My tech dictionary

# Event Loop:

# Promise

# Caching

# Callback

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
