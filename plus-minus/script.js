function plusMinus(arr) {
  let totalPositiveNumbers = 0;
  let totalNegativeNumbers = 0;
  let totalZeroNumbers = 0;
  arr.forEach((number) => {
    if (number < 0) {
      totalNegativeNumbers++;
    } else if (number > 0) {
      totalPositiveNumbers++;
    } else {
      totalZeroNumbers++;
    }
  });
  console.log((totalPositiveNumbers / arr.length).toFixed(6));
  console.log((totalNegativeNumbers / arr.length).toFixed(6));
  console.log((totalZeroNumbers / arr.length).toFixed(6));
}

// Test
plusMinus([-1, -1, 0, 1, 1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
