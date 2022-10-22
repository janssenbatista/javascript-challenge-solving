function diagonalDifference(arr) {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; ) {
    for (let j = 0; j < arr.length; j++) {
      leftToRightSum += arr[i][j];
      i++;
    }
  }

  for (let i = 0; i < arr.length; ) {
    for (let j = arr.length - 1; j >= 0; j--) {
      rightToLeftSum += arr[i][j];
      i++;
    }
  }

  return Math.abs(leftToRightSum - rightToLeftSum);
}

// Test

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(arr) === 15);
console.log(diagonalDifference(arr2) === 2);
