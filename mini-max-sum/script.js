function minMaxSum(arr) {
  arr.sort();
  let minSum = arr.slice(0, arr.length - 1).reduce((n1, n2) => n1 + n2, 0);
  let maxSum = arr.slice(1, arr.length).reduce((n1, n2) => n1 + n2, 0);
  console.log(minSum, maxSum);
}

// Test
minMaxSum([1, 2, 3, 4, 5]); // should print: 10 14
minMaxSum([1, 3, 5, 7, 9]); // should print: 16 24
