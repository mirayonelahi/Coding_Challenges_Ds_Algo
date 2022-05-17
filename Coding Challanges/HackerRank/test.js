// sorted array
//remove duplicate

// const testArr = [1, 2, 3, 4, 5];
const testArr = [5, 3, 9, 1];
// const testArr = [1, 2, 3, 4, 5];

const stockSell = (arr) => {
  //globalMax
  let minIndex, maxIndex;
  let globalMax = -Infinity;
  let leftPointer = 0;

  for (let i = 1; i < arr.length; i++) {
    let curValue = arr[i];

    if (curValue < arr[leftPointer]) {
      leftPointer++;
    } else {
      let curMax = curValue - arr[leftPointer];
      globalMax = Math.max(curMax, globalMax);
      if (curMax === globalMax) {
        minIndex = leftPointer;
        maxIndex = i;
      }
    }
  }
  console.log(minIndex, maxIndex);
  return globalMax;
};

stockSell(testArr);
