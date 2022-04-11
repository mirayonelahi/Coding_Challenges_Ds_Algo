const BubbleSort = (arr) => {
  var flag = false;
  for (let i = 0; i < arr.length; i++) {
    flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr;
};

console.log(BubbleSort([5, 4, 3, 2, 1]));

module.exports = BubbleSort;
