# All type of coding challenges

Swap object keys and values
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// here we can think how to iterate over an object
// one of way is use for of and using Object.entries()
// i came up with a naive idea where i will swap key and value and delete the previous key and value

```js
for (let [key, value] of Object.entries(obj1)) {
  obj1[value] = key;
  delete obj1[key];
}
```

// But there is a better solution by using array reduce
// we manipulate the object and also spread the object

```js
const newObj = Object.entries(obj1).reduce((acc, [key, val]) => {
  return { ...acc, [val]: key };
}, {});
```

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// just using a basic for loop first

```js
const isEqual = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return false;
    }
  }
  return true;
};
```

// but using set data structure form js we can do it in one line
// if we use set and spred array inside the set then if there is just one value then return true other wise return false

```js
return new Set([...arr]).size===1
,,,
```

//Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// ae we dont know the number of arguments in rest operator
// we need to show the output in one single array
// we can use a js build in method named flat

```js
const restArr = (...rest) => {
  return rest.flat();
};
```

// Add property to each object in array
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// by using map we can manipulate each object and also by not mutating the original array

```js

const addProperty(arr,str){
    return arr.map(obj=>{
        return {...obj,continent:str}
    })
}

// if we write in single line
`return arr.map((obj) => ({ ...obj, continent: str }));`

```

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
// multiply all object values by 2

```js
const multiply = (obj, num) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * num };
  }, {});
};
```

Merge two objects with matching keys

- we can destructure from object y
- we need to separate keys with named b
- and add those values in new key named d

```js
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
```

** convert any string in n pattern **

// add a character/string after every nth character

```js
const addSpace = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += "-";
    }
    result += str[i];
  }

  return result;
};
```

// check if 2 string has same characters in any arrangement

```js
const str1 = "ayon elahi";
const str2 = "elahi yona ";

const checkTwoString = (str1, str2) => {
  let arr = str1.replace(/ /g, "").split("");
  arr.sort();
  let arr2 = str2.replace(/ /g, "").split("");
  arr2.sort();
  return arr.join("") === arr2.join("");
};

console.log(checkTwoString(str1, str2)); // true
```

we can also use hashmap to solve this same problem

```js
const checkTwoStringHashMap = (str1, str2) => {
  const obj = {};

  for (let i of str1) {
    obj[i] = obj[i] + 1 || 1;
  }

  for (let i of str2) {
    if (obj[i]) {
      obj[i]--;
      if (obj[i] === 0) {
        delete obj[i];
      }
    } else return false;
  }

  return Object.values(obj).length === 0 ? true : false;
};
console.log(checkTwoStringHashMap(str1, str2)); // true
```

Lets play with .map(), .filter(), .reduce()

- map is used to iterate over an array and return a new array
- so we can use map to manipulate the array
- if we dont need to return a new array or manipulate the array then using map is anti-pattern. At time we can use for of/ forEach.

```js
// square each number in an array
const arr = [1, 2, 3, 4, 5];
const squaredArray = arr.map((num) => num * num);
```

- map doesnt change the original array or the size of the array
- if we want to manipulate and change the size of array depending on the condition then we can use .filter()

```js
// get only the positive numbers from an array
const arr = [-1, 2, 3, -4, 5];
const positiveArray = arr.filter((num) => num > 0);
```

- reduce is used to iterate over an array and return a single value
- reduce reduced to a single value
- we can chain map, filter, reduce

```js
// get the sum of all numbers in an array
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => acc + num, 0);
```

// two arrays given
// return one array with no duplicate values and sorted

```js
const app = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
};
```

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

myFunction([1, 2, 3, 4, 5, 6, 7], 2)
Expected
25
myFunction([-10, -11, -3, 1, -4], -3)
Expected
1
myFunction([78, 99, 100, 101, 401], 99)
Expected
602

```js
const app = (arr, b) => {
  let filter = arr.filter((x) => x > b);
  return filter.reduce((prev, curr) => prev + curr, 0);
};
```

we can also solve by only using reduce

```js
function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}
```
