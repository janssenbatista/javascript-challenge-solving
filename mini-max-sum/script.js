function minMaxSum(arr) {
  let counter = 0;
  let minSum = Number.MAX_SAFE_INTEGER;
  let minSumTemp = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxSumTemp = 0;
  while (counter < arr.length) {
    for (let index = 0; index < arr.length; index++) {
      if (counter === index) {
        continue;
      }
      minSumTemp += arr[index];
    }
    if (minSumTemp < minSum) {
      minSum = minSumTemp;
    }
    minSumTemp = 0;
    counter++;
  }
  counter = 0;
  while (counter < arr.length) {
    for (let index = 0; index < arr.length; index++) {
      if (counter === index) {
        continue;
      }
      maxSumTemp += arr[index];
    }
    if (maxSumTemp > maxSum) {
      maxSum = maxSumTemp;
    }
    maxSumTemp = 0;
    counter++;
  }
  console.log(minSum, maxSum);
}

// Test
minMaxSum([1, 2, 3, 4, 5]);
minMaxSum([1, 3, 5, 7, 9]);
