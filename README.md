# This is my coding journey of solving different coding challenges and learning data structure and algorithm

**Each chapter comes with Readme file documentation**

# Algorithm and Data Structure with JavaScript

<https://slides.com/bgando/intro-to-algorithms/#/2/3>

- time and space complexity of algorithms and data structures are important for understanding the performance of algorithms and data structures.

- constant time complexity means that the time taken to execute the algorithm is always the same. no matter how many inputs are given. O(1) is the most common constant time complexity.

- logarithmic time complexity means that the time taken to execute the algorithm is proportional to the input. O(logn) is the most common logarithmic time complexity.

- liner time complexity means that the time taken to execute the algorithm is proportional to the input. O(n) is the most common linear time complexity.

- quadratic time complexity means that the time taken to execute the algorithm is proportional to the input. O(n^2) is the most common quadratic time complexity.

- exponential time complexity means that the time taken to execute the algorithm is proportional to the input. O(2^n) is the most common exponential time complexity.

- factorial time complexity means that the time taken to execute the algorithm is proportional to the input. O(n!) is the most common factorial time complexity.

- space complexity means the amount of memory that is required to execute the algorithm.

## Native methods and js extensions

- whats the complexity of pop() in javascript?
- as its native method, it has constant time complexity.
  O(1) - why is that? because it's know the index of the specific element. like for example, if you have an array of 10 elements, and you want to delete an element at the end of the array, you can do it in constant time.

- whats the complexity of push() in javascript?
- for javascript, push() is a native method, it has constant time complexity. O(1) - why is that? because it's know the index of the specific element. like for example, if you have an array of 10 elements, and you want to add an element at the end of the array, you can do it in constant time.

- Now what about the complexity of unshift() in javascript?
- for unshift adding at the head of an array it seems like a constant complexity but its not. As when we are adding something at top here and all the positions are shifted to the right, so the time complexity is linear. O(n)

- what about map() , reduce() and filter() in javascript?
- map() and reduce() are both native methods, they have linear time complexity. O(n) - why is that? because they are iterating over the array. There is a "but" here as we are passing a callback function to all these and we have to look whats inside the callback function is passing.

- What about sort() in javascript?

-in js sort() use nLog(n) time complexity. O(nLog(n))

## Calculating time complexity

- if its inside same loop then we multiply the time complexity of the inner loop with the time complexity of the outer loop.

- O(log(n)) - loops that cuts the problem in half in each iteration.

## Space complexity

- space is the amount of memory that is required to execute the algorithm.

- checking the space complexity of an algorithm is important for understanding the performance of algorithms and data structures.

- constant space complexity means that the amount of memory required to execute the algorithm is always the same. O(1) is the most common constant space complexity.

- caching space complexity means that the amount of memory required to execute the algorithm is proportional to the input. O(n) is the most common caching space complexity.

---

- caching or breadcrumb method

- caching is a method of storing data in memory to avoid re-computation.

- memoization is a technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

- in memoization : caching hte value that a function returns for a given input.

```js
// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n * 10;

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
console.log("times10 returns:", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log("Fetching from cache:", n);
    return cache[n];
  } else {
    console.log("Calculating result");
    let result = times10(n); //90
    cache[n] = result;
    return result;
  }
};

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log("Task 2 calculated value:", memoTimes10(9)); // calculated
console.log("Task 2 cached value:", memoTimes10(9)); // cached

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
const memoizedClosure = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const memoClosureTimes10 = memoizedClosure();
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
console.log("Task 3 cached value:", memoClosureTimes10(10)); // cached

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (cb) => {
  let cache = {};
  return (n, ...args) => {
    //[9]
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = cb(n, ...args); // cb(9)
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
// console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
console.log("Task 4 cached value:", memoizedTimes10(9)); // cached
```

## Recursion in js

- Recursion is a technique that allows a function to call itself.

- Recursion is a technique that allows a function to call itself.

- Recursion is a technique that allows a function to call itself.

- ooops!! we forget to add a base case and here we were in infinite loop.

- recursion sounds simple but it is a bit tricky when it comes to think of a reclusive problem.
