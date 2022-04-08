# This is my coding journey of solving different coding challenges and learning data structure and algorithm.

**Each chapter comes with Readme file documentation**

# Algorithm and Data Structure with JavaScript

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
