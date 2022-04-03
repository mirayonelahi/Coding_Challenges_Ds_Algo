/**
 * we have to select a pivot
 * we take the pivot value to where it belongs after sorting
 * we do that by partitioning 
 * 

 */

const unsortedArr = [
  31, 27, 281, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 8, 90, 2, 46, 8, 4,
];

const pivot = (arr, start) => {
  const swap = (list, a, b) => ([list[a], list[b]] = [list[b], list[a]]);

  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = pivot(arr, start);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

console.log(quickSort(unsortedArr));
