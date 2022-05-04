const repeatStr = (str, n) => {
  let countA = str.split("").filter((a) => a === "a").length;

  const count = Math.trunc(n / str.length);
  const fraction = n % str.length;
  const strr = str.slice(0, fraction);
  let countA2 = strr.split("").filter((a) => a === "a").length;
  console.log(strr, countA2);

  return count * countA + countA2;
};

function rotLeft(a, d) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    let val = a.shift();
    a.push(val);
  }
  return a;
}

function jumpingOnClouds(c) {
  // Write your code here
  let i = 0;
  let count = 0;
  while (i < c.length - 1) {
    if (i + 2 == c.length || c[i + 2] == 1) {
      count++;
      i++;
    } else {
      count++;
      i += 2;
    }
  }

  return count;
}

//new year chaos

function minimumBribes(q) {
  let count = 0;
  let flag = 1;
  for (let i = 0; i < q.length; i++) {
    let curr = q[i];
    flag = 1;
    if (curr <= i + 1) continue;

    let diff = curr - (i + 1);
    if (diff > 2) {
      console.log("Too chaotic");
      flag = 0;
      break;
    }
    count += diff;
  }
  if (flag) console.log(count);
}

function birthdayCakeCandles(candles) {
  // Write your code here
  //3,3,2,1
  candles.sort((a, b) => b - a);
  let count = 1;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == candles[i + 1]) {
      count++;
    } else if (candles[i] !== candles[i + 1]) {
      break;
    }
  }
  return count;
}

function checkMagazine(magazine, note) {
  // Write your code here
  magazine = magazine.split(" ");
  note = note.split(" ");
  const obj = {};

  for (let i of magazine) {
    obj[i] = obj[i] + 1 || 1;
  }

  for (let i of note) {
    if (obj[i] == undefined) {
      console.log("No");
      return;
    }
    obj[i]--;

    if (obj[i] === 0) {
      delete obj[i];
    }
  }

  console.log("Yes");
}

function makeAnagram(a, b) {
  // Write your code here

  const obj = {};

  let totalCount = a.length + b.length;

  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = obj[a[i]] + 1 || 1;
  }

  for (let i = 0; i < b.length; i++) {
    if (obj[b[i]] !== undefined) {
      if (obj[b[i]] > 1) obj[b[i]]--;
      else delete obj[b[i]];
      totalCount -= 2;
    }
  }

  return totalCount;
}

function alternatingCharacters(s) {
  // Write your code here
  let deleteCount = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s.splice(i + 1, 1);
      deleteCount++;
      i--;
    }
  }

  return deleteCount;
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here

  for (let i = 0; i < grades.length; i++) {
    let curr = grades[i];
    if (curr < 38) {
      continue;
    } else {
      let val = curr % 5;
      console.log(val);
      if (val === 3 || val === 4) {
        if (val === 4) {
          grades[i] = grades[i] + 1;
        }
        if (val === 3) {
          grades[i] = grades[i] + 2;
        }
      }
    }
  }
  return grades;
}

const obj = {
  valid: true,
};

// async func always returns promise
const check = async () => {
  return obj.valid === true;
};

console.log(check());
