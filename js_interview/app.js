// can you think of the difference between the given 2 code??

// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// for using var and let we will be having 2 different output as we know var is global scoped and let/const is block scoped

const flag = (x, y) => {
  if (x % y === 0) return x;
  let result = x + 1;
  while (result % y) {
    result++;
  }

  return result;
};

function myFunction(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    console.log(rest);
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
    console.log(rest);
  }
  return result.reverse().join(b);
}

function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}

// return the longest string from the array of string

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

// Remove a property from an object

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

//Get Intersection of two Javascript Sets
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b

function myFunction(a, b) {
  const int = new Set();
  a.forEach((el) => b.has(el) && int.add(el));
  return int;
}

const bird = {
  size: "small",
  a: "yo",
};

const mouse = {
  name: "Mickey",
  small: true,
};

const arr = ["f", "a", "s", "d", "g"];
const arr2 = [1, 2, 3, 4, 5];
const set = new Set([1, 2, 3, 4]);
const set2 = new Set([5, 3, 2, 8]);

const str = "asdafqwe";

function aa(a, b) {
  return b in a;
}
let a = "a";
let b = "a";
let obj = {};

// for(let i=0;i<arr.length;i++){
//     obj[arr[i]] = arr2[i]
// }

for (const [_, val] of Object.entries(obj)) {
  res += val;
}

const date = new Date();

let A = [...a];
let B = [...b];
