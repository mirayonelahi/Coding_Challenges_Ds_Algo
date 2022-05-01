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

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
