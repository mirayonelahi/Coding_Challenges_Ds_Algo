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
