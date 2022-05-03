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
