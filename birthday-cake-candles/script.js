function birthdayCakeCandles(candles) {
  let max = candles[0];
  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }
  let totalCandies = candles.filter((n) => n === max).length;
  return totalCandies;
}

// Test
const totalCandles = birthdayCakeCandles([5, 3, 2, 2, 1, 3, 3, 5, 5, 5, 5, 5]);
console.log(totalCandles === 6);
