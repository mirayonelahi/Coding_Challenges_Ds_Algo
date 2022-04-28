# ES6+ revision

## map()

- takes a callback function
- returns a new array
- calls the callback function for each element in the array
- returns a new array with the results of the callback function
- we will use this a lot for mapping an array

## Set()

- for unique values we use Set()
- Set() is a new data structure that is a collection of unique values
- from an array of object get the unique values of a specific property
- to convert from set to array we use spread operator

```js
const uniqueData = [...new Set(items.map((item) => item.category))];
```

## fileter() and find()

- filter() returns a new array with the elements that pass the test implemented by the provided function
- find() returns the value of the first element in the array that satisfies the provided testing function

- using map we cant manipulate the size
- using filter we can manipulate the size by given a condition
- for find it will get the first matching element or undefined if nothin is found

## reduce()

- reduce() executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
- reduce() is a higher-order function that takes in an array and a callback function
- reduce() returns a single value after iterating through the array
- reduce() is used to perform a mathematical operation on an array
- it reduces the array to a single value of number, array or object
