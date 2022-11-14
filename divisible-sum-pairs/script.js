function divisibleSumPairs(n, k, ar) {
  let numOfPairs = 0;
  let pointer = 1;
  for (let index = 0; index < ar.length; index++, pointer = index + 1) {
    while (pointer <= ar.length) {
      if ((ar[index] + ar[pointer]) % k === 0) {
        numOfPairs++;
      }
      pointer++;
    }
  }
  return numOfPairs;
}

// Test
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // should print 5
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); // should print 3
