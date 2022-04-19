// /**
//  * @param {number[]} numbers The array of numbers.
//  * @param {number} sum The required target sum.
//  * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
//  */
// function findTwoSum(nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const another = target - nums[i];

//     if (another in map) {
//       return [map[another], i];
//     }

//     map[nums[i]] = i;
//   }

//   return null;
// }

// const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
// console.log(indices);

// function formatDate(userDate) {
// format from M/D/YYYY to YYYYMMDD

//     const date = userDate.split('/');
//     const year = date[2];
//     let month = date[0];
//     if(month.length === 1) {
//         month = '0' + month;
//     }
//     let day = date[1];
//     if(day.length === 1) {
//         day = '0' + day;
//     }
//     return year + month + day;
// }

// console.log(formatDate("12/3/2014"));

// /**
//  * sum
//  * ----
//  * returns a Number representing the sum of all the values in the first parameter
//  * @param {[Number]} values - Array of values to sum
//  */
// const sum = (values) => {

//     return values.reduce((acc, val) => acc + val, 0);

// };

/**
 * capitalize
 * ----
 * Takes a string and capitalizes the *first letter* in the string.

 * @param {String} str - String to capitalize
 */
//skip special characters
// skip numbers
// const capitalizeFirstLetter = (str) => {
//     let firstLetter = str.charAt(0);
//    for(let i = 1; i < str.length; i++) {
//        if(str.charAt(i) === ' ') {
//            firstLetter += str.charAt(i + 1).toUpperCase();
//            i++;
//        } else {
//            firstLetter += str.charAt(i);
//        }
//    }
//     return firstLetter;
// };

// const first = () => console.log("first");

// const second = () =>
//   setTimeout(() => {
//     console.log("second");
//   }, 1000);
// const third = () => console.log("third");

// second();
// first();
// third();

//takes an array of 3D vector and returns the shortest one

// function findShortest(vectors) {
//   console.log(vectors.length);
//   let obj = {};
//   let min = Infinity;
//   for (let i = 0; i < vectors.length; i++) {
//     let firstval = vectors[i][0];
//     console.log(firstval);
//       min = Math.min(min, firstval);
//      if(min === firstval) {
//        obj[min] = vectors[i];
//      }
//   }
//   console.log(min,obj);
//   return obj[min];
// }

// var vectors = [
//   [1, 1, 1],
//   [0, 0, 0],
//   [3, 3, 3],
//   [4, 4, 4],
// ];
// var shortest = findShortest(vectors);
// console.log(shortest);
