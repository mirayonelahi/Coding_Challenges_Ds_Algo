/**
 * Swap object keys and values
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
 */

// for (let [key, value] of Object.entries(obj1)) {
//   obj1[value] = key;
//   delete obj1[key];
// }

// const newObj = Object.entries(obj1).reduce((acc, [key, val]) => {
//   return { ...acc, [val]: key };
// }, {});

const arr = [1, 1, 1, 1];
const arr2 = [1, 1, 1, 1];

// const isEqual = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

const restArr = (...rest) => {
  return rest.flat();
};

let obj = [
  {
    name: "ayon",
    age: 29,
  },
  {
    name: "mir",
    age: 19,
  },
  {
    name: "lat",
    age: 9,
  },
];

let obj1 = { a: 1, b: 2, c: 3 };
function addProperty(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
// multiply all object values by 2

const multiply = (obj, num) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * num };
  }, {});
};

console.log(multiply(obj1, 3));
