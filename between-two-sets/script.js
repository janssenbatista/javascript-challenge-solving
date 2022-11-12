function getTotalX(a, b) {
  let currentNumber = a[a.length - 1];
  let factorsOfFirstArray = [];
  // Find all factors of the first array
  while (currentNumber <= b[0]) {
    let x = a.reduce((isFactor, currentAElement) => {
      return currentNumber % currentAElement === 0 && isFactor;
    }, true);
    if (x) factorsOfFirstArray.push(currentNumber);
    currentNumber++;
  }
  // Verify if the integer being considered is a factor of all elements of the second array
  let totalX = 0;
  factorsOfFirstArray.forEach((e) => {
    let x = b.reduce(
      (isFactor, currentBElement) => currentBElement % e === 0 && isFactor,
      true
    );
    if (x) totalX++;
  });
  return totalX;
}

// Test
console.log(getTotalX([2, 4], [16, 32, 96])); // should return 3
console.log(getTotalX([2, 6], [24, 36])); // should return 2
