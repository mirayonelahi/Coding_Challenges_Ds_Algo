/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  let flag = path[0];
  let counter = 0;
  let output = 0;
  for (let i = 0; i < path.length; i++) {
    let curr = path[i];

    if (curr === "D") {
      counter--;
    } else if (curr === "U") {
      counter++;
    }
    if (counter === 0 && flag === "D") {
      output++;
      flag = path[i + 1];
    } else if (counter === 0) {
      flag = path[i + 1];
    }
  }

  return output;
}

function superReducedString(s) {
  let arr = s.split("");
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);

      //here is the gotchaaa!! why not i-- / i-=1
      i = -1;
    }
  }
  return arr;
}

// strong password

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let numbers = "0123456789".split("");
  let lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let special_characters = "!@#$%^&*()-+".split("");

  let count = 4;
  let hasNumber = true;
  let hasLower = true;
  let hasUper = true;
  let hasSpecia = true;

  for (let i of password) {
    if (numbers.includes(i) && hasNumber) {
      count--;
      hasNumber = false;
    }
    if (lower_case.includes(i) && hasLower) {
      count--;
      hasLower = false;
    }
    if (upper_case.includes(i) && hasUper) {
      count--;
      hasUper = false;
    }
    if (special_characters.includes(i) && hasSpecia) {
      count--;
      hasSpecia = false;
    }
  }

  if (n + count < 6) return 6 - n;

  return count;
}

console.log(minimumNumber(3, "AB1"));
