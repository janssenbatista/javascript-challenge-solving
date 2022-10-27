function birthdayCakeCandles(candles) {
  let max = candles[0];
  let totalTallestCandles = 1;
  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      totalTallestCandles = 1;
      continue;
    }
    if (candles[i] === max) {
      totalTallestCandles++;
    }
  }
  return totalTallestCandles;
}

// Test
const totalTallestCandles = birthdayCakeCandles([
  5, 3, 11, 2, 10, 3, 3, 5, 5, 10, 5, 11,
]);
console.log(totalTallestCandles === 2);
