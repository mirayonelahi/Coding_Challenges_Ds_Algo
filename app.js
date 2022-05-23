/**
 * Swap object keys and values
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
 */
let obj1 = {
  name: "ayon",
  age: 29,
  country: "bangladesh",
};

// for (let [key, value] of Object.entries(obj1)) {
//   obj1[value] = key;
//   delete obj1[key];
// }

const newObj = Object.entries(obj1).reduce((acc, [key, val]) => {
  return { ...acc, [val]: key };
}, {});

console.log(newObj);