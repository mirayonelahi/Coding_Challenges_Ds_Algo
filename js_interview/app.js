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

// const flag = (x, y) => {
//   if (x % y === 0) return x;
//   let result = x + 1;
//   while (result % y) {
//     result++;
//   }

//   return result;
// };

// function myFunction(a, b) {
//   let result = [];
//   let rest = a;
//   while (rest.length) {
//     result.push(rest.slice(-3));
//     rest = rest.slice(0, -3);
//   }
//   return result.reverse().join(b);
// }

// function myFunction(str) {
//   const arr = [...str];
//   const correctedArray = arr.map((e) =>
//     String.fromCharCode(e.charCodeAt() + 1)
//   );
//   return correctedArray.join("");
// }

// // return the longest string from the array of string

// function myFunction(arr) {
//   return arr.reduce((a, b) => (a.length <= b.length ? b : a));
// }

// Remove a property from an object

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// function myFunction(obj) {
//   const { b, ...rest } = obj;
//   return rest;
// }

//Get Intersection of two Javascript Sets
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b

// function myFunction(a, b) {
//   const int = new Set();
//   a.forEach((el) => b.has(el) && int.add(el));
//   return int;
// }

// const bird = {
//   size: "small",
//   a: "yo",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// const arr = ["f", "a", "s", "d", "g"];
// const arr2 = [1, 2, 3, 4, 5];
// const set = new Set([1, 2, 3, 4]);
// const set2 = new Set([5, 3, 2, 8]);

// const str = "asdafqwe";

// function aa(a, b) {
//   return b in a;
// }
// let a = "a";
// let b = "a";

// for(let i=0;i<arr.length;i++){
//     obj[arr[i]] = arr2[i]
// }

// for (const [_, val] of Object.entries(obj)) {
//   res += val;
// }

// const date = new Date();

// const myCar = {
//   color: "red",
//   logColor: function () {
//     console.log(this.color);
//   },
// };

// const promise = new Promise((resolve, reject) => {
//   resolve("success");
// });

// console.log(
//   promise.then((res) => {
//     console.log(res);
//   })
// );

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const ayon = new Person("ayon", 23);

// Person.prototype.sayName = function () {
//   console.log(`My name is ${this.name}`);
// };

// ayon.sayName();
// const mir = new Person("mir", 23);
// mir.sayName();

// const testObj = { a: "", b: "b", c: " ", d: "d" };

// for (let [key, val] of Object.entries(testObj)) {
//   if (testObj[key].trim() === "") {
//     testObj[key] = null;
//   }
// }

// console.log(testObj);

// let obj = { fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 };

// const { fn, ln, size, weight } = obj;
// const test1 = {
//   fn,
//   ln,
//   size,
//   weight,
//   size: size + "cm",
//   weight: weight + "kg",
// };

// const test2 = {
//   fn: obj.fn,
//   ln: obj.ln,
//   ...(obj.size && { size: `${obj.size}cm` }),
//   ...(obj.weight && { weight: `${obj.weight}kg` }),
// };

// a string is given

// add a space after every n character

// const addSpace = (str) => {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       result += "-";
//     }
//     result += str[i];
//   }

//   return result;
// };

// console.log(addSpace(str));

// now add space from end of the string

// let str = "1234567";
// const addSpaceBack = (str) => {
//   let arr = str.split("");
//   let result = "";

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 3 === 0 && i !== arr.length - 1) {
//       result += " ";
//     }
//     result += arr[i];
//   }

//   return result.split("").reverse().join("");
// };

// console.log(addSpaceBack(str));

// console.log(4 === 4.0);
// const str1 = "ayon elahi";
// const str2 = "elahi yona";

// const checkTwoString = (str1, str2) => {
//   let arr = str1.replace(/ /g, "").split("");
//   arr.sort();
//   let arr2 = str2.replace(/ /g, "").split("");
//   arr2.sort();
//   return arr.join("") === arr2.join("");
// };

// const checkTwoStringHashMap = (str1, str2) => {
//   const obj = {};

//   for (let i of str1) {
//     obj[i] = obj[i] + 1 || 1;
//   }

//   for (let i of str2) {
//     if (obj[i]) {
//       obj[i]--;
//       if (obj[i] === 0) {
//         delete obj[i];
//       }
//     } else return false;
//   }

//   return Object.values(obj).length === 0 ? true : false;
// };

// const objectSort = (obj) => {
//   return obj.sort((x, y) => x.b - y.b);
// };

// console.log(
//   objectSort([
//     { a: 2, b: 10 },
//     { a: 5, b: 4 },
//   ])
// );

// const arr1 = [1, 2, 3, 4, 7];
// const arr2 = [2, 5, 6, 7];

// const app = (arr, b) => {
//   let filter = arr.filter((x) => x > b);
//   return filter.reduce((prev, curr) => prev + curr, 0);
// };

// const arr = ["Arif", "Alif", "Ben"];

// const app = (arr) => {
//   let obj = {};
//   for (let i of arr) {
//     let first = i[0].toLowerCase();
//     if (obj[first] !== undefined) {
//       obj[first] = [...obj[first], i];
//     } else {
//       obj[first] = [i];
//     }
//   }
//   return obj;
// };

// function myFunction(arr) {
//   return arr.reduce((acc, cur) => {
//     const firstLetter = cur.toLowerCase().charAt(0);
//     return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
//   }, {});
// }

// function myFunction(arr, num) {
//   return [...(num > 5 ? [num] : [0]), ...arr];
// }

// const people = [1, 2, 3, 4];

// const showPeople = async (arr) => arr.map((x) => x);

// console.log(typeof showPeople);

// console.log(showPeople(people));

// console.log(true && false);
// console.log(false || true);

// const app = (arr) => {
//   let obj = {};
//   for (let i of arr) {
//     if (obj[i] !== undefined) {
//       obj[i]++;
//     } else {
//       obj[i] = 1;
//     }
//   }
//   return Object.keys(obj).find((key) => obj[key] % 2 !== 0);
// };

const longestWord = (str) => {
  let longestCount = -Infinity;

  str = str.split(" ");

  for (let i of str) {
    longestCount = Math.max(longestCount, i.length);
  }

  return longestCount;
};

console.log(longestWord("hi my name is mir Ayon Elahi"));
